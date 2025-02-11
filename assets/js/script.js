document.addEventListener("DOMContentLoaded", function () {
    // Efecto de desplazamiento suave para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animaciones cuando los elementos entran en el viewport
    const animatedElements = document.querySelectorAll('.animate');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('animated', entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Desplegar contenido en los pasos (evita errores si no hay elementos)
    const stepTitles = document.querySelectorAll('.step-title');
    stepTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content) {
                content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
                content.style.transition = "max-height 0.3s ease-in-out";
            }
        });
    });

    // Carrusel de servicios
    const carouselContent = document.querySelector(".carousel-content");
    const steps = document.querySelectorAll(".step");
    const arrowLeft = document.querySelector(".carousel-arrow-left");
    const arrowRight = document.querySelector(".carousel-arrow-right");
    const carouselContainer = document.querySelector(".carousel-container");

    if (carouselContent && steps.length > 0 && arrowLeft && arrowRight && carouselContainer) {
        let currentIndex = 0;
        let stepWidth = steps[0].offsetWidth + 20; // Ancho de cada paso + gap
        const totalSteps = steps.length;
        let autoScrollInterval;

        function moveCarousel(direction) {
            if (direction === "left") {
                currentIndex = (currentIndex - 1 + totalSteps) % totalSteps;
            } else if (direction === "right") {
                currentIndex = (currentIndex + 1) % totalSteps;
            }

            // Aplicar desplazamiento
            const offset = -currentIndex * stepWidth;
            carouselContent.style.transform = `translateX(${offset}px)`;
        }

        // Eventos de las flechas
        arrowLeft.addEventListener("click", () => {
            moveCarousel("left");
            resetAutoScroll();
        });

        arrowRight.addEventListener("click", () => {
            moveCarousel("right");
            resetAutoScroll();
        });

        // Desplazamiento automático del carrusel
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                moveCarousel("right");
            }, 3000); // Cada 3 segundos
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        }

        startAutoScroll();

        // Detener auto scroll cuando el mouse está sobre el carrusel
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            startAutoScroll();
        });

        // Ajustar el carrusel al cambiar el tamaño de la ventana
        window.addEventListener('resize', () => {
            stepWidth = steps[0].offsetWidth + 20; // Recalcula el ancho del paso
            moveCarousel(currentIndex);
        });
    }

    // Validación del formulario de contacto
    const contactoForm = document.querySelector('.contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', function (event) {
            const nombre = document.getElementById('nombre')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const mensaje = document.getElementById('mensaje')?.value.trim();

            if (!nombre || !email || !mensaje) {
                event.preventDefault();
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Menú móvil
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    if (mobileMenu && menu) {
        mobileMenu.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }
});
