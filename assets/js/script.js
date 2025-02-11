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
    const carouselContent = document.querySelector(".carousel-content");
    const steps = document.querySelectorAll(".step");
    const arrowLeft = document.querySelector(".carousel-arrow-left");
    const arrowRight = document.querySelector(".carousel-arrow-right");

    let currentIndex = 0;
    const stepWidth = steps[0].offsetWidth + 20; // Ancho de cada paso + gap
    const totalSteps = steps.length;

    // Función para mover el carrusel
    function moveCarousel(direction) {
        if (direction === "left") {
            currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
        } else if (direction === "right") {
            currentIndex = (currentIndex + 1) % totalSteps;
        }

        // Calcula el desplazamiento
        const offset = -currentIndex * stepWidth;
        carouselContent.style.transform = `translateX(${offset}px)`;
    }

    // Eventos para las flechas
    arrowLeft.addEventListener("click", () => moveCarousel("left"));
    arrowRight.addEventListener("click", () => moveCarousel("right"));

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
// assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    mobileMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
