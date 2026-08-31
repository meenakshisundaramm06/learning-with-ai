import type { CSSProperties, ReactNode } from "react";
import type { EvidenceCardData, EvidenceVisualKind } from "../types";

export type EvidenceCardProps = {
  card: EvidenceCardData;
  active: boolean;
  visited: boolean;
  onSelect: (caseIndex: number) => void;
};

function MaterialPileVisual(): ReactNode {
  return (
    <div className="material-pile">
      <div><span>Courses saved</span><strong>07</strong></div>
      <div><span>Videos saved</span><strong>34</strong></div>
      <div><span>Links bookmarked</span><strong>81</strong></div>
      <div className="capability-row"><span>New capability</span><strong>?</strong></div>
    </div>
  );
}

function QuestionVisual(): ReactNode {
  return (
    <div className="question-visual">
      <p>AI + internet</p>
      <span>give us more material</span>
      <div className="question-rule" />
      <strong>What turns it into capability?</strong>
    </div>
  );
}

function BloomChartVisual(): ReactNode {
  return (
    <div className="bloom-visual">
      <svg viewBox="0 0 560 230" aria-hidden="true">
        <path className="axis" d="M32 199H535M32 20V199" />
        <path className="curve conventional" d="M55 197C115 196 130 155 205 115C283 73 355 111 416 156C458 186 497 196 532 198" />
        <path className="curve mastery" d="M170 198C240 194 270 130 339 82C397 41 445 91 472 146C493 187 516 196 533 198" />
        <path className="curve tutor" d="M305 198C365 195 387 91 420 39C449 -5 483 50 496 105C512 170 521 194 534 198" />
        <text x="98" y="158">conventional</text>
        <text x="313" y="106">mastery</text>
        <text x="425" y="29">tutoring</text>
      </svg>
      <div className="chart-finding">
        <strong>98%</strong>
        <span>Bloom's reported comparison</span>
      </div>
      <p className="chart-caveat">A design question—not an AI promise.</p>
    </div>
  );
}

function TutorContractVisual(): ReactNode {
  const items = [
    "destination",
    "current ability",
    "missing prerequisite",
    "next task",
    "evidence in the attempt",
    "when to remove help",
  ];

  return (
    <ol className="contract-list">
      {items.map((item, index) => (
        <li key={item}><span>{index + 1}</span>{item}</li>
      ))}
    </ol>
  );
}

function TalentStagesVisual(): ReactNode {
  return (
    <div className="stage-strip">
      <div><b>Explore</b><span>interest + play</span><small>What is possible?</small></div>
      <div><b>Build</b><span>technique + practice</span><small>Can I do this well?</small></div>
      <div><b>Refine</b><span>judgment + style</span><small>What is my approach?</small></div>
    </div>
  );
}

function MemoryBottleneckVisual(): ReactNode {
  return (
    <div className="bottleneck-visual">
      <div className="new-pieces">
        {['syntax', 'props', 'state', 'events', 'a11y'].map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="funnel"><span>working<br />memory</span></div>
      <div className="familiar-patterns"><span>familiar patterns</span></div>
    </div>
  );
}

function StaircaseVisual(): ReactNode {
  return (
    <div className="staircase-visual" aria-hidden="true">
      <div className="giant-step"><span>overload</span></div>
      <div className="small-steps">
        <i /><i /><i /><i /><i />
      </div>
      <p>same destination</p>
    </div>
  );
}

function KnowledgeGraphVisual(): ReactNode {
  return (
    <div className="graph-visual">
      <svg viewBox="0 0 590 315" aria-hidden="true">
        <g className="graph-lines">
          <path d="M70 65L210 65L335 150" />
          <path d="M70 155L210 65" />
          <path d="M70 245L215 245L335 150" />
          <path d="M335 150L490 150" />
          <path d="M215 245L335 245L490 150" />
        </g>
        <g className="node can-do"><rect x="18" y="35" width="112" height="60" rx="4" /><text x="74" y="62">HTML forms</text><text x="74" y="80">CAN DO</text></g>
        <g className="node can-do"><rect x="18" y="125" width="112" height="60" rx="4" /><text x="74" y="152">JS arrays</text><text x="74" y="170">CAN DO</text></g>
        <g className="node can-do"><rect x="18" y="215" width="112" height="60" rx="4" /><text x="74" y="242">components</text><text x="74" y="260">CAN DO</text></g>
        <g className="node frontier"><rect x="160" y="35" width="112" height="60" rx="4" /><text x="216" y="62">props</text><text x="216" y="80">FRONTIER</text></g>
        <g className="node locked"><rect x="280" y="120" width="112" height="60" rx="4" /><text x="336" y="147">filter logic</text><text x="336" y="165">LOCKED</text></g>
        <g className="node locked"><rect x="435" y="120" width="140" height="60" rx="4" /><text x="505" y="146">accessible panel</text><text x="505" y="165">DESTINATION</text></g>
        <g className="node can-do"><rect x="160" y="215" width="112" height="60" rx="4" /><text x="216" y="242">labels</text><text x="216" y="260">CAN DO</text></g>
        <g className="node locked"><rect x="280" y="215" width="112" height="60" rx="4" /><text x="336" y="242">state</text><text x="336" y="260">LOCKED</text></g>
      </svg>
      <p><span>frontier</span> = first skill whose prerequisites you can prove</p>
    </div>
  );
}

function DirectionRuleVisual(): ReactNode {
  return (
    <div className="direction-visual">
      <div><b>PLAN</b><span>outcome</span><i>←</i><span>prerequisites</span></div>
      <div><b>LEARN</b><span>first missing step</span><i>→</i><span>outcome</span></div>
    </div>
  );
}

function PracticeLoopVisual(): ReactNode {
  const items = ["minimum explanation", "attempt", "targeted feedback", "correct", "fresh proof", "return later"];
  return (
    <div className="practice-visual">
      {items.map((item, index) => (
        <div key={item} className="practice-step">
          <span>{(index + 1).toString().padStart(2, '0')}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

function ReactExampleVisual(): ReactNode {
  return (
    <div className="react-example">
      <div><span>Destination</span><b>Accessible filter panel</b></div>
      <div><span>Frontier</span><b>Render a list from data</b></div>
      <div><span>Attempt</span><b>New array, no copied answer</b></div>
      <div><span>Proof</span><b>Fresh categories from memory</b></div>
    </div>
  );
}

function ActivityCardVisual(): ReactNode {
  return (
    <div className="activity-visual">
      <div><span>01–02</span><b>Target + evidence</b></div>
      <div><span>03–06</span><b>Draft 6–8 nodes</b></div>
      <div><span>07–09</span><b>Correct the map</b></div>
      <div><span>10–12</span><b>Write the proof task</b></div>
      <p>My frontier skill is ___<br />My first proof task is ___</p>
    </div>
  );
}

function ClosingRuleVisual(): ReactNode {
  return (
    <div className="closing-visual">
      <strong>MAP</strong><i>→</i><strong>SHRINK</strong><i>→</i><strong>PRACTISE</strong><i>→</i><strong>RETURN</strong>
      <p>AI + internet give us material.<br />The loop turns it into capability.</p>
    </div>
  );
}

function renderEvidenceVisual(kind: EvidenceVisualKind): ReactNode {
  switch (kind) {
    case "material-pile": return <MaterialPileVisual />;
    case "question": return <QuestionVisual />;
    case "bloom-chart": return <BloomChartVisual />;
    case "tutor-contract": return <TutorContractVisual />;
    case "talent-stages": return <TalentStagesVisual />;
    case "memory-bottleneck": return <MemoryBottleneckVisual />;
    case "staircase": return <StaircaseVisual />;
    case "knowledge-graph": return <KnowledgeGraphVisual />;
    case "direction-rule": return <DirectionRuleVisual />;
    case "practice-loop": return <PracticeLoopVisual />;
    case "react-example": return <ReactExampleVisual />;
    case "activity-card": return <ActivityCardVisual />;
    case "closing-rule": return <ClosingRuleVisual />;
    default: {
      const exhaustive: never = kind;
      throw new Error(`Unhandled evidence visual: ${exhaustive}`);
    }
  }
}

export function EvidenceCard({ card, active, visited, onSelect }: EvidenceCardProps) {
  const style = {
    "--card-x": `${card.x}px`,
    "--card-y": `${card.y}px`,
    "--card-width": `${card.width}px`,
    "--card-height": `${card.height}px`,
    "--card-depth": `${card.depth}px`,
    "--card-rotation": `${card.rotation}deg`,
  } as CSSProperties;

  return (
    <article
      className="evidence-card"
      style={style}
      data-active={active}
      data-visited={visited}
    >
      <button
        type="button"
        className="card-hit-target"
        aria-pressed={active}
        aria-label={card.ariaLabel}
        onClick={() => onSelect(card.caseIndex)}
      />
      <span className="pin" aria-hidden="true" />
      <span className="evidence-eyebrow">{card.eyebrow}</span>
      <span className="evidence-heading">{card.heading}</span>
      <div className="evidence-content">{renderEvidenceVisual(card.visual)}</div>
    </article>
  );
}
