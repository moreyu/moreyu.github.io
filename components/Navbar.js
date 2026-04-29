function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 fade-in"
            style={{
                background: 'rgba(20, 20, 20, 0.4)',
                backdropFilter: 'blur(60px) saturate(250%) brightness(1.1)',
                WebkitBackdropFilter: 'blur(60px) saturate(250%) brightness(1.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo - Split-flap animation */}
                {window.SolariLogo && <window.SolariLogo />}

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10">
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
                        href="https://all-in.cc.cd"
                        target="_blank"
                        className="px-6 py-2.5 text-sm font-semibold rounded-lg transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                            color: 'white',
                            textDecoration: 'none',
                            boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(217, 119, 6, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(217, 119, 6, 0.3)';
                        }}
                    >
                        API 中转站
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text)',
                        cursor: 'pointer'
                    }}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden"
                    style={{
                        background: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderTop: '1px solid var(--border)'
                    }}
                >
                    <div className="px-6 py-4 flex flex-col gap-4">
                        <a
                            href="#home"
                            className="text-base font-semibold py-2"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#capabilities"
                            className="text-base font-semibold py-2"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Capabilities
                        </a>
                        <a
                            href="#blog"
                            className="text-base font-semibold py-2"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </a>
                        <a
                            href="https://all-in.cc.cd"
                            target="_blank"
                            className="px-5 py-3 text-base font-semibold rounded-full text-center"
                            style={{
                                background: 'var(--accent)',
                                color: 'white',
                                textDecoration: 'none',
                                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)'
                            }}
                        >
                            API 中转站
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

window.Navbar = Navbar;
