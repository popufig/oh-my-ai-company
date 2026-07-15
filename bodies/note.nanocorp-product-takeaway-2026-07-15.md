# NanoCorp 产品判断与 takeaway（2026-07-15）
## 我对产品的判断

NanoCorp 不是“AI 做个网站”，也还不是广义上的“AI 真的经营任何公司”。它目前最准确的产品边界是：**把软件优先的小生意压缩成一个托管 runtime，让 AI CEO 在网站、代码、邮件、广告和支付这几个高频数字动作里持续执行。**

最关键的产品指标不是创建公司数，而是从 created → live site → active → paying → earning → retained 的完整漏斗。当前 29,108 created、28,266 live sites 与 197 earning companies 之间的差距，说明生成和发布已经接近商品化，找到可持续需求与分发仍是难点。

平台自身的 $1M ARR 自报与用户公司累计约 $11K revenue 不能混为一谈：前者说明 NanoCorp 的“卖创业机会”可能很强，后者才更接近它是否让用户真的经营成功。对这类产品必须同时看 vendor revenue 和 customer outcome。

## 值得学习

- 把 live dashboard 做成可审计的 operating receipt，而不是只贴 logo 和案例；
- 用生产 failure traces 反推 skills、tool errors 和 recovery，而不只换模型；
- 用 structured rate limit 告诉 Agent 何时停止等待和转做别的任务；
- 竞品 comparison SEO、founder narrative、用户公司 PR 和 changelog 栏目形成复合分发；
- Ambassador 用 credits 换公开实验，是很有效的 seed cohort 与产品学习机制。

## 需要警惕

- ship rate、tasks、emails 都是 activity，不是 accepted business outcome；
- Ambassador、比赛和 referral credits 会污染“自然成功率”；
- 20% 提现抽成、托管 Stripe、代码门槛和数据不可迁移会压缩 serious business 的长期吸引力；
- 公开 live API 暴露近期邮件/任务细节，不符合最小必要披露；
- 当前缺少并行任务、订阅、社媒、细粒度权限和独立审批，自治公司仍受明显产品边界约束。

相关：[[company.nanocorp]]、[[company.polsia]]、[[concept.autonomous-company-factory]]、[[concept.live-operating-dashboard-as-gtm]]、[[concept.production-trace-agent-harness-loop]]。
