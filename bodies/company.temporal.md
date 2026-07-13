# Temporal

Temporal 是开源 durable execution / workflow orchestration 平台，现在明确把自己定位到生产级 AI agents 和长任务工作流的可靠性层。它和 [[concept.agent-durable-execution-layer]] 对应：agent 不是一次模型调用，而是会跨 LLM、tools、APIs、人类审批、外部状态和长时间跨度运行的分布式系统。

## TL;DR

- 产品：Workflows as code + durable execution。Temporal 记录每一步执行状态，失败后从断点恢复；Activities 自动重试外部 API/LLM/tool calls；可运行 days/weeks/months/years。
- AI 转向：官网首页、AI solution、Replay 2026 都把 Temporal 直接接到 agents/MCP/AI pipelines。新功能包括 Workflow Streams、External Payload Storage、Google ADK、OpenAI Agents SDK、Serverless Workers。
- 融资：2026-02-17 宣布 $300M Series D at $5B post-money valuation；a16z lead；Lightspeed、Sapphire、Sequoia、Index、Tiger、GIC、Madrona、Amplify 参投。见 [[investment.lightspeed-temporal-series-d-2026]] 和 [[investment.a16z-temporal-series-d-2026]]。
- 规模：Temporal 官方称 revenue YoY >380%，weekly active usage +350%，installs >20M/month，Temporal Cloud lifetime action executions 9.1T，其中 AI-native companies 1.86T；可承受 150,000+ actions/sec spikes。
- 团队：[[person.samar-abbas]] 和 [[person.maxim-fateev]] 是 co-founders；二人长期在 AWS/Microsoft/Uber 做 SWF/SQS/Durable Task/Cadence 等系统，founder-market fit 很深。
- 开源/采用：官网显示 21,474 GitHub stars；GitHub org/LinkedIn/官网列出 Stripe、Netflix、Datadog、HashiCorp、Snap、Twilio、Coinbase、Yum! Brands 等采用信号。

## Product Surface

Temporal 的产品核心是把失败处理、状态持久化、重试、定时器、task queue、signals、timers、observability 等复杂逻辑从业务代码中抽走。

AI-specific surface:
- Agent loops: LLM calls and tool execution as durable Activities。
- Agents/MCP/AI Pipelines。
- Human-in-the-loop approvals。
- Context engineering and RAG pipelines。
- Workflow Streams for real-time LLM/token/tool updates while preserving reliability。
- External Payload Storage for large AI inputs/outputs。
- Google ADK / OpenAI Agents SDK integrations。
- Serverless Workers and Standalone Activities for easier deployment/job durability。

## Financing

- [[investment.a16z-temporal-series-d-2026]]: a16z led $300M Series D at $5B post-money。
- [[investment.lightspeed-temporal-series-d-2026]]: Lightspeed participated。
- Participants: [[investment.sapphire-temporal-series-d-2026]], [[investment.sequoia-temporal-series-d-2026]], [[investment.index-temporal-series-d-2026]], [[investment.tiger-temporal-series-d-2026]], [[investment.gic-temporal-series-d-2026]], [[investment.madrona-temporal-series-d-2026]], [[investment.amplify-temporal-series-d-2026]]。

## Team

- [[person.samar-abbas]]: CEO/co-founder; worked on Amazon SWF, Azure Durable Task Framework, Uber Cadence。
- [[person.maxim-fateev]]: CTO/co-founder; led AWS SWF/SQS storage backend, co-created Cadence at Uber, also worked at Google/Microsoft。

The founder history matters: Temporal is not a thin agent workflow wrapper. It is the latest generation of a problem the founders have been solving for ~20 years across AWS, Microsoft, Uber, and open source.

## Lightspeed Thesis

Lightspeed’s post [[source.portfolio.lightspeed-temporal-2026-02-17]] frames Temporal as infrastructure for agents that make mistakes but must still complete workflows. The key problem: AI demos are easy, but production fails when agents run multiple steps, make tool calls, and run for minutes/days/months. Errors compound, retries duplicate work, state is lost, and engineers manually restart supposedly autonomous processes.

This makes Temporal one layer in the broader Lightspeed agent substrate:
- [[company.exa]]: retrieval/search/context。
- [[company.temporal]]: durable execution/recovery/orchestration。
- [[company.paid]]: monetization/value proof/billing。

## Evidence

Strong official sources:
- [[source.website.temporal-home]]
- [[source.docs.temporal-home]]
- [[source.website.temporal-about]]
- [[source.website.temporal-ai]]
- [[source.blog.temporal-series-d-2026-02-17]]
- [[source.blog.temporal-replay-2026-product-announcements]]
- [[source.github.temporalio-org-2026-07-08]]
- [[source.portfolio.lightspeed-temporal-2026-02-17]]

Profile / monitoring / community:
- [[source.linkedin.temporal-company-2026-07-08]]
- [[source.x.temporal-profile-2026-07-08]]
- [[source.hn.temporal-github-2025-05-14]]

Open gaps:
- Founder LinkedIn pages were not fetched yet; only official Temporal about page was used for founder bios.
- Similarweb / traffic data not captured.
- Need reconstruct earlier rounds and original Sequoia/Index/Amplify entry points if investor-network analysis deepens.
