import topicJSON from "./topics.json";
import { topicDimensionIDs, type TopicDefinition, type TopicDimensionID } from "./topic-types";

function assertTopicDefinition(topic: TopicDefinition) {
  if (!topic.id || topic.id !== topic.slug) throw new Error(`Invalid topic identity: ${topic.id || "missing"}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(topic.updatedAt)) throw new Error(`Invalid topic updatedAt: ${topic.id}`);
  const dimensions = new Set(topic.dimensions.map((dimension) => dimension.id));
  if (dimensions.size !== topicDimensionIDs.length || topicDimensionIDs.some((id) => !dimensions.has(id))) {
    throw new Error(`Topic ${topic.id} must define every comparison dimension exactly once`);
  }
  const paths = new Map(topic.paths.map((path) => [path.id, path]));
  const companies = new Map(topic.companies.map((company) => [company.id, company]));
  for (const company of topic.companies) {
    if (!paths.has(company.pathID)) throw new Error(`Topic ${topic.id} company ${company.id} has an unknown path`);
    for (const dimensionID of topicDimensionIDs) {
      const cell = company.dimensions[dimensionID as TopicDimensionID];
      if (!cell?.grade || !cell.summary || !cell.boundary || cell.evidenceIDs.length === 0) {
        throw new Error(`Topic ${topic.id} company ${company.id} has an incomplete ${dimensionID} cell`);
      }
    }
  }
  for (const path of topic.paths) {
    for (const companyID of path.companyIDs) {
      const company = companies.get(companyID);
      if (!company || company.pathID !== path.id) throw new Error(`Topic ${topic.id} path ${path.id} has an invalid company ${companyID}`);
    }
  }
}

export const topicDefinitions = topicJSON as TopicDefinition[];

for (const topic of topicDefinitions) assertTopicDefinition(topic);

export const topicBySlug = new Map(topicDefinitions.map((topic) => [topic.slug, topic]));

export function topicPath(slug: string) {
  return `/topics/${encodeURIComponent(slug)}`;
}

export function topicReferencedIDs(topic: TopicDefinition) {
  const ids = new Set<string>([
    ...topic.companies.map((company) => company.id),
    ...topic.boundaryReferences.map((reference) => reference.id),
    ...topic.conceptIDs,
    topic.methodID,
    ...topic.featuredObjectIDs
  ]);
  for (const company of topic.companies) {
    for (const dimensionID of topicDimensionIDs) {
      for (const evidenceID of company.dimensions[dimensionID].evidenceIDs) ids.add(evidenceID);
    }
  }
  return [...ids].sort();
}

export function expectedTopicObjectType(topic: TopicDefinition, id: string) {
  if (topic.companies.some((company) => company.id === id) || topic.boundaryReferences.some((reference) => reference.id === id)) return "company";
  if (topic.conceptIDs.includes(id)) return "concept";
  if (topic.methodID === id) return "method";
  if (id.startsWith("source.")) return "source.item";
  return null;
}
