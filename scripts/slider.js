let currentSlide = 0;
const slides = document.querySelectorAll("#banner .slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Початковий показ
showSlide(currentSlide);

// Автоматичне переключення кожні 5 секунд
setInterval(nextSlide, 5000);
