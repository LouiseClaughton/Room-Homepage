let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imageSlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "grid";
}

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowLeft") {
    plusSlides(-1);
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowRight") {
    plusSlides(+1);
  }
});