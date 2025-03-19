// 滚动进度条控制
function initScrollProgress() {
  // 创建进度条元素
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.insertBefore(progressBar, document.body.firstChild);

  // 更新进度条
  function updateProgress() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrolled}%`;
  }

  // 监听滚动事件
  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);

  // 初始化进度条
  updateProgress();
}

// 在 DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', initScrollProgress); 