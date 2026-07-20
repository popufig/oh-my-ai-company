import type { MemexSiteExtension } from "@memex/site";
import { HomePage } from "./home/HomePage";
import { objectPageTitle, routeForType, seoConfig } from "./seo";
import { TopicPage } from "./topics/TopicPage";
import { topicBySlug, topicDefinitions, topicPath } from "./topics/topic-definitions";

const siteExtension: MemexSiteExtension = {
  id: "oh-my-ai-company",
  HomePage,
  pages: [
    { id: "topics", path: "/topics", Component: TopicPage },
    {
      id: "topic",
      path: "/topics/:slug",
      match: (pathname) => /^\/topics\/[^/]+\/?$/.test(pathname),
      Component: TopicPage
    }
  ],
  automationActions: ["listTopics", "openTopic", "openChildTopic", "setChapter", "selectAnchor", "selectPath", "selectCompany", "selectDimension", "expandEvidence"],
  automation: {
    actions: ["listTopics", "openTopic"],
    state: () => ({ topicIDs: topicDefinitions.map((topic) => topic.id) }),
    invoke: (action, payload) => {
      if (action === "listTopics") return topicDefinitions.map(({ id, slug, title, format }) => ({ id, slug, title, format }));
      if (action === "openTopic" || action === "openChildTopic") {
        const slug = typeof payload === "string" ? payload : String((payload as { slug?: unknown } | null)?.slug ?? "");
        if (!topicBySlug.has(slug)) throw new Error(`Unknown topic: ${slug}`);
        window.location.assign(topicPath(slug));
        return { slug, path: topicPath(slug) };
      }
      throw new Error(`Unknown site action: ${action}`);
    }
  },
  documentTitle: ({ brandName, view, activeType, object }) => {
    if (view === "detail" && object) return objectPageTitle(object);
    if (view === "objects" && activeType) {
      const route = routeForType(activeType);
      if (route) return `${route.label} — evidence-traceable AI research | ${seoConfig.site.short_name}`;
    }
    return brandName;
  }
};

export default siteExtension;
