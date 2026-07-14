# Tolmo 竞品与相邻产品分层

## 直接竞品

- **XBOW**：自主 offensive security / pentesting，强调在真实系统上证明漏洞可利用，并披露 150+ security teams。与 Tolmo 的 Pentesting Agent 直接重叠。
- **Tenzai**：自主 AI hacker，持续测试应用，融资和市场声量较强。与 Tolmo 在自动攻击验证上直接重叠。

## 图谱与 CNAPP 相邻层

- **Cyscale**：Security Knowledge Graph 跨 cloud、code、identity、data、AI 与 compliance，和 Tolmo 的图谱底座最接近。
- **Wiz / Snyk / Cycode**：已有更成熟的风险数据和客户关系；Tolmo 同时把 Wiz、Snyk 当作输入，因此不是简单替代关系。
- **Sysdig**：2026 年提出 headless cloud security，把 CNAPP runtime 信号通过 API、MCP、Skill 直接给 Claude Code/Codex/Cursor。它证明 incumbents 也在争 agent-native 界面。

## 容易混淆但不直接

[[company.general-analysis]] 主要保护 AI Agent 系统自身、工具调用与运行图；Tolmo 用安全 Agent 保护公司生产软件和基础设施。二者都涉及 Agent security，但 buyer、资产和 threat model 不同。

## 分类规则

判断 direct competitor 时至少看四件事：

1. 被保护的对象是否相同；
2. buyer 是否相同；
3. 是否在同一执行阶段竞争预算；
4. 输出是告警、攻击证明、修复上下文，还是 Agent runtime 治理。

不能因为都写了 AI、agent、graph、security 就放进同一象限。

证据：[[source.website.xbow-home-2026-07-14]]、[[source.website.tenzai-home-2026-07-14]]、[[source.website.cyscale-home-2026-07-14]]、[[source.sysdig.headless-cloud-security-2026-05-06]]。
