# linux.do: Browserbase 替代与注册自动化讨论

证据等级：S3（中文开发者社区讨论）

这条讨论把 Browserbase 放在注册自动化/账号自动化的语境里，出现了 Browserbase 403、手机号验证、替代方案等反馈。

可用信号：
- 有用户直接问 Browserbase 是否不能用了，以及有没有替代。
- 有人提到可以尝试 Playwright + Stagehand，但需要手动给 Stagehand 提供模型。
- 有报错样例：Browserbase 创建 session 失败，HTTP 403 / Access denied。
- 手机号验证、风控验证是绕不过去的真实约束。

判断：这不是 Browserbase 希望强调的企业主流用例，但它暴露了中文开发者对 browser infra 的强需求集中在“真实网站能不能跑通、会不会被挡、能不能省成本/替代”。同时也有灰色用途风险。
