## 入口与研究范围

从 evose.ai 进入，先与同名 AEC 业务 Evose、getevos.ai 等主体做消歧，再查 vault。目标不是复述官网，而是回答四个问题：Evose 在企业 Agent 栈里是哪一层；哪些能力已公开交付；团队、融资、客户和规模能否被验证；enterprise promise 是否有采购级证据支撑。

本轮覆盖官网/About/定价、三层架构、目标客户、观测、安全、SaaS/私有化、Agent 渠道与 API 文档；再检查 App/API/CDN 公开入口、Terms/Privacy、WHOIS、正式 launch、官方/创始人 X、播客、融资/团队检索和 Reddit/HN/微信/小红书/Product Hunt。

## 关键纠错

1. **先做近名实体消歧**：LinkedIn 和搜索结果里的 AEC Evose 与 evose.ai 产品无关，不能借用员工、创始人或融资。
2. **官网指标和 UI 样例分开**：4,637 对话、32.7M Token、90 活跃成员、报告里的 25+/85% 都是演示画面；5000+、99.9%、99ms、15+ 数据中心是厂商自报，同样不能当独立规模。
3. **文档声明不等于 shipped state**：对 SOC 2、iOS/Android、Web SDK、API、告警逐项对照官网状态、文档 status 与公开 smoke，而不是把“✓”直接写成已验证能力。
4. **企业法律文本是产品证据**：Terms 不披露主体/司法辖区、zero compensation 与用户承担 Agent 动作责任，直接影响 enterprise readiness，不只是法务脚注。
5. **founder claim 与客户证据分开**：数百人企业、千人金融客户、营销活动 4 天压缩到 1-2 小时均保留为自报；没有客户侧、口径和时间窗时不升级为 ROI。
6. **社区检索读 verified_count**：Reddit 返回 20 条宽松候选但精确命中为 0；不能把 count 写成声量。Product Hunt challenge 被 adapter 误解析，也按抓取失败处理并通知工具 owner。
7. **没有流量数据就留白**：第三方流量入口登录态失效，本轮没有拿其他口径拼接或编估算。

## 本轮对方法的增量

企业控制面产品应增加一张 claims matrix：营销主张、产品文档 status、公开可复现状态、第三方/客户证据、法律采购证据分别列开。只有多列一致时才升级为“已交付/已采用/已认证”。

API、SDK、移动端和 enterprise IM 不是读一页集成列表就结束；至少做公开 endpoint、示例 CDN、SDK 状态、下载入口和登录边界 smoke。失败仍可能来自权限或环境，但必须把“文档支持”和“本轮复现”分开。

## 未完成与停止条件

没有注册私有工作区，没有验证真实 Agent、Workflow、多人权限、Credits、审计和私有化。没有 Similarweb 数据、具名客户、融资、完整团队或 Trust Center。继续搜索已经开始重复返回同名噪声；在没有授权账号、客户披露或新证据前，进一步扩张的边际价值很低，因此本轮停止并标记这些更新触发器。
