# 触发式后台 Agent

一句话：Agent 从“你叫它做一次”变成“它从此负责这件事”。

[[company.tasklet]] 的核心差异之一是触发器系统：日程、邮件、Slack、Calendar、Drive、Webhook、RSS、YouTube、Apple Shortcuts 等事件可以让 agent 在云端 24/7 自动运行。[[source.release.tasklet-2025-12-03-v2-agents]] 说明 v2 架构允许一个 agent 挂多个触发器，并用任务列表分解和排队工作；[[source.release.tasklet-2026-04-15-triggers]] 则把触发器扩展成更完整的事件系统。

这个 concept 适合比较 Tasklet、Gumloop、Lindy、Zapier/n8n agent 化等产品。重点是：它是一次性聊天、静态 workflow，还是能长期监听和接管责任。
