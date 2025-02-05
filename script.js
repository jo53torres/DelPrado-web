// Script para animaciones y efectos avanzados
document.addEventListener("DOMContentLoaded", function() {
    // Agregar efectos de desplazamiento suave para los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Agregar animaciones a los elementos al hacer scroll
    const animatedElements = document.querySelectorAll('.animate');
    window.addEventListener('scroll', checkAnimation);

    function checkAnimation() {
        for (const element of animatedElements) {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            } else {
                element.classList.remove('animated');
            }
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Manejo de clic en los títulos de pasos para desplegar/ocultar contenido
    const stepTitles = document.querySelectorAll('.step-title');

    stepTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
