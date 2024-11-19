// 在这里添加 JavaScript 代码来控制加载动画的显示和隐藏
// 例如，你可以使用 JavaScript 来检测页面加载进度，当页面加载完成时，隐藏加载动画

// 获取加载动画元素
const loader = document.querySelector('.loader');

// 示例：模拟加载过程，2秒后隐藏加载动画
setTimeout(() => {
    loader.style.display = 'none';
}, 2000);
