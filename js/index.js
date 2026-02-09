document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const cvContainer = document.querySelector(".cv-container");
    const downloadButton = document.getElementById("download-cv");

    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) {
                section.classList.add("visible");
            }
        });

        // Vérification de l'apparition du CV
        if (cvContainer) {
            const rect = cvContainer.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                cvContainer.classList.add("loaded");
            }
        }
    }

    // Vérifie au chargement et lors du scroll
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);

    // Téléchargement du CV avec un bon nom de fichier
    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            const cvUrl = "../assets/images/CV_Khaldi_Mohamed.jpg";  // Vérifie le bon chemin
            const a = document.createElement("a");
            a.href = cvUrl;
            a.setAttribute("download", "CV_Khaldi_Mohamed.jpg"); // Nom propre
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});
