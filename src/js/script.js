// animation menu burger

const btn = document.querySelector('.nav__menu-button');
let clicked = false;

btn.addEventListener('click', () => {
  if (clicked) {
    btn.classList.remove('clicked');
    clicked = false;
  } else {
    btn.classList.toggle('clicked');
    clicked = true;
  }
});

var burger = document.querySelector('.nav__menu-button');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');

burger.addEventListener('click', () => {
  menu.classList.toggle('.is-open-menu')
  header.classList.toggle('.header-is-open')

});