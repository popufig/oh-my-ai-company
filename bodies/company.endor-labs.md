# Endor Labs

Endor Labs is an application security company now positioning itself around AI-generated and human-written code. In the Lightspeed agent-infra map, the useful abstraction is not just "AppSec vendor" but [[concept.agent-security-verification-layer]]: an independent layer that verifies what coding agents produce.

## What It Is

Endor's homepage frames the product as an agentic application security platform for the AI era. Its AURI product combines agentic reasoning with deterministic program analysis, with the specific claim that an AI coding agent should not be trusted to validate the security of its own code.

The product pattern is separation of generation and verification:
- Coding agents generate or edit code.
- AURI acts as security intelligence around that flow.
- Evidence includes data flow, call paths, reachability, exploitability, contextual fixes, and reproducible audit material.
- Workflow insertion points include Hooks, Skills, MCP, CLI, and GitHub Agent Kit integrations.

This puts Endor in a different layer from [[company.resolve-ai]] or [[company.temporal]]: it is not orchestrating work or debugging prod; it is validating code/security risk before risky changes enter production.

## Team And Lightspeed Link

The known founding/leadership signal in this pass:
- [[person.varun-badhwar]]: founder / CEO.
- [[person.dimitri-stiliadis]]: founder / CTO.
- [[person.georgios-gousios]]: Chief Researcher / research leadership signal.

Lightspeed has an explicit Endor/AURI thesis page, and the portfolio page ties Endor to supply-chain risk, safe OSS adoption, Dependency Lifecycle Management, program analysis, and call graphs. The exact financing round/amount was not captured from the available Lightspeed source, so [[investment.lightspeed-endor-labs-auri-2026]] keeps round as unknown instead of guessing.

## What We Can Learn

Product-side takeaway: AI coding changes the security problem from periodic review to continuous verification inside the agent workflow. The important concept is not "scan code after CI" but "put an independent verifier into the same surfaces where code is created."

GTM-side takeaway: Endor's distribution surface is developer workflow integration. The GitHub org includes Agent Kit and assistant-specific plugins/adapters, which suggests a useful infra GTM pattern: meet coding agents where developers already run them, instead of only selling a dashboard.

Evidence caveat: in this pass, Google and HN did not surface strong public community discussion specific to AURI. Current conclusions rely mainly on official company/Lightspeed material and product artifacts.

## Evidence

- [[source.website.endor-labs-home]]
- [[source.portfolio.lightspeed-endor-auri-2026-03-03]]
- [[source.github.endor-labs-org-2026-07-08]]
- [[source.x.endor-labs-profile-2026-07-08]]
- [[source.search.endor-labs-auri-2026-07-08]]
- [[note.endor-labs-auri-takeaway-2026-07-08]]
