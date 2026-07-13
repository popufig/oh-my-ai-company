# Arga agent and security testing docs

URL: https://docs.argalabs.com/features/agent-security-testing

Evidence level: S1 official docs

Capture quality: full enough. `browser read` returned substantive docs content.

## What This Source Says

This docs page expands Arga from ordinary validation into agent/security testing. It says Arga includes red-teaming in validation workflows and tests AI agent behavior inside controlled environments backed by digital twins.

Important points:

- Arga tests software with adversarial inputs, unexpected interaction patterns, simulated failures, timeout/rate-limit/malformed-response scenarios.
- For AI agents, it checks prompt injection/jailbreak resistance, ambiguous or conflicting instructions, boundaries on tool use/data access, and degradation when external services fail.
- Arga records API calls, state changes, and decision points so agent behavior can be audited.
- The page explicitly argues that traditional unit tests cannot cover the combinatorial space of non-deterministic agent behavior.

## Modeling Notes

This source is useful because it shifts Arga from “testing infrastructure” to a more specific thesis: agent behavior needs sandboxed, stateful, auditable validation. That makes it comparable with StableBrowse, Superset, and future agent infrastructure companies.
