const nav = document.querySelector('.nav');

window.addEventListener("scroll", (e) => {
  let offsetWindow = window.pageYOffset;
  let scrolled = document.body.scrollTop;
  let position = nav.offsetTop;
  const dumbPosition = 20;
  // console.log(offsetWindow);

  if (offsetWindow > dumbPosition) {
    // console.log("add class");
    nav.classList.add('nav-on-scroll');
  } else {
    // console.log("remove class");
    nav.classList.remove('nav-on-scroll');
  }
});