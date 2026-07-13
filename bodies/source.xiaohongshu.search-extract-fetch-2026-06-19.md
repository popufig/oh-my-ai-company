# 小红书: AI Agent 上网三件套 Search/Extract/Fetch

平台：小红书（mmx source.platform 暂无 Xiaohongshu enum，先记为 Other）

证据等级：S3（中文内容平台方法论帖子）

作者：AI学习100天。元数据：9 赞、9 收藏、1 分享。

正文提出 Agent 上网不是直接“开浏览器”，而是分为 Search、Extract、Fetch/进入网页三层。作者把能力阶梯分为 HTTP Fetch、轻量浏览器引擎、完整无头浏览器、托管浏览器平台，并把 Browserbase / Browserless 放在“不想自己管浏览器集群时使用”的托管平台层。

判断：这条内容和我们自己的调研方法高度相关。它提醒不要把 Browserbase 当成所有上网任务的第一步：只有在需要登录、点击、JS 渲染、截图、PDF、强兼容或规模化会话时，完整浏览器/托管浏览器才合理。

配图已下载：`assets/browserbase/xhs-search-extract-fetch.webp`。
