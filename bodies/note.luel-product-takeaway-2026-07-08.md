# Luel product takeaway

Luel is best understood as a three-sided data supply marketplace for frontier AI, not just a dataset vendor:

1. Buyers request samples, license datasets, or brief bespoke collections.
2. Individual contributors complete paid data tasks: conversations, video, CAD workflows, language recordings, photos, and other real-world captures.
3. Dataset owners can apply as verified sellers and list production-ready datasets in Luel's catalog.

The product promise is speed plus legitimacy: to-spec multimodal data, contributor/supplier sourcing, QA, rights trail, consent/provenance, and enterprise-ready licensing.

## Product-Side Learning

The stronger updated read after `browser open/eval` is that Luel has more visible product surface than the earlier `browser read` pass suggested:

- Homepage positions it as "The Frontier of Data" and a multi-modal lab powering machine perception.
- Request page supports sample clips, licensing existing datasets, and designing custom collections.
- Marketplace exposes 30 datasets across audio, sensor, and video; examples include computer-use workflows, egocentric video, music library, multilingual conversational/monologue speech, and doctor-patient consultations.
- Marketplace explains "Luel Certified" as rights-cleared, provenance-tracked, and quality-audited.
- Contributor page exposes concrete tasks and payout mechanics, including group conversation video, CAD workflow capture through Luel Trace, and low-resource language conversational audio.
- Supplier application shows a separate seller onboarding path asking for modality, scale, rights posture, and dataset fit.

This makes the wedge sharper: Luel is building both supply acquisition and demand fulfillment, with compliance/provenance as the trust layer.

## GTM-Side Learning

- YC profile is still the cleanest launch narrative: problem, solution, workflow, team, ask, and launch video.
- Official website is operationally richer than YC: it shows the actual marketplace/category structure, buyer funnel, contributor tasks, and seller onboarding.
- X is verified with several thousand followers and very few tweets, suggesting launch/funding credibility is carrying awareness more than sustained posting.
- LinkedIn adapter gives cleaner company/team metadata than browser read: company page shows 11-50 employees and 5,000 followers; employees search shows a larger platform-derived total of 102, which should be treated as signal, not audited headcount.

## Risk

The Reddit contributor complaint remains S3 single-party evidence, not verified fact. But the updated official site makes the risk category more important, not less: contributor payout, task rejection, QA fairness, support, and community trust are core product mechanics.

For a human-data marketplace, labor operations are product operations. If contributors do not trust approvals/payouts, supply quality and retention degrade; if buyers do not trust provenance/QA, enterprise demand stalls.

## Method Correction

The previous pass incorrectly treated Luel website pages as mostly uncaptured because `browser read` returned cookie/JS shells. The right workflow is [[method.dynamic-website-open-eval-fallback]]: after empty shell, use `browser open`, cookie handling, DOM eval, links/forms extraction, and requests if needed.
