const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// 读取模板文件
const template = fs.readFileSync('posts/template/template.html', 'utf8');

// 递归获取所有 HTML 文件
function getHtmlFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (path.extname(file) === '.html' && !file.includes('template.html')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// 从文章中提取内容
function extractContent(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  
  // 1. 清理页面
  $('script').remove();
  $('style').remove();
  $('.back-home').remove();
  $('.reading-progress').remove();
  $('.theme-toggle').remove();
  $('.share-buttons').remove();
  $('.toc').remove();
  $('.toc-toggle').remove();
  
  // 2. 提取标题
  let title = '';
  const h1Elements = $('h1');
  if (h1Elements.length > 0) {
    title = $(h1Elements[0]).text().trim();
    // 移除所有重复的标题
    h1Elements.slice(1).remove();
  } else {
    title = $('title').text().split(' - ')[0] || '无标题';
  }
  
  // 3. 提取元数据
  let date = new Date().toISOString().split('T')[0];
  let category = '未分类';
  let tags = [];
  
  // 尝试从不同位置提取日期
  const dateMatch = html.match(/发布时间：(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    date = dateMatch[1];
  }
  
  // 尝试从不同位置提取分类
  const categoryMatch = html.match(/分类：([^,\n]+)/);
  if (categoryMatch) {
    category = categoryMatch[1].trim();
  }
  
  // 尝试从不同位置提取标签
  $('.tag').each((i, el) => {
    const tag = $(el).text().trim();
    if (tag && !tags.includes(tag)) {
      tags.push(tag);
    }
  });
  
  // 如果没有标签，使用分类作为标签
  if (tags.length === 0 && category !== '未分类') {
    tags = [category];
  }
  
  // 4. 提取主要内容
  let mainContent = '';
  const article = $('article').first();
  const postContent = $('.post-content').first();
  
  if (postContent.length) {
    mainContent = postContent.html();
  } else if (article.length) {
    mainContent = article.html();
  } else {
    // 如果找不到特定容器，尝试提取 body 中的主要内容
    const body = $('body');
    body.find('header, footer, nav, .back-home, .reading-progress, .theme-toggle, .share-buttons, .toc, .toc-toggle').remove();
    mainContent = body.html();
  }
  
  // 5. 清理内容
  const tempDiv = cheerio.load(`<div>${mainContent}</div>`, { decodeEntities: false });
  
  // 移除空元素和多余的包装
  tempDiv('*:empty').remove();
  
  // 清理内容
  mainContent = tempDiv.root().html()
    .replace(/<div[^>]*>\s*<\/div>/g, '')
    .replace(/<p[^>]*>\s*<\/p>/g, '')
    .replace(/<span[^>]*>\s*<\/span>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/(<[^>]+>)\s+/g, '$1')
    .replace(/\s+(<\/[^>]+>)/g, '$1')
    .trim();
  
  // 6. 生成目录
  const toc = [];
  const tempContent = cheerio.load(mainContent);
  const headings = tempContent('h2, h3');
  
  headings.each((i, el) => {
    const level = el.tagName === 'h2' ? 2 : 3;
    const text = tempContent(el).text().trim();
    if (text) {
      const id = text.toLowerCase()
        .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      tempContent(el).attr('id', id);
      toc.push(`${'  '.repeat(level - 2)}<li><a href="#${id}">${text}</a></li>`);
    }
  });
  
  // 更新内容中的标题 ID
  mainContent = tempContent.root().html();
  
  // 7. 计算阅读时间
  const readingTime = Math.max(1, Math.ceil(mainContent.length / 500));
  
  return {
    title,
    content: mainContent,
    date,
    category,
    tags: tags.map(tag => `<span class="tag">${tag}</span>`).join('\n'),
    toc: toc.join('\n'),
    readingTime: readingTime + '分钟'
  };
}

// 将内容应用到模板
function applyTemplate(template, data) {
  return template
    .replace(/{{title}}/g, data.title)
    .replace(/{{date}}/g, data.date)
    .replace(/{{readingTime}}/g, data.readingTime)
    .replace(/{{category}}/g, data.category)
    .replace(/{{content}}/g, data.content)
    .replace(/{{tags}}/g, data.tags)
    .replace(/{{toc}}/g, data.toc);
}

// 主函数
async function main() {
  try {
    require('cheerio');
  } catch (e) {
    console.log('正在安装依赖...');
    require('child_process').execSync('npm install cheerio');
  }
  
  const files = getHtmlFiles('posts');
  
  for (const file of files) {
    console.log(`正在处理: ${file}`);
    
    try {
      const html = fs.readFileSync(file, 'utf8');
      const data = extractContent(html);
      const newHtml = applyTemplate(template, data);
      
      // 备份原文件
      const backupFile = file + '.bak';
      if (fs.existsSync(file)) {
        fs.renameSync(file, backupFile);
      }
      
      // 写入新文件
      fs.writeFileSync(file, newHtml);
      
      console.log(`✅ 已转换: ${file}`);
    } catch (error) {
      console.error(`❌ 转换失败: ${file}`);
      console.error(error);
    }
  }
}

main().catch(console.error); 