document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slick-slider");
    var slides = document.querySelectorAll(".article");
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var slideIndex = 0;
    let slideWidth = slides[0].offsetWidth;
    let slideT = 0;
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    function prevSlide() {
      slideIndex--;
      slideT += slideWidth;
      console.log('apres ajout : ' + slideIndex)
      if (slideIndex <= 0) {
        slideIndex = slides.length + 1;
      }
      updateSlide();
    }
  
    function nextSlide() {
      slideIndex++;
      slideT -= slideWidth;
      console.log('avant ajout : ' + slideIndex)
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      updateSlide();
    }
  
    function updateSlide() {
        slider.style.transform = "translateX(" + (slideT) + "px)";
    }
  });
  
