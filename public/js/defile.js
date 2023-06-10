var articlesSection = document.querySelector('.articles');
var articles = articlesSection.getElementsByClassName('article');
var currentIndex = 0;

function handleSlider() {
  var windowWidth = window.innerWidth;
  var firstArticle = articles[0];
  var rect = firstArticle.getBoundingClientRect();

  if (rect.left >= 0) {
    prevButton.disabled = true; // Désactiver le bouton de défilement vers la gauche au démarrage
  } else {
    prevButton.disabled = false; // Activer le bouton de défilement vers la gauche au démarrage
  }

  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var rect = article.getBoundingClientRect();

    // Vérifie si l'élément sort de la fenêtre
    if (rect.right > windowWidth) {
      // L'élément est en dehors de la fenêtre, vous pouvez implémenter le code pour le faire défiler ici
      console.log("L'élément ", i, " sort de la fenêtre !");
    }
  }
}

function scrollLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  articlesSection.style.transition = 'transform 0.3s ease-in-out';
  articlesSection.style.transform = `translateX(-${currentIndex * 481}px)`;


  var firstArticle = articles[0];
  var rect = firstArticle.getBoundingClientRect();

  if (rect.left >= 0) {
    prevButton.disabled = true; 
  } else {
    prevButton.disabled = false; 
  }

  nextButton.disabled = false;
}

function scrollRight() {
  currentIndex++;
  if (currentIndex >= articles.length) {
    currentIndex = articles.length - 1;
  }
  articlesSection.style.transition = 'transform 0.3s ease-in-out';
  articlesSection.style.transform = `translateX(-${currentIndex * 481}px)`;

  var lastArticle = articles[articles.length - 2];
  var rect = lastArticle.getBoundingClientRect();
  var windowWidth = window.innerWidth;

  if (rect.right <= windowWidth) {
    nextButton.disabled = true; 
  } else {
    nextButton.disabled = false; 
  }

  prevButton.disabled = false; 
}

document.addEventListener('DOMContentLoaded', handleSlider);

var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);
