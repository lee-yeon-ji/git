// gsap.registerPlugin(MotionPathPlugin)

const $ = (node) => (node = document.querySelector(node));

const map = $('.map');
const current = $('.current');
const mart = $('.mart');
const medi = $('.medi');

let isScale = false;

function drawRoute(target, length) {
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
    },
  });
  tl.set(`${target} .pick`, { opacity: 0 })
    .to(map, {
      scale: 1,
      duration: isScale ? 2 : 0,
      x: 0,
      y: 0,
      ease: 'power3.inOut',
    })
    .set(`${target} .pick`, { opacity: 1 })
    .fromTo(
      `${target} .path`,
      { strokeDashoffset: length, strokeDashArray: length },
      { strokeDashoffset: 0 }
    )
    .to(
      `${target} .pick`,
      {
        motionPath: {
          path: `${target} .path`,
          align: `${target} .path`,
          alignOrigin: [0.5, 0.5],
        },
      },
      '<'
    );

  isScale = false;
}

function handleCurrent() {
  isScale = true;
  const tl = gsap.timeline();
  tl.to(map, {
    duration: 2,
    scale: 2,
    x: 200,
    y: -200,
    ease: 'power3.inOut',
    // onComplete: scaleState,
  });
  tl.to('#here', { y: -10, repeat: -1, yoyo: true });
}

function handleMart(e) {
  drawRoute('#emart', 496);
}

function handleMedi(e) {
  drawRoute('#medi', 604);
}

current.addEventListener('click', handleCurrent);
mart.addEventListener('click', handleMart);
medi.addEventListener('click', handleMedi);