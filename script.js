const params = new URLSearchParams(location.search);
const slug = params.get("project");

// Zentrale Objektdatenbank mit allen Bildpfaden für Slideshow (hero) und Galerie (gallery)
const projects = {
    "dance-for-increasing-distances": {
        title: "Dance for Increasing Distances",
        hero: [
            "images/dance for increasing distances_1.jpg",
            "images/dance for increasing distances_2.jpg",
            "images/dance for increasing distances_3.jpg",
            "images/dance for increasing distances_4.jpg"
        ],
        gallery: [
            "images/dance for increasing distances_1.jpg",
            "images/dance for increasing distances_2.jpg",
            "images/dance for increasing distances_3.jpg",
            "images/dance for increasing distances_4.jpg",
            "images/dance for increasing distances_5.jpg",
            "images/dance for increasing distances_6.jpg",
            "images/dance for increasing distances_7.jpg"
        ]
    },
    "port-de-bras": {
        title: "Port de Bras",
        hero: [
            "images/SLPD1.jpg",
            "images/SLPD2.jpg",
            "images/SLPD3.jpg",
            "images/SLPD4.jpg",
            "images/SLPD5.jpg",
            "images/SLPD6.jpg"
        ],
        gallery: [
            "images/port de bras1.jpg",
            "images/port de bras2.jpg",
            "images/port de bras3.jpg",
            "images/port de bras4.jpg",
            "images/port de bras5.jpg",
            "images/port de bras6.jpg",
            "images/port de bras7.jpg"
        ]
    },
    "departure-of-the-funny-ones": {
        title: "Departure of the Funny Ones",
        hero: [
            "images/departure of the funny ones1.jpg",
            "images/departure of the funny ones2.jpg"
        ],
        gallery: [
            "images/departure of the funny ones1.jpg",
            "images/departure of the funny ones2.jpg",
            "images/departure of the funny ones3.jpg",
            "images/departure of the funny ones4.jpg",
            "images/departure of the funny ones5.jpg"
        ]
    },
    "something-to-dress-my-breath": { title: "Something to Dress My Breath", hero: [], gallery: [] },
    "eingesessen": { title: "Eingesessen", hero: [], gallery: [] },
    "love-artefacts": { title: "Love Artefacts", hero: [], gallery: [] },
    "fare-well": { title: "Fare Well", hero: [], gallery: [] }
};

const project = projects[slug];
const titleElement = document.getElementById("project-title");
const sliderContainer = document.getElementById("slider");
const galleryContainer = document.getElementById("gallery");

if (project) {
    // 1. Titel setzen
    titleElement.textContent = project.title;

    // 2. Slideshow (Hero) Bilder generieren
    if (project.hero && project.hero.length > 0) {
        project.hero.forEach((src, index) => {
            const div = document.createElement("div");
            div.className = "slide";
            if (index === 0) {
                div.classList.add("active");
            }
            const img = document.createElement("img");
            img.src = src;
            img.alt = project.title;
            div.appendChild(img);
            sliderContainer.appendChild(div);
        });

        // Slideshow automatischen Wechsel aktivieren (alle 2 Sekunden)
        startSlideshow();
    } else {
        sliderContainer.style.display = "none";
    }

    // 3. Galerie Bilder generieren (Standardmäßig ohne Zoom-Logik)
    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = project.title;
            galleryContainer.appendChild(img);
        });
    }
} else {
    if (titleElement) titleElement.textContent = "Projekt nicht gefunden";
}

// Funktion für den automatischen Bildwechsel (2 Sekunden Intervall)
function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length <= 1) return;

    let current = 0;
    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 2000); // 2000ms = 2 Sekunden
}
