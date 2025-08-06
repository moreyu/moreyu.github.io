// 主题控制
function initTheme() {
  console.log('Theme initialization started');
  
  // 从 localStorage 获取主题设置，如果没有则使用浏览器的颜色方案偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  console.log('Saved theme:', savedTheme);
  console.log('System prefers dark:', prefersDark);
  console.log('Final theme:', theme);
  
  // 立即应用主题
  applyTheme(theme);
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      console.log('System theme changed to:', e.matches ? 'dark' : 'light');
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // 设置主题切换按钮 - 支持多种选择器
  const themeToggle = document.querySelector('.theme-toggle') || document.getElementById('darkmode');
  console.log('Theme toggle button found:', themeToggle);
  
  if (themeToggle) {
    // 移除可能存在的旧事件监听器
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    
    newThemeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Theme toggle clicked');
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      console.log('Switching theme from', currentTheme, 'to', newTheme);
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    // 立即更新按钮图标
    updateThemeIcon(newThemeToggle, theme);
  } else {
    console.warn('No theme toggle button found');
  }
}

// 应用主题
function applyTheme(theme) {
  console.log('Applying theme:', theme);
  
  // 强制设置主题，覆盖任何硬编码的值
  document.documentElement.setAttribute('data-theme', theme);
  
  // 验证主题是否正确设置
  const appliedTheme = document.documentElement.getAttribute('data-theme');
  console.log('Applied theme:', appliedTheme);
  
  if (appliedTheme !== theme) {
    console.error('Theme application failed! Expected:', theme, 'Got:', appliedTheme);
  }
  
  // 更新主题切换按钮图标 - 支持多种选择器
  const themeToggle = document.querySelector('.theme-toggle') || document.getElementById('darkmode');
  if (themeToggle) {
    updateThemeIcon(themeToggle, theme);
  }
  
  // 触发自定义事件，通知主题变化
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  
  // 验证CSS变量是否正确应用
  setTimeout(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue('--bg');
    const textColor = computedStyle.getPropertyValue('--text');
    console.log('CSS variables - bg:', bgColor, 'text:', textColor);
  }, 100);
}

// 更新主题图标
function updateThemeIcon(themeToggle, theme) {
  const themeIcon = themeToggle.querySelector('i');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
    console.log('Theme icon updated to:', theme === 'dark' ? 'sun' : 'moon');
  }
}

// 在 DOM 加载完成前就初始化主题，避免闪烁
console.log('Initializing theme before DOM load');
initTheme();

// DOM 加载完成后再次初始化，确保事件监听器正确绑定
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, re-initializing theme');
  initTheme();
});

// 页面完全加载后再次检查
window.addEventListener('load', () => {
  console.log('Page fully loaded, final theme check');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  console.log('Final theme state:', currentTheme);
}); 