function Hero() {
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
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Available for opportunities</span>
                </div>

                {/* Headline */}
                <h1
                    className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-8 fade-in-up fade-in-delay-3"
                    style={{
                        color: 'var(--text)',
                        letterSpacing: '-0.05em'
                    }}
                >
                    Build Fast,
                    <br />
                    <span className="gradient-text">Ship Faster</span>
                </h1>

                {/* Subheading */}
                <p
                    className="text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed mb-12 fade-in-up fade-in-delay-4"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    全栈工程师 × AI 探索者。
                    <br />
                    专注于构建高性能 Web 应用和智能化解决方案。
                </p>

                {/* CTAs */}
                <div className="flex items-center justify-center gap-4 mb-20 fade-in-up fade-in-delay-5">
                    <a
                        href="https://github.com/moreyu"
                        target="_blank"
                        className="btn-primary flex items-center gap-3"
                        style={{ textDecoration: 'none' }}
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View GitHub
                    </a>
                    <a
                        href="#blog"
                        className="btn-secondary flex items-center gap-2"
                        style={{ textDecoration: 'none' }}
                    >
                        Read Articles
                        <svg className="h-4 w-4 icon-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

                {/* Tech Stack Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in-up fade-in-delay-6">
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">React</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Frontend</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            React, Next.js, TypeScript
                            <br />
                            Tailwind, Framer Motion
                        </div>
                    </div>
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">Python</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Backend</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            FastAPI, Django, Go
                            <br />
                            PostgreSQL, Redis, Docker
                        </div>
                    </div>
                    <div className="glass-card glass-card-hover p-8 text-left glow">
                        <div className="code-block mb-6">AI/ML</div>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Intelligence</div>
                        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            LangChain, OpenAI API
                            <br />
                            RAG, Vector Search, Agents
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 fade-in-up fade-in-delay-7">
                <div className="text-xs font-semibold tracking-widest" style={{ color: 'var(--text-tertiary)' }}>SCROLL</div>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)', animation: 'bounce 2s infinite' }}>
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        </section>
    );
}

window.Hero = Hero;
