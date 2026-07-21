## 入口与研究问题

从 corespeed.io 进入，先查 vault 与近名实体，再把问题拆成六条线：当前 access layer 的 shipped state；历史 runtime/Zypher 与新产品的继承边界；OAuth/凭证/policy/pay 的安全责任；团队与融资；采用/流量/社区；Composio、Arcade、Pipedream、Nango 及既有 NewCore/Kylon 的竞品拓扑。

## 本轮最重要的纠错

1. **产品转向必须断代。** 2025 年的 CoreSpeed 是 Agent-native runtime PaaS，2026-06-18 才公开转向 access/control layer。Zypher、Sarea 与 DeckSpeed 可以证明团队历史交付，不可直接证明当前 1,000+ connectors、memory、pay 或 billing 已上线。
2. **CTA smoke 优先于 feature list。** 官网功能面很完整，但真实点击只得到 early-access 邮箱表单。没有公开 app/docs/pricing，故 claims matrix 统一降级。
3. **Logo 数量不是 connector 证据。** 对 1,000+ 的核验至少需要目录、scope、action coverage、授权流程、成功率或账号内 smoke；本轮均缺失。
4. **支付演示数字视为 UI placeholder。** 官网的 `$00/$000` 和 last paid 等动画不代表账单、交易或采用。
5. **隐私政策按适用面读。** 当前 Privacy 只覆盖 waitlist 与网站 analytics，不能外推 production connector data、memory 或 payment 的处理条款。
6. **社区搜索读 verified_count。** Reddit count=4，但 exact-domain verified_count=0；HN 只有旧 runtime launch 的 1 point/0 comments。
7. **低样本流量不填精确 monthly_visits。** Similarweb 只给 `<20K` 和环比，traffic object 留空访问量字段，避免把阈值当数字。
8. **融资同源稿不做多重确认。** Baidu Ventures 的多篇转载按一个 announcement signal；Monad 以投资方官网 portfolio 为强关系。累计融资与估值不结构化。

## 方法增量

对发生 pivot 的公司，新增“lineage matrix”：历史产品、当前产品、可继承资产、不可继承结论。历史 GitHub、客户与流量只在机制明确连续时进入当前 shipped/adoption 判断。

对 access/authorization 产品，claims matrix 应至少拆成 connector coverage、credential storage、scope/revoke、policy precedence、audit/rollback、memory ownership、payment liability、billing meter 八列。只写“secure OAuth”会掩盖真正采购问题。

同一 tab 的 selector screenshot 必须串行。本轮并发截图出现 target closed，串行复测全部成功；失败只记工具过程，不进入产品判断。

## 停止条件与未完成

本轮已形成官网/隐私/转向帖、历史开源资产、团队、两条投资关系、Similarweb、社区 no-hit 与四个直接/相邻竞品的最小闭环。继续公开搜索开始重复媒体稿和官网 claim；在没有 early-access 账号、客户披露或新安全材料前，边际价值降低，因此停止。

仍未验证真实 OAuth、connector、policy、memory、pay、billing、audit、export/delete；未确认法律主体、精确 headcount、round total、估值、客户、付费和留存。上述项目作为更新触发器保留。
