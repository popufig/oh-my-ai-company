# Sierra 本轮调研流程与反思

## 本轮怎么跑

这轮从已有 Conviction portfolio seed 里的 [[company.sierra]] 开始，不是从空白 Google 搜索开始。先查 vault 里已有关系：Conviction、Sarah Guo、Forbes profile、旧投资关系，再补官网、产品页、客户页、融资报道、HN 社区和 X 触点。

最小闭环：

- 主体：更新 [[company.sierra]] 正文和结构化字段。
- 人物：新增 [[person.bret-taylor]]、[[person.clay-bavor]]。
- 触点：官网、blog、customers、官方 X、两位 founder X。
- 证据：官方产品/客户/融资 blog、TechCrunch/SiliconANGLE/CMSWire、HN、Similarweb no-data snapshot。
- 投资：Sequoia/Benchmark、Greenoaks、Tiger Global/GV 的几轮关系。
- 监控：官方 X 加入 AI Product list；两位 founder 加入 AI Founder list。

## 本轮方法有效的地方

1. **先查已知再外扩。** Sierra 不是偶然发现，而是从 Conviction portfolio/Forbes Sarah Guo 线索回流进公司研究。投资人网络可以持续提供高质量 seed。

2. **官网页要拆开看。** 首页、product、Ghostwriter、trust、customers、blog 讲的是不同层：定位、架构、交付、安全、客户、融资叙事。只看首页会低估产品复杂度。

3. **融资报道要和官方 blog 对齐。** 官方能确认 $350M/$10B、$950M/>$15B；ARR 这类数字来自第三方报道，必须在正文里降级标注。

4. **社区反馈负责补风险。** HN 不能当事实来源，但能暴露用户体验风险：AI support 很容易被视为 deflection；真正差异在是否能执行动作并承担责任。

5. **Similarweb 抓不到就记录缺口。** 本轮 Similarweb public page 显示 No Data，不能为了“规模感”硬写访问量。保留 no-data source 比脑补更有价值。

## 本轮工具/流程问题

- `source.item.item_type` 没有 `page`，官网页面需要先记成 `article` 或 `snapshot`。这个 schema 语义不够顺手，后续可以考虑加 `webpage`。
- shell 双引号里的 `$350M/$15B` 会被变量展开吃掉，标题要用单引号或不用 `$`。
- `asset import --name sierra/foo.png` 被扁平化成 `assets/foo.png`，不利于公司图片分目录管理。
- X list 并发 add member 会出现 `target closed while handling command`，串行重试成功。

## 下次可继续补

- LinkedIn 公司页和员工规模。
- 更系统的 Reddit/X 用户反馈。
- 竞品对比：Sierra vs Decagon vs Intercom Fin vs Zendesk AI vs Salesforce Agentforce。
- 如果能进入 Similarweb 中转站，再补真实 traffic snapshot。
