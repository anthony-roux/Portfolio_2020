//controller

const controller = new ScrollMagic.Controller();

//tweens
const tween_vectorMe = TweenMax.from('#vectorMe', 1.25, {
  scale: 0.9,
  duration: '80%',
  ease: Power4.easeInOut
});

const tween_text_hero = TweenMax.staggerFromTo(
  '.tween_text',
  1.25, {
    opacity: 0,
    y: -100,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    y: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_themeOtaku = TweenMax.staggerFromTo(
  '.tween_themeOtaku',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_themeSocoda = TweenMax.staggerFromTo(
  '.tween_themeSocoda',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_themeNova = TweenMax.staggerFromTo(
  '.tween_themeNova',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_themeKoala = TweenMax.staggerFromTo(
  '.tween_themeKoala',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);
const tween_themeNespresso = TweenMax.staggerFromTo(
  '.tween_themeNespresso',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_themeIkea = TweenMax.staggerFromTo(
  '.tween_themeIkea',
  1.25, {
    opacity: 0,
    x: -300,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    x: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_text_aboutMe = TweenMax.staggerFromTo(
  '.tween_text_aboutMe',
  0.75, {
    opacity: 0,
    y: -100,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    y: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_text_skills = TweenMax.staggerFromTo(
  '.tween_text_skills',
  0.3, {
    opacity: 0,
    y: -30,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    y: 0,
    ease: Power4.easeInOut
  },
  0.1
);

//scenes

const scene_vectorMe = new ScrollMagic.Scene({
    triggerElement: '#animate1'
  })
  .triggerHook(0.9)
  // .addIndicators({
  //   name: "vectorMe",
  //   colorTrigger: "blue",
  //   indent: 200
  // })
  .setTween(tween_vectorMe)
  .setClassToggle('#reveal1_vectorMe', 'visible_vectorMe') // add class to reveal
  .reverse(false)
  .addTo(controller);

const scene_themeOtaku = new ScrollMagic.Scene({
    triggerElement: 'animate26',
    offset: 350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_otaku',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeOtaku)
  .reverse(false)
  .addTo(controller);

const scene_themeSocoda = new ScrollMagic.Scene({
    triggerElement: '#animate25',
    offset: -350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_socoda',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeSocoda)
  .reverse(false)
  .addTo(controller);

const scene_themeNova = new ScrollMagic.Scene({
    triggerElement: '#animate24',
    offset: -350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_Nova',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeNova)
  .reverse(false)
  .addTo(controller);

const scene_themeKoala = new ScrollMagic.Scene({
    triggerElement: '#animate23',
    offset: -350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_Koala',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeKoala)
  .reverse(false)
  .addTo(controller);

const scene_themeNespresso = new ScrollMagic.Scene({
    triggerElement: '#animate22',
    offset: -350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_Nespresso',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeNespresso)
  .reverse(false)
  .addTo(controller);

const scene_themeIkea = new ScrollMagic.Scene({
    triggerElement: '#animate21',
    offset: -400
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'Theme_Ikea',
  //   colorTrigger: 'red',
  //   indent: 300
  // })
  .setTween(tween_themeIkea)
  .reverse(false)
  .addTo(controller);

const scene_aboutMe = new ScrollMagic.Scene({
    triggerElement: '#animate3',
    offset: -150
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: "AboutMe_txt",
  //   colorTrigger: "red",
  //   indent: 300
  // })
  .setTween(tween_text_aboutMe)
  .reverse(false)
  .addTo(controller);

const scene_skills = new ScrollMagic.Scene({
    triggerElement: '#animate4',
    offset: -350
  })
  .triggerHook(0.4)
  // .addIndicators({
  //   name: 'AboutMe_txt',
  //   colorTrigger: 'red',
  //   indent: 50
  // })
  .setTween(tween_text_skills)
  .reverse(false)
  .addTo(controller);