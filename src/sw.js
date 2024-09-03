//cache container
const CACHE_VERSION = 1;
const CACHE_NAME = 'cache-v' + CACHE_VERSION;

//resources
const URL_OFFLINE = 'offline.html';
const URL_START = 'start.html';

//install
self.addEventListener('install', (event) => {
    event.waitUntil(
        (async() => {
            const cache = await caches.open(CACHE_NAME);
            await Promise.all([
                cache.add(new Request(URL_OFFLINE, { cache: 'reload' })),
                cache.add(new Request(URL_START, { cache: 'reload' }))
            ]);
        })()
    );

    //force the waiting service worker to become the active service worker
    self.skipWaiting();
});

//activate
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async() => {
            //enable navigation preload if it is supported.
            //https://developers.google.com/web/updates/2017/02/navigation-preload
            if ('navigationPreload' in self.registration) {
                await self.registration.navigationPreload.enable();
            }
        })()
    );

    //tell the active service worker to take control of the page immediately
    self.clients.claim();
});

//fetch
self.addEventListener('fetch', (event) => {
    //we only want to call event.respondWith() if this is a navigation request for an HTML page
    if (event.request.mode === 'navigate') {
        event.respondWith((async() => {
            try {
                //first, try to use the navigation preload response if it's supported
                const preload_response = await event.preload_response;
                if (preload_response) {
                    return preload_response;
                }

                //always try the network first
                const network_response = await fetch(event.request);
                return network_response;
            } catch (error) {
                //catch is only triggered if an exception is thrown, which is likely due to a network error
                const cache = await caches.open(CACHE_NAME);
                if (event.request.url.includes(URL_START)) {
                    return await cache.match(URL_START);
                }
                return await cache.match(URL_OFFLINE);
            }
        })());
    }
});