import type { MemexSiteExtension } from "@memex/site";
import { HomePage } from "./home/HomePage";
import { objectPageTitle, routeForType, seoConfig } from "./seo";

const siteExtension: MemexSiteExtension = {
  id: "oh-my-ai-company",
  HomePage,
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
