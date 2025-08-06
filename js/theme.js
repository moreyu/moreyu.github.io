// 主题控制
function initTheme() {
  console.log('Theme initialization started');
  
  // 从 localStorage 获取主题设置，如果没有则使用浏览器的颜色方案偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  
  console.log('Initial theme:', theme);
  
  // 立即应用主题
  applyTheme(theme);
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // 设置主题切换按钮 - 支持多种选择器
  const themeToggle = document.querySelector('.theme-toggle') || document.getElementById('darkmode');
  console.log('Theme toggle button found:', themeToggle);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      console.log('Theme toggle clicked');
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      console.log('Switching theme from', currentTheme, 'to', newTheme);
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  } else {
    console.warn('No theme toggle button found');
  }
}

// 应用主题
function applyTheme(theme) {
  console.log('Applying theme:', theme);
  document.documentElement.setAttribute('data-theme', theme);
  
  // 更新主题切换按钮图标 - 支持多种选择器
  const themeToggle = document.querySelector('.theme-toggle') || document.getElementById('darkmode');
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
      console.log('Theme icon updated');
    }
  }
  
  // 触发自定义事件，通知主题变化
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

// 在 DOM 加载完成前就初始化主题，避免闪烁
initTheme();

// DOM 加载完成后再次初始化，确保事件监听器正确绑定
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, re-initializing theme');
  initTheme();
}); 