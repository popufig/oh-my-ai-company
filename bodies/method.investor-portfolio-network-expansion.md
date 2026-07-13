# Investor portfolio network expansion

This method came from using Lightspeed as a seed expansion engine for AI/agent infra.

## When To Use

Use this when an investor appears repeatedly across companies we care about, and the investor publishes useful thesis/portfolio material. The goal is not to profile the investor for its own sake; it is to discover companies, product layers, people, and reusable concepts faster.

## Workflow

1. Start from official investor sources.
   - Portfolio page.
   - Investment announcement pages.
   - Thesis/research posts.
   - Team/partner pages.

2. Create hard edges first.
   - `investor` object.
   - `company` object.
   - `investment` edge with role/round/amount/date/evidence.
   - `source.item` for each official page.

3. Convert investor thesis into concepts.
   - Example: Lightspeed + Paid -> [[concept.agent-monetization-infra]].
   - Lightspeed + Exa -> [[concept.agent-search-retrieval-layer]].
   - Lightspeed + Temporal -> [[concept.agent-durable-execution-layer]].
   - Lightspeed + Endor -> [[concept.agent-security-verification-layer]].
   - Lightspeed + Luel -> [[concept.human-data-supply-layer]].

4. Only then decide which companies deserve deeper research.
   - Deep-dive if the company reveals a new layer in the stack.
   - Do not deep-dive every portfolio company just because it exists.
   - Record weak/empty platform results explicitly.

5. For each selected company, use the normal subject loop.
   - Official site/docs/blog.
   - Funding/team/investors.
   - Touchpoints.
   - Community/user feedback.
   - Product/GTM takeaway.
   - Risks/open questions.

6. Finish with a synthesis note.
   - The output should be a map, not a pile of company summaries.
   - For Lightspeed, the map became [[concept.agent-substrate-stack]].

## Lessons From This Run

- Investor thesis pages are high-yield because they often name the exact product layer the company occupies.
- Investment-edge modeling is useful: it keeps company research connected to source provenance and partner/person networks.
- The method exposes tool gaps quickly: LinkedIn noise, JS/cookie shells on company websites, and missing video transcription (`yt-dlp` absent).
- One-off articles/posts should be `source.item`; persistent company/profile/blog pages should also have `touchpoint` if we want ongoing monitoring.
- Community risk signals should be stored with evidence level and caveat, not promoted into facts.

## Example Objects

Investor: [[investor.lightspeed-venture-partners]]
Stack: [[concept.agent-substrate-stack]]
Companies: [[company.paid]], [[company.exa]], [[company.temporal]], [[company.resolve-ai]], [[company.reindeer-ai]], [[company.endor-labs]], [[company.luel]]
