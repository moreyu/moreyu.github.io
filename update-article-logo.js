const fs = require('fs');
const path = require('path');

const categories = [
    'ai-coding',
    'crypto-pay',
    'lifestyle',
    'media-hub'
];

// 新的导航栏HTML - 使用 SolariLogo 组件
const newNav = `    <nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); background: rgba(10, 10, 10, 0.8); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
        <div style="max-width: 1400px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
            <div id="logo-container"></div>
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

// 需要在 </head> 前添加的脚本引用
const scriptsToAdd = `    <script src="../../components/SolariLogo.js"></script>`;

// 需要在 </body> 前添加的初始化脚本
const initScript = `
    <script>
        // 初始化 Logo
        const logoContainer = document.getElementById('logo-container');
        if (logoContainer && window.SolariLogo) {
            const logo = React.createElement(window.SolariLogo);
            ReactDOM.render(logo, logoContainer);
        }
    </script>`;

categories.forEach(category => {
    const dir = path.join(__dirname, 'articles', category);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        // 移除旧的导航栏
        content = content.replace(/<nav style="position: fixed[\s\S]*?<div style="height: 80px;"><\/div>/g, '');

        // 在<body>后插入新导航栏
        content = content.replace(/<body>\s*/, '<body>\n' + newNav + '\n');

        // 在</head>前添加 SolariLogo 脚本引用（如果还没有）
        if (!content.includes('SolariLogo.js')) {
            content = content.replace(/<\/head>/, scriptsToAdd + '\n</head>');
        }

        // 在</body>前添加初始化脚本（如果还没有）
        if (!content.includes('初始化 Logo')) {
            content = content.replace(/<\/body>/, initScript + '\n</body>');
        }

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ ${category}/${file}`);
    });
});

console.log('\n🎉 所有文章页 Logo 已更新为分瓣效果！');
