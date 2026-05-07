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

    // Add mobile menu button display style
    const mobileMenuStyles = `
    <style>
        @media (max-width: 768px) {
            #mobile-menu-btn {
                display: block !important;
            }
            #desktop-nav {
                display: none !important;
            }
        }
    </style>
`;

    // Insert before </head>
    if (content.includes('</head>')) {
        // Check if already has this style
        if (!content.includes('#mobile-menu-btn')) {
            content = content.replace('</head>', mobileMenuStyles + '</head>');
            fs.writeFileSync(file, content);
            console.log(`Updated: ${file}`);
        } else {
            console.log(`Already has mobile styles: ${file}`);
        }
    }
});

console.log('Done!');
