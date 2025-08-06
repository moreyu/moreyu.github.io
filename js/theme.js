// 主题切换功能 - Chrome兼容性增强版
let currentTheme = 'light';

// 检测浏览器
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
console.log('Browser detection:', { isChrome, userAgent: navigator.userAgent });

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
  console.log('Theme initialization started - Chrome mode:', isChrome);
  
  // 从localStorage获取保存的主题，默认为light
  const savedTheme = localStorage.getItem('theme') || 'light';
  currentTheme = savedTheme;
  
  console.log('Saved theme:', savedTheme);
  
  // 应用主题
  applyTheme(currentTheme);
  
  // 更新按钮图标
  updateThemeIcon();
  
  // Chrome特定：强制重绘
  if (isChrome) {
    console.log('Chrome detected, forcing repaint');
    forceRepaint();
  }
}

// 强制重绘（Chrome特定）
function forceRepaint() {
  const body = document.body;
  if (body) {
    // 触发重绘
    body.style.display = 'none';
    body.offsetHeight; // 强制重排
    body.style.display = '';
  }
}

// 应用主题
function applyTheme(theme) {
  console.log('Applying theme:', theme, '- Chrome mode:', isChrome);
  
  // 设置data-theme属性
  document.documentElement.setAttribute('data-theme', theme);
  
  // 直接设置CSS变量
  const root = document.documentElement;
  const themeVars = themes[theme];
  
  Object.entries(themeVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
    console.log('Set CSS variable:', property, '=', value);
  });
  
  // Chrome特定：强制更新
  if (isChrome) {
    // 强制触发样式重新计算
    root.style.cssText = root.style.cssText;
    console.log('Chrome: Forced CSS update');
  }
  
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
    
    // Chrome特定验证
    if (isChrome) {
      console.log('Chrome: CSS variables verification');
      console.log('Expected bg:', themeVars['--bg'], 'Actual:', bgColor);
      console.log('Expected text:', themeVars['--text'], 'Actual:', textColor);
    }
  }, 100);
}

// 切换主题
function toggleTheme() {
  console.log('Theme toggle clicked - Chrome mode:', isChrome);
  
  // 切换主题
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  console.log('Switching theme from', currentTheme, 'to', newTheme);
  
  currentTheme = newTheme;
  applyTheme(newTheme);
  updateThemeIcon();
  
  // 添加切换动画效果
  addToggleAnimation();
  
  // Chrome特定：延迟强制重绘
  if (isChrome) {
    setTimeout(() => {
      console.log('Chrome: Delayed repaint');
      forceRepaint();
    }, 200);
  }
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
  } else {
    console.warn('Theme toggle button not found');
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

// 多重事件绑定（Chrome兼容性）
function setupEventListeners() {
  console.log('Setting up event listeners - Chrome mode:', isChrome);
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    // 移除可能存在的旧事件监听器
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    
    // 添加新的事件监听器
    newThemeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Event listener triggered');
      toggleTheme();
    });
    
    console.log('Event listener added successfully');
  } else {
    console.warn('Theme toggle button not found for event listener');
  }
}

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing theme - Chrome mode:', isChrome);
  initTheme();
  setupEventListeners();
});

// 页面完全加载后再次检查
window.addEventListener('load', () => {
  console.log('Page fully loaded, final theme check - Chrome mode:', isChrome);
  console.log('Final theme state:', currentTheme);
  
  // Chrome特定：最终验证
  if (isChrome) {
    setTimeout(() => {
      const computedStyle = getComputedStyle(document.documentElement);
      const bgColor = computedStyle.getPropertyValue('--bg');
      console.log('Chrome final check - bg color:', bgColor);
    }, 500);
  }
}); 