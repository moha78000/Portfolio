document.addEventListener("DOMContentLoaded", function () {
    const cvContainer = document.querySelector(".cv-container");

    function checkVisibility() {
        const rect = cvContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Si l'élément est visible dans la fenêtre du navigateur
        if (rect.top < windowHeight - 100) {
            cvContainer.classList.add("loaded");
        }
    }

    // Vérifie si le CV est visible au chargement de la page
    checkVisibility();

    // Ajoute un event listener pour vérifier la visibilité lors du scroll
    window.addEventListener("scroll", function () {
        checkVisibility();
    });

    // Re-check lors du redimensionnement de la fenêtre
    window.addEventListener("resize", function () {
        checkVisibility();
    });
});
