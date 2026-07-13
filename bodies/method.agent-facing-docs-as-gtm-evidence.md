# Method: Use agent-facing docs as product and GTM evidence

Status: draft. Derived from Exa; test on more agent infra companies before treating as SOP.

For agent infrastructure companies, documentation is not just implementation detail. It can reveal:

- Who the real user is: human developer, coding agent, enterprise buyer, or agent runtime.
- Whether the product is API-first, SDK-first, MCP-first, or dashboard-first.
- Integration friction: API keys, SDK install, code snippets, common mistakes, onboarding flow.
- Product shape: endpoints, latency modes, structured outputs, citations, streaming, categories, compliance.
- Distribution motion: whether docs are optimized for coding agents to read and act on directly.
- Ecosystem strategy: GitHub repos, MCP server, demo apps, examples, evals, status page, integrations.

Exa example:
- [[source.docs.exa-coding-agent-guide]] explicitly says it is a self-contained reference for coding agents.
- It lists common LLM mistakes and tells agents not to generate deprecated parameters.
- [[source.website.exa-mcp]] gives a remote MCP URL for Claude/Cursor/VS Code-style tools.
- [[source.github.exa-labs-org-2026-07-08]] shows open-source distribution around MCP, SDKs, company researcher, chat app, hallucination detector.

Research workflow:
1. Read homepage for positioning.
2. Read docs reference and quickstart for actual primitives.
3. Check SDKs/MCP/GitHub for integration surface and developer adoption.
4. Compare docs claims against HN/GitHub/user feedback.
5. Record docs as `source.item`, not only as touchpoint, because docs are evidence.
