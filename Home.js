const slider = document.querySelector('.slider');
const opinions = document.querySelectorAll('.opinion');
const totalOpinions = opinions.length;
let currentIndex = 0;

function showNextOpinion() {
    currentIndex = (currentIndex + 1) % totalOpinions;
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}
setInterval(showNextOpinion, 3000);
//Para que se mueva el slider



const sliderSidebar = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.info-slide');
const totalSlides = slides.length;
let currentSlideIndex = 0;

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    const offset = -currentSlideIndex * 100;
    sliderSidebar.style.transform = `translateX(${offset}%)`;
}
setInterval(showNextSlide, 8000);
//Para que se mueva el slider-sidebar



window.onload = function () {
    var message = document.getElementById('welcomeMessage');
    message.style.display = 'block';
}

function closeWelcomeMessage() {
    var message = document.getElementById('welcomeMessage');
    message.style.display = 'none';
}


// Nuevo
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");

    // Mostrar el mensaje al cargar la página
    setTimeout(() => {
        welcomeMessage.style.animation = "slideIn 0.8s forwards";
    }, 500); // Pequeño retraso para hacerlo más fluido

    // Cerrar automáticamente después de 5 segundos
    setTimeout(() => {
        closeWelcomeMessage();
    }, 5000);
});

function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcomeMessage");

    // Cambiar la animación a salida por la derecha
    welcomeMessage.style.animation = "slideOut 0.8s forwards";

    // Después de la animación, ocultar el mensaje
    setTimeout(() => {
        welcomeMessage.style.display = "none";
    }, 800); // Duración de la animación
}