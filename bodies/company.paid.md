# Paid

Paid 是一家面向 AI agent / AI-native SaaS 的商业化基础设施公司：帮 agent 公司设计 pricing、追踪成本和 margin、证明客户价值，并把这些信号转成 billing、invoice、value receipt、renewal/expansion 证据。它不是“又一个 Stripe/Zuora 包装层”，更准确的定位是 [[concept.agent-monetization-infra]]：agent 工作流 telemetry -> cost/value attribution -> pricing/billing/ROI proof。

## TL;DR

- 产品主张：AI agents 不适合传统 seat-based SaaS pricing，因为 agent 替代的是“人/流程/结果”，不是更多 seat。Paid 提供 credits、usage、workflow、outcome、hybrid pricing，并把 tool call / task / action 级别信号接入 billing 和 customer value proof。
- 融资：2025-09 左右宣布 Seed，官方/EQT 口径为 $21M，TechCrunch 口径为 $21.6M；由 [[investor.lightspeed-venture-partners]] 领投，FUSE 和 [[investor.eqt-ventures]] 参投；总融资 $33.3M。TechCrunch 另称估值超过 $100M（来源为熟悉交易的人，非官方口径）。见 [[investment.lightspeed-paid-seed-2025]]。
- 团队：[[person.manny-medina]]（Outreach co-founder/CEO 背景）是 Paid 最重要的 GTM/信任资产；[[person.raj-dosanjh]] 是 Co-founder/CTO，X/LinkedIn 显示 YC W24、ex-Palantir、ex-Intercom；[[person.manoj-ganapathy]] 有 Invoice IT/Salesforce billing 背景；[[person.arnon-shimoni]] 有 Pleo/Storytel monetization/billing 背景，但 2026-07 抓到的 LinkedIn/个人页显示他已是 former co-founder，现任 Solvimon VP Growth。
- 规模：LinkedIn 公司页显示 11-50 employees、10,000 followers。该页抓取质量 partial，只用于团队规模和公司页 corroboration。
- GTM：Paid 官方 launch playbook 披露其 2025-03 launch 不是单次发布，而是 PR、TechCrunch、founder/investor network、podcast、manifesto video、launch party、founder posts、week-long content sequence 的组合动作。披露数据包括 24h 15.8K visitors / 47K views、>650 signups、>140 scheduled meetings、Manny announcement 532K impressions。

## Product Surface

官网和 SDK 合起来看，Paid 的产品层包括：

- Pricing & Credits：credits / usage / outcome / subscription / hybrid pricing，无代码配置。
- Customer Value Receipts：把 time saved、cost savings、risk avoided、incremental revenue 等价值证明给客户。
- Operator Dashboard：按 customer/product/agent 看 revenue、cost、margin。
- Margin Tracking：按 agent/model/action 看 cost-to-serve。
- Event Monitoring：追踪 action、task、tool call，并转成 human-readable signals。
- Billing & Invoicing：invoice、credit card、complex metering、automated billing。
- Developer integration：[[source.github.paid-node]] 显示其 TypeScript SDK 支持 OpenTelemetry tracing、OpenAI/Anthropic/Mistral/LangChain/Vercel AI SDK 等集成。

关键判断：Paid 的 moat 不该只看 invoice/billing，而要看它能否成为 agent business 的 telemetry and value attribution layer。若只是 usage meter，容易被 Stripe/Orb/Metronome/Zuora 或垂直 agent 平台吃掉；若能沉淀“agent 做了什么、值多少钱、成本多少、该怎么续约/扩张”，壁垒会更像业务操作系统。

## Financing

- Seed: [[investment.lightspeed-paid-seed-2025]]，Lightspeed lead，FUSE/EQT participants。
- EQT seed participation: [[investment.eqt-ventures-paid-seed-2025]]。
- FUSE seed participation: [[investment.fuse-paid-seed-2025]]。
- Pre-seed: [[investment.eqt-ventures-paid-pre-seed-2025]]，EQT claims it led pre-seed; TechCrunch says €10M pre-seed in March. Exact original March source still should be separately verified.

口径冲突：官方 Paid / EQT 说 $21M seed；TechCrunch 说 $21.6M。记录为 $21M-$21.6M。估值 over $100M 仅 TechCrunch source familiar，不作为官方估值。

## Team

- [[person.manny-medina]]: Co-founder & CEO; Outreach co-founder background gives Paid immediate credibility in SaaS GTM/pricing conversations.
- [[person.raj-dosanjh]]: Co-founder/CTO; X and LinkedIn show YC W24, ex-Palantir, ex-Intercom.
- [[person.manoj-ganapathy]]: Co-founder; LinkedIn says former founder of Invoice IT, acquired by Salesforce; official Paid blog says built Salesforce billing.
- [[person.arnon-shimoni]]: Former co-founder per 2026 LinkedIn/personal page; monetization background at Storytel/Pleo fits Paid thesis.

## GTM Signal

Paid is unusually explicit about launch design. Its launch playbook says the company worked backward from a March 25 launch party, prepared PR/TechCrunch, manifesto/video/assets, founder posts, investor/customer attendance, and a one-week content calendar. It deliberately used Manny's network and investor help rather than broad press spray.

This is relevant to CP's prior product-launch takeaway: every public传播 should be treated as an elevator pitch. Paid operationalizes that: simple villain, sharp narrative, coordinated media, founder-network amplification, proof-oriented post-launch content.

## Evidence

Strong sources:
- [[source.website.paid-home]]
- [[source.blog.paid-seed-2025-09-28]]
- [[source.techcrunch.paid-seed-2025-09-29]]
- [[source.eqt.paid-seed-2025-09-29]]
- [[source.github.paid-node]]
- [[source.blog.paid-launch-playbook-2025]]
- [[source.sequoia.paid-pricing-podcast-2025-04-22]]

Profile / monitoring sources:
- [[source.linkedin.paid-company-2026-07-08]]
- [[source.x.paid-ai-profile-2026-07-08]]
- [[source.x.manny-medina-profile-2026-07-08]]
- [[source.x.raj-dosanjh-profile-2026-07-08]]
- [[source.linkedin.manny-medina-profile-2026-07-08]]
- [[source.linkedin.manoj-ganapathy-profile-2026-07-08]]
- [[source.linkedin.raj-dosanjh-profile-2026-07-08]]
- [[source.linkedin.arnon-shimoni-profile-2026-07-08]]
- [[source.website.arnon-shimoni-about]]

Weak/community source:
- [[source.hn.paid-agent-signals-2025-05-04]]: HN score 1, 0 comments. Only proves attempted HN/community distribution, not traction.
