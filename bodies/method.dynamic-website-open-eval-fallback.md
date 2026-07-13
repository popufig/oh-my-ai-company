# 动态网站兜底：open -> wait -> eval -> requests

当 `pinixc browser read` 只返回 Cookie 提示、导航碎片、空壳，或正文实质内容过少时，使用这套流程。

## 操作流程

1. 如果 `browser read` 的结果只有 Cookie、导航或空壳，按抓取失败处理。
2. 运行 `pinixc browser open <url> --profile <profile>`，保留 `tab_id`。
3. 不要把 `readyState=complete` 等同于业务内容已经就绪。继续检查 `document.body.innerText.length`、`document.links.length` 和 `document.images.length`。
4. 如果正文仍未达到最低有效阈值，先等待页面满足就绪条件，再做 snapshot/read。例如：

```bash
pinixc browser eval 'new Promise(resolve=>{const start=Date.now(); const tick=()=>{const text=document.body?.innerText||""; if(text.length>500||Date.now()-start>30000) resolve({readyState:document.readyState,textLength:text.length,links:document.links.length,images:document.images.length,preview:text.slice(0,500)}); else setTimeout(tick,500)}; tick();})' --tabid <id> --timeout 35000
```

5. 如果 Cookie 弹窗遮挡页面，运行 `snapshot --tabid <id> -i`，按 ref 点击 Accept/Decline，再检查一次。
6. Readability 失效时，改用 DOM eval 提取：
   - `document.title`
   - meta description / keywords
   - `querySelectorAll("h1,h2,h3,h4,p,a,button,label,input,textarea,select,option")`
   - links 和 form fields
   - `document.body.textContent` 只作最后兜底，因为它可能混入 Next.js 脚本。
7. 如果 DOM 里仍没有目标数据，而页面会调用 JSON API，再检查 `requests` / `response`。
8. 等待超时后，转向稳定的官方子页面，例如 docs、pricing、blog，并补读页面 metadata。本轮只把首页标为 partial/empty，不要据此声称整个网站不可访问。
9. 只有 open/wait/eval/request 和官方子页面都失败后，才把页面标记为 unreachable 或 empty_shell。

## 为什么需要这套方法

Readability 更适合文章型页面。产品页的重要信息经常藏在交互表单、卡片、客户端状态或 API 响应里。正文提取失败，不代表页面本身为空或网站不可访问。

## Luel 案例

[[company.luel]] 最初在 `browser read` 中看起来只有空壳和 Cookie。打开页面、处理 Cookie，再提取 DOM 与 marketplace API 后，我们拿到了：

- 首页定位；
- 买方需求提交漏斗；
- 公开 marketplace/catalog；
- contributor 任务与结算流程；
- verified seller 申请；
- Discord 社区入口。

这显著改变了对产品的理解：网站并不空，只是原来的提取路径不对。

证据：[[source.website.luel-home-dom-2026-07-08]]、[[source.website.luel-request-2026-07-08]]、[[source.website.luel-contribute-2026-07-08]]、[[source.website.luel-marketplace-2026-07-08]]、[[source.website.luel-supplier-application-2026-07-08]]。

## Kernel 就绪状态案例

[[company.kernel]] 暴露了另一种失败模式：主文档、脚本和样式都已加载成功，`readyState` 也是 `complete`，但页面仍只有 Next flight shell，可见正文、链接和图片都是零。同一个 default-profile tab 在显式等待后可以正常渲染；新开的 tab 仍可能等待 30 秒后保持空白。

因此，调研中至少要区分三种状态：

- **文档已加载**：网络请求和导航结束。
- **内容已就绪**：可见正文、链接和图片达到最低有效阈值。
- **等待超时但网站部分可用**：本轮首页空壳未恢复，但官方 docs 等子页面仍可读取。

证据：[[source.website.kernel-home-2026-07-13]]、[[note.kernel-research-run-2026-07-13]]。
