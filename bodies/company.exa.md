# Exa

Exa 是 AI agents 的 search / retrieval infrastructure 公司。它把“搜索”从人类输入关键词、看结果页，转成 agent 可以在工作流里调用的 API/MCP/SDK：返回 fresh web data、highlights、full text、structured output、grounded citations、people/company/paper/news 等 vertical indexes。核心概念见 [[concept.agent-search-retrieval-layer]]。

## TL;DR

- 产品：Web search built for AI agents，一套 API 覆盖 search、crawling、research agents、contents、deep search、monitors、agent runs、MCP。
- 规模：官方 2026-05 Series C 公告称 Exa powers Cursor, Cognition, HubSpot, OpenRouter, Monday.com and over 400,000 developers；over 5,000 companies use Exa；crawlers track 500B+ URLs；估值 $2.2B。
- 融资：2026-05-20 宣布 $250M Series C at $2.2B valuation，a16z lead；Lightspeed、Benchmark、YC、NVIDIA Ventures 等参与。Lightspeed 称其 led Series A, doubled down at Series B, participated in Series C。
- 团队：[[person.will-bryk]] 和 [[person.jeff-wang]] 为 co-founders；Harvard 背景；Will 早期在 Cresta，Jeff 在 Plaid 做 data/web infra。
- 社区：Launch HN 2025-05-06 拿到 412 points / 133 comments，且创始人主动回复产品演进、适用边界、pricing/latency/UX 反馈。见 [[source.hn.exa-launch-2025-05-06]]。
- 开发者生态：GitHub org 有 102 repos；Exa MCP repo 4.7K stars；Company Researcher 1.5K stars；官方 Python/JS SDK。见 [[source.github.exa-labs-org-2026-07-08]]。

## Product Surface

Exa 的官网、docs、pricing 和 MCP 页面合起来看，产品已经不止一个 search endpoint：

- Search API：自然语言搜索，支持 long semantic queries。
- Contents API：抓网页 clean content / highlights / full text。
- Deep / Deep-reasoning Search：为复杂 research query 提供多步搜索和 structured output。
- Agent：高计算 web agent，用于 deep research、list building、enrichment。
- Monitors：检测 public web change events，适合 CRM/GTM workflow。
- MCP Server：把 Claude、Cursor、VS Code 等 AI tools 直接接入 Exa search / code search / research。
- Vertical categories：company、people、research paper、news、personal site、financial report。

关键产品判断：Exa 的真正战场不是“搜索结果页”，而是 agent workflow 里的 retrieval primitive。对 coding agents、CRM agents、research agents 来说，搜索要输出的是可信、可引用、低 token 成本、可结构化处理的数据。

## Financing

- [[investment.a16z-exa-series-c-2026]]: a16z led $250M Series C at $2.2B valuation。
- [[investment.lightspeed-exa-series-c-2026]]: Lightspeed participated; Lightspeed story says it had led Series A and doubled down at Series B。
- [[investment.benchmark-exa-series-c-2026]]、[[investment.yc-exa-series-c-2026]]、[[investment.nvidia-ventures-exa-series-c-2026]]: Series C participants。

## Team

- [[person.will-bryk]]: CEO & co-founder; Exa about page says he was one of the first engineers at Cresta after studying CS/physics at Harvard。
- [[person.jeff-wang]]: co-founder; Exa about page says he spent 3 years building data/web infra at Plaid after studying CS & Philosophy at Harvard。
- About page lists a broad technical team with backgrounds in Google, Apple, Meta/Yandex/Google Research (in Series C post), Tsinghua Yao Class, MIT, Princeton, CMU, NYU, etc. This supports the “search from scratch” infrastructure ambition.

## Customer / Adoption Evidence

- Official Series C post: Cursor, Cognition, HubSpot, OpenRouter, Monday.com, 400K+ developers, 5K+ companies。
- [[source.customer.exa-cognition]]: Cognition case says Exa powers web search across agentic products; quote says “Exa powers all parts of Devin.”
- [[source.customer.exa-hubspot]]: HubSpot uses Exa for Breeze Assistant/Agents to connect CRM workflows to live people/company/web intelligence; Monitors API detects change events。
- [[source.linkedin.exa-company-2026-07-08]] corroborates LinkedIn overview: Exa Search and Exa Agent power those named logos and 400K+ developers。

## Community Feedback

[[source.hn.exa-launch-2025-05-06]] is unusually useful because HN users pressure-tested Websets:

Positive signals:
- Developers understood “web as database” and list-building/enrichment use cases quickly。
- Several comments compared it favorably to generic Deep Research when users need tables, vendor lists, people/company research, or citations。
- Founder replies were specific and transparent。

Risk/negative signals:
- Latency and unclear progress UI。
- Pricing concerns for high-volume usage。
- Mobile/table layout and browser performance issues。
- Quality limitations on products/ecommerce, auth-gated content, non-English content, and some highly constrained queries。
- Crawling/scraping ethics and site-owner cost concerns。

## Evidence

Strong official sources:
- [[source.website.exa-home]]
- [[source.website.exa-about]]
- [[source.docs.exa-search-api-guide]]
- [[source.docs.exa-coding-agent-guide]]
- [[source.blog.exa-series-c-2026-05-20]]
- [[source.pricing.exa-2026-07-08]]
- [[source.website.exa-mcp]]
- [[source.github.exa-labs-org-2026-07-08]]
- [[source.customer.exa-cognition]]
- [[source.customer.exa-hubspot]]
- [[source.portfolio.lightspeed-exa-2026-05-20]]

Profile/social/community:
- [[source.x.exa-profile-2026-07-08]]
- [[source.linkedin.exa-company-2026-07-08]]
- [[source.linkedin.will-bryk-profile-2026-07-08]]
- [[source.linkedin.jeff-wang-profile-2026-07-08]]
- [[source.hn.exa-launch-2025-05-06]]

Open gaps:
- Exa Series A/B original announcements need reconstruction.
- Similarweb / traffic channel data not yet captured.
- Founder X accounts not found through Google search; only company X verified.
