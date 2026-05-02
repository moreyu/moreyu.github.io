const fs = require('fs');
const path = require('path');

const faviconHTML = `    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="../../assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../assets/images/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../assets/images/apple-touch-icon.png">
    `;

function addFaviconToFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if favicon already exists
    if (content.includes('favicon')) {
        console.log(`Skipped (already has favicon): ${filePath}`);
        return;
    }

    // Find the title tag and add favicon after it
    const titleMatch = content.match(/(<title>.*?<\/title>)/s);
    if (titleMatch) {
        const titleTag = titleMatch[1];
        content = content.replace(titleTag, titleTag + '\n' + faviconHTML);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    } else {
        console.log(`No title tag found in: ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.html')) {
            addFaviconToFile(filePath);
        }
    });
}

// Process all article directories
const articlesDir = path.join(__dirname, 'articles');
processDirectory(articlesDir);

console.log('\nFavicon links added to all article files!');
