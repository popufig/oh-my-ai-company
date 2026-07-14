# Sintra 本轮调研过程与反思（2026-07-15）

## 实际路径

从“AI employee / AI workforce”进入 [[company.sintra]]，先用 Tech.eu 的创始人访谈建立 launch、早期 PMF、规模和融资时间线，再用 Help Center 拆 12 Helpers、Brain AI、workspace、integrations、scheduled tasks、credits、models、Builder 和安全边界。官网主站被 Cloudflare challenge 拦截，没有把 challenge 页面当正文。

产品结构确认后，分别补 iOS/Google Play 采用信号、LinkedIn 团队、Earlybird/Inovo/Practica 投资边、第三方流量、YouTube/X affiliate、Reddit 使用反馈、微信和小红书。最后用 Marblism、Synta、Vizzy Labs 回查算法相似站点，区分直接竞品、场景邻接和噪声。

## 本轮有效动作

1. **渠道证据交叉验证。** Similarweb 显示 Affiliate、Display、Paid Search 和 YouTube 占比高；YouTube description 又直接披露 sponsored/affiliate，X/Reddit 也出现 discount code。多源拼起来才能确认 performance marketing，而不是凭单条推广猜测。
2. **评论先查 provenance。** LovedByCreators 的 299-score 长帖如果只看分数会被误判为强口碑；版主 affiliate link、AutoModerator 社区定位和 coupon 请求说明它首先是推广资产。
3. **Credits 反算任务容量。** 不停在“97 美元买 12 员工”，而是读 action credit cost，发现 250 credits 对复杂任务的真实上限只有约 12–50 次。
4. **文档横向自洽审计。** Help Center 写不再销售 individual helper，却保留 39 美元表格；website 与 app store 分渠道定价；Google Play 写 6000 businesses，iOS 写 6 万。冲突留存，不选最好看口径。
5. **角色前台与平台底座分开。** 12 个 Helpers、Brain、Composio integrations、tasks、Builder/Marketplace 被拆成不同层，避免把卡通形象误写成 prompt wrapper，也避免把 Builder 误写成成熟复杂自动化平台。
6. **应用商店作为规模与产品素材源。** iTunes Lookup 和 Google Play 同时提供版本、评分、评论、下载门槛、价格文案和真实官方图片，弥补主站不可抓取。
7. **算法相似站点逐个做语义检查。** Marblism 是直接竞品；Synta 是 n8n workflow builder，Vizzy Labs 是 UGC 平台。相似度不等于竞争关系。

## 失败与纠偏

- 官网主站、隐私页和 Trustpilot 被 challenge 拦截，均标为抓取失败；没有用空壳或 Google snippet 替代全文。
- Product Hunt/HN 未发现有效 launch；HN 的 Sintra 搜索被 Sinatra 同名实体污染，因此只记录未发现。
- 未登录 app 只验证到登录/注册边界，没有创建账号或声称完成实际任务。
- Tech.eu 的 ARR、付费客户与 57 天增长都是公司/创始人口径；融资方能确认 round，但不能独立审计经营数据。
- Similarweb 顶卡 303.8 万 total visits 与月线 125.1 万合计冲突，只用月线判断趋势。
- Reddit 负面评论有竞品推荐，正面评论也可能带 coupon；只提炼重复问题类型，不统计口碑比例。
- 中文小红书出现 ARR/融资数字对调；该对象降为 S4 misinformation sample，不进入事实段。

## 对前几轮方法的修正

Lindy 让我们看到“成品助理作为平台入口”，11x 让我们审计服务含量、客户证据和可信度；Sintra 又补了一层：**当产品采用消费 SaaS 式 affiliate/creator 分发时，研究必须审计 review 的利益关系，并把订阅价格还原为任务计量。**

这两个动作已经在 Sintra 的 YouTube、X、Reddit 和 credits 中同时成立，但仍只作为候选方法写回 [[method.product-research-workflow-v0]]。下一轮研究 Marblism 时应复测：是否同样由 affiliate 贡献主要流量，以及“AI employee 价格”是否同样被 credits/usage 隐藏。
