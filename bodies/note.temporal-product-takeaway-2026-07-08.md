# Temporal product takeaway

Temporal is important in the Lightspeed agent infra map because it points to a production truth: demos fail because models are not enough; the surrounding execution system must be durable.

The Temporal/Lightspeed thesis is concrete:
- Agents run longer than ordinary request-response software.
- Tool calls, LLM calls, external APIs, and human approvals fail or stall.
- If state is lost or retries duplicate work, “autonomous” workflows become manual operations burden.
- Durable execution turns agent loops into recoverable workflows.

Strong evidence:
- Temporal official Series D claims >380% YoY revenue growth, 350% weekly active usage growth, >20M installs/month, 9.1T lifetime action executions on Temporal Cloud, 1.86T for AI-native companies.
- Homepage and AI solution page now lead with AI agents and name OpenAI, Replit, Cursor, Retool, Lovable, NVIDIA, Salesforce, Twilio, Descript.
- Replay 2026 added AI-specific primitives/integrations: Workflow Streams, External Payload Storage, Google ADK, OpenAI Agents SDK, serverless workers.

Risk:
- Temporal is powerful but conceptually heavy; for small agent products, simpler workflow platforms may win early adoption.
- Agent developers may prefer framework-native orchestration until reliability pain becomes severe.
- Temporal’s opportunity is biggest where agent workflows are high-value, long-running, auditable, and failure-intolerant.
