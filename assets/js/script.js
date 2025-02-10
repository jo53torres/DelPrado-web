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

    // Agregar animaciones cuando los elementos entren en el viewport
    const animatedElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Desplegar contenido en los pasos
    const stepTitles = document.querySelectorAll('.step-title');
    stepTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
            content.style.transition = "max-height 0.3s ease-in-out";
        });
    });

    // Carrusel de servicios
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselContent = document.querySelector('.carousel-content');
    const arrowLeft = document.querySelector('.carousel-arrow-left');
    const arrowRight = document.querySelector('.carousel-arrow-right');
    const steps = document.querySelectorAll('.step');
    const stepWidth = steps[0].offsetWidth + 20; // Ancho de un paso + gap
    let currentIndex = 0;
    let autoScrollInterval;

    // Función para mover el carrusel
    function moveCarousel(index) {
        const offset = -index * stepWidth;
        carouselContent.style.transform = `translateX(${offset}px)`;
    }

    // Flecha izquierda
    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : steps.length - 1;
        moveCarousel(currentIndex);
        resetAutoScroll(); // Reinicia el intervalo al interactuar manualmente
    });

    // Flecha derecha
    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex < steps.length - 1) ? currentIndex + 1 : 0;
        moveCarousel(currentIndex);
        resetAutoScroll(); // Reinicia el intervalo al interactuar manualmente
    });

    // Función para el desplazamiento automático
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex < steps.length - 1) ? currentIndex + 1 : 0;
            moveCarousel(currentIndex);
        }, 3000); // Cambia cada 3 segundos
    }

    // Reinicia el intervalo de desplazamiento automático
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }

    // Inicia el desplazamiento automático al cargar la página
    startAutoScroll();

    // Detiene el desplazamiento automático cuando el mouse está sobre el carrusel
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    // Reanuda el desplazamiento automático cuando el mouse sale del carrusel
    carouselContainer.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

    // Ajustar el carrusel al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        stepWidth = steps[0].offsetWidth + 20; // Recalcula el ancho del paso
        moveCarousel(currentIndex); // Ajusta el carrusel al nuevo ancho
    });

    // Validación del formulario de contacto
    const contactoForm = document.querySelector('.contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', function (event) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!nombre || !email || !mensaje) {
                event.preventDefault();
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});