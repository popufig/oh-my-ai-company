# Skyfire Security Brief for Sellers and Bot Managers

URL: https://docs.skyfire.xyz/docs/security-brief-for-sellers

官方安全边界：

- KYA 声明 Agent platform、Agent 和 human principal 的身份。
- Skyfire 对买方平台做 KYB，并直接或通过可信平台验证 principal。
- Token 为 RFC 7515/7519 兼容的签名 JWT，卖方通过 JWKS 验证。
- audience、seller/service、expiry、JTI、creation/source IP 用于降低盗用和重放风险。
- Token 由买方直接发送给卖方，Skyfire 不在传输路径中。
- KYA 不是 free pass，卖方仍决定是否接受。
- 协议面向“人通过指定 Agent 与商户做生意”，不是所有 Bot/Agent 的强制身份标准。

关联：[[company.skyfire]]、[[concept.agent-trust-stack]]。

