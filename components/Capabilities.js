const { FadingVideo } = window;

// Material Icons
function ImageIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
        </svg>
    );
}

function MovieIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
        </svg>
    );
}

function LightbulbIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
        </svg>
    );
}

function Capabilities() {
    const cards = [
        {
            icon: ImageIcon,
            title: 'AI 场景',
            description: 'AI 分析您的产品以创建难以区分的自然环境——从冰岛悬崖到雾蒙蒙的森林。',
            tags: ['自然语境', '照片级真实', '无限设置', '生态氛围']
        },
        {
            icon: MovieIcon,
            title: '批量生产',
            description: '几分钟内为整个产品线设置样式。为目录和社交媒体创建统一的视觉识别，无需数周的修饰。',
            tags: ['快速扩展', '视觉一致性', '节省时间', '即用即发']
        },
        {
            icon: LightbulbIcon,
            title: '智能照明',
            description: '自动照明和材质调整。通过逼真的阴影和阳光实现完美融合。',
            tags: ['光线追踪', '物理阴影', '工作室品质', '阳光同步']
        }
    ];

    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            {/* Background Video - Full bleed */}
            <FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
                {/* Header */}
                <div className="mb-auto">
                    <div className="text-sm font-body text-white/80 mb-6">// 能力</div>
                    <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
                        生产<br />进化
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {cards.map((card, index) => (
                        <div key={index} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
                            {/* Top Row */}
                            <div className="flex items-start justify-between gap-4">
                                {/* Icon */}
                                <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center flex-shrink-0">
                                    <card.icon className="text-white" />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                                    {card.tags.map((tag, i) => (
                                        <span key={i} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="flex-1"></div>

                            {/* Bottom Content */}
                            <div className="mt-6">
                                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

window.Capabilities = Capabilities;
