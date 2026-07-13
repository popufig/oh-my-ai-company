# AIsa

AIsa 是一个面向 AI agent 的 resource / transaction network：它把 model gateway、skills/API marketplace、machine-readable discovery、x402/stablecoin payment、deployment/runtime 包在一个 agent 可调用的能力层里。

核心判断：AIsa 不是单纯 OpenRouter 替代品。更准确的定位是 agent 经济里的“资源发现 + 调用 + 计费 + 结算”层。这个 thesis 成立的前提是 agent 会成为真实资源消费者，并且 API、数据、SaaS 工具、模型、工作流都逐步变成可机读、可按调用付费的资源。

## TL;DR

- 产品命题：让 agent 发现资源、调用资源、按调用付费。官网、融资稿、Forbes 和 agent-card 都指向同一个叙事：AIsa 想做 agent economy 的 capability layer / transaction network，而不是单点工具。
- 当前产品面：模型聚合只是入口；更重要的是 skills/API、MCP / agent-card / ai-plugin / OpenAPI discovery、Bearer + x402 两套认证/支付路径，以及 SaaS/data/search/social/finance 等技能市场。
- 融资背书：2026-07-03 官方宣布融资总额 $6.5M，新 seed 由 [[investor.alibaba]] 与 [[investor.tribe-capital]] 共同领投，[[investor.draper-associates]]、[[investor.sumitomo-corporation]]、[[investor.saison-capital]] 参与。Forbes 同日独立报道，并给出 10 人团队口径。
- 团队画像：[[person.jordan-liu]] 是连续创业者，过往两段都和 wallet/payment infrastructure 相关；这解释了为什么 AIsa 不是从“模型路由”而是从“agent 支付/资源交易”来定义自己。
- 增长状态：仍早期。旧 Similarweb 快照显示流量只有千级/月，主要靠 Direct、LinkedIn、V2EX、GitHub/OpenClaw 生态和少量搜索；还没有看到强自然增长、SEO 或社区讨论飞轮。
- 最大不确定性：官方称 50,000+ registered agents，Forbes 称 20,000+ registered agents，两个口径未统一；还需要验证去重、活跃、调用量、付费转化和真实生产客户。

## 产品结构

AIsa 可以拆成五层：

1. Model gateway：统一接入 OpenAI、Anthropic、Google、DeepSeek 等模型，OpenAI-compatible `/v1/chat/completions` 是最容易理解的入口。
2. Skills / API marketplace：把 SEO、Gmail、Notion、SaaS Gateway、Twitter/X、YouTube、Finance、Search、Market Data、Media Gen 等能力包装成 agent 可调用资源。
3. Machine-readable discovery：`/.well-known/agent-card.json`、`mcp.json`、`ai-plugin.json`、`openapi.yaml` 让 agent 或 agent runtime 能发现 AIsa 的能力面。
4. Payment / settlement：Bearer 账号体系和 x402/HTTP 402 pay-per-call 并行；官网和 agent-card 都强调 fiat 与 stablecoin settlement。
5. Runtime / deployment：官网叙事里还包括 deployment / production-ready workflows，但当前证据更多来自官网和访谈，需要继续验证实际产品成熟度。

相关概念：[[concept.agent-resource-network]]、[[concept.agent-native-payments]]。

## 融资与投资网络

已建投资关系：[[investment.alibaba-aisa-2026-seed]]、[[investment.tribe-capital-aisa-2026-seed]]、[[investment.draper-associates-aisa-2026-seed]]、[[investment.sumitomo-corporation-aisa-2026-seed]]、[[investment.saison-capital-aisa-2026-seed]]。

官方融资稿和 Forbes 都确认 $6.5M 融资总额，Alibaba 与 Tribe Capital 共同领投，Draper Associates、Sumitomo Corporation、Saison Capital 参与。官方还称资金会用于扩工程团队、支付基础设施、onboard 模型/数据/API providers、加速 stablecoin settlement。

这组 investor 对 AIsa 的意义不只是钱：Alibaba 对云/模型/开发者生态有战略含义，Tribe Capital 代表硅谷 early growth 叙事，Draper/Sumitomo/Saison 分别补了 venture、产业和金融网络。

## 团队

- [[person.jordan-liu]]：Founder/CEO。LinkedIn profile 抓到的公开文本显示其定位是 “Resources and Payment Layer for AI Agents”。LinkedIn 访谈称他是 third-time founder，曾在东南亚做 PayPal-style digital wallet 并被上市公司收购，后做 blockchain wallet，月活做到 8M，投资方包括 Binance Labs 与 UTXO。该履历来自访谈，需要后续用更多来源交叉验证。用户此前确认 `https://x.com/jordanxliu` 不是 Jordan。
- Haonan Liu：旧卷宗记录其为 AIsa founding engineer，GitHub `liuhaonan00` 显示 “Founding Engineer from @AIsa-team”。
- Rain Tian：旧卷宗记录 LinkedIn 方向为 AI Infra/payment、institutional business、financial information。
- Sodiq Oluwafemi：旧卷宗记录其为 Growth Analyst / cybersecurity background。

团队判断：Jordan 的支付/钱包履历与 AIsa 的 agent payment thesis 高度一致；但团队边界需要继续清理，全职、兼职、顾问、LinkedIn 员工搜索结果不能混用。

## 增长与社区

旧 Similarweb 快照显示：2025-12 到 2026-05 六个月总访问约 31,331，月访问约 1,436，移动端占比约 67.69%，Direct 占 83.01%，Organic Social 6.67%，Organic Search 3.35%，Referral 1.37%。这说明当时还不是成熟增长飞轮，更像由直接访问、融资曝光、LinkedIn、V2EX、GitHub/OpenClaw 生态驱动的早期关注。

V2EX 上两条招聘帖很有用：2026-05-25 招 AI engineer / backend / growth engineer，2026-06-24 招 Developer Advocate。它们比官网更具体地暴露了 AIsa 的组织意图：既在做 agent infra，也在补 growth 和 devrel。

GitHub 组织显示 12 个 repo，包含 skills、x402 skill、API use cases、OpenClaw 相关项目和 Docs。OpenClaw 是需要继续盯的生态入口。

## 口径冲突与待核验

- Registered agents：官方融资稿称 50,000+ registered agents；Forbes 称 20,000+ registered agents。先同时保留，不能合并成单一事实。
- Agent-card：`https://aisa.one/.well-known/agent-card.json` 可抓到完整 JSON；但旧卷宗提到的 `https://api.aisa.one/.well-known/agent-card.json` 当前返回 404。
- LinkedIn company URL：旧触点是 `linkedin.com/company/aisaonehq/`；官网 JSON-LD sameAs 出现 `linkedin.com/company/aipayhq`。需要确认是否改名或旧链接。
- X profile：adapter 返回 `screen_name=AIsaOneHQ`、url 正常，但 name 字段显示为 `Alsa`，和 LinkedIn 访谈标题里的 “Alsa” 一致；可能是品牌字形/命名迁移，需继续确认。
- Similarweb/Semrush 数据来自旧卷宗快照，本轮没有重新抓取，先作为 legacy snapshot 保存。

## 关键来源

- 官网：[[source.website.aisa-home]]
- 官方融资稿：[[source.news.aisa-funding-2026-07-03]]
- Forbes 融资报道：[[source.forbes.aisa-funding-2026-07-03]]
- agent-card：[[source.agent-card.aisa-root-2026-07-08]]；API 子域 404：[[source.agent-card.aisa-api-2026-07-08]]
- GitHub：[[source.github.aisa-team]]
- V2EX 招聘：[[source.v2ex.aisa-hiring-2026-05-25]]、[[source.v2ex.aisa-devrel-2026-06-24]]
- Jordan LinkedIn：[[source.linkedin.jordan-liu-profile-2026-07-08]]、[[source.linkedin.jordan-liu-interview]]
- 旧流量快照：[[source.similarweb.aisa-2025-12-2026-05]]、[[source.semrush.aisa-2026-07-06]]

## 我的 takeaways

详见 [[note.aisa-product-takeaway]]、[[note.aisa-gtm-traction-risk]]、[[note.aisa-team-takeaway]]、[[note.aisa-source-cleanup]]。
