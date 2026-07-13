# Luel

Luel is a YC W26 company building a rights-cleared multimodal training data marketplace and collection engine. In the Lightspeed AI/agent infra map, it belongs to the [[concept.human-data-supply-layer]]: the upstream layer that supplies legally usable, high-signal human data for frontier AI, robotics, speech, video, computer-use, and world-model training.

## What It Does

Luel is not just a static dataset vendor. The updated website pass shows a three-sided marketplace:

1. **Buyer side**: AI teams can request sample clips, license existing datasets, or design a custom collection. Evidence: [[source.website.luel-request-2026-07-08]].
2. **Contributor side**: individuals can earn from conversations, videos, photos, CAD workflow captures, and other real-world data tasks. Evidence: [[source.website.luel-contribute-2026-07-08]].
3. **Supplier side**: dataset owners can apply as verified sellers, provide modality/scale/rights posture, and list private datasets after review. Evidence: [[source.website.luel-supplier-application-2026-07-08]].

The homepage frames Luel as "The Frontier of Data" and a multi-modal lab powering machine perception. The meta positioning is more marketplace-like: on-demand video and audio training data connecting AI teams with contributors. Evidence: [[source.website.luel-home-dom-2026-07-08]].

## Marketplace And Catalog

The public marketplace confirms that Luel supports both catalog licensing and custom collection. It shows 30 datasets: 24 audio, 4 sensor, 5 video. Visible examples include:

- Computer-Use Workflows: continuous screen recordings of real practitioners using desktop/web software, with action context, software metadata, and workflow boundaries.
- General Egocentric Video: first-person recordings across 20,000+ tasks with multi-sensor IMU data, 95% hand visibility, and clear field-of-view.
- Music Library: professionally produced music with construction kits/toolkits.
- Japanese/English/French/German conversational and monologue speech.
- Doctor-Patient Consultation in English/Urdu.

The "Luel Certified" claim has three parts:
- Rights-cleared: contributor license covers training, fine-tuning, and evaluation.
- Provenance-tracked: source, capture conditions, and consent records bundled with the dataset.
- Quality-audited: Luel samples for label accuracy, coverage gaps, and PII before publication.

Evidence: [[source.website.luel-marketplace-2026-07-08]].

## Contributor Operations

The contributor page is important because it exposes real operational mechanics, not just marketing copy:

- Tasks include video meetings, CAD modeling sessions, and low-resource language conversational audio.
- Payouts shown include $15/hr for American English multi-party video conversations, $7.50/hr for several paired conversational audio tasks, and CAD capture shown with both hourly-equivalent display and $30 flat approved-submission language.
- CAD task details mention **Luel Trace**, a desktop recorder that watches filesystem activity and packages a signed bundle with screen recording and source/export files.
- Discord is used as a contributor/community support channel. Evidence: [[touchpoint.luel-discord]], [[source.website.luel-contribute-2026-07-08]].

This makes contributor trust, payout reliability, QA/rejection fairness, and support responsiveness central product risks.

## Team And Funding

Known team:
- [[person.william-namgyal]]: Co-founder / CEO. YC says 2x founding engineer and Berkeley M.E.T. dropout; LinkedIn adapter shows headline "Co-founder @ Luel" and 6,004 followers. Evidence: [[source.yc.luel-profile-2026-07-08]], [[source.linkedin.william-namgyal-profile-2026-07-08]].
- [[person.inigo-lenderking]]: Co-founder / COO. YC says previous machine learning researcher and Berkeley CS dropout; LinkedIn adapter shows headline "Co-Founder & COO @ Luel" and 3,170 followers. Evidence: [[source.yc.luel-profile-2026-07-08]], [[source.linkedin.inigo-lenderking-profile-2026-07-08]].

Funding/investor links:
- [[investment.lightspeed-luel-seed-2026]]: Lightspeed official page says it led Luel's $31.2M financing.
- [[investment.general-catalyst-luel-seed-2026]]: Luel official announcement title says the $31.2M seed was led by General Catalyst and Lightspeed, but browser read only captured title/excerpt, not full body.
- YC profile shows Luel as Winter 2026, active, 12-person team, San Francisco, primary partner Harshita Arora.

LinkedIn company adapter shows 11-50 employees and about 5,000 followers. LinkedIn employees adapter shows a platform-derived total of 102 and first-page visible profiles including data annotation/AI training and engineering roles; this should be treated as a workforce/community signal, not audited headcount. Evidence: [[source.linkedin.luel-company-2026-07-08]], [[source.linkedin.luel-employees-2026-07-08]].

## Why It Matters

The thesis is that public web data is no longer enough, and synthetic-only pipelines can degrade. The next frontier of AI needs grounded human data: conversations, actions, environments, video, audio, computer-use traces, robotics-relevant footage, and hard edge cases with clear rights.

For Lightspeed's broader portfolio, Luel is complementary to:
- [[company.exa]]: retrieval/context layer.
- [[company.temporal]]: durable execution/orchestration.
- [[company.paid]]: monetization/value proof layer.
- [[company.endor-labs]]: AI coding security verification layer.
- [[company.resolve-ai]]: production operations/debugging agent layer.
- [[company.reindeer-ai]]: enterprise workflow automation layer.

Luel sits earlier in the stack: before agents can act reliably, models need usable training data in domains where the open web is thin, messy, or legally risky.

## Risks And Open Questions

Marketplace execution risk is central. A human-data marketplace is only as strong as its contributor trust, payout reliability, QA fairness, support workflow, and buyer-side data quality. [[source.reddit.luel-wfhjobs-complaint-2026-07-08]] is only S3 single-party evidence, but it points to exactly this category of risk.

Open questions:
- How much buyer-side traction exists beyond catalog visibility?
- How many marketplace datasets are owned by Luel vs third-party suppliers?
- What are task approval/rejection rates and payout timelines?
- Can Luel maintain quality/provenance as contributor and supplier volume scales?
- Launch video exists but was not transcribed because `yt-dlp` is missing and browser read failed on YouTube.

## Method Correction

The earlier pass understated the website because `browser read` returned cookie/JS shells. The right extraction path for Luel is [[method.dynamic-website-open-eval-fallback]]. The site is not empty; Readability was the wrong tool.

## Evidence

- [[source.yc.luel-profile-2026-07-08]]
- [[source.lsvp.luel-seed-2026-05-15]]
- [[source.blog.luel-seed-2026-05-15]]
- [[source.website.luel-home-dom-2026-07-08]]
- [[source.website.luel-request-2026-07-08]]
- [[source.website.luel-contribute-2026-07-08]]
- [[source.website.luel-marketplace-2026-07-08]]
- [[source.website.luel-supplier-application-2026-07-08]]
- [[source.x.luel-profile-2026-07-08]]
- [[source.linkedin.luel-company-2026-07-08]]
- [[source.linkedin.luel-employees-2026-07-08]]
- [[source.reddit.luel-wfhjobs-complaint-2026-07-08]]
- [[source.video.luel-launch-youtube-2026-07-08]]
- [[note.luel-product-takeaway-2026-07-08]]
