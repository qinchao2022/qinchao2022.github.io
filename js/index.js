// index.js

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight / 1.5) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


function reveal_right() {
  const reveals_r = document.querySelectorAll(".reveal-right");

  for (let i = 0; i < reveals_r.length; i++) {
    const elementTopr = reveals_r[i].getBoundingClientRect().top;
    const windowHeightr = window.innerHeight;

    if (elementTopr < windowHeightr / 1.5) {
      reveals_r[i].classList.add("active");
    } else {
      reveals_r[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal_right);
window.addEventListener("load", reveal_right);


// dynamic count up
function setupCountOnScroll(id, targetNumber) {
  let hasCounted = false;

  function start() {
    const counter = new countUp.CountUp(id, targetNumber, {
      duration: 2.5,
      separator: ',',
    });
    if (!counter.error) counter.start();
  }

  function reveal() {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight / 1.5 && !hasCounted) {
      hasCounted = true;
      start();
    }
  }

  window.addEventListener('scroll', reveal);
}
setupCountOnScroll('data1', 99);
setupCountOnScroll('data2', 15);
