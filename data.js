// ── data.js — Casita v9 — Final ─────────────────────────────────────────────────────
// All static data, constants, and defaults. Import into App.jsx and components.

export const B = {pink:"#B5195F",fuchsia:"#8E1048",gold:"#C9A96E",gray:"#F7F7F7",pl:"#FFF0F5",pb:"#F9A8C9"};
export const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export const POST_STATUSES = ["Not Started","In Progress","Drafted","In Review","Scheduled","Posted","Needs Revision"];
export const SC = {"Not Started":"#aaa","In Progress":"#6B3FA0","Drafted":"#0F766E","In Review":"#B45309","Scheduled":"#B45309","Posted":"#16a34a","Needs Revision":"#dc2626"};
export const TIER_C = {Semanal:"#16a34a",Mensual:"#B45309"};
export const PIPE_SC = {"Not Contacted":"#aaa","Outreach Sent":"#B45309","In Talks":"#6B3FA0","Proposal Sent":"#0F766E","Confirmed":"#16a34a","Declined":"#dc2626"};
export const MAMI_TC = {Platinum:"#C9A96E",Gold:"#B45309",Silver:"#888",Sapphire:"#0F766E"};
export const CAT_C = {us_holiday:"#B5195F",latino:"#C9A96E",nightlife:"#6B3FA0",arabic:"#0F766E",wellness:"#B5195F",real_estate:"#0F766E",creator:"#8E1048",fun:"#B45309"};
export const DAY_MAP = {Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6,Sunday:0};
export const CLIENT_TYPES = ["social","sponsorship","strategy_session","own","other"];
export const CLIENT_TYPE_LABELS = {social:"Social Media Management",sponsorship:"Sponsorship Management",strategy_session:"One-Time Strategy Session",own:"Own Brand",other:"Other"};
export const CALL_TYPES = ["Client Check-In","Strategy","Sponsorship","Partnership","Discovery","Internal","Other"];
export const TASK_STATUSES = ["Not Started","In Progress","Complete"];
export const TASK_PRIORITIES = ["Low","Normal","High","Urgent"];
export const ACTION_STATUS_C = {"Not Started":"#aaa","In Progress":"#B45309","Complete":"#16a34a"};
export const PRIORITY_C = {Low:"#aaa",Normal:"#0F766E",High:"#B45309",Urgent:"#dc2626"};

export const PW_DEFAULT = {manager:"casita2026",vicSerg:"vicserg2026",cneSponsorship:"sponsor123",poderosa:"poderosa123",moni:"moni2026",dibze:"dibze123",mamicollective:"mami123"};

// Role definitions
// NOTE: Moni is ONLY visible as an AssignedTo suggestion on Poderosa.
// She does NOT appear on any other client's suggestions.
export const ROLES = {
  manager:       {label:"Manager",   clients:["baila","cne","poderosa","dibze","mamicollective","casacreative","cindyvee"],isManager:true},
  vicSerg:       {label:"Vic & Sergio", clients:["baila","cne"]},
  cneSponsorship:{label:"CNE Sponsorship", clients:[],sponsorOnly:true},
  poderosa:      {label:"Poderosa",  clients:["poderosa"]},
  moni:          {label:"Moni",      clients:["poderosa"]}, // Poderosa only
  dibze:         {label:"Dibze",     clients:["dibze"]},
  mamicollective:{label:"Mami Collective", clients:["mamicollective"]},
};

// Default tabs per client type
export const DEFAULT_TABS = {
  social:          {journey:true,calendar:true,strategy:true,analytics:true,events:true,ambassadors:false,creators:false,sponsors:false,notes:true,todos:true,logistics:true},
  sponsorship:     {journey:true,calendar:false,strategy:true,analytics:false,events:false,ambassadors:false,creators:false,sponsors:true,notes:true,todos:true,logistics:true},
  strategy_session:{journey:true,calendar:false,strategy:true,analytics:false,events:false,ambassadors:false,creators:false,sponsors:false,notes:true,todos:true,logistics:true},
  own:             {journey:false,calendar:true,strategy:true,analytics:true,events:false,ambassadors:false,creators:false,sponsors:false,notes:true,todos:true,logistics:false},
  other:           {journey:true,calendar:true,strategy:true,analytics:false,events:false,ambassadors:false,creators:false,sponsors:false,notes:true,todos:true,logistics:true},
};

export const JOURNEY_STEPS = [
  {id:"questionnaire",label:"Complete New Client Questionnaire",desc:"Fill out your brand questionnaire so we can build your strategy."},
  {id:"strategy",    label:"Strategy Review Call",              desc:"We'll review your custom strategy together on a call and finalize everything before anything goes live."},
  {id:"calendar",    label:"Review Your Content Calendar",      desc:"Look over your first content calendar and give the green light."},
];

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

// AssignedTo suggestions — Moni ONLY appears for Poderosa
export const clientSuggestions = (client, role) => {
  const s = ["Cindy"];
  if (client?.id === "poderosa" && (role === "manager" || role === "moni")) s.push("Moni");
  if (client?.poc && !s.includes(client.poc)) s.push(client.poc);
  return s;
};

export const Q_SECTIONS = [
  {section:"01 Brand Identity & Voice", fields:[
    {id:"q1", label:"In 2–3 sentences, describe what your business does and who it serves.", type:"textarea"},
    {id:"q2", label:"What is your brand tagline or slogan? If you don't have one yet, write what you'd want it to say.", type:"text"},
    {id:"q3", label:"Describe your brand in 5 words and the tone you want your content to have.", type:"text", hint:"e.g. Bold, warm, real, culturally-rooted, empowering — conversational & inspiring"},
    {id:"q4", label:"What do you want your audience to FEEL when they see your content?", type:"textarea"},
    {id:"q5", label:"Brand Colors", type:"text", hint:"Hex codes if known"},
    {id:"q6", label:"Brand Fonts", type:"text", hint:"Typefaces if known"},
    {id:"q7", label:"Logo, Brand Assets & Style Guide", type:"textarea", hint:"Create a Google Drive folder and upload everything: logos (PNG with transparent background preferred), brand photos, videos, brand kit or style guide if you have one. Share the folder with contact@cindyvargas.com and paste the link here. No folder yet? No worries — we can set it up together."},
    {id:"q8", label:"Are there any recurring visual elements, patterns, textures, or cultural motifs meaningful to your brand?", type:"textarea", hint:"e.g. floral patterns, geometric shapes, cultural symbols, seasonal imagery"},
  ]},
  {section:"02 Your Audience & Content", fields:[
    {id:"q10", label:"Who is your target audience? Be as specific as possible.", type:"textarea", hint:"Age range, lifestyle, values, goals, pain points"},
    {id:"q11", label:"What are the top 3–4 things you want your content to focus on?", type:"textarea", hint:"Examples: Showing your work process, sharing tips or education, building community, promoting events, behind-the-scenes, lifestyle. Just list them — we don't need formal names yet."},
    {id:"q12", label:"Are there brands whose voice or aesthetic you admire? What do you love about how they show up?", type:"textarea"},
  ]},
  {section:"03 Do's, Don'ts & Key Dates", fields:[
    {id:"q13", label:"What topics, styles, or approaches are OFF LIMITS or don't align with your brand?", type:"textarea"},
    {id:"q14", label:"Are there any words or phrases you always want used — or never want used?", type:"textarea"},
    {id:"q15", label:"List any upcoming launches, events, promotions, or campaigns we should plan content around.", type:"textarea"},
    {id:"q16", label:"Are there seasonal moments, holidays, or awareness dates relevant to your brand or audience?", type:"textarea"},
  ]},
  {section:"04 Social Proof & Anything Else", fields:[
    {id:"q17", label:"Do you have testimonials, press features, media mentions, or partnerships you'd like us to highlight?", type:"textarea"},
    {id:"q18", label:"Do you have notable stats or achievements we can feature?", type:"text", hint:'e.g. "500+ clients served," "10 years in business," awards'},
    {id:"q19", label:"What's the most important thing you want Casa Creative to focus on first?", type:"textarea"},
    {id:"q20", label:"Anything else you'd like us to know about your brand, audience, or vision?", type:"textarea"},
  ]},
];

export const MAMI_2025 = [
  {company:"Verizon",               tier:"Platinum", amount:"$2,500"},
  {company:"Guaranteed Rate",        tier:"Sapphire", amount:"$1,500"},
  {company:"Chicago Family Doulas",  tier:"Gold",     amount:"$1,000"},
];

// Master creator pool — all 25 from Creator_Database.xlsx, tagged to CNE + Baila
// clientIds array controls which clients see this creator in their tab
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

export const CLIENTS_DEFAULT = [
  {id:"baila",name:"Baila Habibi",handle:"@bailahabibi",emoji:"🌙",poc:"Vic & Sergio",clientType:"social",postDays:["Wednesday"],storiesPerWeek:3,requiresApproval:false,paymentMethod:"Zelle",scopeOfWork:"1 post/week · 3 stories/week",retainerRate:"",billingCycle:"Monthly",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.social},strategy:{overview:"Arabic + Latin fusion nightlife brand in Chicago.",pillars:["Event Promotion","Nightlife Culture","Artist Spotlights","Behind the Scenes","Community"],voice:"Mysterious, sultry, bilingual. Never corporate. Always electric.",postingRhythm:"1 post/week on Wednesday. 3 stories/week."}},
  {id:"cne",name:"CNE Presents",handle:"@cnepresents",emoji:"🎶",poc:"Vic & Sergio",clientType:"social",postDays:["Tuesday","Thursday"],storiesPerWeek:3,requiresApproval:false,paymentMethod:"Zelle",scopeOfWork:"2 posts/week · 3 stories/week",retainerRate:"",billingCycle:"Monthly",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.social,creators:true,sponsors:true},strategy:{overview:"Latino-focused Chicago event brand. Big energy, big events, big community.",pillars:["Event Hype","Latino Culture","Artist Features","Ticket Sales","Recap Content"],voice:"Hype, celebratory, bilingual. The party starts on the feed.",postingRhythm:"Tuesday + Thursday. 3 stories/week."}},
  {id:"poderosa",name:"Project Poderosa",handle:"@projectpoderosa",emoji:"💪🏽",poc:"Myra",clientType:"social",postDays:["Monday","Wednesday","Friday"],storiesPerWeek:3,requiresApproval:false,paymentMethod:"PayPal",scopeOfWork:"3 posts/week · 3 stories/week · monthly analytics",retainerRate:"",billingCycle:"Monthly",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.social,ambassadors:true},strategy:{overview:"Latina wellness and fitness community. Raw, real, rooted in cultura.",pillars:["Physical Wellness","Mental Health & Real Life","Lifestyle & Culture","Growth & Opportunity","Community & Sisterhood"],voice:"Authentic, loud, bold, real. Culturally Latina. NOT luxury. NOT polished.",postingRhythm:"Apr/Jun/Aug/Oct/Dec: Mon·Wed·Fri. May/Jul/Sep/Nov: Tue·Thu·Sat."}},
  {id:"dibze",name:"Dibze",handle:"@dibze",emoji:"🏙️",poc:"Jawad",clientType:"social",postDays:["Monday","Wednesday"],storiesPerWeek:3,requiresApproval:true,paymentMethod:"Zelle",scopeOfWork:"2 posts/week · 3 stories/week · approval required",retainerRate:"",billingCycle:"Monthly",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.social},strategy:{overview:"Chicago luxury apartment locating. Search-first captions.",pillars:["Neighborhood Spotlights","Apartment Tours","Relocation Tips","Luxury Lifestyle","Chicago Living"],voice:"Polished, helpful, aspirational.",postingRhythm:"Monday + Wednesday. 3 stories/week."}},
  {id:"mamicollective",name:"The Mami Collective",handle:"",emoji:"🤝",poc:"Paulina",clientType:"sponsorship",postDays:[],storiesPerWeek:0,requiresApproval:false,paymentMethod:"Zelle",scopeOfWork:"Sponsorship management · Event: Oct 1 2026 · $650/mo retainer",retainerRate:"$650/mo",billingCycle:"Monthly",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.sponsorship},strategy:{overview:"Sponsorship management. $650/month Apr–Sep + $300 event day.",pillars:["Sponsorship Outreach","Sponsor Relations","Event Deliverables","Recap Reports"],voice:"Professional, warm, brand-ambassador tone.",postingRhythm:"N/A"}},
  {id:"casacreative",name:"Casa Creative",handle:"@_casacreative_",emoji:"🩷",poc:"Cindy",clientType:"own",postDays:["Wednesday","Friday"],storiesPerWeek:3,requiresApproval:false,paymentMethod:null,scopeOfWork:"Own brand",retainerRate:"",billingCycle:"",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.own},strategy:{overview:"Cindy's boutique social media agency.",pillars:["Client Work & Results","Agency Life","Tips & Education","Brand Story","Community"],voice:"Confident, creative, warm.",postingRhythm:"Wednesday + Friday."}},
  {id:"cindyvee",name:"CindyVee",handle:"@_cindyvee_",emoji:"✨",poc:"Cindy",clientType:"own",postDays:["Tuesday","Saturday"],storiesPerWeek:3,requiresApproval:false,paymentMethod:null,scopeOfWork:"Own brand",retainerRate:"",billingCycle:"",paymentDueDate:"",contractUrl:"",tabs:{...DEFAULT_TABS.own},strategy:{overview:"Cindy's personal creator brand.",pillars:["Latina in Corporate","Chicago Eats & Events","Fitness & Wellness","Life Moments","Creator Journey"],voice:"Real, bilingual, warm.",postingRhythm:"Tuesday + Saturday."}},
];

export const AMBASSADORS_DEFAULT = [
  {id:1,  name:"Roxana Soriano",   email:"angel7roxana@gmail.com",    ig:"Denys_roxi",           tiktok:"Denys_sor",                          birthday:"9/27/2026",  status:"Active",notes:""},
  {id:2,  name:"Yesi Cruz",        email:"",                          ig:"Fitgirlyesi",           tiktok:"Fitgirlyesi",                        birthday:"10/13/2026", status:"Active",notes:""},
  {id:3,  name:"Maggie Gonzalez",  email:"",                          ig:"lamaggiiiis08",         tiktok:"lamaggiiii08",                       birthday:"8/8/1984",   status:"Active",notes:""},
  {id:4,  name:"Daisy Fontenot",   email:"",                          ig:"daisy.fontenot",        tiktok:"daisyfontenot",                      birthday:"10/14/1988", status:"Active",notes:""},
  {id:5,  name:"Claudia Isarraras",email:"cldtamayo@gmail.com",       ig:"Claud_i_a88",           tiktok:"Claudtomato32",                      birthday:"8/31/1988",  status:"Active",notes:""},
  {id:6,  name:"Jacklyn",          email:"",                          ig:"Jacklynflores",         tiktok:"Jacklyndflores",                     birthday:"1/2/1995",   status:"Active",notes:""},
  {id:7,  name:"Ana Castro",       email:"",                          ig:"Ana_Loving_life",       tiktok:"",                                   birthday:"10/20/2026", status:"Active",notes:"No personal TikTok"},
  {id:8,  name:"Hope Morales",     email:"",                          ig:"Fearlessly_fit_hm",     tiktok:"",                                   birthday:"11/5/1987",  status:"Active",notes:"N/A for TikTok"},
  {id:9,  name:"Atir Portillo",    email:"",                          ig:"Atirlyna",              tiktok:"Atirlyna",                           birthday:"10/8/1986",  status:"Active",notes:""},
  {id:10, name:"Araceli DeLeon",   email:"",                          ig:"ara.fitnessjourney",    tiktok:"arafitnessjourney",                  birthday:"9/27/1986",  status:"Active",notes:""},
  {id:11, name:"Ashley Guzman",    email:"avguzy@yahoo.com",          ig:"Ashleyv_guzman",        tiktok:"ashryyry",                           birthday:"4/8/1987",   status:"Active",notes:""},
  {id:12, name:"Jocelyn Almaraz",  email:"",                          ig:"Nurseeejo",             tiktok:"Nurseeejo",                          birthday:"4/11/1995",  status:"Active",notes:""},
  {id:13, name:"Norma Perez",      email:"",                          ig:"Sothefatdontclap",      tiktok:"Sothefatdontclap",                   birthday:"3/23/1985",  status:"Active",notes:""},
  {id:14, name:"Natalie Rosete",   email:"",                          ig:"natalieleticia",        tiktok:"natalieleticia95",                   birthday:"2/7/1995",   status:"Active",notes:""},
  {id:15, name:"Ellie Prado",      email:"ellieprado.smile@gmail.com",ig:"805_fitness4life",      tiktok:"ellieprado_dancefitness",            birthday:"10/28/1975", status:"Active",notes:""},
  {id:16, name:"Rebecca Logan",    email:"rebecca75logan@gmail.com",  ig:"queen_mariposa",        tiktok:"rebeccalogan648",                    birthday:"1/25/1973",  status:"Active",notes:"Rarely uses TikTok"},
  {id:17, name:"Dayana Mendoza",   email:"",                          ig:"Deesfitme",             tiktok:"DeeJ",                               birthday:"5/10/1988",  status:"Active",notes:""},
  {id:18, name:"Fernanda Cruz",    email:"",                          ig:"_fernanda14c",          tiktok:"nandaa.c1",                          birthday:"8/14/2002",  status:"Active",notes:""},
];

// Helpers
export const db = {
  get: (k, d=null) => { try { const v = localStorage.getItem("c9_"+k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem("c9_"+k, JSON.stringify(v)); } catch {} },
};
export const fmt = d => { if(!d) return "—"; const [y,m,day] = d.split("-"); return `${parseInt(m)}/${parseInt(day)}/${y}`; };
export const todayStr = () => new Date().toISOString().slice(0,10);
export const daysUntil = ds => { const d=new Date(ds+"T12:00:00"), n=new Date(); n.setHours(0,0,0,0); return Math.ceil((d-n)/86400000); };
export const getDIM = (y,m) => new Date(y,m+1,0).getDate();
export const getFirst = (y,m) => new Date(y,m,1).getDay();
// Poderosa post days: April(3)=MWF, May(4)=T/TH/SA, June=MWF, July=T/TH/SA...
// April is month index 3. Even offset from April = MWF, odd offset = T/TH/SA.
export const getPodDays = (y,m) => { const offset=((m-3)%12+12)%12; return offset%2===0 ? ["Monday","Wednesday","Friday"] : ["Tuesday","Thursday","Saturday"]; };
export const getWkDates = () => { const n=new Date(), dy=n.getDay(), mon=new Date(n); mon.setDate(n.getDate()-(dy===0?6:dy-1)); return Array.from({length:7},(_,i)=>{ const d=new Date(mon); d.setDate(mon.getDate()+i); return d.toISOString().slice(0,10); }); };
export const getUpcoming = (kds, days=60) => { const t=todayStr(), end=new Date(); end.setDate(end.getDate()+days); const yr=new Date().getFullYear(); return kds.map(kd => { const d1=`${yr}-${String(kd.month).padStart(2,"0")}-${String(kd.day).padStart(2,"0")}`; const d2=`${yr+1}-${String(kd.month).padStart(2,"0")}-${String(kd.day).padStart(2,"0")}`; const date=d1>=t?d1:d2; return {...kd,dateStr:date}; }).filter(kd=>kd.dateStr>=t&&new Date(kd.dateStr)<=end).sort((a,b)=>a.dateStr.localeCompare(b.dateStr)); };
export const isSocial = c => c.clientType === "social";
export const isOwn   = c => c.clientType === "own";
export const isSponsor = c => c.clientType === "sponsorship";
