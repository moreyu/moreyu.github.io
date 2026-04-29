function Footer() {
    return (
        <footer
            className="py-16 px-6 border-t fade-in-up"
            style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div>
                        <div className="text-3xl font-black mb-3" style={{ color: 'var(--text)' }}>Moreyu</div>
                        <div className="text-base" style={{ color: 'var(--text-secondary)' }}>
                            写代码，折腾技术，听音乐。
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <a
                            href="https://github.com/moreyu"
                            target="_blank"
                            className="text-base font-semibold transition-all"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--text)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--text-secondary)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://twitter.com/moreyu"
                            target="_blank"
                            className="text-base font-semibold transition-all"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--text)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--text-secondary)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Twitter
                        </a>
                        <a
                            href="mailto:hi@moreyu.me"
                            className="text-base font-semibold transition-all"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--text)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--text-secondary)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Email
                        </a>
                    </div>
                </div>
                <div className="text-sm text-center md:text-left" style={{ color: 'var(--text-tertiary)' }}>
                    © 2026 Moreyu. Built with React & Tailwind CSS.
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;
