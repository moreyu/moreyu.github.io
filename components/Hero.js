const { motion } = window.Motion;
const { BlurText, FadingVideo } = window;

// ArrowUpRight Icon
function ArrowUpRight({ className = "h-5 w-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M7 17L17 7M7 7h10v10" />
        </svg>
    );
}

// Play Icon
function Play({ className = "h-4 w-4" }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <polygon points="6 4 20 12 6 20 6 4" />
        </svg>
    );
}

// Clock Icon
function Clock({ className = "h-7 w-7" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}

// Globe Icon
function Globe({ className = "h-7 w-7" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

function Hero() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            {/* Gradient Background - 替代视频 */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent"></div>

            {/* Content Layer */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Hero Content */}
                <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
                    {/* Badge */}
                    <motion.div
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="liquid-glass rounded-full flex items-center gap-3 px-1.5 py-1.5 mb-6"
                    >
                        <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">✨</span>
                        <span className="text-sm text-white/90 pr-3">全栈开发者 · AI 探索者</span>
                    </motion.div>

                    {/* Headline with BlurText */}
                    <BlurText
                        text="用技术改变生活 用创意实现梦想"
                        className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading italic text-white leading-[0.9] max-w-4xl text-center tracking-[-3px]"
                    />

                    {/* Subheading */}
                    <motion.p
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                        className="mt-4 text-sm md:text-base text-white/90 max-w-2xl font-body font-light leading-tight text-center"
                    >
                        👋 嗨，我是 Moreyu，热衷于探索新技术和自动化解决方案的全栈工程师。在这里分享技术心得、项目实践和极客生活。
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                        className="flex items-center gap-6 mt-6"
                    >
                        <a href="https://github.com/moreyu" target="_blank" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2">
                            访问 GitHub
                            <ArrowUpRight className="h-5 w-5" />
                        </a>
                        <a href="#capabilities" className="text-white/90 text-sm font-medium flex items-center gap-2 hover:text-white transition-colors">
                            了解更多
                            <Play className="h-4 w-4" />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
                        className="flex items-stretch gap-4 mt-8"
                    >
                        <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
                            <Clock className="text-white mb-4" />
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">2025+</div>
                            <div className="text-xs text-white/90 font-body font-light mt-2">专注 AI 应用开发</div>
                        </div>
                        <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
                            <Globe className="text-white mb-4" />
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">全栈</div>
                            <div className="text-xs text-white/90 font-body font-light mt-2">前端 · 后端 · DevOps</div>
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-4 pb-8"
                >
                    <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
                        技术栈
                    </div>
                    <div className="flex items-center gap-8 md:gap-12 text-xl md:text-2xl font-heading italic text-white tracking-tight">
                        <span>React</span>
                        <span>·</span>
                        <span>Python</span>
                        <span>·</span>
                        <span>Go</span>
                        <span>·</span>
                        <span>Docker</span>
                        <span>·</span>
                        <span>AI</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

window.Hero = Hero;
