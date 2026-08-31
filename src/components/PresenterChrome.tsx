import { useCallback, useEffect } from "react";
import type { Chapter } from "../types";

export type PresenterChromeProps = {
  chapter: Chapter;
  index: number;
  count: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function PresenterChrome({
  chapter,
  index,
  count,
  onSelect,
  onPrevious,
  onNext,
}: PresenterChromeProps) {
  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    const handleFullscreenKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "f") return;
      void toggleFullscreen();
    };
    window.addEventListener("keydown", handleFullscreenKey);
    return () => window.removeEventListener("keydown", handleFullscreenKey);
  }, [toggleFullscreen]);

  return (
    <>
      <header className="presenter-header">
        <div>
          <span>{chapter.caseNumber}</span>
          <h1>{chapter.title}</h1>
        </div>
        <div className="timecode">
          <span>SESSION WINDOW</span>
          <strong>{chapter.timeRange}</strong>
        </div>
      </header>

      <p className="chapter-line">{chapter.boardLine}</p>

      <nav className="case-rail" aria-label="Presentation sections">
        {Array.from({ length: count }, (_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            className="case-dot"
            data-active={dotIndex === index}
            data-visited={dotIndex <= index}
            aria-label={`Go to case ${dotIndex + 1}`}
            aria-current={dotIndex === index ? "step" : undefined}
            onClick={() => onSelect(dotIndex)}
          >
            <span>{(dotIndex + 1).toString().padStart(2, "0")}</span>
          </button>
        ))}
      </nav>

      <div className="presenter-controls" aria-label="Presentation controls">
        <button type="button" onClick={onPrevious} disabled={index === 0} aria-label="Previous case">
          <span aria-hidden="true">←</span>
        </button>
        <span className="control-hint">ARROWS / SPACE TO NAVIGATE</span>
        <button type="button" onClick={() => void toggleFullscreen()} aria-label="Toggle fullscreen">
          <span aria-hidden="true">⛶</span>
        </button>
        <button type="button" onClick={onNext} disabled={index === count - 1} aria-label="Next case">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </>
  );
}
