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
                <a href="/" className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="font-heading italic text-white text-2xl">M</span>
                </a>

                {/* Center Nav - Desktop Only */}
                <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
                    <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                        首页
                    </a>
                    <a href="#capabilities" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                        技术领域
                    </a>
                    <a href="#blog" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                        博客
                    </a>
                    <a href="https://github.com/moreyu" target="_blank" className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-2 ml-2 hover:scale-105 transition-transform">
                        GitHub
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>

                {/* Right Spacer */}
                <div className="w-12 h-12"></div>
            </div>
        </nav>
    );
}

window.Navbar = Navbar;
