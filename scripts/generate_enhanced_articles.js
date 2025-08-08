const fs = require('fs');
const path = require('path');
const { getEnhancedArticleContent } = require('./enhanced-content-templates');
const MultimediaGenerator = require('./multimedia-generator');

// 文章数据 - 包含所有32篇文章的元数据
const articles = [
  // 原始6篇文章
  {
    title: '我的第一篇博客文章',
    filename: 'my-first-post.html',
    date: '2024-01-15',
    category: '博客',
    tags: '博客, 技术',
    description: '这是我的第一篇博客文章，记录了我的技术学习历程。'
  },
  {
    title: 'AI代码生成技术深度解析',
    filename: '2024/02/ai-code-generation.html',
    date: '2024-02-20',
    category: '人工智能',
    tags: 'AI, 代码生成, 机器学习',
    description: '深入探讨AI代码生成技术的发展现状和未来趋势。'
  },
  {
    title: 'Kubernetes资源管理最佳实践',
    filename: '2024/03/kubernetes-resource-management.html',
    date: '2024-03-10',
    category: '云计算',
    tags: 'Kubernetes, 容器, 云原生',
    description: '详细介绍Kubernetes资源管理的核心概念和最佳实践。'
  },
  {
    title: 'Next.js现代Web开发指南',
    filename: '2024/03/nextjs-modern-web.html',
    date: '2024-03-25',
    category: '前端开发',
    tags: 'Next.js, React, 前端',
    description: '使用Next.js构建现代Web应用的完整指南。'
  },
  {
    title: '家用服务器搭建指南 - 第一部分：硬件选择',
    filename: '2025/03/home-server-part1.html',
    date: '2025-03-15',
    category: '硬件',
    tags: '服务器, 硬件, DIY',
    description: '详细的家用服务器硬件选择和配置指南。'
  },
  {
    title: '家用服务器搭建指南 - 第二部分：系统安装',
    filename: '2025/03/home-server-part2.html',
    date: '2025-03-20',
    category: '硬件',
    tags: '服务器, 系统, 安装',
    description: '家用服务器系统安装和基础配置教程。'
  },
  {
    title: '家用服务器搭建指南 - 第三部分：网络配置',
    filename: '2025/03/home-server-part3.html',
    date: '2025-03-25',
    category: '硬件',
    tags: '服务器, 网络, 配置',
    description: '家用服务器网络配置和安全设置。'
  },
  {
    title: '家用服务器搭建指南 - 第四部分：服务部署',
    filename: '2025/03/home-server-part4.html',
    date: '2025-03-30',
    category: '硬件',
    tags: '服务器, 部署, 服务',
    description: '在家用服务器上部署各种服务的详细指南。'
  },
  {
    title: '家用服务器搭建指南 - 第五部分：监控维护',
    filename: '2025/03/home-server-part5.html',
    date: '2025-04-05',
    category: '硬件',
    tags: '服务器, 监控, 维护',
    description: '家用服务器的监控系统和日常维护指南。'
  },
  {
    title: '家用服务器搭建指南 - 第六部分：高级功能',
    filename: '2025/03/home-server-part6.html',
    date: '2025-04-10',
    category: '硬件',
    tags: '服务器, 高级功能, 优化',
    description: '家用服务器的高级功能和性能优化技巧。'
  },
  
  // 新增文章 - 2024年3月到12月，每月2篇
  {
    title: 'Docker容器化最佳实践',
    filename: '2024/03/docker-containerization-guide.html',
    date: '2024-03-15',
    category: '开发工具',
    tags: 'Docker, 容器, 部署',
    description: 'Docker容器化的完整指南和最佳实践。'
  },
  {
    title: '微服务架构设计模式',
    filename: '2024/03/microservices-architecture.html',
    date: '2024-03-30',
    category: '架构设计',
    tags: '微服务, 架构, 设计模式',
    description: '微服务架构的设计模式和实现策略。'
  },
  {
    title: 'React性能优化技巧',
    filename: '2024/04/react-performance-optimization.html',
    date: '2024-04-15',
    category: '前端开发',
    tags: 'React, 性能优化, 前端',
    description: 'React应用性能优化的实用技巧和工具。'
  },
  {
    title: 'Node.js后端开发实战',
    filename: '2024/04/nodejs-backend-development.html',
    date: '2024-04-30',
    category: '后端开发',
    tags: 'Node.js, 后端, API',
    description: '使用Node.js构建高性能后端服务的实战指南。'
  },
  {
    title: 'Python数据科学入门',
    filename: '2024/05/python-data-science.html',
    date: '2024-05-15',
    category: '数据科学',
    tags: 'Python, 数据科学, 机器学习',
    description: 'Python数据科学的基础知识和实践应用。'
  },
  {
    title: 'Git版本控制最佳实践',
    filename: '2024/05/git-version-control.html',
    date: '2024-05-30',
    category: '开发工具',
    tags: 'Git, 版本控制, 协作',
    description: 'Git版本控制的工作流程和最佳实践。'
  },
  {
    title: '数据库设计原则',
    filename: '2024/06/database-design-principles.html',
    date: '2024-06-15',
    category: '数据库',
    tags: '数据库, 设计, SQL',
    description: '数据库设计的核心原则和优化策略。'
  },
  {
    title: 'API设计规范',
    filename: '2024/06/api-design-standards.html',
    date: '2024-06-30',
    category: '后端开发',
    tags: 'API, 设计, REST',
    description: 'RESTful API设计的最佳实践和规范。'
  },
  {
    title: '前端安全防护指南',
    filename: '2024/07/frontend-security-guide.html',
    date: '2024-07-15',
    category: '安全',
    tags: '前端安全, XSS, CSRF',
    description: '前端应用安全防护的完整指南。'
  },
  {
    title: '移动端开发技术选型',
    filename: '2024/07/mobile-development-tech.html',
    date: '2024-07-30',
    category: '移动开发',
    tags: '移动端, React Native, Flutter',
    description: '移动端开发技术栈的选择和对比分析。'
  },
  {
    title: '云原生应用开发',
    filename: '2024/08/cloud-native-development.html',
    date: '2024-08-15',
    category: '云计算',
    tags: '云原生, Kubernetes, 微服务',
    description: '云原生应用开发的完整技术栈和实践。'
  },
  {
    title: 'DevOps自动化实践',
    filename: '2024/08/devops-automation.html',
    date: '2024-08-30',
    category: 'DevOps',
    tags: 'DevOps, CI/CD, 自动化',
    description: 'DevOps自动化流程的设计和实施。'
  },
  {
    title: '机器学习算法详解',
    filename: '2024/09/machine-learning-algorithms.html',
    date: '2024-09-15',
    category: '人工智能',
    tags: '机器学习, 算法, 深度学习',
    description: '主流机器学习算法的原理和应用。'
  },
  {
    title: '区块链技术入门',
    filename: '2024/09/blockchain-basics.html',
    date: '2024-09-30',
    category: '区块链',
    tags: '区块链, 比特币, 以太坊',
    description: '区块链技术的基础概念和发展趋势。'
  },
  {
    title: '网络安全防护策略',
    filename: '2024/10/cybersecurity-strategies.html',
    date: '2024-10-15',
    category: '安全',
    tags: '网络安全, 防护, 威胁',
    description: '企业网络安全防护的全面策略。'
  },
  {
    title: '大数据处理技术',
    filename: '2024/10/big-data-processing.html',
    date: '2024-10-30',
    category: '数据科学',
    tags: '大数据, Hadoop, Spark',
    description: '大数据处理技术的架构和实现。'
  },
  {
    title: '人工智能伦理探讨',
    filename: '2024/11/ai-ethics-discussion.html',
    date: '2024-11-15',
    category: '人工智能',
    tags: 'AI伦理, 社会责任, 技术哲学',
    description: '人工智能发展中的伦理问题和社会责任。'
  },
  {
    title: '软件架构设计模式',
    filename: '2024/11/software-architecture-patterns.html',
    date: '2024-11-30',
    category: '架构设计',
    tags: '软件架构, 设计模式, 系统设计',
    description: '主流软件架构设计模式的分析和应用。'
  },
  {
    title: 'Web3社交平台：去中心化社交网络的未来',
    filename: '2024/12/web3-social-platforms.html',
    date: '2024-12-15',
    category: '区块链',
    tags: 'Web3, 社交网络, 去中心化',
    description: 'Web3技术正在重塑社交网络，本文分析去中心化社交平台的发展趋势和技术架构。'
  },
  {
    title: '边缘计算与AI：下一代计算范式',
    filename: '2024/12/edge-computing-ai.html',
    date: '2024-12-30',
    category: '前沿技术',
    tags: '边缘计算, AI, 物联网',
    description: '边缘计算与人工智能的结合，正在推动下一代计算范式的发展。'
  },
  
  // 2025年3月到8月的新文章
  {
    title: 'AI Agent框架对比：AutoGPT vs LangChain vs CrewAI',
    filename: '2025/03/ai-agent-framework-comparison.html',
    date: '2025-03-15',
    category: '人工智能',
    tags: 'AI Agent, AutoGPT, LangChain, CrewAI',
    description: '深入对比主流AI Agent框架，分析它们的优缺点和适用场景。'
  },
  {
    title: '量子计算2025：从理论到实践',
    filename: '2025/03/quantum-computing-2025.html',
    date: '2025-03-30',
    category: '前沿技术',
    tags: '量子计算, 量子比特, 量子算法',
    description: '量子计算技术的最新发展和实际应用案例。'
  },
  {
    title: '大语言模型在企业中的应用',
    filename: '2025/04/llm-enterprise-applications.html',
    date: '2025-04-15',
    category: '人工智能',
    tags: '大语言模型, 企业应用, AI助手',
    description: '大语言模型在企业环境中的实际应用和部署策略。'
  },
  {
    title: '数字孪生技术发展趋势',
    filename: '2025/04/digital-twin-trends.html',
    date: '2025-04-30',
    category: '前沿技术',
    tags: '数字孪生, IoT, 智能制造',
    description: '数字孪生技术的最新发展趋势和应用前景。'
  },
  {
    title: '生成式AI在创意产业的应用',
    filename: '2025/05/generative-ai-creative.html',
    date: '2025-05-15',
    category: '人工智能',
    tags: '生成式AI, 创意产业, 内容创作',
    description: '生成式AI在创意产业中的革命性应用和影响。'
  },
  {
    title: '脑机接口技术进展',
    filename: '2025/05/brain-computer-interface.html',
    date: '2025-05-30',
    category: '前沿技术',
    tags: '脑机接口, 神经科学, 人机交互',
    description: '脑机接口技术的最新研究进展和未来展望。'
  },
  {
    title: 'AI驱动的软件开发革命',
    filename: '2025/06/ai-driven-software-development.html',
    date: '2025-06-15',
    category: '人工智能',
    tags: 'AI编程, 代码生成, 软件开发',
    description: 'AI技术如何改变传统软件开发流程和模式。'
  },
  {
    title: '元宇宙技术架构分析',
    filename: '2025/06/metaverse-architecture.html',
    date: '2025-06-30',
    category: '前沿技术',
    tags: '元宇宙, VR, AR, 虚拟世界',
    description: '元宇宙的技术架构和实现方案深度分析。'
  },
  {
    title: 'AI在医疗健康领域的突破',
    filename: '2025/07/ai-healthcare-breakthroughs.html',
    date: '2025-07-15',
    category: '人工智能',
    tags: 'AI医疗, 诊断, 药物发现',
    description: '人工智能在医疗健康领域的最新突破和应用。'
  },
  {
    title: '可持续技术发展趋势',
    filename: '2025/07/sustainable-tech-trends.html',
    date: '2025-07-30',
    category: '前沿技术',
    tags: '可持续技术, 绿色计算, 环保',
    description: '可持续技术发展的最新趋势和创新应用。'
  },
  {
    title: 'AI Agent框架对比：AutoGPT vs LangChain vs CrewAI 🤖',
    filename: '2025/08/ai-agent-framework-comparison.html',
    date: '2025-08-15',
    category: '人工智能',
    tags: 'AI Agent, AutoGPT, LangChain, CrewAI',
    description: 'AI Agent技术正在快速发展，本文将深入对比主流的AI Agent框架，分析它们的优缺点和适用场景。'
  },
  {
    title: '量子计算2025：从理论到实践 ⚛️',
    filename: '2025/08/quantum-computing-2025.html',
    date: '2025-08-30',
    category: '前沿技术',
    tags: '量子计算, 量子比特, 量子算法',
    description: '量子计算是下一代计算技术的核心，它利用量子力学的原理来执行计算任务，在某些特定问题上具有超越经典计算机的潜力。'
  }
];

// 文章模板
const articleTemplate = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <meta name="description" content="{{DESCRIPTION}}">
  <meta name="keywords" content="{{TAGS}}">
  <meta name="author" content="Moreyu">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="{{TITLE}}">
  <meta property="og:description" content="{{DESCRIPTION}}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://moreyu.github.io/posts/{{FILENAME}}">
  <meta property="article:published_time" content="{{DATE}}">
  <meta property="article:author" content="Moreyu">
  <meta property="article:section" content="{{CATEGORY}}">
  <meta property="article:tag" content="{{TAGS}}">
  
  <!-- 样式表 -->
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/theme.css">
  <link rel="stylesheet" href="/css/var.css">
  <link rel="stylesheet" href="/css/custom.css">
  <link rel="stylesheet" href="/css/magic-ui.css">
  
  <!-- 代码高亮 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
  
  <!-- 图片缩放 -->
  <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.8/dist/medium-zoom.min.js"></script>
  
  <!-- 数学公式 -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  
  <style>
    /* 文章特定样式 */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #fff;
    }

    main {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }

    h1 {
      color: #FF375F;
      font-size: 2.5em;
      margin-bottom: 20px;
      text-align: center;
      border-bottom: 3px solid #FF375F;
      padding-bottom: 15px;
    }

    h2 {
      color: #FF375F;
      font-size: 1.8em;
      margin-top: 40px;
      margin-bottom: 20px;
      border-left: 4px solid #FF375F;
      padding-left: 15px;
    }

    h3 {
      color: #333;
      font-size: 1.4em;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    h4 {
      color: #555;
      font-size: 1.2em;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 15px;
      text-align: justify;
    }

    .meta {
      text-align: center;
      color: #666;
      font-size: 0.9em;
      margin-bottom: 30px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 10px;
    }

    /* 代码块样式 */
    pre {
      background: #f6f8fa;
      border: 1px solid #e1e4e8;
      border-radius: 8px;
      padding: 20px;
      overflow-x: auto;
      margin: 20px 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 14px;
      line-height: 1.5;
    }

    code {
      background: #f1f3f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.9em;
    }

    pre code {
      background: none;
      padding: 0;
    }

    /* 表格样式 */
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .comparison-table th {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px;
      text-align: left;
      font-weight: bold;
    }

    .comparison-table td {
      padding: 12px 15px;
      border-bottom: 1px solid #eee;
    }

    .comparison-table tr:hover {
      background: #f8f9fa;
    }

    /* 信息框样式 */
    .info-box, .recommendation-box, .concept-box {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .info-box h4, .recommendation-box h4, .concept-box h4 {
      margin-top: 0;
      color: white;
    }

    /* 应用网格样式 */
    .application-grid, .use-cases {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }

    .app-card, .use-case {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .app-card:hover, .use-case:hover {
      transform: translateY(-5px);
    }

    .app-card h4, .use-case h4 {
      color: #FF375F;
      margin-top: 0;
    }

    /* 平台对比样式 */
    .platform-comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }

    .platform {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .platform h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .platform ul {
      padding-left: 20px;
    }

    /* Web3特性样式 */
    .web3-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }

    .feature {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      text-align: center;
    }

    .feature h4 {
      color: #FF375F;
      margin-top: 0;
    }

    /* 量子计算图表样式 */
    .quantum-diagram {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin: 20px 0;
    }

    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 15px;
    }

    .classical, .quantum {
      text-align: center;
      padding: 15px;
      border-radius: 8px;
    }

    .classical {
      background: #e3f2fd;
      border: 2px solid #2196f3;
    }

    .quantum {
      background: #f3e5f5;
      border: 2px solid #9c27b0;
    }

    /* 边缘计算架构样式 */
    .edge-architecture {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin: 20px 0;
    }

    .architecture-diagram {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 15px;
    }

    .layer {
      background: #FF375F;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: bold;
    }

    .arrow {
      font-size: 20px;
      color: #FF375F;
    }

    /* 技术趋势样式 */
    .tech-trends, .best-practices {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin: 20px 0;
    }

    .tech-trends h4, .best-practices h4 {
      color: #FF375F;
      margin-top: 0;
    }

    /* 新增样式 */
    .capability-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }

    .capability {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-left: 4px solid #FF375F;
    }

    .capability h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .timeline {
      margin: 30px 0;
      position: relative;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #FF375F;
      transform: translateX(-50%);
    }

    .timeline-item {
      display: flex;
      align-items: center;
      margin: 20px 0;
    }

    .timeline-date {
      background: #FF375F;
      color: white;
      padding: 8px 15px;
      border-radius: 20px;
      font-weight: bold;
      min-width: 100px;
      text-align: center;
    }

    .timeline-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-left: 20px;
      flex: 1;
    }

    .timeline-content h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .architecture-comparison {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin: 30px 0;
    }

    .arch-item {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #f0f0f0;
    }

    .arch-item h4 {
      color: #FF375F;
      text-align: center;
      margin-bottom: 20px;
    }

    .arch-diagram {
      margin: 20px 0;
    }

    .arch-diagram .layer {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      margin: 8px 0;
      text-align: center;
      font-weight: bold;
    }

    .arch-diagram .arrow {
      text-align: center;
      font-size: 24px;
      color: #FF375F;
      margin: 5px 0;
    }

    .scenario-analysis {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 30px 0;
    }

    .scenario {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border-left: 5px solid #FF375F;
    }

    .scenario h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .code-example {
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 10px;
      padding: 20px;
      margin: 25px 0;
    }

    .code-example h4 {
      color: #FF375F;
      margin-top: 0;
      margin-bottom: 15px;
    }

    .decision-tree {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin: 30px 0;
    }

    .decision-node {
      text-align: center;
      margin-bottom: 30px;
    }

    .decision-node h4 {
      color: #FF375F;
      margin-bottom: 20px;
    }

    .branches {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
    }

    .branch {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 10px;
      border: 2px solid #e9ecef;
      min-width: 150px;
    }

    .branch span {
      font-weight: bold;
      color: #333;
    }

    .sub-branch {
      margin-top: 10px;
      color: #FF375F;
      font-weight: bold;
    }

    .optimization-tips {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .tip {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-top: 4px solid #FF375F;
    }

    .tip h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .tip ul {
      padding-left: 20px;
    }

    .tip li {
      margin-bottom: 8px;
    }

    .architecture-principles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .principle {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .principle h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .learning-path {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }

    .path-stage {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      border-left: 4px solid #FF375F;
    }

    .path-stage h4 {
      color: #FF375F;
      margin-top: 0;
    }

    .path-stage ul {
      padding-left: 20px;
    }

    .path-stage li {
      margin-bottom: 5px;
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

      main {
        background: #1a1a1a;
        color: #f5f5f7;
      }

      .comparison-table,
      .app-card,
      .use-case,
      .platform,
      .feature,
      .quantum-diagram,
      .edge-architecture,
      .tech-trends,
      .best-practices,
      .capability,
      .timeline-content,
      .arch-item,
      .scenario,
      .code-example,
      .decision-tree,
      .tip,
      .principle,
      .path-stage {
        background: #1a1a1a;
        color: #f5f5f7;
      }

      .comparison-table th,
      .comparison-table td {
        border-bottom: 1px solid #333;
      }

      .comparison-table tr:hover {
        background: #2a2a2a;
      }

      .meta {
        background: #2a2a2a;
        color: #ccc;
      }

      pre {
        background: #2a2a2a;
        border-color: #444;
      }

      code {
        background: #333;
      }

      .branch {
        background: #2a2a2a;
        border-color: #444;
      }
    }

    /* 返回首页按钮 */
    .back-to-home {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 25px;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .back-to-home:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }

      main {
        padding: 20px;
      }

      h1 {
        font-size: 2em;
      }

      h2 {
        font-size: 1.5em;
      }

      .architecture-comparison,
      .scenario-analysis {
        grid-template-columns: 1fr;
      }

      .timeline::before {
        left: 20px;
      }

      .timeline-item {
        flex-direction: column;
        align-items: flex-start;
      }

      .timeline-date {
        margin-bottom: 10px;
      }

      .timeline-content {
        margin-left: 0;
        width: 100%;
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
    
    {{CONTENT}}

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

// 生成增强版文章
function generateEnhancedArticles() {
  console.log('🚀 开始生成增强版文章...');
  
  // 首先生成多媒体资源
  const multimediaGenerator = new MultimediaGenerator();
  const multimediaResources = multimediaGenerator.generateAllMultimedia();
  
  // 确保posts目录存在
  const postsDir = path.join(__dirname, '../posts');
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  articles.forEach(article => {
    try {
      // 确定文件路径
      const filePath = path.join(postsDir, article.filename);
      const dirPath = path.dirname(filePath);
      
      // 确保目录存在
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // 获取增强版内容
      const content = getEnhancedArticleContent(article.filename.replace('.html', ''), article);
      
      // 替换模板变量
      let html = articleTemplate
        .replace(/{{TITLE}}/g, article.title)
        .replace(/{{DATE}}/g, article.date)
        .replace(/{{CATEGORY}}/g, article.category)
        .replace(/{{TAGS}}/g, article.tags)
        .replace(/{{DESCRIPTION}}/g, article.description)
        .replace(/{{FILENAME}}/g, article.filename)
        .replace(/{{CONTENT}}/g, content);
      
      // 写入文件
      fs.writeFileSync(filePath, html, 'utf8');
      
      console.log(`✅ 生成文章: ${article.filename}`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ 生成文章失败: ${article.filename}`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\n🎉 文章生成完成！`);
  console.log(`✅ 成功: ${successCount} 篇`);
  console.log(`❌ 失败: ${errorCount} 篇`);
  console.log(`📊 总计: ${articles.length} 篇`);
  
  return { successCount, errorCount, total: articles.length };
}

// 如果直接运行此脚本
if (require.main === module) {
  generateEnhancedArticles();
}

module.exports = {
  articles,
  generateEnhancedArticles
};
