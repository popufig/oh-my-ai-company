# GitHub Stagehand activity snapshot

抓取时间：2026-07-11，来源：GitHub CLI。

Recent releases：

- browse@0.9.0 Latest，2026-06-25。
- @browserbasehq/stagehand@3.6.0，2026-06-19。
- @browserbasehq/stagehand@2.5.9，2026-06-11。
- stagehand/server-v3 v3.7.2，2026-06-09。
- 多个 browse / stagehand-server-v3 releases 在 2026-05/06。

Recent merged PRs：

- Release browse@0.9.5。
- Fix malformed snapshot Unicode。
- Add GPT-5.6 CUA models。
- Add browse skills show and agent-facing --help header。
- Docs sync CUA model list。

Open issues 反映的技术问题：

- cross-origin iframe loading 时 click 失败。
- agent type action 在快速切换 cells 时字符漏到下一个 field。
- deterministic CUA regression task / eval。
- Cloudflare Workers runtime compatibility。
- browse CLI headed mode steals window focus。

判断：Stagehand 不是静态开源营销项目，而是高频迭代；同时问题集中在 CUA/evals、runtime compatibility、浏览器边界条件和 browse skill/CLI 上。
