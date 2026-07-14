# AI 员工操作系统

把 Agent 从一次性工具变成长期“员工”，需要的不是再加一个聊天入口，而是一组组织运行原语：

- **身份**：姓名、角色、职责、独立账号与成员关系；
- **责任**：持续拥有某类重复工作，而不是等待每次 prompt；
- **状态**：任务、优先级、阻塞、交付物、时间线与 handoff；
- **上下文**：频道、文件、记忆、日历、邮件和历史决策；
- **能力**：模型、runtime、skills、tools、credentials；
- **治理**：最小权限、按动作审批、审计轨迹、凭据隔离、删除与撤销；
- **触发**：消息、任务、事件、日历、邮件与定时 automation；
- **协作**：人-Agent、Agent-Agent 的分工、质疑、接力和冲突处理。

[[company.helio]] 是目前最完整地把这些原语放进同一个工作区的样本之一；[[company.viktor]] 更偏向进入已有 Slack / Teams；[[company.dust]] 更接近企业 Agent 平台。它们共同说明“AI employee”的竞争核心不是拟人化头像，而是谁能可靠保存责任、上下文和权限边界。[[source.helio.product]] [[source.helio.docs-control]] [[source.helio.testingcatalog]]

当前状态：active；仍需在 Raft、Multica、Bloome、Lucius 等样本中继续验证类别边界。
