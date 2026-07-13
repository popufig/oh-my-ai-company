# Endor Labs AURI takeaway

AURI's strongest idea is separation of generation and verification: the coding agent should not be trusted to validate the security of the code it just produced.

Product pattern:
- Independent security policy/enforcement layer across AI coding agents.
- Combines agentic reasoning with deterministic program analysis.
- Verifiable evidence: data flow, call paths, reachability, exploitability.
- Reproducible/audit-ready decisions.
- Hooks/Skills/MCP/CLI integrations place AppSec inside agent workflows.

Why it matters in the agent substrate stack:
- As coding agents ship more code, risk shifts from human-written vulnerabilities to AI-generated, fast-moving, partially reviewed changes.
- Security needs to move into the agent loop, not only CI after the fact.
- Endor’s GitHub Agent Kit suggests distribution through the same developer-agent environments where code is generated.

Evidence caveat: external Google/HN community signals for AURI were not found in this pass.
