let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos