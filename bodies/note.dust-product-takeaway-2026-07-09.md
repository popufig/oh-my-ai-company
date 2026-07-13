# Dust 产品 takeaway

[[company.dust]] 对我们最有价值的点不是“又一个 AI agent 公司”，而是它把企业 agent 的问题讲成了 **multiplayer workspace**：single-player chat 不会沉淀组织记忆，企业需要一个让员工、agents、公司知识、工具和治理共处的工作空间。

和 [[company.viktor]] 对照：

- Viktor 更像“AI employee”：用户在 Slack/Teams 里交任务，Viktor 负责交付结果。
- Dust 更像“agent workspace / operating layer”：团队配置、复用、调用、治理多个 specialized agents。
- Viktor 的 GTM 更进攻：融资 PR、paid search/social、creator、Product Hunt/活动混合放大。
- Dust 的流量更像产品/工作区使用驱动：Similarweb public page 显示 direct 83.14%，访问 5.62 页、平均 5 分 34 秒，bounce 29.25%。
- Dust 的商业包装更像 enterprise SaaS + usage：Pro $24/seat/mo、Max $120/seat/mo，加 credits；Enterprise 再卖 connectors、MCP、SCIM、audit logs、custom retention、single-tenant、CSM/SLA。

产品启发：

1. **不要只做入口。** Slack/Teams 入口重要，但 agent 一旦进入企业，就会需要 workspace、agent directory、权限、数据源、tools、MCP、triggers、analytics。
2. **多人协作是 enterprise agent 的分水岭。** 个人 agent 可以靠 prompt 和 chat；企业 agent 要能在 shared context 里被团队共同使用和审计。
3. **agent 管理会变成核心问题。** 如果 Dust 的 300,000+ agents deployed 口径成立，那企业真正痛点会从“建 agent”转向“发现/治理/评估/复用/安全”。
4. **执行能力要继续验证。** Dust docs 显示 tools、MCP、triggers、Slack/Teams、write-back，但需要进一步看客户案例，确认它到底是知识/RAG 辅助为主，还是能稳定做跨系统业务执行。
5. **AI Operator 可能是新的企业内部角色。** Dust 明确把目标用户讲成 AI Operators：不是普通终端用户，而是会 build/deploy/run agents for teams 的内部 operator。这对我们理解企业 agent adoption 很关键。

下一步如果深挖 Dust，优先看三件事：

- 客户案例：Vanta、Qonto、Watershed、Pennylane。
- 产品体验：agent builder、Slack/Teams 调用、tools/MCP、trigger/write-back。
- 社区/用户反馈：LinkedIn/X/客户团队 post 可能比 HN/Reddit 更有效。

关联证据：[[source.dust-homepage-2026-07-09]]、[[source.dust-product-page-2026-07-09]]、[[source.dust-pricing-page-2026-07-09]]、[[source.dust-docs-tools-2026-07-09]]、[[source.dust-series-b-tnw-2026-05-18]]、[[source.similarweb.dust-2026-06]]。
