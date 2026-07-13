# Agent search and retrieval layer

AI agents need external information that is fresher and more precise than model weights. That turns search from a human-facing UI into an infrastructure layer consumed by agents.

Exa is the clearest current example in this vault:
- It offers search types from sub-second API calls to deep multi-step research.
- It exposes highlights, full text, summaries, structured outputs, and grounded citations.
- It builds vertical indexes for people, companies, papers, news, personal sites, and financial reports.
- It distributes through API, SDKs, MCP, docs optimized for coding agents, GitHub repos, and enterprise customer integrations.

Core product requirements for this layer:
- freshness
- precision/relevance
- latency modes
- token efficiency
- citations/grounding
- entity-level retrieval for companies/people/papers
- high QPS and cost control for agent loops

Open risk:
- Agents may need different retrieval stacks by vertical; a general search layer may face specialist competitors.
- Pricing and cost can block high-volume applications.
- Web crawling/scraping has policy and operational friction, especially at AI-agent scale.

Primary evidence: [[company.exa]], [[source.docs.exa-search-api-guide]], [[source.blog.exa-series-c-2026-05-20]], [[source.hn.exa-launch-2025-05-06]].
