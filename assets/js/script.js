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

            // Cerrar el menú móvil después de hacer clic en un enlace
            const menu = document.querySelector(".menu");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
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

        // Función para mover el carrusel
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

        // Funcionalidad de desplazamiento táctil
        let isDragging = false;
        let startX, scrollLeft;

        // Eventos para el arrastre con el mouse
        carouselContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
        });

        carouselContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselContainer.offsetLeft;
            const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
            carouselContainer.scrollLeft = scrollLeft - walk;
        });

        carouselContainer.addEventListener('mouseup', () => {
            isDragging = false;
        });

        carouselContainer.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        // Eventos táctiles para dispositivos móviles
        carouselContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
        });

        carouselContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.touches[0].pageX - carouselContainer.offsetLeft;
            const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
            carouselContainer.scrollLeft = scrollLeft - walk;
        });

        carouselContainer.addEventListener('touchend', () => {
            isDragging = false;
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

        // Cerrar el menú al hacer clic en un enlace
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains("active")) {
                    menu.classList.remove("active");
                }
            });
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del banner y popup
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const rejectCookiesButton = document.getElementById("reject-cookies");
    const openPolicyLink = document.getElementById("open-cookie-policy");
    const cookiePolicyPopup = document.getElementById("cookie-policy-popup");
    const closePopupButton = document.getElementById("close-popup");
    const cookiePolicyContent = document.getElementById("cookie-policy-content");

    // Verificar si el usuario ya ha dado su consentimiento
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieBanner.classList.remove("hidden"); // Mostrar el banner si no se ha aceptado
    }

    // Función para aceptar cookies
    acceptCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); // Guardar la preferencia en localStorage
        cookieBanner.classList.add("hidden"); // Ocultar el banner
    });

    // Función para rechazar cookies
    rejectCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "false"); // Guardar la preferencia en localStorage
        cookieBanner.classList.add("hidden"); // Ocultar el banner
    });

    // Abrir el popup de la política de cookies
    openPolicyLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir el enlace predeterminado
        cookiePolicyPopup.classList.add("visible"); // Mostrar el popup

        // Cargar el contenido de la política de cookies desde el archivo
        fetch('/assets/cookies/cookies.html')
            .then(response => response.text())
            .then(data => {
                cookiePolicyContent.innerHTML = data; // Insertar el contenido en el popup
            })
            .catch(error => {
                cookiePolicyContent.innerHTML = "<p>No se pudo cargar la política de cookies. Por favor, inténtalo más tarde.</p>";
            });
    });

    // Cerrar el popup de la política de cookies
    closePopupButton.addEventListener("click", function () {
        cookiePolicyPopup.classList.remove("visible"); // Ocultar el popup
    });

    // Cerrar el popup cuando se haga clic fuera del contenido
    window.addEventListener("click", function (e) {
        if (e.target === cookiePolicyPopup) {
            cookiePolicyPopup.classList.remove("visible"); // Ocultar el popup
        }
    });
});



