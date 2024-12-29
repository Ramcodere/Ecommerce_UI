let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;

    currentIndex += direction;

    // Wrap around to the first slide if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
