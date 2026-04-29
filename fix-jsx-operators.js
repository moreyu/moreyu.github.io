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

        // 在 JSX 的 <script type="text/babel"> 块中查找并修复 < 和 > 符号
        // 只在 JSX 内容区域（Article 函数的 return 部分）进行替换
        const jsxMatch = content.match(/(<script type="text\/babel">[\s\S]*?function Article\(\) \{[\s\S]*?return \()([\s\S]*?)(\);\s*\}[\s\S]*?<\/script>)/);

        if (jsxMatch) {
            let jsxContent = jsxMatch[2];
            const beforeJsx = jsxMatch[1];
            const afterJsx = jsxMatch[3];

            // 在文本内容中（不在标签中）替换 < 和 > 为 HTML 实体
            // 匹配 >文本内容< 的模式
            jsxContent = jsxContent.replace(/>([^<]*?)\s+<\s+([^<]*?)</g, (match, before, after) => {
                return `>${before} &lt; ${after}<`;
            });

            // 匹配 >文本内容> 的模式
            jsxContent = jsxContent.replace(/>([^<]*?)\s+>\s+([^<]*?)</g, (match, before, after) => {
                return `>${before} &gt; ${after}<`;
            });

            const newContent = beforeJsx + jsxContent + afterJsx;

            if (newContent !== content) {
                content = newContent;
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`✅ ${category}/${file}`);
            totalFixed++;
        }
    });
});

console.log(`\n🎉 总共修复了 ${totalFixed} 个文章页面的比较符号！`);
