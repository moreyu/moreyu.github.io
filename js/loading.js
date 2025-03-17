(function() {
  const preloader = {
    endLoading: () => {
      const loadingBox = document.getElementById('loading-box');
      loadingBox.classList.add("loaded");
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        document.querySelectorAll('.cursor-effect').forEach(el => el.remove());
      }, 300);
    },
    initLoading: () => {
      document.body.style.overflow = 'hidden';
      
      // 添加云朵
      const loadingBg = document.querySelector('.loading-bg');
      for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = `${Math.random() * 20 + 10}%`;
        cloud.style.animationDelay = `${Math.random() * 10}s`;
        loadingBg.appendChild(cloud);
      }
      
      // 添加太阳
      const sun = document.createElement('div');
      sun.className = 'sun';
      loadingBg.appendChild(sun);
      
      // 添加鼠标移动效果
      const loadingBox = document.getElementById('loading-box');
      
      // 创建鼠标跟随效果
      loadingBox.addEventListener('mousemove', (e) => {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-effect';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        document.body.appendChild(cursor);
        
        // 淡出动画
        setTimeout(() => {
          cursor.style.opacity = '0';
          setTimeout(() => cursor.remove(), 300);
        }, 100);
      });

      // 添加悬浮效果
      const avatar = document.querySelector('.loading-avatar');
      avatar.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        avatar.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
      });

      avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = '';
      });
    }
  }
  
  preloader.initLoading();
  
  document.getElementById('loading-box').addEventListener('click', () => {
    preloader.endLoading();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      preloader.endLoading();
    }
  });
})();