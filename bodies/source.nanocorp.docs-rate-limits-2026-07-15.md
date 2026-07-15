# NanoCorp Tool rate limits
Tool rate limits 按 company 计算，每次调用包括失败调用都会计数。关键写动作：send_email 20/hour、100/day；create_product 10/hour、50/day；delete_product 5/hour、20/day；search_prospects 20/hour、100/day；web_search/web_fetch 60/hour、400/day。

超限返回结构化 `rate_limited`，包含窗口、used/limit、retry_after_s 和 should_wait；超过 5 分钟的等待明确要求 Agent 不要 sleep/retry，而是转去做别的工作。这是产品把 runaway loop 防护直接编码进工具 contract 的证据，但还没有用户可见的 outcome budget 或独立审批机制。
