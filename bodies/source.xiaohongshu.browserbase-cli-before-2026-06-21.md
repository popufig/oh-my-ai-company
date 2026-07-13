# 小红书: 浏览器Agent用Browserbase CLI前

平台：小红书 / AI科技

证据等级：S3（中文内容平台帖子）

这条小红书笔记的价值不在热度，而在它把 Browserbase CLI 的风险边界讲得很贴近生产环境：接入 Browserbase CLI 前，要区分远端浏览器基础设施、真实登录态、本地 QA 点击、密钥环境、session/context 复用、function/fetch/search 与真实浏览器动作的边界。

可用信号：
- 中文开发者已经开始讨论 Browserbase 接入前的工程边界，而不只是“AI 能不能打开网页”。
- 重点风险是复用错 context、混用一次性登录排查和可复用自动化、密钥写进仓库、跑完没有可追踪产物。
- 建议流程是先定义任务，再分离 session/context，再审凭证，最后保存 URL、截图、日志或函数输出作为产物。

判断：这条笔记虽然互动少，但和我们自己的 browser-agent 调研方法高度相关。它说明 Browserbase 生产化核心不是 session API，而是状态、凭证、审计和产物边界。
