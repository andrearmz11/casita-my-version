
// src/data/helpers.js
// Casita v9 — Pure helper functions
// No storage, no React, no UI

/* ───────────────── AssignedTo suggestions ───────────────── */

// NOTE:
// Moni ONLY appears for Poderosa tasks/call notes
// Manager can also assign Moni on Poderosa
export const clientSuggestions = (client, role) => {
  const s = ["Cindy"];
  if (
    client?.id === "poderosa" &&
    (role === "manager" || role === "moni")
  ) {
    s.push("Moni");
  }
  if (client?.poc && !s.includes(client.poc)) {
    s.push(client.poc);
  }
  return s;
};

/* ───────────────── Formatting helpers ───────────────── */

export const fmt = (d) => {
  if (!d) return "—";
  const [y, m, day] = d.split("-");
  return `${parseInt(m)}/${parseInt(day)}/${y}`;
};

/* ───────────────── Date utilities ───────────────── */

export const todayStr = () =>
  new Date().toISOString().slice(0, 10);

export const daysUntil = (ds) => {
  const d = new Date(ds + "T12:00:00");
  const n = new Date();
  n.setHours(0, 0, 0, 0);
  return Math.ceil((d - n) / 86400000);
};

export const getDIM = (y, m) =>
  new Date(y, m + 1, 0).getDate();

export const getFirst = (y, m) =>
  new Date(y, m, 1).getDay();

/*
  Poderosa post days logic:
  April (month index 3) = M/W/F
  May (4) = T/TH/S
  Alternates every month
*/
export const getPodDays = (y, m) => {
  const offset = ((m - 3) % 12 + 12) % 12;
  return offset % 2 === 0
    ? ["Monday", "Wednesday", "Friday"]
    : ["Tuesday", "Thursday", "Saturday"];
};

export const getWkDates = () => {
  const n = new Date();
  const dy = n.getDay();
  const mon = new Date(n);
  mon.setDate(n.getDate() - (dy === 0 ? 6 : dy - 1));

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    return d.toISOString().slice(0, 10);
  });
};

export const getUpcoming = (kds, days = 60) => {
  const t = todayStr();
  const end = new Date();
  end.setDate(end.getDate() + days);
  const yr = new Date().getFullYear();

  return kds
    .map((kd) => {
      const d1 = `${yr}-${String(kd.month).padStart(2, "0")}-${String(
        kd.day
      ).padStart(2, "0")}`;
      const d2 = `${yr + 1}-${String(kd.month).padStart(2, "0")}-${String(
        kd.day
      ).padStart(2, "0")}`;
      const date = d1 >= t ? d1 : d2;
      return { ...kd, dateStr: date };
    })
    .filter(
      (kd) =>
        kd.dateStr >= t &&
        new Date(kd.dateStr) <= end
    )
    .sort((a, b) =>
      a.dateStr.localeCompare(b.dateStr)
    );
};

/* ───────────────── Client type helpers ───────────────── */

export const isSocial = (c) =>
  c.clientType === "social";

export const isOwn = (c) =>
  c.clientType === "own";

export const isSponsor = (c) =>
  c.clientType === "sponsorship";
