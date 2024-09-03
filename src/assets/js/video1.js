/*jshint esversion: 6 */
var listVideo = null;

if (document.querySelectorAll('.video-list .vid').item !== null) {
    // Aquí puedes utilizar el método 'querySelectorAll' y acceder a las propiedades necesarias
    listVideo = document.querySelectorAll('.video-list .vid');
} else {
    console.log('El objeto es nulo. Verifica que esté correctamente definido.');
}

var mainVideo = document.querySelector('.main-video video');
var title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
    };
});