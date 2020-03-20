/******************** BURGER MENU  ************************/

var burger = document.querySelector('.nav__menu-button');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');
var hideBgNavScrolling = document.querySelector('.nav');

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


/**********************************************************/
/******************** HEADER ON SCROLL ********************/

var nav = document.querySelector('.nav');

window.addEventListener("scroll", (e) => {
  var offsetWindow = window.pageYOffset;
  var scrolled = document.body.scrollTop;
  var position = nav.offsetTop;
  const dumbPosition = 50;
  console.log(offsetWindow);

  if (offsetWindow > dumbPosition) {
    console.log("add class");
    nav.classList.add('nav-on-scroll');
  } else {
    console.log("remove class");
    nav.classList.remove('nav-on-scroll');
  }
});

/**********************************************************/
/************ ???????????????????????????????? ************/