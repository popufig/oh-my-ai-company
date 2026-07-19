const base = new URL(process.argv[2] || "http://127.0.0.1:8788");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function read(path, options = {}) {
  const response = await fetch(new URL(path, base), options);
  return { response, body: await response.text() };
}

function includesAll(body, values, context) {
  for (const value of values) assert(body.includes(value), `${context}: missing ${JSON.stringify(value)}`);
}

function metaContent(body, name) {
  const match = body.match(new RegExp(`<meta name="${name}" content="([^"]*)">`, "i"));
  return match?.[1] || "";
}

const home = await read("/");
assert(home.response.status === 200, `home: expected 200, got ${home.response.status}`);
includesAll(home.body, [
  "<title>Oh My AI Company — Evidence-traceable AI company atlas</title>",
  '<meta name="google-site-verification" content="y58gkdLQcQrxFG3fj1Xyf6zhNXpxUNLQ-yYLa1ffPTk">',
  '<meta name="ahrefs-site-verification" content="7eac0aad1691283de095cbce82756447c55a0bb8368c45f0ec2b75c6dc99d99b">',
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
  '<link rel="canonical" href="https://companies.yan5xu.ai/">',
  'type="application/ld+json"',
  "Follow AI companies through evidence"
], "home");

const company = await read("/companies/kernel");
assert(company.response.status === 200, `company: expected 200, got ${company.response.status}`);
assert(company.response.headers.get("x-robots-tag") === "index, follow", "company: expected index header");
includesAll(company.body, [
  "<title>Kernel — AI company profile | OMAC</title>",
  '<link rel="canonical" href="https://companies.yan5xu.ai/companies/kernel">',
  '<html lang="zh-CN">',
  "Kernel 是为 AI agents 提供云浏览器",
  'href="/people/catherine-jue"',
  'src="/media/assets/kernel/wordmark.png"',
  '"@type":"Organization"'
], "company");
const companyDescription = metaContent(company.body, "description");
assert(companyDescription.length >= 30 && companyDescription.length <= 155, `company: unexpected meta description length ${companyDescription.length}`);
assert((company.body.match(/<h1\b/gi) || []).length === 1, "company: expected exactly one H1");
const companyObjectResponse = await read("/api/objects/company.kernel");
assert(companyObjectResponse.response.status === 200, `company API: expected 200, got ${companyObjectResponse.response.status}`);
const companyObject = JSON.parse(companyObjectResponse.body).object;
assert(companyDescription === companyObject.fields.one_liner, "company: Chinese meta description should preserve one_liner without a generic English suffix");

const lindy = await read("/companies/lindy");
assert(lindy.response.status === 200, `lindy: expected 200, got ${lindy.response.status}`);
const lindyDescription = metaContent(lindy.body, "description");
const lindyObjectResponse = await read("/api/objects/company.lindy");
assert(lindyObjectResponse.response.status === 200, `lindy API: expected 200, got ${lindyObjectResponse.response.status}`);
const lindyObject = JSON.parse(lindyObjectResponse.body).object;
assert(lindyDescription === lindyObject.fields.one_liner, "lindy: long Chinese one_liner should remain intact");

const pancake = await read("/companies/pancake");
assert(pancake.response.status === 200, `pancake: expected 200, got ${pancake.response.status}`);
includesAll(pancake.body, [
  '<meta property="og:image" content="https://companies.yan5xu.ai/media/assets/pancake/hero.png">',
  '<meta name="twitter:image" content="https://companies.yan5xu.ai/media/assets/pancake/hero.png">'
], "pancake vault-root image");

const kylon = await read("/companies/kylon");
assert(kylon.response.status === 200, `kylon: expected 200, got ${kylon.response.status}`);
includesAll(kylon.body, [
  '<meta property="og:image" content="https://companies.yan5xu.ai/media/assets/kylon/app-preview.png">',
  '<meta name="twitter:image" content="https://companies.yan5xu.ai/media/assets/kylon/app-preview.png">'
], "kylon vault-root image");

const investments = await read("/api/run", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ argv: ["query", "investment", "--where", "company = company.11x", "--limit", "100", "--json"] })
});
assert(investments.response.status === 200, `investment query: expected 200, got ${investments.response.status}`);
assert(JSON.parse(investments.body).data.rows.length === 15, "investment query: filtering must run before the result limit");

const investor = await read("/investors/accel");
assert(investor.response.status === 200, `investor: expected 200, got ${investor.response.status}`);
includesAll(investor.body, ["<title>Accel — AI investor profile | OMAC</title>", "Connected research"], "investor");

const collection = await read("/companies");
assert(collection.response.status === 200, `collection: expected 200, got ${collection.response.status}`);
includesAll(collection.body, ["<h1>Companies</h1>", 'href="/companies/kernel"', '"@type":"CollectionPage"'], "collection");

const topics = await read("/topics");
assert(topics.response.status === 200, `topics: expected 200, got ${topics.response.status}`);
assert(topics.response.headers.get("x-robots-tag") === "index, follow", "topics: expected index header");
includesAll(topics.body, [
  "<h1>研究专题</h1>",
  'href="/topics/ai-company-control-plane"',
  '"@type":"CollectionPage"',
  '<link rel="canonical" href="https://companies.yan5xu.ai/topics">'
], "topics");

const topic = await read("/topics/ai-company-control-plane");
assert(topic.response.status === 200, `topic: expected 200, got ${topic.response.status}`);
assert(topic.response.headers.get("x-robots-tag") === "index, follow", "topic: expected index header");
includesAll(topic.body, [
  "<title>AI 公司控制面：9 家产品如何管理 Agent 工作与治理 | OMAC</title>",
  '<link rel="canonical" href="https://companies.yan5xu.ai/topics/ai-company-control-plane">',
  '<html lang="zh-CN">',
  "AI 公司控制面：Agent 如何进入组织、运行工作并接受治理",
  'href="/companies/paperclip"',
  'href="/companies/relevance-ai"',
  'href="/sources/paperclip.readme"',
  '"@type":"WebPage"',
  '"@type":"BreadcrumbList"',
  '"@type":"ItemList"'
], "topic");
assert((topic.body.match(/<h1\b/gi) || []).length === 1, "topic: expected exactly one H1");
assert(!topic.body.includes('"@type":"Organization"'), "topic: must not describe the nine companies as one Organization");

const topicQuery = await read("/topics/ai-company-control-plane?path=enterprise-lifecycle");
assert(topicQuery.response.status === 200, "topic query: expected 200");
assert(topicQuery.response.headers.get("x-robots-tag") === "noindex, follow", "topic query: expected noindex header");
includesAll(topicQuery.body, ['<link rel="canonical" href="https://companies.yan5xu.ai/topics/ai-company-control-plane">'], "topic query");

const topicAPI = await read("/api/topics/ai-company-control-plane");
assert(topicAPI.response.status === 200, `topic API: expected 200, got ${topicAPI.response.status}`);
const topicPayload = JSON.parse(topicAPI.body);
assert(topicPayload.definition.companies.length === 9, "topic API: expected nine companies");
assert(Object.keys(topicPayload.objects).length >= 100, "topic API: expected resolved evidence objects");
assert(topicPayload.objects["company.paperclip"].canonical === "/companies/paperclip", "topic API: company canonical mismatch");

const missingTopic = await read("/topics/not-a-topic");
assert(missingTopic.response.status === 404, `missing topic: expected 404, got ${missingTopic.response.status}`);
assert(missingTopic.response.headers.get("x-robots-tag") === "noindex, follow", "missing topic: expected noindex header");

const graph = await read("/graph");
assert(graph.response.status === 200, `graph: expected 200, got ${graph.response.status}`);
includesAll(graph.body, ['<meta name="robots" content="noindex,follow">', "Interactive graph workspace"], "graph");

const weakSource = await read("/sources/agent-card.aisa-api-2026-07-08");
assert(weakSource.response.status === 200, `weak source: expected 200, got ${weakSource.response.status}`);
assert(weakSource.response.headers.get("x-robots-tag") === "noindex, follow", "weak source: expected noindex header");

const multiHeadingSource = await read("/sources/cyzone.accel-40-years-2023-05-28");
assert(multiHeadingSource.response.status === 200, `multi-heading source: expected 200, got ${multiHeadingSource.response.status}`);
assert((multiHeadingSource.body.match(/<h1\b/gi) || []).length === 1, "multi-heading source: expected exactly one H1");
const multiHeadingTitle = multiHeadingSource.body.match(/<title>([^<]+)<\/title>/i)?.[1] || "";
assert(multiHeadingTitle.length <= 60, `multi-heading source: unexpected title length ${multiHeadingTitle.length}`);

const missing = await read("/companies/definitely-not-an-object");
assert(missing.response.status === 404, `missing: expected 404, got ${missing.response.status}`);
includesAll(missing.body, ["Research object not found", '<meta name="robots" content="noindex,follow">'], "missing");

const sitemap = await read("/sitemap.xml");
assert(sitemap.response.status === 200, `sitemap: expected 200, got ${sitemap.response.status}`);
assert(sitemap.response.headers.get("content-type")?.includes("application/xml"), "sitemap: expected XML content type");
includesAll(sitemap.body, ["<sitemapindex", "/sitemaps/companies.xml", "/sitemaps/sources.xml", "/topics.xml"], "sitemap");

const topicsSitemap = await read("/topics.xml");
assert(topicsSitemap.response.status === 200, "topics sitemap: expected 200");
includesAll(topicsSitemap.body, ["<urlset", "https://companies.yan5xu.ai/topics/ai-company-control-plane", "<lastmod>2026-07-19</lastmod>"], "topics sitemap");

const companiesSitemap = await read("/sitemaps/companies.xml");
assert(companiesSitemap.response.status === 200, "company sitemap: expected 200");
includesAll(companiesSitemap.body, ["<urlset", "https://companies.yan5xu.ai/companies/kernel", "<lastmod>"], "company sitemap");

const robots = await read("/robots.txt");
assert(robots.response.status === 200, `robots: expected 200, got ${robots.response.status}`);
includesAll(robots.body, ["Disallow: /api/", "Sitemap: https://companies.yan5xu.ai/sitemap.xml"], "robots");

const indexNowKey = await read("/395a13fe1103f644f6ad99fd1623fe09.txt");
assert(indexNowKey.response.status === 200, `IndexNow key: expected 200, got ${indexNowKey.response.status}`);
assert(indexNowKey.body.trim() === "395a13fe1103f644f6ad99fd1623fe09", "IndexNow key: unexpected body");
assert(indexNowKey.response.headers.get("x-robots-tag") === "noindex, nofollow", "IndexNow key: expected noindex header");

const redirect = await fetch(new URL("/?view=detail&type=company&object=company.kernel", base), { redirect: "manual" });
assert(redirect.status === 301, `legacy redirect: expected 301, got ${redirect.status}`);
assert(redirect.headers.get("location") === new URL("/companies/kernel", base).toString(), `legacy redirect: unexpected location ${redirect.headers.get("location")}`);

const image = await fetch(new URL("/og-default.png", base));
assert(image.status === 200, `default image: expected 200, got ${image.status}`);
assert(image.headers.get("content-type") === "image/png", `default image: unexpected content type ${image.headers.get("content-type")}`);

const favicon = await fetch(new URL("/favicon.svg", base));
assert(favicon.status === 200, `favicon: expected 200, got ${favicon.status}`);
assert(favicon.headers.get("content-type")?.includes("image/svg+xml"), `favicon: unexpected content type ${favicon.headers.get("content-type")}`);

const legacyFavicon = await fetch(new URL("/favicon.ico", base), { redirect: "manual" });
assert(legacyFavicon.status === 301, `legacy favicon: expected 301, got ${legacyFavicon.status}`);
assert(legacyFavicon.headers.get("location") === new URL("/favicon.svg", base).toString(), "legacy favicon: unexpected location");

console.log(`SEO verification passed: ${base}`);
