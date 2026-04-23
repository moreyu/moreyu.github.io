const { motion } = window.Motion;

// Article Icon
function ArticleIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
    );
}

// Calendar Icon
function CalendarIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
    );
}

// Tag Icon
function TagIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
    );
}

function BlogPosts() {
    const posts = [
        {
            title: '家庭服务器搭建指南（五）：监控与维护',
            date: '2025-03-15',
            category: '技术',
            tags: ['服务器', '运维', 'Prometheus'],
            url: 'posts/2025/03/home-server-part5.html',
            excerpt: '完整的监控方案，让你的家庭服务器稳定运行'
        },
        {
            title: '家庭服务器搭建指南（四）：数据备份',
            date: '2025-03-12',
            category: '技术',
            tags: ['服务器', '备份', 'Restic'],
            url: 'posts/2025/03/home-server-part4.html',
            excerpt: '自动化备份策略，保护你的重要数据'
        },
        {
            title: '家庭服务器搭建指南（三）：服务部署',
            date: '2025-03-10',
            category: '技术',
            tags: ['服务器', 'Docker', '自动化'],
            url: 'posts/2025/03/home-server-part3.html',
            excerpt: '使用 Docker Compose 部署常用服务'
        },
        {
            title: 'AI 伦理：2025 年的思考',
            date: '2025-03-08',
            category: 'AI',
            tags: ['AI', '伦理', '思考'],
            url: 'posts/2025/03/ai-ethics-2025.html',
            excerpt: '探讨 AI 发展中的伦理问题和未来方向'
        },
        {
            title: '数字孪生技术入门',
            date: '2025-03-05',
            category: '技术',
            tags: ['数字孪生', 'IoT', '仿真'],
            url: 'posts/2025/03/digital-twins-technology.html',
            excerpt: '了解数字孪生技术的原理和应用场景'
        },
        {
            title: 'Serverless 架构实践',
            date: '2024-12-20',
            category: '架构',
            tags: ['Serverless', 'AWS Lambda', '云原生'],
            url: 'posts/2024/12/serverless-architecture.html',
            excerpt: '从零开始构建 Serverless 应用'
        },
        {
            title: 'React 性能优化实战',
            date: '2024-04-15',
            category: '前端',
            tags: ['React', '性能优化', 'Web'],
            url: 'posts/2024/04/react-performance-optimization.html',
            excerpt: '深入理解 React 性能优化技巧'
        },
        {
            title: 'Docker 容器化完全指南',
            date: '2024-03-10',
            category: 'DevOps',
            tags: ['Docker', '容器化', 'DevOps'],
            url: 'posts/2024/03/docker-containerization-guide.html',
            excerpt: '从入门到精通 Docker 容器技术'
        }
    ];

    return (
        <section id="blog" className="relative min-h-screen bg-black overflow-hidden py-24">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 lg:px-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-sm font-body text-white/80 mb-6">// 博客文章</div>
                    <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
                        技术<br />分享
                    </h2>
                </motion.div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.a
                            key={index}
                            href={post.url}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="liquid-glass rounded-[1.25rem] p-6 min-h-[280px] flex flex-col hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="liquid-glass rounded-full px-3 py-1 text-xs text-white/90 font-body">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-white/70 text-xs">
                                    <CalendarIcon />
                                    <span>{post.date}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-heading italic text-white text-2xl tracking-[-1px] leading-tight mb-3">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-sm text-white/80 font-body font-light leading-relaxed mb-4 flex-1">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="flex items-center gap-1 text-xs text-white/60">
                                        <TagIcon className="h-3 w-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <a href="#" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform">
                        查看所有文章
                        <ArticleIcon />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

window.BlogPosts = BlogPosts;
