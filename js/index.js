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
setupCountOnScroll('data1', 53);
setupCountOnScroll('data2', 15);





// 首页动画加载
// 等待页面完全加载（包括图片、视频、CSS）
window.addEventListener('load', () => {
    const loaderContent = document.querySelector('.loader-content');
    const topDoor = document.querySelector('.door.mask-top');
    const bottomDoor = document.querySelector('.door.mask-bottom');
    const mainContent = document.getElementById('main-content');

    // 隐藏中心文字和转圈
  setTimeout(() => {
      loaderContent.classList.add('hidden');
  }, 300);

    // 延时门帘动画
    setTimeout(() => {
        topDoor.classList.add('open');
        bottomDoor.classList.add('open');
        // mainContent.style.opacity = 1;
    }, 500);

    // 完全移除 loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1600);
});


// 星星
function generateStars(container, baseCount) {
  // 根据屏幕宽度和高度调整星星数量
  const screenArea = window.innerWidth * window.innerHeight;
  const scale = screenArea / (1920 * 1080); // 基于1080p屏幕比例
  const starCount = Math.floor(baseCount * scale);

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = star.style.height = (Math.random() * 2 + 1) + 'px';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.opacity = Math.random();
    container.appendChild(star);
  }
}

// 生成星星
const topMask = document.querySelector('.door.mask-top');
const bottomMask = document.querySelector('.door.mask-bottom');
const initialTitle = document.body.querySelector('.main-section-header');

generateStars(topMask, 120);    // 上半屏初始120颗星
generateStars(bottomMask, 120); // 下半屏初始120颗星
generateStars(initialTitle, 100); // 标题区域100颗星

// 可选：窗口改变时重新生成星星
window.addEventListener('resize', () => {
  topMask.innerHTML = '';
  bottomMask.innerHTML = '';
  generateStars(topMask, 60);
  generateStars(bottomMask, 60);
  generateStars(initialTitle, 100);
});
