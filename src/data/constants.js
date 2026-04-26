
// src/data/constants.js
// Casita v9 — Static constants and configuration
// No defaults, no helpers, no storage logic

// Brand colors
export const B = {
  pink: "#B5195F",
  fuchsia: "#8E1048",
  gold: "#C9A96E",
  gray: "#F7F7F7",
  pl: "#FFF0F5",
  pb: "#F9A8C9",
};

// Date / calendar constants
export const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export const DAY_MAP = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
};

// Post & task statuses
export const POST_STATUSES = [
  "Not Started",
  "In Progress",
  "Drafted",
  "In Review",
  "Scheduled",
  "Posted",
  "Needs Revision"
];

export const TASK_STATUSES = ["Not Started","In Progress","Complete"];
export const TASK_PRIORITIES = ["Low","Normal","High","Urgent"];

// Status colors
export const SC = {
  "Not Started": "#aaa",
  "In Progress": "#6B3FA0",
  "Drafted": "#0F766E",
  "In Review": "#B45309",
  "Scheduled": "#B45309",
  "Posted": "#16a34a",
  "Needs Revision": "#dc2626",
};

export const ACTION_STATUS_C = {
  "Not Started": "#aaa",
  "In Progress": "#B45309",
  "Complete": "#16a34a",
};

export const PRIORITY_C = {
  Low: "#aaa",
  Normal: "#0F766E",
  High: "#B45309",
  Urgent: "#dc2626",
};

// Sponsorship / tier colors
export const TIER_C = { Semanal: "#16a34a", Mensual: "#B45309" };

export const PIPE_SC = {
  "Not Contacted": "#aaa",
  "Outreach Sent": "#B45309",
  "In Talks": "#6B3FA0",
  "Proposal Sent": "#0F766E",
  "Confirmed": "#16a34a",
  "Declined": "#dc2626",
};

export const MAMI_TC = {
  Platinum: "#C9A96E",
  Gold: "#B45309",
  Silver: "#888",
  Sapphire: "#0F766E",
};

export const CAT_C = {
  us_holiday: "#B5195F",
  latino: "#C9A96E",
  nightlife: "#6B3FA0",
  arabic: "#0F766E",
  wellness: "#B5195F",
  real_estate: "#0F766E",
  creator: "#8E1048",
  fun: "#B45309",
};

// Client types
export const CLIENT_TYPES = [
  "social",
  "sponsorship",
  "strategy_session",
  "own",
  "other",
];

export const CLIENT_TYPE_LABELS = {
  social: "Social Media Management",
  sponsorship: "Sponsorship Management",
  strategy_session: "One-Time Strategy Session",
  own: "Own Brand",
  other: "Other",
};

// Call types
export const CALL_TYPES = [
  "Client Check-In",
  "Strategy",
  "Sponsorship",
  "Partnership",
  "Discovery",
  "Internal",
  "Other",
];

// Roles & permissions (STATIC — not passwords)
export const ROLES = {
  manager: {
    label: "Manager",
    clients: ["baila","cne","poderosa","dibze","mamicollective","casacreative","cindyvee"],
    isManager: true,
  },
  vicSerg: {
    label: "Vic & Sergio",
    clients: ["baila","cne"],
  },
  cneSponsorship: {
    label: "CNE Sponsorship",
    clients: [],
    sponsorOnly: true,
  },
  poderosa: {
    label: "Poderosa",
    clients: ["poderosa"],
  },
  moni: {
    label: "Moni",
    clients: ["poderosa"], // Poderosa ONLY
  },
  dibze: {
    label: "Dibze",
    clients: ["dibze"],
  },
  mamicollective: {
    label: "Mami Collective",
    clients: ["mamicollective"],
  },
};

// Default tab visibility (STATIC RULES)
export const DEFAULT_TABS = {
  social: {
    journey: true,
    calendar: true,
    strategy: true,
    analytics: true,
    events: true,
    ambassadors: false,
    creators: false,
    sponsors: false,
    notes: true,
    todos: true,
    logistics: true,
  },
  sponsorship: {
    journey: true,
    calendar: false,
    strategy: true,
    analytics: false,
    events: false,
    ambassadors: false,
    creators: false,
    sponsors: true,
    notes: true,
    todos: true,
    logistics: true,
  },
  strategy_session: {
    journey: true,
    calendar: false,
    strategy: true,
    analytics: false,
    events: false,
    ambassadors: false,
    creators: false,
    sponsors: false,
    notes: true,
    todos: true,
    logistics: true,
  },
  own: {
    journey: false,
    calendar: true,
    strategy: true,
    analytics: true,
    events: false,
    ambassadors: false,
    creators: false,
    sponsors: false,
    notes: true,
    todos: true,
    logistics: false,
  },
  other: {
    journey: true,
    calendar: true,
    strategy: true,
    analytics: false,
    events: false,
    ambassadors: false,
    creators: false,
    sponsors: false,
    notes: true,
    todos: true,
    logistics: true,
  },
};

// Journey steps (STATIC CONTENT)
export const JOURNEY_STEPS = [
  {
    id: "questionnaire",
    label: "Complete New Client Questionnaire",
    desc: "Fill out your brand questionnaire so we can build your strategy.",
  },
  {
    id: "strategy",
    label: "Strategy Review Call",
    desc: "We'll review your custom strategy together on a call and finalize everything before anything goes live.",
  },
  {
    id: "calendar",
    label: "Review Your Content Calendar",
    desc: "Look over your first content calendar and give the green light.",
  },
];

// Questionnaire structure (STATIC FORM CONFIG)
export const Q_SECTIONS = [
  { section: "01 Brand Identity & Voice", fields: [
    { id: "q1", label: "In 2–3 sentences, describe what your business does and who it serves.", type: "textarea" },
    { id: "q2", label: "What is your brand tagline or slogan? If you don't have one yet, write what you'd want it to say.", type: "text" },
    { id: "q3", label: "Describe your brand in 5 words and the tone you want your content to have.", type: "text",
      hint: "e.g. Bold, warm, real, culturally-rooted, empowering — conversational & inspiring" },
    { id: "q4", label: "What do you want your audience to FEEL when they see your content?", type: "textarea" },
    { id: "q5", label: "Brand Colors", type: "text", hint: "Hex codes if known" },
    { id: "q6", label: "Brand Fonts", type: "text", hint: "Typefaces if known" },
    { id: "q7", label: "Logo, Brand Assets & Style Guide", type: "textarea" },
    { id: "q8", label: "Recurring visual or cultural motifs?", type: "textarea" },
  ]},
];
``