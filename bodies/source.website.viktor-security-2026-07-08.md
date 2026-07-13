# Viktor security page

采集时间：2026-07-08。来源：browser read，正文可用。

安全页称 Viktor 已发布在 official Slack App Directory，并说明合规与安全口径：

- SOC 2 Type 1 certified，Type II in progress。
- GDPR aligned。
- CCPA compliant。
- CASA Tier 3 certified。
- ISO 27001 in progress。
- TLS 1.2+ in transit，AES-256 at rest，secrets in dedicated vaults。
- SAML SSO，支持 Okta、Entra ID、Google Workspace、OneLogin 等。
- US hosted default，Enterprise 可选 EU data residency。
- Money moves、code pushes、customer emails 等高风险动作需要 approval。
- Workspace memory 和 integrations 隔离，不跨 tenant。
- Inference runs on OpenAI、Anthropic、Google，声称 no-training agreements。

研究价值：Viktor 若要做企业 agent，安全页是 GTM 必备材料。它的风险不只是传统 SaaS 数据安全，还有 prompt injection、tool gateway secrets、approval boundaries、workspace memory isolation。

关联公司：[[company.viktor]]。
