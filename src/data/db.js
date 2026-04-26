// src/data/db.js
// Casita v9 — Data access layer
// This is the ONLY place that touches localStorage

const PREFIX = "c9_";

export const db = {
  /**
   * Get a value from storage.
   * If the key does not exist or parsing fails,
   * returns the provided fallback.
   */
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  },

  /**
   * Save a value to storage.
   * Value is JSON-stringified automatically.
   */
  set(key, value) {
    try {
      localStorage.setItem(
        PREFIX + key,
        JSON.stringify(value)
      );
    } catch {
      // Fail silently — storage errors should not crash the app
    }
  },

  /**
   * Remove a key from storage entirely.
   */
  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch {
      // No-op
    }
  },
};
