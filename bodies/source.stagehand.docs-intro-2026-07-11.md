# Stagehand docs introduction

抓取时间：2026-07-11。

Stagehand docs 对问题定义很清楚：传统 Playwright/Puppeteer 太 brittle，页面 UI 一变 selector 就断；纯 AI web agents 又 too agentic，不可预测、难 debug。Stagehand 用四个 primitives 让开发者自己选择用多少 AI：

- act：执行自然语言动作。
- extract：提取结构化数据。
- observe：发现可用动作。
- agent：自动化完整 workflow。

Docs 写到：Precise Control、Actually Repeatable、Maintainable at Scale、Composable Tools。

判断：Stagehand 的产品哲学不是替代开发者，而是把 AI 封装成可组合、可审计的 browser automation primitive。
