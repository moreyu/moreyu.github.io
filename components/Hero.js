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
            {/* Background Video - 120% scale, top-aligned */}
            <FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
                className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
                style={{ width: '120%', height: '120%' }}
            />

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
                        <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">新</span>
                        <span className="text-sm text-white/90 pr-3">首次载人火星之旅将于 2026 年抵达</span>
                    </motion.div>

                    {/* Headline with BlurText */}
                    <BlurText
                        text="探索天际 穿越宇宙"
                        className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center tracking-[-4px]"
                    />

                    {/* Subheading */}
                    <motion.p
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                        className="mt-4 text-sm md:text-base text-white/90 max-w-2xl font-body font-light leading-tight text-center"
                    >
                        以前所未有的方式探索宇宙。我们的先锋飞船和突破性工程让深空探索触手可及——安全而非凡。
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                        className="flex items-center gap-6 mt-6"
                    >
                        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2">
                            开始您的旅程
                            <ArrowUpRight className="h-5 w-5" />
                        </button>
                        <a href="#" className="text-white/90 text-sm font-medium flex items-center gap-2 hover:text-white transition-colors">
                            观看发射
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
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">34.5 分钟</div>
                            <div className="text-xs text-white/90 font-body font-light mt-2">平均视频观看时长</div>
                        </div>
                        <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
                            <Globe className="text-white mb-4" />
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">28 亿+</div>
                            <div className="text-xs text-white/90 font-body font-light mt-2">全球用户</div>
                        </div>
                    </motion.div>
                </div>

                {/* Partners */}
                <motion.div
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-4 pb-8"
                >
                    <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
                        与全球顶尖航天先驱合作
                    </div>
                    <div className="flex items-center gap-12 md:gap-16 text-2xl md:text-3xl font-heading italic text-white tracking-tight">
                        <span>Aeon</span>
                        <span>·</span>
                        <span>Vela</span>
                        <span>·</span>
                        <span>Apex</span>
                        <span>·</span>
                        <span>Orbit</span>
                        <span>·</span>
                        <span>Zeno</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

window.Hero = Hero;
