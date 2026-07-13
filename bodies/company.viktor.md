# Viktor

Viktor 是一个跑在 Slack 和 Microsoft Teams 里的 AI employee。它的核心主张不是“回答问题”，而是连接公司的工具栈，直接完成报告、dashboard、内部 app、代码、campaign、浏览器操作和周期性工作流。

一句话：Viktor 把企业 agent 的入口放在协作工具里，把执行环境放在云端，把连接层放在 3,200+ 工具/OAuth/managed connectors 上。

## 产品定义

官网把 Viktor 讲成“Not a tool. A hire.” 它不是让用户去搭 workflow builder，而是让员工在 Slack/Teams 里像对同事一样发任务：拉数据、查网页、写代码、建 dashboard、部署内部工具、设置定时任务。

产品面包括：

- Slack / Microsoft Teams 原生入口。
- OAuth 连接 CRM、Drive、calendar、analytics、ad platforms、project management、version control 等工具。
- 云端 secure sandbox，用于执行任务、跑代码、操作浏览器。
- Scheduled tasks / crons，用于日报、周报、ad audits、anomaly alerts。
- Research & intelligence：搜索网页、浏览网站、读文档、交叉验证。
- App building：生成 dashboard、internal tools、calculator 等，带数据库、auth、hosting。
- Engineering：读 codebase、建 branch、写代码、开 PR、跑测试。
- Browser automation：填表、导航复杂 workflow、抓数据、截图。

## 为什么它贴“企业 agent”

Viktor 的强点不是模型能力本身，而是把 agent 放到企业已经工作的地方：Slack/Teams thread。它试图解决的是企业 agent 的三个 adoption 阻力：

1. 入口：员工不用进新系统，直接在协作工具里分配任务。
2. 上下文：从频道、工具、文档、历史对话里学习公司偏好和流程。
3. 执行：不只给建议，而是实际产出 PDF、spreadsheet、presentation、deployed app、code commit、automation。

这和 [[company.tasklet]] 这类个人/横向 agent workspace 不同；Viktor 更强调团队协作现场和企业工具栈。

## 融资与增长

公开新闻称 Viktor 2026 年 2 月 public launch，10 周内达到约 $15M annualized revenue run-rate / €12.9M revenue run-rate，并在 2026 年 5 月宣布 $75M / €64.7M Series A，由 [[investor.accel]] 领投。[[source.yahoo.viktor-series-a-2026-05-19]] 是本轮最有用的融资源之一，它补充了 Peter Albert 在 Meta 寻找 co-founder、遇到 Fryd，以及 Accel 看重 team-focused assistant 而非 personal helper 的细节。

参与方包括 Bek Ventures、Kaya VC、Inovo VC、Tenacity Capital，以及 Slack co-founders Stewart Butterfield / Cal Henderson、Vercel CEO Guillermo Rauch、Synthesia CEO Victor Riparbelli、Framer founders、Deel CEO Alex Bouaziz、Lenny Rachitsky、Harry Stebbings、DeepMind/Figma/Lovable executives 等。既有投资人包括 Leonis Capital、Oxford Seed Fund、Nat Friedman、Daniel Gross、Charlie Songhurst 等。

融资新闻还称 Viktor 已被 2,000+ organizations 使用；官网首页则写 “Trusted by 40,000+ teams”。这两个数字可能口径不同，暂不合并。

## 团队

创始人是 [[person.fryderyk-wiatrowski]] 和 [[person.peter-albert]]。多篇报道称两人是 former Meta engineers / Meta AI research 背景。Leonis Capital 文章说他们跟随 Llama 2 paper 找到两位创始人，2024 年夏天在公司还没有产品和收入时投了 technical conviction。

## 产品判断

Viktor 值得挖，因为它把“企业 agent”讲得非常接近 hiring：不是工具、不是 bot、不是 workflow builder，而是一个会加入团队、理解公司、承担结果的 AI employee。这个 positioning 很强，也解释了为什么它用 Slack/Teams 而不是独立 app 作为核心入口。

Similarweb 快照见 [[source.similarweb.viktor-2026-07-08]]。流量结构验证了 Viktor 的 GTM 不是单一渠道：Direct 很高，说明品牌/口碑/已知访问强；Paid Search、Paid Social、Display 都不低，说明它确实在买量和做 creator/paid promotion；Product Hunt、Luma、媒体/工具站和 app.viktor.com 路径说明 launch、活动、媒体和产品转化都在贡献。特别是 app.viktor.com 占出站 92.21%，是官网到产品入口的强信号。

但风险也很明显：

- 泛化程度过高：reports、apps、code、campaigns、browser automation 都做，可能导致能力边界不清。
- 安全信任：它要读公司频道、连接很多工具、执行不可逆动作；官网有 SOC 2 Type 1、CASA Tier 3、审批、SSO/RBAC/audit 等表述，但真实企业采购还要看 Type II、权限隔离和审计落地。
- 计费口径：credit-based pricing 容易和“AI employee”叙事冲突，用户会拿它和人力成本比，也会担心不可预测成本。
- 社区反馈里有人提醒应区分 “company brain” 和 “workflow agent”：前者 demo 容易兴奋但留存弱，后者因为嵌入真实流程更可能留存。

2026-07-08 抓到的 [[source.trustpilot.viktor-reviews-2026-07-08]] 显示 Viktor TrustScore 4.5 / 5，共 16 条评论。评论整体正面，反复提到 integrations、Slack/Teams 协作、Meta Ads/Shopify/keyword research/email segmentation 等工作流价值；同时也暴露 credits 消耗过快、长 thread 可能烧 credit 的风险。Trustpilot 只能作为 S3 用户反馈信号，不应单独证明真实留存或 ROI。

## 和我们关心的方向

Viktor 是 browser / 企业 agent 的好样本：

- browser layer：它明确说能操作真实浏览器，填表、导航、抓数据、截图。
- workflow layer：它把周期性任务、审批和自动化放在 Slack/Teams 协作现场。
- integration layer：3,200+ tools / OAuth / managed connectors 是核心壁垒之一。
- team memory layer：它试图在 workspace 层学习公司决策和偏好。

这家公司后续要重点体验产品：它说得很完整，但真正能不能稳定“做事”，需要用 Slack/Teams 实测。

## 证据

- [[source.website.viktor-home-2026-07-08]]
- [[source.website.viktor-product-2026-07-08]]
- [[source.website.viktor-security-2026-07-08]]
- [[source.website.viktor-pricing-2026-07-08]]
- [[source.website.viktor-use-cases-2026-07-08]]
- [[source.yahoo.viktor-series-a-2026-05-19]]
- [[source.techfundingnews.viktor-series-a-2026-05-20]]
- [[source.eu-startups.viktor-series-a-2026-05-20]]
- [[source.leonis.viktor-ai-employees-journey]]
- [[source.producthunt.viktor-2026-07-08]]
- [[source.reddit.viktor-slack-agent-feedback-2026-07-08]]
- [[source.trustpilot.viktor-reviews-2026-07-08]]
- [[source.linkedin.peter-albert-profile-2026-07-08]]
- [[source.similarweb.viktor-2026-07-08]]

## 投资网络补充（2026-07-08）

Viktor 的投资网络已单独沉淀到 [[note.viktor-investment-network-2026-07-08]]。

关键结构：

- [[investor.leonis-capital]]：2024 年夏天早期投资，当时团队在训练 AWA-1，没有产品、收入和常规 GTM；押的是 autonomous agent + persistent context 的技术确信。
- [[investor.bek-ventures]]：LinkedIn 自称是 Fryd / Peter 的 pre-seed backer，说明爆发前已有早期资本陪跑。
- [[investor.accel]]：2026 年 $75M Series A 领投，把 Viktor 作为 workplace agents / AI employee category bet。主负责 partner 是 [[person.zhenya-loginov]]。
- Slack cofounders Stewart Butterfield、Cal Henderson 作为 angels 参与，这对一个 Slack/Teams 里的 AI employee 是强语义背书。

研究判断：这轮融资不只是增长数据驱动，而是 early technical conviction + team workspace category thesis + Slack/enterprise operator network 的组合。

## 投资人相邻公司地图补充（2026-07-08）

沿 [[investor.accel]] / [[person.zhenya-loginov]]、[[investor.leonis-capital]]、[[investor.bek-ventures]] 往外挖，形成了一条相邻公司地图：[[note.viktor-investor-adjacent-map-2026-07-08]]。

重点种子：

- Accel/Zhenya：[[company.lovable]]、[[company.synthflow-ai]]、[[company.solda-ai]]。
- Leonis：[[company.kylon]]、[[company.general-analysis]]、[[company.scalestack]]、[[company.paysponge]]、[[company.introspection]]、[[company.qualgent]]。
- Bek：[[company.uipath]]、[[company.interloom]]、[[company.lace-ai]]。

初步判断：Viktor 所在网络不是单纯“Slack bot”，而是 AI production system / agentic automation / enterprise workflow context 的交叉点。
