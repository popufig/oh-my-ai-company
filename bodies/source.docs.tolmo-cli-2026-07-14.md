# Tolmo CLI 文档索引与能力面

`llms.txt` 暴露的 CLI 能力包括：认证与 profile、代码仓库浏览/clone、security findings 管理、secure proxy、SQL/Cypher、Datadog monitors、threat model artifacts、网站扫描、Time Machine、CI/CD 和 Agent Skill。

Secure proxy 允许通过 Tolmo 请求 GitHub、AWS、Linear、Sentry、Datadog，凭据在服务端解析。Findings 支持 severity、visibility、status 与审计历史。图谱使用 `firstSeenAt` / `lastSeenAt` 表达历史状态。

本轮下载 v0.23.0 到临时目录验证 command surface，未登录，不测试组织数据和写操作。公开 `about` 仍写“currently in stealth”，与 6 月 launch 不一致。

原文：https://docs.tolmo.com/llms.txt
