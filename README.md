# Liquid Glass Blog

一个基于液态玻璃设计系统的单页博客，具有视频背景和流畅的动画效果。

## 特性

- 🎨 液态玻璃态设计系统（Glassmorphism）
- 🎬 全屏循环视频背景，带自定义 JS 淡入淡出效果
- ✨ Framer Motion 入场动画
- 📱 完全响应式设计
- 🚀 纯静态页面，适合 GitHub Pages 托管

## 技术栈

- React 18.3.1 (CDN)
- Framer Motion 11.11.17
- Tailwind CSS
- Babel Standalone
- 纯 HTML/CSS/JS（无需构建工具）

## 本地预览

直接用浏览器打开 `index.html` 文件即可。

或者使用简单的 HTTP 服务器：

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve
```

然后访问 http://localhost:8080

## 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 将所有文件推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择主分支作为源

## 自定义

### 更换视频背景

编辑 `components/Hero.js` 和 `components/Capabilities.js` 中的视频 URL：

```javascript
<FadingVideo
    src="你的视频URL"
    // ...
/>
```

### 修改内容

- 导航栏：`components/Navbar.js`
- 首页内容：`components/Hero.js`
- 能力展示：`components/Capabilities.js`

### 调整样式

液态玻璃效果在 `index.html` 的 `<style>` 标签中定义：
- `.liquid-glass` - 轻微模糊效果
- `.liquid-glass-strong` - 强模糊效果

## 字体

- 标题：Instrument Serif (italic)
- 正文：Barlow

## 浏览器支持

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

需要支持 `backdrop-filter` CSS 属性。

## License

MIT
