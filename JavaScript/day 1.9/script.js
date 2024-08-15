let currentSlide = 0;
const images = ['/fotoes/foto3.jpg', '/fotoes/foto4.jpg', '/fotoes/foto5.jpg','/fotoes/foto6.jpg','/fotoes/foto7.png','/fotoes/foto8.jpg']; // Replace with your images

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    document.getElementById('slider').src = images[currentSlide];
}
