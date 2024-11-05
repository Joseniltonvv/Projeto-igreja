let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

// Função para atualizar o slide
function updateSlide() {
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transition = 'transform 0.3s ease-in-out';
    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Função para ir para o slide anterior
document.getElementById('prev').addEventListener('click', function() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = totalSlides - 1; // Vai para o último slide
    updateSlide();
});

// Função para ir para o próximo slide
document.getElementById('next').addEventListener('click', function() {
    slideIndex++;
    if (slideIndex >= totalSlides) slideIndex = 0; // Vai para o primeiro slide
    updateSlide();
});
