# Skywork

## TL;DR

Skywork 不是“AI 员工”型产品，更像 **AI Office / AI Workspace Agent**：它把一个想法、文件或知识库转成可交付的办公内容，包括文档、幻灯片、表格、网页、播客和多模态素材。它的核心叙事不是“替你在某个业务系统里执行岗位流程”，而是“深度研究 + 多输出格式 + 可编辑交付物”。

这家公司值得关注的地方有三点：

1. **产品形态很清楚**：用 5 个专家 agent（Docs / Slides / Sheets / Podcasts / Webpages）加 1 个通用多模态 agent，把传统 Office/Workspace 的输出对象 agent 化。
2. **研究与开源资产很厚**：GitHub 组织下有 DeepResearchAgent、SkyReels、Skywork-R1V、Skywork foundation model 等项目，说明它不是纯壳应用，而是背后有模型/研究/开源资产支撑。
3. **组织线索指向昆仑万维 / 2050 Research**：昆仑官网确认 2023-09-04 颜水成加入昆仑万维，和周亚辉共同担任 SkyWork AI co-CEO，并任 2050 Global Research Institute 负责人。第三方 ownership 页面还显示 Skywork AI 与 Kunlun Tech/Kunlun Group 有控股或融资关系，但这部分需要继续找上市公司公告交叉验证。

## 产品理解

Skywork 的一句话定位可以写成：**面向知识工作者的 AI 办公交付物生成平台**。

它不是单纯聊天机器人，也不是只做一类输出的 PPT/文档工具。公司 PR 把它定义成 “AI Office Agent”，核心是：

- Docs：行业研究、竞品分析、产品路线图、学术论文、商业计划、营销材料等。
- Slides：基于检索和分析生成可编辑演示文稿，支持 PPTX/PDF 导出。
- Sheets：基于上传数据做描述/推断统计、生成图表、导出 XLS。
- Webpages：生成结构化、交互式网页。
- Podcasts：从简单输入生成播客脚本和音频。
- General Agent：图像、视频、音乐、语音等多模态创作任务。

它强调三类 agent 产品设计：

- **Clarification Card**：执行前追问目标、上下文和约束，再生成待办清单让用户确认。
- **Traceable Sources**：Docs/Slides/Sheets 中的内容带引用来源，降低幻觉风险。
- **Personal Knowledge Base**：用户上传 PDF/DOC/PPT/XLS/audio/URL，作为后续生成上下文；公司 PR 称每个知识库最多 50 份文档。

这些点对我们做 agent 产品有参考价值：真正能落地的 agent，不只是模型能力，而是把“需求澄清、上下文注入、可追溯引用、可编辑导出”这些工作流环节补齐。

## 团队与组织线

Skywork AI LinkedIn 页显示：公司位于 Singapore，软件开发行业，51-200 人，约 3,000 关注者。

昆仑万维官网确认：2023-09-04，颜水成加入昆仑万维，和周亚辉共同担任 SkyWork AI co-CEO，同时担任昆仑 2050 Global Research Institute 负责人。这个信息说明 Skywork 至少不是一个普通早期创业小团队，而是和昆仑的 AI/AGI 战略、研究院、模型与 AIGC 商业化绑定。

待继续核验：Skywork AI 的股权/融资结构。第三方 ChampSignal 称 Kunlun Group Limited 在 2025 年 8 月增资后仍是 Skywork AI 控股股东，并列出 Kunlun Fund、Beijing AI Industry Investment Fund、Inke 相关公司等小股东；Moomoo 搜索结果也显示 Kunlun Fund 拟以 2 亿元无息可转债投资 Skywork AI。但这些不是一手公告，应该继续找昆仑万维公告或交易所披露。

## 增长与分发信号

Product Hunt 页面显示 Skywork Super Agents 在 2025 年发布，页面有 715 followers、91 points、Day Rank #17。它不是 Product Hunt 上特别强的爆发型 launch，但可以作为英文市场公开 launch 的种子。

Similarweb 公开页显示 skywork.ai 在 2026 年 6 月：

- Global Rank：#17,834
- Country Rank：#15,314
- Category Rank：Programming and Developer Software #185
- Bounce Rate：42.06%
- Pages per Visit：3.43
- Avg Visit Duration：00:03:40
- Marketing Channels Distribution 中 Paid Search 占 40.16%，Direct 第二，Organic Search 第三。

公开页没有给出 Total Visits 的具体数值，不能脑补访问量。但从 rank 与渠道结构看，Skywork 有明显付费搜索/投放驱动，不只是自然社区扩散。

社区搜索方面，当前 Google 对 Reddit/HN 没找到有效讨论种子；这说明它在英文开发者社区的自然讨论可能弱于官网/PR/投放/开源声量。后续应重点监控 X、Product Hunt 评论、GitHub issue/star 变化、以及 Similarweb 渠道变化。

## 技术与开源资产

GitHub `SkyworkAI` 组织显示 38 个 repositories。热门项目包括：

- `SkyReels-V2`：视频生成模型，约 7.2k stars。
- `DeepResearchAgent`：hierarchical multi-agent system for deep research/general task solving，约 3.5k stars。
- `Skywork-R1V`：多模态视觉语言推理模型，约 3.2k stars。
- `SkyReels V1`：human-centric video foundation model，约 2.7k stars。
- `Matrix-Game 3.0`：real-time / streaming interactive world model，约 2.2k stars。
- `Skywork` foundation model series，约 1.5k stars。

这条线很重要：Skywork 对外产品是办公/内容 agent，但底层组织能力覆盖 deep research、视频、多模态、reward model、foundation model。它可能不是单点 SaaS，而是昆仑 AI 技术栈的产品化入口。

## 判断

Skywork 的关键不是“又一个 PPT/文档生成工具”，而是 **把 deep research 封装成多个办公交付物 agent**。它把用户真正要交付的东西拆成文档、PPT、表格、网页、播客，而不是只停在 chat answer。

对我们有三点启发：

- **agent 产品要对齐最终交付物**：用户不是要“一个智能体”，而是要报告、PPT、表格、网页、播客这些能拿出去用的东西。
- **澄清 + 引用 + 导出比模型炫技更重要**：Clarification Card、source tracing、PPTX/PDF/XLS export 都是降低 agent 失败成本的产品层设计。
- **开源/研究资产可以成为 GTM 信任层**：DeepResearchAgent、SkyReels、R1V 等开源项目让 Skywork 的产品叙事更可信，也能吸引开发者和研究社区。

## 风险与待验证

- 官网 `https://skywork.ai/` 当前通过 browser 打开会跳到 `/limit` 并失败，正文抓取失败；不能用官网正文做证据。
- 公司 PR 中 GAIA #1、SimpleQA 94.5、OpenAI-level deep research 40% cost 等说法都应标为“公司声明”，需要榜单、论文或第三方复现验证。
- “MCP” 在公司 PR 中解释为 Multimodal Creative Processors，不要和 Model Context Protocol 混淆。
- App Store URL 抓取失败，返回的是中国区 Today 信息流，不是 Skywork 应用页。
- X list 写入失败，adapter 报 SecurityError；官方账号已经识别为 `@Skywork_ai`，但还没成功加入 list。

## 证据库

- [[source.newswire.skywork-super-agents-launch-2025-05-22]]：公司 PR，Skywork Super Agents 全球发布。
- [[source.linkedin.skywork-company-2026-07-10]]：LinkedIn 公司页，规模/地区/简介。
- [[source.kunlun.skywork-coceo-2023-09-04]]：昆仑官网，颜水成加入并任 SkyWork AI co-CEO。
- [[source.github.skyworkai-org-2026-07-10]]：GitHub 组织页，开源资产。
- [[source.producthunt.skywork-super-agents-2026-07-10]]：Product Hunt 页面，launch/分发信号。
- [[source.similarweb.skywork-ai-2026-07-10]]：Similarweb 公开页，流量排名与渠道结构。
- [[source.x.skywork-ai-profile-2026-07-10]]：官方 X 账号。
- [[source.champsignal.skywork-ownership-2026-03-24]]：第三方 ownership 页面，股权结构待核验。
- [[source.website.skywork-home-empty-2026-07-10]]：官网抓取失败记录。
