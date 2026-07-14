# Anyway CLI、目录与 x402 无账号实测

采集时间：2026-07-14。未注册、未充值、未发生付款。

## 结果

- `@anyway-sh/cli@0.11.1 --help` 正常，覆盖 merchant、wallet、Agent Wallet、SuperAPI 与 traces。
- `setup --check --format json` 识别本机 Codex 与 OpenClaw skill 目录。
- `wallets agents whoami` 在缺少 Agent Wallet Key 时明确失败，并说明 merchant login 不能替代 Agent auth。
- `GET https://marketplace-prod.anyway.sh/v1/api/directory/llm` 返回 37 个 services、193 个 endpoints；目录中 0 个 service 标记 `verified=true`。
- 价格非空的 endpoint 范围约 `$0.001` 到 `$3`，另有 28 个 endpoint 未标价格。
- 未付费请求 twit-sh 搜索 endpoint 返回 HTTP 402；challenge 包含 0.01 USDC、Base、USDC 合约、payTo 和 x402 v2 参数。

边界：没有执行签名重试，不能验证上游结果、结算、退款、账单与稳定性。
