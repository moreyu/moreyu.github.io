function FeaturedArticles() {
    const articles = [
        {
            category: 'CRYPTO & PAY',
            title: 'Meme币投资实战指南',
            description: '从DOGE到PEPE的投资策略',
            readTime: '26分钟',
            link: 'articles/crypto-pay/meme-coin-investment-guide.html',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            category: 'AI & VIBE CODING',
            title: 'Claude Code完全指南',
            description: 'AI辅助编程的最佳实践',
            readTime: '25分钟',
            link: 'articles/ai-coding/claude-code-complete-guide.html',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)'
        },
        {
            category: 'MUSIC / MOVIE / SERIES',
            title: '家庭影院搭建完全指南',
            description: '从入门到发烧',
            readTime: '25分钟',
            link: 'articles/lifestyle/home-theater-complete-guide.html',
            gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
        },
        {
            category: 'STREAM & SMART MEDIA HUB',
            title: 'Home Assistant完整搭建指南',
            description: '从零开始打造智能家居中枢',
            readTime: '15分钟',
            link: 'articles/media-hub/home-assistant-complete-guide.html',
            gradient: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)'
        },
        {
            category: 'CRYPTO & PAY',
            title: '加密货币打新完全指南',
            description: '空投猎人必备技能',
            readTime: '22分钟',
            link: 'articles/crypto-pay/airdrop-guide.html',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            category: 'AI & VIBE CODING',
            title: 'Cursor vs Claude Code深度对比',
            description: 'AI编程工具选择指南',
            readTime: '22分钟',
            link: 'articles/ai-coding/cursor-vs-claude-code.html',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)'
        }
    ];

    return (
        <section className="py-32 px-6" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 fade-in-up">
                    <div className="text-xs font-bold tracking-widest mb-6" style={{ color: 'var(--text-tertiary)' }}>FEATURED ARTICLES</div>
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-black mb-6" style={{ color: 'var(--text)', letterSpacing: '-0.04em' }}>
                                精选文章
                            </h2>
                            <p className="text-xl md:text-2xl max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                深度技术文章与实战经验分享
                            </p>
                        </div>
                        <a
                            href="articles.html"
                            className="hidden md:flex items-center gap-2 text-base font-semibold transition-all"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.querySelector('svg').style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
                            }}
                        >
                            查看全部
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transition: 'transform 0.3s' }}>
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            className="glass-card group fade-in-up"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                animationDelay: `${index * 0.1 + 0.2}s`,
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = 'var(--accent)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--accent-glow)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Gradient Top Bar */}
                            <div
                                className="h-2"
                                style={{ background: article.gradient }}
                            ></div>

                            <div className="p-8 flex-1 flex flex-col">
                                {/* Category Badge */}
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 self-start"
                                    style={{
                                        background: 'var(--bg-elevated)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: 'var(--accent)',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {article.category}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)', lineHeight: '1.3' }}>
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    {article.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                                        {article.readTime}阅读
                                    </span>
                                    <svg className="h-6 w-6 icon-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View All Button (Mobile) */}
                <div className="mt-12 text-center md:hidden fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <a
                        href="articles.html"
                        className="btn-primary inline-flex items-center gap-3"
                        style={{ textDecoration: 'none' }}
                    >
                        查看全部文章
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

window.FeaturedArticles = FeaturedArticles;
