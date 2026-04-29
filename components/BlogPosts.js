function BlogPosts() {
    const categories = [
        {
            title: 'STREAM & SMART MEDIA HUB',
            iconSvg: '<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><style>@keyframes satFloat { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 50% { transform: translate(0.3px, -0.5px) rotate(1deg); } } @keyframes signalPulse1 { 0% { opacity: 0.8; r: 1.5; } 100% { opacity: 0; r: 3.5; } } @keyframes signalPulse2 { 0% { opacity: 0.6; r: 1.5; } 100% { opacity: 0; r: 5; } } @keyframes panelShimmer { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } } .sat-body { animation: satFloat 3s ease-in-out infinite; transform-origin: 10px 10px; } .signal-ring1 { animation: signalPulse1 2s ease-out infinite; transform-origin: 14.5px 5.5px; } .signal-ring2 { animation: signalPulse2 2s ease-out infinite 0.5s; transform-origin: 14.5px 5.5px; } .panel-shimmer { animation: panelShimmer 3s ease-in-out infinite; }</style><circle class="signal-ring1" cx="14.5" cy="5.5" r="1.5" stroke="#f97316" stroke-width="0.8" fill="none" opacity="0.8"/><circle class="signal-ring2" cx="14.5" cy="5.5" r="1.5" stroke="#facc15" stroke-width="0.6" fill="none" opacity="0.6"/><g class="sat-body"><rect x="8" y="8" width="4" height="4" rx="0.8" stroke="#d97706" stroke-width="1.2" fill="none"/><rect x="8" y="8" width="4" height="4" rx="0.8" fill="#fed7aa" opacity="0.3"/><line x1="11.5" y1="8" x2="14.5" y2="5.5" stroke="#d97706" stroke-width="1.2" stroke-linecap="round"/><circle cx="14.5" cy="5.5" r="0.8" stroke="#d97706" stroke-width="1" fill="none"/><circle cx="14.5" cy="5.5" r="0.8" fill="#f97316" opacity="0.3"/><rect x="2" y="8.5" width="5" height="3" rx="0.5" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" fill="none"/><line x1="4.5" y1="8.5" x2="4.5" y2="11.5" stroke="#fbbf24" stroke-width="0.6" opacity="0.5"/><line x1="2" y1="10" x2="7" y2="10" stroke="#fbbf24" stroke-width="0.6" opacity="0.5"/><rect class="panel-shimmer" x="2.5" y="8.8" width="2" height="1" rx="0.3" fill="#facc15" opacity="0.3"/><rect x="13" y="8.5" width="5" height="3" rx="0.5" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" fill="none"/><line x1="15.5" y1="8.5" x2="15.5" y2="11.5" stroke="#fbbf24" stroke-width="0.6" opacity="0.5"/><line x1="13" y1="10" x2="18" y2="10" stroke="#fbbf24" stroke-width="0.6" opacity="0.5"/><rect class="panel-shimmer" x="15.8" y="8.8" width="2" height="1" rx="0.3" fill="#facc15" opacity="0.3"/><line x1="8.5" y1="10" x2="11.5" y2="10" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/></g></svg>',
            description: 'Home Assistant / Apple TV / NAS / EMBY / Movie Pilot',
            gradient: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
            articleCount: '5 篇文章',
            link: '/articles.html?category=media-hub'
        },
        {
            title: 'CRYPTO & PAY',
            iconSvg: '<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><style>@keyframes chipPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.01); } } @keyframes corePulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } } @keyframes pinFlow { 0% { stroke-dashoffset: 4; } 100% { stroke-dashoffset: 0; } } .chip-group { animation: chipPulse 3s ease-in-out infinite; transform-origin: 10px 10px; } .core-glow { animation: corePulse 2s ease-in-out infinite; } .pin-anim { animation: pinFlow 1.5s linear infinite; stroke-dasharray: 2 2; }</style><g class="chip-group"><rect x="5" y="5" width="10" height="10" rx="1.5" stroke="#d97706" stroke-width="1.2" fill="none"/><rect x="5" y="5" width="10" height="10" rx="1.5" fill="#fed7aa" opacity="0.2"/><rect x="7.5" y="7.5" width="5" height="5" rx="0.8" stroke="#d97706" stroke-width="1" fill="none"/><rect class="core-glow" x="7.5" y="7.5" width="5" height="5" rx="0.8" fill="#f97316" opacity="0.15"/><path d="M8.5 10L9.5 10L9.5 8.5" stroke="#fbbf24" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6"/><path d="M11.5 10L10.5 10L10.5 11.5" stroke="#fbbf24" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6"/><circle cx="10" cy="10" r="0.6" stroke="#f97316" stroke-width="0.7" fill="none" opacity="0.7"/><circle class="core-glow" cx="10" cy="10" r="0.3" fill="#facc15" opacity="0.6"/><line class="pin-anim" x1="7.5" y1="5" x2="7.5" y2="2.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="10" y1="5" x2="10" y2="2.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="12.5" y1="5" x2="12.5" y2="2.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="7.5" y1="15" x2="7.5" y2="17.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="10" y1="15" x2="10" y2="17.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="12.5" y1="15" x2="12.5" y2="17.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="5" y1="7.5" x2="2.5" y2="7.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="5" y1="10" x2="2.5" y2="10" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="5" y1="12.5" x2="2.5" y2="12.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="15" y1="7.5" x2="17.5" y2="7.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="15" y1="10" x2="17.5" y2="10" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><line class="pin-anim" x1="15" y1="12.5" x2="17.5" y2="12.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/><circle cx="7.5" cy="2.5" r="0.4" fill="#f97316" opacity="0.5"/><circle cx="12.5" cy="2.5" r="0.4" fill="#f97316" opacity="0.5"/><circle cx="7.5" cy="17.5" r="0.4" fill="#f97316" opacity="0.5"/><circle cx="12.5" cy="17.5" r="0.4" fill="#f97316" opacity="0.5"/></g></svg>',
            description: '虚拟货币 / U卡 / 美卡 / eSIM 研究',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            articleCount: '5 篇文章',
            link: '/articles.html?category=crypto-pay'
        },
        {
            title: 'AI & VIBE CODING',
            iconSvg: '<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><style>@keyframes caiPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } } @keyframes caiCursor { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } } @keyframes caiSparkle { 0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); } 50% { opacity: 1; transform: scale(1.1) rotate(15deg); } } @keyframes caiGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } } .cai-group { animation: caiPulse 3s ease-in-out infinite; transform-origin: 10px 11px; } .cai-cursor { animation: caiCursor 1s step-end infinite; } .cai-sparkle { animation: caiSparkle 2.5s ease-in-out infinite; transform-origin: 16px 4px; } .cai-glow { animation: caiGlow 2.5s ease-in-out infinite; }</style><g class="cai-group"><polyline points="7,5 3,10.5 7,16" stroke="#d97706" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><polyline points="13,5 17,10.5 13,16" stroke="#d97706" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="11.5" y1="5" x2="8.5" y2="16" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round"/><line class="cai-glow" x1="5" y1="10.5" x2="8" y2="10.5" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/><line class="cai-glow" x1="12" y1="10.5" x2="15" y2="10.5" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/><line class="cai-cursor" x1="10" y1="8" x2="10" y2="13" stroke="#f97316" stroke-width="0.8" stroke-linecap="round" opacity="0.7"/></g><g class="cai-sparkle"><path d="M16 2L16.4 3.2L17.6 3.6L16.4 4L16 5.2L15.6 4L14.4 3.6L15.6 3.2Z" stroke="#f97316" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M16 2L16.4 3.2L17.6 3.6L16.4 4L16 5.2L15.6 4L14.4 3.6L15.6 3.2Z" fill="#facc15" opacity="0.3"/></g></svg>',
            description: 'AI 模型 / API 反代 / 中转站运营 / 养虾心得',
            gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
            articleCount: '5 篇文章',
            link: '/articles.html?category=ai-coding'
        },
        {
            title: 'MUSIC / MOVIE / SERIES',
            iconSvg: '<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><style>@keyframes saWaveL1 { 0%, 100% { opacity: 0.6; transform: translateX(0); } 50% { opacity: 0.2; transform: translateX(-0.5px); } } @keyframes saWaveL2 { 0%, 100% { opacity: 0.3; transform: translateX(0); } 50% { opacity: 0.7; transform: translateX(-0.8px); } } @keyframes saWaveR1 { 0%, 100% { opacity: 0.6; transform: translateX(0); } 50% { opacity: 0.2; transform: translateX(0.5px); } } @keyframes saWaveR2 { 0%, 100% { opacity: 0.3; transform: translateX(0); } 50% { opacity: 0.7; transform: translateX(0.8px); } } @keyframes saPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } } .sa-wl1 { animation: saWaveL1 2s ease-in-out infinite; transform-origin: 5px 10px; } .sa-wl2 { animation: saWaveL2 2s ease-in-out infinite 0.3s; transform-origin: 3px 10px; } .sa-wr1 { animation: saWaveR1 2s ease-in-out infinite; transform-origin: 15px 10px; } .sa-wr2 { animation: saWaveR2 2s ease-in-out infinite 0.3s; transform-origin: 17px 10px; } .sa-pulse { animation: saPulse 2.5s ease-in-out infinite; }</style><circle cx="10" cy="8.5" r="3" stroke="#d97706" stroke-width="1.2" fill="none"/><circle cx="10" cy="8.5" r="3" fill="#fed7aa" opacity="0.2"/><circle cx="9" cy="8" r="0.4" fill="#fbbf24" opacity="0.5"/><circle cx="11" cy="8" r="0.4" fill="#fbbf24" opacity="0.5"/><path d="M8 11.5C8 11.5 8 13 7 14.5H13C12 13 12 11.5 12 11.5" stroke="#d97706" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path class="sa-wl1" d="M5.5 6.5C4.5 7.5 4.5 9.5 5.5 10.5" stroke="#d97706" stroke-width="1.2" stroke-linecap="round" fill="none"/><path class="sa-wl2" d="M3.5 5C2 7 2 10 3.5 12" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/><path class="sa-wl2" d="M1.5 4C-0.5 7 -0.5 10 1.5 13" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.3"/><path class="sa-wr1" d="M14.5 6.5C15.5 7.5 15.5 9.5 14.5 10.5" stroke="#d97706" stroke-width="1.2" stroke-linecap="round" fill="none"/><path class="sa-wr2" d="M16.5 5C18 7 18 10 16.5 12" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/><path class="sa-wr2" d="M18.5 4C20.5 7 20.5 10 18.5 13" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.3"/><path class="sa-pulse" d="M4 8.5C4.5 8 5 7.5 5.5 7.5" stroke="#f97316" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.5"/><path class="sa-pulse" d="M16 8.5C15.5 8 15 7.5 14.5 7.5" stroke="#facc15" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.5"/><path d="M7.2 5.8C8 4 12 4 12.8 5.8" stroke="#fbbf24" stroke-width="0.7" stroke-linecap="round" fill="none" opacity="0.4"/></svg>',
            description: '音乐节 / 音乐 / 剧集 / 生活方式',
            gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
            articleCount: '5 篇文章',
            link: '/articles.html?category=lifestyle'
        }
    ];

    return (
        <section id="blog" className="py-32 px-6" style={{ background: 'var(--bg)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-24 fade-in-up">
                    <div className="text-xs font-bold tracking-widest mb-6" style={{ color: '#94a3b8' }}>EXPLORE TOPICS</div>
                    <h2 className="text-6xl md:text-7xl font-black mb-8" style={{ color: '#94a3b8', letterSpacing: '-0.04em' }}>
                        探索领域
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                        技术折腾、支付研究、AI 探索、生活记录。
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href={category.link}
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
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                    style={{
                                        background: 'rgba(217, 119, 6, 0.1)',
                                        border: '1px solid rgba(217, 119, 6, 0.3)',
                                        boxShadow: '0 8px 24px rgba(217, 119, 6, 0.2)',
                                        padding: '12px'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: category.iconSvg.replace('width="24" height="24"', 'width="100%" height="100%"') }}
                                ></div>

                                {/* Title */}
                                <h3 className="text-4xl font-black mb-4 group-hover:gradient-text transition-all" style={{ color: '#f1f5f9', letterSpacing: '-0.03em' }}>
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                                    {category.description}
                                </p>

                                {/* Article Count & Arrow */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold" style={{ color: '#64748b' }}>
                                        {category.articleCount}
                                    </span>
                                    <svg className="h-8 w-8 icon-arrow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: '#64748b' }}>
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.BlogPosts = BlogPosts;
