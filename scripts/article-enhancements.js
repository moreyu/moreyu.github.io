// Article page enhancements
(function() {
    'use strict';

    // Create Solari split-flap display (like homepage MOREYU)
    function createSolariDisplay() {
        const container = document.createElement('div');
        container.id = 'solari-display';
        container.style.cssText = `
            display: flex;
            gap: 3px;
            align-items: center;
            padding: 8px 12px;
            background: rgba(20, 20, 20, 0.95);
            border-radius: 8px;
            border: 1px solid rgba(102, 126, 234, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        `;

        // Create character slots (max 13 chars for "ALMOST DONE")
        const maxChars = 13;
        for (let i = 0; i < maxChars; i++) {
            const charDiv = document.createElement('div');
            charDiv.className = 'solari-char';
            charDiv.style.cssText = `
                position: relative;
                width: 12px;
                height: 28px;
                overflow: hidden;
            `;

            const topFlap = document.createElement('div');
            topFlap.className = 'solari-flap-top';
            topFlap.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
                border-bottom: 1px solid rgba(0, 0, 0, 0.8);
                overflow: hidden;
                transform-origin: bottom;
                border-radius: 2px 2px 0 0;
            `;

            const topContent = document.createElement('div');
            topContent.className = 'solari-content';
            topContent.style.cssText = `
                position: absolute;
                width: 100%;
                height: 200%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'JetBrains Mono', monospace;
                font-size: 16px;
                font-weight: 700;
                color: #667eea;
                text-shadow: 0 0 8px rgba(102, 126, 234, 0.6);
            `;
            topContent.textContent = ' ';
            topFlap.appendChild(topContent);

            const bottomFlap = document.createElement('div');
            bottomFlap.className = 'solari-flap-bottom';
            bottomFlap.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
                overflow: hidden;
                border-radius: 0 0 2px 2px;
            `;

            const bottomContent = document.createElement('div');
            bottomContent.className = 'solari-content';
            bottomContent.style.cssText = `
                position: absolute;
                width: 100%;
                height: 200%;
                top: -100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'JetBrains Mono', monospace;
                font-size: 16px;
                font-weight: 700;
                color: #667eea;
                text-shadow: 0 0 8px rgba(102, 126, 234, 0.6);
            `;
            bottomContent.textContent = ' ';
            bottomFlap.appendChild(bottomContent);

            charDiv.appendChild(topFlap);
            charDiv.appendChild(bottomFlap);
            container.appendChild(charDiv);
        }

        return container;
    }

    // Random letter for animation
    function randomLetter() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    // Flip a character with rolling animation
    function flipCharacter(charDiv, targetChar, delay = 0) {
        setTimeout(() => {
            const topContent = charDiv.querySelector('.solari-flap-top .solari-content');
            const bottomContent = charDiv.querySelector('.solari-flap-bottom .solari-content');

            let iterations = 0;
            const maxIterations = Math.floor(Math.random() * 5) + 8; // 8-12 次随机翻滚

            const interval = setInterval(() => {
                if (iterations < maxIterations) {
                    const randomChar = randomLetter();
                    topContent.textContent = randomChar;
                    bottomContent.textContent = randomChar;
                    iterations++;
                } else {
                    topContent.textContent = targetChar;
                    bottomContent.textContent = targetChar;
                    clearInterval(interval);
                }
            }, 80);
        }, delay);
    }

    // Update status text with rolling animation (triggered by scroll progress)
    let currentStatus = '';
    function updateStatus(scrollPercentage) {
        const container = document.getElementById('solari-display');
        if (!container) return;

        let status = '';
        if (scrollPercentage < 5) {
            status = 'START        ';
        } else if (scrollPercentage < 25) {
            status = 'READING...   ';
        } else if (scrollPercentage < 50) {
            status = 'HALFWAY      ';
        } else if (scrollPercentage < 75) {
            status = 'KEEP GOING   ';
        } else if (scrollPercentage < 95) {
            status = 'ALMOST DONE  ';
        } else {
            status = 'COMPLETED ✓  ';
        }

        // Only animate when status actually changes
        if (status === currentStatus) return;
        currentStatus = status;

        const chars = container.querySelectorAll('.solari-char');
        chars.forEach((charDiv, i) => {
            const targetChar = status[i] || ' ';
            // Stagger the animation for each character
            flipCharacter(charDiv, targetChar, i * 50);
        });
    }

    // Add Solari display to navigation
    function addSolariToNav() {
        const nav = document.querySelector('nav > div');
        if (!nav) return;

        const solariDisplay = createSolariDisplay();

        // Insert after logo
        const logoContainer = nav.querySelector('#logo-container');
        if (logoContainer) {
            logoContainer.parentNode.insertBefore(solariDisplay, logoContainer.nextSibling);
        }
    }

    // Smooth scroll progress bar
    function createScrollProgress() {
        const bar = document.createElement('div');
        bar.id = 'scroll-progress-bar';
        bar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            z-index: 10001;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        `;
        document.body.appendChild(bar);
        return bar;
    }

    // Update scroll progress bar
    function updateScrollProgress() {
        const bar = document.getElementById('scroll-progress-bar');
        if (!bar) return;

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        bar.style.width = Math.min(100, Math.max(0, scrollPercentage)) + '%';
    }

    // Floating reading time indicator
    function createReadingTime() {
        const article = document.querySelector('.article-content');
        if (!article) return;

        const text = article.textContent;
        const wordCount = text.length;
        const readingTime = Math.ceil(wordCount / 400); // 中文阅读速度约400字/分钟

        const indicator = document.createElement('div');
        indicator.id = 'reading-time';
        indicator.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 12px 20px;
            background: rgba(102, 126, 234, 0.1);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            color: #667eea;
            z-index: 998;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        `;
        indicator.innerHTML = `📖 ${readingTime} 分钟阅读`;
        document.body.appendChild(indicator);

        // Show after a delay
        setTimeout(() => {
            indicator.style.opacity = '1';
            indicator.style.transform = 'translateY(0)';
        }, 1000);

        // Hide when scrolling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            indicator.style.opacity = '0.3';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                indicator.style.opacity = '1';
            }, 500);
        });
    }

    // Animated section markers
    function addSectionMarkers() {
        const headings = document.querySelectorAll('.article-content h2');
        headings.forEach((heading, index) => {
            const marker = document.createElement('span');
            marker.style.cssText = `
                display: inline-block;
                width: 6px;
                height: 6px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                margin-right: 12px;
                box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
                animation: pulse 2s ease-in-out infinite;
                animation-delay: ${index * 0.2}s;
            `;
            heading.insertBefore(marker, heading.firstChild);
        });

        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.3); opacity: 0.7; }
            }
        `;
        document.head.appendChild(style);
    }

    // Code block enhancements
    function enhanceCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
            const pre = block.parentElement;
            pre.style.position = 'relative';

            // Add copy button
            const copyBtn = document.createElement('button');
            copyBtn.textContent = '📋 复制';
            copyBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 6px 12px;
                background: rgba(102, 126, 234, 0.2);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 6px;
                color: #667eea;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                font-family: 'JetBrains Mono', monospace;
            `;
            copyBtn.onmouseover = () => {
                copyBtn.style.background = 'rgba(102, 126, 234, 0.3)';
            };
            copyBtn.onmouseout = () => {
                copyBtn.style.background = 'rgba(102, 126, 234, 0.2)';
            };
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(block.textContent);
                copyBtn.textContent = '✓ 已复制';
                setTimeout(() => {
                    copyBtn.textContent = '📋 复制';
                }, 2000);
            };
            pre.appendChild(copyBtn);
        });
    }

    // Optimize navigation spacing
    function optimizeNavigation() {
        const style = document.createElement('style');
        style.textContent = `
            /* Better button spacing */
            nav > div {
                gap: 1.5rem !important;
            }

            nav > div > div:last-child {
                gap: 1.5rem !important;
            }

            @media (max-width: 768px) {
                nav > div {
                    padding: 0.75rem 1rem !important;
                    gap: 1rem !important;
                }
                nav a {
                    font-size: 0.875rem !important;
                }
                nav > div > div:last-child {
                    gap: 1rem !important;
                }
                #solari-display {
                    transform: scale(0.8);
                }
                #reading-time {
                    bottom: 20px !important;
                    right: 20px !important;
                    font-size: 11px !important;
                    padding: 8px 14px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add fade-in animation to content
    function addContentAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .article-header {
                animation: fadeInUp 0.8s ease-out;
            }

            .article-content > * {
                animation: fadeInUp 0.6s ease-out;
                animation-fill-mode: both;
            }

            .article-content > *:nth-child(1) { animation-delay: 0.1s; }
            .article-content > *:nth-child(2) { animation-delay: 0.15s; }
            .article-content > *:nth-child(3) { animation-delay: 0.2s; }
            .article-content > *:nth-child(4) { animation-delay: 0.25s; }
            .article-content > *:nth-child(5) { animation-delay: 0.3s; }
        `;
        document.head.appendChild(style);
    }

    // Initialize
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Wait a bit for React to render
        setTimeout(() => {
            addSolariToNav();
            createScrollProgress();
            createReadingTime();
            addSectionMarkers();
            enhanceCodeBlocks();
            optimizeNavigation();
            addContentAnimations();

            let lastStatus = '';
            let ticking = false;

            // Update on scroll
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const windowHeight = window.innerHeight;
                        const documentHeight = document.documentElement.scrollHeight;
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

                        // Only update status if it changed
                        let newStatus = '';
                        if (scrollPercentage < 5) newStatus = 'START';
                        else if (scrollPercentage < 25) newStatus = 'READING...';
                        else if (scrollPercentage < 50) newStatus = 'HALFWAY';
                        else if (scrollPercentage < 75) newStatus = 'KEEP GOING';
                        else if (scrollPercentage < 95) newStatus = 'ALMOST DONE';
                        else newStatus = 'COMPLETED ✓';

                        if (newStatus !== lastStatus) {
                            updateStatus(scrollPercentage);
                            lastStatus = newStatus;
                        }

                        updateScrollProgress();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Initial update
            updateStatus(0);
            updateScrollProgress();
        }, 500);
    }

    init();
})();
