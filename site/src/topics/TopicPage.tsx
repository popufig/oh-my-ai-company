import {
  ArrowRight,
  Button,
  ChevronDown,
  ExternalLink,
  useEffect,
  useMemo,
  useQuery,
  useState,
  type SiteProjectPageProps
} from "@memex/site";
import { topicBySlug, topicDefinitions, topicPath, topicPrimaryCompanyIDs } from "./topic-definitions";
import {
  topicDimensionIDs,
  type ComparisonTopicDefinition,
  type EssayBlock,
  type EssayTopicDefinition,
  type ResolvedTopic,
  type TopicCompany
} from "./topic-types";
import "./topic.css";

type TopicListPayload = {
  topics: Array<{
    id: string;
    slug: string;
    title: string;
    description: string;
    updatedAt: string;
    companyCount: number;
    canonical: string;
    format: "comparison" | "essay";
  }>;
};

async function fetchJSON<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

function topicSlugFromPath(pathname: string) {
  const match = pathname.match(/^\/topics\/([^/]+)\/?$/);
  if (!match) return "";
  try { return decodeURIComponent(match[1]); } catch { return ""; }
}

function gradeTone(grade: string) {
  if (grade.startsWith("A")) return "is-a";
  if (grade.startsWith("B")) return "is-b";
  return "is-c";
}

function objectFor(topic: ResolvedTopic, id: string) {
  return topic.objects[id] ?? { id, type: "", title: id, canonical: "#", updatedAt: "", indexable: false };
}

function TopicHeader() {
  return (
    <header className="topic-header">
      <a className="topic-brand" href="/" aria-label="Oh My AI Company home">
        <span className="topic-brand-mark">OM</span>
        <span>Oh My AI Company</span>
      </a>
      <nav aria-label="Topic navigation">
        <a href="/topics">专题</a>
        <a href="/companies">公司</a>
        <a href="/graph">关系图谱</a>
      </nav>
    </header>
  );
}

function TopicCollection({ automationRef }: Pick<SiteProjectPageProps, "automationRef">) {
  const topics = useQuery({
    queryKey: ["omac-topics"],
    queryFn: () => fetchJSON<TopicListPayload>("/api/topics")
  });

  useEffect(() => {
    document.title = "研究专题：跨公司比较与证据边界 | OMAC";
  }, []);

  useEffect(() => {
    const controller = {
      state: () => ({ page: "topics", topicIDs: topicDefinitions.map((topic) => topic.id), loaded: Boolean(topics.data) }),
      invoke: async (action: string, payload?: unknown) => {
        if (action === "openTopic") {
          const slug = typeof payload === "string" ? payload : String((payload as { slug?: unknown } | null)?.slug ?? "");
          if (!topicBySlug.has(slug)) throw new Error(`Unknown topic: ${slug}`);
          window.location.assign(topicPath(slug));
          return { slug, path: topicPath(slug) };
        }
        if (action === "listTopics") return topicDefinitions.map(({ id, slug, title, format }) => ({ id, slug, title, format }));
        throw new Error(`Unknown topic action: ${action}`);
      }
    };
    automationRef.current = controller;
    return () => { if (automationRef.current === controller) automationRef.current = null; };
  }, [automationRef, topics.data]);

  return (
    <div className="omac-topic topic-collection-page">
      <TopicHeader />
      <main className="topic-collection">
        <p className="topic-kicker">Research topics</p>
        <h1>研究专题</h1>
        <p className="topic-collection-lede">专题不是标签集合，而是由编辑问题、长篇叙事或比较框架、研究对象和证据边界组成的跨公司阅读路径。</p>
        <div className="topic-collection-list">
          {(topics.data?.topics ?? topicDefinitions.map((topic) => ({
            ...topic,
            companyCount: topicPrimaryCompanyIDs(topic).length,
            canonical: topicPath(topic.slug)
          }))).map((topic) => (
            <article key={topic.id}>
              <div>
                <span>{topic.format === "essay" ? "长篇专题" : "比较专题"} · {topic.companyCount} 家公司 · 更新于 {topic.updatedAt}</span>
                <h2><a href={topic.canonical}>{topic.title}</a></h2>
                <p>{topic.description}</p>
              </div>
              <a className="topic-round-link" href={topic.canonical} aria-label={`打开 ${topic.title}`}><ArrowRight aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

type TopicMatrixProps = {
  topic: ResolvedTopic & { definition: ComparisonTopicDefinition };
  pathFilter: string;
  companyFilter: string;
  dimensionFilter: string;
  openEvidence: string;
  onEvidence: (key: string) => void;
};

function TopicMatrix({ topic, pathFilter, companyFilter, dimensionFilter, openEvidence, onEvidence }: TopicMatrixProps) {
  const definition = topic.definition;
  const dimensions = definition.dimensions.filter((dimension) => !dimensionFilter || dimension.id === dimensionFilter);
  const paths = definition.paths.filter((path) => !pathFilter || path.id === pathFilter);

  return (
    <div className="topic-matrix-groups">
      {paths.map((path) => {
        const companies = path.companyIDs
          .filter((id) => !companyFilter || id === companyFilter)
          .map((id) => definition.companies.find((company) => company.id === id))
          .filter((company): company is TopicCompany => Boolean(company));
        if (companies.length === 0) return null;
        return (
          <section className="topic-matrix-group" key={path.id} aria-labelledby={`matrix-${path.id}`}>
            <div className="topic-matrix-heading">
              <h3 id={`matrix-${path.id}`}>{path.title}</h3>
              <p>{path.description}</p>
            </div>
            <div className="topic-table-scroll" tabIndex={0} aria-label={`${path.title}比较矩阵，可横向滚动`}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">公司</th>
                    {dimensions.map((dimension) => <th scope="col" key={dimension.id}>{dimension.label}<small>{dimension.question}</small></th>)}
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => {
                    const resolvedCompany = objectFor(topic, company.id);
                    return (
                      <tr key={company.id}>
                        <th scope="row"><a href={resolvedCompany.canonical}>{resolvedCompany.title}</a><span>{path.title}</span></th>
                        {dimensions.map((dimension) => {
                          const cell = company.dimensions[dimension.id];
                          const evidenceKey = `${company.id}:${dimension.id}`;
                          const expanded = openEvidence === evidenceKey;
                          return (
                            <td key={dimension.id} data-dimension={dimension.id}>
                              <span className={`topic-grade ${gradeTone(cell.grade)}`}><span className="sr-only">证据等级 </span>{cell.grade}</span>
                              <p>{cell.summary}</p>
                              {cell.breakdown && <dl className="topic-breakdown">{Object.entries(cell.breakdown).map(([name, grade]) => <div key={name}><dt>{name}</dt><dd>{grade}</dd></div>)}</dl>}
                              {cell.evidenceType && <span className="topic-evidence-type">{cell.evidenceType.replaceAll("_", " ")}</span>}
                              <button type="button" className="topic-evidence-toggle" aria-expanded={expanded} onClick={() => onEvidence(expanded ? "" : evidenceKey)}>
                                证据与边界 <ChevronDown aria-hidden="true" />
                              </button>
                              {expanded && (
                                <div className="topic-evidence-panel">
                                  <p>{cell.boundary}</p>
                                  <ul>
                                    {cell.evidenceIDs.map((id) => {
                                      const evidence = objectFor(topic, id);
                                      return <li key={id}><a href={evidence.canonical}>{evidence.title}</a><span>{evidence.indexable ? "可索引证据页" : "公开可读 · noindex"}</span></li>;
                                    })}
                                  </ul>
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ComparisonTopicDetail({ definition, automationRef }: { definition: ComparisonTopicDefinition; automationRef: SiteProjectPageProps["automationRef"] }) {
  const slug = definition.slug;
  const topic = useQuery({
    queryKey: ["omac-topic", slug],
    queryFn: () => fetchJSON<ResolvedTopic & { definition: ComparisonTopicDefinition }>(`/api/topics/${encodeURIComponent(slug)}`),
    enabled: true
  });
  const [pathFilter, setPathFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [dimensionFilter, setDimensionFilter] = useState("");
  const [openEvidence, setOpenEvidence] = useState("");

  const visibleCompanyIDs = useMemo(() => {
    return definition.companies
      .filter((company) => (!pathFilter || company.pathID === pathFilter) && (!companyFilter || company.id === companyFilter))
      .map((company) => company.id);
  }, [companyFilter, definition, pathFilter]);

  useEffect(() => {
    if (definition) document.title = definition.htmlTitle;
  }, [definition]);

  useEffect(() => {
    const snapshot = () => ({
      page: "topic",
      topicIDs: topicDefinitions.map((item) => item.id),
      format: definition.format,
      topicID: definition.id,
      path: pathFilter || null,
      company: companyFilter || null,
      dimension: dimensionFilter || null,
      evidencePanel: openEvidence || null,
      visibleCompanyIDs,
      grades: visibleCompanyIDs.flatMap((companyID) => {
        const company = definition.companies.find((item) => item.id === companyID)!;
        return topicDimensionIDs
          .filter((dimensionID) => !dimensionFilter || dimensionID === dimensionFilter)
          .map((dimensionID) => ({ companyID, dimensionID, grade: company.dimensions[dimensionID].grade }));
      }),
      resolvedCanonicals: topic.data ? Object.fromEntries(Object.entries(topic.data.objects).map(([id, object]) => [id, object.canonical])) : {}
    });
    const controller = {
      state: snapshot,
      invoke: async (action: string, payload?: unknown) => {
        const value = typeof payload === "string" ? payload : String((payload as { id?: unknown; slug?: unknown } | null)?.id ?? (payload as { slug?: unknown } | null)?.slug ?? "");
        if (action === "listTopics") return topicDefinitions.map(({ id, slug: itemSlug, title, format }) => ({ id, slug: itemSlug, title, format }));
        if (action === "openTopic" || action === "openChildTopic") {
          const nextSlug = value;
          if (!topicBySlug.has(nextSlug)) throw new Error(`Unknown topic: ${nextSlug}`);
          window.location.assign(topicPath(nextSlug));
          return { slug: nextSlug, path: topicPath(nextSlug) };
        }
        if (action === "selectPath") setPathFilter(value);
        else if (action === "selectCompany") setCompanyFilter(value);
        else if (action === "selectDimension") setDimensionFilter(value);
        else if (action === "expandEvidence") {
          const target = payload as { companyID?: unknown; dimensionID?: unknown } | null;
          const companyID = String(target?.companyID ?? "");
          const dimensionID = String(target?.dimensionID ?? "");
          setOpenEvidence(companyID && dimensionID ? `${companyID}:${dimensionID}` : "");
        } else if (action !== "state") throw new Error(`Unknown topic action: ${action}`);
        await new Promise((resolve) => window.setTimeout(resolve, 30));
        return snapshot();
      }
    };
    automationRef.current = controller;
    return () => { if (automationRef.current === controller) automationRef.current = null; };
  }, [automationRef, companyFilter, definition, dimensionFilter, openEvidence, pathFilter, topic.data, visibleCompanyIDs]);

  if (topic.isLoading) return <div className="omac-topic"><TopicHeader /><main className="topic-error"><p>Loading</p><h1>{definition.title}</h1></main></div>;
  if (topic.error || !topic.data) return <div className="omac-topic"><TopicHeader /><main className="topic-error"><p>Topic unavailable</p><h1>专题引用未通过发布校验</h1><a href="/topics">返回研究专题</a></main></div>;

  const resolved = topic.data;
  return (
    <div className="omac-topic">
      <TopicHeader />
      <main>
        <section className="topic-hero" aria-labelledby="topic-title">
          <div className="topic-hero-copy">
            <p className="topic-kicker">Research topic · {definition.updatedAt}</p>
            <h1 id="topic-title">{definition.title}</h1>
            <p className="topic-introduction">{definition.introduction}</p>
            <p className="topic-promise">{definition.promise}</p>
            <div className="topic-featured-links" aria-label="首要研究入口">
              {definition.featuredObjectIDs.map((id) => {
                const object = objectFor(resolved, id);
                return <a href={object.canonical} key={id}>{object.title}<ArrowRight aria-hidden="true" /></a>;
              })}
            </div>
          </div>
          <aside className="topic-judgments" aria-labelledby="topic-judgments-title">
            <span id="topic-judgments-title">四个判断</span>
            <ol>{definition.judgments.map((judgment) => <li key={judgment}>{judgment}</li>)}</ol>
          </aside>
          <nav className="topic-path-jump" aria-label="三条研究路径">
            {definition.paths.map((path, index) => (
              <a href={`#path-${path.id}`} key={path.id}><span>0{index + 1}</span><strong>{path.title}</strong><small>{path.companyIDs.map((id) => objectFor(resolved, id).title).join(" · ")}</small></a>
            ))}
          </nav>
        </section>

        <section className="topic-section topic-framework" id="framework" aria-labelledby="framework-title">
          <div className="topic-section-heading"><p className="topic-kicker">Comparison protocol</p><h2 id="framework-title">控制面管什么</h2><p>八个维度保持分离。A、B、C 是专题编辑等级，不覆盖 source 的 S1–S4，也不会汇总为排名。</p></div>
          <div className="topic-grade-legend" aria-label="专题证据等级">
            <div><span className="topic-grade is-a">A</span><p>直接的可复现运行、公开经营数据或客户侧证据。</p></div>
            <div><span className="topic-grade is-b">B</span><p>官方产品、文档或供应商案例证明设计与公开能力。</p></div>
            <div><span className="topic-grade is-c">C</span><p>营销主张、弱样本、冲突口径或当前证据不足。</p></div>
          </div>
          <div className="topic-dimensions">
            {definition.dimensions.map((dimension, index) => <article key={dimension.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{dimension.label}</h3><p>{dimension.question}</p></article>)}
          </div>
        </section>

        <section className="topic-section topic-paths" aria-labelledby="paths-title">
          <div className="topic-section-heading"><p className="topic-kicker">Three paths</p><h2 id="paths-title">同一问题，三种进入方式</h2></div>
          {definition.paths.map((path, index) => (
            <article id={`path-${path.id}`} key={path.id}>
              <span>0{index + 1}</span>
              <div><h3>{path.title}</h3><p>{path.description}</p></div>
              <ul>{path.companyIDs.map((id) => { const object = objectFor(resolved, id); return <li key={id}><a href={object.canonical}>{object.title}</a></li>; })}</ul>
            </article>
          ))}
        </section>

        <section className="topic-section topic-matrix" aria-labelledby="matrix-title">
          <div className="topic-section-heading is-row"><div><p className="topic-kicker">Evidence matrix</p><h2 id="matrix-title">比较矩阵</h2><p>默认按路径分组。筛选只改变阅读视图，不创建新的可索引页面。</p></div><a href="#method">等级方法 <ArrowRight aria-hidden="true" /></a></div>
          <div className="topic-filters" aria-label="比较矩阵筛选">
            <label>路径<select value={pathFilter} onChange={(event) => { setPathFilter(event.target.value); setCompanyFilter(""); }}><option value="">全部路径</option>{definition.paths.map((path) => <option key={path.id} value={path.id}>{path.title}</option>)}</select></label>
            <label>公司<select value={companyFilter} onChange={(event) => setCompanyFilter(event.target.value)}><option value="">全部公司</option>{definition.companies.filter((company) => !pathFilter || company.pathID === pathFilter).map((company) => <option key={company.id} value={company.id}>{objectFor(resolved, company.id).title}</option>)}</select></label>
            <label>维度<select value={dimensionFilter} onChange={(event) => setDimensionFilter(event.target.value)}><option value="">全部维度</option>{definition.dimensions.map((dimension) => <option key={dimension.id} value={dimension.id}>{dimension.label}</option>)}</select></label>
            {(pathFilter || companyFilter || dimensionFilter) && <Button variant="outline" type="button" onClick={() => { setPathFilter(""); setCompanyFilter(""); setDimensionFilter(""); }}>清除筛选</Button>}
          </div>
          <TopicMatrix topic={resolved} pathFilter={pathFilter} companyFilter={companyFilter} dimensionFilter={dimensionFilter} openEvidence={openEvidence} onEvidence={setOpenEvidence} />
        </section>

        <section className="topic-section topic-deep-reads" aria-labelledby="deep-title">
          <div className="topic-section-heading"><p className="topic-kicker">Read by path</p><h2 id="deep-title">沿路径深读，而不是找总冠军</h2></div>
          {definition.paths.map((path) => (
            <article key={path.id}>
              <header><span>{path.title}</span><p>{path.description}</p></header>
              <div>
                {path.companyIDs.map((id) => {
                  const company = definition.companies.find((item) => item.id === id)!;
                  const object = objectFor(resolved, id);
                  return <section key={id}><h3><a href={object.canonical}>{object.title}</a></h3><p>{company.dimensions.control_objects.summary}</p><p><strong>最强证据：</strong>{company.dimensions.adoption.summary}</p><p className="topic-boundary"><strong>仍需追问：</strong>{company.dimensions.adoption.boundary}</p></section>;
                })}
              </div>
            </article>
          ))}
        </section>

        <section className="topic-section topic-boundaries" aria-labelledby="boundaries-title">
          <div className="topic-section-heading"><p className="topic-kicker">Boundary references</p><h2 id="boundaries-title">什么不应被混作同一控制面</h2></div>
          <div>{definition.boundaryReferences.map((reference, index) => { const object = objectFor(resolved, reference.id); return <article key={reference.id}><span>0{index + 1}</span><h3><a href={object.canonical}>{object.title}<ExternalLink aria-hidden="true" /></a></h3><p>{reference.summary}</p></article>; })}</div>
        </section>

        <section className="topic-section topic-selection" aria-labelledby="selection-title">
          <div className="topic-section-heading"><p className="topic-kicker">Decision guide</p><h2 id="selection-title">如何选择</h2></div>
          <ol>{definition.selectionGuidance.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>

        <section className="topic-section topic-method" id="method" aria-labelledby="method-title">
          <div><p className="topic-kicker">Method</p><h2 id="method-title">等级表达证据边界，不是产品分数</h2></div>
          <div><p>A、B、C 是本专题的编辑等级，用来回答当前维度有何种公开证据。它不会覆盖来源对象的 S1–S4，也不会改变 source 的 quality、processing 或索引资格。</p><p>页面最后更新于 <time dateTime={definition.updatedAt}>{definition.updatedAt}</time>。研究结论会随新证据修订，不构成产品背书或投资建议。</p><a href={objectFor(resolved, definition.methodID).canonical}>查看研究方法 <ArrowRight aria-hidden="true" /></a></div>
        </section>
      </main>
      <footer className="topic-footer"><a href="/">Oh My AI Company</a><span>公开研究 vault · 证据与判断分离</span><a href="/topics">全部专题</a></footer>
    </div>
  );
}

type EssayEvidenceProps = {
  topic: ResolvedTopic;
  ids: string[];
  panelKey: string;
  openEvidence: string;
  onEvidence: (key: string) => void;
};

function EssayEvidence({ topic, ids, panelKey, openEvidence, onEvidence }: EssayEvidenceProps) {
  if (ids.length === 0) return null;
  const expanded = openEvidence === panelKey;
  return (
    <div className="essay-evidence">
      <button type="button" aria-expanded={expanded} onClick={() => onEvidence(expanded ? "" : panelKey)}>
        {ids.length} 条证据 <ChevronDown aria-hidden="true" />
      </button>
      {expanded && (
        <ul>
          {ids.map((id) => {
            const evidence = objectFor(topic, id);
            return <li key={id}><a href={evidence.canonical}>{evidence.title}</a><span>{evidence.indexable ? "可索引证据页" : "公开可读 · noindex"}</span></li>;
          })}
        </ul>
      )}
    </div>
  );
}

type EssayBlockViewProps = {
  block: EssayBlock;
  blockKey: string;
  topic: ResolvedTopic;
  openEvidence: string;
  activeAnchor: string;
  onEvidence: (key: string) => void;
  onAnchor: (id: string) => void;
};

function EssayBlockView({ block, blockKey, topic, openEvidence, activeAnchor, onEvidence, onAnchor }: EssayBlockViewProps) {
  if (block.type === "prose") {
    return (
      <section className="essay-prose">
        {block.title && <h3>{block.title}</h3>}
        {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {block.objectIDs && block.objectIDs.length > 0 && (
          <div className="essay-object-links">{block.objectIDs.map((id) => { const object = objectFor(topic, id); return <a href={object.canonical} key={id}>{object.title}<ArrowRight aria-hidden="true" /></a>; })}</div>
        )}
        <EssayEvidence topic={topic} ids={block.evidenceIDs ?? []} panelKey={`${blockKey}:evidence`} openEvidence={openEvidence} onEvidence={onEvidence} />
      </section>
    );
  }

  if (block.type === "anchor-comparison") {
    return (
      <section className="essay-anchor-comparison" aria-labelledby={`${blockKey}-title`}>
        <h3 id={`${blockKey}-title`}>{block.title}</h3>
        <div className="essay-anchor-grid">
          {block.anchors.map((anchor, index) => {
            const object = objectFor(topic, anchor.id);
            return (
              <article key={anchor.id} className={activeAnchor === anchor.id ? "is-active" : ""}>
                <span>锚点 0{index + 1}</span>
                <h4><a href={object.canonical} onClick={() => onAnchor(anchor.id)}>{anchor.title}<ExternalLink aria-hidden="true" /></a></h4>
                {anchor.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <EssayEvidence topic={topic} ids={anchor.evidenceIDs} panelKey={`${blockKey}:${anchor.id}`} openEvidence={openEvidence} onEvidence={onEvidence} />
              </article>
            );
          })}
        </div>
        <div className="essay-synthesis"><span>这组对照说明什么</span>{block.synthesis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
    );
  }

  if (block.type === "supporting-cases") {
    return (
      <section className="essay-supporting" aria-labelledby={`${blockKey}-title`}>
        <h3 id={`${blockKey}-title`}>{block.title}</h3>
        <div>{block.cases.map((item) => { const object = objectFor(topic, item.id); return <article key={item.id}><h4><a href={object.canonical}>{object.title}<ArrowRight aria-hidden="true" /></a></h4><p>{item.role}</p></article>; })}</div>
      </section>
    );
  }

  if (block.type === "evidence-callout") {
    return (
      <aside className="essay-callout" aria-labelledby={`${blockKey}-title`}>
        <span>Evidence boundary</span>
        <h3 id={`${blockKey}-title`}>{block.title}</h3>
        {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <EssayEvidence topic={topic} ids={block.evidenceIDs ?? []} panelKey={`${blockKey}:evidence`} openEvidence={openEvidence} onEvidence={onEvidence} />
      </aside>
    );
  }

  const child = topicBySlug.get(block.topicID);
  return (
    <aside className="essay-child-topic">
      <span>深入子专题</span>
      <div><h3><a href={topicPath(block.topicID)}>{block.title}</a></h3><p>{block.summary}</p></div>
      <a href={topicPath(block.topicID)} aria-label={`打开 ${child?.title ?? block.title}`}><ArrowRight aria-hidden="true" /></a>
    </aside>
  );
}

function EssayTopicDetail({ definition, automationRef }: { definition: EssayTopicDefinition; automationRef: SiteProjectPageProps["automationRef"] }) {
  const topic = useQuery({
    queryKey: ["omac-topic", definition.slug],
    queryFn: () => fetchJSON<ResolvedTopic>(`/api/topics/${encodeURIComponent(definition.slug)}`)
  });
  const [currentChapter, setCurrentChapter] = useState(definition.chapters[0]?.id ?? "");
  const [activeAnchor, setActiveAnchor] = useState("");
  const [openEvidence, setOpenEvidence] = useState("");

  useEffect(() => { document.title = definition.htmlTitle; }, [definition.htmlTitle]);

  useEffect(() => {
    const snapshot = () => ({
      page: "topic",
      format: definition.format,
      topicIDs: topicDefinitions.map((item) => item.id),
      topicID: definition.id,
      chapter: currentChapter || null,
      anchor: activeAnchor || null,
      evidencePanel: openEvidence || null,
      childTopicIDs: definition.childTopicIDs,
      visibleCompanyIDs: definition.coveredCompanyIDs,
      resolvedCanonicals: topic.data ? Object.fromEntries(Object.entries(topic.data.objects).map(([id, object]) => [id, object.canonical])) : {}
    });
    const controller = {
      state: snapshot,
      invoke: async (action: string, payload?: unknown) => {
        const target = payload as { id?: unknown; slug?: unknown; key?: unknown } | null;
        const value = typeof payload === "string" ? payload : String(target?.id ?? target?.slug ?? target?.key ?? "");
        if (action === "listTopics") return topicDefinitions.map(({ id, slug, title, format }) => ({ id, slug, title, format }));
        if (action === "openTopic" || action === "openChildTopic") {
          if (!topicBySlug.has(value)) throw new Error(`Unknown topic: ${value}`);
          window.location.assign(topicPath(value));
          return { slug: value, path: topicPath(value) };
        }
        if (action === "setChapter") {
          if (!definition.chapters.some((chapter) => chapter.id === value)) throw new Error(`Unknown chapter: ${value}`);
          setCurrentChapter(value);
          document.getElementById(`chapter-${value}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (action === "selectAnchor") {
          setActiveAnchor(value);
        } else if (action === "expandEvidence") {
          setOpenEvidence(value);
        } else if (action !== "state") {
          throw new Error(`Unknown topic action: ${action}`);
        }
        await new Promise((resolve) => window.setTimeout(resolve, 30));
        return { ...snapshot(), chapter: action === "setChapter" ? value : currentChapter, anchor: action === "selectAnchor" ? value : activeAnchor, evidencePanel: action === "expandEvidence" ? value : openEvidence };
      }
    };
    automationRef.current = controller;
    return () => { if (automationRef.current === controller) automationRef.current = null; };
  }, [activeAnchor, automationRef, currentChapter, definition, openEvidence, topic.data]);

  if (topic.isLoading) return <div className="omac-topic"><TopicHeader /><main className="topic-error"><p>Loading</p><h1>{definition.title}</h1></main></div>;
  if (topic.error || !topic.data) return <div className="omac-topic"><TopicHeader /><main className="topic-error"><p>Topic unavailable</p><h1>专题引用未通过发布校验</h1><a href="/topics">返回研究专题</a></main></div>;

  const resolved = topic.data;
  return (
    <div className="omac-topic essay-topic">
      <TopicHeader />
      <main>
        <section className="essay-hero" aria-labelledby="essay-title">
          <p className="topic-kicker">Long-form research · {definition.updatedAt}</p>
          <h1 id="essay-title">{definition.title}</h1>
          <div className="essay-hero-grid">
            <div className="essay-introduction">{definition.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <aside><span>开篇判断</span><ol>{definition.theses.map((thesis) => <li key={thesis}>{thesis}</li>)}</ol></aside>
          </div>
          <p className="essay-promise">{definition.promise}</p>
          <nav className="essay-toc" aria-label="专题目录">
            {definition.chapters.map((chapter, index) => <a href={`#chapter-${chapter.id}`} key={chapter.id} onClick={() => setCurrentChapter(chapter.id)}><span>{index < 4 ? `0${index + 1}` : "结论"}</span><strong>{chapter.title}</strong></a>)}
          </nav>
        </section>

        <article className="essay-body">
          {definition.chapters.map((chapter, chapterIndex) => (
            <section className="essay-chapter" id={`chapter-${chapter.id}`} key={chapter.id} aria-labelledby={`chapter-${chapter.id}-title`}>
              <header>
                <span>{chapterIndex < 4 ? `0${chapterIndex + 1}` : "Cross-path"}</span>
                <div><p className="topic-kicker">{chapter.eyebrow}</p><h2 id={`chapter-${chapter.id}-title`}>{chapter.title}</h2><p>{chapter.summary}</p></div>
              </header>
              <div className="essay-chapter-content">
                {chapter.blocks.map((block, index) => <EssayBlockView key={`${chapter.id}-${index}`} block={block} blockKey={`${chapter.id}-${index}`} topic={resolved} openEvidence={openEvidence} activeAnchor={activeAnchor} onEvidence={setOpenEvidence} onAnchor={setActiveAnchor} />)}
              </div>
            </section>
          ))}
        </article>

        <section className="essay-boundaries" aria-labelledby="essay-boundaries-title">
          <header>
            <p className="topic-kicker">Bridge / boundary references</p>
            <h2 id="essay-boundaries-title">相关基础层与边界案例</h2>
            <p>这些公司帮助界定 runtime、身份、基础设施与垂直入口，但不进入本专题的主体 ItemList，也不承担同等深度判断。</p>
          </header>
          <div>
            {definition.bridgeReferences.map((reference) => {
              const object = objectFor(resolved, reference.id);
              return <article key={reference.id}><h3><a href={object.canonical}>{object.title}<ArrowRight aria-hidden="true" /></a></h3><p>{reference.summary}</p></article>;
            })}
          </div>
        </section>

        <section className="essay-conclusion" aria-labelledby="essay-conclusion-title">
          <p className="topic-kicker">Conclusion</p>
          <h2 id="essay-conclusion-title">{definition.conclusion.title}</h2>
          {definition.conclusion.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{definition.conclusion.closingQuestion}</blockquote>
        </section>
      </main>
      <footer className="topic-footer"><a href="/">Oh My AI Company</a><span>公开研究 vault · 证据与判断分离</span><a href="/topics">全部专题</a></footer>
    </div>
  );
}

export function TopicPage({ pathname, automationRef }: SiteProjectPageProps) {
  if (pathname === "/topics" || pathname === "/topics/") return <TopicCollection automationRef={automationRef} />;
  const definition = topicBySlug.get(topicSlugFromPath(pathname));
  if (!definition) return <div className="omac-topic"><TopicHeader /><main className="topic-error"><p>404</p><h1>专题不存在</h1><a href="/topics">返回研究专题</a></main></div>;
  return definition.format === "essay"
    ? <EssayTopicDetail definition={definition} automationRef={automationRef} />
    : <ComparisonTopicDetail definition={definition} automationRef={automationRef} />;
}
