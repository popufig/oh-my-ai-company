# a16z 投资机构调研流程记录（2026-07-21）

## 这一轮为什么选 a16z

First Round 验证了精品早期机构的完整调研闭环，但它无法回答多阶段巨型机构的几个结构问题：一个品牌下面有多少资金路径、AI 是否真对应一个团队、如何避免把上百名员工和数百家公司全部搬入图谱、内容与投后平台如何和具体投资责任分开。

所以本轮的目标不是再写一篇知名 VC 介绍，而是用 [[investor.andreessen-horowitz]] 校准 [[method.investor-research-sop-v0]]。

## 实际运行路径

1. 先查 vault，确认 a16z 只剩 22 字正文，但已有 5 条强 investment：11x、Exa、Harvey、Temporal、Skyfire。
2. 从官方 About、2024/2026 fund announcement 和 SEC Form ADV 建立品牌、基金、RAUM、员工的多口径基线。
3. 读取 Team 页结构化 payload，不逐卡手抄；统计 Investment/Operations/Board Partner，并抽取关键人物的 role、vertical、社交链接和原始头像。
4. 用 AI 页面反证“AI 团队”假设：它是内容与 portfolio 聚合，实际 team vertical 没有 AI。
5. 回到五家现有 company，逐笔核验投资公告、阶段、公开署名人与 vehicle；不全量导入官方 portfolio。
6. 单独研究 EBC、New Media、Global Partnerships、Speedrun、Perennial，区分投后平台、加速器和长期资本。
7. 用中文媒体样本做认知审计，观察二手内容如何把 partner thesis 压缩成“a16z 的统一逻辑”。
8. 写入 investor、person、source、touchpoint、concept、note 与图片，最后回焊 SOP。

## 这轮有效的方法

### 先拆组织，再看主题

如果先搜“a16z AI portfolio”，很容易得到长名单和内容观点；先读取 fund announcement 与 Team payload，才发现 AI 横跨 Apps、Infra、Growth、Enterprise 等单元。这改变了后续图谱的中心：不是 `investor -> AI companies`，而是 `investor -> stage/vertical -> attributed people -> investment -> company`。

### 监管口径负责规模，官网负责产品结构

Form ADV 给出 1064.76 亿美元 RAUM、738 名员工和 88 名投顾/研究人员；官网目录给出 97 名投资团队和 462 名运营团队。并列保存比选一个“正确团队人数”更真实，因为它们回答不同问题。

### 只扩当前研究交集

a16z 公开 portfolio 很大，本轮只深挖与 Atlas 已研究公司相连的五条边，并将新发现的 long-tail 公司留为候选。这样能形成 partner cluster，又避免图谱被知名机构的 portfolio 淹没。

### 把媒体和客户入口当机构产品研究

New Media、EBC 和 Global Partnerships 不是背景介绍，而是 a16z 尝试提供的 distribution primitives。它们需要和 fund、investment、person 分开建模，并保留“选择性覆盖、缺结果数据”的反证。

## 遇到的问题

- a16z Team payload 的 `vertical_slugs` 大量重复，必须去重；直接按数组计数会制造错误。
- Pinix `site` 与部分 browser screenshot 命令本轮出现 stdout/stderr 为空、后续 shell 命令不执行；没有依赖空输出完成社区取数，中文认知改用可验证 web search 结果。
- AI portfolio 卡片由前端动态加载，正文抓取只得到容器与 disclosure；本轮不声称拿到了完整、实时 AI portfolio 数量。
- 2013 年投资决策文章过旧，只保留为历史机制，不填补当前 IC 空白。
- LinkedIn 1,004 关联成员、201–500 company size、官网 567 展示成员和 SEC 738 员工互相不同；不做强行统一。

## 方法变化

本轮新增四条 SOP 约束：

1. 多阶段机构必须先画 `brand -> strategy/vehicle -> stage/vertical`，再分析 portfolio；
2. 主题页、内容分类和基金/团队不是同一种对象；
3. byline/partner attribution 不等于 sponsor、IC vote 或独立决策权；
4. 全量团队与 portfolio 默认摘要化，只把能解释当前研究问题的人和公司建为对象。

## 停止判断

当前已能解释 a16z 的身份、资金架构、AI 组织位置、五家交集、关键人物和投后平台；继续搬运数百家公司和数百名员工只会增加边际覆盖。仍保留的关键缺口是现代 IC、allocation/conflict 机制和 Harvey 的一手归因，应作为后续触发器而不是阻塞本轮。

