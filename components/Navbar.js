const { motion } = window.Motion;

// ArrowUpRight Icon
function ArrowUpRight({ className = "h-5 w-5" }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M7 17L17 7M7 7h10v10" />
        </svg>
    );
}

function Navbar() {
    return (
        <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-heading italic text-white text-2xl">a</span>
                </div>

                {/* Center Nav - Desktop Only */}
                <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
                    {['首页', '旅程', '世界', '创新', '计划发射'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-2 ml-2">
                        预约席位
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Right Spacer */}
                <div className="w-12 h-12"></div>
            </div>
        </nav>
    );
}

window.Navbar = Navbar;
