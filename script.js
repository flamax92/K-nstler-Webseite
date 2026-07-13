const params = new URLSearchParams(location.search);
const slug = params.get("project");

// Zentrale Objektdatenbank mit Bildpfaden und optionalen Werkangaben (captions)
const projects = {
    "dance-for-increasing-distances": {
        title: "Dance for Increasing Distances",
        hero: [
            { src: "images/SLID1.jpg", caption: "" },
            { src: "images/SLID2.jpg", caption: "" },
            { src: "images/SLID3.jpg", caption: "" },
            { src: "images/SLID4.jpg", caption: "" }
        ],
        gallery: [
            { src: "images/dance for increasing distances_1.jpg", caption: "Werkangabe hier eintragen" },
            { src: "images/dance for increasing distances_2.jpg", caption: "" },
            { src: "images/dance for increasing distances_3.jpg", caption: "" },
            { src: "images/dance for increasing distances_4.jpg", caption: "" },
            { src: "images/dance for increasing distances_5.jpg", caption: "" },
            { src: "images/dance for increasing distances_6.jpg", caption: "" },
            { src: "images/dance for increasing distances_7.jpg", caption: "" }
        ]
    },
    "port-de-bras": {
        title: "Port de Bras",
        hero: [
            { src: "images/SLPD1.jpg", caption: "" },
            { src: "images/SLPD2.jpg", caption: "" },
            { src: "images/SLPD3.jpg", caption: "" },
            { src: "images/SLPD4.jpg", caption: "" },
            { src: "images/SLPD5.jpg", caption: "" },
            { src: "images/SLPD6.jpg", caption: "" }
        ],
        gallery: [
            { src: "images/port de bras1.jpg", caption: "" },
            { src: "images/port de bras2.jpg", caption: "" },
            { src: "images/port de bras3.jpg", caption: "" },
            { src: "images/port de bras4.jpg", caption: "" },
            { src: "images/port de bras5.jpg", caption: "" },
            { src: "images/port de bras6.jpg", caption: "" },
            { src: "images/port de bras7.jpg", caption: "" }
        ]
    },
    "departure-of-the-funny-ones": {
        title: "Departure of the Funny Ones",
        hero: [
            { src: "images/departure of the funny ones1.jpg", caption: "" },
            { src: "images/departure of the funny ones2.jpg", caption: "" }
        ],
        gallery: [
            { src: "images/departure of the funny ones1.jpg", caption: "" },
            { src: "images/departure of the funny ones2.jpg", caption: "" },
            { src: "images/departure of the funny ones3.jpg", caption: "" },
            { src: "images/departure of the funny ones4.jpg", caption: "" },
            { src: "images/departure of the funny ones5.jpg", caption: "" }
        ]
    },
    "something-to-dress-my-breath": {
        title: "Something to Dress My Breath", 
        hero: [
            { src: "images/something to dress my breath1.jpg", caption: "" },
            { src: "images/something to dress my breath2.jpg", caption: "" },
            { src: "images/something to dress my breath3.jpg", caption: "" },
            { src: "images/something to dress my breath4.jpg", caption: "" }
        ], 
        gallery: [
            { src: "images/something to dress my breath1.jpg", caption: "" },
            { src: "images/something to dress my breath2.jpg", caption: "" },
            { src: "images/something to dress my breath3.jpg", caption: "" },
            { src: "images/something to dress my breath4.jpg", caption: "" },
            { src: "images/something to dress my breath5.jpg", caption: "" },
            { src: "images/something to dress my breath6.jpg", caption: "" },
            { src: "images/something to dress my breath7.jpg", caption: "" }
        ] 
    },
    "eingesessen": { 
        title: "Eingesessen", 
        hero: [], 
        gallery: [
            { src: "images/eingesessen1.jpg", caption: "" },
            { src: "images/eingesessen2.jpg", caption: "" },
            { src: "images/eingesessen3.jpg", caption: "" }
        ] 
    },
    "love-artefacts": { 
        title: "Love Artefacts", 
        hero: [
            { src: "images/Love1.jpg", caption: "" }, 
            { src: "images/Love2.jpg", caption: "" }, 
            { src: "images/Love3.jpg", caption: "" }, 
            { src: "images/Love4.jpg", caption: "" }, 
            { src: "images/Love5.jpg", caption: "" }
        ], 
        gallery: [
            { src: "images/Love1.jpg", caption: "" }, 
            { src: "images/Love2.jpg", caption: "" }, 
            { src: "images/Love3.jpg", caption: "" }, 
            { src: "images/Love4.jpg", caption: "" }, 
            { src: "images/Love5.jpg", caption: "" }
        ] 
    },
    "fare-thee-well": { 
        title: "Fare Thee Well", 
        hero: [
            { src: "images/FTW1.jpg", caption: "" }, 
            { src: "images/FTW2.jpg", caption: "" }, 
            { src: "images/FTW3.jpg", caption: "" }, 
            { src: "images/FTW4.jpg", caption: "" }
        ], 
        gallery: [
            { src: "images/FTW1.jpg", caption: "" }, 
            { src: "images/FTW2.jpg", caption: "" }, 
            { src: "images/FTW3.jpg", caption: "" }, 
            { src: "images/FTW4.jpg", caption: "" }
        ] 
    }
};

const project = projects[slug];
const titleElement = document.getElementById("project-title");
const sliderContainer = document.getElementById("slider");
const galleryContainer = document.getElementById("gallery");

// NEU: Den Künstlernamen auf der Projektseite anklickbar machen und zur Startseite verlinken
const artistNameElement = document.querySelector(".artist-name-project");
if (artistNameElement) {
    artistNameElement.innerHTML = `<a href="index.html" style="color: inherit; text-decoration: none;">maximilian flachsenberg</a>`;
}

if (project) {
    // 1. Titel setzen
    titleElement.textContent = project.title;

    // 2. Slideshow (Hero) Bilder generieren
    if (project.hero && project.hero.length > 0) {
        project.hero.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "slide";
            if (index === 0) {
                div.classList.add("active");
            }
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = project.title;
            div.appendChild(img);

            // Slideshow-Unterschrift rendern (falls vorhanden)
            if (item.caption) {
                const captionDiv = document.createElement("div");
                captionDiv.className = "slide-caption";
                captionDiv.textContent = item.caption;
                div.appendChild(captionDiv);
            }

            sliderContainer.appendChild(div);
        });

        // Slideshow automatischen Wechsel aktivieren (alle 2 Sekunden)
        startSlideshow();
    } else {
        sliderContainer.style.display = "none";
    }

    // 3. Galerie-Bilder (unten) mit Unterschriften-Wrapper generieren
    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(item => {
            const wrapper = document.createElement("div");
            wrapper.className = "gallery-item";

            const img = document.createElement("img");
            img.src = item.src;
            img.alt = project.title;
            wrapper.appendChild(img);

            // Werkangabe rendern (falls vorhanden)
            if (item.caption) {
                const caption = document.createElement("p");
                caption.className = "image-caption";
                caption.textContent = item.caption;
                wrapper.appendChild(caption);
            }

            galleryContainer.appendChild(wrapper);
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
