import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  evidenceCards,
  getChapter,
  getChapterIndexForEvidenceCase,
  threadEdges,
} from "../content/chapters";
import { getCardCenter } from "../lib/presentation";
import { EvidenceCard } from "./EvidenceCard";
import { ThreadMap } from "./ThreadMap";

export type EvidenceBoardProps = {
  activeIndex: number;
  onSelectCase: (index: number) => void;
  compact?: boolean;
};

type ViewportSize = { width: number; height: number };

const FOCUS_READABILITY_BOOST = 1.2;
const MAX_FOCUS_ZOOM = 1.8;

export function EvidenceBoard({
  activeIndex,
  onSelectCase,
  compact = false,
}: EvidenceBoardProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [viewport, setViewport] = useState<ViewportSize>({ width: 1280, height: 800 });
  const chapter = getChapter(activeIndex);
  const activeEvidenceCaseIndex = chapter.evidenceCaseIndex;
  const isOverview = activeEvidenceCaseIndex === null;

  const focusCard = useMemo(() => {
    if (chapter.camera.focusCardId === null) return null;
    const found = evidenceCards.find((card) => card.id === chapter.camera.focusCardId);
    if (!found) throw new Error(`Missing focus card: ${chapter.camera.focusCardId}`);
    return found;
  }, [chapter.camera.focusCardId]);

  useLayoutEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    const updateSize = () => {
      const bounds = scene.getBoundingClientRect();
      setViewport({ width: bounds.width, height: bounds.height });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const focus = focusCard
    ? getCardCenter(focusCard)
    : { x: BOARD_WIDTH / 2, y: BOARD_HEIGHT / 2 };
  const fitScale = Math.min(
    viewport.width / (BOARD_WIDTH + (compact ? 140 : 220)),
    viewport.height / (BOARD_HEIGHT + (compact ? 120 : 190)),
  );
  const showFullBoard = compact || isOverview;
  const focusZoom = Math.min(
    chapter.camera.zoom * FOCUS_READABILITY_BOOST,
    MAX_FOCUS_ZOOM,
  );
  const zoom = fitScale * (
    compact ? 0.9 : isOverview ? chapter.camera.zoom : focusZoom
  );
  const boardStyle = {
    "--board-width": `${BOARD_WIDTH}px`,
    "--board-height": `${BOARD_HEIGHT}px`,
    "--camera-x": `${showFullBoard ? 0 : BOARD_WIDTH / 2 - focus.x}px`,
    "--camera-y": `${showFullBoard ? 0 : BOARD_HEIGHT / 2 - focus.y}px`,
    "--camera-zoom": zoom,
  } as CSSProperties;

  const updateTilt = (x: number, y: number) => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--tilt-x", `${x.toFixed(2)}deg`);
    scene.style.setProperty("--tilt-y", `${y.toFixed(2)}deg`);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = window.requestAnimationFrame(() => {
      updateTilt(x * 1.35, y * -1.1);
    });
  };

  return (
    <div
      ref={sceneRef}
      className="evidence-scene"
      data-compact={compact}
      data-overview={isOverview}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => updateTilt(0, 0)}
      aria-label={`Evidence board. Current section: ${chapter.title}`}
    >
      <div className="room-glow" aria-hidden="true" />
      <div className="board-anchor" style={boardStyle}>
        <div className="board-camera">
          <div className="board-pan">
            <div className="board-surface">
              <div className="board-grain" aria-hidden="true" />
              <ThreadMap
                cards={evidenceCards}
                edges={threadEdges}
                activeCaseIndex={activeEvidenceCaseIndex}
              />
              {evidenceCards.map((card) => (
                <EvidenceCard
                  key={card.id}
                  card={card}
                  active={card.caseIndex === activeEvidenceCaseIndex}
                  visited={
                    activeEvidenceCaseIndex !== null &&
                    card.caseIndex <= activeEvidenceCaseIndex
                  }
                  onSelect={(evidenceCaseIndex) => {
                    onSelectCase(getChapterIndexForEvidenceCase(evidenceCaseIndex));
                  }}
                />
              ))}
              <div className="board-stamp" aria-hidden="true">
                LEARNING LAB<br /><span>EVIDENCE / 08</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {chapter.caseNumber}: {chapter.title}. {chapter.boardLine}
      </p>
    </div>
  );
}
