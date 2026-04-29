// Article page enhancements
(function() {
    'use strict';

    // Solari flip display for status
    function createSolariDisplay() {
        const container = document.createElement('div');
        container.id = 'solari-display';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            left: 20px;
            z-index: 999;
            background: rgba(10, 10, 10, 0.95);
            border: 2px solid rgba(102, 126, 234, 0.3);
            border-radius: 12px;
            padding: 16px 24px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            display: flex;
            gap: 4px;
            align-items: center;
        `;

        // Create character slots (max 13 chars for "ALMOST DONE")
        const maxChars = 13;
        for (let i = 0; i < maxChars; i++) {
            const slot = document.createElement('div');
            slot.className = 'solari-slot';
            slot.style.cssText = `
                width: 14px;
                height: 32px;
                position: relative;
                overflow: hidden;
                perspective: 200px;
            `;

            const flipper = document.createElement('div');
            flipper.className = 'solari-flipper';
            flipper.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
                transform-style: preserve-3d;
            `;

            const front = document.createElement('div');
            front.className = 'solari-front';
            front.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                font-family: 'JetBrains Mono', monospace;
                font-size: 18px;
                font-weight: 700;
                color: #667eea;
                text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            front.textContent = ' ';

            const back = document.createElement('div');
            back.className = 'solari-back';
            back.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                transform: rotateX(180deg);
                font-family: 'JetBrains Mono', monospace;
                font-size: 18px;
                font-weight: 700;
                color: #667eea;
                text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            back.textContent = ' ';

            flipper.appendChild(front);
            flipper.appendChild(back);
            slot.appendChild(flipper);
            container.appendChild(slot);
        }

        document.body.appendChild(container);
        return container;
    }

    // Flip a character slot
    function flipCharacter(slot, newChar) {
        const flipper = slot.querySelector('.solari-flipper');
        const front = slot.querySelector('.solari-front');
        const back = slot.querySelector('.solari-back');

        if (front.textContent === newChar) return;

        back.textContent = newChar;
        flipper.style.transform = 'rotateX(180deg)';

        setTimeout(() => {
            front.textContent = newChar;
            flipper.style.transform = 'rotateX(0deg)';
            flipper.style.transition = 'none';
            setTimeout(() => {
                flipper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
            }, 50);
        }, 300);
    }

    // Update status text with flip animation
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

        const slots = container.querySelectorAll('.solari-slot');
        for (let i = 0; i < slots.length; i++) {
            const char = status[i] || ' ';
            setTimeout(() => {
                flipCharacter(slots[i], char);
            }, i * 50);
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

    // Optimize navigation spacing
    function optimizeNavigation() {
        const style = document.createElement('style');
        style.textContent = `
            /* Better button spacing */
            nav > div > div:last-child {
                gap: 1.5rem !important;
            }

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
                #solari-display {
                    top: 80px !important;
                    left: 16px !important;
                    padding: 12px 18px !important;
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

        createSolariDisplay();
        createScrollProgress();
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
