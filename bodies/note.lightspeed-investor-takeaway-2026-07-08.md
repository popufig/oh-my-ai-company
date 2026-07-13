# Lightspeed 投资机构 takeaway

这次看 Lightspeed 的结论：它适合作为我们“从投资机构扩张 company seed”的第一批主线之一，优先级高于泛泛看大基金名录。

## 核心判断

Lightspeed 的价值不是“有钱”或“名气大”，而是它在 AI/agent infra 上有连续 thesis：
- agent monetization / billing：[[company.paid]]，[[concept.agent-monetization-infra]]
- agent search / retrieval：[[company.exa]]
- durable execution / production reliability：[[company.temporal]]
- AI coding security / validation：[[company.endor-labs]]，[[concept.agent-validation-layer]]
- enterprise workflow agents / AI services：[[company.reindeer-ai]]、[[company.resolve-ai]]，[[concept.ai-services-work-replacement]]
- AI training data supply：[[company.luel]]

## 后续怎么用

下一步不应该“扫完整 Lightspeed portfolio”，那会太大。应该从 Lightspeed 已写出来的 thesis 反推公司：
1. 先挖 Paid，因为它和 AIsa 同属 agent economy，但切的是 monetization/billing。
2. 再挖 Exa，因为 agent search/retrieval 是所有 browser/research/coding/GTM agent 的公共基础设施。
3. 再挖 Temporal，用它理解成熟基础设施如何被 agent 时代重新定价。
4. Resolve/Reindeer/Luel 作为第二批。

## 工具/建模发现

这次补了 `source.item.about_investor` 字段。之前 source 只能挂 company/person，不适合投资机构调研；现在可以把 official thesis、portfolio page、fundraise article 结构化挂到 investor。

还需要补 `touchpoint.owner_investor`，否则 Lightspeed Stories、AI Research Hub、partner X/LinkedIn 这些持续入口无法结构化挂到 investor，只能写在 body 里。

Evidence: [[source.businesswire.lsvp-fundraise-2025-12-15]], [[source.lsvp.billing-ai-agents-2025-03-06]], [[source.lsvp.paid-investment-2025-09-29]], [[source.portfolio.lightspeed-exa-2026-05-20]], [[source.portfolio.lightspeed-temporal-2026-02-17]], [[source.lsvp.luel-seed-2026-05-15]].
