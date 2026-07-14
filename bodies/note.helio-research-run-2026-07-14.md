# Helio 本轮调研流程与反思

这是一轮实际工作记录，不代表已经固化为所有 AI employee 公司适用的 SOP。

## 本轮怎么跑

1. **查已知**：确认 vault 中只有 [[company.viktor]]、[[company.dust]] 等相邻对象，没有 Helio 主体。
2. **官方产品面**：读官网、Product、Scenarios、Automation store、App 登录、Docs、Blog、Terms、Privacy 和桌面下载入口。
3. **实现证据**：检查 `heliohq` GitHub org、`ship`、`anycli`、marketplace；把工程存在和商业采用分开。
4. **创始人与转型**：用两篇经创始人参与/确认的长访谈和即刻主页，重建 Sheet0 → Zgent → Helio 时间线。
5. **增长与流量**：把即刻内测、中文媒体、X release、TestingCatalog public beta 与 Similarweb 渠道结构叠加。
6. **社区补查**：跑 X、Reddit、HN、Product Hunt、微信、小红书、V2EX、Linux.do、即刻；区分真实体验、二次转述、同名噪声和空结果。
7. **治理审计**：把产品的 approval / trace / credential 设计与 Terms / Privacy / 合规公开面放在一起比较。
8. **资产化**：写入 company、person、investor、investment、source.item、touchpoint、traffic.snapshot、note、concept；官方 X 和创始人 X 已加入对应 lists。

## 这轮改变了什么判断

- **开始时**：Helio 容易被理解成另一个带 AI 角色的 Slack 克隆。
- **补完后**：它的真正对象是 AI 员工的组织运行层，IM 只是人类入口；任务、身份、记忆、触发器、凭据、审批和 Artifact 才是产品骨架。
- **开始时**：创始人访谈强调重建新工作区，可能意味着高迁移成本。
- **补完后**：0.5 已转向 Web 和既有工具 adapters，说明团队在用分发入口缓解迁移阻力，同时保留自己的状态模型。
- **开始时**：Control、BYOK 和 Activity trace 看起来已经回答企业信任问题。
- **补完后**：Terms 与 Privacy 的宽泛内容许可、model training 口径和合规材料缺口，构成比 UI 更实质的企业风险。

## 失败与降级

- Reddit / HN / Product Hunt / V2EX / Linux.do 没有命中聚焦讨论；只写“公开样本不足”，不写“没有用户”。
- X 回复大量为低信息量泛赞美；不把它们计作用户反馈。
- 小红书内容主要转述创始人访谈，降为 S3。
- LinkedIn 只显示少量公开员工，不能反推团队只有 3 人；团队规模继续使用创始人 9 人口径并标来源。
- Similarweb 没有 similar sites 数据，且小站估算波动大；只保留规模、渠道、地域和品牌搜索方向。
- App 未登录，桌面包未安装；“可下载”和“第三方跑通”不等于完成企业实测。
- Twitter list-add-member 初次因旧 adapter 路径报 `target closed`；工具修复后复测成功，才确认加入。
- 当前环境没有 ffmpeg，官方 0.5 视频只保留原始高分辨率 thumbnail，没有伪称完成逐帧分析。

## 本轮候选方法

1. **研究 AI employee / enterprise agent 时，增加法律与数据治理审计。** 至少核 Terms 的内容许可、Privacy 的训练用途、DPA、subprocessor、数据驻留、删除和合规认证。
2. **把 workspace architecture 与 distribution surface 分开。** 一个产品可以有自己的状态模型，同时进入 Slack / Teams；不能只按 UI 判断类别。
3. **把 use-case breadth 与 verified product depth 分开。** 模板和 SEO 页面证明团队想覆盖什么，Docs、App、release、repo 和独立体验才证明已经做到什么。
4. **对 launch 做渠道归因。** Helio 的核心起点是即刻，不是 HN / PH；流量结构应与实际 launch 节点互相验证。

这些观察与 Kernel、Anyway、PayInsider 等前几轮共同支持“官方实现证据 + 使用侧规模 + 法律/权限边界”的扩展，但只作为 [[method.product-research-workflow-v0]] 的增量样本。

## 本轮产物

- 主体：[[company.helio]]
- 创始人：[[person.wenfeng-wang]]
- 投资方：[[investor.baidu-ventures]]、[[investor.future-capital-mingshi]]
- 流量：[[traffic.similarweb.helio-2026-h1]]
- 概念：[[concept.ai-employee-operating-system]]
- 判断：[[note.helio-product-takeaway-2026-07-14]]
- 证据：22 条 `source.item`
- 触点：官网、Blog、GitHub、LinkedIn、官方 X、创始人 X 与即刻
