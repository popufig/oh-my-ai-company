从当前环境访问官方 API 根地址 /v1、/v1/models、/v1/workspaces、/docs 和 /openapi.json 均返回 HTTP 404 {"detail":"Not Found"}，而不是文档所示资源或结构化 401。文档示例 CDN https://cdn.evose.ai/widget.js 在浏览器中返回 ERR_CONNECTION_CLOSED。

这可能是公开路由未部署、路径变更、网络边界或文档先于产品，不能单凭一次未认证 smoke 判断 API 整体不可用；但至少说明公开开发者接入路径目前无法按文档直接复现。
