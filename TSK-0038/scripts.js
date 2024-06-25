// scripts.js

document.addEventListener('scroll', function() {
    const scrollSection = document.querySelector('.scroll-section');
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > scrollSection.offsetTop + 100) {
        scrollSection.classList.add('visible');
    }
});
