# Stagehand product page

抓取时间：2026-07-11。正文来自 browser snapshot；`browser eval innerText` 一开始为空，但 snapshot 可读。

核心定位：The SDK for browser agents。Stagehand is an open source SDK that uses AI to make your browser agents resilient, readable, and production-ready.

核心 primitives：

- `act()`：用自然语言执行点击、填写、导航、滚动等浏览器动作。
- `extract()`：用 Zod schema 从页面提取结构化数据。
- `observe()`：在执行前识别页面上可执行的动作。
- `agent()`：需要端到端执行时自主运行多步 workflow。

关键叙事：Selectors break. Natural language does not. Stagehand 介于传统 Playwright/Selenium 和黑箱 browser agent 之间，强调既保留代码可控性，又让页面变化时自愈。

页面还写到：Start locally. Deploy to Browserbase. Browserbase 为 Stagehand 提供 cloud browsers、Agent Identity、action caching、session replay、prompt observability、captcha solving、Functions 等能力。
