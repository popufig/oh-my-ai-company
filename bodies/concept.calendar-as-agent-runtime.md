# 日历作为 Agent 运行时

日历不再只是提醒、联系人和会议链接的容器，而是 Agent 的时间轴：每个事件携带触发时点、任务类型、上下文、权限、运行历史与审批状态。Agent 可以在事件前准备材料、在截止前执行、在事件后跟进。[[company.floatboat]] 是当前明确把这一模式写进产品中心的样本。[[source.floatboat.homepage-2026-07-16]] [[source.globenewswire.floatboat-launch-2026-05-27]]

这个模式的价值在于把 reactive prompt 变成 scheduled execution，也把“记住上下文”延伸为“在正确时机使用上下文”。它的成立条件包括：事件分类准确、跨工具上下文可取、敏感动作有审批、失败可重试/回滚、时区和日历变化可传播。

当前置信度为 medium。Floatboat 已公开产品、视频与客户端，但本轮没有取得持续使用、成功率或客户侧证据。不能把一条 calendar trigger 等同于成熟的主动 Agent OS。
