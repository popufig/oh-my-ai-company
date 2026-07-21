从 `sarea.ai/download` 获取 v0.13.0 DMG，文件 211,497,156 bytes，SHA-256 为 `696534d00d2938a885c3d523f65f3f54a2873cab7e83cf8111411ecc57a02e28`。App bundle ID `io.corespeed.Sarea`，build 155，最低 macOS 15.0，universal arm64/x86_64；CoreSpeed Inc. Developer ID 签名和 hardened runtime 可验证，deep/strict codesign 通过。

包内可见六个 connector definition、ACP agent schema、browseruse/computeruse/sarea binaries、skills 与 approval/error fixtures。应用从只读 DMG 启动成功且未立即崩溃。未登录，不能验证真实 connector、wallet 或 workflow；`stapler validate` 未发现 stapled ticket，本环境缺 `spctl`，不能外推最终 Gatekeeper 结果。
