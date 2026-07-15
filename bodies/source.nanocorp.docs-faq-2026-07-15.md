# NanoCorp FAQ：任务、Agent、支付与能力边界
FAQ 显示当前执行模型：AI CEO 把任务交给隔离 sandbox 中的 worker；每家公司同一时间只能跑一个任务，用户可以设置 AUTO 或 1/5/10/25 个 autonomous tasks/day，并设置 conglomerate 24 小时 credits cap。手动 Run 会绕过 autonomous cap，但仍需要 credits。

已公开能力包括支付产品与 payment link、Vercel 网站、真实邮件、browser automation、文档/文件、prospect discovery、analytics、独立 PostgreSQL 和 Linux code sandbox。

当前限制包括：不支持并行任务、社媒发帖、移动 App、订阅收费；CEO chat 不能清空；已有业务导入不是 self-serve；公司不能删除或重命名；代码/数据库完整导出与 self-host/BYO model/BYO API key 没有公开支持。失败任务称会自动退还 credits，provider overload 会导致平台级 quota error。
