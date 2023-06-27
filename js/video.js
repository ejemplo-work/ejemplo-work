
const videos = [
    './video/portada.mp4',
    './video/workshop.mp4',
    './video/detailing.mp4',
    './video/racing.mp4',
];

let currentVideo = 0;

/* Código sin cambios aquí... */

function changeVideo() {
    const videoElement = document.querySelector('#background-video');
    videoElement.src = videos[currentVideo];
    videoElement.load();
    videoElement.play();

    // Desactiva la clase "active" para todos los círculos
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.classList.remove('active');
        circle.style.width = '8px';  /* tamaño más pequeño para círculos no activos */
        circle.style.height = '8px';  /* tamaño más pequeño para círculos no activos */
    });

    // Activa la clase "active" para el círculo correspondiente al vídeo actual
    const currentCircle = document.querySelector(`#circle${currentVideo + 1}`);
    currentCircle.classList.add('active');
    currentCircle.style.width = '24px';  /* tamaño más grande para círculos activos */
    currentCircle.style.height = '24px';  /* tamaño más grande para círculos activos */

/* Resto del código sin cambios aquí... */


    
    // Prepara el siguiente video
    currentVideo = (currentVideo + 1) % videos.length;
}

function selectVideo(index) {
    currentVideo = index;
    changeVideo();
    // No es necesario incrementar currentVideo aquí ya que lo hacemos en changeVideo()
    
    clearInterval(intervalId);  // Para el intervalo de cambio automático
    intervalId = setInterval(changeVideo, 10000);  // Inicia un nuevo intervalo de cambio automático
}

// Llama a changeVideo una vez para iniciar la reproducción del primer vídeo inmediatamente
changeVideo();

// Luego comienza a cambiar los vídeos cada 10 segundos
let intervalId = setInterval(changeVideo, 10000);


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

//Transición Logo

function changeVideo() {
    // Muestra el contenedor de transición
    const transitionContainer = document.querySelector('#transition-container');
    const logo = document.querySelector('#logo');
    transitionContainer.classList.add('visible');
    logo.classList.add('large');
    
    // Espera 1 segundo antes de cambiar el vídeo y ocultar el contenedor de transición
    setTimeout(function() {
        // Cambia el vídeo
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

        // Oculta el contenedor de transición y reduce el tamaño del logo
        transitionContainer.classList.remove('visible');
        logo.classList.remove('large');
    }, 1000);
}


