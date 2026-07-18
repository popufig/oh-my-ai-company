> **一句话**：Evose 是面向中大型组织的 AI 应用协作与治理平台，把 Agent、Workflow、知识库和模型统一发布到 IM 式工作台，再用权限、审计、观测、成本归因与私有化部署把它们送进生产。

![Evose 官网首屏与 IM 式 AI 工作台](assets/evose/hero.png)

## TL;DR

- **它不是一个职位型 AI 员工，而是 AI 组织的控制面。** 普通员工在 Workbench 调用 Agent，业务/产品在 Workspace 构建和发布，IT/安全在 Organization 管模型、成员、凭据、权限、成本与审计。最接近的已有概念是 [[concept.agent-company-control-plane|Agent 公司控制面]] 与 [[concept.agent-lifecycle-control-plane|Agent 全生命周期控制面]]。
- **真正产品楔子不是“更聪明的 Agent”，而是最后一公里 harness。** Evose 把低代码构建、知识、工具/MCP、工作台、排程、RBAC/ACL、观测和私有化放进一套系统，试图解决 demo 到 production 之间的交付与管控断层。
- **公开 launch 很新。** evose.ai 域名创建于 2025-11-25；官方 X 在 2026-05-07 宣布产品 live。创始人 3-4 月已谈企业落地，因此 launch 是公开发布节点，不是项目起点。
- **创始人与团队透明度低。** 当前只确认公开使用名为 [[person.bingo-agent|Bingo]] 的联合创始人，他同时自报为 Followin 创始人；另有 Hiko Qiu 在 X bio 中写参与 Evose/OpenCow，但角色未确认。没有可靠 LinkedIn 公司页、团队规模、法定姓名和完整履历。
- **商业化已经定价，但企业采购材料不成熟。** 云服务月付 $20/$200/$2,000，年付 $204/$2,040/$20,400；私有化页却复用同一组价格。Terms 不披露运营主体和司法辖区，App 页脚只写 Evose, Inc.。
- **最大的证据风险是“文档完成度高于可复现成熟度”。** 官网声称 SOC 2 Type II 已认证，安全文档却把它标为 Roadmap；文档称 iOS/Android SDK、Web SDK 与多渠道均支持，官网仍标 iOS/Android COMING，公开 CDN 和 API 路径本轮也无法按文档复现。
- **规模与采用尚不能判断。** 官网自报 5000+ 企业用户、99.9%、99ms 和 15+ 数据中心；创始人自报几家数百人企业和一个千人金融客户，但都没有具名客户、合同、活跃/付费/留存或独立证明。47K 官方 X followers 与 3-5 likes 的内容互动也严重错位。
- **本轮没有可靠融资、估值或投资方证据，也没有有效 Reddit/HN/微信/小红书口碑。** 不建立 investment 边，不把社区宽松搜索候选当声量。

## 产品：把企业 AI 从“散装工具”变成三层系统

Evose 官方把产品拆成三层：

| 层 | 主要用户 | 核心动作 | 主要对象 |
|---|---|---|---|
| Workbench | 普通员工、业务使用者 | 使用、协作、排程 | Agent、Chatflow、Workflow、模型、Library、Schedule |
| Workspace | 产品、开发、业务运营、空间管理员 | 创建、编排、发布、局部治理 | Prompt Agent、可视化流程、知识库、数据源、Tools/Skills、MCP/HTTP 插件 |
| Organization | IT、安全、组织管理员 | 全局供应与治理 | 成员部门、模型、凭据、API Key、组织工具、资源策略、观测与桌面审计 |

官方一句话边界是：组织层决定“有什么”，工作空间决定“怎么组装”，工作台决定“员工怎么用”。这个分层比“我们有很多 Agent”更重要，因为它把 AI 能力的供给、交付与消费分开，接近企业已有的软件治理心智。

### 1. Workbench：像发消息一样调用一支 AI 团队

首页展示一个 IM 式工作台：研究、运营、销售、设计、数据等 Agent 有持续身份；用户可以聊天、分任务、触发工作流、比较多个 Agent 回答，并沿同一对话建立分支。Library 允许分享、点赞、评论、收藏和继续他人对话，Schedule 则把定时触发放进同一入口。

这让 Evose 与职位型 AI employee 有明显差异：它不承诺某一个“销售员工”端到端负责结果，而是给组织一套统一入口，承载许多已经配置和授权的 AI 应用。

### 2. Workspace：同时做 Prompt Agent 与可视化编排

![Evose 同时提供提示词 Agent 与可视化 Workflow](assets/evose/agent-builder.png)

构建器提供两条路径：简单场景用角色提示词、模型、工具、知识和记忆配置 Agent；复杂场景用可视化节点连接 LLM、RAG、条件、循环、批处理、代码、HTTP、Agent、Workflow、MCP 与人在环路。官方文档还描述 Debug Trace、模型切换、热更新、版本发布和回滚。

这部分会直接碰到 Dify、Coze、Flowise，但 Evose 自己也明确说：1-10 人快速实验更适合这些工具。它想在构建器之上增加组织化交付，而不是只比谁的节点更多。

### 3. 知识与集成：企业数据进入 Agent 的共同底座

![Evose 知识库与语义检索界面](assets/evose/knowledge-base.png)

知识库宣称支持文件、网页、结构化数据与应用数据源，能从 Slack、Google Drive、Notion、飞书、企微、钉钉等同步内容，并通过 RAG 供 Agent/Chatflow 使用。

![Evose 内置应用与 MCP/HTTP 插件](assets/evose/integrations.png)

集成层同时提供内置应用、HTTP 插件、MCP 与 EvoTool marketplace。它的产品逻辑是：企业不是缺一个模型，而是缺模型安全地拿到上下文、工具和业务动作的统一入口。

### 4. 观测与治理：真正想卖给企业的部分

![Evose 官网观测面板示例，数字为演示数据](assets/evose/observability.png)

官方按组织、工作空间、资源、用户四个维度提供 Logs/Metrics/Traces，并宣称可以归因每次调用的 Credits、模型、工具、成本与延迟。原始日志/指标和 Trace 默认 30 天，聚合 1 年，审计最多 7 年；私有化可配置。

首页面板中的 4,637 对话、32.7M Token、90 活跃成员等均是 UI 演示，不能写成 Evose 真实采用。文档同时明确预算、错误率、P99 等自定义告警仍是 future support，说明“能看见”与“能自动治理”之间还有交付距离。

## 一个官网演示：输出很完整，但不要把样例当结果

![官网生成的 AI Agent 新品报告样例](assets/evose/sample-report.png)

官网用“分析近一周 X 上的 AI Agent 新品并生成网页报告和海报”展示 Agent 调工具、生成网页和图像的组合能力。这张图证明团队知道如何把复杂任务视觉化地讲清楚，但图中的 25+ 新品、40%、85% 等数字只是演示内容，不是可核验研究，也不是产品效果基准。

## 定价与商业模型

![Evose 公开年付定价](assets/evose/pricing.png)

2026-07-18 公开价格：

| 套餐 | 月付 | 年付 | Credits/月 | 席位/空间 | 关键差异 |
|---|---:|---:|---:|---|---|
| Pro | $20 | $204 | 4,000 + 每日刷新 100 | 2 人 / 1 空间 | 无限 Agent/Workflow、全部模型、基础分析 |
| Team | $200 | $2,040 | 40,000 + 每日刷新 100 | 50 人 / 50 空间 | RBAC/ACL、组织工具共享、组织分析 |
| Enterprise | $2,000 | $20,400 | 400,000 + 每日刷新 1,000 | 500 人 / 无限空间 | 私有模型集成 |

三个档位的价格、Credits 和席位大体按 10 倍放大，是非常清楚的 land-and-expand 包装。Team 把权限和组织分析作为升级点，说明收费对象不是 Agent 本身，而是协作规模与治理复杂度。

但 Self-Hosted tab 当前仍显示同一套卡片和数字；文档又说私有化没有平台 Credits 计费、模型成本由客户承担、标准上线 2-4 周。公开页没有许可证、实施费、支持 SLA 或真实合同边界，因此不能把 $20,400/year 当成已确认的私有化总价。

## 发布时间与 GTM

- **2025-11-25**：evose.ai 域名创建，Registrant Country 字段为 CN；
- **2026-03/04**：Bingo 已在 X 讨论金融、电商落地、信任赤字和 AnotherMe dogfooding；
- **2026-05-07**：官方宣布 Evose live，并发布 28.7 秒产品视频；
- **2026-05-15**：发布 Schedule 视频；
- **2026-05-20**：发布 X 内容工作流案例，Bingo 同日谈一个未具名千人金融客户；
- **2026-06-10**：参加新加坡 SuperAI，正式强调 enterprise harness 与 100-2,000 人客户；
- **2026-06**：Day1Global 播客用“算力/能力/入口/结果”框架解释产品位置。

### 当前 GTM 是 founder-led + 场景教育，而不是成熟口碑飞轮

Bingo 的公开表达反复围绕三件事：企业不缺 AI 能力，缺生产最后一公里；能力与安全必须同时成立；先通过创始人 dogfooding 打破信任赤字。SuperAI、SaaStr/美国考察和中文播客都服务于同一套 enterprise AI transformation 叙事。

官方 X 账号有 47,135 followers，却只有 24 条内容；当前三条产品帖子只有 3-5 likes。这个错位意味着 follower 数不能作为采用证据。Reddit、HN、微信和小红书也没有核验到有效讨论，Product Hunt 本轮被 Cloudflare challenge 阻断，未确认 launch。Evose 目前更像依赖创始人网络、会展、播客和私域销售，而不是已经建立公开社区口碑。

## 团队、客户与融资

### 团队

- **[[person.bingo-agent|Bingo]]**：公开确认的联合创始人；同时自报 Followin 创始人。没有找到法定姓名、LinkedIn、教育和完整工作履历。
- **Hiko Qiu**：X bio 写 “@Evose_AI - For AI organizations” 并同时构建 OpenCow；角色、雇佣关系和 founder 身份都未确认，因此不建立 founder 边，见 [[source.evose.hiko-profile]]。
- **其他团队**：LinkedIn 公司检索无结果；同名 AEC 公司 Evose 与本产品无关，不能借用其员工页。

### 客户与规模

官网自报 5000+ 企业用户、99.9% 可用性、99ms 平均延迟、15+ 数据中心；Bingo 自报“几家数百人企业”与一个千人金融客户。当前没有具名 logo、客户侧确认、活跃席位、付费账户、任务量、留存、续费或收入。最稳妥口径是：**团队声称已有企业实施，但公开采用证据仍为空白。**

### 融资

本轮没有找到 Evose 融资公告、投资机构 portfolio、可靠媒体报道、估值或数据库记录。公开缺失不等于未融资，但现阶段不创建 investment/investor 关系，也不能给出估值。

## 企业可信度审计：功能广，但采购链条有明显断点

### 1. 法律主体没有闭环

App 页脚写 Evose, Inc.，Terms 却只写“Evose platform 的 operating entity”，没有公司全称、注册地址和司法辖区；争议适用“运营实体所在地”法律，但所在地也未披露。Privacy 联系邮箱还是 support@evoseai.com，与主域 evose.ai 不同。

对个人 SaaS 这可能只是早期文档债务；对金融、医疗、政府和 500 席位 Enterprise，却会直接阻断采购、DPA、责任与争议处理。

### 2. 认证状态互相冲突

官网明确写“SOC 2 Type II 认证”，而 6-Layer Defense 文档把 SOC 2 Type II 标为 Roadmap。相同文档把 MLPS Level 2/3、GDPR、ISO 27001 标成勾选，却没有 Trust Center、证书编号、审计机构或报告下载。

因此只能写“厂商有这些安全声明”，不能写“已独立确认认证”。SOC 2 还存在一处直接冲突，必须优先核验。

### 3. 多渠道与 API 文档先于公开可复现状态

文档把 Web JS SDK、iOS/Android SDK、企业 IM、微信、小程序与 API 全部标为支持，官网导航却把 iOS/Android 标为 COMING。API 文档中的 Node/TS 与 Python SDK 也仍是 coming soon；本轮访问 /v1 资源与 OpenAPI 路径得到 404，示例 CDN 连接被关闭。

这不能证明私有化或授权客户环境不可用，但说明公开 developer experience 尚未达到文档承诺的即插即用状态。

![Evose 公开 App 仅到邮箱验证码登录](assets/evose/app-login.png)

本轮没有注册账号，因此真实 Agent 构建、运行、权限、审计、账单和多人协作都未验收。

## 竞品与相邻产品

| 类别 | 代表产品 | 与 Evose 的关系 |
|---|---|---|
| 企业协作型 Agent workspace | [[company.dust|Dust]] | 同样把公司知识、工具和多人协作放进统一 AI workspace；Dust 更强调可组合 Agent 与团队使用 |
| Agent 生命周期/数字员工平台 | [[company.ema|Ema]]、[[company.relevance-ai|Relevance AI]] | 都从构建延伸到部署、评测、观测与治理；Evose 更强调三层组织、IM 式工作台和私有化 |
| Agent 公司控制面 | [[company.teamday|TeamDay]]、Paperclip、Cofounder | 都把多个 Agent、上下文、预算/权限和任务放进一套管理面；Evose 更接近传统企业 IT 架构 |
| 低代码 Agent builder | Dify、Coze、Flowise | 在单团队构建层直接重叠；Evose 官方主动把小团队场景让给它们 |
| 企业大厂平台 | Microsoft Copilot Studio、Salesforce Agentforce、Google Agentspace/Gemini Enterprise | 组织治理、渠道、模型和生态的强对手；Evose 的机会是更中立、更快私有化和本地企业集成 |
| Agent framework | LangGraph、AutoGen、LangChain、LlamaIndex | 是底层/自研替代，不是同一购买层；Evose 自己也把它们归为“完全自建或嵌入产品” |

不应把 Similarweb 的 similar sites 或搜索共现直接当竞品。判断 direct competitor 的标准应是：同一买方（企业 IT/AI 负责人）、同一任务（跨部门部署与治理 Agent）、同一预算和可替代的上线流程。

## 关键判断

1. **Evose 选择的是更难但更值钱的一层。** Builder 很容易被模型和开源框架压价，组织级权限、审计、成本、私有化和变更管理更接近企业长期预算；但也要求更强交付、销售和合规能力。
2. **Workbench 是它把复杂控制面“交给普通员工”的关键。** 如果只有 Organization/Workspace，它会退化成 AI 管理后台；IM 式入口、Library 和 Schedule 才让治理资产真正被消费。
3. **目前最强证据是产品模型与文档，不是市场采用。** 三层架构、边界和部署决策写得很完整，但具名客户、活跃、留存、融资和第三方口碑几乎没有。
4. **文档与 shipped state 的差距是当前最大风险。** SOC 2、移动 SDK、Web SDK、公开 API、告警和私有化定价都出现冲突、planned 或无法复现。对早期产品可以理解，对 enterprise promise 必须严格核验。
5. **创始人的“四层模型”解释了商业意图。** Evose 不是卖算力，也不只卖 Agent 能力，而是争夺企业使用 AI 的统一入口；未来若继续走向“卖结果”，它还需要承担更强的任务效果、评测和责任闭环。
6. **目前不能用 X follower 或官网 5000+ 证明规模。** 真正需要的是 activated organizations、paid seats、weekly active users、production workflows、renewal 和 expansion。

## 主要风险与待验证

- Evose, Inc. 的法定全称、注册地、签约主体、DPA 与适用法律；
- SOC 2、ISO 27001、等保、渗透测试和 SLA 的证书/报告；
- 公开 App 中核心三层功能是否真实可用，SaaS 与私有化是否同版本；
- iOS/Android、Web SDK、企业 IM 和 API 当前真实交付状态；
- 5000+“企业用户”的定义：企业数、个人席位、注册还是活跃；
- 未具名数百人/千人客户的客户侧确认、上线范围与续费；
- Credits 的模型成本、刷新规则、超额计费和 Enterprise 实际合同；
- 团队全貌、Bingo 法定身份、Hiko Qiu 角色与 headcount；
- 融资、投资方和估值；
- 流量规模与渠道结构。本轮第三方流量入口登录态不可用，没有制造估算，见 [[source.evose.similarweb-unavailable]]；
- Product Hunt、中文开发者社区和独立用户反馈。

## 更新触发器

具名客户/案例、Trust Center 或证书、融资公告、团队 LinkedIn、API/SDK 可复现、移动端上线、定价变化、公开状态页、有效社区评价、第三方流量数据出现时更新。

## 证据库

### 官方产品与文档

- [[source.evose.homepage]]、[[source.evose.about]]、[[source.evose.pricing]]
- [[source.evose.docs-target-users]]、[[source.evose.docs-architecture]]
- [[source.evose.docs-observability]]、[[source.evose.docs-deployment]]
- [[source.evose.docs-security]]、[[source.evose.docs-channels]]、[[source.evose.docs-api]]
- [[source.evose.terms]]、[[source.evose.privacy]]

### 发布、创始人与采用自报

- [[source.evose.x-launch]]、[[source.evose.x-profile]]
- [[source.evose.bingo-profile]]、[[source.evose.bingo-superai]]
- [[source.evose.bingo-finance-client]]、[[source.evose.bingo-dogfood]]
- [[source.evose.podcast-day1global]]、[[source.evose.hiko-profile]]

### 实测、第三方与弱信号

- [[source.evose.app-smoke]]、[[source.evose.api-smoke]]、[[source.evose.whois]]
- [[source.evose.similarweb-unavailable]]
- [[source.evose.funding-search]]、[[source.evose.linkedin-scan]]
- [[source.evose.reddit-scan]]、[[source.evose.hn-scan]]
- [[source.evose.wechat-scan]]、[[source.evose.xiaohongshu-scan]]
- [[source.evose.producthunt-scan]]
