const fs = require('fs');
const path = require('path');

const ldrCSS = `
        /* LDR Easter Egg */
        .ldr-hidden-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(255, 0, 128, 0.95), rgba(121, 40, 202, 0.95));
            color: white;
            padding: 30px 50px;
            border-radius: 15px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
            box-shadow: 0 0 50px rgba(255, 0, 128, 0.8);
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
            animation: ldrPulse 1s ease-in-out infinite;
        }
`;

const ldrHTML = `
    <!-- LDR Easter Egg -->
    <div class="ldr-hidden-message" id="ldr-message"></div>
`;

const ldrJS = `
        // LDR Easter Egg - Triple click anywhere
        let clickCount = 0;
        let clickTimer;

        document.addEventListener('click', () => {
            clickCount++;
            clearTimeout(clickTimer);

            if (clickCount === 3) {
                const messages = [
                    '💀 LOVE, DEATH & ROBOTS 🤖',
                    '🎬 "When the yogurt took over..."',
                    '⚡ "Good hunting, Sonnie!"',
                    '🌌 "Zima Blue"',
                    '🦾 "Three Robots"',
                    '✈️ "Lucky 13"'
                ];
                const msg = messages[Math.floor(Math.random() * messages.length)];
                const ldrMsg = document.getElementById('ldr-message');
                ldrMsg.textContent = msg;
                ldrMsg.classList.add('show');

                setTimeout(() => {
                    ldrMsg.classList.remove('show');
                }, 3000);

                clickCount = 0;
            }

            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 500);
        });
`;

function addLDRToArticle(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has LDR easter egg
    if (content.includes('LDR Easter Egg')) {
        console.log(`Skipped (already has LDR): ${filePath}`);
        return;
    }

    // Add CSS before </style>
    if (content.includes('</style>')) {
        content = content.replace('</style>', ldrCSS + '\n    </style>');
    }

    // Add HTML before </body>
    if (content.includes('</body>')) {
        content = content.replace('</body>', ldrHTML + '\n    <script>' + ldrJS + '\n    </script>\n</body>');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.html')) {
            addLDRToArticle(filePath);
        }
    });
}

// Process all article directories
const articlesDir = path.join(__dirname, 'articles');
processDirectory(articlesDir);

console.log('\nLDR easter eggs added to all article files!');
