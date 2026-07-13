# Tasklet 产品 takeaway

Tasklet 的核心不是“又一个自动化工具”，而是三件事叠在一起：

1. Agent-first 工作流：不让用户画流程图，而是让 agent 自己规划、调用工具、处理边缘情况。见 [[concept.agent-first-workflow]]。
2. 触发式后台 agent：通过日程、邮件、Slack、Drive、Calendar、Webhook 等事件长期监听，让 agent 从“做一次”变成“负责一件事”。见 [[concept.trigger-based-background-agent]]。
3. 横向工作平台：通过 connections + sandbox/browser + generated UI + shared team context，把自己推向“工作入口/AI command center”。见 [[concept.horizontal-agent-platform]]。

旧材料里“Manus 的美国版 / 骨架照搬 Manus”的说法要降级为判断，不当事实写。EP1/EP2 访谈显示，Tasklet 的叙事起点是 Shortwave 用户的 MCP/自动运行需求，架构演化有自身路径。但产品形态确实和 Manus 类产品共享一组能力：agent 对话、浏览器/沙箱、持久文件系统、工具连接和后台执行。

产品上最值得跟踪的是：Teams/共享上下文、权限审批、rollback/logging、Instant Apps 是否真的变成工作入口，而不是停留在 demo。
