# M2REYU 个人博客

一个现代化、响应式的个人博客网站，包含技术、投资、生活等多个主题的深度文章。

## 🚀 快速开始

### 本地预览

```bash
cd /Users/m2reyu/.openclaw/workspace/moreyu.github.io
python3 -m http.server 8889
```

然后访问: http://localhost:8889

### 文件结构

```
.
├── index.html              # 主页
├── articles.html           # 文章列表页
├── components/             # React组件
│   ├── Hero.js
│   ├── BlogPosts.js
│   └── Capabilities.js
└── articles/               # 文章目录
    ├── media-hub/          # 智能媒体 (5篇)
    ├── crypto-pay/         # 加密支付 (5篇)
    ├── ai-coding/          # AI编程 (5篇)
    └── lifestyle/          # 生活方式 (4篇)
```

## 📝 内容统计

- **总文章数**: 19篇
- **总字数**: 约175,000字
- **板块数**: 4个
- **页面数**: 21个

## 🎨 技术栈

- React 18
- Tailwind CSS
- 纯静态HTML
- Cosmos动画SVG图标

## 🌐 部署

### GitHub Pages

1. 推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择main分支作为源
4. 访问 https://moreyu.github.io

### 其他平台

- Vercel: 直接导入GitHub仓库
- Netlify: 拖拽文件夹上传
- Cloudflare Pages: 连接Git仓库

## 📖 文章板块

### STREAM & SMART MEDIA HUB
智能家居与媒体中心搭建

### CRYPTO & PAY
加密货币投资与支付研究

### AI & VIBE CODING
AI辅助编程与开发工具

### MUSIC / MOVIE / SERIES
影音娱乐与生活方式

## 🔧 维护

### 添加新文章

1. 在对应的 `articles/` 子目录创建HTML文件
2. 更新 `articles.html` 添加文章链接
3. 更新 `components/BlogPosts.js` 中的文章数量

### 修改样式

- 主题色在 `index.html` 的 `:root` CSS变量中定义
- 组件样式在各自的 `.js` 文件中

## 📄 许可

© 2026 M2REYU. All rights reserved.

---

**当前状态**: ✅ 生产就绪

**最后更新**: 2026年1月
