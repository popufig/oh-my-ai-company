# Conviction

> 研究更新：2026-07-21。证据等级沿用 S1 官方/监管、S2 强第三方、S3 二手与社区、S4 待核验。

## TL;DR

Conviction 是 Sarah Guo 于 2022 年创立的 AI-native 风险投资机构。它不是覆盖所有科技赛道的小型通用基金，而是围绕“Software 3.0”建立的一套集中型 AI 投资与分发系统：官网公开支票范围为 100 万至 2500 万美元，偏好早期且经常成为首位投资人；同时通过 Embed、Mixture of Experts、No Priors、Commit、人才团队和公开 thesis 把公司发现、人才、算力、客户与叙事连接起来。

它也不是简单的“Sarah Guo 个人基金”了。当前官网投资侧包括 [[person.sarah-guo]]、[[person.mike-vernal]]、[[person.pranav-reddy-conviction]] 与 [[person.bella-garcia-camargo]]；监管文件还显示 Fund II、Expansion I、Select I 等不同 vehicle。品牌仍高度依赖 Sarah 的判断与内容影响力，但资本工具和公开责任人已经开始机构化。

对 AI Company Atlas 而言，Conviction 最有价值的不是一个 logo，而是高密度发现雷达。当前图谱已经连接 Baseten、Cartesia、Cognition、Essential、Harvey、HeyGen、Latent、Listen Labs、Mistral、OpenEvidence、Sierra、Sola、Sunday 等公司；其中只有少数关系有轮次、领投或公开署名证据，其余应保留为官方 portfolio relation。

![Conviction](../assets/conviction/logo.png)

## 1. 机构身份

- **成立：** 2022 年，由 [[person.sarah-guo]] 离开 Greylock 后创立。
- **定位：** 为 AI-native / “Software 3.0” 公司而建的 venture firm。
- **阶段：** 官网称偏好早期、经常是 first investor。
- **支票：** 官网公开口径为 `$1M–$25M`。
- **团队：** 当前官网列 8 人，其中 4 位投资侧、2 位 Talent、2 位 EA/Ops。
- **总部信号：** SEC vehicle 地址位于 San Francisco；LinkedIn 的小团队口径只能作为社会化资料，不替代官网或监管文件。

Conviction 的边界比传统 sector fund 更窄，却比 seed-only fund 更宽：100 万至 2500 万美元的支票、Expansion vehicle 与 Select vehicle 说明它既想早期发现，也在为集中 follow-on 和特定机会保留资本工具。

## 2. 资本架构：小团队也要拆 vehicle

### Fund I

2022 年 Forbes 与 TechCrunch 报道首期基金为 1.01 亿美元。Sarah 当时是 sole GP，并公开表示自己是重要 LP。这个阶段的核心是个人判断、AI thesis 和从 Greylock 带出的网络。

### Fund II

2024-07-29 的 Form D 披露 `Conviction Partners Fund II, L.P.`，offering amount 为 2.3 亿美元，filing 当时 amount sold 为 0，first sale 尚未发生。2025-01-31，TechCrunch 报道该基金已 close 2.3 亿美元，并宣布 [[person.mike-vernal]] 加入成为 GP。**Form D 的 offering target 与媒体报道的最终 close 是两个时间点，不能混成同一个字段。**

### Expansion I

2025-03-21 的 Form D 披露 `Conviction Partners Expansion I, L.P.`：目标 1.5 亿美元、已售 1.49 亿美元、33 名投资人，Sarah 与 Mike 都列为 managing member of the GP。它证明 Conviction 已有独立扩张/后续资本载体，但公开文件没有说明每笔 portfolio 如何在 Fund II 与 Expansion I 之间分配。

### Select I

2026-03-30 的 Form D 新增 `Conviction Partners Select I, L.P.`，offering amount 为 indefinite、amount sold 为 0、first sale 尚未发生；Sarah 与 Mike 同为 related persons。它只证明新 vehicle 已设立，**不能据此声称已完成募资，也不能把 Forbes 的 “third fund cycle” 自动写成某个确定规模的 Fund III。**

## 3. 人物与公开责任

- [[person.sarah-guo]]：Founder and Partner。机构 thesis、品牌、No Priors、关键早期投资和董事会关系的中心节点。
- [[person.mike-vernal]]：2025 年加入的 General Partner；前 Sequoia partner、Meta 产品与工程 VP。监管文件显示他与 Sarah 共同进入 Expansion I、Select I 的 GP 管理层。
- [[person.pranav-reddy-conviction]]：Founding Investor。Sola、Latent 等官方投资文章与 Sarah 共同署名，说明他不只是团队目录成员，而是可追踪的 deal attribution 节点。
- [[person.bella-garcia-camargo]]：当前 investing team 成员，公开关注 cybersecurity 与 financial tools；本轮未把她的主题偏好升级为已完成投资清单。

当前公开材料仍没有统一说明 sponsor、IC 投票、否决、reserve allocation 和 conflict process。署名文章、board seat、Form D related person 与最终投资决定是不同关系。

## 4. Portfolio：集中，但不能把名单当轮次数据库

官网当前列出 18 家公开 portfolio，并明确还有未公开 stealth 公司。Atlas 已连接其中 13 家：

| 产品层 | 当前交集 | 可支持的判断 |
|---|---|---|
| AI infra / models | [[company.baseten]]、[[company.cartesia]]、[[company.mistral-ai]]、[[company.essential]] | 从 inference、audio/state-space 到 foundation model 与 agent interface，下注范围覆盖模型到应用接口 |
| Agent / enterprise | [[company.cognition]]、[[company.sierra]]、[[company.sola]] | 既投成品 agent，也投 enterprise automation；Sola 有 Sarah + Pranav 官方署名 |
| Vertical AI | [[company.harvey]]、[[company.open-evidence]]、[[company.latent]] | 法律和医疗是集中组合的重要组成；Latent launch 提供具名采用与结果，但仍是投资方文章 |
| AI-native media/research | [[company.heygen]]、[[company.listen-labs]] | HeyGen 关系有明确领投、board 与美国化节点；Listen Labs 展示 customer research 新交互 |
| Robotics | [[company.sunday]] | 说明 thesis 不止软件，但当前 Atlas 对该公司仍是种子档案 |

### 强关系与名单关系要分开

- [[company.heygen]]：2023 年 Conviction 领投 560 万美元，Sarah 进入 board，并替代 HongShan board seat，是可结构化的高置信关系。
- [[company.sola]]、[[company.latent]]：官方 launch 文章公开署名 Sarah 与 Pranav，能支持责任归因和长期陪伴叙事；但正文没有披露具体轮次金额，不应补猜。
- 其余大部分：官网能证明 portfolio membership，不能自动证明 round、lead、board、vehicle 或首次投资时间。

## 5. 投资方法：公开 thesis 与公司选择之间的回路

Conviction 的 “Startup Ideas / Plausible Schemes” 不是泛内容营销，而是持续更新的机会地图。当前主题包括 agent tooling、web data、enterprise automation、AI-native workforce、OfficeVerse、企业 reasoning infrastructure、能源与生命科学等。

这套内容有三种用途：

1. 公开说明他们如何看技术拐点和产品缺口；
2. 为 Embed 和常规 dealflow 提供 founders 的自选择入口；
3. 把 portfolio 的经验反写成新的创业命题。

但 thesis 页面不能替代投资标准。官网没有公开统一评分卡、IC 流程或每个 idea 的资本承诺；一篇文章也不能代表团队每位投资人的完整判断。

## 6. 分发系统：小团队如何放大网络

### Embed：早期公司雷达

Embed 当前公开第七期申请，提供 25 万美元 uncapped、no-discount MFN SAFE，另有 AWS、Azure 及多家模型/推理/托管供应商 credits。每期约 10–12 家，早期批次选择率低于 1%。它同时组织 retreat、Demo Day、招聘和 advisor network。

Embed 既是投资工具，也是 cohort-based sourcing、人才与客户网络。官方把它称为 grant program，但条款是投资 SAFE；两种描述应同时保留。

### Mixture of Experts：人才市场

MoE 每两个月组织一批 AI-native 公司做 demo 和招聘。2026-06-23 的 v6 包括 Sierra、Town、Intent Lab、Keenable 与 Pascal；历史批次横跨 portfolio 和非 portfolio 公司。它把 Conviction 的公司网络转成持续人才入口，而不只是一次性招聘日。

### No Priors、Good Company 与 Commit

No Priors 连接 AI researchers/builders，Good Company 聚焦团队建设，Commit 面向早期 AI builders。三者分别覆盖技术叙事、组织经验和青年人才。它们能增强品牌、dealflow 与招聘，但公开材料没有量化这些项目带来的投资命中率或 portfolio 招聘转化。

这套系统对应 [[concept.ai-native-venture-platform]]：对于小型机构，内容、cohort、人才活动和个人品牌不是“投后附加项”，而是机构规模的杠杆。

## 7. 中文世界的认知

中文报道更多围绕 Sarah Guo 的个人经历、华裔身份、AI 早期判断与 HeyGen 美国化展开。财富中文把她塑造成“以风投引领 AI 未来形态”的人物；关于 HeyGen 的中文讨论则把 Conviction 视为美国资本与董事会身份重构的一部分。

这些材料能解释 Conviction 为什么在跨境公司中具有信号价值，但容易把机构压缩成 Sarah 一个人，也容易把身份/地缘政治影响写得强于产品和资本事实。基金、团队与 portfolio 关系仍以官方和 SEC 为基线。

## 8. 关键判断

### 判断 1：Conviction 的竞争优势是高密度 AI 网络，而不是规模

小团队没有 a16z 的 462 人运营平台，却能用 Embed、MoE、No Priors、人才团队和 founders/advisors 网络完成更窄、更密集的发现与分发。这是一种“用社区和个人品牌替代大组织覆盖”的机构设计。

### 判断 2：集中投资提高信号，也提高关键人风险

Forbes 2026 的集中组合叙事与 13 条当前 Atlas portfolio 边说明 Conviction 不是 spray-and-pray。但品牌、募资和公开 thesis 对 Sarah 的依赖仍高；Mike 的加入、两人共同进入新 vehicle，说明机构正在降低单点依赖，效果仍待观察。

### 判断 3：它是市场雷达，不是自动推荐器

Conviction portfolio、Embed 与 MoE 都能提供高质量 seed，但“入选/被投/参与活动”不等于产品规模、商业成功或适合 CP。后续仍需回到公司产品、采用、流量、社区和执行证据。

## 9. 风险与待验证

- Select I 的 indefinite offering 尚不能解释为已完成第三支旗舰基金；
- Expansion I 与 Fund II 的 portfolio 分工、reserve 和 ownership 未公开；
- 官网 portfolio 不披露全部公司，也不提供每笔 round/role/amount；
- Embed credits 是名义额度，不代表所有团队完全使用或转化为产品优势；
- Launch 文章由投资方撰写，客户结果仍需客户侧或独立来源交叉验证；
- Sarah/Mike/Pranav/Bella 的当前 sponsor 边界和 IC 机制未公开；
- 内容与人才项目的真实转化率、portfolio 覆盖率和长期效果没有统一指标。

## 10. 持续监控

- Select I 后续 Form D amendment、最终 close 与用途；
- Expansion vehicle 对现有 portfolio 的 follow-on；
- 官网 Launches 的公开署名人与新公司；
- Embed cohort 7、MoE 新批次与 Commit 人才流向；
- Sarah、Mike、Pranav、Bella 的连续投资 cluster；
- HeyGen、Sola、Latent、Sierra 等公司的 follow-on 与董事会关系。

## 11. 主要证据

### S1 官方与监管

- [Conviction 官网](https://www.conviction.com/)
- [Conviction Embed](https://embed.conviction.com/)
- [Mixture of Experts](https://www.conviction.com/moe)
- [Startup Ideas](https://www.conviction.com/startups)
- [Fund II Form D](https://www.sec.gov/Archives/edgar/data/2031663/000203166324000001/xslFormDX01/primary_doc.xml)
- [Expansion I Form D](https://www.sec.gov/Archives/edgar/data/2056437/000205643725000001/xslFormDX08/primary_doc.xml)
- [Select I Form D](https://www.sec.gov/Archives/edgar/data/2121684/000212168426000002/xslFormDX01/primary_doc.xml)
- [Investing in Sola](https://www.conviction.com/launches/sola.html)
- [Investing in Latent](https://www.conviction.com/launches/latent.html)

### S2/S3

- [TechCrunch：Fund II 与 Mike Vernal](https://techcrunch.com/2025/01/31/guos-conviction-partners-adds-mike-vernal-as-gp-raises-230m-fund/)
- [Forbes：Conviction launch](https://www.forbes.com/sites/kenrickcai/2022/10/04/ex-greylock-gp-sarah-guo-announces-conviction-partners-her-new-ai-fund/)
- [Forbes：Sarah Guo 2026 profile](https://www.forbes.com/sites/rashishrivastava/2026/05/27/sarah-guo-bet-everything-on-ai-pre-chatgpt-now-shes-one-of-the-worlds-top-investors/)
- [财富中文：Sarah Guo](https://www.fortunechina.com/shangye/c/2025-04/17/content_464501.htm)

## 研究关系

- 方法：[[method.investor-research-sop-v0]]
- 本轮过程：[[note.conviction-research-run-2026-07-21]]
- 既有判断：[[note.conviction-takeaway-2026-07-08]]
