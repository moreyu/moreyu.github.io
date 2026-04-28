function BlogPosts() {
    const categories = [
        {
            title: '智能家居',
            icon: '🏠',
            description: 'Home Assistant / Apple TV / NAS / EMBY / Movie Pilot',
            gradient: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
            articleCount: '即将更新'
        },
        {
            title: '支付方案',
            icon: '💳',
            description: '虚拟货币 / U卡 / 美卡 / eSIM 研究',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            articleCount: '即将更新'
        },
        {
            title: 'AI 技术',
            icon: '🤖',
            description: 'AI 模型 / KIRO 反代 / 中转站运营 / 养虾心得',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
            articleCount: '即将更新'
        },
        {
            title: '生活兴趣',
            icon: '🎵',
            description: 'Coachella / 音乐 / 剧集 / 生活方式',
            gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
            articleCount: '即将更新'
        }
    ];

    return (
        <section id="blog" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 fade-in-up">
                    <div className="text-xs font-bold tracking-widest mb-6" style={{ color: 'var(--text-tertiary)' }}>EXPLORE TOPICS</div>
                    <h2 className="text-6xl md:text-7xl font-black mb-8" style={{ color: 'var(--text)', letterSpacing: '-0.04em' }}>
                        内容板块
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        技术折腾、支付研究、AI 探索、生活记录。
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href="#"
                            className="glass-card group fade-in-up"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                animationDelay: `${index * 0.15 + 0.2}s`,
                                overflow: 'hidden',
                                position: 'relative'
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
                            {/* Gradient Background */}
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{ background: category.gradient }}
                            ></div>

                            <div className="relative p-10">
                                {/* Icon */}
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                                    style={{
                                        background: category.gradient,
                                        boxShadow: '0 8px 24px rgba(217, 119, 6, 0.3)'
                                    }}
                                >
                                    {category.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl font-black mb-4 group-hover:gradient-text transition-all" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                    {category.description}
                                </p>

                                {/* Article Count & Arrow */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold" style={{ color: 'var(--text-tertiary)' }}>
                                        {category.articleCount}
                                    </span>
                                    <svg className="h-8 w-8 icon-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer
                className="mt-32 pt-16 border-t fade-in-up"
                style={{ borderColor: 'var(--border)', animationDelay: '0.8s' }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div>
                            <div className="text-3xl font-black mb-3" style={{ color: 'var(--text)' }}>Moreyu</div>
                            <div className="text-base" style={{ color: 'var(--text-secondary)' }}>
                                写代码，折腾技术，听音乐。
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <a
                                href="https://github.com/moreyu"
                                target="_blank"
                                className="text-base font-semibold transition-all"
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--text)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                GitHub
                            </a>
                            <a
                                href="https://twitter.com/moreyu"
                                target="_blank"
                                className="text-base font-semibold transition-all"
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--text)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                Twitter
                            </a>
                            <a
                                href="mailto:hi@moreyu.me"
                                className="text-base font-semibold transition-all"
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--text)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--text-secondary)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="text-sm text-center md:text-left" style={{ color: 'var(--text-tertiary)' }}>
                        © 2026 Moreyu. Built with React & Tailwind CSS.
                    </div>
                </div>
            </footer>
        </section>
    );
}

window.BlogPosts = BlogPosts;
