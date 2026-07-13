# Reddit: Stagehand vs Browser Use production agents

抓取时间：2026-07-11。Reddit thread 摘要，部分抓取。

核心反馈：auth wall + captcha 是 Stagehand / Browser Use 这类 fresh browser sessions 的痛点。评论者认为这不是 framework problem，而是每次从头做 auth 的问题。

评论者提出替代方案：对日常已登录 app，通过 Chrome extension + MCP server 路由 tool calls 到已有 logged-in Chrome sessions，复用 Slack/Jira/Notion/GitHub 认证态，避免 fresh session / captcha / visual automation layer。

判断：这说明 Browserbase 的关键风险/挑战之一是 authenticated workflows。Browserbase 的 Agent Identity、1Password integration、persistent auth、ZDR 等能力应放在这个痛点下理解。
