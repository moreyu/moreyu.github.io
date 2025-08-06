const fs = require('fs');
const path = require('path');

// 文章配置
const articles = [
  // 3月份文章
  {
    filename: 'docker-containerization-guide.html',
    title: '🐳 Docker容器化完全指南：从入门到实践',
    date: '2024-03-15',
    category: '云原生, Docker, 容器化',
    description: 'Docker作为容器化技术的代表，已经成为了现代软件开发和部署的标准工具。'
  },
  {
    filename: 'kubernetes-cluster-setup.html',
    title: '☸️ Kubernetes集群搭建完全指南：从零开始部署生产环境',
    date: '2024-03-20',
    category: '云原生, Kubernetes, 容器编排',
    description: 'Kubernetes作为容器编排的王者，已经成为云原生应用部署的标准平台。'
  },
  
  // 4月份文章
  {
    filename: 'react-performance-optimization.html',
    title: '⚡ React性能优化完全指南：从理论到实践',
    date: '2024-04-10',
    category: '前端开发, React, 性能优化',
    description: 'React应用的性能优化是前端开发中的重要课题，本文将深入探讨各种优化策略。'
  },
  {
    filename: 'microservices-architecture.html',
    title: '🏗️ 微服务架构设计：从单体到分布式的演进之路',
    date: '2024-04-25',
    category: '后端开发, 微服务, 架构设计',
    description: '微服务架构是现代应用开发的主流模式，本文将详细介绍其设计原则和实践经验。'
  },
  
  // 5月份文章
  {
    filename: 'ai-chatbot-development.html',
    title: '🤖 AI聊天机器人开发实战：从零到部署',
    date: '2024-05-05',
    category: '人工智能, 聊天机器人, 机器学习',
    description: '基于现代AI技术开发智能聊天机器人，实现自然语言交互功能。'
  },
  {
    filename: 'devops-automation-pipeline.html',
    title: '🔄 DevOps自动化流水线：CI/CD最佳实践',
    date: '2024-05-20',
    category: 'DevOps, 自动化, CI/CD',
    description: '构建完整的DevOps自动化流水线，实现代码从开发到部署的全自动化。'
  },
  
  // 6月份文章
  {
    filename: 'typescript-best-practices.html',
    title: '📘 TypeScript最佳实践：类型安全的JavaScript开发',
    date: '2024-06-08',
    category: '前端开发, TypeScript, 最佳实践',
    description: 'TypeScript为JavaScript带来了类型安全，本文将分享实际项目中的最佳实践。'
  },
  {
    filename: 'cloud-native-security.html',
    title: '🔒 云原生安全实践：保护你的容器化应用',
    date: '2024-06-22',
    category: '云原生, 安全, 容器安全',
    description: '云原生环境下的安全挑战和解决方案，确保应用在生产环境中的安全性。'
  },
  
  // 7月份文章
  {
    filename: 'nodejs-server-optimization.html',
    title: '🚀 Node.js服务器性能优化：高并发处理策略',
    date: '2024-07-12',
    category: '后端开发, Node.js, 性能优化',
    description: 'Node.js服务器在高并发场景下的性能优化技巧和最佳实践。'
  },
  {
    filename: 'machine-learning-basics.html',
    title: '🧠 机器学习基础：从理论到实践',
    date: '2024-07-28',
    category: '人工智能, 机器学习, 数据科学',
    description: '机器学习的基础概念和实践应用，带你入门AI领域。'
  },
  
  // 8月份文章
  {
    filename: 'vue3-composition-api.html',
    title: '⚡ Vue3组合式API深度解析：现代前端开发新范式',
    date: '2024-08-15',
    category: '前端开发, Vue.js, 组合式API',
    description: 'Vue3组合式API为前端开发带来了新的可能性，本文将深入探讨其使用技巧。'
  },
  {
    filename: 'database-design-patterns.html',
    title: '🗄️ 数据库设计模式：从关系型到NoSQL',
    date: '2024-08-30',
    category: '数据库, 设计模式, 架构设计',
    description: '不同场景下的数据库设计模式和最佳实践，包括关系型和NoSQL数据库。'
  },
  
  // 9月份文章
  {
    filename: 'git-workflow-strategies.html',
    title: '🌿 Git工作流策略：团队协作的最佳实践',
    date: '2024-09-10',
    category: '版本控制, Git, 团队协作',
    description: '高效的Git工作流策略，提升团队开发效率和代码质量。'
  },
  {
    filename: 'api-design-principles.html',
    title: '🔌 API设计原则：构建优秀的RESTful API',
    date: '2024-09-25',
    category: '后端开发, API设计, RESTful',
    description: '设计优秀API的原则和最佳实践，提升API的可用性和可维护性。'
  },
  
  // 10月份文章
  {
    filename: 'cybersecurity-basics.html',
    title: '🛡️ 网络安全基础：保护你的数字资产',
    date: '2024-10-08',
    category: '网络安全, 信息安全, 最佳实践',
    description: '网络安全的基础知识和防护策略，保护个人和企业的数字资产。'
  },
  {
    filename: 'frontend-testing-strategies.html',
    title: '🧪 前端测试策略：确保代码质量的完整方案',
    date: '2024-10-22',
    category: '前端开发, 测试, 质量保证',
    description: '前端应用的测试策略和工具，确保代码质量和用户体验。'
  },
  
  // 11月份文章
  {
    filename: 'blockchain-development.html',
    title: '⛓️ 区块链开发入门：从概念到智能合约',
    date: '2024-11-05',
    category: '区块链, 智能合约, Web3',
    description: '区块链技术的基础知识和智能合约开发，探索Web3的未来。'
  },
  {
    filename: 'mobile-app-development.html',
    title: '📱 移动应用开发：跨平台解决方案对比',
    date: '2024-11-20',
    category: '移动开发, 跨平台, React Native',
    description: '现代移动应用开发的跨平台解决方案，包括React Native、Flutter等。'
  },
  
  // 12月份文章
  {
    filename: 'serverless-architecture.html',
    title: '☁️ 无服务器架构：云原生应用的新范式',
    date: '2024-12-10',
    category: '云原生, 无服务器, 函数计算',
    description: '无服务器架构的优势和应用场景，实现真正的按需付费。'
  },
  {
    filename: 'data-visualization-guide.html',
    title: '📊 数据可视化指南：让数据讲述故事',
    date: '2024-12-25',
    category: '数据可视化, 前端开发, 数据分析',
    description: '数据可视化的技术和工具，将复杂数据转化为直观的图表和故事。'
  }
];

// 读取模板文件
const templatePath = path.join(__dirname, '../posts/2025/03/home-server-part1.html');
const template = fs.readFileSync(templatePath, 'utf8');

// 生成文章
articles.forEach(article => {
  const month = article.date.substring(5, 7);
  const year = article.date.substring(0, 4);
  const outputDir = path.join(__dirname, `../posts/${year}/${month}`);
  const outputPath = path.join(outputDir, article.filename);
  
  // 创建目录
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 替换模板内容
  let content = template
    .replace(/<title>.*?<\/title>/, `<title>${article.title} - Moreyu's Blog</title>`)
    .replace(/<h1>.*?<\/h1>/, `<h1>${article.title}</h1>`)
    .replace(/发布时间：.*?\|/, `发布时间：${article.date} |`)
    .replace(/分类：.*?<\/div>/, `分类：${article.category}</div>`)
    .replace(/<p>.*?<\/p>/, `<p>${article.description}本文将详细介绍相关技术概念、实践经验和最佳实践。</p>`);
  
  // 写入文件
  fs.writeFileSync(outputPath, content);
  console.log(`✅ 生成文章: ${outputPath}`);
});

console.log(`\n🎉 成功生成 ${articles.length} 篇文章！`); 