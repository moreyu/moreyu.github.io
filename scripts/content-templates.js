// 主题特定的内容模板库
const contentTemplates = {
  // AI Agent框架对比文章模板
  'ai-agent-framework-comparison': {
    sections: [
      {
        title: '🤖 AI Agent技术概述',
        content: `
        <p>AI Agent（智能代理）是人工智能领域的重要概念，它能够自主执行任务、与环境交互并做出决策。随着大语言模型的发展，AI Agent技术正在经历革命性的变化。</p>
        
        <div class="info-box">
          <h4>💡 什么是AI Agent？</h4>
          <p>AI Agent是一个能够感知环境、做出决策并执行行动的智能系统。它结合了自然语言处理、知识推理和任务规划等多种AI技术。</p>
        </div>
        `
      },
      {
        title: '📊 主流框架对比',
        content: `
        <table class="comparison-table">
          <thead>
            <tr>
              <th>框架</th>
              <th>特点</th>
              <th>适用场景</th>
              <th>学习曲线</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AutoGPT</strong></td>
              <td>自主性强，任务分解能力优秀</td>
              <td>自动化任务执行</td>
              <td>中等</td>
            </tr>
            <tr>
              <td><strong>LangChain</strong></td>
              <td>模块化设计，扩展性强</td>
              <td>复杂应用开发</td>
              <td>较高</td>
            </tr>
            <tr>
              <td><strong>CrewAI</strong></td>
              <td>多Agent协作，团队协作</td>
              <td>复杂项目协作</td>
              <td>中等</td>
            </tr>
          </tbody>
        </table>
        `
      },
      {
        title: '🔧 实践示例：AutoGPT配置',
        content: `
        <pre><code class="python"># AutoGPT配置示例
import autogpt
from autogpt.config import Config

# 初始化配置
config = Config()
config.openai_api_key = "your-api-key"
config.workspace_path = "./workspace"

# 创建AI Agent
agent = autogpt.Agent(
    name="TechAssistant",
    role="技术助手",
    goals=[
        "分析技术文档",
        "生成代码示例",
        "提供最佳实践建议"
    ]
)

# 执行任务
agent.run("分析Docker容器化最佳实践")</code></pre>
        `
      },
      {
        title: '🚀 LangChain应用示例',
        content: `
        <pre><code class="javascript">// LangChain Agent示例
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { DynamicTool } from "langchain/tools";

// 创建工具
const searchTool = new DynamicTool({
  name: "web_search",
  description: "搜索网络信息",
  func: async (input) => {
    // 实现搜索逻辑
    return "搜索结果";
  },
});

// 创建Agent
const model = new ChatOpenAI({ temperature: 0 });
const agent = await createOpenAIFunctionsAgent({
  llm: model,
  tools: [searchTool],
  prompt: promptTemplate,
});

const agentExecutor = new AgentExecutor({ agent, tools: [searchTool] });
const result = await agentExecutor.invoke({
  input: "分析最新的AI技术趋势"
});</code></pre>
        `
      },
      {
        title: '🎯 选择建议',
        content: `
        <div class="recommendation-box">
          <h4>📋 框架选择指南</h4>
          <ul>
            <li><strong>初学者</strong>：推荐从AutoGPT开始，学习曲线相对平缓</li>
            <li><strong>开发者</strong>：LangChain提供更多定制化选项</li>
            <li><strong>团队项目</strong>：CrewAI的多Agent协作更适合复杂项目</li>
          </ul>
        </div>
        
        <p>选择框架时需要考虑项目复杂度、团队规模和技术栈等因素。建议先进行概念验证，再决定最终的技术方案。</p>
        `
      }
    ]
  },

  // 量子计算文章模板
  'quantum-computing-2025': {
    sections: [
      {
        title: '⚛️ 量子计算基础',
        content: `
        <p>量子计算利用量子力学原理，通过量子比特（qubit）进行信息处理，在某些特定问题上具有超越经典计算机的潜力。</p>
        
        <div class="quantum-diagram">
          <h4>🔬 量子比特vs经典比特</h4>
          <div class="comparison">
            <div class="classical">
              <h5>经典比特</h5>
              <p>0 或 1</p>
              <p>确定性状态</p>
            </div>
            <div class="quantum">
              <h5>量子比特</h5>
              <p>|0⟩, |1⟩, 或叠加态</p>
              <p>概率性状态</p>
            </div>
          </div>
        </div>
        `
      },
      {
        title: '🏭 商业应用突破',
        content: `
        <div class="application-grid">
          <div class="app-card">
            <h4>🔐 密码学</h4>
            <p>量子计算机可能破解现有的加密算法，推动后量子密码学发展</p>
          </div>
          <div class="app-card">
            <h4>🧬 药物发现</h4>
            <p>模拟分子结构，加速新药研发过程</p>
          </div>
          <div class="app-card">
            <h4>📈 金融建模</h4>
            <p>优化投资组合，风险分析</p>
          </div>
          <div class="app-card">
            <h4>🤖 机器学习</h4>
            <p>量子机器学习算法，提升AI性能</p>
          </div>
        </div>
        `
      },
      {
        title: '💻 量子编程示例',
        content: `
        <pre><code class="python"># Qiskit量子编程示例
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt

# 创建量子电路
qc = QuantumCircuit(2, 2)

# 应用Hadamard门到第一个量子比特
qc.h(0)

# CNOT门
qc.cx(0, 1)

# 测量
qc.measure([0,1], [0,1])

# 执行电路
backend = Aer.get_backend('qasm_simulator')
job = execute(qc, backend, shots=1000)
result = job.result()

# 显示结果
counts = result.get_counts(qc)
print("测量结果:", counts)
plot_histogram(counts)</code></pre>
        `
      }
    ]
  },

  // Web3社交平台文章模板
  'web3-social-platforms': {
    sections: [
      {
        title: '🌐 Web3社交网络概述',
        content: `
        <p>Web3社交平台正在重新定义社交网络的本质，通过区块链技术实现去中心化、用户数据主权和代币激励机制。</p>
        
        <div class="web3-features">
          <div class="feature">
            <h4>🔓 去中心化</h4>
            <p>用户数据不再被单一平台控制</p>
          </div>
          <div class="feature">
            <h4>💰 代币激励</h4>
            <p>通过代币奖励用户贡献</p>
          </div>
          <div class="feature">
            <h4>🔐 数据主权</h4>
            <p>用户拥有自己的数据控制权</p>
          </div>
        </div>
        `
      },
      {
        title: '🏗️ 技术架构',
        content: `
        <pre><code class="solidity">// 社交代币合约示例
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SocialToken is ERC20, Ownable {
    mapping(address => uint256) public userReputation;
    
    event ReputationUpdated(address user, uint256 newReputation);
    
    constructor() ERC20("SocialToken", "SOC") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
    
    function updateReputation(address user, uint256 reputation) 
        external onlyOwner {
        userReputation[user] = reputation;
        emit ReputationUpdated(user, reputation);
    }
    
    function rewardUser(address user, uint256 amount) 
        external onlyOwner {
        _transfer(owner(), user, amount);
    }
}</code></pre>
        `
      },
      {
        title: '📱 主流平台对比',
        content: `
        <div class="platform-comparison">
          <div class="platform">
            <h4>Lens Protocol</h4>
            <ul>
              <li>基于Polygon的社交图谱</li>
              <li>NFT化的用户档案</li>
              <li>可组合的社交应用</li>
            </ul>
          </div>
          <div class="platform">
            <h4>Farcaster</h4>
            <ul>
              <li>去中心化Twitter替代品</li>
              <li>基于以太坊</li>
              <li>用户拥有数据</li>
            </ul>
          </div>
          <div class="platform">
            <h4>Mastodon</h4>
            <ul>
              <li>联邦化社交网络</li>
              <li>开源协议</li>
              <li>无广告模式</li>
            </ul>
          </div>
        </div>
        `
      }
    ]
  },

  // 边缘计算与AI文章模板
  'edge-computing-ai': {
    sections: [
      {
        title: '📱 边缘计算概述',
        content: `
        <p>边缘计算将计算能力从云端转移到网络边缘，减少延迟、提高隐私保护，与AI结合正在改变智能设备的计算模式。</p>
        
        <div class="edge-architecture">
          <h4>🏗️ 边缘AI架构</h4>
          <div class="architecture-diagram">
            <div class="layer">云端层</div>
            <div class="arrow">↓</div>
            <div class="layer">边缘层</div>
            <div class="arrow">↓</div>
            <div class="layer">设备层</div>
          </div>
        </div>
        `
      },
      {
        title: '🤖 边缘AI应用场景',
        content: `
        <div class="use-cases">
          <div class="use-case">
            <h4>🚗 自动驾驶</h4>
            <p>实时图像识别和决策，减少网络延迟</p>
          </div>
          <div class="use-case">
            <h4>🏥 医疗设备</h4>
            <p>本地健康数据分析，保护隐私</p>
          </div>
          <div class="use-case">
            <h4>🏭 工业物联网</h4>
            <p>设备状态监控和预测性维护</p>
          </div>
        </div>
        `
      },
      {
        title: '💻 边缘AI开发示例',
        content: `
        <pre><code class="python"># TensorFlow Lite边缘推理示例
import tensorflow as tf
import numpy as np

# 加载模型
interpreter = tf.lite.Interpreter(model_path="model.tflite")
interpreter.allocate_tensors()

# 获取输入输出详情
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# 准备输入数据
input_data = np.array([[1.0, 2.0, 3.0]], dtype=np.float32)
interpreter.set_tensor(input_details[0]['index'], input_data)

# 执行推理
interpreter.invoke()

# 获取结果
output_data = interpreter.get_tensor(output_details[0]['index'])
print("推理结果:", output_data)</code></pre>
        `
      }
    ]
  },

  // 通用技术文章模板
  'default': {
    sections: [
      {
        title: '🎯 技术背景',
        content: `
        <p>在当今快速发展的技术环境中，{{CATEGORY}}领域正在经历前所未有的变革。随着新技术的不断涌现，开发者需要不断学习和适应新的技术栈和最佳实践。</p>
        
        <div class="tech-trends">
          <h4>📈 当前发展趋势</h4>
          <ul>
            <li>技术融合与创新</li>
            <li>开源生态的繁荣</li>
            <li>云原生架构普及</li>
            <li>AI驱动的自动化</li>
          </ul>
        </div>
        `
      },
      {
        title: '🔧 核心概念',
        content: `
        <p>理解{{CATEGORY}}的核心概念对于掌握相关技术至关重要。这些概念构成了技术体系的基础，为后续的深入学习和实践提供了理论支撑。</p>
        
        <div class="concept-box">
          <h4>💡 关键要点</h4>
          <p>掌握基础概念是深入学习的前提，建议结合实际项目进行练习。</p>
        </div>
        `
      },
      {
        title: '🚀 实践应用',
        content: `
        <p>理论结合实践是学习技术的最佳方式。通过实际的项目案例，我们可以更好地理解技术的应用场景和实现方法。</p>
        
        <pre><code class="javascript">// 示例代码
console.log("Hello, {{CATEGORY}}!");

// 这里可以添加更多相关的代码示例
function example() {
    return "实践是最好的老师";
}</code></pre>
        `
      },
      {
        title: '📚 最佳实践',
        content: `
        <p>在{{CATEGORY}}领域，遵循最佳实践可以避免常见的陷阱，提高开发效率和代码质量。这些实践来自于大量的项目经验和行业标准。</p>
        
        <div class="best-practices">
          <h4>✅ 推荐做法</h4>
          <ul>
            <li>持续学习新技术</li>
            <li>参与开源项目</li>
            <li>关注行业动态</li>
            <li>实践项目驱动学习</li>
          </ul>
        </div>
        `
      }
    ]
  }
};

// 获取文章内容模板
function getArticleContent(templateKey, articleData) {
  const template = contentTemplates[templateKey] || contentTemplates['default'];
  
  let content = '';
  template.sections.forEach(section => {
    content += `<h2>${section.title}</h2>\n`;
    content += section.content.replace(/{{CATEGORY}}/g, articleData.category) + '\n\n';
  });
  
  return content;
}

module.exports = { contentTemplates, getArticleContent }; 