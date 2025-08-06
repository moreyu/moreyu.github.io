// 动态分类系统
const categories = {
  '云原生': {
    icon: 'fas fa-cloud',
    description: '探索云原生技术、容器化、微服务架构等相关内容',
    tags: ['Docker', 'Kubernetes', '微服务', '容器化'],
    color: '#FF375F'
  },
  '前端开发': {
    icon: 'fas fa-code',
    description: '现代前端技术栈、框架使用、性能优化等内容',
    tags: ['React', 'Vue.js', 'TypeScript', 'JavaScript'],
    color: '#40C8E0'
  },
  '后端开发': {
    icon: 'fas fa-server',
    description: '后端架构设计、API开发、数据库优化等内容',
    tags: ['Node.js', 'API设计', '数据库', '微服务'],
    color: '#30D158'
  },
  '人工智能': {
    icon: 'fas fa-robot',
    description: 'AI 应用实践、机器学习、深度学习等内容',
    tags: ['机器学习', '深度学习', '聊天机器人', '数据科学'],
    color: '#FF453A'
  },
  'DevOps': {
    icon: 'fas fa-cogs',
    description: 'DevOps实践、自动化、CI/CD流水线等内容',
    tags: ['自动化', 'CI/CD', '部署', '监控'],
    color: '#32D74B'
  },
  '数据库': {
    icon: 'fas fa-database',
    description: '数据库设计、优化、NoSQL技术等内容',
    tags: ['设计模式', '关系型', 'NoSQL', '优化'],
    color: '#0A84FF'
  },
  '网络安全': {
    icon: 'fas fa-shield-alt',
    description: '网络安全、信息安全、最佳实践等内容',
    tags: ['安全', '防护', '最佳实践', '容器安全'],
    color: '#FF9F0A'
  },
  '版本控制': {
    icon: 'fas fa-code-branch',
    description: 'Git工作流、团队协作、版本管理等内容',
    tags: ['Git', '团队协作', '工作流', '最佳实践'],
    color: '#BF5AF2'
  },
  '区块链': {
    icon: 'fas fa-link',
    description: '区块链技术、智能合约、Web3开发等内容',
    tags: ['智能合约', 'Web3', '去中心化', '加密货币'],
    color: '#FF6B6B'
  },
  '移动开发': {
    icon: 'fas fa-mobile-alt',
    description: '移动应用开发、跨平台解决方案等内容',
    tags: ['跨平台', 'React Native', 'Flutter', '移动应用'],
    color: '#4ECDC4'
  },
  '数据可视化': {
    icon: 'fas fa-chart-bar',
    description: '数据可视化、图表库、数据分析等内容',
    tags: ['图表', '数据分析', '可视化', '前端开发'],
    color: '#45B7D1'
  }
};

// 文章数据
const articles = [
  // 现有文章
  {
    title: '家用伺服器折腾手记-1：Mac mini 搭建青龙面板教程',
    url: '/posts/2025/03/home-server-part1.html',
    date: '2025-03-07',
    category: '云原生',
    tags: ['服务器', 'Docker', '自动化']
  },
  {
    title: '家用伺服器折腾手记-2：Docker环境搭建与配置',
    url: '/posts/2025/03/home-server-part2.html',
    date: '2025-03-08',
    category: '云原生',
    tags: ['Docker', '容器化', '配置']
  },
  {
    title: '家用伺服器折腾手记-3：AI助手系统搭建',
    url: '/posts/2025/03/home-server-part3.html',
    date: '2025-03-09',
    category: '人工智能',
    tags: ['AI', 'Docker', 'Python']
  },
  {
    title: '家用伺服器折腾手记-4：媒体服务器配置',
    url: '/posts/2025/03/home-server-part4.html',
    date: '2025-03-10',
    category: '云原生',
    tags: ['媒体服务器', 'Docker', '配置']
  },
  {
    title: '家用伺服器折腾手记-5：网络配置与安全',
    url: '/posts/2025/03/home-server-part5.html',
    date: '2025-03-11',
    category: '网络安全',
    tags: ['网络安全', '配置', '安全']
  },
  {
    title: '家用伺服器折腾手记-6：监控与维护',
    url: '/posts/2025/03/home-server-part6.html',
    date: '2025-03-12',
    category: 'DevOps',
    tags: ['监控', '维护', '自动化']
  },
  
  // 新生成的文章
  {
    title: 'Docker容器化完全指南：从入门到实践',
    url: '/posts/2024/03/docker-containerization-guide.html',
    date: '2024-03-15',
    category: '云原生',
    tags: ['Docker', '容器化', '最佳实践']
  },
  {
    title: 'Kubernetes集群搭建完全指南：从零开始部署生产环境',
    url: '/posts/2024/03/kubernetes-cluster-setup.html',
    date: '2024-03-20',
    category: '云原生',
    tags: ['Kubernetes', '容器编排', '生产环境']
  },
  {
    title: 'React性能优化完全指南：从理论到实践',
    url: '/posts/2024/04/react-performance-optimization.html',
    date: '2024-04-10',
    category: '前端开发',
    tags: ['React', '性能优化', '最佳实践']
  },
  {
    title: '微服务架构设计：从单体到分布式的演进之路',
    url: '/posts/2024/04/microservices-architecture.html',
    date: '2024-04-25',
    category: '后端开发',
    tags: ['微服务', '架构设计', '分布式']
  },
  {
    title: 'AI聊天机器人开发实战：从零到部署',
    url: '/posts/2024/05/ai-chatbot-development.html',
    date: '2024-05-05',
    category: '人工智能',
    tags: ['聊天机器人', '机器学习', 'AI']
  },
  {
    title: 'DevOps自动化流水线：CI/CD最佳实践',
    url: '/posts/2024/05/devops-automation-pipeline.html',
    date: '2024-05-20',
    category: 'DevOps',
    tags: ['自动化', 'CI/CD', '流水线']
  },
  {
    title: 'TypeScript最佳实践：类型安全的JavaScript开发',
    url: '/posts/2024/06/typescript-best-practices.html',
    date: '2024-06-08',
    category: '前端开发',
    tags: ['TypeScript', '最佳实践', '类型安全']
  },
  {
    title: '云原生安全实践：保护你的容器化应用',
    url: '/posts/2024/06/cloud-native-security.html',
    date: '2024-06-22',
    category: '网络安全',
    tags: ['云原生', '安全', '容器安全']
  },
  {
    title: 'Node.js服务器性能优化：高并发处理策略',
    url: '/posts/2024/07/nodejs-server-optimization.html',
    date: '2024-07-12',
    category: '后端开发',
    tags: ['Node.js', '性能优化', '高并发']
  },
  {
    title: '机器学习基础：从理论到实践',
    url: '/posts/2024/07/machine-learning-basics.html',
    date: '2024-07-28',
    category: '人工智能',
    tags: ['机器学习', '数据科学', 'AI']
  },
  {
    title: 'Vue3组合式API深度解析：现代前端开发新范式',
    url: '/posts/2024/08/vue3-composition-api.html',
    date: '2024-08-15',
    category: '前端开发',
    tags: ['Vue.js', '组合式API', '前端开发']
  },
  {
    title: '数据库设计模式：从关系型到NoSQL',
    url: '/posts/2024/08/database-design-patterns.html',
    date: '2024-08-30',
    category: '数据库',
    tags: ['设计模式', '关系型', 'NoSQL']
  },
  {
    title: 'Git工作流策略：团队协作的最佳实践',
    url: '/posts/2024/09/git-workflow-strategies.html',
    date: '2024-09-10',
    category: '版本控制',
    tags: ['Git', '团队协作', '工作流']
  },
  {
    title: 'API设计原则：构建优秀的RESTful API',
    url: '/posts/2024/09/api-design-principles.html',
    date: '2024-09-25',
    category: '后端开发',
    tags: ['API设计', 'RESTful', '最佳实践']
  },
  {
    title: '网络安全基础：保护你的数字资产',
    url: '/posts/2024/10/cybersecurity-basics.html',
    date: '2024-10-08',
    category: '网络安全',
    tags: ['网络安全', '信息安全', '最佳实践']
  },
  {
    title: '前端测试策略：确保代码质量的完整方案',
    url: '/posts/2024/10/frontend-testing-strategies.html',
    date: '2024-10-22',
    category: '前端开发',
    tags: ['测试', '质量保证', '前端开发']
  },
  {
    title: '区块链开发入门：从概念到智能合约',
    url: '/posts/2024/11/blockchain-development.html',
    date: '2024-11-05',
    category: '区块链',
    tags: ['智能合约', 'Web3', '区块链']
  },
  {
    title: '移动应用开发：跨平台解决方案对比',
    url: '/posts/2024/11/mobile-app-development.html',
    date: '2024-11-20',
    category: '移动开发',
    tags: ['跨平台', 'React Native', '移动应用']
  },
  {
    title: '无服务器架构：云原生应用的新范式',
    url: '/posts/2024/12/serverless-architecture.html',
    date: '2024-12-10',
    category: '云原生',
    tags: ['无服务器', '函数计算', '云原生']
  },
  {
    title: '数据可视化指南：让数据讲述故事',
    url: '/posts/2024/12/data-visualization-guide.html',
    date: '2024-12-25',
    category: '数据可视化',
    tags: ['数据可视化', '前端开发', '数据分析']
  }
];

// 初始化分类页面
function initCategories() {
  const container = document.querySelector('.category-overview');
  if (!container) return;

  // 清空现有内容
  container.innerHTML = '';

  // 生成分类卡片
  Object.entries(categories).forEach(([categoryName, categoryInfo]) => {
    const categoryArticles = articles.filter(article => article.category === categoryName);
    
    const card = document.createElement('div');
    card.className = 'category-card';
    card.onclick = () => showCategoryPosts(categoryName);
    
    card.innerHTML = `
      <i class="${categoryInfo.icon} category-icon"></i>
      <div class="category-name">${categoryName}</div>
      <div class="category-count">${categoryArticles.length} 篇文章</div>
      <div class="category-description">${categoryInfo.description}</div>
      <div class="category-tags">
        ${categoryInfo.tags.map(tag => `<span class="category-tag">${tag}</span>`).join('')}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// 显示分类下的文章
function showCategoryPosts(categoryName) {
  const categoryArticles = articles.filter(article => article.category === categoryName);
  const categoryInfo = categories[categoryName];
  
  // 创建文章列表容器
  const postsContainer = document.createElement('div');
  postsContainer.className = 'category-posts';
  postsContainer.innerHTML = `
    <div class="category-header">
      <h2><i class="${categoryInfo.icon}"></i> ${categoryName}</h2>
      <p>${categoryInfo.description}</p>
      <button class="back-to-categories" onclick="backToCategories()">
        <i class="fas fa-arrow-left"></i> 返回分类
      </button>
    </div>
    <div class="posts-list">
      ${categoryArticles.map(article => `
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
      `).join('')}
    </div>
  `;
  
  // 替换页面内容
  const container = document.querySelector('.categories-container');
  container.innerHTML = '';
  container.appendChild(postsContainer);
}

// 返回分类列表
function backToCategories() {
  location.reload();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initCategories); 