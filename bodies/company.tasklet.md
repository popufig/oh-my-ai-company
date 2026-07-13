# Tasklet

![](assets/company.tasklet/legacy-render.png)

## TL;DR

Tasklet 是 YC P26 的 cloud agent operating system / AI command center，定位不是单点 browser agent，而是让 agent 在云端拥有连接、知识、文件系统、浏览器、触发器和团队协作上下文，持续接管知识工作。

这家公司最值得研究的地方有三点。第一，产品演化速度极快：2025-10-09 发布 beta 后，几乎每 2-3 周补一层关键能力，从 v2 agent、sandbox VM、32 个 integrations、Instant Apps、14 类 triggers、Agent Browser，一直推进到 2026-06-04 的 Teams。第二，创始人 Andrew Lee 有 Firebase/Shortwave 背景，叙事很清楚：工作流软件会被 agent-first 工作流重写，UI 只是 agent 临时生成的外壳，真正的上下文在文件、连接、权限、日志和触发器里。第三，增长和估值口径很激进：官方说 2026-04-07 融了 $20M、估值 $175M、$5M ARR/run-rate；Sacra 估算 2026-05 ARR 到 $10M；YC Jobs 显示 funding $29.5M。口径必须分开记录，不能合并成一个确定事实。

对我们来说，Tasklet 是 Parall 相关竞品里很有价值的样本：它不是只做“能打开浏览器的 agent”，而是在做一个能被团队长期使用的 agent 工作台。它的产品重点是闭环：接入工具 -> 触发后台任务 -> 云端执行/浏览/写代码 -> 生成临时 app/UI -> 团队共享权限和知识。

## 基本事实

- 主体：[[company.tasklet]]
- YC：Spring 2026 / P26，YC 页面为 `https://www.ycombinator.com/companies/tasklet-2`
- 官网：`https://tasklet.ai`
- 一句话：Agents that own the work
- 创始人：[[person.andrew-lee]]、[[person.jonny-dimond]]
- 官方 beta launch：2025-10-09，见 [[source.release.tasklet-2025-10-09]]
- 官方融资发布：2026-04-07，见 [[source.release.tasklet-2026-04-07-funding]]
- 监控触点：[[touchpoint.tasklet-website]]、[[touchpoint.tasklet-release-notes]]、[[touchpoint.tasklet-x]]、[[touchpoint.tasklet-yc]]

## 产品理解

Tasklet 的核心不是“聊天框 + 工具调用”，而是把 agent 运行所需的工作上下文平台化：

- Connections：连接 SaaS、HTTP API、MCP、内部私有 API，降低 agent 获取真实业务上下文的摩擦。
- Triggers：让 agent 按日程、邮件、Slack、CRM row、webhook 等事件后台运行，不只响应用户一次 prompt。
- Sandbox / computer use：提供隔离云端执行环境、浏览器和文件系统，使 agent 能浏览网页、处理文件、写代码、运行脚本。
- Instant Apps：让 agent 直接生成临时软件或 UI，适合把一次性流程变成可交互界面。
- Teams：共享 agents、connections、knowledge、usage limits 和 billing，说明它在从个人 power user 工具转向组织平台。

这对应三个可复用概念：[[concept.agent-first-workflow]]、[[concept.trigger-based-background-agent]]、[[concept.horizontal-agent-platform]]。更完整的产品 takeaway 见 [[note.tasklet-product-takeaway]]。

## 产品演化时间线

- 2025-10-09：Introducing Tasklet，发布 beta。证据：[[source.release.tasklet-2025-10-09]]
- 2025-12-03：v2 Agent architecture。证据：[[source.release.tasklet-2025-12-03-v2-agents]]
- 2025-12-08：Expert / Genius intelligence levels。证据：[[source.release.tasklet-2025-12-08-intelligence]]
- 2025-12-16：Sandbox VM。证据：[[source.release.tasklet-2025-12-16-sandbox-vm]]
- 2026-01-21：Email / iMessage。证据：[[source.release.tasklet-2026-01-21-email-imessage]]
- 2026-02-17：32 integrations。证据：[[source.release.tasklet-2026-02-17-integrations]]
- 2026-02-26：Instant Apps。证据：[[source.release.tasklet-2026-02-26-instant-apps]]
- 2026-04-07：$20M funding。证据：[[source.release.tasklet-2026-04-07-funding]]
- 2026-04-15：14 triggers。证据：[[source.release.tasklet-2026-04-15-triggers]]
- 2026-04-27：Agent Browser。证据：[[source.release.tasklet-2026-04-27-agent-browser]]
- 2026-05-13：GPT-5.5 + image generation。证据：[[source.release.tasklet-2026-05-13-gpt55-image]]
- 2026-05-22：audio transcription / video generation。证据：[[source.release.tasklet-2026-05-22-audio-video]]
- 2026-06-04：Tasklet for Teams。证据：[[source.release.tasklet-2026-06-04-teams]]

## 规模与口径

Tasklet 的规模判断必须按来源拆开：

- S1 官方/YC：YC profile 和 2026-04-07 funding release 称 $5M ARR / revenue run-rate、2026 年以来增长超过 1,200%、融资 $20M、估值 $175M。见 [[source.yc.tasklet]] 和 [[source.release.tasklet-2026-04-07-funding]]。
- S1 YC Jobs：YC Jobs 页面显示 funding $29.5M、team 9。它可能是总融资或更新后的 funding 字段，不应直接替代官方 $20M 轮次表述。见 [[source.yc-jobs.tasklet]]。
- S2 Sacra：Sacra 估算 2026-05 ARR 为 $10M，2025 年底约 $385K。见 [[source.sacra.tasklet]]。
- S2 Similarweb：2025-12 到 2026-05 访问量合计约 1.057M，月均约 169K，2026-05 MoM -21.39%，Direct 55.42%，Paid Search 15.73%，Organic Search 8.99%。见 [[source.similarweb.tasklet-2025-12-2026-05]]。

我的处理：$5M、$10M、$29.5M 都保留为不同来源口径；不合并、不推导。规模判断见 [[note.tasklet-scale-and-traction]]。

## GTM / 增长判断

Tasklet 不是纯自然增长样本。它同时用了四类增长杠杆：

- 创始人信任资产：Andrew Lee 有 Firebase 和 Shortwave 背景，能解释为什么市场愿意给早期产品更高信任和估值。
- YC / 投资人网络：YC 页面、融资发布、投资人背书让“agent owns work”的叙事更容易被相信。
- PLG 自助入口：官网 pricing、release notes、X 发布、Reddit/XHS 用户讨论都指向自助试用和 power user 传播。
- 付费流量：Similarweb 显示 Paid Search 占比不低，SEO 关键词数量偏少，说明它在用 paid search 买认知，但自然搜索资产还没有完全长起来。

这部分不是定论，更多是阶段性判断，详见 [[note.tasklet-gtm-takeaway]]。

## 社区反馈

社区反馈目前是可用但不完整的：

- Reddit：`r/automation` 讨论里有真实使用者说 Tasklet 能把 3-4 小时的工作流快速搭出来，也有人担心安全、隐私、复杂任务可靠性和成本。见 [[source.reddit.tasklet-automation-1o2fos7]]。
- X / 小红书：本地旧资料整理了一批转发和中文用户反馈，但其中“Garry Tan 背书”标签存在归因风险，另一个整理文件修正为 Tim Suzman，因此这里只能写“社媒背书/转发”，不能写死 Garry。见 [[source.x.tasklet-archive-2026-06]] 和 [[source.community.tasklet-aggregate]]。
- HN：找到了 Show HN 链接，但当前 browser read 只抓到局部 founder comment，不足以作为完整社区反馈。见 [[source.hn.tasklet-show-45529555]]。
- Product Hunt：页面存在，但当前抓取只返回安全验证页，属于 empty shell，不能使用为内容证据。见 [[source.producthunt.tasklet]]。

## 创始人观点

Andrew Lee 在 Cognitive Revolution 两次访谈里给出非常清楚的产品哲学：

- “Always bet on the models”：不要为当前模型短板过度设计，押注模型能力继续快速提升。
- Agent-first over workflow-first：不是先画流程再嵌 LLM，而是让 agent 决定路径，软件和 API 是 agent 的工具。
- Files are the agent：agent 的记忆和工作状态应落在文件系统/历史/结构化上下文里，而不是只靠聊天记录。
- Anthropic 既是供应商也是竞争对手：底层模型厂会吃掉一部分直接用户，Tasklet 必须往 model-neutral horizontal platform 走。

证据：[[source.podcast.tasklet-cogrev-ep1]]、[[source.podcast.tasklet-cogrev-ep2]]。

## 风险与疑问

- 模型平台挤压：Anthropic / OpenAI / Google 既供给模型，也在做终端 agent 产品。
- 可靠性与成本：复杂任务会失败、变贵、需要人工监督；社区反馈已出现类似疑虑。
- 安全与信任：连接邮箱、CRM、内部 API、浏览器和文件系统后，权限、审计、回滚、数据边界会变成企业采购关键。
- 增长质量：Similarweb 的 direct 和 paid search 占比高，SEO 弱；需要继续看留存、付费 cohort、团队版转化。
- 口径冲突：ARR、funding、team size、社媒背书归因都存在多来源不一致。

详见 [[note.tasklet-risks]]。

## 旧资料清理记录

旧资料来自 `vertical/media/knowledge/radar/tasklet/`。这次没有原样搬运，而是逐篇看过后拆成主体、人物、触点、source.item、note 和 concept。格式问题和修正记录见 [[note.tasklet-source-cleanup]]。

## 证据库

S1 官方/一手：

- [[source.yc.tasklet]] - YC company profile
- [[source.yc-jobs.tasklet]] - YC jobs profile
- [[source.website.tasklet]] - Tasklet homepage
- [[source.release.tasklet-2025-10-09]] - launch
- [[source.release.tasklet-2025-12-03-v2-agents]] - v2 agents
- [[source.release.tasklet-2025-12-08-intelligence]] - intelligence levels
- [[source.release.tasklet-2025-12-16-sandbox-vm]] - sandbox VM
- [[source.release.tasklet-2026-01-21-email-imessage]] - email/iMessage
- [[source.release.tasklet-2026-02-17-integrations]] - integrations
- [[source.release.tasklet-2026-02-26-instant-apps]] - Instant Apps
- [[source.release.tasklet-2026-04-07-funding]] - funding
- [[source.release.tasklet-2026-04-15-triggers]] - triggers
- [[source.release.tasklet-2026-04-27-agent-browser]] - agent browser
- [[source.release.tasklet-2026-05-13-gpt55-image]] - GPT-5.5/image
- [[source.release.tasklet-2026-05-22-audio-video]] - audio/video
- [[source.release.tasklet-2026-06-04-teams]] - Teams

S2 第三方强来源：

- [[source.sacra.tasklet]] - Sacra company analysis
- [[source.similarweb.tasklet-2025-12-2026-05]] - Similarweb traffic analysis
- [[source.podcast.tasklet-cogrev-ep1]] - Cognitive Revolution EP1
- [[source.podcast.tasklet-cogrev-ep2]] - Cognitive Revolution EP2

S3 社区/社媒：

- [[source.reddit.tasklet-automation-1o2fos7]]
- [[source.hn.tasklet-show-45529555]]
- [[source.x.tasklet-archive-2026-06]]
- [[source.community.tasklet-aggregate]]

S4 待核验/抓取失败：

- [[source.producthunt.tasklet]]

## 后续待补

- 用更好的 HN adapter 抓完整 Show HN thread。
- Product Hunt 当前是 security verification empty shell，需要 adapter 或手动可见内容后再入证据。
- 补 LinkedIn company / employees，不从页面空壳脑补团队规模。
- 更新 2026-06 之后的 Similarweb、Google Trends、GitHub/社媒增长。
- 对 Tasklet 与 Parall/Arga/Stablebrowse 做一张竞品能力矩阵。
