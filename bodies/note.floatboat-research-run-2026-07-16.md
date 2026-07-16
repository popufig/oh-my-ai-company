# Floatboat 本轮调研流程与实体纠错

## 为什么重做

本轮从用户指出“Floatbot 好像调研错了”开始。复核后发现：原 [[company.floatbot]] 调研的事实链本身成立，但它是 Jimmy Padia 创办的保险/语音 AI 公司；队列真正想研究的是 `floatboat.ai`。错误发生在 seed 进入时只按近似名称和“AI employee”标签接续，没有先完成域名、创始人、产品截图和法律主体四点消歧。

## 实际流程

1. 先读旧 Floatbot dossier 与所有 backlinks，确认哪些是有效旧主体，避免覆盖或删除。
2. 以 `floatboat.ai` 为新 seed，核对官网、LinkedIn、X、融资报道和创始人履历，建立独立公司/人物/投资边。
3. 阅读 3 月首发实测与 4 月创始人访谈，再读当前官网与 5 月全球发布，发现产品从上下文工作台转向 calendar-first agent OS。
4. 下载 macOS 0.4.15 客户端，验证签名、notarization、架构与首屏；未登录部分明确停止，不把 smoke 写成完整体验。
5. 用 Similarweb 拆主域逐月趋势、渠道、地域与关键词；把算法 similar sites 降级为邻接候选。
6. 扫 Reddit、HN、Product Hunt、LinuxDo、V2EX、小红书与 X，区分官方/创始人网络传播和独立反馈。
7. 把产品图片、第三方实测配图、客户端截图和流量图导入正文，避免报告只有文字。

## 本轮反思

- 近名实体不能靠“看起来像”归并。至少核对 `domain + founder + product screenshot + legal/operator`，任一冲突就先建 candidate 或独立主体。
- 社区检索必须使用精确域名诊断。Floatboat 的 Reddit 18 个候选只有 3 个 verified；count 不能当声量。
- 产品方向变化要保留时间轴。3 月“工作环境”和 5 月“日历 runtime”都是真的，不能只用当前官网覆盖历史。
- 官方页面规模本身是 GTM 证据。637 个 sitemap URL 说明内容工业化，但不能替代排名和自然流量。
- 下载客户端能回答“有没有发、是什么技术形态”，不能回答“核心功能是否稳定”；登录墙后应明确停止。

本轮产物包括 [[company.floatboat]]、两位人物、两家投资机构、两条融资边、流量快照、[[concept.calendar-as-agent-runtime]]、证据条目与本反思。旧 [[company.floatbot]] 保留并与新主体明确分开。
