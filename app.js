const body = document.body;
const slides = document.querySelectorAll(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgtoBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgtoBody();
  setActiveSlide();
});

// to set the background image for body
setBgtoBody();

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// to manipulate the active class on the respective slides
setActiveSlide();

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slides[activeSlide].classList.add("active");
  });
}
