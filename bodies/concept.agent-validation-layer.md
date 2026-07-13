# Agent 验证层

一句话：agent 能行动、能写代码以后，新的问题是如何验证它做得对不对、安不安全、会不会破坏真实生产系统。

这个 concept 指向一类基础设施：测试 agent 行为、复现真实环境、模拟 API、隔离执行、验证 agent 写出的代码。它不是泛泛的 sandbox，而是“生产形态的验证环境”。

已观察到的例子：[[company.arga-labs]] 用 custom sandbox images 和 API twins 把“agent testing”具体化。我们对它的理解是：不是 PC 沙盒，而是按客户生产依赖定制出来的测试沙盒镜像。

后续比较 browser agent、coding agent、API agent、安全测试平台时，可以用这个 concept 归类：它解决的是 agent 能不能做，还是 agent 做完后如何被验证。
