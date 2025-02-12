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
    const steps = document.querySelectorAll(".paso");
    const arrowLeft = document.querySelector(".carousel-arrow-left");
    const arrowRight = document.querySelector(".carousel-arrow-right");
    const carouselContainer = document.querySelector(".carousel-container");

    if (carouselContent && steps.length > 0 && arrowLeft && arrowRight && carouselContainer) {
        let currentIndex = 0;
        let stepWidth = steps[0].offsetWidth + 20; // Ancho de cada paso + gap
        let autoScrollInterval;

        // Función para mover el carrusel
        function moveCarousel(direction) {
            if (direction === "left") {
                currentIndex = (currentIndex - 1 + steps.length) % steps.length;
            } else if (direction === "right") {
                currentIndex = (currentIndex + 1) % steps.length;
            }

            // Aplicar desplazamiento
            const offset = -currentIndex * stepWidth;
            carouselContent.style.transform = `translateX(${offset}px)`;

            // Actualizar clases activas
            steps.forEach((step, index) => {
                step.classList.toggle("active", index === currentIndex);
            });
        }

        // Eventos de las flechas
        arrowLeft.addEventListener("click", () => moveCarousel("left"));
        arrowRight.addEventListener("click", () => moveCarousel("right"));

        // Desplazamiento automático del carrusel
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => moveCarousel("right"), 5000);
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

    // Desplegables de pasos
    const pasosHeaders = document.querySelectorAll(".paso-header");
    pasosHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // Alternar el paso actual
            header.classList.toggle("active");
            const content = header.nextElementSibling;

            if (header.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "20px";
            } else {
                content.style.maxHeight = null;
                content.style.padding = "0 20px";
            }

            // Cerrar los demás pasos
            pasosHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove("active");
                    const otherContent = otherHeader.nextElementSibling;
                    otherContent.style.maxHeight = null;
                    otherContent.style.padding = "0 20px";
                }
            });
        });
    });

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

    // Cookies
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const rejectCookiesButton = document.getElementById("reject-cookies");
    const openPolicyLink = document.getElementById("open-cookie-policy");
    const cookiePolicyPopup = document.getElementById("cookie-policy-popup");
    const closePopupButton = document.getElementById("close-popup");
    const cookiePolicyContent = document.getElementById("cookie-policy-content");

    if (cookieBanner && acceptCookiesButton && rejectCookiesButton && openPolicyLink && cookiePolicyPopup && closePopupButton && cookiePolicyContent) {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");

        if (!cookiesAccepted) {
            cookieBanner.classList.remove("hidden");
        }

        acceptCookiesButton.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.classList.add("hidden");
        });

        rejectCookiesButton.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "false");
            cookieBanner.classList.add("hidden");
        });

        openPolicyLink.addEventListener("click", function (e) {
            e.preventDefault();
            cookiePolicyPopup.classList.add("visible");

            fetch('/assets/cookies/cookies.html')
                .then(response => response.text())
                .then(data => {
                    cookiePolicyContent.innerHTML = data;
                })
                .catch(error => {
                    cookiePolicyContent.innerHTML = "<p>No se pudo cargar la política de cookies. Por favor, inténtalo más tarde.</p>";
                });
        });

        closePopupButton.addEventListener("click", function () {
            cookiePolicyPopup.classList.remove("visible");
        });

        window.addEventListener("click", function (e) {
            if (e.target === cookiePolicyPopup) {
                cookiePolicyPopup.classList.remove("visible");
            }
        });
    }
});
