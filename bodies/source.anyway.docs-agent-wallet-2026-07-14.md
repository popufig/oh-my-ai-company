# Anyway Agent Wallet 文档

URL: https://docs.anyway.sh/features/agent-wallet

公开实现要点：

- 钱包为 USDC on Base，底层为 Privy MPC；每个组织最多 5 个 Agent Wallet。
- Agent 持有 P-256 signing key，不持有 secp256k1 钱包私钥。
- 默认单笔上限 `$5`，默认阻止 direct sends，只允许通过 x402 支出。
- SuperAPI 先消耗组织级 Anyway Credits，不足时才使用 Agent Wallet 的 USDC。
- CLI 支持 create/import/whoami/policies/history/pay/sign/reset。

文档没有清楚展示日限额、任务总预算、新供应商审批、争议/退款或 human gate。
