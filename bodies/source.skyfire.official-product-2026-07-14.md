# Skyfire 开发者文档：产品、身份、支付与结算

官方文档索引：https://docs.skyfire.xyz/llms.txt

## 已核实的产品结构

- 三类 token：`kya`、`pay`、`kya-pay`。
- 用户拥有 Buyer Agent 和可选 Seller Agent；每个 Agent 有 managed wallet 与 API key。
- Seller Service 可表示 MCP、API、网页或 Agent，定义价格、身份要求和可接受 token。
- KYA verification 为可选付费订阅；个人或组织身份会由买方/卖方 Agent 继承。
- 支付 token 创建时锁定最高金额，卖方在交付后 charge，随后结算。
- 提供 REST、MCP、sandbox、JWKS、service discovery 和 Dappier/BuildShip/Apify 示例。

## 结算边界

Token 最长有效 24 小时；有效期内签发的 token 过期后仍有 24 小时 charge window，窗口关闭后约 3 小时结算。停用 Seller Service 不会自动作废已签发 token。

## 证据边界

S1 官方文档，能证明公开产品设计和接口，不证明生产使用量。本轮未持有账户/API key，没有完成真实 token 或付款。

关联：[[company.skyfire]]、[[source.skyfire.wallet-doc-2026-07-14]]、[[source.skyfire.security-doc-2026-07-14]]。
