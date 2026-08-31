import { describe, expect, it } from "vitest";
import { chapters, evidenceCards, threadEdges } from "./chapters";

describe("presentation content", () => {
  it("fills the promised 45-minute session", () => {
    const duration = chapters.reduce((total, chapter) => total + chapter.durationMinutes, 0);
    expect(duration).toBe(45);
  });

  it("has one unique focus card for every case", () => {
    const cardIds = new Set(evidenceCards.map((card) => card.id));
    expect(cardIds.size).toBe(evidenceCards.length);

    chapters.forEach((chapter, index) => {
      expect(cardIds.has(chapter.camera.focusCardId)).toBe(true);
      expect(chapter.speakerNotes.length).toBeGreaterThanOrEqual(4);
      expect(chapter.caseNumber).toBe(`CASE ${(index + 1).toString().padStart(2, "0")}`);
    });
  });

  it("keeps card and thread references inside the board model", () => {
    const cardIds = new Set(evidenceCards.map((card) => card.id));

    evidenceCards.forEach((card) => {
      expect(card.caseIndex).toBeGreaterThanOrEqual(0);
      expect(card.caseIndex).toBeLessThan(chapters.length);
      expect(card.width).toBeGreaterThan(0);
      expect(card.height).toBeGreaterThan(0);
    });

    threadEdges.forEach((edge) => {
      expect(cardIds.has(edge.from)).toBe(true);
      expect(cardIds.has(edge.to)).toBe(true);
      expect(edge.from).not.toBe(edge.to);
    });
  });

  it("has at least one visible artifact in each case", () => {
    const representedCases = new Set(evidenceCards.map((card) => card.caseIndex));
    chapters.forEach((_, index) => expect(representedCases.has(index)).toBe(true));
  });
});
