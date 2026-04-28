function BlogPosts() {
    const posts = [
        {
            title: '构建现代化的全栈应用',
            date: '2026-04-27',
            category: '技术分享',
            tags: ['Full-Stack', 'Architecture', 'Best Practices'],
            excerpt: '探讨如何使用最新的技术栈构建高性能、可扩展的全栈应用。从前端框架选择到后端架构设计，从数据库优化到部署策略，分享实战经验和踩坑心得。',
            gradient: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
            readTime: '8 min',
            views: '1.2k'
        },
        {
            title: 'AI 时代的开发者工具链',
            date: '2026-04-20',
            category: 'AI 探索',
            tags: ['AI', 'Developer Tools', 'Productivity'],
            excerpt: '深入探讨如何利用 AI 工具提升开发效率。从代码生成到自动化测试，从智能调试到文档编写，AI 正在重塑开发者的工作流程。分享我的实践经验。',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            readTime: '6 min',
            views: '980'
        },
        {
            title: '微服务架构实践指南',
            date: '2026-04-15',
            category: '系统设计',
            tags: ['Microservices', 'DevOps', 'Cloud Native'],
            excerpt: '从零到一构建微服务系统的完整指南。涵盖服务拆分原则、API 设计规范、服务发现机制、负载均衡策略、监控告警体系等核心环节的最佳实践。',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
            readTime: '10 min',
            views: '1.5k'
        }
    ];

    return (
        <section id="blog" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 fade-in-up">
                    <div className="text-xs font-bold tracking-widest mb-6" style={{ color: 'var(--text-tertiary)' }}>LATEST ARTICLES</div>
                    <h2 className="text-6xl md:text-7xl font-black mb-8" style={{ color: 'var(--text)', letterSpacing: '-0.04em' }}>
                        技术博客
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        记录技术探索的点点滴滴，分享实战经验与思考。
                        <br />
                        从代码到架构，从工具到方法论。
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-1 gap-8">
                    {posts.map((post, index) => (
                        <a
                            key={index}
                            href="#"
                            className="glass-card group fade-in-up"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                animationDelay: `${index * 0.15 + 0.2}s`,
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                overflow: 'hidden'
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
                            <div className="flex flex-col md:flex-row gap-8 p-10">
                                {/* Thumbnail */}
                                <div
                                    className="w-full md:w-80 h-64 rounded-2xl flex-shrink-0 relative overflow-hidden"
                                    style={{
                                        background: post.gradient,
                                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                        <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                                        </svg>
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold" style={{
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        color: 'white'
                                    }}>
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Meta */}
                                        <div className="flex items-center gap-4 mb-4 text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                                            <span>{post.date}</span>
                                            <span>·</span>
                                            <span>{post.readTime}</span>
                                            <span>·</span>
                                            <span>{post.views} views</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-4xl font-black mb-6 group-hover:gradient-text transition-all" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    {/* Tags and Arrow */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-4 py-2 text-xs font-semibold rounded-full"
                                                    style={{
                                                        background: 'var(--bg-elevated)',
                                                        border: '1px solid var(--border)',
                                                        color: 'var(--text-secondary)'
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <svg className="h-8 w-8 icon-arrow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
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
                                Full-Stack Developer & AI Explorer
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
