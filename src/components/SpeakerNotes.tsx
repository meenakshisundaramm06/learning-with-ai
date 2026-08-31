import { useCallback, useEffect, useRef, useState } from "react";
import { formatElapsed } from "../lib/presentation";
import type { Chapter } from "../types";

export type SpeakerNotesProps = {
  chapter: Chapter;
  nextChapter: Chapter | null;
  index: number;
  count: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function SpeakerNotes({
  chapter,
  nextChapter,
  index,
  count,
  onPrevious,
  onNext,
}: SpeakerNotesProps) {
  const caseCount = count - 1;
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeNoteIndex, setActiveNoteIndex] = useState(0);
  const notesRef = useRef<HTMLElement>(null);
  const noteRefs = useRef<Array<HTMLLIElement | null>>([]);

  const focusNote = useCallback(
    (nextIndex: number) => {
      const lastIndex = chapter.speakerNotes.length - 1;
      const clampedIndex = Math.min(Math.max(nextIndex, 0), lastIndex);
      setActiveNoteIndex(clampedIndex);
      window.requestAnimationFrame(() => {
        noteRefs.current[clampedIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    },
    [chapter.speakerNotes.length],
  );

  useEffect(() => {
    noteRefs.current = [];
    notesRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    if (!running) return undefined;
    const interval = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const handleReadingKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          focusNote(activeNoteIndex + 1);
          break;
        case "ArrowUp":
          event.preventDefault();
          focusNote(activeNoteIndex - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleReadingKey);
    return () => window.removeEventListener("keydown", handleReadingKey);
  }, [activeNoteIndex, focusNote]);

  return (
    <aside className="speaker-notes" ref={notesRef} aria-label="Speaker notes">
      <header className="notes-header">
        <div>
          <span>
            {index === 0
              ? chapter.caseNumber
              : `${chapter.caseNumber} / ${caseCount.toString().padStart(2, "0")}`}
          </span>
          <h1>{chapter.title}</h1>
          <p>
            {chapter.timeRange}
            {chapter.durationMinutes > 0 ? ` · ${chapter.durationMinutes} min` : null}
          </p>
        </div>
        <div className="session-timer" aria-label={`Elapsed session time ${formatElapsed(elapsedSeconds)}`}>
          <span>SESSION</span>
          <strong>{formatElapsed(elapsedSeconds)}</strong>
          <div>
            <button type="button" onClick={() => setRunning((value) => !value)}>{running ? "Pause" : "Start"}</button>
            <button type="button" onClick={() => { setRunning(false); setElapsedSeconds(0); }}>Reset</button>
          </div>
        </div>
      </header>

      <section className="delivery-cue" aria-labelledby="delivery-cue-title">
        <span id="delivery-cue-title">DELIVERY CUE</span>
        <p>{chapter.deliveryCue}</p>
      </section>

      <section className="script-block" aria-labelledby="script-title">
        <div className="reading-toolbar">
          <div>
            <span id="script-title">READING FOCUS</span>
            <strong aria-live="polite">
              {activeNoteIndex + 1} / {chapter.speakerNotes.length}
            </strong>
            <small>Use ↑ ↓ to keep your place</small>
          </div>
          <div>
            <button
              type="button"
              aria-label="Focus previous script paragraph"
              disabled={activeNoteIndex === 0}
              onClick={() => focusNote(activeNoteIndex - 1)}
            >
              ↑
            </button>
            <button
              type="button"
              aria-label="Focus next script paragraph"
              disabled={activeNoteIndex === chapter.speakerNotes.length - 1}
              onClick={() => focusNote(activeNoteIndex + 1)}
            >
              ↓
            </button>
          </div>
        </div>
        <ol>
          {chapter.speakerNotes.map((note, noteIndex) => (
            <li
              key={note.text}
              ref={(element) => { noteRefs.current[noteIndex] = element; }}
              data-kind={note.kind}
              data-reading-state={
                noteIndex === activeNoteIndex
                  ? "active"
                  : noteIndex < activeNoteIndex
                    ? "complete"
                    : "upcoming"
              }
              aria-current={noteIndex === activeNoteIndex ? "step" : undefined}
            >
              <button
                type="button"
                className="script-marker"
                aria-label={`Focus ${note.kind === "say" ? "spoken paragraph" : "stage direction"} ${noteIndex + 1}`}
                onClick={() => focusNote(noteIndex)}
              >
                {note.kind === "say" ? "SAY" : "DO"}
              </button>
              <p>{note.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="next-reveal" aria-labelledby="next-reveal-title">
        <span id="next-reveal-title">TRANSITION</span>
        <p>{chapter.nextReveal}</p>
        {nextChapter ? <small>Next: {nextChapter.title}</small> : null}
      </section>

      <nav className="notes-nav" aria-label="Speaker note navigation">
        <button type="button" onClick={onPrevious} disabled={index === 0}>← Previous</button>
        <span>{index === 0 ? "Overview" : `${index} / ${caseCount}`}</span>
        <button type="button" onClick={onNext} disabled={index === count - 1}>Next →</button>
      </nav>
    </aside>
  );
}
