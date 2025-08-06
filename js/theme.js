// 主题切换功能 - 简单可靠的实现
let currentTheme = 'light';

// 主题配置
const themes = {
  light: {
    '--primary': '#FF375F',
    '--secondary': '#40C8E0',
    '--accent': '#30D158',
    '--text': '#1d1d1f',
    '--bg': '#fbfbfd',
    '--card-bg': '#ffffff',
    '--border': '#d2d2d7',
    '--shadow': '0 4px 6px -1px rgba(0,0,0,.1)',
    '--gradient-start': '#FF375F',
    '--gradient-end': '#40C8E0'
  },
  dark: {
    '--primary': '#FF453A',
    '--secondary': '#32D74B',
    '--accent': '#0A84FF',
    '--text': '#f5f5f7',
    '--bg': '#000000',
    '--card-bg': '#1d1d1f',
    '--border': '#424245',
    '--shadow': '0 4px 6px -1px rgba(255,255,255,.1)',
    '--gradient-start': '#FF453A',
    '--gradient-end': '#32D74B'
  }
};

// 初始化主题
function initTheme() {
  console.log('Theme initialization started');
  
  // 从localStorage获取保存的主题，默认为light
  const savedTheme = localStorage.getItem('theme') || 'light';
  currentTheme = savedTheme;
  
  console.log('Saved theme:', savedTheme);
  
  // 应用主题
  applyTheme(currentTheme);
  
  // 更新按钮图标
  updateThemeIcon();
}

// 应用主题
function applyTheme(theme) {
  console.log('Applying theme:', theme);
  
  // 设置data-theme属性
  document.documentElement.setAttribute('data-theme', theme);
  
  // 直接设置CSS变量
  const root = document.documentElement;
  const themeVars = themes[theme];
  
  Object.entries(themeVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
  
  // 验证主题是否正确设置
  const appliedTheme = document.documentElement.getAttribute('data-theme');
  console.log('Applied theme:', appliedTheme);
  
  if (appliedTheme !== theme) {
    console.error('Theme application failed! Expected:', theme, 'Got:', appliedTheme);
  }
  
  // 保存到localStorage
  localStorage.setItem('theme', theme);
  
  // 触发自定义事件
  document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  
  // 验证CSS变量
  setTimeout(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const bgColor = computedStyle.getPropertyValue('--bg');
    const textColor = computedStyle.getPropertyValue('--text');
    console.log('CSS variables - bg:', bgColor, 'text:', textColor);
  }, 100);
}

// 切换主题
function toggleTheme() {
  console.log('Theme toggle clicked');
  
  // 切换主题
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  console.log('Switching theme from', currentTheme, 'to', newTheme);
  
  currentTheme = newTheme;
  applyTheme(newTheme);
  updateThemeIcon();
  
  // 添加切换动画效果
  addToggleAnimation();
}

// 更新主题图标
function updateThemeIcon() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
      } else {
        icon.className = 'fas fa-moon';
      }
      console.log('Theme icon updated to:', currentTheme === 'dark' ? 'sun' : 'moon');
    }
  }
}

// 添加切换动画效果
function addToggleAnimation() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
    setTimeout(() => {
      themeToggle.style.transform = 'scale(1) rotate(360deg)';
    }, 150);
  }
}

// 全局函数，供HTML中的onclick调用
window.toggleTheme = toggleTheme;

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing theme');
  initTheme();
});

// 页面完全加载后再次检查
window.addEventListener('load', () => {
  console.log('Page fully loaded, final theme check');
  console.log('Final theme state:', currentTheme);
}); 