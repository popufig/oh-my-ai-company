2026-07-15 打开官网 CTA 指向的 `https://ai.marblism.com/onboarding/`。首次 `open/read` 在 Remix streaming/bootstrap 阶段提前抽取了脚本文本；显式等待业务文案 `How will you use your AI team?` 后，同一入口正常渲染用途选择 onboarding，显示 `For my business`、`For my job`、`For my personal life` 三个选项及登录入口。snapshot 与 screenshot 均确认了该首屏。

**可支持：** 当前公开 app/onboarding 域名存在，未登录第一步会按 business、job、personal life 对用户意图分流。

**边界：** 本轮没有注册账户、连接外部系统或执行任务，不能声称完成了邮件、电话、获客或法律流程。初始空壳是浏览器 readiness 假阴性，不是 Marblism 产品故障。
