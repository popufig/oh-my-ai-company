import topicJSON from "./topics.json";
import {
  topicDimensionIDs,
  type ComparisonTopicDefinition,
  type EssayBlock,
  type EssayTopicDefinition,
  type TopicDefinition,
  type TopicDimensionID
} from "./topic-types";

function assertComparisonTopic(topic: ComparisonTopicDefinition) {
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

function blockEvidenceIDs(block: EssayBlock) {
  if (block.type === "anchor-comparison") return block.anchors.flatMap((anchor) => anchor.evidenceIDs);
  if (block.type === "prose" || block.type === "evidence-callout") return block.evidenceIDs ?? [];
  return [];
}

function assertEssayTopic(topic: EssayTopicDefinition) {
  if (topic.introduction.length === 0 || topic.theses.length === 0 || topic.chapters.length === 0) {
    throw new Error(`Essay topic ${topic.id} is missing its narrative structure`);
  }
  const chapterIDs = new Set<string>();
  for (const chapter of topic.chapters) {
    if (!chapter.id || chapterIDs.has(chapter.id) || !chapter.title || chapter.blocks.length === 0) {
      throw new Error(`Essay topic ${topic.id} has an invalid chapter ${chapter.id || "missing"}`);
    }
    chapterIDs.add(chapter.id);
    for (const block of chapter.blocks) {
      if (block.type === "anchor-comparison" && block.anchors.length !== 2) {
        throw new Error(`Essay topic ${topic.id} chapter ${chapter.id} must compare exactly two anchors`);
      }
      if (block.type === "child-topic" && !topic.childTopicIDs.includes(block.topicID)) {
        throw new Error(`Essay topic ${topic.id} references an undeclared child topic ${block.topicID}`);
      }
      if (blockEvidenceIDs(block).some((id) => !id.startsWith("source."))) {
        throw new Error(`Essay topic ${topic.id} evidence IDs must reference source objects`);
      }
    }
  }
}

function assertTopicDefinition(topic: TopicDefinition) {
  if (!topic.id || topic.id !== topic.slug) throw new Error(`Invalid topic identity: ${topic.id || "missing"}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(topic.updatedAt)) throw new Error(`Invalid topic updatedAt: ${topic.id}`);
  if (topic.format === "comparison") assertComparisonTopic(topic);
  else if (topic.format === "essay") assertEssayTopic(topic);
  else throw new Error(`Unknown topic format: ${(topic as { format?: string }).format || "missing"}`);
}

export const topicDefinitions = topicJSON as TopicDefinition[];

for (const topic of topicDefinitions) assertTopicDefinition(topic);

const duplicateIDs = topicDefinitions.filter((topic, index) => topicDefinitions.findIndex((candidate) => candidate.id === topic.id) !== index);
if (duplicateIDs.length > 0) throw new Error(`Duplicate topic IDs: ${duplicateIDs.map((topic) => topic.id).join(", ")}`);

export const topicBySlug = new Map(topicDefinitions.map((topic) => [topic.slug, topic]));

for (const topic of topicDefinitions) {
  if (topic.format !== "essay") continue;
  for (const childTopicID of topic.childTopicIDs) {
    if (!topicBySlug.has(childTopicID) || childTopicID === topic.id) {
      throw new Error(`Essay topic ${topic.id} has an invalid child topic ${childTopicID}`);
    }
  }
}

export function topicPath(slug: string) {
  return `/topics/${encodeURIComponent(slug)}`;
}

export function topicPrimaryCompanyIDs(topic: TopicDefinition) {
  return topic.format === "comparison" ? topic.companies.map((company) => company.id) : topic.coveredCompanyIDs;
}

export function topicReferencedIDs(topic: TopicDefinition) {
  if (topic.format === "comparison") {
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

  const ids = new Set<string>([
    ...topic.coveredCompanyIDs,
    ...topic.bridgeReferences.map((reference) => reference.id),
    ...topic.featuredObjectIDs
  ]);
  for (const chapter of topic.chapters) {
    for (const block of chapter.blocks) {
      if (block.type === "anchor-comparison") {
        for (const anchor of block.anchors) {
          ids.add(anchor.id);
          for (const evidenceID of anchor.evidenceIDs) ids.add(evidenceID);
        }
      } else if (block.type === "supporting-cases") {
        for (const item of block.cases) ids.add(item.id);
      } else if (block.type === "prose") {
        for (const id of block.objectIDs ?? []) ids.add(id);
        for (const evidenceID of block.evidenceIDs ?? []) ids.add(evidenceID);
      } else if (block.type === "evidence-callout") {
        for (const evidenceID of block.evidenceIDs ?? []) ids.add(evidenceID);
      }
    }
  }
  return [...ids].sort();
}

export function expectedTopicObjectType(topic: TopicDefinition, id: string) {
  if (id.startsWith("company.")) return "company";
  if (id.startsWith("concept.")) return "concept";
  if (id.startsWith("method.")) return "method";
  if (id.startsWith("source.")) return "source.item";
  if (id.startsWith("person.")) return "person";
  if (id.startsWith("investor.")) return "investor";
  if (id.startsWith("investment.")) return "investment";
  if (id.startsWith("traffic.")) return "traffic.snapshot";
  if (id.startsWith("touchpoint.")) return "touchpoint";
  return null;
}
