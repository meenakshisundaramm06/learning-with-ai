import { describe, expect, it } from "vitest";
import {
  chapters,
  evidenceCards,
  getChapterIndexForEvidenceCase,
  threadEdges,
} from "./chapters";

describe("presentation content", () => {
  it("fills the promised 45-minute session", () => {
    const duration = chapters.reduce((total, chapter) => total + chapter.durationMinutes, 0);
    expect(duration).toBe(45);
  });

  it("starts with a full-board orientation before the eight cases", () => {
    const overview = chapters[0];
    expect(overview).toBeDefined();
    expect(overview?.caseNumber).toBe("BOARD 00");
    expect(overview?.evidenceCaseIndex).toBeNull();
    expect(overview?.camera.focusCardId).toBeNull();
    expect(overview?.durationMinutes).toBe(0);
  });

  it("has one focus card for every timed case", () => {
    const cardIds = new Set(evidenceCards.map((card) => card.id));
    expect(cardIds.size).toBe(evidenceCards.length);

    chapters.slice(1).forEach((chapter, caseIndex) => {
      expect(chapter.camera.focusCardId).not.toBeNull();
      expect(cardIds.has(chapter.camera.focusCardId ?? "")).toBe(true);
      expect(chapter.speakerNotes.length).toBeGreaterThanOrEqual(4);
      expect(chapter.evidenceCaseIndex).toBe(caseIndex);
      expect(chapter.caseNumber).toBe(`CASE ${(caseIndex + 1).toString().padStart(2, "0")}`);
      expect(getChapterIndexForEvidenceCase(caseIndex)).toBe(caseIndex + 1);
    });
  });

  it("keeps card and thread references inside the board model", () => {
    const cardIds = new Set(evidenceCards.map((card) => card.id));

    evidenceCards.forEach((card) => {
      expect(card.caseIndex).toBeGreaterThanOrEqual(0);
      expect(card.caseIndex).toBeLessThan(chapters.length - 1);
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
    chapters.slice(1).forEach((chapter) => {
      expect(chapter.evidenceCaseIndex).not.toBeNull();
      expect(representedCases.has(chapter.evidenceCaseIndex ?? -1)).toBe(true);
    });
  });
});
