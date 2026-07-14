# 投资机构 Portfolio 网络扩张方法

This method came from using Lightspeed as a seed expansion engine for AI/agent infra.

## When To Use

Use this when an investor appears repeatedly across companies we care about, and the investor publishes useful thesis/portfolio material. The goal is not to profile the investor for its own sake; it is to discover companies, product layers, people, and reusable concepts faster.

## Workflow

1. Start from official investor sources.
   - Portfolio page.
   - Investment announcement pages.
   - Thesis/research posts.
   - Team/partner pages.

2. Create hard edges first.
   - `investor` object.
   - `company` object.
   - `investment` edge with role/round/amount/date/evidence.
   - `source.item` for each official page.

3. Convert investor thesis into concepts.
   - Example: Lightspeed + Paid -> [[concept.agent-monetization-infra]].
   - Lightspeed + Exa -> [[concept.agent-search-retrieval-layer]].
   - Lightspeed + Temporal -> [[concept.agent-durable-execution-layer]].
   - Lightspeed + Endor -> [[concept.agent-security-verification-layer]].
   - Lightspeed + Luel -> [[concept.human-data-supply-layer]].

4. Only then decide which companies deserve deeper research.
   - Deep-dive if the company reveals a new layer in the stack.
   - Do not deep-dive every portfolio company just because it exists.
   - Record weak/empty platform results explicitly.

5. For each selected company, use the normal subject loop.
   - Official site/docs/blog.
   - Funding/team/investors.
   - Touchpoints.
   - Community/user feedback.
   - Product/GTM takeaway.
   - Risks/open questions.

6. Finish with a synthesis note.
   - The output should be a map, not a pile of company summaries.
   - For Lightspeed, the map became [[concept.agent-substrate-stack]].

## Lessons From This Run

- Investor thesis pages are high-yield because they often name the exact product layer the company occupies.
- Investment-edge modeling is useful: it keeps company research connected to source provenance and partner/person networks.
- The method exposes tool gaps quickly: LinkedIn noise, JS/cookie shells on company websites, and missing video transcription (`yt-dlp` absent).
- One-off articles/posts should be `source.item`; persistent company/profile/blog pages should also have `touchpoint` if we want ongoing monitoring.
- Community risk signals should be stored with evidence level and caveat, not promoted into facts.

## Example Objects

Investor: [[investor.lightspeed-venture-partners]]
Stack: [[concept.agent-substrate-stack]]
Companies: [[company.paid]], [[company.exa]], [[company.temporal]], [[company.resolve-ai]], [[company.reindeer-ai]], [[company.endor-labs]], [[company.luel]]

## 2026-07-14 Accel 调研补充

[[investor.accel]] 说明：当一家机构已经反复出现在多个目标公司背后时，不能只继续添加 portfolio edge，需要把机构本身拆成三层来研究。

### 1. Fund architecture

先确认机构能在哪些阶段下注，以及 early/growth/late-stage 资金工具如何衔接。Accel 的 $650M early-stage fund、$1.35B Growth Fund 7 和 $5B late-stage capital，解释了它为什么既能领投 Seed/Series A，也能继续参与 Cursor、Vercel、Lovable、Anthropic 等成长项目。

### 2. Partner clusters

机构 thesis 通常不是一个中心化口号。沿投资文章 byline 和 team profile 建 partner cluster，能看到不同能力圈：

- [[person.zhenya-loginov]]：enterprise adoption / GTM；
- [[person.daniel-levine]]：product-first developer infrastructure；
- [[person.rich-wong]]、[[person.ben-fletcher]]：AI / cloud / enterprise；
- [[person.josh-fang]]：coding / developer collaboration。

Partner cluster 比单纯 portfolio list 更能解释“为什么投”和“下一家可能从哪里出现”。

### 3. Portfolio control points

不要按行业标签堆公司，要问每家公司控制 Agent 生产栈的哪一层。Accel 本轮形成的图包括模型、coding/app creation、orchestration/context、browser/auth、enterprise entry、vertical workflow、payments 和 production security。

优先扩张能揭示二阶需求的对象，例如 [[company.sapiom]] 的 Agent 支付治理、[[company.tolmo]] 的生产上下文安全；不需要一次搬完 800+ portfolio。

### 本轮建模修正

- `note` 增加 `about_investor`，让投资判断能强关联机构。
- `method` 增加 `related_investors`，让研究方法能从 Investor Graph 被发现。
- Investor Map 同时展示 portfolio、source、note、method、touchpoint。
- 投资方文章可以确认投资事实与 thesis，但增长、收入、效率数字仍按 party claim 处理。

过程记录：[[note.accel-research-run-2026-07-14]]；判断：[[note.accel-ai-investment-takeaway-2026-07-14]]。
