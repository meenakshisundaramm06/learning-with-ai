import { useCallback, useEffect, useRef, useState } from "react";
import {
  clampIndex,
  createStoredState,
  isStoredPresentationState,
  parseStoredIndex,
  PRESENTATION_CHANNEL,
  PRESENTATION_STATE_KEY,
} from "../lib/presentation";

type PresentationController = {
  index: number;
  setIndex: (index: number) => void;
  previous: () => void;
  next: () => void;
};

function getInitialIndex(chapterCount: number): number {
  if (typeof window === "undefined") return 0;
  return parseStoredIndex(
    window.localStorage.getItem(PRESENTATION_STATE_KEY),
    chapterCount,
  ) ?? 0;
}

export function usePresentationController(
  chapterCount: number,
): PresentationController {
  const [index, setIndexState] = useState(() => getInitialIndex(chapterCount));
  const channelRef = useRef<BroadcastChannel | null>(null);

  const setIndex = useCallback(
    (nextIndex: number) => {
      setIndexState(clampIndex(nextIndex, chapterCount));
    },
    [chapterCount],
  );

  const previous = useCallback(() => {
    setIndexState((current) => clampIndex(current - 1, chapterCount));
  }, [chapterCount]);

  const next = useCallback(() => {
    setIndexState((current) => clampIndex(current + 1, chapterCount));
  }, [chapterCount]);

  useEffect(() => {
    if (!("BroadcastChannel" in window)) return undefined;

    const channel = new BroadcastChannel(PRESENTATION_CHANNEL);
    channelRef.current = channel;
    channel.onmessage = (event: MessageEvent<unknown>) => {
      if (!isStoredPresentationState(event.data)) return;
      setIndexState(clampIndex(event.data.index, chapterCount));
    };

    return () => {
      channel.close();
      channelRef.current = null;
    };
  }, [chapterCount]);

  useEffect(() => {
    const state = createStoredState(index);
    window.localStorage.setItem(PRESENTATION_STATE_KEY, JSON.stringify(state));
    channelRef.current?.postMessage(state);
  }, [index]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== PRESENTATION_STATE_KEY) return;
      const storedIndex = parseStoredIndex(event.newValue, chapterCount);
      if (storedIndex !== null) setIndexState(storedIndex);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [chapterCount]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          event.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          previous();
          break;
        case "Home":
          event.preventDefault();
          setIndex(0);
          break;
        case "End":
          event.preventDefault();
          setIndex(chapterCount - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chapterCount, next, previous, setIndex]);

  return { index, setIndex, previous, next };
}
