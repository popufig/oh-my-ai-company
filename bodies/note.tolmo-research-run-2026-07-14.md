# Tolmo 本轮调研流程与反思

这是一轮过程记录，不代表所有安全公司都应照此执行。更新方法前先回看了 Kernel、Browserless、Browser Use、Hyperbrowser 等最近几轮，保留共同有效动作，只添加 Tolmo 这一轮真正新增的验证方式。

## 本轮如何展开

1. **从投资网络 seed 进入**：Tolmo 原来只作为 Accel portfolio 节点存在，先检查已有 source/investment，再补公司主体，而不是重新创建重复对象。
2. **官方产品拆层**：官网回答 offer，三个 Agent 页面回答工作流，Integrations 回答数据面，Docs/`llms.txt`/Skill 回答真实能力和权限。
3. **下载公开 CLI 做无账号验证**：只下载到临时目录，不改系统环境；检查 version、command surface、公开 `about/mission/jobs` 与认证边界。
4. **用 Demo 复原跨系统链路**：下载字幕，区分脚本化产品演示与客户证明。
5. **团队与前史回溯**：从四位创始人回到 Sqreen、Datadog、Apple 和 Node.js，解释企业安全产品的信用与能力来源。
6. **规模双轨检查**：外部网站 traffic/SEO 与 40/45 design partners、finding 数量分开记录，不互相替代。
7. **竞品按 protected object 分类**：自主 pentest、安全图谱、CNAPP/agent-native、Agent 系统安全分别处理。
8. **社区与中文补查**：X、HN、Reddit、微信、V2EX、Linux.do、知乎、即刻、小红书；只保留一篇有效中文综述和一条 HN 讨论，其余明确为未命中。
9. **资产化**：公司、人物、投资、触点、source、traffic、note、concept、图片与 X lists 一起写入。

## 这轮比此前多做了什么

### 公开 CLI 是产品实测入口

过去遇到 invite-only 产品，容易停在官网/docs。Tolmo 的公开 CLI 即使未登录，也能验证：

- 安装包与发布节奏是否真实；
- 命令面是否与官网一致；
- 哪些能力必须认证；
- Skill 到底给 Agent 开放什么；
- 文档与二进制是否存在状态漂移。

本轮发现 v0.23.0 CLI 的公开 `about` 仍写“currently in stealth”，与 6 月公开 launch 不一致。这个细节不是产品优劣结论，但说明快速迭代产品需要做 release/docs consistency audit。

### 权限边界不能只看“read-only”

官网写 read-only roles，但 docs 同时支持 secure proxy、finding create/update/delete、Datadog monitor 管理和 coding-agent remediation。研究 Agent 产品时要把权限拆成：数据读取、凭据代理、控制面写入、外部系统写入、代码修改，不能用一句营销承诺覆盖所有动作。

### Repository adoption 与 shipping cadence 要分开

公开 GitHub 只有 4 stars，但近两个月 release/nightly 很密。因为仓库主要分发二进制和 Skill，不含后端源码，所以 stars 不是采用指标；release cadence 只能说明团队在持续发货。

### 旧域名会污染新产品的流量判断

流量平台仍显示停放页描述，SEO 关键词也混入无关内容。新公司使用旧域名时，必须检查描述、关键词和 launch 前后时间段，再决定 snapshot 质量。本轮因此将 traffic 标为 `partial`，不做渠道强结论。

## 工具与失败状态

- Trust Center `browser read` 只返回空壳，低于正文阈值；记录为 `empty_shell`，不用于合规判断。
- App 可打开但停在 waitlist；这是产品状态证据，不是产品实测。
- GitHub CLI 在本机不在默认 PATH，使用明确绝对路径；Tolmo CLI 只下载到 `/tmp`，未系统安装。
- 中文平台多数无有效内容；未命中与 adapter 失败分开记录。
- 流量数据可读，但旧域名污染，降级为低样本 snapshot。

## 对方法的克制更新

本轮只建议给 [[method.product-research-workflow-v0]] 增加两项：

1. invite-only / CLI-first 产品优先查 `llms.txt`、CLI、Skill、MCP 和公开 package；
2. 对 Agent/安全产品做“权限承诺与实际 command surface 对照”。

这两项还需要在更多产品中重复验证，不升级为所有公司必跑模板。
