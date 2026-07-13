# Duvo MCP.md

采集时间：2026-07-09。

Duvo supports MCP as an agent integration surface for approved workspaces。

Hosted MCP：endpoint https://api.duvo.ai/v2/mcp；use cases 包括 start runs、create cases、inspect approvals、retrieve run messages、expose Duvo tools to compatible agents。

Custom MCP servers：用于 expose internal systems、domain-specific tools、proprietary workflows；强调 tool descriptions specific/scoped/auditable，sensitive actions route through human approvals or policy gates；MCP tools 是 governed production capabilities，不是 arbitrary shell access。

研究价值：MCP 在 Duvo 里不是玩具集成，而是企业 agent runtime 的 governed interface。

关联公司：[[company.duvo]]。
