# Duvo developers.md

采集时间：2026-07-09。

Developer markdown 定位：Duvo gives developers the production operating layer around agent work: durable queues, agents, tools, approvals, files, schedules, webhooks, multi-agent routing, MCP, and audit-ready runs。

公开 resources：OpenAPI、API reference、auth、webhooks、MCP、agent discovery manifest、agent-card、MCP server card、agent skills repo、Duvo CLI npm package、CLI guide。

CLI：官方 npm package `@duvoai/cli`，binary `duvo`，Node.js 22.22+，支持 runs/cases/approvals/inspections。

约束：API/MCP/webhook/sandbox access 需要 provisioned workspace；agents cannot bypass RBAC/SSO/customer policy gates/human approvals；生产 use case 应先定义 approval thresholds、audit requirements、data residency、allowed tools。

研究价值：Duvo 不只做业务 SaaS，它把自己包装成 production runtime / operating layer for agents。

关联公司：[[company.duvo]]。
