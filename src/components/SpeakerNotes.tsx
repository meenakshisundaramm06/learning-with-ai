import { useEffect, useRef, useState } from "react";
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
  const notesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    notesRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    if (!running) return undefined;
    const interval = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running]);

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
        <span id="script-title">VERBATIM SCRIPT · READ NATURALLY</span>
        <ol>
          {chapter.speakerNotes.map((note) => (
            <li key={note.text} data-kind={note.kind}>
              <span>{note.kind === "say" ? "SAY" : "DO"}</span>
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
