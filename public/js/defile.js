document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slick-slider");
    var slides = document.querySelectorAll(".article");
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var slideIndex = 0;
    var slideWidth = slides[0].offsetWidth;
    var slideT = 0;
    
    // Vérifie si l'article 1 est entièrement visible dans la fenêtre
    function isArticle1Visible() {
      var article1Rect = slides[0].getBoundingClientRect();
      return (article1Rect.left >= 0 && article1Rect.right <= window.innerWidth);
    }
    
    // Vérifie si le dernier article est entièrement visible dans la fenêtre
    function isLastArticleVisible() {
      var lastArticleRect = slides[slides.length - 1].getBoundingClientRect();
      return (lastArticleRect.left >= 0 && lastArticleRect.right <= window.innerWidth);
    }
    
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    
    function prevSlide() {
      if (isArticle1Visible()) {
        return; // Ne fait rien si l'article 1 est entièrement visible
      }
      
      slideIndex--;
      slideT += slideWidth;
      updateSlide();
    }
    
    function nextSlide() {
      if (isLastArticleVisible()) {
        return; // Ne fait rien si le dernier article est entièrement visible
      }
      
      slideIndex++;
      slideT -= slideWidth;
      updateSlide();
    }
    
    function updateSlide() {
        slider.style.transform = "translateX(" + slideT + "px)";
        
        if (slideIndex === slides.length - 1) {
          slider.classList.add("last-slide");
        } else {
          slider.classList.remove("last-slide");
        }
      }
      
  });
  