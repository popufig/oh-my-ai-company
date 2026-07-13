# Agent durable execution layer

AI agents are not just model calls. In production they become long-running distributed systems: LLM calls fail, tools fail, APIs rate-limit, users interrupt, state must persist, and partial execution cannot be lost.

Temporal is the primary example in this vault:
- Workflows capture state at every step and resume after failures.
- Activities retry failure-prone external calls.
- Workflows can run for days, weeks, months, or years.
- AI solution page emphasizes agent loops, MCP, human-in-the-loop, context engineering, inference/RAG, and self-healing retries.
- Replay 2026 adds Workflow Streams, External Payload Storage, Google ADK, OpenAI Agents SDK support, serverless workers, and stronger cloud ops.

Core product requirements for this layer:
- durable state
- retry/recovery semantics
- long-running workflow orchestration
- observability/debugging
- human-in-the-loop pauses and approvals
- streaming outputs without losing reliability
- versioning and safe deploys for in-flight work
- multi-region reliability

Primary evidence: [[company.temporal]], [[source.website.temporal-ai]], [[source.blog.temporal-series-d-2026-02-17]], [[source.portfolio.lightspeed-temporal-2026-02-17]].
