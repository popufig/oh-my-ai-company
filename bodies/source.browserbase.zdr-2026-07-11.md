# Browserbase Zero Data Retention docs

抓取时间：2026-07-11。

ZDR 让 Browserbase sessions 不把 session logs、video recording、DOM replay 等 artifacts 持久化到 Browserbase managed storage。Live View 仍可实时使用，但 replay/log endpoints 对 ZDR sessions 返回空或 404。

可通过 create session 时设置 `logSession=false` 和 `recordSession=false`。与 BYOS 组合后，downloads、uploads、contexts、extensions 可写入客户自己的 AWS / KMS / lifecycle policy。

判断：ZDR/BYOS 是进入 regulated enterprise workloads 的关键能力；但同时也降低 Browserbase support/debug 能力，需要客户权衡。
