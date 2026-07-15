# NanoCorp GitHub code access and operator boundary
每家公司有 NanoCorp 管理的 private GitHub repo；$120/月以上可把自己或开发者加入 write collaborator，与 Claude Code、Codex、Cursor 等共同编辑。

官方警告 collaborator 等价于 company operator：其代码会被 Agent 在同一 sandbox 中运行，可读取公司数据、发送邮件、操作 Stripe。已有项目导入不是当前 self-serve flow。这个设计把代码协作打开了，但权限粒度仍很粗，repository write access 实际上是业务操作权限。
