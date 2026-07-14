# Sintra workspace features and their interaction

官方文档解释 Workspace、Brain AI、Helpers、Chat、Inbox、Integrations、Automations 与 scheduled tasks 的关系。每个 workspace 独立保存业务上下文、连接与任务；Brain AI 为同一 workspace 内的 Helpers 提供共享知识。Helpers 可委派工作，但并行聊天彼此独立。

**可支持：** Sintra 不只是 12 个提示词角色，而是一套 workspace + shared context + action surface 的产品架构。

**边界：** 文档明确复杂的多步 chained workflows 尚未开放，不能把 helper delegation 写成任意多 Agent 编排已成熟。
