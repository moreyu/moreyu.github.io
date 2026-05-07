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

    // Add mobile-specific styles for body padding
    const mobileStyles = `
        /* Mobile: Add padding to avoid nav overlap */
        @media (max-width: 768px) {
            body {
                padding-top: 70px; /* Height of fixed nav */
            }

            .article-wrapper {
                margin-top: 1rem;
            }

            /* Hide Solari on very small screens */
            @media (max-width: 480px) {
                #solari-display {
                    display: none !important;
                }
            }
        }
    `;

    // Insert before closing </style> tag
    if (content.includes('</style>')) {
        content = content.replace('</style>', mobileStyles + '\n    </style>');
        fs.writeFileSync(file, content);
        console.log(`Updated: ${file}`);
    } else {
        console.log(`No </style> found in: ${file}`);
    }
});

console.log('Done!');
