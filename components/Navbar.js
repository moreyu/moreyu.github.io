function Navbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 fade-in"
            style={{
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--border)'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-black tracking-tight"
                    style={{ color: 'var(--text)', textDecoration: 'none' }}
                >
                    MOREYU
                </a>

                {/* Nav Links */}
                <div className="flex items-center gap-10">
                    <a
                        href="#home"
                        className="text-sm font-semibold transition-all"
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                        Home
                    </a>
                    <a
                        href="#capabilities"
                        className="text-sm font-semibold transition-all"
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                        Capabilities
                    </a>
                    <a
                        href="#blog"
                        className="text-sm font-semibold transition-all"
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                        Blog
                    </a>
                    <a
                        href="https://github.com/moreyu"
                        target="_blank"
                        className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all"
                        style={{
                            background: 'var(--accent)',
                            color: 'white',
                            textDecoration: 'none',
                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent-hover)';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'var(--accent)';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.3)';
                        }}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

window.Navbar = Navbar;
