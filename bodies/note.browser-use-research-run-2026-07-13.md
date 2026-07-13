# Browser Use 本轮调研流程与反思

## 这轮怎么跑

1. 先查 vault，确认没有 existing company/source/traffic。
2. Google 粗扫，确定强源：官网、YC company、YC launch、GitHub、seed round blog、TechCrunch。
3. 官网用 `browser open`，因为 `browser read` 只抽到局部动态内容。
4. GitHub 用 gh 读取 repo/org 数据；它比官网更能说明开源生态真实规模。
5. Docs 读 `llms.txt` 和 `CLOUD.md`，确认 Cloud 不是单纯 browser session，而是 task/session/browser/agent/profile/model 的产品系统。
6. Similarweb 抓 overview + similar sites，进入 `traffic.snapshot`。
7. 社区侧抓 HN、Reddit、Product Hunt、中文微信/linux.do/v2ex，区分增长/社区热度和可靠性风险。
8. 创始人触点只登记高置信账号：Gregor 的 X/LinkedIn，Magnus 的 X/LinkedIn；错误同名账号不收。

## 本轮新增方法经验

- 对开源驱动产品，GitHub org/repo portfolio 是核心证据，不只是官网介绍。
- Browser-agent 类产品要特别读 docs 的对象模型：Task、Session、Browser、Profile、Agent、Model，这比营销文案更能看出产品边界。
- Similarweb 的 similar sites 对 Browser Use 这种热门开源项目会混入 AI 工具目录/大平台/相邻网站，需要人工分层，不能直接当竞品表。
- 中文源对 Browser Use 特别有价值：公众号约 586 条结果，linux.do/v2ex 有教程和实际效果讨论，说明中文开发者传播比 Hyperbrowser 更强。
- Reddit 负反馈对开源产品尤其重要，因为 stars 会制造“应该能直接用”的高预期；真实用户问题往往集中在安装、慢、登录态、循环、生产可靠性。

## 工具备注

- Product Hunt 这次 `browser read` 可以抓到页面基本信息，优于之前 Hyperbrowser 搜索被 challenge 挡住的情况。
- Similarweb 页面仍需要 `open` 后等待/再 `eval innerText`，首次空内容不代表抓取失败。
