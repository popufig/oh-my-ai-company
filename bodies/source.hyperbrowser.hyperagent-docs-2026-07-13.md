HyperAgent 是开源 browser automation framework，文档定位为 Playwright + AI。它要解决 selector breaking、iframe/shadow DOM、dynamic content 等问题。核心 API：page.ai()、page.perform()、page.extract()，并能 fallback 到原生 Playwright。

重要功能包括 automatic element location、action caching、multiple LLM providers、cloud ready via Hyperbrowser、CDP-first architecture。Action caching 对生产化很重要：把一次 LLM 动作记录为可复用 automation，降低每次调用 LLM 的成本与不稳定性。
