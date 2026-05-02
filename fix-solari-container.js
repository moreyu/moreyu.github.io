const fs = require('fs');
const path = require('path');

// Recursively find all HTML files in articles directory
function findArticleFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findArticleFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const articlesDir = path.join(__dirname, 'articles');
const articleFiles = findArticleFiles(articlesDir);

console.log(`Found ${articleFiles.length} article files`);

let updatedCount = 0;

articleFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Fix: Change logo-container to solari-container
    if (content.includes("getElementById('logo-container')")) {
        content = content.replace(
            /getElementById\('logo-container'\)/g,
            "getElementById('solari-container')"
        );

        fs.writeFileSync(file, content);
        updatedCount++;
        console.log(`✓ Updated: ${path.relative(__dirname, file)}`);
    }
});

console.log(`\nUpdated ${updatedCount} files`);
