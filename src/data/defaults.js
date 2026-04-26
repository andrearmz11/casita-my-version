// src/data/defaults.js
// Casita v9 — Default / seed data
// Used ONLY when no saved data exists in storage

import { DEFAULT_TABS } from "./constants";

/* ───────────────── Password Defaults ───────────────── */

export const PW_DEFAULT = {
  manager: "casita2026",
  vicSerg: "vicserg2026",
  cneSponsorship: "sponsor123",
  poderosa: "poderosa123",
  moni: "moni2026",
  dibze: "dibze123",
  mamicollective: "mami123",
};

/* ───────────────── Welcome Message ───────────────── */

export const WELCOME_DEFAULT = `Hey [Client Contact Name] — welcome to Casa Creative! 🩷

I'm so glad you're here. This portal is your home base — your content calendar, strategy, analytics, and everything we're building together, all in one place.

Here's what to expect:
• Complete the New Client Questionnaire in the Journey tab first
• After, I'll draft your strategy and we will hop on a Strategy Review Call together to go over everything before anything goes live.
• Once we align, I'll drop your first content calendar and we get to work.

I respond within 24 hours on business days — for anything urgent, text me directly. The more you share with me (upcoming events, launches, what's exciting), the better the content I can create for you.

Gracias!
Cindy Vargas
Casa Creative`;

/* ───────────────── Clients ───────────────── */

export const CLIENTS_DEFAULT = [
  {
    id: "baila",
    name: "Baila Habibi",
    handle: "@bailahabibi",
    emoji: "🌙",
    poc: "Vic & Sergio",
    clientType: "social",
    postDays: ["Wednesday"],
    storiesPerWeek: 3,
    requiresApproval: false,
    paymentMethod: "Zelle",
    scopeOfWork: "1 post/week · 3 stories/week",
    retainerRate: "",
    billingCycle: "Monthly",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.social },
    strategy: {
      overview: "Arabic + Latin fusion nightlife brand in Chicago.",
      pillars: [
        "Event Promotion",
        "Nightlife Culture",
        "Artist Spotlights",
        "Behind the Scenes",
        "Community",
      ],
      voice: "Mysterious, sultry, bilingual. Never corporate. Always electric.",
      postingRhythm: "1 post/week on Wednesday. 3 stories/week.",
    },
  },

  {
    id: "cne",
    name: "CNE Presents",
    handle: "@cnepresents",
    emoji: "🎶",
    poc: "Vic & Sergio",
    clientType: "social",
    postDays: ["Tuesday", "Thursday"],
    storiesPerWeek: 3,
    requiresApproval: false,
    paymentMethod: "Zelle",
    scopeOfWork: "2 posts/week · 3 stories/week",
    retainerRate: "",
    billingCycle: "Monthly",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.social, creators: true, sponsors: true },
    strategy: {
      overview:
        "Latino-focused Chicago event brand. Big energy, big events, big community.",
      pillars: [
        "Event Hype",
        "Latino Culture",
        "Artist Features",
        "Ticket Sales",
        "Recap Content",
      ],
      voice: "Hype, celebratory, bilingual. The party starts on the feed.",
      postingRhythm: "Tuesday + Thursday. 3 stories/week.",
    },
  },

  {
    id: "poderosa",
    name: "Project Poderosa",
    handle: "@projectpoderosa",
    emoji: "💪🏽",
    poc: "Myra",
    clientType: "social",
    postDays: ["Monday", "Wednesday", "Friday"],
    storiesPerWeek: 3,
    requiresApproval: false,
    paymentMethod: "PayPal",
    scopeOfWork: "3 posts/week · 3 stories/week · monthly analytics",
    retainerRate: "",
    billingCycle: "Monthly",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.social, ambassadors: true },
    strategy: {
      overview:
        "Latina wellness and fitness community. Raw, real, rooted in cultura.",
      pillars: [
        "Physical Wellness",
        "Mental Health & Real Life",
        "Lifestyle & Culture",
        "Growth & Opportunity",
        "Community & Sisterhood",
      ],
      voice:
        "Authentic, loud, bold, real. Culturally Latina. NOT luxury. NOT polished.",
      postingRhythm:
        "Apr/Jun/Aug/Oct/Dec: Mon·Wed·Fri. May/Jul/Sep/Nov: Tue·Thu·Sat.",
    },
  },

  {
    id: "dibze",
    name: "Dibze",
    handle: "@dibze",
    emoji: "🏙️",
    poc: "Jawad",
    clientType: "social",
    postDays: ["Monday", "Wednesday"],
    storiesPerWeek: 3,
    requiresApproval: true,
    paymentMethod: "Zelle",
    scopeOfWork: "2 posts/week · 3 stories/week · approval required",
    retainerRate: "",
    billingCycle: "Monthly",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.social },
    strategy: {
      overview: "Chicago luxury apartment locating. Search-first captions.",
      pillars: [
        "Neighborhood Spotlights",
        "Apartment Tours",
        "Relocation Tips",
        "Luxury Lifestyle",
        "Chicago Living",
      ],
      voice: "Polished, helpful, aspirational.",
      postingRhythm: "Monday + Wednesday. 3 stories/week.",
    },
  },

  {
    id: "mamicollective",
    name: "The Mami Collective",
    handle: "",
    emoji: "🤝",
    poc: "Paulina",
    clientType: "sponsorship",
    postDays: [],
    storiesPerWeek: 0,
    requiresApproval: false,
    paymentMethod: "Zelle",
    scopeOfWork:
      "Sponsorship management · Event: Oct 1 2026 · $650/mo retainer",
    retainerRate: "$650/mo",
    billingCycle: "Monthly",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.sponsorship },
    strategy: {
      overview:
        "Sponsorship management. $650/month Apr–Sep + $300 event day.",
      pillars: [
        "Sponsorship Outreach",
        "Sponsor Relations",
        "Event Deliverables",
        "Recap Reports",
      ],
      voice: "Professional, warm, brand-ambassador tone.",
      postingRhythm: "N/A",
    },
  },

  {
    id: "casacreative",
    name: "Casa Creative",
    handle: "@_casacreative_",
    emoji: "🩷",
    poc: "Cindy",
    clientType: "own",
    postDays: ["Wednesday", "Friday"],
    storiesPerWeek: 3,
    requiresApproval: false,
    paymentMethod: null,
    scopeOfWork: "Own brand",
    retainerRate: "",
    billingCycle: "",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.own },
    strategy: {
      overview: "Cindy's boutique social media agency.",
      pillars: [
        "Client Work & Results",
        "Agency Life",
        "Tips & Education",
        "Brand Story",
        "Community",
      ],
      voice: "Confident, creative, warm.",
      postingRhythm: "Wednesday + Friday.",
    },
  },

  {
    id: "cindyvee",
    name: "CindyVee",
    handle: "@_cindyvee_",
    emoji: "✨",
    poc: "Cindy",
    clientType: "own",
    postDays: ["Tuesday", "Saturday"],
    storiesPerWeek: 3,
    requiresApproval: false,
    paymentMethod: null,
    scopeOfWork: "Own brand",
    retainerRate: "",
    billingCycle: "",
    paymentDueDate: "",
    contractUrl: "",
    tabs: { ...DEFAULT_TABS.own },
    strategy: {
      overview: "Cindy's personal creator brand.",
      pillars: [
        "Latina in Corporate",
        "Chicago Eats & Events",
        "Fitness & Wellness",
        "Life Moments",
        "Creator Journey",
      ],
      voice: "Real, bilingual, warm.",
      postingRhythm: "Tuesday + Saturday.",
    },
  },
];

/* ───────────────── Ambassadors (Poderosa) ───────────────── */

export const AMBASSADORS_DEFAULT = [
  { id: 1, name: "Roxana Soriano", email: "angel7roxana@gmail.com", ig: "Denys_roxi", tiktok: "Denys_sor", birthday: "9/27/2026", status: "Active", notes: "" },
  { id: 2, name: "Yesi Cruz", email: "", ig: "Fitgirlyesi", tiktok: "Fitgirlyesi", birthday: "10/13/2026", status: "Active", notes: "" },
  { id: 3, name: "Maggie Gonzalez", email: "", ig: "lamaggiiiis08", tiktok: "lamaggiiii08", birthday: "8/8/1984", status: "Active", notes: "" },
  { id: 4, name: "Daisy Fontenot", email: "", ig: "daisy.fontenot", tiktok: "daisyfontenot", birthday: "10/14/1988", status: "Active", notes: "" },
  { id: 5, name: "Claudia Isarraras", email: "cldtamayo@gmail.com", ig: "Claud_i_a88", tiktok: "Claudtomato32", birthday: "8/31/1988", status: "Active", notes: "" },
  { id: 6, name: "Jacklyn", email: "", ig: "Jacklynflores", tiktok: "Jacklyndflores", birthday: "1/2/1995", status: "Active", notes: "" },
  { id: 7, name: "Ana Castro", email: "", ig: "Ana_Loving_life", tiktok: "", birthday: "10/20/2026", status: "Active", notes: "No personal TikTok" },
  { id: 8, name: "Hope Morales", email: "", ig: "Fearlessly_fit_hm", tiktok: "", birthday: "11/5/1987", status: "Active", notes: "N/A for TikTok" },
  { id: 9, name: "Atir Portillo", email: "", ig: "Atirlyna", tiktok: "Atirlyna", birthday: "10/8/1986", status: "Active", notes: "" },
  { id: 10, name: "Araceli DeLeon", email: "", ig: "ara.fitnessjourney", tiktok: "arafitnessjourney", birthday: "9/27/1986", status: "Active", notes: "" },
  { id: 11, name: "Ashley Guzman", email: "avguzy@yahoo.com", ig: "Ashleyv_guzman", tiktok: "ashryyry", birthday: "4/8/1987", status: "Active", notes: "" },
  { id: 12, name: "Jocelyn Almaraz", email: "", ig: "Nurseeejo", tiktok: "Nurseeejo", birthday: "4/11/1995", status: "Active", notes: "" },
  { id: 13, name: "Norma Perez", email: "", ig: "Sothefatdontclap", tiktok: "Sothefatdontclap", birthday: "3/23/1985", status: "Active", notes: "" },
  { id: 14, name: "Natalie Rosete", email: "", ig: "natalieleticia", tiktok: "natalieleticia95", birthday: "2/7/1995", status: "Active", notes: "" },
  { id: 15, name: "Ellie Prado", email: "ellieprado.smile@gmail.com", ig: "805_fitness4life", tiktok: "ellieprado_dancefitness", birthday: "10/28/1975", status: "Active", notes: "" },
  { id: 16, name: "Rebecca Logan", email: "rebecca75logan@gmail.com", ig: "queen_mariposa", tiktok: "rebeccalogan648", birthday: "1/25/1973", status: "Active", notes: "Rarely uses TikTok" },
  { id: 17, name: "Dayana Mendoza", email: "", ig: "Deesfitme", tiktok: "DeeJ", birthday: "5/10/1988", status: "Active", notes: "" },
  { id: 18, name: "Fernanda Cruz", email: "", ig: "_fernanda14c", tiktok: "nandaa.c1", birthday: "8/14/2002", status: "Active", notes: "" },
];

/* ───────────────── Creators ───────────────── */

export const CREATORS_DEFAULT = [
  {id:1,  name:"Mony Uribe",       ig:"mony.uribe",       tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:2,  name:"Isea",             ig:"eyesonisea",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:3,  name:"Darlin",           ig:"darlin03_",         tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:4,  name:'Eric "El Toxico"', ig:"soytoxicox",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:5,  name:"Pri",              ig:"wavesofpri",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:6,  name:"Aiszah Rangel",    ig:"la_latina_arabia",  tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:7,  name:"Giovanna Avila",   ig:"giovannapaolaaa",   tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:8,  name:"Cindy (windycity)",ig:"cindywindycity",    tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:9,  name:"Sofi",             ig:"windycitysofi",     tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:10, name:"Cynthia Alcazar",  ig:"calcazar20",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:11, name:"Nallely Padilla",  ig:"__itsnallely",      tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:12, name:"Vanessa & David",  ig:"yummychicago_",     tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:13, name:"Desi",             ig:"chicagobydesi",     tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:14, name:"Alondra Alcazar",  ig:"alondraalcazar_",   tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:15, name:"Pato",             ig:"patoxplomo",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:16, name:"Ricky",            ig:"rickyyricaardo",    tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:17, name:"Xavier",           ig:"xmcustodio",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:18, name:"Sandy",            ig:"sandysvilla",       tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:19, name:"Jeremy",           ig:"jeremys_jaunts",    tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:20, name:"Nancy",            ig:"nancynereida_",     tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:21, name:"Jennifer Lopez",   ig:"jlogvd",            tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:22, name:"Yaz",              ig:"yazzy_yayy",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:23, name:"Vivi",             ig:"vida_convivi",      tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:24, name:"Alfredo",          ig:"alfredocedil",      tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
  {id:25, name:"Rosy",             ig:"rosy.spots",        tiktok:"",city:"Chicago",rate:"",lastEvent:"",status:"Not Contacted",tag:"Micro",paidOnly:false,openEvents:true,openCollabs:true,wouldWorkAgain:true,notes:"",clientIds:["cne","baila"]},
];


/* ───────────────── Other Defaults ───────────────── */

export const EVENTS_DEFAULT = 
[
  /*
  {
    id: "evt_1",            // string (generated)
    name: "Client Event",
    date: "YYYY-MM-DD",
    clientId: "poderosa",
    category: "event | launch | appearance | campaign",
    notes: "",
  }
  */
];

export const KEY_DATES_DEFAULT = 
[
  /*
  {
    id: "kd_1",             // string (generated)
    name: "Holiday / Key Date",
    month: 10,              // 1–12
    day: 31,                // 1–31
    category: "us_holiday | cultural | brand | internal",
    notes: "",
  }
  */
];

export const MAMI_2025 = [
  { company: "Verizon", tier: "Platinum", amount: "$2,500" },
  { company: "Guaranteed Rate", tier: "Sapphire", amount: "$1,500" },
  { company: "Chicago Family Doulas", tier: "Gold", amount: "$1,000" },
];