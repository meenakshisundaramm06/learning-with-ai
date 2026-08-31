import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { chapters, getChapter } from "../content/chapters";
import { SpeakerNotes } from "./SpeakerNotes";

describe("SpeakerNotes", () => {
  it("keeps the verbatim script visible while focusing the first block", () => {
    const chapter = getChapter(1);

    const markup = renderToStaticMarkup(
      <SpeakerNotes
        chapter={chapter}
        nextChapter={getChapter(2)}
        index={1}
        count={chapters.length}
        onPrevious={() => undefined}
        onNext={() => undefined}
      />,
    );

    expect(markup).toContain("READING FOCUS");
    expect(markup).toContain("Use ↑ ↓ to keep your place");
    expect(markup.match(/data-reading-state="active"/g)).toHaveLength(1);

    chapter.speakerNotes.forEach((note) => {
      expect(markup).toContain(note.text.replaceAll("'", "&#x27;"));
    });
  });
});
