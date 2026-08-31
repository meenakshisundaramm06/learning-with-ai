export type ViewMode = "presentation" | "notes";

export type EvidenceVisualKind =
  | "material-pile"
  | "question"
  | "bloom-chart"
  | "tutor-contract"
  | "talent-stages"
  | "memory-bottleneck"
  | "staircase"
  | "knowledge-graph"
  | "direction-rule"
  | "practice-loop"
  | "react-example"
  | "activity-card"
  | "closing-rule";

export type EvidenceCardData = {
  id: string;
  caseIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  rotation: number;
  visual: EvidenceVisualKind;
  eyebrow: string;
  heading: string;
  ariaLabel: string;
};

export type ThreadEdge = {
  id: string;
  from: string;
  to: string;
  kind: "sequence" | "support";
};

export type CameraPose = {
  focusCardId: string | null;
  zoom: number;
};

export type Chapter = {
  id: string;
  caseNumber: string;
  title: string;
  timeRange: string;
  durationMinutes: number;
  evidenceCaseIndex: number | null;
  camera: CameraPose;
  boardLine: string;
  deliveryCue: string;
  speakerNotes: readonly string[];
  nextReveal: string;
};

export type StoredPresentationState = {
  version: 2;
  index: number;
  updatedAt: number;
};
