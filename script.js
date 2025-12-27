document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.checked = true;
        } else {
            body.classList.remove('dark-theme');
            themeToggle.checked = false;
        }
    };

    const toggleTheme = () => {
        if (themeToggle.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    themeToggle.addEventListener('change', toggleTheme);
    applyTheme();

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                });
                if (response.ok) {
                    alert("¡Tu mensaje se envió correctamente!");
                    form.reset();
                } else {
                    alert("⚠️ Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
                }
            } catch (error) {
                alert("Error de conexión. Intenta más tarde.");
            }
        });
    }
});
