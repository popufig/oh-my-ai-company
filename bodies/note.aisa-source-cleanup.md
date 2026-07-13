# AIsa 证据清理与待核验

这条 note 专门记录迁移时不能合并或不能直接外推的证据问题。

待核验项：
- Registered agents：官方融资稿是 50,000+，Forbes 是 20,000+，不能合并。需要问定义、时间点、去重、活跃和付费。
- Brand/name：X adapter name 返回 `Alsa`，LinkedIn interview 标题也是 Alsa，但官网/卷宗是 AIsa。需要确认是否品牌改名或字体误读。
- LinkedIn company URL：旧触点是 `linkedin.com/company/aisaonehq/`，官网 JSON-LD sameAs 是 `linkedin.com/company/aipayhq`。
- Agent-card URL：根路径 `https://aisa.one/.well-known/agent-card.json` 有效；API 子域 `https://api.aisa.one/.well-known/agent-card.json` 当前 404。
- Traffic snapshots：Similarweb/Semrush 来自旧卷宗，当前迁移没有重新验证。
- Team boundary：Haonan/Rain/Sodiq 等人需要确认当前角色与 full-time 状态；LinkedIn 员工搜索不可直接等同核心团队。

Related sources: [[source.news.aisa-funding-2026-07-03]], [[source.forbes.aisa-funding-2026-07-03]], [[source.x.aisa-official-profile-2026-07-08]], [[source.agent-card.aisa-root-2026-07-08]], [[source.agent-card.aisa-api-2026-07-08]], [[source.similarweb.aisa-2025-12-2026-05]], [[source.semrush.aisa-2026-07-06]].
