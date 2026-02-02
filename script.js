const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120; // 距离视口底部多少像素时触发

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// 监听滚动事件
window.addEventListener("scroll", revealOnScroll);

// 初始化运行一次，以防第一屏已经在视口内
revealOnScroll();