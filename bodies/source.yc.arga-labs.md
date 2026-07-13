# Arga Labs YC profile

URL: https://www.ycombinator.com/companies/arga-labs

Evidence level: S1 official

Capture quality: full enough for product/team summary. `browser read` returned substantive text, not a cookie/nav shell.

## What This Source Says

YC describes Arga Labs as real-world sandboxes for testing agents and agent-facing software. The page frames the problem as engineers becoming much faster at writing code with AI, while testing remains slow, inaccurate, and hard to scale against real integrations.

Key points captured:

- Founded in 2025 by Phillip Li and Akira Tong.
- Team size shown as 3 employees, based in San Francisco.
- Arga spins up temporary staging scoped to a PR/change.
- Changed services are redeployed; unchanged services can route to production.
- Dependencies can run as in-memory sidecars to avoid corrupting production data.
- Twins of external services such as Stripe, Slack, GSuite, HubSpot are used to avoid real API limits and state pollution.
- Agents or humans can prompt Arga through web, API, CLI, or MCP to generate and run tests and return logs/results.

## Modeling Notes

This source supports:

- `company.arga-labs`
- `person.phillip-li`
- `person.akira-tong`
- `touchpoint.arga-yc`

It should also support a future concept around “agent validation layer” or “real-world sandbox for agent-written code”.
