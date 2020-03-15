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