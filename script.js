console.log("Website geladen");
document.querySelectorAll(".gallery img").forEach(img => {

img.addEventListener("mousedown", () => {

img.classList.add("zoom");

});

img.addEventListener("mouseup", () => {

img.classList.remove("zoom");

});

img.addEventListener("mouseleave", () => {

img.classList.remove("zoom");

});

img.addEventListener("touchstart", () => {

img.classList.add("zoom");

});

img.addEventListener("touchend", () => {

img.classList.remove("zoom");

});

});
