# 公众号: 浏览器内 GUI Agent 全景中的 Stagehand 技术路线

平台：微信公众号 / 最新AI知识宇宙

证据等级：S3（中文技术路线综述，非官方源）

这篇文章横向比较 Page Agent、browser-use、Stagehand、Skyvern、Operator、Vercel agent-browser 等浏览器 GUI Agent 路线。它把 Stagehand 放在“Agent 优先的结构化库”这一类：架在 Playwright 之上，提供 `act`、`extract`、`observe` 三个原子原语，追求在自主 agent 与传统脚本之间取得控制权平衡。

可用信号：
- 中文技术内容已经把 Browserbase/Stagehand 纳入 browser GUI agent 的标准技术地图。
- 文章认为 2026 年生产栈在收敛到 hybrid：DOM 为主、视觉兜底。
- 对 Browserbase 的定位不是“AI 浏览器”，而是服务端自主 Agent / 多步网页任务的结构化执行层。

判断：这篇文章适合当中文 market map 证据。它强化了 Browserbase 的位置：不是页内副驾，也不是纯视觉 agent，而是外部浏览器控制 + 结构化 agent primitives + 生产化 infra。
