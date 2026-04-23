const { FadingVideo } = window;

// Material Icons
function CodeIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
    );
}

function RocketIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33 1.26M11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83l1.39 1.39 1.39 1.39 1.39 1.39M21 21l-5.89-5.89c-1.29 1.29-2.59 2.59-2.59 2.59L21 21M17 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M3.41 22.59L6 20l-4-4-2.59 2.59L1 22l1.41.59 1 1 .59 1.41.41-2.41z" />
        </svg>
    );
}

function BrainIcon({ className = "h-6 w-6" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45s-.62.84-1.12 1.02l-1.73.61c-.45.15-.95.09-1.35-.15-.39-.25-.67-.65-.77-1.11l-.33-1.52c-.41.1-.83.16-1.25.16-.83 0-1.64-.21-2.35-.61l-.9 1.01c-.4.45-1.05.59-1.61.34-.56-.25-.93-.79-1.01-1.42l-.11-1.05c-.44-.27-.84-.62-1.18-1.03-.35-.41-.63-.87-.83-1.37l-1.08-.16c-.6-.09-1.11-.48-1.34-1.04-.23-.55-.15-1.19.22-1.66l.69-1.23c-.26-.48-.44-.99-.54-1.52l-1.07-.38c-.53-.19-.93-.65-1.06-1.22-.13-.57.03-1.18.43-1.61l.77-.83c.05-.55.17-1.09.36-1.6.18-.51.43-.99.74-1.42l-.24-1.1c-.1-.46.03-.94.35-1.3.32-.35.79-.53 1.26-.47l1.06.13c.39-.35.83-.64 1.3-.86l.32-1.19c.1-.38.36-.71.71-.89.35-.19.77-.21 1.14-.06l1.23.5c.5-.04 1-.01 1.49.09l.87-.99c.35-.39.86-.59 1.37-.52.51.07.96.37 1.21.81l.51.89c.45.16.87.38 1.26.65.38.27.73.58 1.04.92l1.05.1c.53.05 1.01.34 1.26.77.25.43.28.96.06 1.43l-.37.98c.17.49.27.99.31 1.49.03.51.01 1.01-.07 1.51l.98.96c.43.43.59 1.08.4 1.65-.19.58-.68 1.01-1.29 1.13l-1.21.24c-.12.43-.31.83-.55 1.21-.24.37-.54.71-.87 1.01l.09.94c.04.43-.09.85-.37 1.18-.27.33-.68.54-1.11.58l-1.25.11c-.45.36-.95.64-1.48.85l-.22 1.15c-.09.5-.44.91-.92 1.09-.48.18-1.02.11-1.42-.19l-.83-.62c-.52.13-1.06.19-1.6.19-.54 0-1.08-.07-1.6-.19l-.83.62c-.4.3-.94.37-1.42.19-.48-.18-.83-.59-.92-1.09l-.22-1.15c-.53-.21-1.03-.49-1.48-.85l-1.25-.11c-.43-.04-.84-.25-1.11-.58-.28-.33-.41-.75-.37-1.18l.09-.94c-.33-.3-.63-.64-.87-1.01-.24-.38-.43-.78-.55-1.21l-1.21-.24c-.61-.12-1.1-.55-1.29-1.13-.19-.57-.03-1.22.4-1.65l.98-.96c-.08-.5-.1-1-.07-1.51.04-.5.14-1 .31-1.49l-.37-.98c-.22-.47-.19-1 .06-1.43.25-.43.73-.72 1.26-.77l1.05-.1c.31-.34.66-.65 1.04-.92.39-.27.81-.49 1.26-.65l.51-.89c.25-.44.7-.74 1.21-.81.51-.07 1.02.13 1.37.52l.87.99c.49-.1.99-.13 1.49-.09l1.23-.5c.37-.15.79-.13 1.14.06.35.18.61.51.71.89l.32 1.19c.47.22.91.51 1.3.86l1.06-.13c.47-.06.94.12 1.26.47.32.36.45.84.35 1.3l-.24 1.1c.31.43.56.91.74 1.42.19.51.31 1.05.36 1.6l.77.83c.4.43.56 1.04.43 1.61-.13.57-.53 1.03-1.06 1.22l-1.07.38c-.1.53-.28 1.04-.54 1.52l.69 1.23c.37.47.45 1.11.22 1.66z" />
        </svg>
    );
}

function Capabilities() {
    const cards = [
        {
            icon: CodeIcon,
            title: '全栈开发',
            description: '精通前端（React/Vue）、后端（Python/Go/Node.js）和 DevOps，构建从零到一的完整解决方案。',
            tags: ['React', 'Python', 'Go', 'Docker']
        },
        {
            icon: RocketIcon,
            title: '自动化工具',
            description: '热衷于开发自动化工具和脚本，提升工作效率。从账号管理到数据备份，让重复工作自动化。',
            tags: ['效率提升', '工具开发', '脚本自动化', '极客精神']
        },
        {
            icon: BrainIcon,
            title: 'AI 应用',
            description: '探索大语言模型应用开发，使用 LangChain、FastAPI 构建智能化解决方案，让 AI 真正落地。',
            tags: ['LLM', 'LangChain', 'AI Agent', 'RAG']
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
                    <div className="text-sm font-body text-white/80 mb-6">// 技术领域</div>
                    <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
                        技术<br />探索
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
