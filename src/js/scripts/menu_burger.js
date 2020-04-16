const burger = document.querySelector('.nav__menu-button');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const hideBgNavScrolling = document.querySelector('.nav');

burger.addEventListener('click', () => {
  menu.classList.toggle('is-open-menu')
  header.classList.toggle('header-is-open') // peut-être a supprimer ...
  hideBgNavScrolling.classList.toggle('hideBgNavScrolling')
});

/**********************************************************/
/*********** SCALE ANIMATION ON BURGER MENU **************/

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