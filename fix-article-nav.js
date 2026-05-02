const fs = require('fs');
const path = require('path');

// 新的响应式导航栏 HTML
const newNav = `    <nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(20, 20, 20, 0.4); backdrop-filter: blur(60px) saturate(250%) brightness(1.1); -webkit-backdrop-filter: blur(60px) saturate(250%) brightness(1.1); border-bottom: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5);">
        <div style="max-width: 1400px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
            <div id="solari-container" style="display: flex; align-items: center;"></div>

            <!-- Desktop Navigation -->
            <div id="desktop-nav" style="display: flex; gap: 2rem; align-items: center;">
                <a href="../../articles.html" style="padding: 0.75rem 1.5rem; background: rgba(255, 255, 255, 0.05); color: rgba(255, 255, 255, 0.9); text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 0.875rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255, 255, 255, 0.1);">ARTICLES</a>
                <a href="../../index.html#blog" style="padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color: #000; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 0.875rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4);">HOME</a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" style="display: none; background: none; border: none; color: rgba(255, 255, 255, 0.9); cursor: pointer; padding: 0.5rem;">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" style="display: none; background: rgba(0, 0, 0, 0.95); backdrop-filter: blur(20px); border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <div style="padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem;">
                <a href="../../articles.html" style="padding: 0.75rem 1rem; color: rgba(255, 255, 255, 0.9); text-decoration: none; font-weight: 600; font-size: 1rem;">ARTICLES</a>
                <a href="../../index.html#blog" style="padding: 0.75rem 1rem; background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color: #000; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1rem; text-align: center;">HOME</a>
            </div>
        </div>
    </nav>

    <script>
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const desktopNav = document.getElementById('desktop-nav');

        // Show/hide mobile menu button based on screen size
        function updateNavDisplay() {
            if (window.innerWidth < 768) {
                mobileMenuBtn.style.display = 'block';
                desktopNav.style.display = 'none';
            } else {
                mobileMenuBtn.style.display = 'none';
                desktopNav.style.display = 'flex';
                mobileMenu.style.display = 'none';
            }
        }

        mobileMenuBtn.addEventListener('click', () => {
            if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
                mobileMenu.style.display = 'block';
                mobileMenuBtn.querySelector('svg').innerHTML = '<path d="M6 18L18 6M6 6l12 12"/>';
            } else {
                mobileMenu.style.display = 'none';
                mobileMenuBtn.querySelector('svg').innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
            }
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
                mobileMenuBtn.querySelector('svg').innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
            });
        });

        window.addEventListener('resize', updateNavDisplay);
        updateNavDisplay();
    </script>`;

// 递归查找所有 HTML 文件
function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// 查找所有文章 HTML 文件
const files = findHtmlFiles('articles');
console.log(`Found ${files.length} article files`);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 查找并替换旧的导航栏
    const navRegex = /<nav style="position: fixed;[\s\S]*?<\/nav>/;

    if (navRegex.test(content)) {
        content = content.replace(navRegex, newNav);
        fs.writeFileSync(file, content);
        console.log(`✓ Updated: ${file}`);
    } else {
        console.log(`✗ No nav found in: ${file}`);
    }
});

console.log('\nDone! All article navigation bars updated with mobile responsive design.');
