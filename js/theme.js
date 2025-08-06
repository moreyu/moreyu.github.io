// 简化的主题控制 - 只设置默认主题，移除切换功能
function initTheme() {
  console.log('Theme initialization started');
  
  // 设置默认主题为浅色模式
  const defaultTheme = 'light';
  
  console.log('Setting default theme:', defaultTheme);
  
  // 应用默认主题
  applyTheme(defaultTheme);
}

// 应用主题
function applyTheme(theme) {
  console.log('Applying theme:', theme);
  
  // 设置主题
  document.documentElement.setAttribute('data-theme', theme);
  
  // 验证主题是否正确设置
  const appliedTheme = document.documentElement.getAttribute('data-theme');
  console.log('Applied theme:', appliedTheme);
  
  if (appliedTheme !== theme) {
    console.error('Theme application failed! Expected:', theme, 'Got:', appliedTheme);
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

// 在 DOM 加载完成前就初始化主题，避免闪烁
console.log('Initializing theme before DOM load');
initTheme();

// DOM 加载完成后再次初始化，确保主题正确应用
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