import type { SettingsData } from "../types/settings";
import { defaultSettings } from "../data/settings";

const STORAGE_KEY = "glassflow:settings";

export function loadSettings(): SettingsData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings;

    const parsed = JSON.parse(raw) as Partial<SettingsData>;
    // Merge with defaults so missing fields never crash the page
    return {
      profile: { ...defaultSettings.profile, ...parsed.profile },
      notifications: { ...defaultSettings.notifications, ...parsed.notifications },
    };
  } catch {
    return defaultSettings; // corrupted storage or storage blocked
  }
}

export function saveSettings(settings: SettingsData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // storage full or blocked: ignore, the page still works for this session
  }
}

export function clearSettings(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}