## 本轮实际流程

Seed 来自 [[company.teamday]] 官方 compare 页面和自然搜索关键词 Polsia。先查官网/about/live，发现 public dashboard API 后，不再停留在营销页；随后补 Product Hunt、X、LinkedIn、创始人长访谈、Terms/Privacy/Subprocessors、第三方流量、HN/Reddit、中文媒体与小红书。

实际扩张链：

- 产品：idea → company shell → infrastructure → recurring task → ads/email/payment；
- 指标：live card → public API → headline ARR 拆账 → created/active/paid/churn；
- 人与资本：Ben Cera → $30M 融资 → 7 家机构 → $1M pre-seed 待核验；
- 人力边界：zero employee → 4 家合作公司工程师 → vendor stack → human final calls；
- GTM：PH launch → product name/solo performance art → live dashboard/data room → 高频生成内容；
- 反证：Reddit 付费自述、HN 批评站争议、当前 API 复查与历史状态区分；
- 中文世界：微信/36Kr/数位时代/小红书，区分二次传播与用户采用。

## 本轮有效的方法

1. **公开指标不能只抄 headline，要复算公式。** 这轮最重要的结论来自把 subscription MRR 和过去 30 天其他现金流分开，而不是站队“$10M ARR”或“zero ARR”。
2. **规模至少分 created / active / paying / successful。** 自治公司产品极易用生成量制造虚假规模感。
3. **零员工叙事要做 labor boundary audit。** 查正式 employee、contractor/fractional、partner engineer、供应商、人类 final call 与支持升级。
4. **自治产品必须读 operating contract。** Terms 比首页更能说明广告、支付、邮件、退款、merchant-of-record 和 liability。
5. **批评性材料必须 current recheck。** 历史报告称 fund API 公开，本轮已是 401；不能把历史暴露写成当前事实。
6. **中文高互动内容要打开全文。** 小红书标题“开始倒闭”并没有证明 Polsia 倒闭；互动量只说明传播。

## 失败与边界

- Trustpilot 当前被 verification 拦截，未抓到正文；只保留二手历史口径，不写当前评分。
- Hacker News adapter 本轮 fetch failed，改用 HN 官方 Firebase item API + 浏览器页面；应反馈工具，但不阻塞证据。
- Similarweb selector screenshot 因 clip 坐标报错，改用 viewport 后精确 clip；正文数据用 DOM 文本抽取，截图只作视觉证据。
- Semrush 关键词存在消费类污染，不能把 8.4K 直接解释为产品 SEO。
- 没有注册、付费或让 Polsia 执行不可逆动作，因此不声称亲自验证端到端成功率。

## 下一轮触发器

- 官方 dashboard 的订阅 MRR、30-day churn、active/total 比例发生显著变化；
- 发布 cohort、客户公司收入或独立成功案例；
- 修改 20% 广告/收入费率或 $500/月提现上限；
- 明确 $30M round/lead 或 $1M pre-seed 投资人；
- AutoFounder、Nanocorp 等同层产品通过主体核验。

本轮更新 [[method.product-research-workflow-v0]]，只新增适用于高自治/高公开指标产品的候选动作，不扩成所有公司统一模板。
