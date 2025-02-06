// Script para animaciones y efectos avanzados
document.addEventListener("DOMContentLoaded", function() {
    // Efecto de desplazamiento suave para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Agregar animaciones a los elementos cuando entren en el viewport
    const animatedElements = document.querySelectorAll('.animate');
    window.addEventListener('scroll', checkAnimation);

    function checkAnimation() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            } else {
                element.classList.remove('animated');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Desplegar contenido en los pasos
    const stepTitles = document.querySelectorAll('.step-title');
    stepTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
            content.style.transition = "max-height 0.3s ease-in-out";
        });
    });

    // Carrusel: Desplazamiento suave y dinámico
    const content = document.querySelector(".carousel-content");
    const items = Array.from(content.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        content.appendChild(clone);
    });

    let scrollValue = 0;
    function infiniteScroll() {
        scrollValue += 1;
        if (scrollValue >= content.scrollWidth / 2) {
            scrollValue = 0;
        }
        content.scrollLeft = scrollValue;
        requestAnimationFrame(infiniteScroll);
    }
    infiniteScroll();
});
