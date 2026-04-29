const fs = require('fs');
const path = require('path');

// Find all HTML files in articles directory
function findArticles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...findArticles(fullPath));
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }

    return files;
}

// Add enhancement script to article
function enhanceArticle(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip if already enhanced
    if (content.includes('article-enhancements.js')) {
        console.log(`⏭️  Skipped (already enhanced): ${filePath}`);
        return false;
    }

    // Calculate relative path to script
    // Count how many levels deep from project root
    const parts = filePath.split('/');
    const articlesIndex = parts.indexOf('articles');
    const depth = parts.length - articlesIndex - 1; // How many levels after 'articles'
    const relativePath = '../../scripts/article-enhancements.js'; // Always 2 levels up from articles/category/

    // Add script before </body>
    const scriptTag = `    <script src="${relativePath}"></script>\n</body>`;
    content = content.replace('</body>', scriptTag);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Enhanced: ${filePath}`);
    return true;
}

// Main
const articlesDir = path.join(__dirname, '..', 'articles');
const articles = findArticles(articlesDir);

console.log(`Found ${articles.length} articles\n`);

let enhanced = 0;
articles.forEach(article => {
    if (enhanceArticle(article)) {
        enhanced++;
    }
});

console.log(`\n✨ Enhanced ${enhanced} articles`);
