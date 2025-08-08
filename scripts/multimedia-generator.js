const fs = require('fs');
const path = require('path');

// 多媒体资源生成系统
class MultimediaGenerator {
  constructor() {
    this.outputDir = path.join(__dirname, '../img/generated');
    this.ensureOutputDir();
  }

  ensureOutputDir() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  // 生成AI Agent架构图
  generateAIAgentArchitecture() {
    const svg = `
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="800" height="600" fill="#f8f9fa"/>
        
        <!-- 标题 -->
        <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">AI Agent 架构图</text>
        
        <!-- 用户输入层 -->
        <rect x="50" y="80" width="700" height="60" rx="10" fill="url(#grad1)" stroke="#333" stroke-width="2"/>
        <text x="400" y="115" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white">用户输入层</text>
        <text x="400" y="135" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">自然语言处理、意图识别</text>
        
        <!-- 箭头 -->
        <polygon points="400,150 395,160 405,160" fill="#333"/>
        
        <!-- 任务分解层 -->
        <rect x="50" y="170" width="700" height="60" rx="10" fill="url(#grad2)" stroke="#333" stroke-width="2"/>
        <text x="400" y="205" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white">任务分解层</text>
        <text x="400" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">目标设定、计划制定</text>
        
        <!-- 箭头 -->
        <polygon points="400,240 395,250 405,250" fill="#333"/>
        
        <!-- 工具调用层 -->
        <rect x="50" y="260" width="700" height="60" rx="10" fill="url(#grad1)" stroke="#333" stroke-width="2"/>
        <text x="400" y="295" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white">工具调用层</text>
        <text x="400" y="315" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">API调用、工具执行</text>
        
        <!-- 箭头 -->
        <polygon points="400,330 395,340 405,340" fill="#333"/>
        
        <!-- 结果整合层 -->
        <rect x="50" y="350" width="700" height="60" rx="10" fill="url(#grad2)" stroke="#333" stroke-width="2"/>
        <text x="400" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="white">结果整合层</text>
        <text x="400" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">结果分析、反馈生成</text>
        
        <!-- 侧边工具 -->
        <rect x="50" y="450" width="150" height="80" rx="10" fill="#e3f2fd" stroke="#2196f3" stroke-width="2"/>
        <text x="125" y="475" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2196f3">搜索工具</text>
        <text x="125" y="495" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">Web搜索</text>
        <text x="125" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">知识库</text>
        
        <rect x="325" y="450" width="150" height="80" rx="10" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2"/>
        <text x="400" y="475" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#9c27b0">计算工具</text>
        <text x="400" y="495" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">数学计算</text>
        <text x="400" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">数据分析</text>
        
        <rect x="600" y="450" width="150" height="80" rx="10" fill="#e8f5e8" stroke="#4caf50" stroke-width="2"/>
        <text x="675" y="475" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#4caf50">执行工具</text>
        <text x="675" y="495" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">文件操作</text>
        <text x="675" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">系统控制</text>
      </svg>
    `;
    
    const filePath = path.join(this.outputDir, 'ai-agent-architecture.svg');
    fs.writeFileSync(filePath, svg);
    return '/img/generated/ai-agent-architecture.svg';
  }

  // 生成量子计算对比图
  generateQuantumComparison() {
    const svg = `
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="classicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2196f3;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1976d2;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="quantumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#9c27b0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#7b1fa2;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="800" height="600" fill="#f8f9fa"/>
        
        <!-- 标题 -->
        <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">经典计算 vs 量子计算</text>
        
        <!-- 经典计算 -->
        <rect x="50" y="80" width="300" height="400" rx="15" fill="url(#classicalGrad)" stroke="#333" stroke-width="3"/>
        <text x="200" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">经典计算</text>
        
        <!-- 经典比特 -->
        <circle cx="100" cy="160" r="20" fill="white" stroke="#333" stroke-width="2"/>
        <text x="100" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">0</text>
        
        <circle cx="200" cy="160" r="20" fill="white" stroke="#333" stroke-width="2"/>
        <text x="200" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">1</text>
        
        <text x="200" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">串行处理</text>
        
        <!-- 经典特性 -->
        <text x="200" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">特性：</text>
        <text x="200" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 确定性结果</text>
        <text x="200" y="275" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 易于控制</text>
        <text x="200" y="290" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 成熟技术</text>
        <text x="200" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 稳定可靠</text>
        
        <!-- 量子计算 -->
        <rect x="450" y="80" width="300" height="400" rx="15" fill="url(#quantumGrad)" stroke="#333" stroke-width="3"/>
        <text x="600" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">量子计算</text>
        
        <!-- 量子比特 -->
        <circle cx="500" cy="160" r="20" fill="white" stroke="#333" stroke-width="2"/>
        <text x="500" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">|0⟩</text>
        
        <circle cx="600" cy="160" r="20" fill="white" stroke="#333" stroke-width="2"/>
        <text x="600" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">|1⟩</text>
        
        <circle cx="700" cy="160" r="20" fill="white" stroke="#333" stroke-width="2"/>
        <text x="700" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">|ψ⟩</text>
        
        <text x="600" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">并行处理</text>
        
        <!-- 量子特性 -->
        <text x="600" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">特性：</text>
        <text x="600" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 叠加态</text>
        <text x="600" y="275" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 量子纠缠</text>
        <text x="600" y="290" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 量子干涉</text>
        <text x="600" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">• 概率性结果</text>
        
        <!-- 连接线 -->
        <line x1="380" y1="280" x2="420" y2="280" stroke="#333" stroke-width="2"/>
        <polygon points="420,280 415,275 415,285" fill="#333"/>
        
        <!-- 对比说明 -->
        <text x="400" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333">计算能力对比</text>
        <text x="400" y="540" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">经典计算：线性增长 | 量子计算：指数增长</text>
        <text x="400" y="555" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">适用于：通用计算 | 适用于：特定问题</text>
      </svg>
    `;
    
    const filePath = path.join(this.outputDir, 'quantum-comparison.svg');
    fs.writeFileSync(filePath, svg);
    return '/img/generated/quantum-comparison.svg';
  }

  // 生成Web3生态图
  generateWeb3Ecosystem() {
    const svg = `
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a24;stop-opacity:1" />
          </radialGradient>
          <linearGradient id="layerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4834d4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#686de0;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- 背景 -->
        <rect width="800" height="600" fill="#f8f9fa"/>
        
        <!-- 标题 -->
        <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#333">Web3 生态系统</text>
        
        <!-- 中心节点 -->
        <circle cx="400" cy="300" r="60" fill="url(#centerGrad)" stroke="#333" stroke-width="3"/>
        <text x="400" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">Web3</text>
        <text x="400" y="325" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">去中心化</text>
        
        <!-- 第一层：基础设施 -->
        <circle cx="200" cy="150" r="40" fill="url(#layerGrad)" stroke="#333" stroke-width="2"/>
        <text x="200" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">区块链</text>
        <text x="200" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">基础设施</text>
        
        <circle cx="600" cy="150" r="40" fill="url(#layerGrad)" stroke="#333" stroke-width="2"/>
        <text x="600" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">IPFS</text>
        <text x="600" y="170" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">存储</text>
        
        <circle cx="200" cy="450" r="40" fill="url(#layerGrad)" stroke="#333" stroke-width="2"/>
        <text x="200" y="455" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">钱包</text>
        <text x="200" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">身份</text>
        
        <circle cx="600" cy="450" r="40" fill="url(#layerGrad)" stroke="#333" stroke-width="2"/>
        <text x="600" y="455" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">预言机</text>
        <text x="600" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">数据</text>
        
        <!-- 第二层：应用层 -->
        <circle cx="100" cy="300" r="35" fill="#00b894" stroke="#333" stroke-width="2"/>
        <text x="100" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="white">DeFi</text>
        
        <circle cx="700" cy="300" r="35" fill="#00b894" stroke="#333" stroke-width="2"/>
        <text x="700" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="white">NFT</text>
        
        <circle cx="400" cy="100" r="35" fill="#00b894" stroke="#333" stroke-width="2"/>
        <text x="400" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="white">DAO</text>
        
        <circle cx="400" cy="500" r="35" fill="#00b894" stroke="#333" stroke-width="2"/>
        <text x="400" y="505" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="white">GameFi</text>
        
        <!-- 连接线 -->
        <line x1="340" y1="300" x2="460" y2="300" stroke="#333" stroke-width="2"/>
        <line x1="400" y1="240" x2="400" y2="360" stroke="#333" stroke-width="2"/>
        <line x1="260" y1="190" x2="340" y2="270" stroke="#333" stroke-width="1"/>
        <line x1="540" y1="270" x2="460" y2="330" stroke="#333" stroke-width="1"/>
        <line x1="260" y1="410" x2="340" y2="330" stroke="#333" stroke-width="1"/>
        <line x1="540" y1="330" x2="460" y2="270" stroke="#333" stroke-width="1"/>
        
        <!-- 特性说明 -->
        <text x="400" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333">核心特性</text>
        <text x="400" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333">去中心化 | 用户主权 | 代币激励 | 可组合性</text>
      </svg>
    `;
    
    const filePath = path.join(this.outputDir, 'web3-ecosystem.svg');
    fs.writeFileSync(filePath, svg);
    return '/img/generated/web3-ecosystem.svg';
  }

  // 生成所有多媒体资源
  generateAllMultimedia() {
    const resources = {
      'ai-agent-architecture': this.generateAIAgentArchitecture(),
      'quantum-comparison': this.generateQuantumComparison(),
      'web3-ecosystem': this.generateWeb3Ecosystem()
    };
    
    console.log('✅ 多媒体资源生成完成：');
    Object.entries(resources).forEach(([name, path]) => {
      console.log(`   - ${name}: ${path}`);
    });
    
    return resources;
  }
}

module.exports = MultimediaGenerator;
