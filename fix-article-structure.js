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

        // 检查是否需要修复
        if (!content.includes('type="text/babel"') || !content.includes('ReactDOM.render(<Article />')) {
            return;
        }

        // 提取 JSX 函数中的内容
        const jsxMatch = content.match(/<script type="text\/babel">\s*const \{ useState, useEffect \} = React;\s*function Article\(\) \{\s*return \(([\s\S]*?)\);\s*\}\s*ReactDOM\.render\(<Article \/>, document\.getElementById\('root'\)\);\s*<\/script>/);

        if (!jsxMatch) {
            console.log(`⚠️  ${category}/${file} - 无法匹配 JSX 结构`);
            return;
        }

        const articleContent = jsxMatch[1].trim();

        // 移除 <div id="root"></div>
        content = content.replace(/<div id="root"><\/div>\s*/g, '');

        // 移除整个 JSX script 块
        content = content.replace(/<script type="text\/babel">[\s\S]*?ReactDOM\.render\(<Article \/>, document\.getElementById\('root'\)\);[\s\S]*?<\/script>/g, '');

        // 在导航栏后插入文章内容
        content = content.replace(/(<div style="height: 80px;"><\/div>)/, `$1\n\n${articleContent}`);

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ ${category}/${file}`);
        totalFixed++;
    });
});

console.log(`\n🎉 总共修复了 ${totalFixed} 个文章页面结构！`);
