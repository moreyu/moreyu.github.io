const fs = require('fs');
const path = require('path');

const articlesDir = './articles';

// New minimalist CSS
const newCSS = `        .ldr-hidden-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #0a0a0a;
            color: #ff0000;
            padding: 30px 50px;
            border-radius: 4px;
            border: 1px solid #333;
            box-shadow: 0 0 0 1px #ff0000;
            font-size: 1.2rem;
            font-weight: bold;
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0.1em;
            z-index: 10000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
            text-align: center;
        }

        .ldr-hidden-message.show {
            opacity: 1;
        }

        @keyframes ldrPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        .ldr-hidden-message.show {
            animation: ldrPulse 1s ease-in-out infinite;`;

// New minimalist messages (no emoji)
const newMessages = `                const messages = [
                    'LOVE, DEATH & ROBOTS',
                    '"When the yogurt took over..."',
                    '"Good hunting, Sonnie!"',
                    '"Zima Blue"',
                    '"Three Robots"',
                    '"Lucky 13"'
                ];`;

function updateArticle(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace CSS
    content = content.replace(
        /\.ldr-hidden-message \{[\s\S]*?\.ldr-hidden-message\.show \{\s*animation: ldrPulse[^;]+;/,
        newCSS
    );

    // Replace messages (remove emoji)
    content = content.replace(
        /const messages = \[[\s\S]*?\];/,
        newMessages
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (item.endsWith('.html')) {
            updateArticle(fullPath);
        }
    });
}

console.log('Starting LDR easter egg update...\n');
processDirectory(articlesDir);
console.log('\nAll articles updated!');
