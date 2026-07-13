Sessions 是 isolated cloud browsers。创建后返回 WebSocket endpoint、liveUrl、sessionUrl、computerActionEndpoint、status、createdAt、creditsUsed 等。常见配置包括 acceptCookies、useStealth、useUltraStealth、useProxy、screen、timeoutMinutes。

这证明其核心底层仍是可被 Playwright/Puppeteer/CDP 控制的云浏览器池。
