import type {
  EvidenceCardData,
  StoredPresentationState,
} from "../types";

export const PRESENTATION_STATE_KEY = "learning-evidence-board:v2";
export const PRESENTATION_CHANNEL = "learning-evidence-board";

export function clampIndex(index: number, chapterCount: number): number {
  if (chapterCount <= 0) return 0;
  return Math.min(Math.max(Math.trunc(index), 0), chapterCount - 1);
}

export function parseStoredIndex(
  value: string | null,
  chapterCount: number,
): number | null {
  if (value === null) return null;

  try {
    const candidate: unknown = JSON.parse(value);
    if (!isStoredPresentationState(candidate)) return null;
    return clampIndex(candidate.index, chapterCount);
  } catch {
    return null;
  }
}

export function isStoredPresentationState(
  value: unknown,
): value is StoredPresentationState {
  if (typeof value !== "object" || value === null) return false;
  if (Object.getPrototypeOf(value) !== Object.prototype) return false;

  const record = value as Record<string, unknown>;
  return (
    record.version === 2 &&
    typeof record.index === "number" &&
    Number.isInteger(record.index) &&
    typeof record.updatedAt === "number" &&
    Number.isFinite(record.updatedAt)
  );
}

export function createStoredState(index: number): StoredPresentationState {
  return { version: 2, index, updatedAt: Date.now() };
}

export function getCardCenter(card: EvidenceCardData): {
  x: number;
  y: number;
} {
  return {
    x: card.x + card.width / 2,
    y: card.y + card.height / 2,
  };
}

export function formatElapsed(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.trunc(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
