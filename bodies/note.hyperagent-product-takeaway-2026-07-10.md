# Hyperagent takeaway：企业 agent 的产品不是模型，而是 harness + system of record

Hyperagent 最值得学的地方不是“它用了哪个模型”，而是它把企业 agent 拆成了一套完整的运行系统：skills、memories、evals、工具连接、browser execution、model routing、权限/治理、live view、团队协作与成本控制。

## 对产品的学习

1. **模型智能是前提，不是产品本身。** Andrew Busse 访谈里的说法很关键：产品价值在 agent harness。模型会持续变化，真正稳定的产品层是如何让 agent 学会组织的工作方式、调用正确工具、在正确权限下跑、留下可审计轨迹。

2. **Airtable 的 system of record 是战略资产。** Agent 最怕没有上下文、没有业务口径、没有结构化状态。Airtable 原本就在业务数据/流程层，Hyperagent 可以把 agent 直接接到 records、workflows、teams 和权限模型里。这比独立 chatbot 更容易进入真实组织流程。

3. **Browser/live view 是信任界面。** Browserbase case 里提到 300,000+ sessions、Stagehand powers every web action、live browser view 是核心 UX。这说明 browser agent 的“看得见执行过程”不是附属功能，而是用户信任和调试的关键表面。

4. **Model routing 会变成 agent 产品基本功。** Hyperagent 明确 model-agnostic：复杂规划用强 reasoning model，重复任务用低成本模型。这和我们看到 GPT-5.6 社区反馈是一致的：未来产品不应只卖“接入某个模型”，而要管理模型组合、成本和任务匹配。

## 对 GTM 的学习

Hyperagent 的流量结构显示它不是纯自然增长：2026 H1 Similarweb 估算总访问 1.665M，渠道里 direct 32.32%、paid social 29.37%、paid search 16.18%、organic social 8.69%。这更像是 Airtable 品牌/创始人信用 + 付费投放 + 社区/视频解释共同驱动。

社交流量里 YouTube 和 Reddit 占比很高，说明复杂 agent 产品需要“看懂它怎么跑”的解释场。纯文字 landing page 很难讲清楚 agent fleet / browser run / tools / skills / memory，视频 demo 和真实工作流案例更关键。

Product Hunt 的 Superagent launch 只拿到 #6 Day Rank、149 points，不算爆炸，但它仍然是 Airtable standalone agent 产品线的外部分发节点。这里的教训不是“所有产品都要上 PH”，而是每一次 public launch 都是一次叙事测试：你到底怎么解释 multi-agent system、finished work、boardroom-ready deliverable。

## 对我们后续调研的检查表

以后看企业 agent / AI employee / browser agent 产品，可以固定问：

- 它有没有明确的 system of record，还是只在聊天框里生成结果？
- 它如何接入真实工具和权限？
- 它有没有 skills/memory/evals，还是每次都靠 prompt？
- 它有没有 live execution / replay / logs，让人能信任执行过程？
- 它是否 model-agnostic，是否做了任务级 model routing？
- 它的 GTM 是 founder audience、社区、SEO、paid social、vertical sales，还是几个组合？
- 它有没有真实 workflow 闭环案例，而不是 demo task？

## 事实边界

- Hyperagent 是 Airtable/Formagrid 体系内产品，不是外部独立 startup。
- Howie Liu 是 Airtable CEO/co-founder 和关键推动者，但当前证据不足以把他写成 Hyperagent founder。
- Product Hunt 数据来自 Superagent 页面，不能直接等同于 Hyperagent 独立 launch。
- Similarweb 是第三方估算，适合看量级和渠道结构，不宜当官方 analytics。
