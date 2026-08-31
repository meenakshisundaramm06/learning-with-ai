import { useMemo } from "react";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../content/chapters";
import type { EvidenceCardData, ThreadEdge } from "../types";
import { getCardCenter } from "../lib/presentation";

export type ThreadMapProps = {
  cards: readonly EvidenceCardData[];
  edges: readonly ThreadEdge[];
  activeCaseIndex: number | null;
};

type ResolvedEdge = ThreadEdge & {
  fromCard: EvidenceCardData;
  toCard: EvidenceCardData;
  path: string;
};

function buildThreadPath(from: EvidenceCardData, to: EvidenceCardData): string {
  const start = getCardCenter(from);
  const end = getCardCenter(to);
  const midpointX = (start.x + end.x) / 2;
  const bend = Math.min(95, Math.abs(end.y - start.y) * 0.18 + 24);
  return `M ${start.x} ${start.y} C ${midpointX} ${start.y + bend}, ${midpointX} ${end.y - bend}, ${end.x} ${end.y}`;
}

export function ThreadMap({ cards, edges, activeCaseIndex }: ThreadMapProps) {
  const resolvedEdges = useMemo<readonly ResolvedEdge[]>(() => {
    const cardMap = new Map(cards.map((card) => [card.id, card]));

    return edges.map((edge) => {
      const fromCard = cardMap.get(edge.from);
      const toCard = cardMap.get(edge.to);
      if (!fromCard || !toCard) {
        throw new Error(`Thread ${edge.id} points to a missing evidence card.`);
      }
      return { ...edge, fromCard, toCard, path: buildThreadPath(fromCard, toCard) };
    });
  }, [cards, edges]);

  return (
    <svg
      className="thread-map"
      viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
      width={BOARD_WIDTH}
      height={BOARD_HEIGHT}
      aria-hidden="true"
    >
      <defs>
        <filter id="thread-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.52" />
        </filter>
      </defs>
      {resolvedEdges.map((edge) => {
        const reached =
          activeCaseIndex !== null && edge.toCard.caseIndex <= activeCaseIndex;
        const current = edge.toCard.caseIndex === activeCaseIndex;
        return (
          <g
            key={edge.id}
            className="thread"
            data-kind={edge.kind}
            data-reached={reached}
            data-current={current}
          >
            <path className="thread-shadow" d={edge.path} />
            <path className="thread-line" d={edge.path} pathLength="1" />
          </g>
        );
      })}
    </svg>
  );
}
