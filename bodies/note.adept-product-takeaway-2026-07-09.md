# Adept takeaway：computer-use agent 的前传与未竟问题

Adept 对我们最有价值的不是“它现在是不是 Viktor 的强竞品”，而是它完整展示了 computer-use agent 这条路的早期高光和困难。

它很早看到了对的方向：AI 不应该只聊天，而应该把用户意图翻译成软件动作。ACT-1、Chrome extension、custom viewport rendering、click/type/scroll、Salesforce demo，这些都是今天 browser agent / enterprise agent 仍在追的问题。

但 Adept 也暴露了三件事：

1. **只做 action model 不够。** 企业买的是稳定 workflow 和业务结果，不是模型 demo。
2. **自然语言必须被约束。** AWL 说明 Adept 后来也走向 DSL + agent reasoning loop，而不是纯 prompt。
3. **startup 同时训练 foundation model 和打 enterprise product 太重。** Amazon 事件说明它最终把一部分模型/人才价值转移给大厂，独立公司转向更窄的 agentic AI solutions。

对 [[company.viktor]] 的启发：Viktor 不能只证明“我能操作浏览器/工具”，还要证明 Slack/Teams 入口、权限、上下文、定时任务、审批和回滚形成一个可长期使用的工作系统。Adept 的历史问题就是 Viktor 必须回答的问题。

Evidence: [[source.adept-act1-2022-09-14]], [[source.adept-agents-awl-2024-08-23]], [[source.adept-update-amazon-2024-06-28]], [[source.hn-adept-act1-2022-09-14]].
