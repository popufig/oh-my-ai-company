这一轮从 Browserless 作为 Browserbase/Hyperbrowser/Browser Use 的上游参照物切入，流程比之前更清楚：

1. 先查 vault，确认无旧对象。
2. 抓官网/docs/pricing/AI-agent page/BrowserQL/comparison，理解产品分层。
3. 抓 GitHub repo 与 founder GitHub，确认技术资产和团队主线。
4. 抓官方长文和创始人访谈，补发展时间线、商业状态、GTM。
5. 用 HN 老帖看早期社区认知和反对意见。
6. 用 Similarweb 看流量结构与相似站点，避免把 Browserless 误归成纯 agent browser。
7. 用微信/小红书补中文社区，但只作为弱信号。
8. 截图与官网下载图片一起进入 assets，body 图文并茂。

本轮方法更新：

- 对老牌基础设施公司，不能只看官网最新 AI 叙事，要追早期 HN/访谈/博客，找到原始痛点。
- Similarweb similar sites 需要按“直接竞品/传统邻近/噪声/新叙事邻近”分层，否则会把 Bright Data、Browserbase、Browser Use 混成一类。
- Founder 个人账号要防同名误伤。本轮 LinkedIn/X 的 `joelgriffith` 命中了错误人物，必须用公司/访谈/GitHub 交叉验证。
- 官网 `browser read` 失败时，可以用 curl meta + browser screenshot + 子页面 read 替代，但要在 source 里标注主页正文抓取失败。
- Memex enum 仍需要先查 schema。`platform=Web`、`kind=docs/profile` 都不合法，实际要用 `Website`、`website/account`。

工具问题/可改进：

- `touchpoint.kind` 可以考虑新增 `docs` 和 `profile`，否则 docs/profile 都被迫归类到 website/account。
- Similarweb overview 有些关键数值 snapshot 不展示，但 `document.body.innerText` 可读；这一步应该成为固定动作。
