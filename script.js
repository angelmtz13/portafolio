document.addEventListener('DOMContentLoaded', () => {

    // --- LOGICA DE TRADUCCION (i18n) ---
    const translations = {
        es: {
            "title": "Portafolio | Angel Martinez",
            "meta-desc": "Portafolio profesional de Angel Martinez, Ingeniero Informático. Conoce mis proyectos y tecnologías.",
            "nav-home": "Inicio",
            "nav-profile": "Perfil",
            "nav-skills": "Skills",
            "nav-projects": "Proyectos",
            "nav-certificates": "Certificados",
            "nav-contact": "Contacto",
            "hero-title": "Hola, soy Angel Martinez",
            "hero-subtitle": "Ingeniero Informático | Software • Web • Data",
            "btn-portfolio": "Ver Portafolio",
            "btn-contact-me": "Contáctame",
            "about-title": "Perfil Profesional",
            "about-text-1": "Soy egresado de Ingeniería Informática enfocado en el desarrollo de software y tecnología web. Me apasiona resolver problemas mediante código limpio, lógica estructurada e interfaces intuitivas.",
            "about-text-2": "Cuento con conocimientos en JavaScript, Python, HTML5, CSS3 y Análisis de Datos (Power BI), además de experiencia en consumo de APIs REST y control de versiones con Git. Poseo nivel de inglés B2 certificado y busco integrarme a equipos de tecnología para aportar soluciones eficientes.",
            "about-photo-alt": "Foto de Angel Martinez",
            "tech-title": "Stack Tecnológico",
            "projects-title": "Proyectos Destacados",
            "proj1-title": "Plataforma E-commerce",
            "proj1-desc": "Carrito de compras funcional con JavaScript. Incluye cálculo dinámico de totales y actualización en tiempo real del DOM.",
            "proj2-title": "Biblioteca de Mangas",
            "proj2-desc": "Aplicación web interactiva para buscar y gestionar tu biblioteca personal de mangas consumiendo APIs REST (Jikan API). Incluye estadísticas en tiempo real y persistencia en LocalStorage.",
            "proj3-title": "Gestión de Usuarios",
            "proj3-desc": "CRUD funcional desarrollado con JavaScript Vanilla. Implementa Fetch API para consumo de datos y persistencia en LocalStorage.",
            "proj4-title": "Buscador de Series",
            "proj4-desc": "Aplicación web para búsqueda de películas y series mediante consumo de API REST. Interfaz responsiva desarrollada con Bootstrap y manipulación dinámica del DOM.",
            "proj5-title": "Generador de Contraseñas",
            "proj5-desc": "Generador de contraseñas con JavaScript que evalúa la seguridad en tiempo real. Implementa lógica condicional para validar complejidad y mostrar el nivel de seguridad.",
            "proj6-title": "Diseño de Portafolio Web",
            "proj6-desc": "Maquetación semántica y diseño de marca personal. Enfoque en código limpio, arquitectura CSS moderna y experiencia de usuario optimizada.",
            "btn-demo": "Ver Demo",
            "certs-title": "Certificaciones Profesionales",
            "cert-frontend": "Desarrollador Front-end",
            "cert-english": "EF SET English Certificate (B2)",
            "cert-responsive": "Sitios Web Responsivos",
            "cert-git": "Control de Versiones (Git)",
            "cert-data": "Analista de Datos",
            "issued-by": "Emitido por:",
            "btn-certificate": "Ver Certificado",
            "contact-title": "Contacto",
            "contact-name": "Tu Nombre",
            "contact-email": "Tu Correo Electrónico",
            "contact-message": "Tu Mensaje",
            "btn-send": "Enviar Mensaje",
            "footer-text": "2026 Angel Martinez.",
            "form-success": "¡Tu mensaje se envió correctamente!",
            "form-error": "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",
            "form-conn-error": "Error de conexión. Intenta más tarde."
        },
        en: {
            "title": "Portfolio | Angel Martinez",
            "meta-desc": "Professional portfolio of Angel Martinez, Computer Engineer. Discover my projects and technologies.",
            "nav-home": "Home",
            "nav-profile": "Profile",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-certificates": "Certifications",
            "nav-contact": "Contact",
            "hero-title": "Hello, I'm Angel Martinez",
            "hero-subtitle": "Computer Engineer | Software • Web • Data",
            "btn-portfolio": "View Portfolio",
            "btn-contact-me": "Contact Me",
            "about-title": "Professional Profile",
            "about-text-1": "I am a Computer Engineering graduate focused on software development and web technology. I am passionate about solving problems through clean code, structured logic, and intuitive user interfaces.",
            "about-text-2": "I have knowledge in JavaScript, Python, HTML5, CSS3, and Data Analysis (Power BI), along with experience consuming REST APIs and version control with Git. Certified B2 English speaker eager to join tech teams and deliver efficient solutions.",
            "about-photo-alt": "Angel Martinez's Photo",
            "tech-title": "Tech Stack",
            "projects-title": "Featured Projects",
            "proj1-title": "E-commerce Platform",
            "proj1-desc": "Functional shopping cart built with JavaScript. Includes dynamic calculation of totals and real-time DOM updates.",
            "proj2-title": "Manga Library",
            "proj2-desc": "Interactive web app to search and manage your personal manga library consuming REST APIs (Jikan API). Includes real-time stats dashboard and LocalStorage persistence.",
            "proj3-title": "User Management",
            "proj3-desc": "Functional CRUD developed with Vanilla JavaScript. Implements Fetch API for data consumption and LocalStorage persistence.",
            "proj4-title": "Series Finder",
            "proj4-desc": "Web application for searching movies and series by consuming REST API. Responsive interface developed with Bootstrap and dynamic DOM manipulation.",
            "proj5-title": "Password Generator",
            "proj5-desc": "Password generator built with JavaScript that evaluates security in real time. Implements conditional logic to validate complexity and show the security level.",
            "proj6-title": "Web Portfolio Design",
            "proj6-desc": "Semantic layout and personal brand design. Focus on clean code, modern CSS architecture, and optimized user experience.",
            "btn-demo": "Live Demo",
            "certs-title": "Professional Certifications",
            "cert-frontend": "Front-end Developer",
            "cert-english": "EF SET English Certificate (B2)",
            "cert-responsive": "Responsive Web Sites",
            "cert-git": "Version Control (Git)",
            "cert-data": "Data Analyst",
            "issued-by": "Issued by:",
            "btn-certificate": "View Certificate",
            "contact-title": "Contact",
            "contact-name": "Your Name",
            "contact-email": "Your Email",
            "contact-message": "Your Message",
            "btn-send": "Send Message",
            "footer-text": "2026 Angel Martinez.",
            "form-success": "Your message was sent successfully!",
            "form-error": "An error occurred while sending the message. Please try again.",
            "form-conn-error": "Connection error. Please try again later."
        }
    };

    const setLanguage = (lang, immediate = false) => {
        const applyTranslations = () => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            document.querySelectorAll('[data-i18n-alt]').forEach(el => {
                const key = el.getAttribute('data-i18n-alt');
                if (translations[lang] && translations[lang][key]) {
                    el.alt = translations[lang][key];
                }
            });

            document.documentElement.lang = lang;

            // SEO Updates
            document.title = translations[lang]["title"];
            const metaDesc = document.getElementById('meta-description');
            if (metaDesc) {
                metaDesc.setAttribute('content', translations[lang]["meta-desc"]);
            }

            const langText = document.getElementById('lang-text');
            if (langText) {
                langText.textContent = lang === 'es' ? 'ES' : 'EN';
            }

            localStorage.setItem('portfolio_lang_v2', lang);
        };

        const mainElement = document.querySelector('main');
        if (!immediate && mainElement) {
            mainElement.classList.add('fade-out');
            setTimeout(() => {
                applyTranslations();
                mainElement.classList.remove('fade-out');
            }, 150); // Matches CSS transition time
        } else {
            applyTranslations();
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('portfolio_lang_v2') || 'es';
            const nextLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(nextLang);
        });
    }

    // Initialize Language
    const savedLang = localStorage.getItem('portfolio_lang_v2') || 'es';
    setLanguage(savedLang, true);

    // --- FORMULARIO DE CONTACTO ---
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const currentLang = localStorage.getItem('portfolio_lang_v2') || 'es';
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                });
                if (response.ok) {
                    alert(translations[currentLang]["form-success"]);
                    form.reset();
                } else {
                    alert(translations[currentLang]["form-error"]);
                }
            } catch (error) {
                alert(translations[currentLang]["form-conn-error"]);
            }
        });
    }
});
