# Computer-use Action Model / 软件操作模型

这个概念指一类模型/系统：不是只生成文本，而是把用户自然语言意图翻译成软件界面中的动作，例如观察页面、定位按钮、点击、输入、滚动、读取文档、跨工具执行 workflow。

[[company.adept]] 的 ACT-1 是早期高辨识度样本。它通过 Chrome extension 观察浏览器状态并执行动作，目标是“anything a human can do in front of a computer”。后续 Adept 进一步引入 AWL，把自然语言和可约束的 workflow language 结合。

后续判断同类产品时，可以问：

- 它是直接操作 UI，还是只调用 API？
- 页面理解基于 DOM、截图、多模态模型，还是混合表示？
- 动作是否可复现、可审计、可回滚？
- 是否有 DSL / template / guardrail 来约束自然语言的不确定性？
- 它的产品入口在哪里：浏览器、Slack/Teams、workflow builder、垂直业务系统？

Related: [[company.adept]], [[company.viktor]], [[note.adept-product-takeaway-2026-07-09]].
