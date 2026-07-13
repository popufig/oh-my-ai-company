# Resolve AI

Resolve AI 是生产运维 / incident debugging agent 公司。它的主张不是“总结日志”，而是让 multi-agent system 跨 code、infrastructure、telemetry 做结构化调查，处理 alerts、RCA、production debugging，并给出 evidence-backed explanation 和下一步行动。

## TL;DR

- 产品：AI agents for prod，处理 alerts、root cause analysis、incident troubleshooting。
- 官网 claim：87% faster incident investigations；通过 MCP、API、Skills 接入现有工具和 tribal knowledge。
- 安全/合规：SAML SSO、RBAC、admin controls、redaction/encryption/retention、org-scoped data、audit logs、no external training、SOC 2 Type II、GDPR、HIPAA。
- 融资/投资：Lightspeed portfolio page 显示 founded 2024，private，LSVP investment 2026，stage invested Series A；leadership 为 [[person.spiros-xanthos]] 和 [[person.mayank-agarwal]]；Lightspeed team 为 Sebastian Duesterhoeft、Raviraj Jain、Eli Conniff。
- 外部讨论：本轮 Google/HN 未搜到可靠外部讨论，见 [[source.google.resolve-ai-search-2026-07-08]]。不要把缺少公开讨论解释成没有 traction。

## Product Fit In Agent Substrate

Resolve AI 属于 [[concept.agent-substrate-stack]] 里的 production debugging / AI SRE 层：当 agents 进入生产系统，事故排查不再是单一日志搜索，而是需要跨代码、infra、telemetry、deploy history、ownership、runbooks、tribal knowledge 的调查能力。

与 [[company.temporal]] 的 durable execution 不同，Resolve 更靠近“生产系统出了问题后，agent 如何像 SRE/production engineer 一样查明原因并推动修复”。

## Evidence

- [[source.website.resolve-ai-home]]
- [[source.portfolio.lightspeed-resolve-ai]]
- [[source.google.resolve-ai-search-2026-07-08]]
- [[note.resolve-ai-product-takeaway-2026-07-08]]
