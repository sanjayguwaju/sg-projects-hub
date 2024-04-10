const slides = document.getElementById('slides');
let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('nextBtn').onclick = () => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

document.getElementById('prevBtn').onclick = () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};