# Browserbase enterprise security docs

抓取时间：2026-07-11。

核心安全/合规：SOC 2 Type II, HIPAA, third-party pen testing。

架构要点：

- Isolation：1 browser per VM。
- Network security：individual subnets and strict firewall rules。
- Logging control：可随时关闭 logs 和 session video recordings。
- Data residency：US/EU/Asia regions。
- Model control：BYO-LLM with interceptor customization。
- No browser reuse：每个 session 后 VM kill and recreate。
- No GPU access：避免 shared GPU memory attack。

Stagehand guardrails：atomic auditable steps、self-healing only for atomic step、minimize full-page hallucination、prompt templating、BYO-LLM。

判断：Browserbase 明确把 enterprise trust/security 做成产品卖点，不只是 developer tool。
