
let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 向下滚动 - 隐藏导航栏
    navbar.style.top = "-80px"; // 根据导航栏高度可调
  } else {
    // 向上滚动 - 显示导航栏
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// 固定导航栏
// 获取元素
const toggleBtn = document.getElementById('nav-toggle');
const floatingNav = document.getElementById('floating-nav');

// 点击按钮显示/隐藏导航栏，并切换按钮图案
if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡到 document
        floatingNav.classList.toggle('show');
        toggleBtn.textContent = floatingNav.classList.contains('show') ? '×' : '☰';
});
}


// 点击导航项，跳转锚点并关闭导航栏
if (floatingNav) {
floatingNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if(targetEl){
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        floatingNav.classList.remove('show'); // 自动关闭
        toggleBtn.textContent = '☰';          // 恢复按钮图案
    });
});
}


// 点击页面其他地方关闭导航栏
document.addEventListener('click', (e) => {
    if(floatingNav.classList.contains('show')) {
        floatingNav.classList.remove('show');
        toggleBtn.textContent = '☰'; // 恢复按钮图案
    }
});

// 阻止点击导航栏本身关闭
if (floatingNav) {
    floatingNav.addEventListener('click', (e) => {
    e.stopPropagation();
});
}

