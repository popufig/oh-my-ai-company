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

export type TopicDefinition = {
  id: string;
  slug: string;
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
  introduction: string;
  judgments: string[];
  dimensions: TopicDimension[];
  paths: TopicPath[];
  companies: TopicCompany[];
  boundaryReferences: TopicBoundaryReference[];
  conceptIDs: string[];
  methodID: string;
  featuredObjectIDs: string[];
  selectionGuidance: string[];
  homepage: {
    zhLabel: string;
    zhTitle: string;
    zhSummary: string;
    enLabel: string;
  };
  ogAsset: string | null;
};

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
