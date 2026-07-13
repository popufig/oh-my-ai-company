# Skywork takeaway：把 deep research 做成办公交付物 agent

[[company.skywork]] 的产品启发不是“又一个超级 agent”，而是它把 deep research 拆进了办公交付物：Docs、Slides、Sheets、Webpages、Podcasts。这个方向的价值在于，用户最后要的不是答案，而是能交付、能编辑、能导出、能引用的成果。

## 值得学习

1. **按交付物拆 agent，而不是按模型能力拆 agent**  
   Docs/Slides/Sheets 每个都有不同的验收标准：文档要结构和引用，PPT 要视觉和可编辑，表格要统计和 XLS 导出。Skywork 选择按交付物建专家 agent，是比“一个万能聊天框”更清楚的产品组织。

2. **执行前澄清需求**  
   Clarification Card 说明他们意识到 agent 产品的失败常发生在输入阶段。先问目标、上下文、约束，再生成 todo list 给用户确认，这是降低 agent 误执行的重要产品模式。

3. **引用与知识库是信任层**  
   对研究报告/PPT/表格这类场景，source tracing 和 personal knowledge base 不是锦上添花，而是用户敢不敢拿去交付的基础。

4. **研究/开源资产反哺产品信任**  
   SkyworkAI GitHub 下的 DeepResearchAgent、SkyReels、Skywork-R1V 等项目，能给产品增加技术可信度。这和纯营销型 AI 工具不同。

## 对我们的判断

Skywork 属于 AI workspace / office agent，不属于 AI employee。它的场景是“知识工作交付物生成”，不是“在业务系统里扮演一个岗位”。

它和 Genspark、Manus、Office Copilot、Google Workspace Gemini、Gamma/Canva/Tome、NotebookLM/Deep Research 等产品有重叠，但竞争维度不同：

- 跟 Gamma/Tome 比，它更重 deep research 和多格式交付。
- 跟 Manus/Genspark 比，它更强调办公输出格式和可编辑导出。
- 跟 Office Copilot/Gemini 比，它更像独立 AI workspace，而不是嵌入既有办公套件。

## 运营/GTM 观察

Product Hunt launch 表现不算强爆发，Similarweb 公开页显示 Paid Search 占比很高，说明它可能更依赖投放/搜索获客，而不是英文社区自然扩散。HN/Reddit 暂时没找到有效讨论，后续更应该盯 X、PH 评论、GitHub stars/issues、Similarweb 渠道变化。

## 风险

- 公司 PR 中 benchmark 和成本优势属于公司声明，需要第三方验证。
- 官网当前抓取受限，不能从官网正文确认最新产品形态。
- 组织/融资结构需要找昆仑万维公告或交易所文件做一手核验。
