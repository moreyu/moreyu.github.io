const fs = require('fs');

const files = [
  'articles/media-hub/home-assistant-complete-guide.html',
  'articles/media-hub/plex-ultimate-setup.html',
  'articles/media-hub/jellyfin-vs-plex-emby.html',
  'articles/crypto-pay/meme-coin-investment-guide.html',
  'articles/crypto-pay/defi-investment-guide.html',
  'articles/crypto-pay/longbridge-us-stock-guide.html',
  'articles/ai-coding/claude-code-complete-guide.html',
  'articles/ai-coding/cursor-vs-claude-code.html',
  'articles/ai-coding/github-copilot-advanced-tips.html',
  'articles/ai-coding/prompt-engineering-for-developers.html',
  'articles/ai-coding/ai-fullstack-development.html'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  
  let hasError = false;
  
  lines.forEach((line, idx) => {
    // 检查未闭合的 style 属性
    if (line.includes('style="') && !line.includes('">')) {
      console.log(`❌ ${file}:${idx + 1} - 未闭合的 style 属性`);
      console.log(`   ${line.trim()}`);
      hasError = true;
    }
    
    // 检查未闭合的 className 属性
    if (line.includes('className="') && !line.includes('">') && !line.includes('" ')) {
      const nextLine = lines[idx + 1];
      if (nextLine && !nextLine.includes('">')) {
        console.log(`❌ ${file}:${idx + 1} - 可能未闭合的 className 属性`);
        console.log(`   ${line.trim()}`);
        hasError = true;
      }
    }
  });
  
  if (!hasError) {
    console.log(`✅ ${file}`);
  }
});
