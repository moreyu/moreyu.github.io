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

        // 删除在 <div style="height: 80px;"></div> 之后、<div id="root"></div> 之前的 JSX 导航栏
        // 这个导航栏使用了 JSX 对象语法 style={{...}}，不应该在 script 标签外面
        const pattern = /(<div style="height: 80px;"><\/div>\s*)<nav style=\{\{[^>]+>[\s\S]*?<\/nav>\s*<div style=\{\{height: '80px'\}\}><\/div>\s*(<div id="root"><\/div>)/;

        if (pattern.test(content)) {
            content = content.replace(pattern, '$1\n$2');
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ ${category}/${file}`);
            totalFixed++;
        }
    });
});

console.log(`\n🎉 总共修复了 ${totalFixed} 个文章页面的重复导航栏！`);
