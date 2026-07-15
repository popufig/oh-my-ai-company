> **一句话**：Pancake 是运行在 Slack 里的 AI 公司协作者，以 OpenClaw 为执行 runtime，在每家公司独享的环境中编排销售、内容、工程与运营 Agent squad；它卖的不是一次回答，而是带审批、升级与持续记忆的渐进式公司自治。

![Pancake 官网首屏：AI employee that does the work for you](assets/pancake/hero.png)

## TL;DR

- **产品形态**：人仍通过 Slack 定方向和批准高风险动作；Pancake 维护 company brain，把目标拆给多个持久 Agent，并通过浏览器、邮箱、GitHub、Google Workspace 等工具执行。它比单一 AI coworker 更接近 [[concept.agent-company-control-plane]]，但治理主要依赖产品自述，尚缺公开的 action-level policy 与审计样本。
- **公司谱系**：Pancake 不是一轮新融资对应的新法人。Terms 明确服务由 [[company.basalt|Basalt AI Inc.]] 运营；两位创始人和核心团队也来自 Basalt。2025 年 500 万美元 seed 应挂 Basalt，不应直接画成 Pancake 投资边。
- **起量路径**：2026-05-27 由 Francois 在 LinkedIn 公开发布，帖子获得约 821 次反应、224 条评论和 30 次转发；05-28 登上 Product Hunt 当日 #1，634 points。7 月又集中上线大量竞品比较与品类词文章，形成“创始人社交网络 + PH 放大 + SEO/GEO 内容集群”。
- **规模判断**：官网称 600+ companies；发布帖称 50% beta users 每日使用；官方博客自报当前约 30K MRR、每月 500-700 美元 Agent/工具成本。三组口径均来自厂商，定义、样本与账期未公开。LinkedIn 只支持 2-10 人区间。
- **流量判断**：第三方估算显示 2026 H1 根域总访问口径约 28.6K，当前月访问约 8.4K；含子域约 9.5K/月。直接与社交流量占主导，搜索仍小且 64% branded。当前是早期 launch traffic，不是成熟的自然需求规模。
- **最大风险**：官网说 any model / model-agnostic，隐私政策却称 Anthropic 是处理 Google 用户数据的唯一 sub-processor；官网写 SOC 2 compliant，但本轮没找到可审阅的 Trust Center 或报告。二者都应视为需要继续核验的合规边界。

## 它解决什么问题

Pancake 面向已有产品、工具栈和业务上下文的独立创始人及小团队。它不负责从一个 prompt 直接生成一家新公司，而是把现有公司的重复运营工作逐步交给 Agent：

- GTM：找潜客、写 outbound、追踪回复、升级高意向线索；
- 内容：写博客和比较页、更新旧内容、追踪 AI 搜索引用；
- 工程：读 GitHub、分流 issue、总结 PR、协调发布；
- 运营与财务：处理 Stripe 事件、账单异常、周报和催款草稿；
- 支持：读取邮件、基于文档起草回复、把边缘问题升级给人。

这与 [[company.nanocorp]] / [[company.polsia]] 的 company factory 不同：后者从零创建并运营微型公司，Pancake 更像 existing-company operating layer。它与 [[company.viktor]]、[[company.cofounder]] 是更直接的产品对照。

## 产品架构：一个入口，三层执行

![Pancake 把 founder、coworker 和专业 Agent squad 组织成公司结构](assets/pancake/team-map.png)

官方把系统拆成三层：

1. **Coordination**：Slack 是决策、状态、审批和升级入口；
2. **Execution**：不同 squad 有持久 session、职责 brief、目标和反馈循环；
3. **Integration**：API、webhook、browser automation 与用户账号让 Agent 真正完成动作。

官网称每家公司有独享 pod、50GB storage、持久 Agent profile、加密 secrets、浏览器与长任务能力；底层以 OpenClaw 为 runtime。这里真正的产品价值不是“多 Agent”本身，而是把 runtime、身份、账号、公司记忆和人类升级路径打包成可直接使用的 operating environment。

![Slack 中的每日 briefing 与待人工处理事项](assets/pancake/slack-digest.png)

### 渐进式自治，不是无人公司

Pancake 官方明确反驳“一键自治”：先交出低风险、可重复的任务，再逐步增加 squad 和 standing workflow。Francois 公开称团队当时让 Pancake 自动运行公司 50%-60% 的工作，目标 80%；官方文章则用“Agent 做 80%，人做 20%”描述理想状态。

这些百分比没有统一分母，不能跨公司比较。更可靠的观察是它保留五类人类工作：关系型销售、异常与边缘情况、模糊战略判断、物理世界操作、长期愿景。[[concept.progressive-company-autonomy]]

## 定价与真实使用成本

![Pancake 当前定价页](assets/pancake/pricing.png)

- 基础平台费：49 美元/月；
- token pack：最低 50 美元，页面示例合计 99 美元/月；
- 首次提供 100 美元 credits；
- 厂商称 token 按模型实验室公开价、没有平台 markup，未用余额 rollover；
- “unlimited sub-agents”指可并行创建 Agent，不代表 token 或外部工具无限使用；
- iMessage 与 Agent credit card 仍标为 Soon。

官方博客自报当前公司每月约花 150-400 美元 LLM tokens，加上 SaaS 与 hosting 后约 500-700 美元。这是 Pancake 自身的内部 benchmark，不是普通客户的平均账单。

## 产品成熟度与操作边界

Open Roadmap 是很有价值的 maturity receipt：Email Agent Squad 仍 in progress，Linear 双向同步和 UX research squad 为 planned，voice briefing、Notion import 等仍 open；页面也出现明显垃圾提案，说明公开 board 的治理仍较轻。

本轮只打开未登录入口，确认 email / Google 登录路径存在，没有注册、连接 Slack 或创建 workspace，因此不能把官网 demo 当成已实际验收的产品能力。

Terms 进一步收紧了承诺：AI 输出可能不准确，用户负责 review 和 validation；服务可随时修改、暂停或终止，总责任上限不超过用户已支付金额。也就是说，“finished work”是购买语言，最终业务责任仍由用户承担。

## 安全、数据与身份

![Pancake 官网对 secrets、独享环境和用户账号的说明](assets/pancake/security.png)

已核实的官方披露：

- 传输使用 TLS/SSL，静态数据声明 AES-256；
- GCP 美国区托管；
- OAuth token 存在加密 secrets store；
- Google 用户数据为完成任务最多保留 14 天，账号/日志另有各自期限；
- Google 数据会交给 Anthropic 处理，政策称不用于训练；
- Gmail、Drive、Docs、Sheets、Calendar、Contacts 都可能获得读写或管理权限。

需要继续核验：

- 官网首屏写 SOC 2 compliant，但本轮未取得报告或 Trust Center；
- 定价说可选 Claude/GPT/Gemini，隐私政策在 Google data 场景只列 Anthropic。可能是政策更新滞后或分场景路由，但当前不能替厂商消除矛盾；
- “用户账号保持归用户”不等于动作风险消失。Agent 可代表用户发邮件、改文件和管理日历，审批、限额、撤销与审计能力仍是后续产品体验重点。

## 从 Basalt 到 Pancake

[[company.basalt]] 由 [[person.guillaume-will-marquis]] 与 [[person.francois-de-fitte]] 创办，最初做 collaborative AI engineering platform：实验 prompt、评估输出、监控生产错误。2025-12-02，它宣布 500 万美元 seed，由 [[investor.entourage]] 与 [[investor.peak]] 联合领投，[[investor.alpha-star]]、[[investor.kima-ventures]]、[[investor.hexa]] 参与。

Pancake Terms 明确法律运营方仍是 Basalt AI Inc.，当前团队成员与 Basalt 高度重合。因此最稳妥的建模是：

- Basalt：公司/法人及历史产品；
- Pancake：当前对外产品主体；
- 500 万美元：只建到 Basalt 的投资边；
- 两者通过创始人、Terms 和正文产品谱系连接。

公开材料没有明确写“Basalt 已关闭”“完成 rebrand”或“Pancake 独立融资”，所以不做这些推断。

### 团队

- Guillaume（LinkedIn 当前显示 Will Marquis）：此前创办 Virtual Brain、Blockpulse；Basalt 时任 CEO / co-founder；
- Francois de Fitte：此前创办 Popchef；当前公开身份为 Pancake cofounder；
- LinkedIn company top card 给出 2-10 人区间。人员页返回 9 个候选，但混入 Peak 的两位投资人，不能把结果数量当团队人数；可见真实团队信号包括 founding engineer 与 founding GTM。

## 增长与 GTM

### 1. 先用 founder network 做公开发布

Francois 的 LinkedIn 约 2.1 万 followers，远高于产品 X 的约 287 followers。05-27 launch 帖用个人经历、OpenClaw 触发和“一人军队/十人跨国公司”的品类叙事发布，并给出 50% beta users daily-use 的采用信号。传播主阵地是 founder LinkedIn，而不是产品账号。

### 2. Product Hunt 负责第二次放大

![Pancake Product Hunt launch 与早期评论](assets/pancake/product-hunt.png)

05-28 Product Hunt 正式 featured，获得当日 #1、634 points、约 1.2K followers。第三方流量估算也显示 Product Hunt 是主要 referral 来源之一。PH 在这里不是冷启动起点，而是紧随 founder launch 的放大器。

### 3. 7 月迅速铺设品类与竞品搜索面

Blog 在 07-06 至 07-12 集中出现大量文章：autonomous company、AI co-founder、OpenClaw hosting、zero-headcount，以及 Pancake vs Cofounder/Viktor/Polsia/Paperclip/NanoCorp 等比较页；不少条目仍显示 Invalid Date。

这说明内容 Agent 已经成为真实 GTM 机制，也说明文章数量不能直接等于内容质量。当前自然搜索只占约 11%，且 64% 搜索为 branded；7 月内容集群的排名、non-brand traffic 与转化仍需后续观察。

## 流量与规模感知

![Pancake 第三方流量快照](assets/pancake/traffic.png)

第三方估算（2026 H1，全球）：

| 口径 | 根域 | 含子域 |
|---|---:|---:|
| 界面总访问 | 28,598 | 28,598 |
| 当前月访问 | 8,425 | 9,533 |
| 月独立访客 | 4,569 | 4,320 |
| 平均时长 | 00:36 | 02:04 |
| 页/次 | 1.51 | 2.21 |
| 跳出率 | 74.97% | 56.08% |

根域渠道：Direct 61.07%、Organic Search 10.90%、Referral 6.02%、Organic Social 21.75%。含子域后结构近似；出站主要指向 Slack 与 Composio，表明授权/连接路径存在，但不能推出完成激活、付费或留存。

流量仍小，国家集中在法国与美国，也符合巴黎技术团队和旧金山总部的双中心背景。当前最重要的后续指标不是总访问，而是 7 月内容集群能否带来 non-brand search，以及 600+ companies 中多少是 activated、retained、paying。

## 社区反馈

- Product Hunt 只有 3 条 5 星评论；两条明确来自 early user，另一条是发布祝贺。样本太小且 launch bias 强，但其中一位用户确实描述了 inbound/AI SDR 与 self-improving landing page 使用；
- Reddit 与 Hacker News 的精确域名检索均为 0；
- 小红书有一篇中文产品分析，8 likes、5 collects、0 comments，属于二次介绍而非客户评价；
- 微信精确组合检索没有发现相关中文文章；
- 官网 8 条 X testimonial 都集中在 06-09，文案结构高度相似，应先视为 launch/campaign evidence，不能直接当独立口碑样本。

因此当前能确认“发布和分发成功”，不能确认广泛独立口碑。

## 关键判断

1. **Pancake 的差异不是更多 Agent，而是把 OpenClaw 变成 company appliance。** Slack、独享 pod、company brain、用户身份与预制 squad 共同降低自建门槛。
2. **Basalt 的 AI reliability 经验可能是隐藏资产。** 旧产品做 experiment/evaluate/monitor，新产品做 autonomous execution；如果把 observability 真正带入 Agent control plane，会比纯 OpenClaw wrapper 更有壁垒。公开路线图里的 observability 仍只是早期用户诉求，尚不能确认已经完成继承。
3. **它的传播能力已强于当前流量规模。** Founder LinkedIn 与 PH 在两天内完成 launch，7 月内容集群抢占品类词；产品 X 和独立社区口碑仍弱。
4. **“30K MRR、600+ companies、50% beta DAU”提供了方向，但不是同一漏斗。** 三个数字定义不同，不能拼成转化率或 ARPU。
5. **最需要追踪的是治理细节。** 哪些动作可自动发送/合并/部署/付款，审批是否逐次或 standing，失败如何回滚，谁能看审计记录，这些决定它能否从 founder toy 进入真实公司系统。

## 待验证

- 600+ companies 的 activated、paying、retained 定义；
- 30K MRR 的账期、是否属于 Basalt/Pancake 同一收入线；
- SOC 2 报告类型、审计范围与有效期；
- 模型路由与 sub-processor 清单为何不一致；
- Basalt 旧产品是否停止、客户与技术资产如何迁移；
- 7 月 SEO 集群的 non-brand ranking、自然流量和注册转化；
- 实际产品中的审批、权限、审计、rollback 与 failure paths。

## 证据库

### 官方 / 一手

- 官网：[[source.pancake.homepage-2026-07-15]]
- 定价：[[source.pancake.pricing-2026-07-15]]
- Terms / Privacy：[[source.pancake.terms-2026-07-15]]、[[source.pancake.privacy-2026-07-15]]
- Roadmap：[[source.pancake.roadmap-2026-07-15]]
- 发布：[[source.pancake.linkedin-launch-2026-05-27]]、[[source.x.francois-pancake-autonomy-2026-05-27]]
- 运营方法与自报经营数据：[[source.pancake.blog-autonomous-stack-2026-07-06]]
- Blog 内容集群：[[source.pancake.blog-index-2026-07-15]]
- 官方竞品定位：[[source.pancake.viktor-comparison-2026-07-15]]

### 强第三方

- Product Hunt：[[source.pancake.producthunt-launch-2026-05-28]]、[[source.pancake.producthunt-reviews-2026-07-15]]
- Basalt 融资：[[source.peak.basalt-seed-2025-12-02]]、[[source.hexa.basalt-seed-2025-12-02]]
- LinkedIn：[[source.linkedin.pancake-company-2026-07-15]]、[[source.linkedin.pancake-employees-2026-07-15]]
- 第三方流量：[[source.similarweb.pancake-2026-07-15]]

### 社区与空检索

- [[source.reddit.pancake-search-2026-07-15]]
- [[source.hn.pancake-search-2026-07-15]]
- [[source.wechat.pancake-search-2026-07-15]]
- [[source.xhs.pancake-analysis-2026-07-08]]

