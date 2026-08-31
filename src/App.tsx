import { chapters, getChapter } from "./content/chapters";
import { EvidenceBoard } from "./components/EvidenceBoard";
import { PresenterChrome } from "./components/PresenterChrome";
import { SpeakerNotes } from "./components/SpeakerNotes";
import { usePresentationController } from "./hooks/usePresentationController";
import type { ViewMode } from "./types";

export type AppProps = {
  mode: ViewMode;
};

export function App({ mode }: AppProps) {
  const controller = usePresentationController(chapters.length);
  const chapter = getChapter(controller.index);
  const nextChapter = chapters[controller.index + 1] ?? null;

  if (mode === "notes") {
    return (
      <main className="notes-layout">
        <a className="skip-link" href="#speaker-script">Skip to speaker script</a>
        <section className="notes-board" aria-label="Synced presentation preview">
          <EvidenceBoard
            activeIndex={controller.index}
            onSelectCase={controller.setIndex}
            compact
          />
          <div className="preview-label">
            <span>LIVE BOARD</span>
            <strong>{chapter.boardLine}</strong>
          </div>
        </section>
        <div id="speaker-script">
          <SpeakerNotes
            key={chapter.id}
            chapter={chapter}
            nextChapter={nextChapter}
            index={controller.index}
            count={chapters.length}
            onPrevious={controller.previous}
            onNext={controller.next}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="presentation-layout">
      <EvidenceBoard
        activeIndex={controller.index}
        onSelectCase={controller.setIndex}
      />
      <PresenterChrome
        chapter={chapter}
        index={controller.index}
        count={chapters.length}
        onSelect={controller.setIndex}
        onPrevious={controller.previous}
        onNext={controller.next}
      />
    </main>
  );
}
