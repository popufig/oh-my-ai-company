# YC P26 最近公司投资网络初盘

这是 2026-07-08 基于最近调研的 [[company.superset]]、[[company.ploy]]、[[company.arga-labs]]、[[company.lightsprint]]、[[company.tasklet]]、[[company.stablebrowse]] 补的一版投资网络。它不是完整融资数据库，重点是给后续“顺着投资机构找 portfolio”提供种子。

## 高可信关系

- [[investor.y-combinator]] -> 六家公司：Superset、Ploy、Arga Labs、Lightsprint、Tasklet、StableBrowse。证据来自各自 YC 页面/官方融资稿。
- [[investor.first-round-capital]] -> [[company.ploy]]：Ploy 官方融资稿 + The SaaS News 交叉验证，$27M seed。
- [[investor.union-square-ventures]] -> [[company.tasklet]]：USV 官方文章；USV 还是 Tasklet 客户。
- [[investor.lightspeed-venture-partners]] -> [[company.tasklet]]：Tasklet 官方融资稿、USV 文章、Sacra 交叉支持。
- [[investor.jeff-dean]]、[[investor.patrick-collison]]、[[investor.john-collison]] -> [[company.tasklet]]：Tasklet 官方融资稿和 USV 文章均提到。

## 中/低可信关系

- [[investor.sterling-road]] -> [[company.lightsprint]]：LinkedIn 动态提到 Lightsprint 是 portfolio progress，官网只确认投资模式，没有干净 portfolio 列表。
- [[investor.sudhir-prasad]] -> [[company.arga-labs]]：LinkedIn 动态抓取很脏，但有实质片段说他从客户转为投资人。
- [[investor.sibtain-jafferi]] -> [[company.arga-labs]]：同一 LinkedIn 片段提到，间接且需复核。
- [[investor.pioneer-fund]] / [[investor.taro-fukuyama]] -> [[company.superset]]：目前只有 Google/LinkedIn 线索，LinkedIn 主文未干净抽取，Pioneer 官方 portfolio 抓取为空壳，保留为 low confidence。

## Portfolio 扩张种子

First Round 官方 portfolio 页给出了一批和我们方向相关的节点：[[company.clay]]、[[company.fal]]、[[company.gumloop]]、[[company.parallel]]。它们已作为 `portfolio-seed` 轻量公司节点加入，后续可选一个继续深挖。

Lightspeed 官方页面/文章给出另一批 agent infra 种子：[[company.exa]]、[[company.temporal]]、[[company.resolve-ai]]、[[company.paid]]、[[company.reindeer-ai]]、[[company.endor-labs]]。这些是更偏 agent production / durable execution / monetization / security 的基础设施方向。

## 重要方法注意

- `investment` 是独立 schema，不是 investor 的字段，因为投资关系本身有轮次、金额、角色、日期、证据、可信度。
- 空壳来源也入库：[[source.portfolio.pioneer-fund]] 和 [[source.dealroom.stablebrowse-2026-06-empty-shell]] 明确不能当结论证据。
- `portfolio-seed` 公司只是网络种子，不等于完整公司档案。
