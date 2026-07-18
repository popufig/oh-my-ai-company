API 文档给出 SaaS 根地址 https://api.evose.ai/v1，资源包括 workspaces、agents、workflows、knowledge-bases、models 和 webhooks，并声称支持幂等 Idempotency-Key 与 request_id 可观测。

Node/TypeScript、Python SDK 都标为“即将发布”，Go/Java 仍在路线图。当前建议直接 HTTPS 调用。这说明公开 API 叙事已经成型，但 SDK 生态尚未交付。
