const fs = require('fs');
const path = require('path');

// 需要恢复的文章列表
const articlesToRestore = [
    {
        path: 'articles/ai-coding/ai-fullstack-development.html',
        title: 'AI 驱动的全栈开发：从 Cursor 到 Claude Code 的实战经验',
        category: 'AI & VIBE CODING',
        date: '2026-04-29',
        description: '一年时间使用 AI 编程工具的真实体验，从提升 30% 效率到完全改变开发方式的心路历程'
    },
    {
        path: 'articles/ai-coding/claude-code-complete-guide.html',
        title: 'Claude Code 完全指南：最强 AI 编程助手深度评测',
        category: 'AI & VIBE CODING',
        date: '2026-04-29',
        description: '三个月深度使用 Claude Code 的完整体验，对比 Cursor、GitHub Copilot 的优劣势分析'
    },
    {
        path: 'articles/ai-coding/cursor-vs-claude-code.html',
        title: 'Cursor vs Claude Code：2026 年 AI 编程工具终极对决',
        category: 'AI & VIBE CODING',
        date: '2026-04-29',
        description: '深度对比两款最强 AI 编程工具，帮你选择最适合的开发伙伴'
    },
    {
        path: 'articles/ai-coding/github-copilot-advanced-tips.html',
        title: 'GitHub Copilot 进阶技巧：从入门到精通的 20 个实用技巧',
        category: 'AI & VIBE CODING',
        date: '2026-04-29',
        description: '两年 Copilot 使用经验总结，让你的 AI 编程效率提升 10 倍'
    },
    {
        path: 'articles/ai-coding/prompt-engineering-for-developers.html',
        title: '开发者的 Prompt Engineering：写出让 AI 真正理解你的提示词',
        category: 'AI & VIBE CODING',
        date: '2026-04-29',
        description: '从普通提示到专家级 Prompt，让 AI 编程工具发挥 100% 潜力的实战指南'
    },
    {
        path: 'articles/crypto-pay/defi-investment-guide.html',
        title: 'DeFi 投资实战指南：从 Uniswap 到 Aave 的完整攻略',
        category: 'CRYPTO & PAY',
        date: '2026-04-29',
        description: '两年 DeFi 投资经验总结，手把手教你在去中心化金融世界获利'
    },
    {
        path: 'articles/crypto-pay/exchange-alpha-strategy.html',
        title: '币安/OKX Alpha 投资策略：如何抓住交易所新币红利',
        category: 'CRYPTO & PAY',
        date: '2026-04-29',
        description: '深度解析交易所 Alpha 板块投资逻辑，分享实战中的盈利策略'
    },
    {
        path: 'articles/crypto-pay/longbridge-us-stock-guide.html',
        title: '长桥美股开户完全指南：从注册到交易的全流程详解',
        category: 'CRYPTO & PAY',
        date: '2026-04-29',
        description: '详细讲解长桥证券开户流程、入金方式、交易技巧和注意事项'
    },
    {
        path: 'articles/crypto-pay/meme-coin-investment-guide.html',
        title: 'Meme 币投资实战指南：如何在狗狗币、PEPE 等项目中获利',
        category: 'CRYPTO & PAY',
        date: '2026-04-29',
        description: '深度分析 Meme 币投资逻辑，分享实战经验和风险控制策略'
    },
    {
        path: 'articles/lifestyle/hifi-audio-guide.html',
        title: 'HiFi 音响入门指南：从千元到万元的音质进阶之路',
        category: 'MUSIC / MOVIE / SERIES',
        date: '2026-04-29',
        description: '三年烧钱经验总结，教你如何用合理预算搭建高品质音响系统'
    },
    {
        path: 'articles/lifestyle/home-theater-complete-guide.html',
        title: '家庭影院完全指南：从入门到发烧的全方位攻略',
        category: 'MUSIC / MOVIE / SERIES',
        date: '2026-04-29',
        description: '详细讲解家庭影院的选购、安装、调试和优化，打造影院级观影体验'
    },
    {
        path: 'articles/lifestyle/media-library-setup.html',
        title: '个人媒体库搭建指南：打造你的私人 Netflix',
        category: 'MUSIC / MOVIE / SERIES',
        date: '2026-04-29',
        description: '从 NAS 选购到 Plex/Jellyfin 配置，完整搭建个人流媒体中心'
    },
    {
        path: 'articles/lifestyle/streaming-services-guide.html',
        title: '2026 流媒体服务选购指南：Netflix、Disney+、HBO Max 全对比',
        category: 'MUSIC / MOVIE / SERIES',
        date: '2026-04-29',
        description: '深度对比主流流媒体平台，帮你选择最适合的订阅组合'
    },
    {
        path: 'articles/lifestyle/tv-series-recommendations-2026.html',
        title: '2026 年必看美剧推荐：从《继承之战》到《最后生还者》',
        category: 'MUSIC / MOVIE / SERIES',
        date: '2026-04-29',
        description: '精选 2026 年最值得追的 20 部美剧，涵盖各种类型和风格'
    },
    {
        path: 'articles/media-hub/home-assistant-complete-guide.html',
        title: 'Home Assistant 从入门到智能家居全屋控制',
        category: 'STREAM & SMART MEDIA HUB',
        date: '2026-04-29',
        description: '从零开始搭建 Home Assistant，实现全屋智能控制的完整指南'
    }
];

console.log('需要恢复的文章列表：');
console.log('='.repeat(80));
articlesToRestore.forEach((article, index) => {
    console.log(`${index + 1}. ${article.title}`);
    console.log(`   路径: ${article.path}`);
    console.log(`   分类: ${article.category}`);
    console.log('');
});

console.log('\n请使用 AI 工具为每篇文章生成完整的 React 组件内容');
console.log('参考模板: articles/media-hub/smart-tv-streaming-setup.html');
