# Interloom

## TL;DR
Interloom 是一个面向企业运营团队的 AI operations platform。它不是再做一个前台聊天助手，而是把企业专家处理真实 case 的路径、决策、文档、人员和结果沉淀成 Context Graph / corporate memory，让 AI agents 在后续 case 里知道“公司过去是怎么把类似事情办成的”。

我的初步判断：Interloom 更像企业 agent 的组织记忆层和工作导航层。和 [[company.viktor]] 这类 Slack/Teams 里的 AI employee 相比，Viktor 更偏执行入口，Interloom 更偏执行背后的 context/work graph。

## 关键事实
- 官网：<https://interloom.com/en/>
- 成立：2024，HQ Munich。
- 融资：2026-03-19 宣布 $16.5M seed。
- 投资方：[[investor.dn-capital]] lead；[[investor.bek-ventures]] 参与；[[investor.air-street-capital]] continued backing。
- 客户：官方公开提到 Zurich Insurance、Fiege、Volkswagen Group Services。
- 团队规模：LinkedIn 公司页显示 11-50 人；LinkedIn 融资帖称团队 20+，分布 Berlin / Amsterdam / Munich。
- 产品关键词：Context Graph、MemoryRank、Operations Orchestration、corporate memory、Navigation System for Work。

## 进入视野
Interloom 是从 [[company.viktor]] 的投资人相邻网络里挖出来的。我们在研究 Viktor 投资方和相邻 portfolio 时，看到了 [[investor.bek-ventures]] 的 portfolio 页面，其中 Interloom 被 Bek 描述为 `Navigation System for Work`，帮助企业 map how teams actually work，并基于 precedent 给运营团队和 AI agents 提供下一步行动与上下文。

它进入视野的原因不是“同一个赛道竞品”这么简单，而是它补上了企业 agent 图谱里的另一层：Viktor 更像 Slack/Teams 里的 AI employee 执行入口，Interloom 更像 AI employee 背后的企业工作记忆 / Context Graph / operational routing layer。这个相邻关系记录在 [[note.viktor-investor-adjacent-map-2026-07-08]]。

## 产品怎么工作
![Interloom homepage hero showcase](assets/interloom-home-hero-showcase.png)

Interloom 从 shared inbox、ticketing、systems of record，以及 Email、Slack、WhatsApp、Voice agents、Chatbots 等入口接入运营工作。它把这些工作组织成一个 operational workspace，让领域专家和 AI agents 在同一个界面里处理 case。

每次处理完成后，resolution 会进入 Context Graph，记录 cases、decisions、documents、agents、experts、outcomes。这个图不是静态知识库，而是企业实际工作流的记忆。

## 核心机制：先例驱动的路由
![Interloom Operations Orchestration section](assets/interloom-home-operations-orchestration.png)

Interloom 的“导航”不是搜索答案，而是基于 precedent 找下一步行动：

1. 找相似的成功 case。
2. 找当时用到的人、agent、文档、决策。
3. 把任务拆成 procedure。
4. 路由给合适的 expert、agent、integration 或 handoff path。

这也是它和普通 RAG / enterprise search 的区别。RAG 主要回答“资料在哪里”，Interloom 想回答的是“这件事在我们公司应该怎么办”。

## MemoryRank
![Interloom MemoryRank section](assets/interloom-home-memoryrank.png)

MemoryRank 是 Interloom 用来表达“工作导航”的核心概念：每个成功 case outcome 都会强化系统，系统记住当时哪些上下文有用、哪些路径有效、哪些人或 agent 参与解决。官方用 Google Maps for work 类比，意思是每条完成路线都会让下一次路线更聪明。

## 产品截图
下面保留一张官方 Press 页的截图总览，方便快速看产品形态。四张高分辨率原图已经存入 assets，不在正文里全部展开，避免正文过重。

![Interloom product screenshots from official Press page](assets/interloom-press-product-screenshots-grid.png)

已存的官方原图：
- Context Graph：`assets/interloom-context-graph.png`
- Case Detail View：`assets/interloom-case-detail-view.png`
- Workflow Canvas：`assets/interloom-workflow-canvas.png`
- Procedure Detail：`assets/interloom-procedure-detail.png`

Logo / wordmark 已存：`assets/interloom-wordmark.svg`。目前不放正文，除非后续做视觉卡片或报告封面。

## 团队
- [[person.fabian-jakobi-schmidt]]：CEO and Co-Founder。Press 页称其曾 co-founded Boxplot，后被 Hyperscience 收购。
- [[person.erik-collinder]]：Head of Design and Co-Founder。
- [[person.jaime-dario-madrid]]：Head of Sales and Co-Founder。
- [[person.miha-erzen]]：Head of Engineering and Co-Founder。Press 页称其曾 co-founded Boxplot，后被 Hyperscience 收购。
- [[person.alex-charest-weinberg]]：Head of Product。
- [[person.volker-benser]]：Head of Finance。
- [[person.matthaeus-widmann]]：Head of Growth。

## 融资与投资关系
- [[investor.dn-capital]]：seed lead，相关投资人 [[person.guy-ward-thomas]]。
- [[investor.bek-ventures]]：seed 参与方。LinkedIn 融资帖写 “led by DN Capital and Bek Ventures”，官网 seed announcement 写 Bek participation；这里按官网公告的更严格口径处理，同时保留冲突。
- [[investor.air-street-capital]]：existing investor，seed 时 continued backing；相关人 [[person.nathan-benaich]]。

## GTM 信号
Interloom 看起来不是 Product Hunt / HN 式公开开发者增长路线。公开 X 账号规模很小，但官网、Press 和 LinkedIn 更像 enterprise/FDE 路线：

- 官网 CTA 写 forward-deployed Interloom engineer。
- 已公开客户是 Zurich Insurance、Fiege、Volkswagen Group Services 这类企业。
- Head of Sales 的官方描述指向 insurance、logistics、banking、real estate。
- 产品需要接入企业内部 systems of record、ticketing、邮件/聊天/工单等数据，部署深度较高。

这类公司不能只看 Similarweb 或 public social。关键指标更可能是客户案例、投资人网络、招聘、LinkedIn 传播、企业实施能力。

## 监控
- 公司 X：[[touchpoint.x.interloom]]，已加入 Twitter/X list `AI Product`。
- 创始人 X：[[touchpoint.x.fabianjakobi]]，已加入 Twitter/X list `AI Founder`。
- LinkedIn 公司页：[[touchpoint.linkedin.interloom]]，比 X 更可能出现融资、客户、招聘、团队规模等企业侧信号。
- 官网博客：[[touchpoint.interloom-blog]]，适合持续看产品叙事和案例更新。

## 待验证
- 实际部署周期和客户 ROI。
- Context Graph 如何从邮件、工单、电话转录中抽取结构化决策路径。
- 和 process mining、RPA、enterprise search、knowledge graph、workflow orchestration、agent platform 的差异边界。
- 是否有更多 demo / case study 能证明 MemoryRank 不只是叙事概念。

## 证据
- [[source.website.interloom-home-2026-07-08]]
- [[source.website.interloom-about-2026-07-08]]
- [[source.blog.interloom-planning-new-search-2026-07-08]]
- [[source.blog.interloom-seed-announcement-2026-03-19]]
- [[source.website.interloom-press-2026-07-08]]
- [[source.linkedin.interloom-company-2026-07-08]]
- [[source.linkedin.interloom-seed-post-2026-03]]
- [[source.x.interloom-profile-2026-07-08]]
- [[source.x.fabianjakobi-profile-2026-07-08]]
- [[source.bek.portfolio-interloom-2026-07-08]]
