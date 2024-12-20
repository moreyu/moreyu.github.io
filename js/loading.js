document.addEventListener('DOMContentLoaded', () => {
  const loadingBox = document.getElementById('loading-box');
  if (loadingBox) {
    setTimeout(() => {
      loadingBox.style.opacity = '0';
      setTimeout(() => {
        loadingBox.style.display = 'none';
      }, 400);
    }, 1000);
  }
}); 