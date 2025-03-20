// 主题控制
function initTheme() {
  // 从 localStorage 获取主题设置，如果没有则使用浏览器的颜色方案偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  
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
  document.documentElement.setAttribute('data-theme', theme);
  
  // 更新主题切换按钮图标
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
  
  // 触发自定义事件，通知主题变化
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

// 在 DOM 加载完成前就初始化主题，避免闪烁
initTheme();

// DOM 加载完成后再次初始化，确保事件监听器正确绑定
document.addEventListener('DOMContentLoaded', initTheme); 