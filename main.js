// array from imgs in slider
let arrayFromImg = Array.from(document.querySelectorAll(".container img"));
// length slider
let lenghtslide = arrayFromImg.length;
// set current slide
let currentSlide = 1;
// slide number
let slydN = document.querySelector(".slider_number");
// slide container
let cont = document.querySelector(".container");
// previous and next buttons
let slydnext = document.getElementById("next");
let slydprev = document.getElementById("prev");

// Handle click on next and previous
slydnext.onclick = next;
slydprev.onclick = prev;

// create Ul element
let ulElement = document.createElement("ul");

// set id to Ul element
ulElement.setAttribute("id", "main");

// create list items
for (let i = 1; i <= lenghtslide; i++) {
  let ulLi = document.createElement("li");
  ulLi.setAttribute("data-index", i);
  ulLi.appendChild(document.createTextNode(i));
  // add list items to Ul
  ulElement.appendChild(ulLi);
}
// add Ul to the page
document.getElementById("indicators").appendChild(ulElement);
// new Ul element
let newUl = document.getElementById("main");

// array from indicators bullets
let arrayFromBullets = Array.from(document.querySelectorAll("#main li"));

for (let i = 0; i < arrayFromBullets.length; i++) {
  arrayFromBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

function next() {
  if (slydnext.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prev() {
  if (slydprev.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
// create The checker function
function theChecker() {
  // set the slide number
  slydN.textContent = `Slide #` + currentSlide + ` of ` + lenghtslide;
  removeAllActive();
  // set active class on current slide
  arrayFromImg[currentSlide - 1].setAttribute("class", "active");
  // set active class on Ul list items
  newUl.children[currentSlide - 1].classList.add("active");

  // check if the current slide is the first
  if (currentSlide == 1) {
    slydprev.classList.add("disabled");
  } else {
    slydprev.classList.remove("disabled");
  }
  // check if the current slide is the last
  if (currentSlide == lenghtslide) {
    slydnext.classList.add("disabled");
  } else {
    slydnext.classList.remove("disabled");
  }
}
theChecker();

// Remove all active class from imgs and indicators bullets
function removeAllActive() {
  arrayFromImg.forEach(function (img) {
    img.classList.remove("active");
  });
  arrayFromBullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
