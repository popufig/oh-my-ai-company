> **一句话**：Sarea 是 CoreSpeed Inc. 运营的原生 macOS 多 Agent 工作空间，把 Claude Code、Codex、Gemini、GitHub Copilot 和 Pi 通过 ACP 放进同一界面，并提供本地文件、工具连接、浏览器、computer use、技能与定时自动化；可下载的 v0.13.0 客户端证明产品已交付，但 wallet、统一支付和大规模采用仍缺可复现证据。

![Sarea v0.11.0 官方 onboarding：选择 Agent、连接工具并打开项目](assets/sarea/hero.jpg)

## TL;DR

- **Sarea 不是一家独立融资公司，而是 [[company.corespeed|CoreSpeed Inc.]] 的产品。** 官网 footer、Privacy、Terms、下载包 bundle ID 和 Developer ID 签名共同指向 CoreSpeed；Sarea 应单独建产品主体以保留产品入口与证据，但不继承或复制 CoreSpeed 的投资关系。
- **公开 shipped state 比 CoreSpeed 新 access layer 强。** `sarea.ai/download` 当前直接下发 211 MB 的 v0.13.0 DMG；应用为 universal macOS binary，bundle ID `io.corespeed.Sarea`，CoreSpeed Inc. Developer ID 签名、hardened runtime 和严格签名验证均通过，实机可启动且没有立即崩溃。
- **Sarea 是本地 workspace，CoreSpeed gateway 是可选 broker。** Privacy 与包内 agent schema 一致：第三方 API key/OAuth token 默认保存在本机；用户可让 Claude/Codex 等直接读取自己的 credential store，也可选择 CoreSpeed gateway，由后者做认证、计量与账单元数据处理。
- **包内可验证的 connector 面只有 6 个 catalog definition。** 当前 v0.13.0 明确打包 Linear、Notion、Slack、Exa、Apify 和 doola；官网展示 Slack、Figma、Linear、Notion、X、Asana、HubSpot 等更多 logo。二者不等价，官网 connector wall 不能写成全量已交付清单。
- **审批能力存在实现痕迹，但治理闭环未验收。** 官方 v0.11 截图显示 Default、Accept Edits、Plan、Don't Ask、Bypass Permissions 等模式；包内测试 fixture 覆盖 tool-call、approval roundtrip、runtime controls 与 error execution。它们能证明客户端实现过权限流程，不能证明 action-level policy、审计、回滚和生产失败率。
- **Wallet / Agent Pay 仍是 conditional capability。** 官网宣称 `$0.01/action` 起、统一 wallet 和 Agent 自动支付 API/tool/task；Terms 却写 `may offer`、`when wallet balances are activated`、`if wallet funding is available`。本轮未登录或充值，因此不能把示例余额、扣费行和退款规则写成 wallet 已上线。
- **采用证据很弱。** X 账号仅约 39 followers，官方 demo 多为 2-7 likes，较高两条约 39-40 likes；Reddit exact-domain `verified_count=0`，HN 与微信无有效命中。小红书出现团队/推广账号内容，但没有客户侧 accepted outcome、付费、留存或独立长期评价。
- **流量不可用。** Similarweb 打开 `sarea.ai` 后回到通用 Website Traffic Checker，没有站点估算卡片。本轮不创建访问量数字，也不把 “no data” 解释为零访问。

## 产品谱系：CoreSpeed 的前台工作空间

Sarea 官网的 About 与 Blog 跳到 `corespeed.io`，联系邮箱是 `@corespeed.io`，footer 写明 `Copyright © 2026 CoreSpeed Inc.`。更强的证据来自两个法律页：Privacy 和 Terms 都逐字说明 “Sarea is a product operated by Corespeed, Inc.”。下载包进一步把 bundle ID、Developer ID signer 和 Team ID 都落在 CoreSpeed。

![Sarea footer 直接展示 CoreSpeed 品牌与 CoreSpeed Inc. copyright](assets/sarea/corespeed-footer.png)

因此当前最稳的模型是：

1. [[company.corespeed|CoreSpeed]] 是法律/公司与基础设施主体；
2. Sarea 是可下载的桌面产品与独立品牌入口；
3. 两者共享 [[person.milton-yan|Milton Yan]]、[[person.hao-su-corespeed|Hao Su]]、[[person.spencer-zhao-corespeed|Spencer Zhao]] 的团队谱系；
4. CoreSpeed 的融资关系留在 CoreSpeed，不迁移成 Sarea 独立融资；
5. 当前没有 rebrand、spinout、acquisition 或独立法人证据。

这也解释了 CoreSpeed 当前 access layer 的一部分来源。Sarea 先把多 Agent、connector、local context、permission 和 gateway 组合在一个客户端中；CoreSpeed 2026-06 的新方向试图把 access、policy、memory、pay 和 billing 抽离成可跨 Sarea、Claude Code、Codex、Cursor 等运行端复用的层。前者是工作空间，后者是可移植访问层，不能互相替代 shipped-state 证据。

## 产品模型

![官网把 Sarea 描述为多 Agent、automation 与工具的一体工作空间](assets/sarea/key-features.png)

### 1. 多 Agent 与本地项目

Terms 写明 Sarea 通过 Agent Communication Protocol（ACP）连接 Claude Code、Codex、Gemini、GitHub Copilot 与 Pi，并允许 MCP tools/skills、session、approval、notification 和本地文件。v0.13.0 包内 `agents.json` 也保留上述 built-in agent IDs，并支持 bundled adapter 或绝对路径加载外部 Agent backend。

官方 v0.11 onboarding 与桌面截图显示用户可切换 Agent、模型和 intensity，并把 working directory 交给自动化。Privacy 对数据路径给出了更清楚的边界：本地文件只在用户授权后读取；内容默认不存入 CoreSpeed 服务，但用户授权的 excerpt 仍可能随 prompt 发送给选定 AI provider。

![官方 v0.11 截图同时展示模型切换与多个 permission mode](assets/sarea/permissions-models.jpg)

这属于 [[concept.agent-native-context-workspace|Agent 原生上下文工作空间]]：项目文件、terminal、session、connector 与 automation 聚合在本地 workspace。它不同于 CoreSpeed 当前 [[concept.portable-agent-access-layer|Portable Agent Access Layer]]，后者试图在多个客户端间保存 access/control 资产。

### 2. Connectors、skills 与执行工具

![Sarea 官网 connector wall：展示 Linear、X、Slack、Notion 等入口](assets/sarea/connectors.png)

官网展示的 stack 很宽，但当前包内 catalog 只明确列出六个 connector：Linear、Notion、Slack、Exa、Apify、doola。前三个使用 OAuth；Slack definition 包含消息、频道、文件、用户与写消息等多组 user scopes。这里能确认的是“客户端配置请求这些能力”，不是“所有 scope 已被每个用户批准”或“每种 action 都已成功运行”。

包内还带有 browseruse、computeruse、sarea CLI，以及 browseruse、computeruse、slides 等 skill。两个执行工具的架构不完全一致：`computeruse` 是 universal binary，`browseruse` 在本轮包中为 arm64。官网和 X demo 展示浏览器、X connector、DeckSpeed skill、Google/Slack/Gmail 等工作流；除打包文件和官方演示外，本轮没有登录态端到端执行。

### 3. Workflow automation

![官网用例包括内容计划、浏览器、定时 automation 与 DeckSpeed skill](assets/sarea/use-cases.png)

2026-05-12 官方演示可选择执行 Agent、上传 working directory 并创建 recurring automation；2026-05-21 又演示把 X 上的 VC news 定时发送到 Slack 和 Gmail。包内 fixture 覆盖执行错误与 approval roundtrip，说明团队至少为异常和批准流程写过测试资产。

仍缺的关键 contract 包括：schedule 的持久化位置、客户端离线时谁运行、重试次数、幂等、重复发送、超时、失败通知、人工介入、回滚与 accepted outcome。官网 “24/7 online” 也没有公开 runtime、SLA 或后台任务收据支撑。

## 下载包与桌面 smoke

`https://www.sarea.ai/download` 在 2026-07-21 直接 302 到 `downloads.sarea.ai/sarea/v0.13.0/Sarea.dmg`。本轮保存了以下 receipt：

| 项目 | 观察 |
|---|---|
| 版本 | 0.13.0，build 155 |
| 文件 | 211,497,156 bytes，Apple disk image |
| SHA-256 | `696534d00d2938a885c3d523f65f3f54a2873cab7e83cf8111411ecc57a02e28` |
| Bundle ID | `io.corespeed.Sarea` |
| 架构 | arm64 + x86_64 |
| 最低系统 | macOS 15.0 |
| 签名 | Developer ID Application: CoreSpeed Inc.，严格 deep verify 通过 |
| Runtime | hardened runtime；包含 JIT entitlement |
| Notarization | `stapler validate` 未发现 stapled ticket；本环境缺 `spctl`，不能据此判断在线 notarization/Gatekeeper 最终结果 |
| 启动 | 从只读 DMG 启动成功，出现 Sarea 窗口并拉起 browseruse 进程；未登录，不能验证 workspace 内能力 |

该 smoke 证明“当前安装包存在、签名一致、能启动”，不证明所有官方功能、更新链路、支付或长期稳定性。包内 Sparkle updater 可见，但本轮没有执行升级测试。

## Credentials、Gateway 与隐私边界

Sarea 当前有两条 credential path：

1. **Direct/local**：Claude、Codex 等读取自己的本地 credential store；Privacy 说第三方 API key/OAuth token 存在本机，例如 OS keychain，不发送给 CoreSpeed。
2. **CoreSpeed gateway**：用户选择 gateway 或 credits 时，CoreSpeed 接收认证、计量和账单所需 metadata，包括 account ID、request timing 与 token counts；Privacy 声称 prompt/output 内容只为传递响应而处理，不用于训练。

包内 schema 明确将 `gateway` 与 `direct` 分开，并把 legacy `byos/passthrough` 归入 direct。这比官网概念图更能说明架构分工，但仍没有验证 token refresh、encryption、tenant isolation、gateway retention、provider subprocessor、incident response 或企业 offboarding。

Sarea 没有公开 Trust Center、SOC 2/ISO、DPA、subprocessor list、status/SLA 或 penetration test。Privacy 只写 reasonable measures、TLS 与 access controls。对于可读本地文件、调用 browser/computer、连接 Slack/Notion 等工具的应用，这些采购材料仍是明显缺口。

## Agent Pay 与账单

![官网 Agent Pay 面板展示统一 wallet 与 $0.01/action 起价，但数字是产品演示](assets/sarea/agent-pay.png)

官网把商业模型描述为无订阅、充值 wallet、Agent 调 API/订工具/完成任务时自动扣费，起价 `$0.01/action`。展示中的 `$47.32` 余额、Agent 名称、单次费用和 `$12.68 spent` 是 UI demo，不是账户或采用数据。

Terms 进一步削弱了“已上线”结论：

- `Sarea may offer a pay-as-you-go billing model`；
- `When wallet balances are activated` 才讨论余额不可转让；
- `If wallet funding is available` 才允许 30 天内申请未用余额退款；
- MVP 期间 wallet feature 和 pricing 可能变化。

所以当前只能确认团队设计了 wallet、计量与退款条款，不能确认真实充值、支付 processor、API/tool 转售、ledger、chargeback、Agent 自主支出授权和逐次消费已经交付。后续需要登录账户、真实小额充值和账单/退款 smoke，且必须先明确风险和授权边界。

## 采用、GTM 与社区

Sarea 主要通过团队账号做 founder-led/demo-led 分发。X 账号在本轮观察时约 39 followers、70 tweets；5 月连续发布 onboarding、原生 macOS、browser/computer use、automation、DeckSpeed 与 connector demo。多数官方内容互动为个位数，两个视频约 39-40 likes。

小红书精确搜索返回 10 个候选，内容高度集中在 Chelsea Dai、Milton Y 与 Sarea 品牌账号，包含招聘、产品功能和订阅用户免费等推广叙事。它说明团队在中文渠道主动分发，不是独立用户反馈。Reddit 返回 10 个宽松候选但 exact-domain `verified_count=0`；HN、微信搜索无有效结果。

没有看到具名客户、独立 workflow outcome、激活用户、成功 action、付费、续费、retained workflow、人类介入率或 cost per accepted output。Sarea 的当前证据组合是“真实可下载产品 + 官方高频演示 + 弱外部采用信号”。

Similarweb 对 `sarea.ai` 没有返回站点数据页，重定向到通用 Traffic Checker。这里仅记录 unavailable，不填月访问量，不把缺失当零。

## 竞品与边界

| 产品 | 重叠 | Sarea 的差异 | 证据边界 |
|---|---|---|---|
| [[company.raft|Raft]] | 多 Agent、持续 workspace、task/room/thread | Sarea 更本地桌面、文件/terminal/browser 与可选 gateway；Raft 更强调 agent team 与协作协议 | 两者 accepted deliverable 与生产协作数据都有限 |
| [[company.helio|Helio]] | 长期 AI teammate、memory/tasks/skills/credentials | Helio 更角色/责任导向；Sarea 更像多 Agent 本地工作台 | 不能用 UI 中的 Agent 数量替代持续责任 |
| [[company.moxt|Moxt]] | 文件原生 context、workflow、云执行 | Sarea 支持外部 coding agents 与本地 direct credentials | runtime owner、离线执行和失败 contract 仍待对照 |
| [[company.bloome|Bloome]] | 托管/本地/云 Agent 进入同一协作界面 | Bloome 更强调 IM/protocol；Sarea 更强调 native desktop、project files 和 automation | 两者都缺统一采用口径 |
| [[company.multica|Multica]] | Issue/repo/local runtime、coding workflow | Multica 更垂直 coding；Sarea 更通用 connector、browser/computer use | 通用性不自动等于结构化交付更强 |
| Lindy / OpenClaw 类产品 | assistant/builder、skills、automations | Sarea 以 ACP 聚合用户已有 coding/reasoning Agent，并保留 direct credential path | wallet、后台 runtime 与 connector breadth 需要实测 |

Sarea 不等于 CoreSpeed access layer。它掌握的是 workspace、local context 和交互；CoreSpeed 新层主张掌握跨 workspace 的 connectors、policy、memory、payments 与 billing。研究和市场地图应把这两个控制点分开。

## 关键判断

1. **Sarea 是 CoreSpeed 当前最强的 shipped product receipt。** 可下载、签名和包内资源显著强于 early-access landing，但只对桌面产品成立，不能把它迁移成 CoreSpeed 新 access layer 已 production-ready。
2. **多 Agent workspace 的关键不是能切五个 logo，而是谁保存持续状态。** Sarea 当前强在文件、session、tools 与 automation 的聚合；长期 owner、accepted outcome、handoff、纠错和 retained workflow 仍缺公开证据。
3. **Direct credential 与 gateway 双轨是重要架构选择。** 它允许用户保留已有订阅/登录，也给 CoreSpeed 计量和账单入口；同时让责任在本地 Agent、第三方 provider、Sarea 客户端与 CoreSpeed gateway 之间分散。
4. **包内 connector catalog 比官网 logo 更接近事实。** 当前六个 definition、OAuth mode 与部分 scope 可核验；官网更多品牌只作 roadmap/marketing surface，除非账号内成功连接并执行。
5. **Wallet 是本轮最需要降级的能力。** 条款的 conditional language 与官网确定性定价不一致。没有充值和账单 receipt 前，只能写设计和准备状态。
6. **Sarea 当前更像技术可用、市场未证。** 下载包和官方 demo 足以证明实现，不足以证明客户、付费、留存和持续价值。

## 待验证与更新触发器

- 在干净测试账号完成 onboarding、direct credentials 与 CoreSpeed gateway 两条路径；
- 逐个验证包内六个 connector 的 OAuth scope、revoke、失败与审计；
- 验证官网额外 connector 是否已进入 app，区分 bundled、remote catalog 与 roadmap；
- automation 离线运行、schedule persistence、retry、幂等、失败升级、通知与 rollback；
- permission mode 的 action-level 语义、standing authorization、Bypass 风险和审计记录；
- wallet 是否可充值、processor、计量单位、账单、退款、chargeback、Agent spend cap；
- Sparkle 更新签名、notarization/Gatekeeper 与自动更新流程；
- Trust Center、SOC 2/ISO、DPA、subprocessors、status/SLA；
- 客户侧 accepted outcome、retained workflows、human intervention 与 cost per accepted output；
- Similarweb 出现可用估算后再建立 traffic snapshot；
- 独立社区评价与中文非团队样本。

## 证据库

### 官方、法律与安装包

- [[source.website.sarea-home-2026-07-21]]
- [[source.website.sarea-privacy-2026-04-30]]
- [[source.website.sarea-terms-2026-04-30]]
- [[source.package.sarea-v0-13-0-2026-07-21]]

### 产品演示与分发

- [[source.x.sarea-v0-11-0-2026-05-07]]
- [[source.x.sarea-native-workspace-2026-05-08]]
- [[source.x.sarea-automation-2026-05-12]]
- [[source.x.sarea-scheduled-workflow-2026-05-21]]
- [[source.x.sarea-profile-2026-07-21]]

### 流量与社区边界

- [[source.similarweb.sarea-unavailable-2026-07-21]]
- [[source.reddit.sarea-no-hit-2026-07-21]]
- [[source.hn.sarea-no-hit-2026-07-21]]
- [[source.weixin.sarea-no-hit-2026-07-21]]
- [[source.xiaohongshu.sarea-search-2026-07-21]]
