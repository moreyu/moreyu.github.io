// 主题控制
function initTheme() {
  // 从 localStorage 获取主题设置，如果没有则使用浏览器的颜色方案偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // 立即应用主题
  applyTheme(theme);
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // 设置主题切换按钮
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

// 应用主题
function applyTheme(theme) {
  // 设置文档主题
  document.documentElement.setAttribute('data-theme', theme);
  
  // 更新主题切换按钮图标
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }
  
  // 触发自定义事件，通知主题变化
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

// 在 DOM 加载完成前就初始化主题，避免闪烁
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // 添加调试信息
  console.log('当前主题：', document.documentElement.getAttribute('data-theme'));
  console.log('localStorage 中的主题：', localStorage.getItem('theme'));
}); 