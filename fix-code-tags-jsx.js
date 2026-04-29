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

        // 修复错误的 JSX 代码标签语法
        // <code{'>'} 应该是 <code>
        content = content.replace(/<code\{'>'}/g, '<code>');
        // </code{'>'} 应该是 </code>
        content = content.replace(/<\/code\{'>'}/g, '</code>');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            const count = (originalContent.match(/<code\{'>'}/g) || []).length;
            console.log(`✅ ${category}/${file} - 修复了 ${count} 处代码标签错误`);
            totalFixed += count;
        }
    });
});

console.log(`\n🎉 总共修复了 ${totalFixed} 处代码标签错误！`);
