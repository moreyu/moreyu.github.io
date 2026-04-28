// Easter eggs and micro-interactions

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

function initKonamiCode() {
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateKonamiMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateKonamiMode() {
    // Create rainbow effect
    document.body.style.animation = 'rainbow 3s linear infinite';

    // Add confetti
    createConfetti();

    // Show message
    const msg = document.createElement('div');
    msg.textContent = '🎉 You found the secret! 🎉';
    msg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--accent);
        color: white;
        padding: 30px 60px;
        border-radius: 20px;
        font-size: 24px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: bounceIn 0.5s;
    `;
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.animation = 'fadeOut 0.5s';
        setTimeout(() => msg.remove(), 500);
        document.body.style.animation = '';
    }, 3000);
}

function createConfetti() {
    const colors = ['#d97706', '#ea580c', '#f59e0b', '#fbbf24'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            opacity: 1;
            transform: rotate(${Math.random() * 360}deg);
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const rotation = Math.random() * 720 - 360;
        confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Custom cursor effect
let cursorDot, cursorOutline;

function initCustomCursor() {
    cursorDot = document.querySelector('.cursor-dot');
    cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth follow for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Expand on clickable elements
    setTimeout(() => {
        document.querySelectorAll('a, button, .glass-card-hover').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }, 1000);
}

// Scroll progress indicator
function createScrollProgress() {
    const progress = document.querySelector('.scroll-progress');
    if (!progress) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progress.style.width = scrollPercent + '%';
    });
}

// Add tilt effect to cards
function initCardTilt() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.glass-card-hover');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }, 1000);
}

// Secret developer console message
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #d97706;');
console.log('%cLike what you see? Let\'s build something together!', 'font-size: 14px; color: #a8a8a8;');
console.log('%c📧 hi@moreyu.me', 'font-size: 14px; color: #d97706;');
console.log('%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #6e6e6e; font-style: italic;');

// Export init function
window.Interactions = {
    init: () => {
        initKonamiCode();
        initCustomCursor();
        createScrollProgress();
        initCardTilt();
    }
};
