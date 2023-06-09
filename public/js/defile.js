document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slick-slider");
    var slides = document.querySelectorAll(".article");
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var slideIndex = 0;
    var slideWidth = slides[0].offsetWidth;
    var slideT = 0;
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    function prevSlide() {
      slideIndex--;
      slideT += slideWidth;
      if (slideIndex < 0) {
        slideIndex = slides.length - 2;
        slideT = -slideWidth * slideIndex;
      }
      updateSlide();
    }
  
    function nextSlide() {
      slideIndex++;
      slideT -= slideWidth;
      if (slideIndex >= slides.length - 1) {
        slideIndex = 0;
        slideT = 0;
      }
      updateSlide();
    }
  
    function updateSlide() {
      slider.style.transform = "translateX(" + slideT + "px)";
    }
});
