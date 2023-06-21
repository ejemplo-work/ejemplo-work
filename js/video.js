const videos = [
    './video/video1.mp4',
    './video/video2.mp4',
    './video/video3.mp4',
    './video/video4.mp4',
];

let currentVideo = 0;

function changeVideo() {
    const videoElement = document.querySelector('#background-video');
    videoElement.src = videos[currentVideo];
    videoElement.load();
    videoElement.play();

    // Desactiva la clase "active" para todos los círculos
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => circle.classList.remove('active'));

    // Activa la clase "active" para el círculo correspondiente al vídeo actual
    const currentCircle = document.querySelector(`#circle${currentVideo + 1}`);
    currentCircle.classList.add('active');
    
    // Prepara el siguiente video
    currentVideo = (currentVideo + 1) % videos.length;
}

function selectVideo(index) {
    currentVideo = index;
    changeVideo();
    // No es necesario incrementar currentVideo aquí ya que lo hacemos en changeVideo()
    
    clearInterval(intervalId);  // Para el intervalo de cambio automático
    intervalId = setInterval(changeVideo, 4000);  // Inicia un nuevo intervalo de cambio automático
}

// Llama a changeVideo una vez para iniciar la reproducción del primer vídeo inmediatamente
changeVideo();

// Luego comienza a cambiar los vídeos cada 4 segundos
let intervalId = setInterval(changeVideo, 4000);


//Toggler

let menuOpen = false;  // variable para rastrear si el menú está abierto o no

document.getElementById("navbar-toggler-icon").addEventListener('click', function () {
    // este es el camino a tus dos imágenes, asegúrate de que son correctos
    let closedMenuImg = './img/menu.png';
    let openMenuImg = './img/exit.png';

    if (!menuOpen) {
        this.src = openMenuImg;
        menuOpen = true;
    } else {
        this.src = closedMenuImg;
        menuOpen = false;
    }
});

