const fs = require('fs');
const path = require('path');

const categories = [
    'ai-coding',
    'crypto-pay',
    'lifestyle',
    'media-hub'
];

let totalFixed = 0;

categories.forEach(category => {
    const dir = path.join(__dirname, 'articles', category);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        const originalContent = content;

        // 移除重复的导航栏（在 <div style="height: 80px;"></div> 之后的错误导航栏）
        // 匹配从 <div style="height: 80px;"></div> 到 <div id="root"></div> 之间的所有内容
        content = content.replace(/(<div style="height: 80px;"><\/div>)\s*<nav style=\{\{[^}]+\}\}>[\s\S]*?<\/nav>\s*<div style=\{\{height: '80px'\}\}><\/div>\s*<div style=\{\{[^}]+\}\}>\s*(<div id="root"><\/div>)/g, '$1\n$2');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ ${category}/${file} - 移除了重复的导航栏`);
            totalFixed++;
        }
    });
});

console.log(`\n🎉 总共修复了 ${totalFixed} 个文章页面！`);
