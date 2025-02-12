/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos generales */
html, body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333333;
    background-color: #F4F4F4;
}



/* Estilos generales del header */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95); /* Blanco con transparencia */
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Contenedor del logo */
.logo-container {
    padding: 10px 0;
}

/* Estilos del logo */
.logo {
    height: 50px;
    display: block;
}

/* Estilos del menú */
.menu {
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    font-size: 1.2rem;
}

.menu a {
    color: #000000; /* Negro */
    text-decoration: none;
    padding: 10px 15px;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    font-size: 1.1rem;
    position: relative;
}

.menu a:hover {
    color: #666666; /* Gris medio */
    background-color: transparent;
    transform: none;
}

.menu a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #000000; /* Negro */
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.menu a:hover::after {
    transform: scaleX(1);
}

/* Estilos generales de la sección Hero */
.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* Línea decorativa */
.hero .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000000; /* Negro */
}

/* Estilos para el texto de la sección */
.hero-text {
    position: relative;
    z-index: 1;
    text-align: center;
    color: #FFFFFF; /* Blanco */
}

/* Estilos para la imagen */
.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

/* Sección Nosotros */
#Nosotros {
    padding: 80px 20px;
    background-color: #FFFFFF; /* Blanco */
    text-align: center;
}

#Nosotros .content {
    max-width: 2500px;
    margin: 0 auto;
    padding: 40px;
    background-color: #F4F4F4; /* Gris claro */
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

#Nosotros h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333333; /* Gris oscuro */
}

#Nosotros p {
    font-size: 1.1rem;
    color: #666666; /* Gris medio */
    line-height: 1.8;
    max-width: 1500px;
    margin: 0 auto 30px;
    text-align: center;
}

/* Sección Nuestros Servicios */
#servicios {
    position: relative;
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    text-align: center;
    color: #FFFFFF; /* Blanco */
    z-index: 1;
}

#servicios h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333333; /* Gris oscuro */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Carrusel */
.carousel-container {
    position: relative;
    width: 100%;
    max-width: 2500px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 50px;
}

.carousel-content {
    display: flex;
    gap: 20px;
    padding: 10px;
    transition: transform 0.5s ease-in-out;
    scroll-behavior: smooth;
}

/* Elementos del carrusel */
.step {
    flex: 0 0 auto;
    width: 250px;
    padding: 20px;
    text-align: center;
    background: #FFFFFF; /* Blanco */
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.step:hover {
    transform: scale(1.05);
}

.step-content i {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #666666; /* Gris medio */
}

.step-content h3 {
    font-size: 1.2rem;
    color: #333333; /* Gris oscuro */
}

/* Botones del carrusel */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.75); /* Negro con transparencia */
    border: none;
    color: #FFFFFF; /* Blanco */
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    z-index: 10;
}

.carousel-arrow:hover {
    background-color: rgba(0, 0, 0, 0.9); /* Negro más oscuro */
}

.carousel-arrow-left {
    left: 10px;
}

.carousel-arrow-right {
    right: 10px;
}

/* Ocultar flechas del carrusel en dispositivos móviles */
@media screen and (max-width: 768px) {
    .carousel-arrow-left,
    .carousel-arrow-right {
        display: none;
    }
}

/* Sección Proyectos */
#proyectos {
    padding: 80px 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.75); /* Blanco con transparencia */
    overflow: hidden;
}

#proyectos h1 {
    padding: 50px 20px;
    text-align: center;
    font-size: 2.5rem;
}

#proyectos h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
    color: #333333; /* Gris oscuro */
}

/* Efecto de subrayado animado (automático) */
#proyectos h2::after,
h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #666666; /* Gris medio */
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

h2:hover::after,
#proyectos h2:hover::after {
    transform: scaleX(1);
}

/* Animación de aparición */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h2 {
    animation: fadeInUp 0.8s ease-in-out;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
    width: 100%;
}

/* Ocultar el texto inicialmente */
.proyectos-item h3 {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Mostrar el texto al pasar el ratón */
.proyectos-item:hover h3 {
    opacity: 1;
    transform: translateY(0);
}

/* Resto de los estilos */
.proyectos-item {
    background-size: cover;
    background-position: center;
    padding: 20px;
    color: #FFFFFF; /* Blanco */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    min-height: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.proyectos-item:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.6); /* Negro con transparencia */
}

.proyectos-item a {
    display: inline-block;
    padding: 15px 30px;
    background-color: rgba(0, 0, 0, 0.5); /* Negro con transparencia */
    color: #FFFFFF; /* Blanco */
    text-decoration: none;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
}

.proyectos-item a:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Negro más oscuro */
    transform: scale(1.1);
}

/* Estilo para la Sección funcionamiento */
#funcionamiento {
    padding: 40px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

#funcionamiento h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
}

.pasos-container {
    max-width: 800px;
    margin: 0 auto;
}

.paso {
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.paso-header {
    width: 100%;
    padding: 15px 20px;
    text-align: left;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease;
}

.paso-header:hover {
    background-color: #444;
}

.paso-header i {
    font-size: 1rem;
    transition: transform 0.3s ease;
}

.paso-header.active i {
    transform: rotate(180deg);
}

.paso-content {
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.paso-content p {
    font-size: 1.1rem;
    color: #555;
    margin: 20px 0;
}

@media (max-width: 768px) {
    #adicional h2 {
        font-size: 1.8rem;
    }

    #adicional p {
        font-size: 0.9rem;
    }
}

/* Formulario de Contacto */
#contacto {
    padding: 80px 20px;
    background-color: #F9F9F9; /* Gris claro */
    text-align: center;
}

.contacto-container {
    max-width: 2500px;
    margin: 0 auto;
    padding: 40px;
    background-color: #FFFFFF; /* Blanco */
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

#contacto h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #333333; /* Gris oscuro */
}

#contacto p {
    font-size: 1.1rem;
    color: #666666; /* Gris medio */
    margin-bottom: 30px;
}

.contacto-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.form-group label {
    font-size: 1rem;
    color: #333333; /* Gris oscuro */
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #CCCCCC; /* Gris claro */
    border-radius: 5px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #666666; /* Gris medio */
    outline: none;
}

.btn-enviar {
    padding: 15px 30px;
    background-color: #333333; /* Gris oscuro */
    color: #FFFFFF; /* Blanco */
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-enviar:hover {
    background-color: #000000; /* Negro */
    transform: scale(1.05);
}

/* Footer */
footer {
    background-color: #222222; /* Gris oscuro */
    color: #FFFFFF; /* Blanco */
    padding: 40px 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: auto;
    text-align: left;
}

.footer-section h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #FFFFFF; /* Blanco */
    padding-bottom: 5px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #FFFFFF; /* Blanco */
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #CCCCCC; /* Gris claro */
}

/* Estilos generales del footer */
footer {
    background-color: #222222; /* Gris oscuro */
    color: #FFFFFF; /* Blanco */
    padding: 40px 20px;
    font-family: 'Poppins', sans-serif;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
}

.footer-section {
    flex: 1;
    min-width: 250px;
}

.footer-section h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #FFFFFF; /* Blanco */
    border-bottom: 2px solid #666666; /* Gris medio */
    padding-bottom: 10px;
    display: inline-block;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-section ul li i {
    font-size: 1.2rem;
    color: #666666; /* Gris medio */
}

.footer-section ul li a,
.footer-section ul li span {
    color: #FFFFFF; /* Blanco */
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #CCCCCC; /* Gris claro */
}

.footer-bottom {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #444444; /* Gris oscuro */
    font-size: 0.9rem;
    color: #CCCCCC; /* Gris claro */
}

/* Responsive Design */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-section {
        text-align: center;
    }

    .footer-section ul li {
        justify-content: center;
    }
}

/* Estilos dinámicos para h2 */
h2 {
    font-size: 2.5rem;
    color: #333333; /* Gris oscuro */
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    padding: 10px 20px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Efecto de subrayado animado */
h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #666666; /* Gris medio */
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

h2:hover::after {
    transform: scaleX(1);
}

/* Efecto de subrayado animado (de izquierda a derecha) */
#proyectos h2 {
    position: relative;
    display: inline-block;
}

#proyectos h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #666666; /* Gris medio */
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

#proyectos h2:hover::after {
    transform: scaleX(1);
}

/* Animación de aparición */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h2 {
    animation: fadeInUp 0.8s ease-in-out;
}

/* Animación para el texto dinámico */
@keyframes dynamicText {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
}

.dynamic-text {
    font-size: 3rem;
    font-weight: bold;
    color: #FFFFFF; /* Blanco */
    animation: dynamicText 5s ease-in-out infinite;
}

/* Estilos para el menú responsive */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
}

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #000000; /* Negro */
    margin: 4px 0;
    transition: 0.4s;
}

/* Estilos para el menú en móviles */
@media screen and (max-width: 768px) {
    .menu {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95); /* Blanco con transparencia */
        position: absolute;
        top: 70px;
        left: 0;
        padding: 10px 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .menu.active {
        display: flex;
    }

    .menu a {
        margin: 10px 0;
        text-align: center;
    }

    .menu-toggle {
        display: flex;
    }
}

/* Estilo del Popup de Política de Cookies */
.cookie-policy-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Negro con transparencia */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    display: none;
}

.cookie-policy-popup .popup-content {
    background-color: #FFFFFF; /* Blanco */
    padding: 20px;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
}

.cookie-policy-popup h2 {
    font-size: 24px;
    margin-bottom: 15px;
}

.cookie-policy-popup p {
    font-size: 14px;
    margin-bottom: 10px;
}

.cookie-policy-popup .close-button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: #333333; /* Gris oscuro */
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.cookie-policy-popup .close-button:hover {
    color: #666666; /* Gris medio */
}

/* Mostrar el popup */
.cookie-policy-popup.visible {
    display: flex;
}

/* Estilos del banner de cookies */
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Negro con transparencia */
    color: #FFFFFF; /* Blanco */
    padding: 20px;
    font-family: Arial, sans-serif;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #666666; /* Gris medio */
}

.cookie-banner .cookie-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.cookie-banner p {
    margin: 0;
    flex-grow: 1;
}

.cookie-button {
    background-color: #666666; /* Gris medio */
    color: #FFFFFF; /* Blanco */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.cookie-button:hover {
    background-color: #333333; /* Gris oscuro */
}

/* Ocultar el banner por defecto */
.cookie-banner.hidden {
    display: none;
}
