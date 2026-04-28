function Capabilities() {
    const cards = [
        {
            code: 'fullstack',
            title: '全栈开发',
            description: '从用户界面到服务器架构，掌握完整的技术栈。构建高性能、可扩展的现代 Web 应用。',
            skills: [
                { name: 'React/Next.js', level: 95 },
                { name: 'Python/FastAPI', level: 90 },
                { name: 'Go/Gin', level: 85 },
                { name: 'PostgreSQL', level: 88 }
            ]
        },
        {
            code: 'devops',
            title: '云原生 & DevOps',
            description: '自动化一切可以自动化的。CI/CD、容器化、基础设施即代码，让部署变得简单。',
            skills: [
                { name: 'Docker/K8s', level: 88 },
                { name: 'GitHub Actions', level: 92 },
                { name: 'Terraform', level: 80 },
                { name: 'Monitoring', level: 85 }
            ]
        },
        {
            code: 'ai',
            title: 'AI 应用开发',
            description: '将大语言模型的能力转化为实际产品。从 RAG 系统到 AI Agent，让 AI 真正落地。',
            skills: [
                { name: 'LangChain', level: 90 },
                { name: 'Vector DB', level: 85 },
                { name: 'Prompt Eng', level: 92 },
                { name: 'Fine-tuning', level: 78 }
            ]
        }
    ];

    return (
        <section id="capabilities" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 fade-in-up">
                    <div className="text-xs font-bold tracking-widest mb-6" style={{ color: 'var(--text-tertiary)' }}>WHAT I DO</div>
                    <h2 className="text-6xl md:text-7xl font-black mb-8" style={{ color: 'var(--text)', letterSpacing: '-0.04em' }}>
                        核心能力
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        多年技术积累，专注于构建高质量的软件产品。
                        <br />
                        从前端到后端，从开发到部署，全流程掌控。
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="glass-card glass-card-hover p-10 fade-in-up glow"
                            style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                        >
                            {/* Code Badge */}
                            <div className="mb-8">
                                <div className="code-block text-sm">{card.code}</div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                {card.description}
                            </p>

                            {/* Skills with progress bars */}
                            <div className="space-y-4">
                                {card.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{skill.name}</span>
                                            <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, var(--accent), var(--orange))`,
                                                    boxShadow: '0 0 10px var(--accent-glow)'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Capabilities = Capabilities;
