import { UNIT } from "./data";

const STORAGE_KEY = "modern-classroom-progress-block";

export const PROGRESS_BLOCK_CHANGE_EVENT = "progress-block-change";

function defaultBlockSectionId(): string {
  return "3.4";
}

export function getProgressBlockSectionId(): string {
  if (typeof window === "undefined") return defaultBlockSectionId();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && UNIT.sections.some((s) => s.id === raw)) return raw;
  } catch {
    /* ignore */
  }
  return defaultBlockSectionId();
}

export function getProgressBlockIndex(): number {
  const id = getProgressBlockSectionId();
  const idx = UNIT.sections.findIndex((s) => s.id === id);
  return idx >= 0 ? idx : UNIT.sections.length - 1;
}

export function isBeyondProgressBlock(sectionId: string): boolean {
  const idx = UNIT.sections.findIndex((s) => s.id === sectionId);
  if (idx < 0) return true;
  return idx > getProgressBlockIndex();
}

export function isProgressGateActive(): boolean {
  return getProgressBlockIndex() < UNIT.sections.length - 1;
}

export function setProgressBlockSectionId(sectionId: string): void {
  if (typeof window === "undefined") return;
  if (!UNIT.sections.some((s) => s.id === sectionId)) return;
  localStorage.setItem(STORAGE_KEY, sectionId);
  window.dispatchEvent(new CustomEvent(PROGRESS_BLOCK_CHANGE_EVENT));
}
