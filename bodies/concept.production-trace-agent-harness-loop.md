# 生产轨迹驱动的 Agent Harness 改进闭环
传统 Agent 产品会把 production traces 当日志或支持材料；这个模式进一步把每次失败、恢复、工具调用和成本转成下一版 harness 的训练集与 skill 设计输入。

[[company.nanocorp]] 的 nano 1.5 是当前样本：官方称它由上一版生产轨迹端到端构建，增加 9 个从失败中归纳的 skills，并报告平均 cost-bearing task 成本从 $2.33 降到 $1.56、中途失败自动恢复率从 60% 升到 86%、中位任务时长从 9.5 分钟降到 7.6 分钟。[[source.nanocorp.nano-1-5-2026-05-21]]

## 判断边界

这些数字来自供应商自测，没有独立 benchmark、样本量、任务分布或 accepted outcome 指标。它们能证明团队在按生产故障改 harness，不能直接证明业务结果质量提高 33% 或 86%。后续应继续追踪版本间 cohort、用户留存、任务验收和成本转嫁。
