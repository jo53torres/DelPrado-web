document.addEventListener("DOMContentLoaded", function () {
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
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
            content.style.transition = "max-height 0.3s ease-in-out";
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselContent = document.querySelector('.carousel-content');
        const arrowLeft = document.querySelector('.carousel-arrow-left');
        const arrowRight = document.querySelector('.carousel-arrow-right');
    
        if (carouselContainer && carouselContent && arrowLeft && arrowRight) {
            const stepWidth = carouselContent.querySelector('.step').offsetWidth + 20; // Ancho de un paso + gap
            let scrollAmount = 0;
    
            // Flecha izquierda
            arrowLeft.addEventListener('click', () => {
                scrollAmount = Math.max(scrollAmount - stepWidth, 0); // No permite scroll negativo
                carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
                console.log("Desplazamiento izquierdo:", scrollAmount); // Depuración
            });
    
            // Flecha derecha
            arrowRight.addEventListener('click', () => {
                const maxScroll = carouselContent.scrollWidth - carouselContainer.offsetWidth;
                scrollAmount = Math.min(scrollAmount + stepWidth, maxScroll); // No permite sobrepasar el máximo
                carouselContent.style.transform = `translateX(-${scrollAmount}px)`;
                console.log("Desplazamiento derecho:", scrollAmount); // Depuración
            });
        }
    });