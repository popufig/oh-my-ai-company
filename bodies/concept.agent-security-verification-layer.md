# Agent security verification layer

Pattern: when AI coding agents become code generators, security should not rely on the same agent to verify its own output. A separate verification layer sits around the coding workflow and produces independent, reproducible evidence.

Endor Labs / AURI is the concrete seed in this vault:
- [[company.endor-labs]] positions AURI as security intelligence for agentic software development.
- The homepage emphasizes agentic reasoning plus deterministic program analysis.
- Evidence is not just a vulnerability label; it includes data flow, call paths, reachability, exploitability, contextual fixes, and audit-ready reproduction.
- Distribution happens through the developer-agent workflow itself: Hooks, Skills, MCP, CLI, and GitHub Agent Kit.

Why this matters:
- AI coding tools compress code production time, so review bottlenecks move to security, policy, and deployability.
- The key architectural principle is separation of duties: generator != verifier.
- For investor mapping, this is a security/control-plane layer in the broader [[concept.agent-substrate-stack]], alongside retrieval, durable execution, monetization, workflow automation, and data supply.

Evidence: [[source.website.endor-labs-home]], [[source.portfolio.lightspeed-endor-auri-2026-03-03]], [[source.github.endor-labs-org-2026-07-08]].
