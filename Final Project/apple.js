function toggleSearch() {
    var input = document.getElementById("search-input");
    if (input.style.display === "none") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}
// JavaScript code to handle the slideshow behavior
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("prev", "active");
    }

    let prevIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;

    slides[prevIndex].classList.add("prev");
    slides[slideIndex].classList.add("active");
}

function advanceSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlides();
}

updateSlides();

setInterval(advanceSlide, 5000);



