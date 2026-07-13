# Duvo pricing.md

采集时间：2026-07-09。

Pricing markdown 明确：Duvo charges one fixed price per process run, measured in cents。

关键点：

- process run = one completed unit of work，例如 one invoice processed、one price change、one SKU recovered。
- 10,000 invoices = 10,000 runs。
- not per token；token usage 是 Duvo 自己的成本管理，不作为客户 bill。
- no per-seat fees；unlimited users can approve and monitor。
- per-process price 按客户流程和 expected volume scoped，不公开列价。
- evaluation workspace / API / MCP / webhook / sandbox access 需要 Duvo provisioned workspace。

研究价值：这说明 Duvo 把商业包装绑定到业务工作单元，而不是模型 token 或 seat。对 vertical AI workforce 很有参考价值。

关联公司：[[company.duvo]]。
