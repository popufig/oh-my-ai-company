import { absoluteURL, escapeHTML } from "../seo";
import { topicPath, topicPrimaryCompanyIDs } from "./topic-definitions";
import { type EssayBlock, type ResolvedTopic, type TopicDefinition } from "./topic-types";

function objectFor(topic: ResolvedTopic, id: string) {
  return topic.objects[id] ?? { id, title: id, canonical: "#", type: "", updatedAt: "", indexable: false };
}

export function topicCollectionSEOBody(topics: TopicDefinition[]) {
  const items = topics.map((topic) => `<li><a href="${escapeHTML(topicPath(topic.slug))}"><strong>${escapeHTML(topic.title)}</strong><span>${escapeHTML(topic.description)}</span><small>${topicPrimaryCompanyIDs(topic).length} 家公司 · ${topic.format === "essay" ? "长篇专题" : "比较专题"} · ${escapeHTML(topic.updatedAt)}</small></a></li>`).join("");
  return `<div class="seo-prerender topic-seo-prerender">
    <header><a class="seo-brand" href="/">Oh My AI Company</a><nav aria-label="Breadcrumb"><a href="/">Atlas</a><span>/</span><span>研究专题</span></nav></header>
    <main><p class="seo-eyebrow">Research topics</p><h1>研究专题</h1><p class="seo-lede">由编辑问题、长篇叙事或比较框架、研究对象和证据边界组成的跨公司阅读路径。</p><ol class="seo-object-list">${items}</ol></main>
  </div>`;
}

function matrixTable(topic: ResolvedTopic & { definition: Extract<TopicDefinition, { format: "comparison" }> }, pathID: string) {
  const definition = topic.definition;
  const path = definition.paths.find((item) => item.id === pathID)!;
  const dimensions = definition.dimensions;
  const rows = path.companyIDs.map((companyID) => {
    const company = definition.companies.find((item) => item.id === companyID)!;
    const object = objectFor(topic, companyID);
    const cells = dimensions.map((dimension) => {
      const cell = company.dimensions[dimension.id];
      const evidence = cell.evidenceIDs.map((id) => {
        const source = objectFor(topic, id);
        return `<li><a href="${escapeHTML(source.canonical)}">${escapeHTML(source.title)}</a>${source.indexable ? "" : "<span>公开可读 · noindex</span>"}</li>`;
      }).join("");
      const breakdown = cell.breakdown
        ? `<dl>${Object.entries(cell.breakdown).map(([name, grade]) => `<div><dt>${escapeHTML(name)}</dt><dd>${escapeHTML(grade)}</dd></div>`).join("")}</dl>`
        : "";
      return `<td><strong class="topic-seo-grade">${escapeHTML(cell.grade)}</strong><p>${escapeHTML(cell.summary)}</p>${breakdown}${cell.evidenceType ? `<small>${escapeHTML(cell.evidenceType.replaceAll("_", " "))}</small>` : ""}<details><summary>证据与边界</summary><p>${escapeHTML(cell.boundary)}</p><ul>${evidence}</ul></details></td>`;
    }).join("");
    return `<tr><th scope="row"><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a></th>${cells}</tr>`;
  }).join("");
  return `<section aria-labelledby="seo-matrix-${escapeHTML(path.id)}"><h3 id="seo-matrix-${escapeHTML(path.id)}">${escapeHTML(path.title)}</h3><p>${escapeHTML(path.description)}</p><div class="topic-seo-table"><table><thead><tr><th scope="col">公司</th>${dimensions.map((dimension) => `<th scope="col">${escapeHTML(dimension.label)}<small>${escapeHTML(dimension.question)}</small></th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

function comparisonTopicSEOBody(topic: ResolvedTopic & { definition: Extract<TopicDefinition, { format: "comparison" }> }) {
  const definition = topic.definition;
  const featured = definition.featuredObjectIDs.map((id) => {
    const object = objectFor(topic, id);
    return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a></li>`;
  }).join("");
  const judgments = definition.judgments.map((judgment) => `<li>${escapeHTML(judgment)}</li>`).join("");
  const dimensions = definition.dimensions.map((dimension) => `<li><strong>${escapeHTML(dimension.label)}</strong><span>${escapeHTML(dimension.question)}</span></li>`).join("");
  const pathOverview = definition.paths.map((path) => `<section><h3>${escapeHTML(path.title)}</h3><p>${escapeHTML(path.description)}</p><ul>${path.companyIDs.map((id) => { const object = objectFor(topic, id); return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a></li>`; }).join("")}</ul></section>`).join("");
  const deepReads = definition.paths.map((path) => `<section><h3>${escapeHTML(path.title)}</h3>${path.companyIDs.map((id) => {
    const company = definition.companies.find((item) => item.id === id)!;
    const object = objectFor(topic, id);
    return `<article><h4><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a></h4><p>${escapeHTML(company.dimensions.control_objects.summary)}</p><p><strong>采用证据：</strong>${escapeHTML(company.dimensions.adoption.summary)}</p><p><strong>边界：</strong>${escapeHTML(company.dimensions.adoption.boundary)}</p></article>`;
  }).join("")}</section>`).join("");
  const boundaries = definition.boundaryReferences.map((reference) => {
    const object = objectFor(topic, reference.id);
    return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a><span>${escapeHTML(reference.summary)}</span></li>`;
  }).join("");
  const guidance = definition.selectionGuidance.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  const method = objectFor(topic, definition.methodID);

  return `<div class="seo-prerender topic-seo-prerender">
    <header><a class="seo-brand" href="/">Oh My AI Company</a><nav aria-label="Breadcrumb"><a href="/">Atlas</a><span>/</span><a href="/topics">研究专题</a><span>/</span><span>${escapeHTML(definition.title)}</span></nav></header>
    <main>
      <article>
        <p class="seo-eyebrow">Research topic · ${escapeHTML(definition.updatedAt)}</p>
        <h1>${escapeHTML(definition.title)}</h1>
        <p class="seo-lede">${escapeHTML(definition.introduction)}</p>
        <p>${escapeHTML(definition.promise)}</p>
        <ul class="seo-links">${featured}</ul>
        <section><h2>四个判断</h2><ol>${judgments}</ol></section>
        <section><h2>控制面管什么</h2><p>A、B、C 是本专题的编辑等级，不覆盖来源的 S1–S4，也不汇总成产品总分。</p><ol class="topic-seo-dimensions">${dimensions}</ol></section>
        <section><h2>同一问题，三种进入方式</h2>${pathOverview}</section>
        <section><h2>比较矩阵</h2>${definition.paths.map((path) => matrixTable(topic, path.id)).join("")}</section>
        <section><h2>沿路径深读</h2>${deepReads}</section>
        <section><h2>什么不应被混作同一控制面</h2><ol class="seo-relations">${boundaries}</ol></section>
        <section><h2>如何选择</h2><ol>${guidance}</ol></section>
        <section><h2>等级表达证据边界，不是产品分数</h2><p>A、B、C 只描述当前维度的公开证据，不改变 source 的 evidence、quality、processing 或索引资格。研究会随新证据修订，不构成产品背书或投资建议。</p><p><a href="${escapeHTML(method.canonical)}">查看研究方法</a></p></section>
      </article>
    </main>
  </div>`;
}

function evidenceSEOList(topic: ResolvedTopic, ids: string[]) {
  if (ids.length === 0) return "";
  return `<details><summary>${ids.length} 条证据</summary><ul>${ids.map((id) => {
    const evidence = objectFor(topic, id);
    return `<li><a href="${escapeHTML(evidence.canonical)}">${escapeHTML(evidence.title)}</a>${evidence.indexable ? "" : "<span>公开可读 · noindex</span>"}</li>`;
  }).join("")}</ul></details>`;
}

function essayBlockSEO(topic: ResolvedTopic, block: EssayBlock) {
  if (block.type === "prose") {
    const objects = (block.objectIDs ?? []).map((id) => { const object = objectFor(topic, id); return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a></li>`; }).join("");
    return `<section>${block.title ? `<h3>${escapeHTML(block.title)}</h3>` : ""}${block.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}${objects ? `<ul>${objects}</ul>` : ""}${evidenceSEOList(topic, block.evidenceIDs ?? [])}</section>`;
  }
  if (block.type === "anchor-comparison") {
    const anchors = block.anchors.map((anchor) => {
      const object = objectFor(topic, anchor.id);
      return `<article><h4><a href="${escapeHTML(object.canonical)}">${escapeHTML(anchor.title)}</a></h4>${anchor.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}${evidenceSEOList(topic, anchor.evidenceIDs)}</article>`;
    }).join("");
    return `<section><h3>${escapeHTML(block.title)}</h3><div>${anchors}</div><aside><strong>这组对照说明什么</strong>${block.synthesis.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}</aside></section>`;
  }
  if (block.type === "supporting-cases") {
    return `<section><h3>${escapeHTML(block.title)}</h3><ul>${block.cases.map((item) => { const object = objectFor(topic, item.id); return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a><span>${escapeHTML(item.role)}</span></li>`; }).join("")}</ul></section>`;
  }
  if (block.type === "evidence-callout") {
    return `<aside><h3>${escapeHTML(block.title)}</h3>${block.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}${evidenceSEOList(topic, block.evidenceIDs ?? [])}</aside>`;
  }
  return `<aside><strong>深入子专题</strong><h3><a href="${escapeHTML(topicPath(block.topicID))}">${escapeHTML(block.title)}</a></h3><p>${escapeHTML(block.summary)}</p></aside>`;
}

function essayTopicSEOBody(topic: ResolvedTopic & { definition: Extract<TopicDefinition, { format: "essay" }> }) {
  const definition = topic.definition;
  const toc = definition.chapters.map((chapter) => `<li><a href="#chapter-${escapeHTML(chapter.id)}">${escapeHTML(chapter.title)}</a></li>`).join("");
  const chapters = definition.chapters.map((chapter) => `<section id="chapter-${escapeHTML(chapter.id)}"><p class="seo-eyebrow">${escapeHTML(chapter.eyebrow)}</p><h2>${escapeHTML(chapter.title)}</h2><p>${escapeHTML(chapter.summary)}</p>${chapter.blocks.map((block) => essayBlockSEO(topic, block)).join("")}</section>`).join("");
  const boundaries = definition.bridgeReferences.map((reference) => { const object = objectFor(topic, reference.id); return `<li><a href="${escapeHTML(object.canonical)}">${escapeHTML(object.title)}</a><span>${escapeHTML(reference.summary)}</span></li>`; }).join("");
  const childTopics = definition.childTopicIDs.map((id) => `<li><a href="${escapeHTML(topicPath(id))}">${escapeHTML(id)}</a></li>`).join("");
  return `<div class="seo-prerender topic-seo-prerender essay-seo-prerender">
    <header><a class="seo-brand" href="/">Oh My AI Company</a><nav aria-label="Breadcrumb"><a href="/">Atlas</a><span>/</span><a href="/topics">研究专题</a><span>/</span><span>${escapeHTML(definition.title)}</span></nav></header>
    <main><article>
      <p class="seo-eyebrow">Long-form research · ${escapeHTML(definition.updatedAt)}</p>
      <h1>${escapeHTML(definition.title)}</h1>
      ${definition.introduction.map((paragraph) => `<p class="seo-lede">${escapeHTML(paragraph)}</p>`).join("")}
      <p>${escapeHTML(definition.promise)}</p>
      <section><h2>开篇判断</h2><ol>${definition.theses.map((thesis) => `<li>${escapeHTML(thesis)}</li>`).join("")}</ol></section>
      <nav aria-label="专题目录"><ol>${toc}</ol></nav>
      ${chapters}
      <section><h2>覆盖主体与 bridge / boundary</h2><ol class="seo-relations">${boundaries}</ol></section>
      <section><h2>深入子专题</h2><ul>${childTopics}</ul></section>
      <section><p class="seo-eyebrow">Conclusion</p><h2>${escapeHTML(definition.conclusion.title)}</h2>${definition.conclusion.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}<blockquote>${escapeHTML(definition.conclusion.closingQuestion)}</blockquote></section>
    </article></main>
  </div>`;
}

export function topicSEOBody(topic: ResolvedTopic) {
  return topic.definition.format === "essay"
    ? essayTopicSEOBody(topic as ResolvedTopic & { definition: Extract<TopicDefinition, { format: "essay" }> })
    : comparisonTopicSEOBody(topic as ResolvedTopic & { definition: Extract<TopicDefinition, { format: "comparison" }> });
}

export function topicCollectionStructuredData(topics: TopicDefinition[]) {
  const canonical = absoluteURL("/topics");
  return [{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonical,
    name: "OMAC 研究专题",
    url: canonical,
    isPartOf: { "@id": `${absoluteURL("/")}#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: topics.map((topic, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: topic.title,
        url: absoluteURL(topicPath(topic.slug))
      }))
    }
  }];
}

export function topicStructuredData(topic: ResolvedTopic) {
  const definition = topic.definition;
  const canonical = absoluteURL(topicPath(definition.slug));
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonical,
      name: definition.title,
      description: definition.description,
      url: canonical,
      dateModified: definition.updatedAt,
      inLanguage: definition.language,
      isPartOf: { "@id": `${absoluteURL("/")}#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: topicPrimaryCompanyIDs(definition).map((companyID, index) => {
          const object = objectFor(topic, companyID);
          return { "@type": "ListItem", position: index + 1, name: object.title, url: absoluteURL(object.canonical) };
        })
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Oh My AI Company", item: absoluteURL("/") },
        { "@type": "ListItem", position: 2, name: "研究专题", item: absoluteURL("/topics") },
        { "@type": "ListItem", position: 3, name: definition.title, item: canonical }
      ]
    }
  ];
}
