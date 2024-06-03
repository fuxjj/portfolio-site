function showLanguagesText() {
    var textElement = document.getElementById("languagesText");
    textElement.classList.toggle("hidden");
}

function showEducationText() {
    var otherText = document.getElementById("otherText");
    otherText.classList.toggle("hidden")
}

function showExperienceText() {
    var thirdText = document.getElementById("thirdText");
    thirdText.classList.toggle("hidden")
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
}
