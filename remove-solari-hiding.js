const fs = require('fs');
const path = require('path');

// Find all article HTML files recursively
function findArticles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findArticles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const articles = findArticles('articles');

console.log(`Found ${articles.length} article files`);

articles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Skip redirect pages
    if (content.includes('http-equiv="refresh"')) {
        console.log(`Skipping redirect: ${file}`);
        return;
    }

    // Remove the Solari hiding styles
    const removePattern = /\s*\/\* Hide Solari on very small screens \*\/\s*@media \(max-width: 480px\) \{\s*#solari-display \{\s*display: none !important;\s*\}\s*\}\s*/g;

    if (content.match(removePattern)) {
        content = content.replace(removePattern, '');
        fs.writeFileSync(file, content);
        console.log(`Removed Solari hiding from: ${file}`);
    } else {
        console.log(`No Solari hiding found in: ${file}`);
    }
});

console.log('Done!');
