# Interloom 产品判断：企业 agent 的组织记忆层

## TL;DR
Interloom 值得看，不是因为它又做了一个“AI agent 工作台”，而是因为它抓住了企业 agent 落地里一个更底层的问题：agent 没有企业内部真实工作的记忆。它把专家处理 case 的路径、决策、文档、人员、结果沉淀成 Context Graph，再用 MemoryRank 和 procedure/routing 把后续任务分给合适的人、agent 或系统集成。

如果 [[company.viktor]] 更像 Slack/Teams 里的 AI employee 入口，Interloom 更像这个 AI employee 背后的企业工作地图和记忆层。两者不一定是直接竞品，更像 execution surface 与 context/work graph 的上下游关系。

## 我对产品的拆解
Interloom 的核心概念可以拆成四层：

1. 工作入口：shared inbox、ticketing、systems of record，以及 Email/Slack/WhatsApp/Voice agents/Chatbots。
2. 协作表面：domain experts 和 AI agents 在同一个 operational workspace 处理 case。
3. 组织记忆：每次成功或失败的 resolution 都进入 Context Graph，沉淀案例、决策、文档、人员、agents、outcomes。
4. 执行路由：MemoryRank 找相似先例，build procedure，并把任务分配给合适的 expert、agent、integration 或 handoff path。

这不是传统意义的 RAG，也不只是 workflow builder。RAG 解决“找资料”，workflow builder 解决“配置步骤”，Interloom 想解决的是“公司过去实际怎么把类似事情办成，以及下一次应该沿着哪条路径办”。

## 为什么这个方向重要
企业 agent 的生产化瓶颈，经常不是模型能不能调用工具，而是：
- 企业知识不在文档里，很多在老员工脑子里、邮件、工单、电话转录和例外处理里。
- 真实流程不是漂亮的 BPMN，而是有 workaround、升级路径、责任人、权限和历史判断。
- agent 如果不知道这些组织上下文，就只能做浅层自动化，难以承担高价值运营任务。

Interloom 的官方融资公告把这个称为 corporate memory problem；About 页进一步把问题上升为组织问题：谁管理 agents，如何进入现有层级，权限和治理怎么处理。这点比“agent 自动点网页/发邮件”更接近大型企业真正会卡住的地方。

## GTM 信号
Interloom 明显不是 Product Hunt / HN 式公开开发者增长。X 账号只有几十个 followers，公开社区讨论暂时很弱；但官网、Press、LinkedIn 都显示它更像 enterprise/FDE 路线：
- 官网 CTA 写 forward-deployed Interloom engineer。
- 已公开客户包括 Zurich Insurance、Fiege、Volkswagen Group Services。
- LinkedIn 融资帖称团队 20+，分布在 Berlin、Amsterdam、Munich。
- Head of Sales 的官方描述直接指向 insurance、logistics、banking、real estate。

这类公司不能只看 Similarweb 或 public social。低公开流量不一定代表弱，关键要看企业客户、投资人、部署案例、招聘和 LinkedIn 网络。

## 投资与网络
2026-03-19 官方宣布 $16.5M seed：[[investor.dn-capital]] lead，[[investor.bek-ventures]] 参与，[[investor.air-street-capital]] 继续支持。这里有一个小口径冲突：官网融资公告写 DN lead + Bek participation；LinkedIn 融资帖写 led by DN Capital and Bek Ventures。当前投资事件里按官网更严格口径处理，把 Bek 记为 participant，同时保留冲突说明。

投资人判断也有价值。DN 的 Guy Ward Thomas 在公告里强调，enterprise agent 的上下文是动态的、未被文档化的、存在一线员工日常决策里。这和 Interloom 的产品论点高度一致。

## 风险和待验证
- 数据接入深度：它要进入 emails、tickets、call transcripts、systems of record，权限和安全门槛高。
- 价值证明周期：Context Graph 的价值可能需要足够多 case 后才显现，sales cycle 和 implementation cycle 会长。
- 差异化：它会和 process mining、RPA、enterprise search、knowledge graph、workflow orchestration、agent platform 等多个旧/新类别发生重叠，需要继续看实际 product screenshots、demo、客户案例。
- 公开信号弱：X 和社区讨论很少，不能用开发者工具的传播框架套它。

## 我们能学到什么
Interloom 给“企业 agent”研究补了一块图谱：不是所有 agent 产品都要站在用户前台。有些公司会做 agent 的组织记忆层、上下文层、工作图谱层。后续看 browser/企业 agent 公司时，可以多问一句：它在解决执行入口、工具调用、流程编排、组织记忆、还是治理权限？这能帮助我们避免把所有 agent 公司都粗暴归为同一类。
