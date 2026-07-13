# Browserbase Functions

抓取时间：2026-07-11。

Browserbase Functions 的出发点：Browserbase 托管 browser，但客户仍要自己运行控制浏览器的代码，导致 worker fleets、cron、queues、workflow engines 等 runner infra。Runner 和 browser 跨区/跨云会增加 latency 和 fragility。

Functions 把 browser 和 controlling code 放进同一平台。抽象为：function（稳定逻辑资源）、deployment（不可变代码版本）、invocation（一次执行）。发布新 deployment 不自动切换生产流量，需要显式 promote。

本地开发仍连接真实 Browserbase sessions，避免 mock/prod 环境 drift。

判断：Functions 把 Browserbase 从 session API 往 browser-agent runtime 推进；这是非常关键的 infra 扩张方向。
