// Solari split-flap animation for Articles page logo
function SolariLogoArticles() {
    const targetWord = 'ARTICLES';
    const [letters, setLetters] = React.useState(targetWord.split('').map(() => randomLetter()));
    const [flipping, setFlipping] = React.useState([]);
    const hasAnimated = React.useRef(false);

    function randomLetter() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    const flipToLetter = (index, targetLetter) => {
        setFlipping(prev => [...prev, index]);

        let iterations = 0;
        const maxIterations = Math.floor(Math.random() * 5) + 8; // 8-12 次随机翻滚

        const interval = setInterval(() => {
            if (iterations < maxIterations) {
                setLetters(prev => {
                    const newLetters = [...prev];
                    newLetters[index] = randomLetter();
                    return newLetters;
                });
                iterations++;
            } else {
                setLetters(prev => {
                    const newLetters = [...prev];
                    newLetters[index] = targetLetter;
                    return newLetters;
                });
                setFlipping(prev => prev.filter(i => i !== index));
                clearInterval(interval);
            }
        }, 80);
    };

    const startAnimation = () => {
        const target = targetWord.split('');
        // 所有字母都翻滚，但错开时间
        target.forEach((letter, index) => {
            setTimeout(() => {
                flipToLetter(index, letter);
            }, index * 140);
        });
    };

    // 页面加载时自动播放动画
    React.useEffect(() => {
        if (!hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
                startAnimation();
            }, 500);
        }
    }, []);

    const handleHover = () => {
        startAnimation();
    };

    return React.createElement(
        'a',
        {
            href: 'index.html',
            className: 'solari-board',
            style: { textDecoration: 'none' },
            onMouseEnter: handleHover
        },
        React.createElement(
            'div',
            { className: 'solari-display' },
            letters.map((char, i) =>
                React.createElement(
                    'div',
                    {
                        key: i,
                        className: `solari-char ${flipping.includes(i) ? 'flipping' : ''}`
                    },
                    React.createElement(
                        'div',
                        { className: 'solari-flap solari-flap-top' },
                        React.createElement('div', { className: 'solari-flap-content' }, char)
                    ),
                    React.createElement(
                        'div',
                        { className: 'solari-flap solari-flap-bottom' },
                        React.createElement('div', { className: 'solari-flap-content' }, char)
                    )
                )
            )
        )
    );
}

window.SolariLogoArticles = SolariLogoArticles;
