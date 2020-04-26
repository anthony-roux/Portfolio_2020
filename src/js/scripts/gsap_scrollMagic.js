//controller

const controller = new ScrollMagic.Controller();

//tween
const tween_vectorMe = TweenMax.from('#vectorMe', 1, {
  scale: 0.9,
  duration: '80%',
  ease: Power4.easeInOut
});

const tween_text_hero = TweenMax.staggerFromTo(
  '.tween_text',
  0.75,
  {
    opacity: 0,
    y: -100,
    ease: Power4.easeInOut
  },
  {
    opacity: 1,
    y: 0,
    ease: Power4.easeInOut
  },
  0.1
);

const tween_text_aboutMe = TweenMax.staggerFromTo(
  '.tween_text_aboutMe',
  0.75,
  {
    opacity: 0,
    y: -100,
    ease: Power4.easeInOut
  },
  {
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

const scene_aboutMe = new ScrollMagic.Scene({
  triggerElement: '#animate3',
  offset: -100
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
