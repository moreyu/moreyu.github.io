function Hero() {
    const [displayText, setDisplayText] = React.useState('');
    const [showCursor, setShowCursor] = React.useState(true);
    const fullText = 'Build Fast, Ship Faster';

    React.useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: 'var(--bg)' }}>
            {/* Grid Background */}
            <div className="grid-bg"></div>

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 float" style={{ background: 'var(--accent)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 float-delay-1" style={{ background: 'var(--orange)' }}></div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 mb-12 fade-in-up fade-in-delay-2" style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '100px'
                }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)', boxShadow: '0 0 10px var(--success)' }}></div>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>Available for opportunities</span>
                </div>

                {/* Headline with Typewriter Effect */}
                <h1
                    className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-8 fade-in-up fade-in-delay-3"
                    style={{
                        color: 'var(--text)',
                        letterSpacing: '-0.02em',
                        fontFamily: 'JetBrains Mono, SF Mono, Consolas, monospace',
                        minHeight: '200px'
                    }}
                >
                    <span className="gradient-text">
                        {displayText}
                        <span style={{ opacity: showCursor ? 1 : 0, color: 'var(--accent)' }}>_</span>
                    </span>
                </h1>

                {/* Subheading */}
                <p
                    className="text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed mb-12 fade-in-up fade-in-delay-4"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    写代码，折腾技术，听音乐。
                </p>

                {/* CTAs */}
                <div className="flex items-center justify-center gap-4 mb-20 fade-in-up fade-in-delay-5">
                    <a
                        href="https://all-in.cc.cd"
                        target="_blank"
                        className="btn-primary flex items-center gap-3"
                        style={{ textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        API 中转站
                    </a>
                    <a
                        href="articles.html"
                        className="btn-secondary flex items-center gap-2"
                        style={{ textDecoration: 'none' }}
                    >
                        浏览文章
                        <svg className="h-4 w-4 icon-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

                {/* Tech Stack Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in-up fade-in-delay-6">
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">React</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'JetBrains Mono, monospace' }}>Frontend</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                            React, Next.js, TypeScript
                            <br />
                            Tailwind, Framer Motion
                        </div>
                    </div>
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">Python</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'JetBrains Mono, monospace' }}>Backend</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                            FastAPI, Django, Go
                            <br />
                            PostgreSQL, Redis, Docker
                        </div>
                    </div>
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">AI/ML</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)', fontFamily: 'JetBrains Mono, monospace' }}>Intelligence</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                            LangChain, OpenAI API
                            <br />
                            RAG, Vector Search, Agents
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 fade-in-up fade-in-delay-7">
                <div className="text-xs font-semibold tracking-widest" style={{ color: 'var(--text-tertiary)', fontFamily: 'JetBrains Mono, monospace' }}>SCROLL</div>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)', animation: 'bounce 2s infinite' }}>
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        </section>
    );
}

window.Hero = Hero;
