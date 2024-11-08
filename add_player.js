function loadVideo() {
    const video = document.createElement('video');
    video.id = 'meeting_surfer_div';
    video.muted = true;

    video.src = 'http://localhost:8080/video/stream';
    // video.src = 'http://localhost:8080/video/stream';
    video.style.position = 'fixed';
    video.style.right = '0';
    video.style.bottom = '0';
    video.style.zIndex = '1000'; // Устанавливаем z-index для того, чтобы картинка была поверх других элементов
    video.style.width = '20%'
    video.style.height = 'auto'

    document.body.appendChild(video);

    video.addEventListener('ended', function() {
        video.load(); // Load the video again
        video.play();
    });
    video.load();
    video.play();
}

loadVideo()
