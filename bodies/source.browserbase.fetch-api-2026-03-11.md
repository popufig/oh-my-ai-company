# Browserbase Fetch API

抓取时间：2026-07-11。

Browserbase Fetch API 解决的问题：很多 agent 只是想读网页内容，不需要启动完整 browser session。Fetch 接受 URL，返回页面内容，可返回 HTML、markdown、structured JSON。

官方叙事：search -> fetch -> decide -> browse。多数页面先读即可，只有需要深入交互时再启动 browser。

定价：Fetch $1 / 1,000 pages；markdown/JSON extract $4 / 1,000 pages；with proxies $7 / 1,000 pages。

判断：Fetch 是成本/延迟优化 primitive。它把 Browserbase 从“只要访问 web 就开浏览器”调整为分层 web access：先轻量读取，再重型浏览器执行。
