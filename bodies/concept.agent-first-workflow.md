# Agent-first 工作流

一句话：不是“workflow 包住 LLM”，而是“LLM/agent 包住传统软件”。

Andrew Lee 在 [[source.podcast.tasklet-cogrev-ep1]] 里反复讲这个差异：Zapier/n8n/AgentKit 式产品让用户定义流程图，LLM 是节点里的能力；Tasklet 反过来，把 agent 放在控制层，由它规划、调用工具、绕过边缘情况。[[source.hn.tasklet-show-45529555]] 里 founder comment 也用类似口径解释了 No flowchart 的定位。

这个 concept 不等于“没有规则”。真正的问题是控制权在哪里：流程图是主控，还是 agent 是主控。
