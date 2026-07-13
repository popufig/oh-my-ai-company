# Lightspeed agent substrate map

This pass turns Lightspeed's AI/agent infra portfolio into a working stack map rather than a list of companies.

## Stack Layers

1. [[company.exa]]: retrieval/search/context substrate.
   - Agents need fresh, precise, cited web/context access.
   - Evidence: [[source.blog.exa-series-c-2026-05-20]], [[source.portfolio.lightspeed-exa-2026-05-20]].

2. [[company.temporal]]: durable execution/recovery/orchestration substrate.
   - Agents need long-running workflows, retries, state, recovery, auditability, and human-in-the-loop execution.
   - Evidence: [[source.blog.temporal-series-d-2026-02-17]], [[source.portfolio.lightspeed-temporal-2026-02-17]].

3. [[company.paid]]: monetization/value proof/billing substrate.
   - Agent companies need outcome-aware pricing, telemetry, margins, value receipts, and billing infrastructure.
   - Evidence: [[source.blog.paid-seed-2025-09-28]], [[source.lsvp.paid-investment-2025-09-29]].

4. [[company.endor-labs]]: AI coding security verification substrate.
   - Coding agents should not be trusted to validate the security of their own generated code; verification becomes an independent product layer.
   - Evidence: [[source.website.endor-labs-home]], [[source.portfolio.lightspeed-endor-auri-2026-03-03]], [[source.github.endor-labs-org-2026-07-08]].

5. [[company.resolve-ai]]: production operations / debugging agent substrate.
   - Once agents and software run in prod, incident investigation, RCA, and remediation become multi-agent workflows over code, logs, infra, and telemetry.
   - Evidence: [[source.website.resolve-ai-home]], [[source.portfolio.lightspeed-resolve-ai]].

6. [[company.reindeer-ai]]: enterprise workflow agent / AI services substrate.
   - Enterprise agent adoption often means closing full operational loops: skills, system integrations, human review, exception handling, and process change.
   - Evidence: [[source.website.reindeer-ai-home]], [[source.portfolio.lightspeed-reindeer-ai]].

7. [[company.luel]]: human/multimodal data supply substrate.
   - Frontier models and agent systems need rights-cleared, high-signal human data where public web/synthetic data are insufficient.
   - Evidence: [[source.yc.luel-profile-2026-07-08]], [[source.lsvp.luel-seed-2026-05-15]], [[source.blog.luel-seed-2026-05-15]].

## Synthesis

This is a better framing than "Lightspeed invests in AI." The pattern is closer to: Lightspeed is mapping the operating requirements of agents and AI-native companies in production.

The stack answers different questions:
- What does the agent know? -> Exa.
- Can it finish reliably? -> Temporal.
- Can the business price/prove/capture value? -> Paid.
- Who independently verifies generated code? -> Endor Labs.
- Who investigates production failure? -> Resolve AI.
- Who closes enterprise work loops? -> Reindeer AI.
- Where does new legally usable training data come from? -> Luel.

## Research Takeaway

Investor-led expansion works best when each company is converted into a reusable concept. The goal is not coverage of every portfolio node; it is to find missing layers in the product/market map.

Related method: [[method.investor-portfolio-network-expansion]].
Related concept: [[concept.agent-substrate-stack]].
