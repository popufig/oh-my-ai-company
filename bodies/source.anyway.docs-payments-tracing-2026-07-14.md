# Anyway Payments 与 Tracing 文档

Payments: https://docs.anyway.sh/features/payments

Tracing: https://docs.anyway.sh/features/tracing

收款产品支持 Stripe 和 USDC on Base，每个 product 绑定一个 provider，并自动生成 payment link。Tracing 基于 OpenTelemetry，自动覆盖主流 LLM provider，并允许把 user/team/feature 等 association properties 关联到 trace。

Anyway 因此同时面向 seller monetization 与 buyer Agent spending；tracing 用来把模型成本、工作流和收入/订单关联起来。
