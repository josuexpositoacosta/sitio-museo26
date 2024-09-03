// Configura la configuración de la API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Variables para almacenar los videos
var mainVideo = document.querySelector('.main-video video');
var title = document.querySelector('.main-video .title');
var listVideo = [];

// Función de inicialización de la API de YouTube
function onYouTubeIframeAPIReady() {
    gapi.load('client', function() {
        gapi.client.load('youtube', 'v3', function() {
            // Obtiene los videos del canal utilizando la API de YouTube
            var request = gapi.client.youtube.playlistItems.list({
                part: 'snippet',
                playlistId: 'PL1ppnbLujiallPXI59hOiGOSGHuOLQn81',
                maxResults: 10
            });

            request.execute(function(response) {
                if (response.result && response.result.items) {
                    var videos = response.result.items;

                    // Recorre los videos y agrega elementos a la lista de videos
                    videos.forEach(function(video) {
                        var videoId = video.snippet.resourceId.videoId;
                        var videoTitle = video.snippet.title;
                        var videoThumbnail = video.snippet.thumbnails.default.url;

                        var videoElement = document.createElement('div');
                        videoElement.classList.add('vid');
                        videoElement.innerHTML = '<img src="' + videoThumbnail + '"><h3>' + videoTitle + '</h3>';

                        videoElement.onclick = function() {
                            listVideo.forEach(function(vid) {
                                vid.classList.remove('active');
                            });
                            videoElement.classList.add('active');

                            mainVideo.src = 'https://www.youtube.com/embed/' + videoId;
                            title.innerHTML = videoTitle;
                        };

                        listVideo.push(videoElement);
                        document.getElementById('video-list').appendChild(videoElement);
                    });
                }
            });
        });
    });
}