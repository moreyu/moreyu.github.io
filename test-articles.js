const fs = require('fs');

const files = [
  'articles/media-hub/home-assistant-complete-guide.html',
  'articles/media-hub/plex-ultimate-setup.html',
  'articles/crypto-pay/meme-coin-investment-guide.html',
  'articles/ai-coding/claude-code-complete-guide.html'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  console.log(`\n=== ${file} ===`);
  
  // 检查 HTML 注释（JSX 中不允许）
  const htmlComments = content.match(/<!--[\s\S]*?-->/g);
  if (htmlComments && htmlComments.length > 0) {
    console.log(`❌ 发现 ${htmlComments.length} 个 HTML 注释（应该用 {/* */}）`);
  }
  
  // 检查 article-content 是否为空
  const emptyContent = content.match(/<div className="article-content">\s*<\/div>/);
  if (emptyContent) {
    console.log('❌ article-content div 为空');
  }
  
  // 检查是否有内容在 article-content 外面
  const contentOutside = content.match(/<div className="article-content">\s*<\/div>\s*<div>/);
  if (contentOutside) {
    console.log('❌ 内容在 article-content 外面');
  }
  
  // 检查 return 语句
  const returnMatch = content.match(/return\s*\(([\s\S]*?)\);\s*}\s*ReactDOM\.render/);
  if (returnMatch) {
    const returnContent = returnMatch[1];
    if (returnContent.includes('<div className="article-content">')) {
      console.log('✅ return 语句包含 article-content');
    } else {
      console.log('❌ return 语句不包含 article-content');
    }
  }
  
  // 检查 ReactDOM.render 次数
  const renders = (content.match(/ReactDOM\.render/g) || []).length;
  if (renders !== 1) {
    console.log(`❌ ReactDOM.render 出现 ${renders} 次（应该是 1 次）`);
  } else {
    console.log('✅ ReactDOM.render 只有 1 次');
  }
});
