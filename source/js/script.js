const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
let clicked = 0;
const slider = document.querySelector('.example-slider');
const sliderButton = document.querySelector('.example-slider__comp');
const imgOverlay = document.querySelector('.example-slider__comp-img--overlay');
let sliderWidth = 0;


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function slide(x) {
  imgOverlay.style.width = x + "px";
  sliderButton.style.left = imgOverlay.offsetWidth - (sliderButton.offsetWidth / 2) + "px";
}

function getCursorPos(e) {
  let a = 0, x = 0;
  e = (e.changedTouches) ? e.changedTouches[0] : e;
  a = imgOverlay.getBoundingClientRect();
  x = e.pageX - a.left;
  x = x - window.scrollX;
  return x;
}

function slideMove(e) {
  let pos = 0;
  if (clicked == 0) return false;
  pos = getCursorPos(e)
  if (pos < 0) pos = 0;
  if (pos > sliderWidth) pos = sliderWidth;
  slide(pos);
}

function slideReady(e) {
  e.preventDefault();
  clicked = 1;

}

function slideFinish(e) {
  clicked = 0;
}


function compareImages() {
  const w = img.offsetWidth;
  const h = img.offsetHeight;
  img.style.width = (w / 2) + "px";
  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
  slider.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish);
}

function initSlider() {
  compareImages();
}


initSlider();
