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
/*********** TOGGLE is-open-menu WHEN WE CLICKED ON LINK INSIDE **************/

const $home_isClicked = document.querySelector('.home_isClicked');
const $project_isClicked = document.querySelector('.project_isClicked');
const $aboutMe_isClicked = document.querySelector('.aboutMe_isClicked');
const $skills_isClicked = document.querySelector('.skills_isClicked');
const $contact_isClicked = document.querySelector('.contact_isClicked');

let links = [$home_isClicked, $project_isClicked, $aboutMe_isClicked, $skills_isClicked, $contact_isClicked];


links.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.toggle('is-open-menu');
    hideBgNavScrolling.classList.toggle('hideBgNavScrolling');
    btn.classList.toggle('clicked');
    clicked = false;
  });
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
  // console.log(offsetWindow);

  if (offsetWindow > dumbPosition) {
    // console.log("add class");
    nav.classList.add('nav-on-scroll');
  } else {
    // console.log("remove class");
    nav.classList.remove('nav-on-scroll');
  }
});

/**********************************************************/
/************ ???????????????????????????????? ************/