// Article page enhancements
(function() {
    'use strict';

    // Create Solari split-flap display (same style as homepage MOREYU)
    function createSolariDisplay() {
        const container = document.createElement('div');
        container.id = 'solari-display';
        container.style.cssText = `
            display: flex;
            gap: 4px;
            padding: 8px 12px;
            background: #161513;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        `;

        // Create character slots (max 13 chars for "ALMOST DONE")
        const maxChars = 13;
        for (let i = 0; i < maxChars; i++) {
            const charDiv = document.createElement('div');
            charDiv.className = 'solari-char';
            charDiv.style.cssText = `
                position: relative;
                width: 32px;
                height: 44px;
                perspective: 400px;
            `;

            const topFlap = document.createElement('div');
            topFlap.className = 'solari-flap-top';
            topFlap.style.cssText = `
                position: absolute;
                top: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(180deg, #2a2825 0%, #252420 100%);
                border-radius: 3px 3px 0 0;
                transform-origin: bottom;
                overflow: hidden;
                backface-visibility: hidden;
                transform-style: preserve-3d;
            `;

            const topContent = document.createElement('div');
            topContent.className = 'solari-content';
            topContent.style.cssText = `
                font-family: 'JetBrains Mono', 'SF Mono', monospace;
                font-weight: 700;
                font-size: 1.5rem;
                color: #d4952a;
                text-shadow: 0 0 18px rgba(212, 149, 42, 0.12);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 200%;
                position: absolute;
                top: 0;
            `;
            topContent.textContent = ' ';
            topFlap.appendChild(topContent);

            const bottomFlap = document.createElement('div');
            bottomFlap.className = 'solari-flap-bottom';
            bottomFlap.style.cssText = `
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 50%;
                background: linear-gradient(180deg, #222120 0%, #1f1e1b 100%);
                border-radius: 0 0 3px 3px;
                border-top: 1px solid #0a0a09;
                overflow: hidden;
                backface-visibility: hidden;
                transform-style: preserve-3d;
            `;

            const bottomContent = document.createElement('div');
            bottomContent.className = 'solari-content';
            bottomContent.style.cssText = `
                font-family: 'JetBrains Mono', 'SF Mono', monospace;
                font-weight: 700;
                font-size: 1.5rem;
                color: #d4952a;
                text-shadow: 0 0 18px rgba(212, 149, 42, 0.12);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 200%;
                position: absolute;
                bottom: 0;
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
        // Hide empty slots
        if (targetChar === ' ') {
            charDiv.style.opacity = '0';
            charDiv.style.width = '4px';
            return;
        } else {
            charDiv.style.opacity = '1';
            charDiv.style.width = '32px';
        }

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

    // Add Solari display to navigation (left side)
    function addSolariToNav() {
        const container = document.getElementById('solari-container');
        if (!container) return;

        const solariDisplay = createSolariDisplay();
        container.appendChild(solariDisplay);
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

    // Add hamburger menu for mobile
    function addHamburgerMenu() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        const navInner = nav.querySelector('div');
        const navButtons = navInner.querySelector('div:last-child');

        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.id = 'hamburger-btn';
        hamburger.style.cssText = `
            display: none;
            flex-direction: column;
            gap: 4px;
            padding: 8px;
            background: transparent;
            border: none;
            cursor: pointer;
        `;
        hamburger.innerHTML = `
            <span style="width: 24px; height: 2px; background: rgba(255, 255, 255, 0.8); transition: all 0.3s;"></span>
            <span style="width: 24px; height: 2px; background: rgba(255, 255, 255, 0.8); transition: all 0.3s;"></span>
            <span style="width: 24px; height: 2px; background: rgba(255, 255, 255, 0.8); transition: all 0.3s;"></span>
        `;

        // Create mobile menu
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.style.cssText = `
            display: none;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1rem;
            z-index: 999;
        `;
        mobileMenu.innerHTML = navButtons.innerHTML;

        // Toggle menu
        hamburger.onclick = () => {
            const isOpen = mobileMenu.style.display === 'flex';
            mobileMenu.style.display = isOpen ? 'none' : 'flex';
            mobileMenu.style.flexDirection = 'column';
            mobileMenu.style.gap = '1rem';

            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0)';
            } else {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            }
        };

        navInner.appendChild(hamburger);
        nav.appendChild(mobileMenu);

        // Add responsive styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                #hamburger-btn {
                    display: flex !important;
                }
                nav > div > div:last-child {
                    display: none !important;
                }
                #solari-display {
                    transform: scale(0.85);
                    transform-origin: left center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Enhance navigation buttons
    function enhanceNavButtons() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Find all nav links
        const links = nav.querySelectorAll('a');

        links.forEach(link => {
            const text = link.textContent.trim();

            // Add hover effects for ARTICLES button
            if (text.includes('ARTICLES')) {
                link.onmouseenter = () => {
                    link.style.background = 'rgba(255, 255, 255, 0.1)';
                    link.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    link.style.transform = 'translateY(-2px)';
                    link.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
                };

                link.onmouseleave = () => {
                    link.style.background = 'rgba(255, 255, 255, 0.05)';
                    link.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    link.style.transform = 'translateY(0)';
                    link.style.boxShadow = 'none';
                };
            }

            // Add hover effects for HOME button
            if (text.includes('HOME')) {
                link.onmouseenter = () => {
                    link.style.transform = 'translateY(-2px)';
                    link.style.boxShadow = '0 6px 20px rgba(217, 119, 6, 0.6)';
                    link.style.background = 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)';
                };

                link.onmouseleave = () => {
                    link.style.transform = 'translateY(0)';
                    link.style.boxShadow = '0 4px 15px rgba(217, 119, 6, 0.4)';
                    link.style.background = 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)';
                };
            }
        });
    }

    // Optimize navigation spacing and add glass effect
    function optimizeNavigation() {
        // Navigation styles are now defined in HTML, only add responsive styles
        const style = document.createElement('style');
        style.textContent = `
            /* Compact navigation */
            nav > div {
                max-width: 1400px;
                margin: 0 auto;
                padding: 1rem 1.5rem !important;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem !important;
            }

            nav > div > div:last-child {
                display: flex;
                gap: 1.5rem !important;
                align-items: center;
            }

            nav a {
                white-space: nowrap;
            }

            /* Solari at leftmost position */
            #solari-display {
                order: -1;
                margin-right: auto;
                transition: all 0.3s ease;
            }

            /* Smooth transitions for character slots */
            .solari-char {
                transition: opacity 0.3s ease, width 0.3s ease;
            }

            @media (max-width: 768px) {
                nav > div {
                    padding: 0.75rem 1rem !important;
                    gap: 0.5rem !important;
                }

                /* Hide desktop menu, show hamburger */
                nav > div > div:last-child {
                    display: none !important;
                }

                #hamburger-btn {
                    display: flex !important;
                }

                /* Scale down Solari on mobile */
                #solari-display {
                    transform: scale(0.6);
                    transform-origin: left center;
                    padding: 6px 8px !important;
                }

                #reading-time {
                    bottom: 20px !important;
                    right: 20px !important;
                    font-size: 11px !important;
                    padding: 8px 14px !important;
                }

                /* Mobile menu links */
                #mobile-menu a {
                    display: block;
                    padding: 0.75rem 1rem;
                    text-align: center;
                    border-radius: 8px;
                    transition: background 0.2s;
                }

                #mobile-menu a:hover {
                    background: rgba(255, 255, 255, 0.05);
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

        // Initialize immediately - no setTimeout needed
        addSolariToNav();
        addHamburgerMenu();
        enhanceNavButtons();
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
    }

    init();
})();
