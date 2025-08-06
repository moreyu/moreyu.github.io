const fs = require('fs');
const path = require('path');

// 文章数据 - 包含2024年3月到2025年8月的文章
const articles = [
  // 2025年8月文章
  {
    filename: 'ai-agent-framework-comparison.html',
    title: 'AI Agent框架对比：AutoGPT vs LangChain vs CrewAI 🤖',
    date: '2025-08-25',
    category: '人工智能',
    tags: ['AI Agent', 'AutoGPT', 'LangChain', 'CrewAI'],
    description: 'AI Agent技术正在快速发展，本文将深入对比主流的AI Agent框架，分析它们的优缺点和适用场景。'
  },
  {
    filename: 'quantum-computing-2025.html',
    title: '量子计算2025：从理论到商业应用的突破 ⚛️',
    date: '2025-08-10',
    category: '前沿技术',
    tags: ['量子计算', '量子算法', '商业应用'],
    description: '量子计算在2025年取得了重大突破，本文探讨最新的技术进展和商业应用前景。'
  },

  // 2025年7月文章
  {
    filename: 'web3-social-platforms.html',
    title: 'Web3社交平台：去中心化社交网络的未来 🌐',
    date: '2025-07-28',
    category: '区块链',
    tags: ['Web3', '社交网络', '去中心化'],
    description: 'Web3技术正在重塑社交网络，本文分析去中心化社交平台的发展趋势和技术架构。'
  },
  {
    filename: 'edge-computing-ai.html',
    title: '边缘计算与AI：智能设备的未来计算模式 📱',
    date: '2025-07-15',
    category: '前沿技术',
    tags: ['边缘计算', 'AI推理', '智能设备'],
    description: '边缘计算与AI的结合正在改变智能设备的计算模式，本文探讨技术架构和应用场景。'
  },

  // 2025年6月文章
  {
    filename: 'ai-code-review-tools.html',
    title: 'AI代码审查工具：提升代码质量的智能助手 🔍',
    date: '2025-06-30',
    category: '开发工具',
    tags: ['代码审查', 'AI工具', '代码质量'],
    description: 'AI驱动的代码审查工具正在改变开发流程，本文介绍主流工具和最佳实践。'
  },
  {
    filename: 'metaverse-development.html',
    title: '元宇宙开发指南：构建虚拟世界的技术栈 🌍',
    date: '2025-06-15',
    category: '前沿技术',
    tags: ['元宇宙', 'VR/AR', '3D开发'],
    description: '元宇宙开发需要综合多种技术，本文详细介绍技术栈和开发流程。'
  },

  // 2025年5月文章
  {
    filename: 'ai-powered-testing.html',
    title: 'AI驱动的自动化测试：智能测试的未来 🧪',
    date: '2025-05-25',
    category: '开发工具',
    tags: ['自动化测试', 'AI测试', '质量保证'],
    description: 'AI技术正在革新软件测试领域，本文探讨智能测试工具和方法论。'
  },
  {
    filename: 'green-computing-2025.html',
    title: '绿色计算2025：可持续发展的技术趋势 🌱',
    date: '2025-05-10',
    category: '前沿技术',
    tags: ['绿色计算', '可持续发展', '节能技术'],
    description: '绿色计算成为2025年的重要趋势，本文分析节能技术和可持续发展策略。'
  },

  // 2025年4月文章
  {
    filename: 'ai-cybersecurity.html',
    title: 'AI网络安全：智能威胁检测与防护 🛡️',
    date: '2025-04-20',
    category: '网络安全',
    tags: ['AI安全', '威胁检测', '智能防护'],
    description: 'AI技术在网络安全领域的应用正在快速发展，本文探讨智能威胁检测和防护技术。'
  },
  {
    filename: 'low-code-platforms.html',
    title: '低代码平台2025：企业数字化转型的加速器 ⚡',
    date: '2025-04-05',
    category: '开发工具',
    tags: ['低代码', '数字化转型', '企业应用'],
    description: '低代码平台正在加速企业数字化转型，本文分析主流平台和成功案例。'
  },

  // 2025年3月文章
  {
    filename: 'ai-ethics-2025.html',
    title: 'AI伦理2025：负责任的人工智能发展 🤝',
    date: '2025-03-25',
    category: '人工智能',
    tags: ['AI伦理', '负责任AI', '技术治理'],
    description: 'AI伦理成为2025年的重要议题，本文探讨负责任AI的发展原则和实践。'
  },
  {
    filename: 'digital-twins-technology.html',
    title: '数字孪生技术：物理世界的数字镜像 🔄',
    date: '2025-03-10',
    category: '前沿技术',
    tags: ['数字孪生', 'IoT', '实时监控'],
    description: '数字孪生技术正在改变工业和服务业，本文详细介绍技术架构和应用场景。'
  },

  // 2024年12月文章
  {
    filename: 'data-visualization-guide.html',
    title: '数据可视化指南：让数据讲述故事 📊',
    date: '2024-12-25',
    category: '数据可视化',
    tags: ['数据可视化', '前端开发', '数据分析'],
    description: '数据可视化的技术和工具，将复杂数据转化为直观的图表和故事。'
  },
  {
    filename: 'serverless-architecture.html',
    title: '无服务器架构：云原生应用的新范式 ☁️',
    date: '2024-12-10',
    category: '云原生',
    tags: ['无服务器', '函数计算', '云原生'],
    description: '无服务器架构的优势和应用场景，实现真正的按需付费。'
  },

  // 2024年11月文章
  {
    filename: 'mobile-app-development.html',
    title: '移动应用开发：跨平台解决方案对比 📱',
    date: '2024-11-20',
    category: '移动开发',
    tags: ['跨平台', 'React Native', '移动应用'],
    description: '现代移动应用开发的跨平台解决方案，包括React Native、Flutter等。'
  },
  {
    filename: 'blockchain-development.html',
    title: '区块链开发入门：从概念到智能合约 ⛓️',
    date: '2024-11-05',
    category: '区块链',
    tags: ['智能合约', 'Web3', '区块链'],
    description: '区块链技术的基础知识和智能合约开发，探索Web3的未来。'
  },

  // 2024年10月文章
  {
    filename: 'frontend-testing-strategies.html',
    title: '前端测试策略：确保代码质量的完整方案 🧪',
    date: '2024-10-22',
    category: '前端开发',
    tags: ['测试', '质量保证', '前端开发'],
    description: '前端应用的测试策略和工具，确保代码质量和用户体验。'
  },
  {
    filename: 'cybersecurity-basics.html',
    title: '网络安全基础：保护你的数字资产 🛡️',
    date: '2024-10-08',
    category: '网络安全',
    tags: ['网络安全', '信息安全', '最佳实践'],
    description: '网络安全的基础知识和防护策略，保护个人和企业的数字资产。'
  },

  // 2024年9月文章
  {
    filename: 'api-design-principles.html',
    title: 'API设计原则：构建优秀的RESTful API 🔌',
    date: '2024-09-25',
    category: '后端开发',
    tags: ['API设计', 'RESTful', '最佳实践'],
    description: '设计优秀API的原则和最佳实践，提升API的可用性和可维护性。'
  },
  {
    filename: 'git-workflow-strategies.html',
    title: 'Git工作流策略：团队协作的最佳实践 🌿',
    date: '2024-09-10',
    category: '版本控制',
    tags: ['Git', '团队协作', '工作流'],
    description: '高效的Git工作流策略，提升团队开发效率和代码质量。'
  },

  // 2024年8月文章
  {
    filename: 'database-design-patterns.html',
    title: '数据库设计模式：从关系型到NoSQL 🗄️',
    date: '2024-08-30',
    category: '数据库',
    tags: ['设计模式', '关系型', 'NoSQL'],
    description: '不同场景下的数据库设计模式和最佳实践，包括关系型和NoSQL数据库。'
  },
  {
    filename: 'vue3-composition-api.html',
    title: 'Vue3组合式API深度解析：现代前端开发新范式 ⚡',
    date: '2024-08-15',
    category: '前端开发',
    tags: ['Vue.js', '组合式API', '前端开发'],
    description: 'Vue3组合式API为前端开发带来了新的可能性，本文将深入探讨其使用技巧。'
  },

  // 2024年7月文章
  {
    filename: 'machine-learning-basics.html',
    title: '机器学习基础：从理论到实践 🧠',
    date: '2024-07-28',
    category: '人工智能',
    tags: ['机器学习', '数据科学', 'AI'],
    description: '机器学习的基础概念和实践应用，带你入门AI领域。'
  },
  {
    filename: 'nodejs-server-optimization.html',
    title: 'Node.js服务器性能优化：高并发处理策略 🚀',
    date: '2024-07-12',
    category: '后端开发',
    tags: ['Node.js', '性能优化', '高并发'],
    description: 'Node.js服务器在高并发场景下的性能优化技巧和最佳实践。'
  },

  // 2024年6月文章
  {
    filename: 'cloud-native-security.html',
    title: '云原生安全实践：保护你的容器化应用 🔒',
    date: '2024-06-22',
    category: '网络安全',
    tags: ['云原生', '安全', '容器安全'],
    description: '云原生环境下的安全挑战和解决方案，确保应用在生产环境中的安全性。'
  },
  {
    filename: 'typescript-best-practices.html',
    title: 'TypeScript最佳实践：类型安全的JavaScript开发 📘',
    date: '2024-06-08',
    category: '前端开发',
    tags: ['TypeScript', '最佳实践', '类型安全'],
    description: 'TypeScript为JavaScript带来了类型安全，本文将分享实际项目中的最佳实践。'
  },

  // 2024年5月文章
  {
    filename: 'devops-automation-pipeline.html',
    title: 'DevOps自动化流水线：CI/CD最佳实践 🔄',
    date: '2024-05-20',
    category: 'DevOps',
    tags: ['自动化', 'CI/CD', '流水线'],
    description: '构建完整的DevOps自动化流水线，实现代码从开发到部署的全自动化。'
  },
  {
    filename: 'ai-chatbot-development.html',
    title: 'AI聊天机器人开发实战：从零到部署 🤖',
    date: '2024-05-05',
    category: '人工智能',
    tags: ['聊天机器人', '机器学习', 'AI'],
    description: '基于现代AI技术开发智能聊天机器人，实现自然语言交互功能。'
  },

  // 2024年4月文章
  {
    filename: 'microservices-architecture.html',
    title: '微服务架构设计：从单体到分布式的演进之路 🏗️',
    date: '2024-04-25',
    category: '后端开发',
    tags: ['微服务', '架构设计', '分布式'],
    description: '微服务架构是现代应用开发的主流模式，本文将详细介绍其设计原则和实践经验。'
  },
  {
    filename: 'react-performance-optimization.html',
    title: 'React性能优化完全指南：从理论到实践 ⚡',
    date: '2024-04-10',
    category: '前端开发',
    tags: ['React', '性能优化', '最佳实践'],
    excerpt: 'React应用的性能优化是前端开发中的重要课题，本文将深入探讨各种优化策略。'
  },

  // 2024年3月文章
  {
    filename: 'kubernetes-cluster-setup.html',
    title: 'Kubernetes集群搭建完全指南：从零开始部署生产环境 ☸️',
    date: '2024-03-20',
    category: '云原生',
    tags: ['Kubernetes', '容器编排', '生产环境'],
    description: 'Kubernetes作为容器编排的王者，已经成为云原生应用部署的标准平台。'
  },
  {
    filename: 'docker-containerization-guide.html',
    title: 'Docker容器化完全指南：从入门到实践 🐳',
    date: '2024-03-15',
    category: '云原生',
    tags: ['Docker', '容器化', '最佳实践'],
    description: 'Docker作为容器化技术的代表，已经成为了现代软件开发和部署的标准工具。'
  }
];

// 文章内容模板
const articleTemplate = `<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{TITLE}} - Moreyu's Blog</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/maple-mono@latest/index.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.8/dist/medium-zoom.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.8/dist/medium-zoom.min.js"></script>
  <style>
    /* 基础样式 */
    body {
      font-family: "Maple Mono", monospace;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f7;
      color: #333;
    }

    pre {
      background: #1e1e1e;
      padding: 15px;
      border-radius: 8px;
      overflow-x: auto;
    }

    code {
      font-family: "Maple Mono", monospace;
    }

    h1, h2, h3 {
      color: #FF375F;
    }

    a {
      color: #0066cc;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .meta {
      color: #666;
      font-size: .9em;
      margin-bottom: 30px;
    }

    /* 返回首页按钮 */
    .back-to-home {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(255, 55, 95, .9);
      color: #fff;
      padding: 10px 20px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
      transition: all .3s ease;
      z-index: 1000;
    }

    .back-to-home:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, .2);
      text-decoration: none;
    }

    /* 深色模式适配 */
    @media (prefers-color-scheme: dark) {
      body {
        background: #000;
        color: #f5f5f7;
      }

      a {
        color: #2997ff;
      }
    }
  </style>
</head>
<body>
  <main>
    <h1>{{TITLE}}</h1>
    <div class="meta">
      发布时间：{{DATE}} | 分类：{{CATEGORY}} | 标签：{{TAGS}}
    </div>
    
    <p>{{DESCRIPTION}}本文将详细介绍相关技术概念、实践经验和最佳实践。</p>

    <h2>技术背景</h2>
    <p>在当今快速发展的技术环境中，{{CATEGORY}}领域正在经历前所未有的变革。随着新技术的不断涌现，开发者需要不断学习和适应新的技术栈和最佳实践。</p>

    <h2>核心概念</h2>
    <p>理解{{CATEGORY}}的核心概念对于掌握相关技术至关重要。这些概念构成了技术体系的基础，为后续的深入学习和实践提供了理论支撑。</p>

    <h2>实践应用</h2>
    <p>理论结合实践是学习技术的最佳方式。通过实际的项目案例，我们可以更好地理解技术的应用场景和实现方法。</p>

    <h2>最佳实践</h2>
    <p>在{{CATEGORY}}领域，遵循最佳实践可以避免常见的陷阱，提高开发效率和代码质量。这些实践来自于大量的项目经验和行业标准。</p>

    <h2>未来展望</h2>
    <p>随着技术的不断发展，{{CATEGORY}}领域将继续演进。了解未来的发展趋势有助于我们做出更好的技术决策和职业规划。</p>

    <h2>总结</h2>
    <p>{{DESCRIPTION}}通过本文的学习，读者应该对相关技术有了更深入的理解，并能够在实际项目中应用这些知识。</p>

    <a href="/" class="back-to-home">返回首页 🏠</a>
  </main>

  <script>
    // 代码高亮
    hljs.highlightAll();
    
    // 图片缩放
    mediumZoom('[data-zoomable]', {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.9)'
    });
  </script>
</body>
</html>`;

// 生成文章
articles.forEach(article => {
  const month = article.date.substring(5, 7);
  const year = article.date.substring(0, 4);
  const outputDir = path.join(__dirname, `../posts/${year}/${month}`);
  const outputPath = path.join(outputDir, article.filename);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let content = articleTemplate
    .replace(/{{TITLE}}/g, article.title)
    .replace(/{{DATE}}/g, article.date)
    .replace(/{{CATEGORY}}/g, article.category)
    .replace(/{{TAGS}}/g, article.tags.join(', '))
    .replace(/{{DESCRIPTION}}/g, article.description);

  fs.writeFileSync(outputPath, content);
  console.log(`✅ 生成文章: ${outputPath}`);
});

console.log(`\n🎉 成功生成 ${articles.length} 篇文章！`); 