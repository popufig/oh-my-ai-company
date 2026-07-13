# Dynamic website open/eval fallback

Use this when `pinixc browser read` returns cookie text, navigation fragments, an empty shell, or less than useful正文 for a dynamic site.

## Workflow

1. Treat the `browser read` result as failed if it is cookie/nav/empty shell.
2. Run `pinixc browser open <url>` and keep the `tab_id`.
3. If cookie UI blocks the page, run `snapshot --tabid <id> -i`, click Accept/Decline by ref, then re-check.
4. Use DOM eval instead of Readability:
   - `document.title`
   - meta descriptions / keywords
   - `querySelectorAll("h1,h2,h3,h4,p,a,button,label,input,textarea,select,option")`
   - links and form fields
   - `document.body.textContent` only as a fallback because it may include Next.js scripts.
5. Use `requests` / `response` if the DOM still lacks the data and the page calls JSON APIs.
6. Only after open/eval/request checks fail should we mark the page as unreachable or empty_shell.

## Why This Exists

[[company.luel]] looked empty through `browser read`, but `browser open` + DOM `eval` exposed its real product surfaces:
- homepage positioning,
- buyer request funnel,
- public marketplace/catalog,
- contributor task/payout workflow,
- verified seller application,
- Discord community link.

This changed the product understanding materially. The site was not empty; the extraction path was wrong.

Evidence: [[source.website.luel-home-dom-2026-07-08]], [[source.website.luel-request-2026-07-08]], [[source.website.luel-contribute-2026-07-08]], [[source.website.luel-marketplace-2026-07-08]], [[source.website.luel-supplier-application-2026-07-08]].
