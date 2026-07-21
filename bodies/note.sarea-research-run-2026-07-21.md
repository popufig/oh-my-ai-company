## 入口与研究问题

本轮由 `sarea.ai` 进入，先判断它与 [[company.corespeed]] 是同一产品谱系还是独立公司，再拆成六条线：法律 operator 与团队；桌面包真实 shipped state；local/direct credential 与 CoreSpeed gateway 分工；connector、permission、automation 的实现边界；wallet/Agent Pay 是否已上线；采用、流量与社区。

## 过往流程复用

先回看 [[note.corespeed-research-run-2026-07-21]] 的 pivot/lineage matrix、Floatboat 的近名消歧、Kylon 的实现/采用双链、Pancake 的 legal operator 和 Evose 的 enterprise claims audit。已有方法足以处理主体与产品谱系，但不足以记录可下载桌面包的签名、架构、notarization 与启动 receipt，也没有明确约束 Terms 中 `may/if/when` 这类条件式商业措辞。

## 本轮最重要的纠错

1. **Sarea 单独建产品对象，不单独建融资公司。** 官网 footer、Privacy、Terms、bundle ID 与 Developer ID signer 都指向 CoreSpeed Inc.；融资留在 CoreSpeed。
2. **下载包把 shipped state 从营销页推进了一层。** v0.13.0 DMG 可下载、校验、挂载、签名验证和启动；这比截图强，但只证明客户端 receipt，不证明登录后能力或采用。
3. **包内 catalog 优先于 logo wall。** 当前包明确六个 connector definition；官网展示更多品牌。二者冲突时不按 logo 数量写 shipped coverage。
4. **fixture 证明实现意图，不证明生产质量。** approval roundtrip、runtime controls、error execution 等测试资产说明代码覆盖过这些路径，不能推出真实成功率、审计或回滚成立。
5. **Direct 与 gateway 必须分开。** 第三方凭证默认本地保存；选择 gateway 时 CoreSpeed 才进入认证、计量和账单 metadata 链路。不能把所有 Sarea 使用都写成 CoreSpeed 托管 token。
6. **Wallet 从“已上线定价”降级为 conditional capability。** 官网确定性展示 `$0.01/action`，Terms 却连续使用 `may offer`、`when activated`、`if available`；未充值前不写 live。
7. **社区结果按关系来源分层。** 小红书候选多为团队/品牌推广；Reddit/HN/微信没有有效独立反馈。团队分发不等于用户口碑。
8. **Similarweb no data 不建 traffic 数字。** 通用 checker fallback 只记录 unavailable。

## 方法增量

桌面产品新增 package receipt：download redirect、版本、hash、bundle ID、architectures、min OS、Developer ID、hardened runtime、entitlements、notarization/Gatekeeper、updater 与最小启动 smoke。静态包检查、未登录启动和登录后 feature smoke 必须分开。

商业/法律材料新增 conditional-language gate：`may`、`when activated`、`if available`、`planned`、`coming soon` 只能证明设计或准备状态；至少要有账号内入口、真实小额交易/账单、processor 或客户侧 receipt，才升级为 live capability。

## 工具与过程反思

Pinix command health 修复后，browser/site 能稳定返回结构化 timeout；小红书 note detail 一次超过 25 秒，明确报 `PINIXC_HTTP_TIMEOUT`，没有把空输出纳入证据。官网首屏依赖动态渲染，full-page screenshot 失败且首屏主体空白；改为滚动后串行 viewport screenshot，得到 connector、use case、Agent Pay 与 CoreSpeed footer 的有效画面。

桌面 app 因系统 Accessibility/screencapture 权限不足，无法抓原生窗口图；本轮只记录进程、窗口存在和启动日志，不伪造 app screenshot。官方 v0.11 图片作为供应商演示单独标注。

## 停止条件与未完成

已经形成 legal operator、当前下载包、签名与包内结构、Privacy/Terms、官方版本/automation demo、社区与 Similarweb no-data、竞品拓扑的最小闭环。继续公开搜索开始重复团队演示；没有测试账号、充值授权和客户侧材料时，边际价值下降，因此停止并标记 public-ready。

未验证：真实 onboarding、OAuth consent/revoke、六个 connector 的 action、官网额外 connector、gateway token path、后台 schedule/retry、wallet 充值与退款、Sparkle 更新、Gatekeeper 在线判断、SOC 2/DPA/subprocessor、客户、付费、留存和 accepted outcome。
