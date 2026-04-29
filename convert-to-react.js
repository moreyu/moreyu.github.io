const fs = require('fs');
const path = require('path');

// 需要转换的文章
const articlesToConvert = [
    'articles/ai-coding/ai-fullstack-development.html',
    'articles/ai-coding/claude-code-complete-guide.html',
    'articles/ai-coding/cursor-vs-claude-code.html',
    'articles/ai-coding/github-copilot-advanced-tips.html',
    'articles/ai-coding/prompt-engineering-for-developers.html',
    'articles/crypto-pay/defi-investment-guide.html',
    'articles/crypto-pay/exchange-alpha-strategy.html',
    'articles/crypto-pay/longbridge-us-stock-guide.html',
    'articles/crypto-pay/meme-coin-investment-guide.html',
    'articles/lifestyle/hifi-audio-guide.html',
    'articles/lifestyle/home-theater-complete-guide.html',
    'articles/lifestyle/media-library-setup.html',
    'articles/lifestyle/streaming-services-guide.html',
    'articles/lifestyle/tv-series-recommendations-2026.html',
    'articles/media-hub/home-assistant-complete-guide.html'
];

function convertToReact(filePath) {
    console.log(`Converting: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. 添加 React 脚本（如果没有）
    if (!content.includes('react@18')) {
        const reactScripts = `
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="../../styles/article.css">`;

        content = content.replace('</head>', `${reactScripts}\n</head>`);
    }

    // 2. 提取 body 中导航栏后的内容
    const navMatch = content.match(/<\/nav>([\s\S]*?)<footer>/);
    if (!navMatch) {
        console.log(`⚠ 跳过: ${filePath} (找不到内容)`);
        return;
    }

    let articleContent = navMatch[1].trim();

    // 3. 清理空的 class 和 style 属性，但保留有内容的
    articleContent = articleContent
        .replace(/\s+class=""\s*/g, ' ')
        .replace(/\s+style=""\s*/g, ' ')
        .replace(/<div\s+>/g, '<div>')
        .replace(/<div\s+>\s*<\/div>/g, '');

    // 4. 添加 className 到主要元素
    articleContent = articleContent
        .replace(/<article\s*>/g, '<article className="article-container">')
        .replace(/<div\s*>\s*<div\s*>\s*<h3\s*>文章导航/g, '<div className="article-sidebar"><div className="sidebar-sticky"><h3 className="sidebar-title">文章导航')
        .replace(/<div\s*>\s*<article/g, '<div className="article-content"><article');

    // 5. 构建新的 HTML 结构
    const newContent = content.replace(
        /<\/nav>[\s\S]*?<footer>/,
        `</nav>

    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        function Article() {
            return (
${articleContent}
            );
        }

        ReactDOM.render(<Article />, document.getElementById('root'));
    </script>

    <footer>`
    );

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Converted: ${filePath}`);
}

// 转换所有文章
console.log('开始转换文章为 React 组件格式...\n');
articlesToConvert.forEach(convertToReact);
console.log('\n✓ 所有文章已转换完成！');
