const videos = [
  './video/video1.mp4',
  './video/video2.mp4',
  './video/video3.mp4',
  './video/video4.mp4',
  // añade más rutas si lo necesitas
];

let currentVideo = 0;

function changeVideo() {
  const videoElement = document.querySelector('#background-video');
  videoElement.src = videos[currentVideo];
  videoElement.load();
  videoElement.play();
  currentVideo = (currentVideo + 1) % videos.length;
}

// Llamar a changeVideo una vez para iniciar la reproducción del primer vídeo inmediatamente
changeVideo();

// Luego comenzar a cambiar los vídeos cada 4 segundos
setInterval(changeVideo, 4000);
