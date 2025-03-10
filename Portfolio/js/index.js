document.addEventListener("DOMContentLoaded", function () {
    const cvContainer = document.querySelector(".cv-container");
    const downloadButton = document.getElementById("download-cv");

    // Fonction pour vérifier si l'élément est visible
    function checkVisibility() {
        const rect = cvContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            cvContainer.classList.add("loaded");
        }
    }

    // Vérifie si le CV est visible au chargement
    checkVisibility();

    // Ajoute un event listener pour le scroll
    window.addEventListener("scroll", checkVisibility);

    // Télécharger le CV au clic
    downloadButton.addEventListener("click", function () {
        const cvUrl = "../assets/images/CV_Khaldi_Mohamed.jpg";
        const a = document.createElement("a");
        a.href = cvUrl;
        a.setAttribute("download", "CV_Khaldi_Mohamed.pdf");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
