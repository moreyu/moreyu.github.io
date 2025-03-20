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
    } else if (path.extname(file) === '.html' && file !== 'template.html') {
      results.push(filePath);
    }
  }
  
  return results;
}

// 从旧文章中提取内容
function extractContent(html) {
  const $ = cheerio.load(html);
  
  // 提取标题
  const title = $('title').text().split(' - ')[0] || $('h1').first().text() || '无标题';
  
  // 提取内容
  let content = '';
  const mainContent = $('.post-content').first();
  
  if (mainContent.length) {
    // 如果已经是新模板格式，提取主要内容
    content = mainContent.html();
  } else {
    // 如果是旧格式，尝试提取文章主体
    const article = $('article').first();
    if (article.length) {
      content = article.html();
    } else {
      // 创建临时容器获取 body 内容
      content = $('body').html();
    }
  }
  
  // 使用临时容器处理内容
  const tempDiv = cheerio.load(`<div>${content}</div>`, null, false);
  
  // 移除不需要的元素
  tempDiv('script').remove();
  tempDiv('style').remove();
  tempDiv('header').remove();
  tempDiv('footer').remove();
  tempDiv('nav').remove();
  tempDiv('aside').remove();
  tempDiv('.back-home').remove();
  tempDiv('.reading-progress').remove();
  tempDiv('.toc').remove();
  tempDiv('.post-meta').remove();
  tempDiv('.post-tags').remove();
  
  // 移除重复的标题
  const h1s = tempDiv('h1');
  if (h1s.length > 1) {
    h1s.slice(1).remove();
  }
  
  // 清理多余的嵌套
  content = tempDiv.root().html();
  
  // 移除空的容器和重复的标题
  content = content
    .replace(/<div[^>]*>\s*<\/div>/g, '')
    .replace(/<p[^>]*>\s*<\/p>/g, '')
    .replace(/<span[^>]*>\s*<\/span>/g, '')
    .replace(/<h1[^>]*>([^<]+)<\/h1>(\s*<h1[^>]*>\1<\/h1>)+/g, '<h1>$1</h1>')
    .replace(/(<div[^>]*>(\s*<div[^>]*>)*\s*)(<h[1-6][^>]*>.*?<\/h[1-6]>)(\s*<\/div>)*\s*\2/g, '$3')
    .replace(/<div[^>]*>\s*(<div[^>]*>\s*)*(.+?)\s*(<\/div>\s*)*<\/div>/g, '$2')
    .replace(/<article[^>]*>\s*(<div[^>]*>\s*)*(.+?)\s*(<\/div>\s*)*<\/article>/g, '$2')
    .replace(/<main[^>]*>\s*(<div[^>]*>\s*)*(.+?)\s*(<\/div>\s*)*<\/main>/g, '$2')
    .replace(/<div[^>]*>(?:\s*<div[^>]*>)*\s*([\s\S]*?)\s*(?:<\/div>\s*)*<\/div>/g, '$1')
    .replace(/<div[^>]*>([\s\S]*?)<\/div>/g, '$1');
  
  // 提取日期
  let date = new Date().toISOString().split('T')[0];
  const timeEl = $('time').first();
  const metaEl = $('.meta').first();
  
  if (timeEl.length && timeEl.attr('datetime')) {
    date = timeEl.attr('datetime').split('T')[0];
  } else if (metaEl.length) {
    const dateMatch = metaEl.text().match(/发布时间：(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      date = dateMatch[1];
    }
  }
  
  // 提取分类
  let categories = ['未分类'];
  const categoryEl = $('.post-meta-categories');
  const metaCategoryMatch = $('.meta').text().match(/分类：(.+?)(?=\s|$)/);
  
  if (categoryEl.length) {
    categories = categoryEl.map((i, el) => $(el).text()).get();
  } else if (metaCategoryMatch) {
    categories = metaCategoryMatch[1].split(',').map(c => c.trim());
  }
  
  // 提取标签并去重
  let tags = new Set();
  const tagEls = $('.post-meta__tags, .tag');
  
  if (tagEls.length) {
    tagEls.each((i, el) => {
      const tag = $(el).text().trim();
      if (tag && !tag.includes('返回首页')) {
        tags.add(tag);
      }
    });
  } else {
    categories.forEach(tag => {
      if (tag && !tag.includes('返回首页')) {
        tags.add(tag);
      }
    });
  }
  
  // 生成目录
  const toc = [];
  const headings = tempDiv('h2, h3');
  headings.each((i, el) => {
    const level = el.tagName === 'h2' ? 2 : 3;
    const text = tempDiv(el).text().replace(/[#\d.]+\s*/, ''); // 移除标题前的数字和点
    const id = text.toLowerCase()
      .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]+/g, '-') // 将非中文、英文、数字字符转换为连字符
      .replace(/^-+|-+$/g, ''); // 移除首尾连字符
    tempDiv(el).attr('id', id);
    toc.push(`${'  '.repeat(level - 2)}<li><a href="#${id}">${text}</a></li>`);
  });
  
  // 更新内容中的标题 ID
  content = tempDiv.root().html();
  
  // 清理内容
  content = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/(<[^>]+>)\s+/g, '$1')
    .replace(/\s+(<\/[^>]+>)/g, '$1')
    .replace(/<div[^>]*>(?:\s*<div[^>]*>)*\s*([\s\S]*?)\s*(?:<\/div>\s*)*<\/div>/g, '$1')
    .replace(/<div[^>]*>([\s\S]*?)<\/div>/g, '$1')
    .replace(/(<h1[^>]*>[\s\S]*?<\/h1>)[\s\S]*\1/g, '$1')
    .replace(/(<span class="tag">[^<]+<\/span>\s*)+/g, (match, p1) => {
      const tags = new Set();
      const regex = /<span class="tag">([^<]+)<\/span>/g;
      let m;
      while ((m = regex.exec(match)) !== null) {
        tags.add(m[0]);
      }
      return Array.from(tags).join('\n');
    })
    .trim();
  
  return {
    title,
    content,
    date,
    category: categories[0],
    tags: Array.from(tags).map(tag => `<span class="tag">${tag}</span>`).join('\n'),
    toc: toc.join('\n'),
    readingTime: Math.ceil(content.length / 500) + '分钟'
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
    .replace(/{{toc}}/g, data.toc)
    .replace(/{{days}}/g, Math.floor((Date.now() - new Date('2024-01-01')) / (1000 * 60 * 60 * 24)));
}

// 主函数
async function main() {
  // 安装依赖
  try {
    require('cheerio');
  } catch (e) {
    console.log('正在安装依赖...');
    require('child_process').execSync('npm install cheerio');
  }
  
  // 获取所有 HTML 文件
  const files = getHtmlFiles('posts');
  
  // 转换每个文件
  for (const file of files) {
    if (file.includes('template.html') || file.includes('my-first-post.html')) {
      continue;
    }
    
    console.log(`正在处理: ${file}`);
    
    try {
      const html = fs.readFileSync(file, 'utf8');
      const data = extractContent(html);
      const newHtml = applyTemplate(template, data);
      
      // 备份原文件
      const backupFile = file + '.bak';
      fs.renameSync(file, backupFile);
      
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