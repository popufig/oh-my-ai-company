# Agent 安全独立验证层

当 AI coding agent 成为主要代码生产者时，安全不能完全依赖同一个 Agent 自我审查。独立验证层应围绕生成与部署流程，提供可重复、可审计的证据，并把生成者和验证者分开。

## 两个已验证样本

### Endor Labs / AURI

[[company.endor-labs]] 把 AURI 定位为 agentic software development 的 security intelligence。它把 agent reasoning 与确定性的 program analysis 结合，输出 data flow、call path、reachability、exploitability、contextual fix 与可复现证据，再通过 Hooks、Skills、MCP、CLI、GitHub Agent Kit 进入开发流程。

### Tolmo

[[company.tolmo]] 把代码、云、CI、身份、可观测性和安全工具连接成时态生产图谱。Pentesting Agent 先证明攻击路径，Remediation Agent 再把 blast radius 和完整上下文交给 coding agent。它还增加 secure proxy、finding lifecycle、audit 与 Agent Skill。

Endor 更靠近 code/application analysis，Tolmo 更靠近 production/cloud context。共同原则是：

- generator != verifier；
- 验证结果必须带上下文与可复现证据；
- 安全能力通过 CLI/Skill/MCP/Hook 进入 Agent 工作流；
- 权限、历史和审计是验证层的一部分，不是附加功能。

这属于更广义 [[concept.agent-substrate-stack]] 中的安全控制平面。当前概念 confidence 仍为 medium，需要继续观察客户采用和实际效果。

证据：[[source.website.endor-labs-home]]、[[source.portfolio.lightspeed-endor-auri-2026-03-03]]、[[source.github.endor-labs-org-2026-07-08]]、[[source.website.tolmo-platform-2026-07-14]]、[[source.docs.tolmo-agent-skill-2026-07-14]]、[[source.youtube.tolmo-demo-2026-06-22]]。
