// 文章数据管理
const allArticles = [
  // 2025年8月文章
  {
    title: 'AI Agent框架对比：AutoGPT vs LangChain vs CrewAI 🤖',
    url: '/posts/2025/08/ai-agent-framework-comparison.html',
    date: '2025-08-25',
    category: '人工智能',
    tags: ['AI Agent', 'AutoGPT', 'LangChain', 'CrewAI'],
    excerpt: 'AI Agent技术正在快速发展，本文将深入对比主流的AI Agent框架，分析它们的优缺点和适用场景。'
  },
  {
    title: '量子计算2025：从理论到商业应用的突破 ⚛️',
    url: '/posts/2025/08/quantum-computing-2025.html',
    date: '2025-08-10',
    category: '前沿技术',
    tags: ['量子计算', '量子算法', '商业应用'],
    excerpt: '量子计算在2025年取得了重大突破，本文探讨最新的技术进展和商业应用前景。'
  },

  // 2025年7月文章
  {
    title: 'Web3社交平台：去中心化社交网络的未来 🌐',
    url: '/posts/2025/07/web3-social-platforms.html',
    date: '2025-07-28',
    category: '区块链',
    tags: ['Web3', '社交网络', '去中心化'],
    excerpt: 'Web3技术正在重塑社交网络，本文分析去中心化社交平台的发展趋势和技术架构。'
  },
  {
    title: '边缘计算与AI：智能设备的未来计算模式 📱',
    url: '/posts/2025/07/edge-computing-ai.html',
    date: '2025-07-15',
    category: '前沿技术',
    tags: ['边缘计算', 'AI推理', '智能设备'],
    excerpt: '边缘计算与AI的结合正在改变智能设备的计算模式，本文探讨技术架构和应用场景。'
  },

  // 2025年6月文章
  {
    title: 'AI代码审查工具：提升代码质量的智能助手 🔍',
    url: '/posts/2025/06/ai-code-review-tools.html',
    date: '2025-06-30',
    category: '开发工具',
    tags: ['代码审查', 'AI工具', '代码质量'],
    excerpt: 'AI驱动的代码审查工具正在改变开发流程，本文介绍主流工具和最佳实践。'
  },
  {
    title: '元宇宙开发指南：构建虚拟世界的技术栈 🌍',
    url: '/posts/2025/06/metaverse-development.html',
    date: '2025-06-15',
    category: '前沿技术',
    tags: ['元宇宙', 'VR/AR', '3D开发'],
    excerpt: '元宇宙开发需要综合多种技术，本文详细介绍技术栈和开发流程。'
  },

  // 2025年5月文章
  {
    title: 'AI驱动的自动化测试：智能测试的未来 🧪',
    url: '/posts/2025/05/ai-powered-testing.html',
    date: '2025-05-25',
    category: '开发工具',
    tags: ['自动化测试', 'AI测试', '质量保证'],
    excerpt: 'AI技术正在革新软件测试领域，本文探讨智能测试工具和方法论。'
  },
  {
    title: '绿色计算2025：可持续发展的技术趋势 🌱',
    url: '/posts/2025/05/green-computing-2025.html',
    date: '2025-05-10',
    category: '前沿技术',
    tags: ['绿色计算', '可持续发展', '节能技术'],
    excerpt: '绿色计算成为2025年的重要趋势，本文分析节能技术和可持续发展策略。'
  },

  // 2025年4月文章
  {
    title: 'AI网络安全：智能威胁检测与防护 🛡️',
    url: '/posts/2025/04/ai-cybersecurity.html',
    date: '2025-04-20',
    category: '网络安全',
    tags: ['AI安全', '威胁检测', '智能防护'],
    excerpt: 'AI技术在网络安全领域的应用正在快速发展，本文探讨智能威胁检测和防护技术。'
  },
  {
    title: '低代码平台2025：企业数字化转型的加速器 ⚡',
    url: '/posts/2025/04/low-code-platforms.html',
    date: '2025-04-05',
    category: '开发工具',
    tags: ['低代码', '数字化转型', '企业应用'],
    excerpt: '低代码平台正在加速企业数字化转型，本文分析主流平台和成功案例。'
  },

  // 2025年3月文章
  {
    title: 'AI伦理2025：负责任的人工智能发展 🤝',
    url: '/posts/2025/03/ai-ethics-2025.html',
    date: '2025-03-25',
    category: '人工智能',
    tags: ['AI伦理', '负责任AI', '技术治理'],
    excerpt: 'AI伦理成为2025年的重要议题，本文探讨负责任AI的发展原则和实践。'
  },
  {
    title: '数字孪生技术：物理世界的数字镜像 🔄',
    url: '/posts/2025/03/digital-twins-technology.html',
    date: '2025-03-10',
    category: '前沿技术',
    tags: ['数字孪生', 'IoT', '实时监控'],
    excerpt: '数字孪生技术正在改变工业和服务业，本文详细介绍技术架构和应用场景。'
  },
  {
    title: '家用伺服器折腾手记-6：Mac mini 整合 MoviePilot、AList 和 Emby 🎯',
    url: '/posts/2025/03/home-server-part6.html',
    date: '2025-03-13',
    category: '云原生',
    tags: ['Docker', '影视', '自动化'],
    excerpt: '在前几篇文章中，我们已经成功部署了 MoviePilot、AList 和 Emby 三个服务。这次我们将介绍如何将这三个服务整合在一起，打造一个完整的影视管理系统。'
  },
  {
    title: '家用伺服器折腾手记-5：Mac mini 搭建 Emby 影视库 🎬',
    url: '/posts/2025/03/home-server-part5.html',
    date: '2025-03-12',
    category: '云原生',
    tags: ['Docker', '影视', '自动化'],
    excerpt: '探索如何在 Mac mini 上部署 Emby，打造完美的家庭影院体验。本文详细介绍了 Emby 的部署步骤、媒体库配置、转码设置以及进阶功能。'
  },
  {
    title: '家用伺服器折腾手记-4：Mac mini 部署 AList 服务 🗂️',
    url: '/posts/2025/03/home-server-part4.html',
    date: '2025-03-10',
    category: '云原生',
    tags: ['Docker', '文件管理', '自动化'],
    excerpt: '探索如何在 Mac mini 上部署 AList，实现跨设备文件传输和私人影视库功能。本文详细介绍了环境配置、部署步骤、进阶设置和实用功能。'
  },
  {
    title: '家用伺服器折腾手记-3：Mac mini 部署 Open WebUI 教程 🤖',
    url: '/posts/2025/03/home-server-part3.html',
    date: '2025-03-09',
    category: '人工智能',
    tags: ['Docker', 'AI', '自动化'],
    excerpt: '探索如何在 Mac mini 上部署 Open WebUI，搭建属于自己的本地 AI 助手。本文详细介绍了环境配置、模型管理、性能优化等内容。'
  },
  {
    title: '家用伺服器折腾手记-2：Mac mini 部署 MoviePilot 教程 🎬',
    url: '/posts/2025/03/home-server-part2.html',
    date: '2025-03-08',
    category: '云原生',
    tags: ['Docker', '影视', '自动化'],
    excerpt: '继续我们的 Mac mini 服务器系列！本文将介绍如何使用 Docker Compose 部署 MoviePilot，一个强大的电影管理工具。'
  },
  {
    title: '家用伺服器折腾手记-1：Mac mini 搭建青龙面板教程 🖥️',
    url: '/posts/2025/03/home-server-part1.html',
    date: '2025-03-07',
    category: '云原生',
    tags: ['服务器', 'Docker', '自动化'],
    excerpt: 'Mac mini 作为家用服务器的完美选择！本文详细介绍如何配置 Mac mini 运行 Docker、Docker Compose，并搭建青龙面板实现自动化脚本管理。'
  },

  // 2024年12月文章
  {
    title: '数据可视化指南：让数据讲述故事 📊',
    url: '/posts/2024/12/data-visualization-guide.html',
    date: '2024-12-25',
    category: '数据可视化',
    tags: ['数据可视化', '前端开发', '数据分析'],
    excerpt: '数据可视化的技术和工具，将复杂数据转化为直观的图表和故事。'
  },
  {
    title: '无服务器架构：云原生应用的新范式 ☁️',
    url: '/posts/2024/12/serverless-architecture.html',
    date: '2024-12-10',
    category: '云原生',
    tags: ['无服务器', '函数计算', '云原生'],
    excerpt: '无服务器架构的优势和应用场景，实现真正的按需付费。'
  },

  // 2024年11月文章
  {
    title: '移动应用开发：跨平台解决方案对比 📱',
    url: '/posts/2024/11/mobile-app-development.html',
    date: '2024-11-20',
    category: '移动开发',
    tags: ['跨平台', 'React Native', '移动应用'],
    excerpt: '现代移动应用开发的跨平台解决方案，包括React Native、Flutter等。'
  },
  {
    title: '区块链开发入门：从概念到智能合约 ⛓️',
    url: '/posts/2024/11/blockchain-development.html',
    date: '2024-11-05',
    category: '区块链',
    tags: ['智能合约', 'Web3', '区块链'],
    excerpt: '区块链技术的基础知识和智能合约开发，探索Web3的未来。'
  },

  // 2024年10月文章
  {
    title: '前端测试策略：确保代码质量的完整方案 🧪',
    url: '/posts/2024/10/frontend-testing-strategies.html',
    date: '2024-10-22',
    category: '前端开发',
    tags: ['测试', '质量保证', '前端开发'],
    excerpt: '前端应用的测试策略和工具，确保代码质量和用户体验。'
  },
  {
    title: '网络安全基础：保护你的数字资产 🛡️',
    url: '/posts/2024/10/cybersecurity-basics.html',
    date: '2024-10-08',
    category: '网络安全',
    tags: ['网络安全', '信息安全', '最佳实践'],
    excerpt: '网络安全的基础知识和防护策略，保护个人和企业的数字资产。'
  },

  // 2024年9月文章
  {
    title: 'API设计原则：构建优秀的RESTful API 🔌',
    url: '/posts/2024/09/api-design-principles.html',
    date: '2024-09-25',
    category: '后端开发',
    tags: ['API设计', 'RESTful', '最佳实践'],
    excerpt: '设计优秀API的原则和最佳实践，提升API的可用性和可维护性。'
  },
  {
    title: 'Git工作流策略：团队协作的最佳实践 🌿',
    url: '/posts/2024/09/git-workflow-strategies.html',
    date: '2024-09-10',
    category: '版本控制',
    tags: ['Git', '团队协作', '工作流'],
    excerpt: '高效的Git工作流策略，提升团队开发效率和代码质量。'
  },

  // 2024年8月文章
  {
    title: '数据库设计模式：从关系型到NoSQL 🗄️',
    url: '/posts/2024/08/database-design-patterns.html',
    date: '2024-08-30',
    category: '数据库',
    tags: ['设计模式', '关系型', 'NoSQL'],
    excerpt: '不同场景下的数据库设计模式和最佳实践，包括关系型和NoSQL数据库。'
  },
  {
    title: 'Vue3组合式API深度解析：现代前端开发新范式 ⚡',
    url: '/posts/2024/08/vue3-composition-api.html',
    date: '2024-08-15',
    category: '前端开发',
    tags: ['Vue.js', '组合式API', '前端开发'],
    excerpt: 'Vue3组合式API为前端开发带来了新的可能性，本文将深入探讨其使用技巧。'
  },

  // 2024年7月文章
  {
    title: '机器学习基础：从理论到实践 🧠',
    url: '/posts/2024/07/machine-learning-basics.html',
    date: '2024-07-28',
    category: '人工智能',
    tags: ['机器学习', '数据科学', 'AI'],
    excerpt: '机器学习的基础概念和实践应用，带你入门AI领域。'
  },
  {
    title: 'Node.js服务器性能优化：高并发处理策略 🚀',
    url: '/posts/2024/07/nodejs-server-optimization.html',
    date: '2024-07-12',
    category: '后端开发',
    tags: ['Node.js', '性能优化', '高并发'],
    excerpt: 'Node.js服务器在高并发场景下的性能优化技巧和最佳实践。'
  },

  // 2024年6月文章
  {
    title: '云原生安全实践：保护你的容器化应用 🔒',
    url: '/posts/2024/06/cloud-native-security.html',
    date: '2024-06-22',
    category: '网络安全',
    tags: ['云原生', '安全', '容器安全'],
    excerpt: '云原生环境下的安全挑战和解决方案，确保应用在生产环境中的安全性。'
  },
  {
    title: 'TypeScript最佳实践：类型安全的JavaScript开发 📘',
    url: '/posts/2024/06/typescript-best-practices.html',
    date: '2024-06-08',
    category: '前端开发',
    tags: ['TypeScript', '最佳实践', '类型安全'],
    excerpt: 'TypeScript为JavaScript带来了类型安全，本文将分享实际项目中的最佳实践。'
  },

  // 2024年5月文章
  {
    title: 'DevOps自动化流水线：CI/CD最佳实践 🔄',
    url: '/posts/2024/05/devops-automation-pipeline.html',
    date: '2024-05-20',
    category: 'DevOps',
    tags: ['自动化', 'CI/CD', '流水线'],
    excerpt: '构建完整的DevOps自动化流水线，实现代码从开发到部署的全自动化。'
  },
  {
    title: 'AI聊天机器人开发实战：从零到部署 🤖',
    url: '/posts/2024/05/ai-chatbot-development.html',
    date: '2024-05-05',
    category: '人工智能',
    tags: ['聊天机器人', '机器学习', 'AI'],
    excerpt: '基于现代AI技术开发智能聊天机器人，实现自然语言交互功能。'
  },

  // 2024年4月文章
  {
    title: '微服务架构设计：从单体到分布式的演进之路 🏗️',
    url: '/posts/2024/04/microservices-architecture.html',
    date: '2024-04-25',
    category: '后端开发',
    tags: ['微服务', '架构设计', '分布式'],
    excerpt: '微服务架构是现代应用开发的主流模式，本文将详细介绍其设计原则和实践经验。'
  },
  {
    title: 'React性能优化完全指南：从理论到实践 ⚡',
    url: '/posts/2024/04/react-performance-optimization.html',
    date: '2024-04-10',
    category: '前端开发',
    tags: ['React', '性能优化', '最佳实践'],
    excerpt: 'React应用的性能优化是前端开发中的重要课题，本文将深入探讨各种优化策略。'
  },

  // 2024年3月文章
  {
    title: 'Kubernetes集群搭建完全指南：从零开始部署生产环境 ☸️',
    url: '/posts/2024/03/kubernetes-cluster-setup.html',
    date: '2024-03-20',
    category: '云原生',
    tags: ['Kubernetes', '容器编排', '生产环境'],
    excerpt: 'Kubernetes作为容器编排的王者，已经成为云原生应用部署的标准平台。'
  },
  {
    title: 'Docker容器化完全指南：从入门到实践 🐳',
    url: '/posts/2024/03/docker-containerization-guide.html',
    date: '2024-03-15',
    category: '云原生',
    tags: ['Docker', '容器化', '最佳实践'],
    excerpt: 'Docker作为容器化技术的代表，已经成为了现代软件开发和部署的标准工具。'
  }
];

// 按日期排序（最新的在前面）
allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

// 获取分类信息
const categories = {
  '人工智能': {
    icon: 'fas fa-robot',
    description: 'AI 应用实践、机器学习、深度学习等内容',
    color: '#FF453A'
  },
  '前沿技术': {
    icon: 'fas fa-rocket',
    description: '量子计算、边缘计算、元宇宙等前沿技术',
    color: '#FF375F'
  },
  '开发工具': {
    icon: 'fas fa-tools',
    description: 'AI代码审查、自动化测试、低代码平台等工具',
    color: '#40C8E0'
  },
  '云原生': {
    icon: 'fas fa-cloud',
    description: '探索云原生技术、容器化、微服务架构等相关内容',
    color: '#30D158'
  },
  '前端开发': {
    icon: 'fas fa-code',
    description: '现代前端技术栈、框架使用、性能优化等内容',
    color: '#32D74B'
  },
  '后端开发': {
    icon: 'fas fa-server',
    description: '后端架构设计、API开发、数据库优化等内容',
    color: '#0A84FF'
  },
  '网络安全': {
    icon: 'fas fa-shield-alt',
    description: '网络安全、信息安全、最佳实践等内容',
    color: '#FF9F0A'
  },
  '区块链': {
    icon: 'fas fa-link',
    description: '区块链技术、智能合约、Web3开发等内容',
    color: '#FF6B6B'
  },
  'DevOps': {
    icon: 'fas fa-cogs',
    description: 'DevOps实践、自动化、CI/CD流水线等内容',
    color: '#BF5AF2'
  },
  '数据库': {
    icon: 'fas fa-database',
    description: '数据库设计、优化、NoSQL技术等内容',
    color: '#4ECDC4'
  },
  '版本控制': {
    icon: 'fas fa-code-branch',
    description: 'Git工作流、团队协作、版本管理等内容',
    color: '#45B7D1'
  },
  '移动开发': {
    icon: 'fas fa-mobile-alt',
    description: '移动应用开发、跨平台解决方案等内容',
    color: '#FF6B6B'
  },
  '数据可视化': {
    icon: 'fas fa-chart-bar',
    description: '数据可视化、图表库、数据分析等内容',
    color: '#FF9F0A'
  }
};

// 生成文章HTML
function generateArticleHTML(article) {
  return `
    <div class="post">
      <h3 class="post-title">
        <a href="${article.url}">${article.title}</a>
      </h3>
      <div class="post-date">${article.date}</div>
      <p class="post-excerpt">${article.excerpt}...</p>
      <div class="tags">
        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

// 生成分类文章HTML
function generateCategoryArticleHTML(article) {
  return `
    <div class="post-item">
      <div class="post-info">
        <h3><a href="${article.url}">${article.title}</a></h3>
        <div class="post-meta">
          <span class="post-date"><i class="fas fa-calendar"></i> ${article.date}</span>
          <div class="post-tags">
            ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// 初始化首页文章列表
function initHomePageArticles() {
  const articlesContainer = document.querySelector('.card:has(.post)');
  if (!articlesContainer) return;

  // 找到文章列表容器
  const postsContainer = articlesContainer.querySelector('.post').parentNode;
  if (!postsContainer) return;

  // 清空现有内容
  postsContainer.innerHTML = '';

  // 添加标题
  postsContainer.innerHTML = '<h2 class="gradient-text">最新文章 📝</h2>';

  // 生成所有文章的HTML
  allArticles.forEach(article => {
    postsContainer.innerHTML += generateArticleHTML(article);
  });
}

// 初始化分类目录
function initCategoryDirectory() {
  const container = document.querySelector('.categories-container');
  if (!container) return;

  // 创建分类目录容器
  const directoryContainer = document.createElement('div');
  directoryContainer.className = 'category-directory';
  directoryContainer.innerHTML = '<h2 class="gradient-text">文章分类目录 📂</h2>';

  // 按分类组织文章
  Object.entries(categories).forEach(([categoryName, categoryInfo]) => {
    const categoryArticles = allArticles.filter(article => article.category === categoryName);
    if (categoryArticles.length === 0) return;

    const categorySection = document.createElement('div');
    categorySection.className = 'category-section';
    categorySection.innerHTML = `
      <div class="category-header" onclick="toggleCategory('${categoryName}')">
        <i class="${categoryInfo.icon}"></i>
        <span class="category-name">${categoryName}</span>
        <span class="category-count">(${categoryArticles.length})</span>
        <i class="fas fa-chevron-down toggle-icon"></i>
      </div>
      <div class="category-articles" id="category-${categoryName}">
        ${categoryArticles.map(article => `
          <div class="category-article">
            <a href="${article.url}">${article.title}</a>
            <span class="article-date">${article.date}</span>
          </div>
        `).join('')}
      </div>
    `;

    directoryContainer.appendChild(categorySection);
  });

  // 插入到容器开头
  container.insertBefore(directoryContainer, container.firstChild);
}

// 切换分类展开/收起
function toggleCategory(categoryName) {
  const articlesContainer = document.getElementById(`category-${categoryName}`);
  const header = articlesContainer.previousElementSibling;
  const toggleIcon = header.querySelector('.toggle-icon');

  if (articlesContainer.style.display === 'none') {
    articlesContainer.style.display = 'block';
    toggleIcon.className = 'fas fa-chevron-up toggle-icon';
  } else {
    articlesContainer.style.display = 'none';
    toggleIcon.className = 'fas fa-chevron-down toggle-icon';
  }
}

// 更新网站最后更新时间
function updateLastModified() {
  const lastModifiedElement = document.querySelector('.status-value');
  if (lastModifiedElement && lastModifiedElement.textContent.includes('最后更新')) {
    const today = new Date().toISOString().split('T')[0];
    lastModifiedElement.textContent = `${today} 🕒`;
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initHomePageArticles();
  initCategoryDirectory();
  updateLastModified();
});

// 全局函数，供HTML调用
window.toggleCategory = toggleCategory;
window.allArticles = allArticles; 