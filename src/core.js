if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {
        scope: '/'
    }).then(function(registration) {}).catch(function(err) {});
    navigator.serviceWorker.ready.then(function(registration) {});
}