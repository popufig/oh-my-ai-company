# Moxt 本轮调研流程与反思
## 本轮实际路径

1. 从官网首页拆产品层：上下文、AI teammate、workflow、MiniApp、integrations、sandbox、CLI、pricing。
2. 读 What's New、Terms、Pricing，校准 launch 时间、计费和数据边界。
3. 从 LinkedIn 与即刻确认团队，不把自报区间当精确 headcount。
4. 读创始人发布长文和 72 分钟播客章节，重建内部实验到硬切换上线的过程。
5. 扫 X、微信、知乎、腾讯内容分发、小红书、PH、HN、Reddit、V2EX、Linux.do，区分传播素材和真实社区反馈。
6. 用 Similarweb 提取月度曲线、渠道、地域、设备和搜索结构，并人工识别 similar sites/关键词噪声。
7. 实际打开 Hub 查看 workflow、MiniApp、AI teammate 和 skill 模板；注册页需要创建账户，本轮未越过账号创建边界。
8. 截取官网 DOM 产品画面和流量图，并写入图文正文。

## 本轮新增方法

- **团队资产年龄与产品年龄分开。** Moxt 的三周速度只有放回 Motiff/Paraflow 连续团队才解释得通。
- **更新日志可以重建产品重心漂移。** 三个月功能序列显示它从文件 workspace 向 workflow/app/control plane 扩张。
- **集中内容窗口要当作 GTM 事件分析。** 4 月 27–30 多位中文创作者密集发布正向实测，既是用例证据，也是传播编排信号；没有披露时不能直接断言商业合作。
- **Similarweb 曲线与渠道必须叠 launch 节点。** 只看当前月会错过 3 月上线、4–5 月放大、6 月回落的结构。
- **负面搜索结果也要存边界。** “本次未找到”不能写成“平台没有”。

## 工具与缺口

- 即刻公开移动页可以读，但 pinixc 暂无可用 adapter；已给 site-forge 提交最小 search/note/user 需求。当前需要登录授权后才能侦察真实 API。
- 官网 Hub 动态内容需要 browser open + eval wait，直接 open 初始正文太少，按空壳红线不能使用首屏返回作为完整素材。
- Similarweb 月度数字未直接显示在正文卡片中，本轮从 Highcharts 坐标和明确坐标轴还原，并用总和校验；未来应有结构化 chart data 提取。
- mmx source add 的 body stdin 在没有真正 pipe stdin 时会创建空 body；本轮立即检查字节数并补写。后续批量写入要用明确 stdin 或直接编辑 body 后 refresh。

## 停止条件

产品、团队、launch、GTM、流量、社区、定价、条款和关键风险均有证据；融资无法交叉验证，已明确降级为 S4。继续深挖的边际价值主要依赖账户内真实产品体验或公司披露经营数据，因此本轮可以 public-ready。

相关：[[company.moxt]] [[method.product-research-workflow-v0]]
