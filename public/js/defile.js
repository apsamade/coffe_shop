document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".article");
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
    var slideWidth = slides[0].offsetWidth;
    let slideArray = []

    

    slides.forEach((div, index)=>{
      div.setAttribute('data-order', index + 1)
      slideArray.push(div)
    })

    function moveLastToFirst() {
      const lastElement = slideArray.pop();
      slideArray.unshift(lastElement);
    }
    function moveFirstToLast() {
      const firstElement = slideArray.shift();
      slideArray.push(firstElement);
    }
    
    prevButton.addEventListener("click", ()=>{
      moveFirstToLast();
      console.log(slideArray)
    });
    nextButton.addEventListener("click", ()=>{
      moveLastToFirst();
      console.log(slideArray)
    });

    
});
