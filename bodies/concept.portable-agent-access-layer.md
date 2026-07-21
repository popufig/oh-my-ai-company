Portable Agent Access Layer 指把 OAuth connectors、凭证、用户/组织策略、记忆、工具、支付与计量从某一个 Agent 客户端中抽离，形成可跨 Claude Code、Codex、Cursor、OpenClaw 或自建 Agent 复用的访问与控制层。

它与 integration platform、MCP runtime、identity control plane 和 agent workspace 相邻，但控制对象不同：integration platform 主要管理 API 与 auth，identity control plane 管主体与凭证，workspace 管任务/上下文，而 portable access layer 试图让“这个用户允许 Agent 访问什么、记住什么、花多少钱”成为可迁移资产。

[[company.corespeed|CoreSpeed]] 是当前最明确采用此叙事的样本；[[company.newcore|NewCore]] 更偏企业身份与 task-scoped credentials，[[company.kylon|Kylon]] 更偏 gateway/proxy 与工作上下文。市场参照包括 Composio、Arcade、Pipedream Connect 和 Nango。当前判断置信度为 medium，因为 CoreSpeed 新产品仍处于 early access，portable memory/policy/pay 尚无公开 smoke。
