export const topicDimensionIDs = [
  "control_objects",
  "context_state",
  "work_contract",
  "runtime",
  "governance",
  "economics",
  "feedback",
  "adoption"
] as const;

export type TopicDimensionID = typeof topicDimensionIDs[number];

export type TopicDimension = {
  id: TopicDimensionID;
  label: string;
  question: string;
};

export type TopicPath = {
  id: string;
  title: string;
  description: string;
  companyIDs: string[];
};

export type TopicCell = {
  grade: string;
  summary: string;
  evidenceIDs: string[];
  boundary: string;
  evidenceType?: string;
  breakdown?: Record<string, string>;
};

export type TopicCompany = {
  id: string;
  pathID: string;
  dimensions: Record<TopicDimensionID, TopicCell>;
};

export type TopicBoundaryReference = {
  id: string;
  summary: string;
};

type TopicBase = {
  id: string;
  slug: string;
  format: "comparison" | "essay";
  updatedAt: string;
  language: "zh-CN";
  title: string;
  htmlTitle: string;
  description: string;
  intent: {
    primary: string[];
    secondary: string[];
    excludes: string;
  };
  promise: string;
  featuredObjectIDs: string[];
  homepage: {
    zhLabel: string;
    zhTitle: string;
    zhSummary: string;
    enLabel: string;
  };
  ogAsset: string | null;
};

export type ComparisonTopicDefinition = TopicBase & {
  format: "comparison";
  introduction: string;
  judgments: string[];
  dimensions: TopicDimension[];
  paths: TopicPath[];
  companies: TopicCompany[];
  boundaryReferences: TopicBoundaryReference[];
  conceptIDs: string[];
  methodID: string;
  selectionGuidance: string[];
};

export type EssayAnchor = {
  id: string;
  title: string;
  paragraphs: string[];
  evidenceIDs: string[];
};

export type EssayBlock =
  | {
      type: "prose";
      title?: string;
      paragraphs: string[];
      objectIDs?: string[];
      evidenceIDs?: string[];
    }
  | {
      type: "anchor-comparison";
      title: string;
      anchors: [EssayAnchor, EssayAnchor];
      synthesis: string[];
    }
  | {
      type: "supporting-cases";
      title: string;
      cases: Array<{ id: string; role: string }>;
    }
  | {
      type: "evidence-callout";
      title: string;
      paragraphs: string[];
      evidenceIDs?: string[];
    }
  | {
      type: "child-topic";
      topicID: string;
      title: string;
      summary: string;
    };

export type EssayChapter = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  blocks: EssayBlock[];
};

export type EssayTopicDefinition = TopicBase & {
  format: "essay";
  introduction: string[];
  theses: string[];
  chapters: EssayChapter[];
  coveredCompanyIDs: string[];
  bridgeReferences: TopicBoundaryReference[];
  childTopicIDs: string[];
  conclusion: {
    title: string;
    paragraphs: string[];
    closingQuestion: string;
  };
};

export type TopicDefinition = ComparisonTopicDefinition | EssayTopicDefinition;

export type ResolvedTopicObject = {
  id: string;
  type: string;
  title: string;
  canonical: string;
  updatedAt: string;
  indexable: boolean;
};

export type ResolvedTopic = {
  definition: TopicDefinition;
  objects: Record<string, ResolvedTopicObject>;
};
