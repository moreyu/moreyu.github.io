// Article page enhancements
(function() {
    'use strict';

    // Solari reading progress display
    function createSolariProgress() {
        const container = document.createElement('div');
        container.id = 'solari-progress';
        container.style.cssText = `
            position: fixed;
            top: 24px;
            left: 24px;
            z-index: 9999;
            display: flex;
            gap: 4px;
            padding: 12px 16px;
            background: rgba(22, 21, 19, 0.95);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(217, 119, 6, 0.3);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            transition: all 0.3s ease;
        `;

        // Create 3 digit displays
        for (let i = 0; i < 3; i++) {
            const digit = document.createElement('div');
            digit.className = 'solari-digit';
            digit.style.cssText = `
                position: relative;
                width: 28px;
                height: 40px;
                perspective: 400px;
            `;

            const flapTop = document.createElement('div');
            flapTop.className = 'solari-flap-top';
            flapTop.style.cssText = `
                position: absolute;
                top: 0;
                width: 100%;
                height: 50%;
                overflow: hidden;
                background: linear-gradient(180deg, #2a2825 0%, #252420 100%);
                border-radius: 4px 4px 0 0;
                transform-origin: bottom;
                backface-visibility: hidden;
            `;

            const flapBottom = document.createElement('div');
            flapBottom.className = 'solari-flap-bottom';
            flapBottom.style.cssText = `
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 50%;
                overflow: hidden;
                background: linear-gradient(180deg, #222120 0%, #1f1e1b 100%);
                border-radius: 0 0 4px 4px;
                border-top: 1px solid #0a0a09;
            `;

            const contentTop = document.createElement('div');
            contentTop.className = 'solari-content';
            contentTop.textContent = '0';
            contentTop.style.cssText = `
                font-family: 'JetBrains Mono', monospace;
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

            const contentBottom = document.createElement('div');
            contentBottom.className = 'solari-content';
            contentBottom.textContent = '0';
            contentBottom.style.cssText = `
                font-family: 'JetBrains Mono', monospace;
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

            flapTop.appendChild(contentTop);
            flapBottom.appendChild(contentBottom);
            digit.appendChild(flapTop);
            digit.appendChild(flapBottom);
            container.appendChild(digit);
        }

        // Add % symbol
        const percent = document.createElement('span');
        percent.textContent = '%';
        percent.style.cssText = `
            font-family: 'JetBrains Mono', monospace;
            font-weight: 700;
            font-size: 1.2rem;
            color: #d4952a;
            margin-left: 4px;
            align-self: center;
        `;
        container.appendChild(percent);

        document.body.appendChild(container);
        return container;
    }

    // Update progress display
    function updateProgress(percentage) {
        const digits = document.querySelectorAll('.solari-digit');
        const percentStr = percentage.toString().padStart(3, '0');

        digits.forEach((digit, index) => {
            const contents = digit.querySelectorAll('.solari-content');
            contents.forEach(content => {
                content.textContent = percentStr[index];
            });
        });
    }

    // Calculate reading progress
    function calculateProgress() {
        const article = document.querySelector('.article-content') || document.querySelector('article');
        if (!article) return 0;

        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const articleBottom = articleTop + articleHeight;
        const viewportBottom = scrollTop + windowHeight;

        if (scrollTop < articleTop) return 0;
        if (viewportBottom >= articleBottom) return 100;

        const visibleHeight = Math.min(viewportBottom, articleBottom) - Math.max(scrollTop, articleTop);
        const progress = (visibleHeight / articleHeight) * 100;

        return Math.min(100, Math.max(0, Math.round(progress)));
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
                    const progress = calculateProgress();
                    updateProgress(progress);
                    updateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial update
        updateProgress(0);
        updateScrollProgress();
    }

    init();
})();
