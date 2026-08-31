import { describe, expect, it } from "vitest";
import {
  clampIndex,
  formatElapsed,
  isStoredPresentationState,
  parseStoredIndex,
} from "./presentation";

describe("presentation state", () => {
  it("clamps navigation to the available cases", () => {
    expect(clampIndex(-4, 9)).toBe(0);
    expect(clampIndex(3.9, 9)).toBe(3);
    expect(clampIndex(12, 9)).toBe(8);
    expect(clampIndex(1, 0)).toBe(0);
  });

  it("accepts only the versioned state shape", () => {
    expect(isStoredPresentationState({ version: 2, index: 3, updatedAt: 1 })).toBe(true);
    expect(isStoredPresentationState({ version: 1, index: 3, updatedAt: 1 })).toBe(false);
    expect(isStoredPresentationState({ version: 2, index: "3", updatedAt: 1 })).toBe(false);
    expect(isStoredPresentationState(null)).toBe(false);
  });

  it("fails closed for malformed storage and clamps valid values", () => {
    expect(parseStoredIndex("not-json", 9)).toBeNull();
    expect(parseStoredIndex('{"version":2,"index":99,"updatedAt":1}', 9)).toBe(8);
    expect(parseStoredIndex('{"__proto__":{},"version":2,"index":2,"updatedAt":1}', 9)).toBe(2);
    expect(parseStoredIndex('{"version":2,"index":2}', 9)).toBeNull();
  });

  it("formats the presenter timer", () => {
    expect(formatElapsed(0)).toBe("00:00");
    expect(formatElapsed(65)).toBe("01:05");
    expect(formatElapsed(-8)).toBe("00:00");
  });
});
