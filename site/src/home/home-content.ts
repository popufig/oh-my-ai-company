export const featuredResearch = [
  {
    id: "company.kernel",
    image: "/media/assets/kernel/homepage-hero.png",
    zh: "面向 AI agent 的云浏览器基础设施，以及它与 Browserbase、Browserless 的产品边界。",
    en: "Cloud browser infrastructure for AI agents, mapped against Browserbase and Browserless."
  },
  {
    id: "company.browserbase",
    image: "/media/assets/browserbase-stagehand-hero-2026-07-11.png",
    zh: "从浏览器运行时到 Stagehand，理解 agent 如何稳定地操作真实网站。",
    en: "From browser runtime to Stagehand: how agents operate real websites reliably."
  },
  {
    id: "company.browser-use",
    image: "/media/assets/browser-use/home.png",
    zh: "开源 browser agent 框架如何形成开发者分发、云产品与融资网络。",
    en: "How an open-source browser agent became a developer channel, cloud product, and funding story."
  },
  {
    id: "investor.accel",
    image: "/media/assets/accel/homepage-hero.png",
    zh: "从 Accel 的团队、投资事件和公司组合，向下展开 AI 版图。",
    en: "Explore Accel through its partners, investments, and connected AI portfolio."
  }
] as const;

export const homeCopy = {
  zh: {
    nav: {
      companies: "公司",
      investors: "投资机构",
      graph: "关系图谱",
      method: "研究方法"
    },
    eyebrow: "开放的 AI 公司研究图谱",
    lead: "看清 AI 公司背后的产品、人物、资本与证据。",
    description: "Oh My AI Company 持续整理 AI 公司档案，把零散网页、投资事件、团队关系和研究判断连接成可以追溯的知识网络。",
    searchPlaceholder: "搜索公司，例如 Kernel、Browserbase…",
    searchAction: "开始探索",
    searchHint: "也可以从精选研究或投资关系图开始。",
    stats: {
      companies: "公司档案",
      objects: "研究对象",
      links: "结构化关系",
      updated: "公开快照"
    },
    startEyebrow: "如何使用",
    startTitle: "从一个名字进入，再沿着证据和关系继续。",
    startDescription: "这不是公司榜单。每个入口都通向正文、结构化字段、来源与上下游对象。",
    paths: [
      {
        number: "01",
        title: "阅读公司档案",
        text: "先看产品、团队、增长与关键判断，再从正文双链进入人物和证据。",
        href: "/companies",
        action: "浏览公司"
      },
      {
        number: "02",
        title: "追踪投资网络",
        text: "从投资机构出发，穿过 investment 对象，看见公司组合与具体投资事件。",
        href: "/investors",
        action: "查看机构"
      },
      {
        number: "03",
        title: "验证研究结论",
        text: "打开 source.item 检查 URL、时间、证据等级和抓取质量，而不是只接受摘要。",
        href: "/sources",
        action: "查看证据"
      }
    ],
    featuredEyebrow: "精选研究",
    featuredTitle: "从真实对象开始，而不是从空白搜索框开始。",
    featuredAction: "打开档案",
    graphEyebrow: "把关系看出来",
    graphTitle: "公司不是孤立页面，而是一张可以查询的网络。",
    graphDescription: "自定义 Graph View 可以从投资机构展开到 investment，再到 company；也可以只看创始人、来源、流量快照或概念证据。",
    graphAction: "进入关系图谱",
    latestEyebrow: "最近更新",
    latestTitle: "研究库仍在持续生长。",
    latestDescription: "更新时间表示对象最近一次整理时间，不等于来源事件发生时间。",
    latestAction: "查看全部公司",
    methodEyebrow: "研究方法",
    methodTitle: "事实、判断和不确定性分开保存。",
    methodDescription: "结构化字段用于查询，Markdown body 用于解释，source.item 保存证据，note 保存人的判断。每条公开结论都应该能够回到来源和时间。",
    methodSteps: [
      ["对象化", "公司、人物、投资、来源和概念拥有稳定 ID，而不是散落在文档标题里。"],
      ["证据化", "S1-S4、quality 与 collected_at 明确一条来源能支持什么，不能支持什么。"],
      ["可追溯", "字段关系和正文双链同时保留，让人和 agent 都能沿上下游继续调查。"]
    ],
    repoAction: "查看公开仓库",
    footer: "一个由人和 agent 共同维护的公开研究 vault。",
    noResults: "没有找到匹配公司"
  },
  en: {
    nav: {
      companies: "Companies",
      investors: "Investors",
      graph: "Graph",
      method: "Method"
    },
    eyebrow: "An open atlas of AI companies",
    lead: "See the products, people, capital, and evidence behind AI companies.",
    description: "Oh My AI Company connects company dossiers, public sources, investment events, team relationships, and research judgments into a traceable knowledge network.",
    searchPlaceholder: "Search companies such as Kernel or Browserbase…",
    searchAction: "Explore",
    searchHint: "Or begin with featured research and the investor graph.",
    stats: {
      companies: "Company dossiers",
      objects: "Research objects",
      links: "Structured links",
      updated: "Public snapshot"
    },
    startEyebrow: "How to use it",
    startTitle: "Start with a name, then follow evidence and relationships.",
    startDescription: "This is not a ranking. Every entry connects narrative research, structured fields, sources, and adjacent objects.",
    paths: [
      {
        number: "01",
        title: "Read a company dossier",
        text: "Understand product, team, distribution, and key judgments, then follow body links into people and evidence.",
        href: "/companies",
        action: "Browse companies"
      },
      {
        number: "02",
        title: "Trace investment networks",
        text: "Move from an investor through investment objects into portfolio companies and specific financing events.",
        href: "/investors",
        action: "Browse investors"
      },
      {
        number: "03",
        title: "Verify the research",
        text: "Inspect source URLs, dates, evidence levels, and capture quality instead of accepting a summary at face value.",
        href: "/sources",
        action: "Browse evidence"
      }
    ],
    featuredEyebrow: "Featured research",
    featuredTitle: "Begin with real dossiers, not an empty search box.",
    featuredAction: "Open dossier",
    graphEyebrow: "Make relationships visible",
    graphTitle: "A company is not an isolated page. It is part of a queryable network.",
    graphDescription: "Custom Graph Views can move from investor to investment to company, or focus on founders, sources, traffic snapshots, and concept evidence.",
    graphAction: "Explore the graph",
    latestEyebrow: "Recently updated",
    latestTitle: "The research vault keeps growing.",
    latestDescription: "Updated time means the object was revised; it is not the date of the underlying event.",
    latestAction: "View all companies",
    methodEyebrow: "Methodology",
    methodTitle: "Facts, judgments, and uncertainty are stored separately.",
    methodDescription: "Structured fields support queries, Markdown bodies explain, source.item stores evidence, and note stores human judgment. Every public claim should lead back to a source and date.",
    methodSteps: [
      ["Objects", "Companies, people, investments, sources, and concepts have stable IDs instead of living only in document titles."],
      ["Evidence", "S1-S4, quality, and collected_at make clear what a source can and cannot support."],
      ["Traceability", "Field relationships and body links let people and agents continue in either direction."]
    ],
    repoAction: "View public repository",
    footer: "A public research vault maintained by people and agents.",
    noResults: "No matching companies"
  }
} as const;
