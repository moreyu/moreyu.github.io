// Article page enhancements
(function() {
    'use strict';

    // Solari reading status display
    function createSolariProgress() {
        const container = document.createElement('div');
        container.id = 'solari-progress';
        container.style.cssText = `
            position: fixed;
            top: 24px;
            left: 24px;
            z-index: 9999;
            display: flex;
            gap: 6px;
            padding: 12px 18px;
            background: rgba(22, 21, 19, 0.95);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(217, 119, 6, 0.3);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            transition: all 0.3s ease;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 700;
            font-size: 0.95rem;
            color: #d4952a;
            text-shadow: 0 0 18px rgba(212, 149, 42, 0.12);
        `;

        const statusText = document.createElement('span');
        statusText.id = 'status-text';
        statusText.textContent = 'READING...';
        container.appendChild(statusText);

        document.body.appendChild(container);
        return container;
    }

    // Update status display based on scroll
    function updateStatus(scrollPercentage) {
        const statusText = document.getElementById('status-text');
        if (!statusText) return;

        let status = '';
        if (scrollPercentage < 5) {
            status = 'START';
        } else if (scrollPercentage < 25) {
            status = 'READING...';
        } else if (scrollPercentage < 50) {
            status = 'HALFWAY';
        } else if (scrollPercentage < 75) {
            status = 'KEEP GOING';
        } else if (scrollPercentage < 95) {
            status = 'ALMOST DONE';
        } else {
            status = 'COMPLETED ✓';
        }

        if (statusText.textContent !== status) {
            statusText.style.opacity = '0';
            setTimeout(() => {
                statusText.textContent = status;
                statusText.style.opacity = '1';
            }, 150);
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
            background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%);
            z-index: 10001;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(217, 119, 6, 0.5);
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

    // Responsive navigation
    function optimizeNavigation() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Make nav more compact on mobile
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                nav > div {
                    padding: 0.75rem 1rem !important;
                }
                nav a {
                    font-size: 0.875rem !important;
                }
                nav > div > div:last-child {
                    gap: 1rem !important;
                }
                #solari-progress {
                    top: 16px !important;
                    left: 16px !important;
                    padding: 8px 12px !important;
                    transform: scale(0.85);
                    transform-origin: top left;
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

        createSolariProgress();
        createScrollProgress();
        optimizeNavigation();
        addContentAnimations();

        // Update on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

                    updateStatus(scrollPercentage);
                    updateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial update
        updateStatus(0);
        updateScrollProgress();

        // Add transition style for status text
        const style = document.createElement('style');
        style.textContent = `
            #status-text {
                transition: opacity 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    init();
})();
