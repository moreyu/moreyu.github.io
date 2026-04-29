const fs = require('fs');
const path = require('path');

const categories = [
    'ai-coding',
    'crypto-pay',
    'lifestyle',
    'media-hub'
];

// 新的导航栏HTML - 参考主站风格，玻璃态设计
const newNav = `    <nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); background: rgba(10, 10, 10, 0.8); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
        <div style="max-width: 1400px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
            <a href="../../index.html" style="font-size: 1.5rem; font-weight: 900; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-decoration: none; transition: all 0.3s ease;">
                Moreyu
            </a>
            <div style="display: flex; gap: 2rem; align-items: center;">
                <a href="../../articles.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; font-weight: 500; transition: all 0.3s ease; position: relative;">
                    📚 文章列表
                </a>
                <a href="../../index.html#blog" style="padding: 0.5rem 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                    返回首页
                </a>
            </div>
        </div>
    </nav>

    <div style="height: 80px;"></div>`;

categories.forEach(category => {
    const dir = path.join(__dirname, 'articles', category);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // 移除旧的导航栏（从<nav>到</nav>，包括后面的空行）
        content = content.replace(/<nav>[\s\S]*?<\/nav>\s*/g, '');

        // 在<body>后插入新导航栏
        content = content.replace(/<body>\s*/, '<body>\n' + newNav + '\n');

        // 移除文章内容中的返回首页链接
        content = content.replace(/<a href="\.\.\/\.\.\/index\.html#blog" className="back-link">← 返回首页<\/a>\s*/g, '');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ ${category}/${file}`);
    });
});

console.log('\n🎉 所有文章导航栏已更新！');
