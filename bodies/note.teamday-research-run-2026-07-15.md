本轮对象：[[company.teamday]]，相关历史产品：[[company.ayanza]]。产品判断见 [[note.teamday-product-takeaway-2026-07-15]]。

## 实际研究路径

1. 从首页与 roster 确认“AI employees”前台，再读 features/docs，发现核心其实是 company memory、files、missions、approval、MCP、browser/terminal 与 app builder。
2. 读 pricing 与 terms，发现当前套餐按 runs/minutes/provider balance，条款仍保留 PAYG credits + 50% fee，形成版本漂移。
3. 沿 changelog、GitHub 创建时间和 paid launch 文章还原时间线，纠正“2026-07-13 才 launch”的误读。
4. 从 Jozo LinkedIn 评论反查 Ayanza，建立“独立产品 + 共享谱系”边界，而不是 rename/acquisition。
5. 对 security/data/SOC 2 页面做口径审计，发现 planned/ready/certified 同时存在，降级为未核验。
6. 用 Similarweb 与 Semrush同时检查量级和关键词意图，发现 SEO 访问不等于 AI employee 购买意图。
7. 检索 Reddit、X、PH、HN、微信、小红书、LinuxDo、V2EX；只保留可见结果与 no-result 边界，不把词义污染当产品讨论。
8. 保存官网截图、真实产品输出和流量截图；未登录 app 只做 smoke test。

## 本轮纠正了什么

- 初看：一个有很多角色的 AI employee 产品。
- 深挖后：一个以角色获客、以 company context/control plane 承载执行的 agent workspace。
- 初看：2026-07-13 launch 的新产品。
- 深挖后：2024 已有公开开发，2026-07-13 只是付费 self-serve 节点。
- 初看：Ayanza 可能是旧名或前身。
- 深挖后：官方明确称 TeamDay 为全新独立产品，但共享 founder 与运营连续性。
- 初看：Organic Search 近 60% 是增长优势。
- 深挖后：97% 非品牌，关键词与鞋码/服饰/OpenRouter 等意图混杂，不能直接归因产品需求。

## 工具与边界

- Google adapter 在连续查询后出现 execution context destroyed；反馈后已升级到 `cp/google@1.1.4`，精确 no-result 会结构化返回。
- LinkedIn employees 对 Ayanza 曾静默终止；升级后会结构化返回 extraction timeout。当前仍没有 Ayanza 员工名单。
- Product Hunt 同名结果属于旧的 work-friendship 产品，主体消歧必须在写入前完成。
- 页面政策日期、营销博客和当前 pricing 不一致时，不能取最新一句作为唯一事实。

## 对方法的增量

与 [[note.lindy-research-run-2026-07-15]]、[[note.marblism-research-run-2026-07-15]] 对照后，本轮新增四个候选动作：

1. **商业 launch 与产品出生双时间线**：公开付费、waitlist、首次代码/文档与产品重包装分别记节点。
2. **产品谱系三证合一**：创始人明确表述、法律/运营主体、产品工件连续性同时读；强关系不足时只在正文表达。
3. **流量意图审计**：每次流量分析都检查 brand/non-brand、具体关键词和 similar-site 语义，不把访问量直接等同目标需求。
4. **公开口径漂移审计**：pricing、terms、data policy、security、marketing blog 按发布日期并排读，冲突本身进入证据。

这些动作已补入 [[method.product-research-workflow-v0]]，仍是练兵记录，不是最终模板。
