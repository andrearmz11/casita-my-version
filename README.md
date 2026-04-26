# Casita v9 — Casa Creative Agency Portal

A custom client portal for Casa Creative, built for Cindy Vargas. This is an internal tool — not a public product. It lives at a private URL and is password-protected by role.

---

## What this is

Casita is a React-based agency OS: one place for Cindy to manage her clients, track content calendars, run call notes, assign tasks, manage sponsorships, and give clients a window into their own work. Each client logs in and sees only their portal. Cindy sees everything.

It's intentionally lean — no backend complexity, no CMS, no third-party integrations yet. The goal was to get something real and usable live quickly, then layer in infrastructure as the agency scales.

---

## Why React

The decision to use React over a no-code tool or a CMS was deliberate.

Casita has a lot of moving parts — per-client tab visibility, role-based access, action items that flow from call notes into to-do lists, a master creator pool that filters by client, real-time state across modals and tabs. A no-code tool would have hit a ceiling fast and forced compromises on UX. React gives us full control over all of it, and the component structure means new features (new tabs, new client types, new role logic) can be added cleanly without touching unrelated code.

It also means Cindy isn't locked into a third-party platform's pricing, data ownership terms, or feature roadmap.

---

## How it's structured

```
src/
  data.js      — All constants, seed data, defaults, and pure helper functions
  ui.jsx       — Shared UI primitives (Pill, Inp, TA, Sel, Modal, Card, AssignedToInput, etc.)
  App.jsx      — Root component: all global state lives here, routes between views
  modals.jsx   — Standalone modal components (each has its own useState at the top level)
```

The HTML preview file (`casita_v9_preview.html`) is a self-contained single-file version of the app using Babel in the browser. It's used for Cindy's review and approval before deploying. Once approved, the same logic moves into the React source files above.

**Current data layer:** `localStorage` with the prefix `c9_`. This is intentional for the preview/approval phase — no backend needed to test and iterate.

**Production data layer:** Supabase (Postgres). The swap is isolated to `data.js` — replace the `db.get` / `db.set` helpers with Supabase client calls. The rest of the app doesn't need to change.

---

## Key rules that must be preserved

These are easy to accidentally break during refactoring, so flagging them clearly:

**Moni is Poderosa-only.** Her role only grants access to Poderosa. She appears as an "Assigned To" suggestion only on Poderosa tasks and call notes — never on any other client. This is enforced in `clientSuggestions()` in `data.js`. Do not generalize that function without checking this logic.

**No useState inside callbacks or IIFEs.** React's Rules of Hooks. Every component that needs state must be a named function at the module level. This bit us before and caused full black-screen crashes. All modals are named top-level components for this reason.

**Tab visibility is per-client, not per-client-type.** `DEFAULT_TABS` in `data.js` sets the starting point by client type, but Cindy can override individual tabs per client in the Settings tab. These overrides are stored on the client object as `client.tabs`. Respect that object — don't derive tab visibility from `clientType` alone.

**`c9_` localStorage prefix.** Older preview builds used different prefixes (`c8_`, `casita8_`). If you see stale data appearing, check the prefix. The v9 prefix is `c9_`.

---

## Roles and access

| Role | Password | Sees |
|------|----------|------|
| manager | casita2026 | Everything — all clients, all tabs, all data |
| vicSerg | vicserg2026 | CNE Presents + Baila Habibi |
| cneSponsorship | sponsor123 | CNE Sponsorship Tracker only |
| poderosa | poderosa123 | Poderosa portal |
| moni | moni2026 | Poderosa portal (ambassador edit access) |
| dibze | dibze123 | Dibze portal |
| mamicollective | mami123 | Mami Collective portal |

Passwords are stored in state and persisted to localStorage. Cindy can change her own password from within the portal (🔑 icon in the header). Change default passwords after launch.

---

## Creator database

All creators live in one master pool (`CREATORS_DEFAULT` in `data.js`). Each creator has a `clientIds` array that tags them to one or more clients. When a client has the Creators tab enabled, they see only creators tagged to them. The manager can view the full pool with a "Show all" toggle. Adding a new creator from the UI lets Cindy select which clients to tag them to.

This was designed so that as Cindy adds creators for new clients, the pool stays unified and searchable rather than siloed.

---

## Supabase schema (when ready)

The data model maps closely to the current localStorage structure. Main tables to build:

- `clients` — client records with tabs JSON column
- `posts` — content calendar entries, foreign key to client
- `analytics` — monthly analytics snapshots, foreign key to client
- `creators` — master pool with `client_ids` array column
- `ambassadors` — Poderosa ambassadors
- `pipeline` / `confirmed` — CNE sponsorship records
- `call_notes` — per-client call records with action items JSON column
- `todos` — per-client tasks
- `journeys` — completion state per client
- `questionnaires` — per-client questionnaire responses

Row-level security should enforce role-based access at the database level — don't rely solely on the UI for access control once Supabase is live.

---

## Deployment

The app is built with Vite and deployed via Cloudflare Pages. Environment variables for the Supabase connection go in Cloudflare's dashboard under the project settings. The repo on GitHub connects directly to Cloudflare — pushes to `main` trigger a deploy.

No server, no backend infrastructure to maintain. Just Cloudflare Pages + Supabase free tier.

---

## What's next

Once Cindy approves the v9 preview:

1. Sync the HTML preview logic into the React source files (most of it is already done in `App.jsx`, `data.js`, `ui.jsx`)
2. Build out the Supabase schema and swap the data layer
3. Set up real email notifications for action items assigned to clients (currently handled via in-portal badge only)
4. Wire up Cloudflare Pages deployment

Questions → contact@cindyvargas.com
