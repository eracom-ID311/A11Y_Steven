const previousButtonNew = document.querySelector(".avant");
const nextButtonNew = document.querySelector(".suivant");
const text = document.querySelector(".description");
const sliderImage = document.querySelector(".slider");

var pageNumber = 0;
var myImg = document.querySelector("myImg");

const barreDemo = document.querySelector(".barre");
var scrolled;
var val;
var saturation = 0;

window.addEventListener("scroll", function () {
  scrolled = window.pageYOffset;
  val = scrolled * 0.9 - 500;
  saturation = (scrolled - 500) / 10;
  //barreDemo.style.width = val + "px";
  barreDemo.style.transform = "translateX(" + 1 * val + "%" + ")";

  if (scrolled > 500) {
    barreDemo.style.backgroundColor = "hsl(0," + saturation + "0, %, 0%)";
  }
});

const content = [
  {
    text: "The Air Jordan 1 Collette, initially created for the employees of the boutique, is considered one of the rarest Nike Air Jordan colorways",
    backgroundImage: "url('links/sneaks4.webp')",
  },
  {
    text: "This ultra exclusive Air Jordan 1 collaboration was made by Nike in commemoration of the famous French boutique Colette closing its doors in 2017.",

    backgroundImage: "url('links/sneaks3.webp')",
  },
  {
    text: "The dates represent the years in which the store was founded and closed, respectively.",
    backgroundImage: "url('links/sneaks5.webp')",
  },
];

previousButtonNew.addEventListener("click", function (event) {
  previous();
  console.log("papapa");
  console.log("--");
});

nextButtonNew.addEventListener("click", function (event) {
  next();
  console.log("hgfhjgfjh");
  console.log("--");
});

const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber >= 3) {
    pageNumber = 0;
  }
  updateText();
};

const previous = function () {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = 3;
  }
  updateText();
};

const updateText = function () {
  text.innerHTML = content[pageNumber].text;
  sliderImage.style.backgroundImage = content[pageNumber].backgroundImage;
};

updateText();

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

let slideIndex = 1;
showSlides(slideIndex);

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev() {
  // On décrémente le compteur
  compteur--;

  // On calcule la valeur du décalage
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

/**
 * On stoppe le défilement
 */
function stopTimer() {
  clearInterval(timer);
}

// Mise en oeuvre du "responsive"
window.addEventListener("resize", () => {
  slideWidth = diapo.getBoundingClientRect().width;
  slideNext();
});

if (window.addEventListener) {
  window.addEventListener("load", create_obj, false);
}
