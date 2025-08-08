const { getArticleContent } = require('./content-templates');

// 增强版内容模板 - 提供更详细、分层的文章内容
const enhancedContentTemplates = {
  // AI Agent框架对比 - 增强版
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

          <h3>🧠 AI Agent的核心能力</h3>
          <div class="capability-grid">
            <div class="capability">
              <h4>🔍 感知能力</h4>
              <p>能够理解自然语言输入，识别用户意图，处理多模态信息（文本、图像、音频）</p>
            </div>
            <div class="capability">
              <h4>🤔 推理能力</h4>
              <p>基于已有知识进行逻辑推理，解决复杂问题，制定行动计划</p>
            </div>
            <div class="capability">
              <h4>🛠️ 执行能力</h4>
              <p>调用各种工具和API，执行具体任务，与环境进行交互</p>
            </div>
            <div class="capability">
              <h4>📚 学习能力</h4>
              <p>从交互中学习，优化决策策略，适应新的环境和任务</p>
            </div>
          </div>

          <h3>🚀 AI Agent的发展历程</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">2020年</div>
              <div class="timeline-content">
                <h4>GPT-3发布</h4>
                <p>大语言模型能力突破，为AI Agent奠定基础</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2022年</div>
              <div class="timeline-content">
                <h4>AutoGPT诞生</h4>
                <p>首个自主AI Agent框架，能够独立完成任务</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2023年</div>
              <div class="timeline-content">
                <h4>LangChain生态</h4>
                <p>模块化AI应用开发框架，支持复杂应用构建</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">2024年</div>
              <div class="timeline-content">
                <h4>多Agent协作</h4>
                <p>CrewAI等框架实现多Agent协作，处理复杂项目</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: '📊 主流框架深度对比',
        content: `
          <p>当前主流的AI Agent框架各有特色，适用于不同的应用场景。让我们深入分析它们的架构特点、技术优势和适用性。</p>

          <h3>🏗️ 架构设计对比</h3>
          <div class="architecture-comparison">
            <div class="arch-item">
              <h4>AutoGPT架构</h4>
              <div class="arch-diagram">
                <div class="layer">用户输入层</div>
                <div class="arrow">↓</div>
                <div class="layer">任务分解层</div>
                <div class="arrow">↓</div>
                <div class="layer">工具调用层</div>
                <div class="arrow">↓</div>
                <div class="layer">结果整合层</div>
              </div>
              <p><strong>特点：</strong>自主性强，任务分解能力优秀，适合自动化任务执行</p>
            </div>
            <div class="arch-item">
              <h4>LangChain架构</h4>
              <div class="arch-diagram">
                <div class="layer">LLM抽象层</div>
                <div class="arrow">↓</div>
                <div class="layer">Prompt管理</div>
                <div class="arrow">↓</div>
                <div class="layer">工具集成</div>
                <div class="arrow">↓</div>
                <div class="layer">应用构建</div>
              </div>
              <p><strong>特点：</strong>模块化设计，扩展性强，适合复杂应用开发</p>
            </div>
            <div class="arch-item">
              <h4>CrewAI架构</h4>
              <div class="arch-diagram">
                <div class="layer">任务分配</div>
                <div class="arrow">↓</div>
                <div class="layer">Agent协作</div>
                <div class="arrow">↓</div>
                <div class="layer">结果同步</div>
                <div class="arrow">↓</div>
                <div class="layer">质量保证</div>
              </div>
              <p><strong>特点：</strong>多Agent协作，团队协作，适合复杂项目协作</p>
            </div>
          </div>

          <h3>📈 性能对比分析</h3>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>框架</th>
                <th>响应速度</th>
                <th>准确性</th>
                <th>可扩展性</th>
                <th>学习曲线</th>
                <th>社区活跃度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AutoGPT</strong></td>
                <td>⭐⭐⭐⭐</td>
                <td>⭐⭐⭐</td>
                <td>⭐⭐⭐</td>
                <td>⭐⭐⭐</td>
                <td>⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td><strong>LangChain</strong></td>
                <td>⭐⭐⭐⭐⭐</td>
                <td>⭐⭐⭐⭐</td>
                <td>⭐⭐⭐⭐⭐</td>
                <td>⭐⭐</td>
                <td>⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td><strong>CrewAI</strong></td>
                <td>⭐⭐⭐</td>
                <td>⭐⭐⭐⭐⭐</td>
                <td>⭐⭐⭐⭐</td>
                <td>⭐⭐⭐</td>
                <td>⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🔧 实践示例与代码实现',
        content: `
          <p>理论结合实践，让我们通过具体的代码示例来理解如何构建和使用AI Agent。</p>

          <h3>🚀 AutoGPT完整配置示例</h3>
          <div class="code-example">
            <h4>环境准备</h4>
            <pre><code class="bash"># 安装AutoGPT
pip install autogpt

# 配置环境变量
export OPENAI_API_KEY="your-api-key"
export GOOGLE_API_KEY="your-google-api-key"
export GOOGLE_CSE_ID="your-cse-id"</code></pre>
          </div>

          <div class="code-example">
            <h4>基础Agent配置</h4>
            <pre><code class="python"># AutoGPT配置示例
import autogpt
from autogpt.config import Config
from autogpt.agent import Agent
from autogpt.memory import Memory

# 初始化配置
config = Config()
config.openai_api_key = "your-api-key"
config.workspace_path = "./workspace"
config.max_iterations = 50
config.allow_delegation = True

# 创建AI Agent
agent = Agent(
    name="TechAssistant",
    role="技术助手",
    goals=[
        "分析技术文档",
        "生成代码示例",
        "提供最佳实践建议",
        "解决技术问题"
    ],
    backstory="我是一位经验丰富的技术专家，擅长各种编程语言和技术栈。",
    verbose=True
)

# 配置记忆系统
memory = Memory()
agent.memory = memory

# 执行任务
result = agent.run("分析Docker容器化最佳实践并生成部署指南")

print("任务完成！")
print(f"执行结果: {result}")</code></pre>
          </div>
        `
      },
      {
        title: '🎯 最佳实践与选择建议',
        content: `
          <p>选择合适的AI Agent框架需要考虑多个因素，包括项目需求、团队技能、技术栈等。以下是详细的选择指南和最佳实践。</p>

          <h3>📋 框架选择决策树</h3>
          <div class="decision-tree">
            <div class="decision-node">
              <h4>项目类型是什么？</h4>
              <div class="branches">
                <div class="branch">
                  <span>🔄 自动化任务</span>
                  <div class="sub-branch">→ 选择 AutoGPT</div>
                </div>
                <div class="branch">
                  <span>🏗️ 应用开发</span>
                  <div class="sub-branch">→ 选择 LangChain</div>
                </div>
                <div class="branch">
                  <span>👥 团队协作</span>
                  <div class="sub-branch">→ 选择 CrewAI</div>
                </div>
              </div>
            </div>
          </div>

          <div class="recommendation-box">
            <h4>🎯 最终建议</h4>
            <p><strong>初学者：</strong>建议从AutoGPT开始，学习曲线相对平缓，能够快速看到效果。</p>
            <p><strong>开发者：</strong>推荐使用LangChain，提供更多定制化选项，适合构建复杂的AI应用。</p>
            <p><strong>团队项目：</strong>CrewAI的多Agent协作更适合处理复杂的团队项目。</p>
            <p><strong>企业应用：</strong>考虑LangChain的企业级特性和丰富的集成选项。</p>
          </div>
        `
      }
    ]
  }
};

// 获取增强版文章内容
function getEnhancedArticleContent(templateKey, article) {
  const template = enhancedContentTemplates[templateKey];
  if (!template) {
    // 如果没有找到增强版模板，回退到原始模板
    return getArticleContent(templateKey, article);
  }

  let content = '';
  template.sections.forEach(section => {
    content += `<h2>${section.title}</h2>\n\n`;
    content += section.content;
    content += '\n\n';
  });

  return content;
}

module.exports = {
  enhancedContentTemplates,
  getEnhancedArticleContent
};
