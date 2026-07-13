# Ramp case study

官方客户案例，抓取时间：2026-07-11。

Browserbase 与 Ramp 共同构建 procurement agent。Ramp 的 agent 会打开 Browserbase session，在真实 merchant/vendor 网站上收集 security assessment、contract terms、pricing details，并附到 procurement request 供审批人查看。

Ramp 还用 Browserbase 做 receipt fetching，从 merchant order histories 自动拉 receipts。文中称 Ramp customers 每月在 5M+ receipts 上跑 receipt automation，回收约 30,000 小时 manual data entry；Browserbase 每月为 Ramp finance agents 节省 4,200+ 小时。

关键技术点：Agent Identity。Browserbase 通过 Web Bot Auth 给每个 session cryptographically verified credential，不是伪装成人，而是证明 agent 是谁、代表谁行动。Cloudflare、Stytch 等可验证该信号。

判断：这是 Browserbase 从 developer infra 进入 enterprise workflow 的强证据。它说明 web agent 的关键不只是“能点网页”，而是身份、信任、真实业务闭环。
