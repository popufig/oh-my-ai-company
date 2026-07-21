> **一句话**：CoreSpeed 正在把用户的 OAuth 连接、工具、记忆、权限策略、支付与账单从单一 Agent 客户端中抽离，做成可跨 Claude Code、Codex、Cursor 等运行端复用的 access/control layer；方向有价值，但当前公开新产品仍停留在 early access，不能把官网动画当作已上线能力。

![CoreSpeed 官网首屏：一个设置，给不同 Agent 同一套访问能力](assets/corespeed/hero.png)

## TL;DR

- **CoreSpeed 现在卖的不是 Agent runtime，而是 [[concept.portable-agent-access-layer|Portable Agent Access Layer]]。** 2026-06-18 官方明确宣布转向：用户带来 Claude Code、Codex、Cursor、OpenClaw 或自建 Agent，CoreSpeed 负责 connectors、built-in tools、memory、policy、payments 与 billing。核心稀缺资源从“运行一个 Agent”变成“谁拥有跨 Agent 延续的身份、授权和组织上下文”。
- **新方向公开 shipped state 很弱。** 官网所有 CTA 都是 `Request early access`，点击后只有邮箱收集表单；没有公开控制台、connector directory、API/docs、pricing、Terms、Trust Center、DPA 或 subprocessor list。本轮没有注册私有账号，因此 1,000+ connectors、server-side policy、Agent Pay、One Bill 与 memory 都只能写为产品声明。
- **团队并非只有概念。** 历史上 CoreSpeed 做过 Agent-native runtime PaaS，并开源 Zypher。`corespeed-io/zypher-agent` 在 2026-07-21 有 334 stars、21 forks，近期仍有提交。这能证明团队持续交付技术资产，不能证明新的 access layer 已可用或已有客户。
- **真正的产品楔子是跨 Agent 的“访问连续性”。** Composio、Arcade、Pipedream Connect、Nango 已在 connectors/auth/tool runtime 上提供更成熟公开产品；CoreSpeed 的差异化主张是把 policy、memory、pay 和 one bill 一并做成用户可携带资产。差异点也恰好是当前最缺验证的部分。
- **融资关系只确认两条。** [[investor.baidu-ventures|Baidu Ventures]] 的公开稿称天使投资；[[investor.monad-ventures|Monad Ventures]] 官网确认 portfolio 关系。多份创始人/推广材料称累计融资数百万美元、处于 Seed++，但没有可靠轮次总额、单家金额或估值，因此不做分配。
- **团队当前确认三位 founder。** [[person.milton-yan|Milton Yan]]、[[person.hao-su-corespeed|Hao Su]]、[[person.spencer-zhao-corespeed|Spencer Zhao]] 均在 LinkedIn 当前关联信息中出现。LinkedIn 显示 11-50 人区间、9 名关联成员，这不是正式 headcount。
- **采用和流量仍是空白。** HN 在 2026-01-20 有一次旧 runtime 方向发布，仅 1 point、0 comments；Reddit exact-domain `verified_count=0`。Similarweb 仅显示 2026 年 4-6 月各月低于 20K visits，6 月环比下降 74.04%，样本太小且恰逢产品转向，不能推出客户、活跃或留存。

## 产品变化：从 runtime PaaS 到 access/control layer

### 2025：团队首先解决“Agent 怎么运行”

2025 年的 CoreSpeed 被公开材料描述为 Agent-native runtime PaaS：Zypher 负责 Agent framework，CoreSpeed 负责容器、认证、支付、部署和商业化。TechBullion、36Kr Global 和创始人网站都围绕这套叙事；Sarea、DeckSpeed、CalSpeed 等产品被用作 dogfooding 或分发案例。

这一时期最可验证的资产不是采访里的 cold start、融资或产品排名，而是公开 GitHub：Zypher 使用 Apache-2.0，仓库仍有近期活动。历史证据支持“团队做过 Agent framework/runtime”，但不能直接迁移成“当前 1,000+ connectors、policy/pay 已上线”。

### 2026-06-18：官方宣布新方向

[[source.x.corespeed-pivot-2026-06-18|官方转向帖]]明确说，Agent 变聪明后瓶颈变成 access 与 control；第一步从 X/Twitter 开始，让 Agent 提议真实动作，由用户批准后执行。[[source.x.milton-portable-assets-2026-06-18|Milton Yan 同日补充]]，identity、permissions、connections、memory 应成为跨 Agent 延续的个人数字资产。

这不是简单换 landing copy，而是控制点发生变化：旧产品控制 runtime，新产品试图控制 Agent 访问现实世界时使用的身份、凭证、工具、预算与策略。当前官网把范围扩展到 1,000+ connectors、built-in tools、memory、Agent Pay 和 One Bill，但仍处于 waitlist。

### Sarea：同一公司的可下载前台产品

[[company.sarea|Sarea]] 不是另一家独立融资公司，而是 CoreSpeed Inc. 运营的 macOS 多 Agent workspace。Sarea Privacy/Terms、footer、bundle ID 与 Developer ID signer 都指向 CoreSpeed；v0.13.0 安装包可下载、签名验证并启动，包内还能看到 ACP agent schema、六个 connector definition 和 browser/computer 工具。

这条产品线说明团队确实把 Agent、local context、connector、permission 与 gateway 组合进过桌面客户端，但不能反向证明当前 CoreSpeed 的 portable memory、server-side policy、1,000+ connectors、Agent Pay 或 One Bill 已向所有 Agent 客户端开放。最稳的分工是：Sarea 控制本地 workspace 与交互，CoreSpeed 新方向试图控制跨 workspace 的 access/control assets。融资关系继续挂在 CoreSpeed，不迁移到 Sarea。

## 当前产品模型

![CoreSpeed 把 connectors、tools、approvals、memory、payments 与 bill 放在同一控制面](assets/corespeed/control-surface.png)

| 模块 | 官网主张 | 本轮公开验证 | 当前证据等级 |
|---|---|---|---|
| Connectors | 1,000+ apps，一次 OAuth 授权，无需逐个申请 API app/key | 官网展示大量 logo，但无可搜索目录、connector docs、scope 表或账号内 smoke | **C：营销/设计声明** |
| OAuth 与凭证 | OAuth 2.0 scoped tokens，不接触密码，可单独撤销 connector | FAQ 有明确文字；没有 token storage、encryption、refresh、tenant isolation 与 incident 文档 | **B-/C+：官方设计声明** |
| Built-in tools | image/audio/video、search、scrape、mail、sandbox | 只有官网 UI，没有公开调用记录、SDK、状态页或错误语义 | **C** |
| Smart approvals | plain-English rule，自动批准、人工审核或阻断 | 2026-06 转向帖确认先从 X approval 开始；无账号内 action smoke | **C+** |
| Policy runtime | rule、LLM/classifier 或二者组合，server-side enforced，可看 tool/recipient/content/budget/memory | FAQ 说明较具体；没有 policy language、precedence、audit、rollback、false pass 数据 | **C+** |
| Memory | people/projects、写作风格、过去决策，切换 Agent 后保留 | 只有产品声明；没有 memory schema、来源、更新、纠错、导出或删除实测 | **C** |
| Agent Pay | 在用户设置的限额内付款 | 官网动画展示 `$00 of $000/mo` 等占位数字；无 processor、custody、授权、退款和争议条款 | **C** |
| One Bill | connectors 与 tools 汇总到一张账单 | 无 pricing、计量单位、账单样本或供应商转售条款 | **C** |
| Portable across agents | Claude Code、Codex、Cursor、OpenClaw、Hermes/custom | 官网与转向帖一致；没有公开安装方式、adapter 或迁移 smoke | **C+** |

### 1. Access：替 Agent 承担集成和授权税

CoreSpeed 试图让用户只对 CoreSpeed 授权一次，再把可用连接暴露给不同 Agent。对个人和小团队，这是把 API app、OAuth callback、token refresh、scope 管理和 connector 维护外包；对企业，这意味着 CoreSpeed 进入高敏感控制点，必须回答凭证隔离、数据驻留、管理员撤销和审计。

“1,000+”本身不是护城河证据。Composio 同样公开写 1,000+ apps，Pipedream Connect 写 2,700+，Nango 写 900+ APIs。真正差异应看 connector 的 action coverage、scope 最小化、故障恢复、授权 UX 和真实成功率，而不是 logo 数量。

### 2. Control：plain-English policy 代替逐次弹窗

官网把策略描述为 server-side runtime，可同时读取 tool、recipient、content、budget 和 memory，再决定 approve/review/block。这比“每次都弹一次确认”更接近 Agent 长期运行所需的 standing authorization。

但目前没有看到：规则优先级、版本、冲突处理、classifier 误判、用户/组织层继承、审计事件、撤销生效延迟、失败升级和 rollback。现阶段只能确认产品想解决这些问题，不能说治理闭环已经成立。

### 3. Portability：连接、记忆和策略不锁在 Agent 客户端里

![CoreSpeed 宣称切换 Agent 时保留 apps、memory、voice 与 policy](assets/corespeed/portable-layer.png)

这一层是 CoreSpeed 最有意思的判断：Agent 客户端可能快速更替，但用户授权过的 SaaS、常用联系人、偏好、历史决策和风险规则应该继续存在。它把“Agent identity”从 persona 扩展为一组可操作资产。

问题也随之出现：谁是这些资产的权威 owner；不同 Agent 的能力和风险是否等价；一个 Agent 获得的 standing authorization 能否无条件迁给另一个 Agent；删除、导出和迁移是否包含所有衍生记忆。这些都没有公开协议或实测。

## Availability：当前只有 early access

![CoreSpeed 的公开 CTA 只收集 early-access 邮箱](assets/corespeed/early-access.png)

本轮真实打开官网并点击 CTA，得到的只有邮箱输入框，文案是“Where do we send your access?”。没有出现创建账号、选择 Agent、OAuth 授权、connector catalog、policy builder、billing 或 sandbox。

因此当前最稳妥的状态不是“产品不存在”，也不是“1,000+ connectors 已上线”，而是：

1. 官网与 X 已公开新产品方向和交互设计；
2. 产品访问受 early-access 门禁限制；
3. 历史 Zypher/runtime 有公开技术资产；
4. 新 access layer 的核心能力没有公开可复现证据。

![CoreSpeed FAQ 覆盖 OAuth、切换 Agent、policy runtime 与撤销](assets/corespeed/faq.png)

## 安全、隐私与权限边界

### 已直接看到

- FAQ 声称使用 OAuth 2.0 scoped tokens，不读取密码；connector 可单独 revoke；用户可 export/delete data。
- Privacy Policy 对当前公开站点写得很具体：early-access 只收邮箱；收集页面/按钮分析、设备、IP 粗粒度位置与 session replay，文本输入会 masking；使用 PostHog US cloud 与 Cloudflare Turnstile。
- 官方把 policy enforcement 描述为 server-side，而不是只依赖 Agent prompt。

### 没有看到

- 面向生产 connector 数据的 Terms、DPA、subprocessor list、retention、encryption、tenant isolation、breach/incident response；
- SOC 2 / ISO 27001 / Trust Center、penetration test、status page、SLA；
- OAuth scope 列表、管理员 consent、organization policy、service account 与 offboarding；
- 支付处理方、资金托管、交易授权、退款、chargeback、责任与争议机制；
- policy audit log、版本、回滚、appeal 和 classifier eval。

Google 对 `site:corespeed.io security/SOC 2/DPA/subprocessors/terms` 的检索为 no-hit。no-hit 不能证明内部没有这些材料，但对一个要托管大量 OAuth token、支付和 memory 的产品，公开采购证据目前明显不足。

## 团队与公司

LinkedIn 公司页当前使用新定位“Give your AI agent safe access to the real world”，显示 Santa Clara、11-50 人区间和 977 followers；About 仍保留“Agent Native Infrastructure”“raised several million USD”“Seed+”“Backed by BV Fund”等历史叙事。

- **[[person.milton-yan|Milton Yan / Milton He Yan / 严訸]]**：创始人。个人站与投资方文章可交叉确认其 CoreSpeed 身份；公开采访与 X 是产品叙事的主要来源。
- **[[person.hao-su-corespeed|Hao Su / 苏豪]]**：CTO 与联合创始人。2026 年 X 历史内容显示他持续发布 Sarea 与 CoreSpeed gateway/runtime 相关进展。
- **[[person.spencer-zhao-corespeed|Spencer Zhao]]**：LinkedIn 当前关联为联合创始人；职责和加入时间公开信息有限。

LinkedIn people 页本轮返回 9 名关联成员，包括上述三位及 CMO/工程等角色。关联成员可能包含历史、自报或兼职关系，因此只作为团队候选，不写成“公司有 9 名正式员工”。

## 融资

| 投资方 | 可确认事实 | 保留边界 |
|---|---|---|
| [[investor.baidu-ventures|Baidu Ventures]] | 2025-07-24 多家转载稿称 CoreSpeed 完成其天使投资；LinkedIn 当前也写 Backed by BV Fund | 未披露金额；转载同源，不算多重独立证据 |
| [[investor.monad-ventures|Monad Ventures]] | Monad 官网文章明确把 CoreSpeed 写入其 portfolio，并介绍创始人和 2025 runtime 产品 | `Seed++` 出现在投资方/创始人材料中，但 schema 没有该标准轮次；不填写单家金额 |

TechBullion 采访与 36Kr Global 推广稿都称累计融资数百万美元，并出现“数千万美元估值”等表述。这些材料强依赖创始人/授权转载，缺正式 round announcement、SEC filing 或机构对金额的确认，因此只保留在正文，不结构化金额或估值。

## 采用、GTM 与流量

CoreSpeed 当前 GTM 很像 founder-led narrative + waitlist：X 账号在 2026-07 仍反复引导 early access，单条互动很低；新方向没有公开客户、部署、任务量、connector calls、付费、留存或客户侧 outcome。

历史方向有三类分发资产：Zypher 开源、Sarea/DeckSpeed 等自建产品、媒体/投资方对年轻创始人的故事。这说明团队擅长用产品矩阵做 dogfooding，但不能把 DeckSpeed/Product Hunt 或 Sarea 的指标迁移成新 access layer 的采用。

![Similarweb 对 corespeed.io 的 2026 年 4-6 月低样本估算](assets/corespeed/traffic.png)

Similarweb 在 2026-07-21 观察到：

- 4 月、5 月、6 月均只显示 `<20K`，没有可用精确月访问量；
- 6 月环比下降 74.04%；bounce rate 38.45%，pages/visit 1.10，平均访问时长缺失；
- 美国占估算桌面流量 100%，但在极小样本下不能解释为真实市场结构；
- no rank、no demographics、no competitors，说明数据覆盖不足。

6 月恰好发生方向宣布和站点切换，下降可能来自旧 runtime 页面流量消失、营销节奏或第三方估算误差。它只说明公开网站规模很小、波动大，不能说明产品 DAU、客户或收入下降。

社区侧同样稀薄：HN 旧 runtime launch 为 1 point/0 comments；Reddit 返回 4 个宽松候选，但 exact-domain `verified_count=0`。不能把候选数写成社区声量。

## 竞品与边界

| 产品 | 直接重叠 | CoreSpeed 可能差异 | 当前证据差距 |
|---|---|---|---|
| Composio | 1,000+ app tools、delegated auth、sandbox、tool execution | 面向最终用户的 portable memory/policy/pay/one bill | Composio 有公开产品与开发入口，CoreSpeed 新层仍 waitlist |
| Arcade | Agent authorization、OAuth/IdP、policy hooks、audit、MCP runtime | 更个人化、跨 Agent 的连接与记忆资产 | Arcade 公开 SOC 2、RBAC、audit 与部署选项；CoreSpeed 尚无采购证据 |
| Pipedream Connect | 2,700+ integrations、managed auth、proxy | 更完整的 policy/memory/payment control surface | Pipedream 连接器与开发者交付更成熟 |
| Nango | 900+ APIs、OAuth/API key/token refresh、sync、self-host | 不只做 integration runtime，而是用户层 portable control | Nango 公开 Trust Center、状态与运行边界更完整 |
| [[company.newcore|NewCore]] | Agent identity、task-scoped credentials、企业授权 | CoreSpeed 更偏个人/团队携带的 app access、memory、pay | NewCore 更接近 enterprise identity control plane |
| [[company.kylon|Kylon]] | Gateway/proxy、权限归因、跨 Agent 工作入口 | CoreSpeed 不试图成为完整 company workspace | Kylon 控制工作上下文；CoreSpeed 控制访问资产 |

CoreSpeed 不是传统 iPaaS 的简单重包装，因为它把用户 policy、memory 与 payment 放进同一主张；但在 shipped-state 证据出现前，它也不能被写成比 connector/auth 平台更完整的成熟控制面。

## 关键判断

1. **方向抓住了一个真实控制点。** Agent 客户端变化很快，而 OAuth consent、联系人、历史决策、预算与风险规则迁移成本高。谁拥有这些资产，谁可能成为不同 Agent 之间的稳定中间层。
2. **“portable”会放大权限问题，而不是自动解决。** 从 Claude Code 切到另一个 Agent 时，能力面和风险面都变了；原授权是否可迁移、谁批准、如何回滚，需要比普通 connector 平台更强的 policy contract。
3. **1,000+ connectors 是入场券，不是采用证据。** 公开市场已有 900-2,700+ 的同类目录。需要观察真实成功率、scope、恢复、延迟和高价值 action coverage。
4. **Pay 与 One Bill 是最有商业潜力、也是最危险的扩张。** 一旦 CoreSpeed 经手 Agent 支出、连接器费用和工具转售，它从授权中间件进入资金责任、争议、退款与合规；当前没有足够条款支持这层主张。
5. **历史技术资产提高团队可信度，但不能替代新产品验证。** Zypher 的 stars、forks 和近期提交是强 operational evidence；当前 access layer 仍需要账号内 smoke、客户侧和安全材料。
6. **当前不能用官网 logo、动画数字、LinkedIn 区间或媒体融资稿拼成规模结论。** 最关键的下一组指标是 activated users、connected accounts、successful actions、approval/intervention rate、cost per accepted action、retained workflows 和 security incidents。

## 待验证与更新触发器

- early access 开放后，完成真实账号内 connector OAuth、scope/revoke、policy、audit、memory export/delete smoke；
- 公开 connector directory、API/MCP/docs、SDK、pricing 与 usage meter；
- Terms、DPA、subprocessors、Trust Center、SOC 2、status/SLA；
- Agent Pay 的 processor、授权限额、退款/chargeback、ledger 与 custody 边界；
- 具名客户、客户侧 accepted outcome、人类介入率、部署时间与留存；
- 正式融资公告、精确 round total 或投资方对金额的确认；
- 当前团队与法律主体；
- Similarweb 跨过低样本阈值后再观察渠道与品牌词；
- Reddit/HN/中文社区出现可核验用户反馈时更新。

## 证据库

### 当前官方产品与边界

- [[source.website.corespeed-home-2026-07-21]]
- [[source.website.corespeed-privacy-2026-07-21]]
- [[source.x.corespeed-pivot-2026-06-18]]
- [[source.x.milton-portable-assets-2026-06-18]]
- [[source.google.corespeed-security-no-hit-2026-07-21]]

### 历史技术资产、团队与融资

- [[source.github.zypher-agent-2026-07-21]]
- [[source.linkedin.corespeed-company-2026-07-21]]、[[source.linkedin.corespeed-team-2026-07-21]]
- [[source.monad.corespeed-2025-09-05]]、[[source.ifeng.corespeed-baidu-2025-07-24]]
- [[source.36kr.corespeed-2025-11-14]]、[[source.techbullion.corespeed-2025-09-26]]
- [[source.website.milton-yan-2026-07-21]]

### 市场、流量与竞品

- [[source.similarweb.corespeed-2026-06]]、[[source.hn.corespeed-2026-01-20]]、[[source.reddit.corespeed-no-hit-2026-07-21]]
- [[source.website.composio-home-2026-07-21]]、[[source.website.arcade-home-2026-07-21]]
- [[source.website.pipedream-connect-2026-07-21]]、[[source.website.nango-home-2026-07-21]]
