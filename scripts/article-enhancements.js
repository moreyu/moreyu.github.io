// Article page enhancements
(function() {
    'use strict';

    // Solari logo is now rendered via React component in article HTML
    // The scroll status display has been removed to avoid confusion

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

    // Enable mobile menu functionality (HTML already has the structure)
    function enableMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (!menuBtn || !mobileMenu) return;

        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }

            // Animate hamburger icon
            const spans = menuBtn.querySelectorAll('span');
            if (isHidden) {
                spans[0].style.transform = 'rotate(45deg) translateY(6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
            } else {
                spans[0].style.transform = 'rotate(0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0)';
            }
        });
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
                .mobile-menu a {
                    display: block;
                    padding: 0.75rem 1rem;
                    text-align: center;
                    border-radius: 8px;
                    transition: background 0.2s;
                }

                .mobile-menu a:hover {
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
        enableMobileMenu();
        enhanceNavButtons();
        createScrollProgress();
        createReadingTime();
        addSectionMarkers();
        enhanceCodeBlocks();
        optimizeNavigation();
        addContentAnimations();

        let ticking = false;

        // Update scroll progress bar on scroll
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial update
        updateScrollProgress();
    }

    init();
})();
