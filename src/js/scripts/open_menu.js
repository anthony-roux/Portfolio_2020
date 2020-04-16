const $home_isClicked = document.querySelector('.home_isClicked');
const $project_isClicked = document.querySelector('.project_isClicked');
const $aboutMe_isClicked = document.querySelector('.aboutMe_isClicked');
const $skills_isClicked = document.querySelector('.skills_isClicked');
const $contact_isClicked = document.querySelector('.contact_isClicked');

const menu = document.querySelector('.menu');
const hideBgNavScrolling = document.querySelector('.nav');
const btn = document.querySelector('.nav__menu-button');
let clicked = false;


let links = [$home_isClicked, $project_isClicked, $aboutMe_isClicked, $skills_isClicked, $contact_isClicked];


links.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.toggle('is-open-menu');
    hideBgNavScrolling.classList.toggle('hideBgNavScrolling');
    btn.classList.toggle('clicked');
    clicked = false;
  });
});