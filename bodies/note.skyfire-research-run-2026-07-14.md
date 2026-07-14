# Skyfire 本轮调研流程与反思

这是一轮实际工作记录，不是固定模板。

## 本轮怎么跑

1. 从 [[company.sapiom]] 的 Agent payment 竞品图进入，先检查 [[company.skyfire]] 旧对象，确认此前只有 seed 和一条官方来源。
2. 先跑社区：X、Reddit、HN、Product Hunt、微信、V2EX、Linux.do、即刻、小红书，避免被官网伙伴叙事先入为主。
3. 回到官网与完整 docs index，按 KYA、token、buyer/seller、settlement、security、MCP、guarantee 和 live implementation 拆产品。
4. 做最小技术 smoke test：公开 MCP endpoint 无凭证返回 401；App/JWKS 被 Cloudflare challenge，明确记录为“无法实测”，不推断产品不可用。
5. 补团队、融资、伙伴与时间线；把 2024 payment network 和 2026 trust stack 分开，避免用新叙事覆盖早期产品。
6. 用 Similarweb 判断网站 attention、渠道、地域与品牌/非品牌结构，并明确它不能代表交易规模。
7. 下载官方文档原图并补 DOM 区块截图；最后写 company、source、traffic、note、concept、person、investor/investment 和 touchpoint。

## 本轮有效的方法

- **先社区后官网**：提前发现真实用户样本很薄，后续看到合作 logo 时能保持证据边界。
- **读 docs 的矛盾，而不是只摘功能**：官网 tokenized cards 与最新 wallet docs 的冲突，比任何单句定位更有信息量。
- **支付产品必须追 settlement 和 dispute**：只有理解 charge window、结算、Guarantee 和责任边界，才知道产品是否闭环。
- **合作按层分类**：identity、bot security、edge、card network、merchant/service 各自作用不同，不能统称客户。
- **原图与截图并存**：官网截图保留当前叙事，文档原图保留真实 dashboard 和安全拓扑。

## 工具与过程问题

- Reddit `thread` 最初仍使用相对 JSON URL，在非 Reddit 页面上下文报 parse error；已反馈 site-forge，修复到 adapter 0.0.7 后复测成功。
- Product Hunt adapter 只能稳定拿到 metadata，upvote 等页面字段仍需人工核对。
- App/JWKS 遇到 Cloudflare challenge；没有绕过验证，也没有把 challenge 页面当正文。
- Similarweb 同一页出现总访问、monthly visits 和趋势区不同口径，结构化保存原始值并在 notes 标冲突，不自行拟合。
- X list 系列命令此前有旧 runtime 问题；本轮重新实测已可用，并将 `@AmirSarhangi`、`@CryptoCwby` 加入 AI Founder，将 `@trySkyfire` 加入 AI Product，随后用 list-members 验证成员存在。

## 对现有方法的增量

- 对 identity/payment/trust 产品，固定增加 **authorization → settlement → dispute/liability** 三段检查。
- 伙伴 logo 必须分为 protocol member、integration partner、demo、customer、investor，默认不能互相替代。
- 对产品 re-positioning，比较旧融资报道、当前官网和最新 docs；“官网变了”本身就是战略证据。
- 对 low-traffic infra，品牌搜索与合作网络可以解释 attention，但不替代 backend usage。

关联：[[method.product-research-workflow-v0]]、[[method.traffic-snapshot-model-v0]]。
