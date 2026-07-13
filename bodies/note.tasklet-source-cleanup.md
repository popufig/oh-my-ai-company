# Tasklet 旧资料清理记录

迁移自 `vertical/media/knowledge/radar/tasklet/`。

处理过的格式/口径问题：
- `product.md` 混合事实与强判断，迁移时拆成 company body + notes；“Manus 美国版”“技术不新卖得好”保留为研究判断，不当事实字段。
- `person.andrew-lee.md` 有重复“背景”章节，迁移时合并。
- `twitter-full.cn.md` 里有“Garry Tan 背书”写法；`community-discussions.cn.md` 已修正为 Tim Suzman 相关帖。迁移时使用保守口径。
- Team size 存在 8/9/10 三种口径；以 YC Jobs/official funding post 的 9 为当前较强口径，YC page excerpt 的 8 和旧 scrape 的 10 保留冲突说明。
- Funding 存在 $20M 和 $29.5M 两种口径；$20M 是官方融资公告，$29.5M 来自 YC Jobs 页面。
- Product Hunt 页面 browser read 是安全验证空壳，标为 `empty_shell`。
- EP2 有 summary、中文转录、英文转录、full txt 多个派生文件，合并为一个 source.item，避免重复证据。

原则：source.item 放证据，note 放判断，concept 放可迁移模式，company body 放综合卷宗。
