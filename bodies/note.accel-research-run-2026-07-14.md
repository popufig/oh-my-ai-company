# Accel 本轮调研流程与反思

这是一轮实际过程记录，不是固定 SOP。

## 本轮怎么跑

1. 从 vault 既有五条 Accel 投资边出发，先审计 investment/source/person 是否完整。
2. 用 Accel 官方 history、fund、Globalscape/Euroscape 还原机构级资本结构与 AI thesis 时间线。
3. 沿投资文章作者和 team profile 建 partner clusters，而不是把 Accel 当成单一决策者。
4. 沿 2025-2026 官方投资文章扩张 Agent stack，优先保留能揭示新控制层的公司。
5. 用 TechCrunch 对 $5B late-stage capital 做第三方交叉验证；其余产品/采用数据保留投资方口径。
6. 下载官网 hero 与 Globalscape 原始配图，让机构报告包含可审计的视觉证据。
7. 新增公司只写成 portfolio seed，明确未完成独立公司深调。

## 本轮新增资产

- 10 个高相关 company seeds：n8n、H Company、Graphite、Port、Cursor、Vercel、Sapiom、Nova Intelligence、Agave、Tolmo。
- 4 个关键 partner：Daniel Levine、Ben Fletcher、Rich Wong、Josh Fang。
- 12 条新增/修正 Accel investment edges；Accel 当前共 17 条结构化投资事件。
- 机构官网、news、portfolio、team、X、LinkedIn 六个持续触点。
- 新建公开 X list `AI Investor`，Accel 为首个成员。

## 数据纠错

- Synthflow AI：旧记录把 Accel 写成 participant；官方投资文章明确为 Series A lead，已修正。
- Lovable：补入 $200M Series A 和 2025-07-17 公告日。
- Anthropic：官方只给 Initial Investment 2025，没有精确日期；没有用 1 月 1 日伪造日期。
- Series F 不在当前 round enum，Vercel Series F 的结构字段暂记 unknown，正文保留真实轮次。

## 方法增量

- 投资机构深调需要分三层：fund architecture、partner clusters、portfolio control points。只列 portfolio 会漏掉机构为什么能持续押中。
- 投资文章适合确认投资关系与机构 thesis，但采用/收入/效率数字仍是 party claim。
- portfolio expansion 应优先找“二阶基础设施”：Agent 起量后才出现的支付、安全、身份、上下文、治理问题。
- 本轮发现 note 缺少 investor 强关系，已新增 `note.about_investor`，并把 note 加入 Investor Map。
- partner 只有正文双链时无法稳定进入机构图谱；已新增 `person.affiliated_investors`，让四位新建 partner 与既有的 Zhenya 一起成为 Investor Map 的强关系节点。
- 机构网站流量本轮没有采集：对 VC 的规模判断，fund、portfolio、team 和 follow-on capacity 比官网 visits 更重要。

## 工具反馈

- Accel 官网和文章可被 browser read 完整抓取；homepage 正文很少，但 screenshot 可正常取得视觉内容。
- Globalscape 懒加载图片在 browser 中 naturalWidth=0，直接读取官方 CDN 素材成功。
- `source add` 使用不存在的 platform=Media 时明确报 allowed values，且没有残留 orphan object；改用 Website 后成功。

关联：[[investor.accel]]、[[method.investor-portfolio-network-expansion]]。
