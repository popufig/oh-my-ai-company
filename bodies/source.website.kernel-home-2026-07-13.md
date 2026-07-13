# Kernel 官网与产品定位

URL: https://www.kernel.sh/

Evidence: S1 official. Quality: partial.

官网 hero 写：“you build agents / we build crazy fast, open source infra for them to access the internet”，并展示 Cash App、Vercel、Woflow、Rye、Framer 等客户/合作品牌以及 SOC 2、HIPAA 标识。metadata 将 [[company.kernel]] 定义为 AI agents 与 web automation 的 browser infrastructure，强调 anti-bot detection、reusable sessions、fast spin-up 和 autoscaling browsers。

本页是 Next/Vercel production CSR 页面。`browser open/read` 刚返回时虽有 `readyState=complete`，但 DOM 仍是空 shell；default profile 同一 tab 等待后可渲染约 2,215 字、63 links、17 images，并取得完整 hero 截图。fresh tab 在 30 秒内仍可能不渲染，因此本来源保持 `partial`，具体产品能力继续用官方 docs、blog 与 customer cases 交叉读取。
