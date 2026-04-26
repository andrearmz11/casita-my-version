// ── modals.jsx — Casita v9 Final ─────────────────────────────────────────────
// All standalone modal and secondary components.
// Each component has its own useState at the top level (no hooks in callbacks).
// Import into App.jsx as needed.
//
// ── RULES (do not remove) ────────────────────────────────────────────────────
// • Moni appears as an AssignedTo suggestion ONLY for Poderosa.
//   clientSuggestions(client, role) in data.js enforces this — do not bypass it.
// • No useState inside IIFEs or arrow-function callbacks.
//   All components here are named functions for this reason.
// • ManageEventsModal is shared between ManagerDash and EventsTab.
//   Pass clientId to filter to one client; omit for the full cross-client view.

import { useState } from "react";
import {
  B, MONTHS, CALL_TYPES, TASK_STATUSES, TASK_PRIORITIES,
  CLIENT_TYPES, CLIENT_TYPE_LABELS, DEFAULT_TABS,
  CAT_C, PIPE_SC, MAMI_TC, MAMI_2025,
  ACTION_STATUS_C, PRIORITY_C, TIER_C,
  Q_SECTIONS, WELCOME_DEFAULT,
  fmt, today, clientSuggestions,
} from "./data";
import {
  Pill, Inp, TA, Sel, Fld, PBtn, Modal, Card, CardLabel,
  TH, TD, DB, AssignedToInput,
} from "./ui";

// ── CALL NOTES ────────────────────────────────────────────────────────────────
export function CallModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || {
    prospectName:"", businessName:"", industryNiche:"", ig:"", website:"",
    referredBy:"", date:"", status:"Scheduled", currentSituation:"",
    platforms:"", whatsNotWorking:"", hasContent:"", success90Days:"",
    oneThing:"", upcomingLaunch:"", postingFrequency:"", contentType:"",
    contentSource:"", idealStartDate:"", workedWithAgencyBefore:"",
    budget:"", generalNotes:"", proposalSendBy:"",
  });
  const upd = f => v => setD(x => ({ ...x, [f]: v }));
  const sh = { fontSize:11, color:B.pink, fontWeight:700, textTransform:"uppercase", letterSpacing:1, marginBottom:10, paddingBottom:6, borderBottom:`2px solid ${B.pl}`, marginTop:14 };
  return (
    <Modal title={existing ? `Discovery Call — ${existing.prospectName}` : "New Discovery Call"} onClose={onClose} wide>
      <div style={{ maxHeight:"65vh", overflowY:"auto", paddingRight:4 }}>
        <div style={sh}>📋 Call Details</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:4 }}>
          <Fld label="Prospect Name *"><Inp value={d.prospectName} onChange={upd("prospectName")}/></Fld>
          <Fld label="Business / Brand Name"><Inp value={d.businessName} onChange={upd("businessName")}/></Fld>
          <Fld label="Industry / Niche"><Inp value={d.industryNiche} onChange={upd("industryNiche")}/></Fld>
          <Fld label="Instagram Handle"><Inp value={d.ig} onChange={upd("ig")}/></Fld>
          <Fld label="Website"><Inp value={d.website} onChange={upd("website")}/></Fld>
          <Fld label="Referred By"><Inp value={d.referredBy} onChange={upd("referredBy")}/></Fld>
          <Fld label="Date of Call"><Inp value={d.date} onChange={upd("date")} type="date"/></Fld>
        </div>
        <div style={sh}>📍 Current Situation</div>
        <Fld label="What are they currently doing for social media?" hint="posting themselves, another agency, nothing?"><TA value={d.currentSituation} onChange={upd("currentSituation")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="What platforms are they on? Which do they want to focus on?"><TA value={d.platforms} onChange={upd("platforms")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="What's NOT working about their current social presence?"><TA value={d.whatsNotWorking} onChange={upd("whatsNotWorking")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Do they have existing brand photos or video content?"><TA value={d.hasContent} onChange={upd("hasContent")} rows={2} placeholder="Notes..."/></Fld>
        <div style={sh}>🎯 Goals & Vision</div>
        <Fld label="What does success look like 90 days from now?"><TA value={d.success90Days} onChange={upd("success90Days")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="What's the ONE thing they most want to fix or accomplish?"><TA value={d.oneThing} onChange={upd("oneThing")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Any specific launch, event, or campaign coming up?"><TA value={d.upcomingLaunch} onChange={upd("upcomingLaunch")} rows={2} placeholder="Notes..."/></Fld>
        <div style={sh}>📲 Content & Posting</div>
        <Fld label="How often are they hoping to post per week?"><TA value={d.postingFrequency} onChange={upd("postingFrequency")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Open to Reels / TikTok / video or prefer static?"><TA value={d.contentType} onChange={upd("contentType")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Will they provide content or need Casa Creative to source/shoot?"><TA value={d.contentSource} onChange={upd("contentSource")} rows={2} placeholder="Notes..."/></Fld>
        <div style={sh}>💼 Logistics</div>
        <Fld label="Ideal start date or timeline?"><TA value={d.idealStartDate} onChange={upd("idealStartDate")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Worked with a social media manager or agency before?"><TA value={d.workedWithAgencyBefore} onChange={upd("workedWithAgencyBefore")} rows={2} placeholder="Notes..."/></Fld>
        <Fld label="Budget range?" hint="Internal — do not share with client"><TA value={d.budget} onChange={upd("budget")} rows={2} placeholder="Notes..."/></Fld>
        <div style={sh}>📝 Call Notes & Next Steps</div>
        <Fld label="General notes, vibe check, anything that stood out..."><TA value={d.generalNotes} onChange={upd("generalNotes")} rows={4} placeholder="Notes from the call..."/></Fld>
        <Fld label="Proposal to send by"><Inp value={d.proposalSendBy} onChange={upd("proposalSendBy")} type="date"/></Fld>
        <Fld label="Outcome / Status"><Sel value={d.status} onChange={upd("status")} options={["Scheduled","Completed","No Show","Converted","Passed"]}/></Fld>
      </div>
      <div style={{ display:"flex", gap:7, marginTop:14, paddingTop:14, borderTop:"1px solid #f5f5f5" }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

export function OutreachModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { brandName:"", ig:"", tiktok:"", contactName:"", niche:"", pitch:"", outreachDate:"", status:"Not Contacted", notes:"" });
  return (
    <Modal title={existing ? "Edit Outreach" : "Add Outreach"} onClose={onClose}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
        {[["brandName","Brand *"],["ig","Instagram"],["tiktok","TikTok"],["contactName","Contact"],["niche","Niche"]].map(([f,p]) =>
          <Fld key={f}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))} placeholder={p}/></Fld>
        )}
        <Fld label="Date"><Inp value={d.outreachDate} onChange={v => setD(x => ({ ...x, outreachDate: v }))} type="date"/></Fld>
      </div>
      <Fld label="Pitch"><TA value={d.pitch} onChange={v => setD(x => ({ ...x, pitch: v }))} rows={2}/></Fld>
      <Fld label="Status"><Sel value={d.status} onChange={v => setD(x => ({ ...x, status: v }))} options={["Not Contacted","Outreach Sent","Responded","Call Scheduled","Proposal Sent","Converted","Not Interested"]}/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── KEY DATES ─────────────────────────────────────────────────────────────────
export function ManageDatesModal({ keyDates, setKeyDates, onClose }) {
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const cats = ["us_holiday","latino","nightlife","arabic","wellness","real_estate","creator","fun"];
  const filtered = keyDates.filter(kd => !search || kd.name.toLowerCase().includes(search.toLowerCase()));
  const saveDate = d => {
    if (d.id) setKeyDates(p => p.map(x => x.id === d.id ? d : x));
    else setKeyDates(p => [...p, { ...d, id: "kd_" + Date.now() }]);
    setEditing(null);
  };
  return (
    <Modal title="Manage Key Dates & Holidays" onClose={onClose} wide>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." style={{ border:"1px solid #ddd", borderRadius:8, padding:"6px 11px", fontSize:13, outline:"none", width:200 }}/>
        <PBtn small onClick={() => setEditing({ id:null, name:"", month:1, day:1, category:"fun", clients:[] })}>+ Add Date</PBtn>
      </div>
      <div style={{ maxHeight:"50vh", overflowY:"auto" }}>
        <table style={{ borderCollapse:"collapse", width:"100%" }}>
          <thead><tr><TH>Date</TH><TH>Name</TH><TH>Category</TH><TH></TH></tr></thead>
          <tbody>{[...filtered].sort((a,b) => a.month - b.month || a.day - b.day).map(kd =>
            <tr key={kd.id}>
              <TD style={{ color:"#888", whiteSpace:"nowrap" }}>{MONTHS[kd.month-1].slice(0,3)} {kd.day}</TD>
              <TD style={{ fontWeight:500 }}>{kd.name}</TD>
              <TD><Pill text={kd.category.replace(/_/g," ")} color={CAT_C[kd.category]||"#888"}/></TD>
              <TD><div style={{ display:"flex", gap:5 }}>
                <button onClick={() => setEditing(kd)} style={{ background:"#fff", border:"1px solid #ddd", borderRadius:6, padding:"2px 8px", fontSize:10, cursor:"pointer" }}>Edit</button>
                <button onClick={() => setKeyDates(p => p.filter(x => x.id !== kd.id))} style={{ background:"#fff", border:"1px solid #ddd", borderRadius:6, padding:"2px 8px", fontSize:10, cursor:"pointer", color:"#dc2626" }}>×</button>
              </div></TD>
            </tr>
          )}</tbody>
        </table>
      </div>
      {editing !== null && <EditDateModal date={editing} onSave={saveDate} onClose={() => setEditing(null)} cats={cats}/>}
    </Modal>
  );
}

export function EditDateModal({ date, onSave, onClose, cats }) {
  const [d, setD] = useState(date);
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.4)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:14, padding:22, width:380, boxShadow:"0 8px 32px rgba(0,0,0,.2)" }}>
        <div style={{ fontSize:14, fontWeight:700, color:B.pink, marginBottom:14 }}>{d.id ? "Edit Date" : "Add New Date"}</div>
        <Fld label="Name *"><Inp value={d.name} onChange={v => setD(x => ({ ...x, name: v }))}/></Fld>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          <Fld label="Month"><Sel value={String(d.month)} onChange={v => setD(x => ({ ...x, month: +v }))} options={MONTHS.map((m,i) => [(i+1).toString(), m])}/></Fld>
          <Fld label="Day"><Inp value={String(d.day)} onChange={v => setD(x => ({ ...x, day: +v }))} type="number"/></Fld>
        </div>
        <Fld label="Category"><Sel value={d.category} onChange={v => setD(x => ({ ...x, category: v }))} options={cats.map(c => [c, c.replace(/_/g," ")])}/></Fld>
        <div style={{ display:"flex", gap:7, marginTop:14 }}><PBtn onClick={() => onSave(d)}>Save</PBtn><PBtn outline onClick={onClose}>Cancel</PBtn></div>
      </div>
    </div>
  );
}

// ── EVENTS — shared between manager dashboard and client Events tab ───────────
// Pass clientId to scope to one client. Omit for the full cross-client view.
export function ManageEventsModal({ events, setEvents, clients, clientId, onClose }) {
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const relevant = clientId ? events.filter(e => e.clientId === clientId) : events;
  const filtered = [...relevant]
    .filter(e => !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.venue?.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.date.localeCompare(b.date));
  const saveEv = ev => {
    if (ev.id) setEvents(p => p.map(x => x.id === ev.id ? ev : x));
    else setEvents(p => [...p, { ...ev, id: Date.now(), clientId: clientId || ev.clientId }]);
    setEditing(null);
  };
  return (
    <Modal title={clientId ? "Manage Events" : "Manage All Client Events"} onClose={onClose} wide>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search events..." style={{ border:"1px solid #ddd", borderRadius:8, padding:"6px 11px", fontSize:13, outline:"none", width:200 }}/>
        <PBtn small onClick={() => setEditing({ id:null, name:"", date:"", venue:"", clientId: clientId||"" })}>+ Add Event</PBtn>
      </div>
      <div style={{ maxHeight:"50vh", overflowY:"auto" }}>
        {filtered.length === 0
          ? <div style={{ textAlign:"center", padding:24, color:"#ccc", fontSize:13 }}>No events yet. Click + Add Event to get started.</div>
          : <table style={{ borderCollapse:"collapse", width:"100%" }}>
              <thead><tr><TH>Date</TH><TH>Event</TH><TH>Venue</TH>{!clientId && <TH>Client</TH>}<TH></TH></tr></thead>
              <tbody>{filtered.map(ev => {
                const cl = clients?.find(c => c.id === ev.clientId);
                return (
                  <tr key={ev.id}>
                    <TD style={{ color:"#888", whiteSpace:"nowrap" }}>{fmt(ev.date)}</TD>
                    <TD style={{ fontWeight:500 }}>{ev.name}</TD>
                    <TD style={{ color:"#bbb" }}>{ev.venue || "—"}</TD>
                    {!clientId && <TD>{cl ? <span>{cl.emoji} {cl.name}</span> : "—"}</TD>}
                    <TD><div style={{ display:"flex", gap:5 }}>
                      <button onClick={() => setEditing(ev)} style={{ background:"#fff", border:"1px solid #ddd", borderRadius:6, padding:"2px 8px", fontSize:10, cursor:"pointer" }}>Edit</button>
                      <button onClick={() => setEvents(p => p.filter(x => x.id !== ev.id))} style={{ background:"#fff", border:"1px solid #ddd", borderRadius:6, padding:"2px 8px", fontSize:10, cursor:"pointer", color:"#dc2626" }}>×</button>
                    </div></TD>
                  </tr>
                );
              })}</tbody>
            </table>
        }
      </div>
      {editing !== null && <EditEventInline event={editing} clients={clients} clientId={clientId} onSave={saveEv} onClose={() => setEditing(null)}/>}
    </Modal>
  );
}

export function EditEventInline({ event, clients, clientId, onSave, onClose }) {
  const [d, setD] = useState(event || { name:"", date:"", venue:"", clientId: clientId||"" });
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.4)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:14, padding:22, width:380, boxShadow:"0 8px 32px rgba(0,0,0,.2)" }}>
        <div style={{ fontSize:14, fontWeight:700, color:B.pink, marginBottom:14 }}>{d.id ? "Edit Event" : "Add Event"}</div>
        <Fld label="Event Name *"><Inp value={d.name} onChange={v => setD(x => ({ ...x, name: v }))}/></Fld>
        <Fld label="Date *"><Inp value={d.date} onChange={v => setD(x => ({ ...x, date: v }))} type="date"/></Fld>
        <Fld label="Venue"><Inp value={d.venue} onChange={v => setD(x => ({ ...x, venue: v }))} placeholder="TBD"/></Fld>
        {!clientId && <Fld label="Client"><Sel value={d.clientId} onChange={v => setD(x => ({ ...x, clientId: v }))} options={(clients||[]).map(c => [c.id, `${c.emoji} ${c.name}`])}/></Fld>}
        <div style={{ display:"flex", gap:7, marginTop:14 }}>
          <PBtn onClick={() => { if (!d.name || !d.date) return; onSave(d); }}>Save</PBtn>
          <PBtn outline onClick={onClose}>Cancel</PBtn>
        </div>
      </div>
    </div>
  );
}

// ── CALL NOTES PER CLIENT ─────────────────────────────────────────────────────
export function NoteModal({ client, existing, suggestions, onSave, onClose }) {
  const emptyAI = { task:"", assignedTo:"", dueDate:"", status:"Not Started", priority:"Normal" };
  const [d, setD] = useState(existing || { date: today(), callType:"Client Check-In", attendees:"", summary:"", actionItems:[{ ...emptyAI }] });
  const addAI  = () => setD(x => ({ ...x, actionItems: [...(x.actionItems||[]), { ...emptyAI }] }));
  const updAI  = (i, f, v) => setD(x => ({ ...x, actionItems: x.actionItems.map((ai, j) => j === i ? { ...ai, [f]: v } : ai) }));
  const remAI  = i => setD(x => ({ ...x, actionItems: x.actionItems.filter((_, j) => j !== i) }));
  return (
    <Modal title={existing ? "Edit Call Note" : "New Call Note"} onClose={onClose} wide>
      <div style={{ maxHeight:"70vh", overflowY:"auto", paddingRight:4 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
          <Fld label="Date *"><Inp value={d.date} onChange={v => setD(x => ({ ...x, date: v }))} type="date"/></Fld>
          <Fld label="Call Type"><Sel value={d.callType} onChange={v => setD(x => ({ ...x, callType: v }))} options={CALL_TYPES}/></Fld>
          <Fld label="Attendees" style={{ gridColumn:"1 / -1" }}><Inp value={d.attendees} onChange={v => setD(x => ({ ...x, attendees: v }))} placeholder="e.g. Cindy, Paulina"/></Fld>
        </div>
        <Fld label="Call Summary"><TA value={d.summary} onChange={v => setD(x => ({ ...x, summary: v }))} rows={4} placeholder="What was discussed, decisions made, key takeaways..."/></Fld>
        <div style={{ fontSize:12, fontWeight:700, color:"#333", marginBottom:8, marginTop:4 }}>
          Action Items <span style={{ fontSize:10, color:"#bbb", fontWeight:400 }}>— added to To-Do list automatically</span>
        </div>
        {(d.actionItems||[]).map((ai, i) => (
          <div key={i} style={{ background:"#f9f9f9", borderRadius:10, padding:12, marginBottom:8, border:"1px solid #f0f0f0" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div style={{ fontSize:10, color:"#aaa", fontWeight:600 }}>Action Item {i+1}</div>
              <button onClick={() => remAI(i)} style={{ background:"none", border:"none", cursor:"pointer", color:"#ccc", fontSize:16 }}>×</button>
            </div>
            <Fld label="Task *"><Inp value={ai.task} onChange={v => updAI(i,"task",v)} placeholder="What needs to happen?"/></Fld>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8 }}>
              <Fld label="Assigned To"><AssignedToInput value={ai.assignedTo} onChange={v => updAI(i,"assignedTo",v)} suggestions={suggestions}/></Fld>
              <Fld label="Due Date"><Inp value={ai.dueDate} onChange={v => updAI(i,"dueDate",v)} type="date"/></Fld>
              <Fld label="Status"><Sel value={ai.status||"Not Started"} onChange={v => updAI(i,"status",v)} options={TASK_STATUSES}/></Fld>
            </div>
          </div>
        ))}
        <button onClick={addAI} style={{ background:"none", border:`1px dashed ${B.pb}`, borderRadius:8, padding:"7px 14px", fontSize:12, color:B.pink, cursor:"pointer", width:"100%", marginBottom:8 }}>+ Add Action Item</button>
      </div>
      <div style={{ display:"flex", gap:7, marginTop:14, paddingTop:14, borderTop:"1px solid #f5f5f5" }}>
        <PBtn onClick={() => onSave(d)}>Save Note</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
      </div>
    </Modal>
  );
}

// ── TO-DO ─────────────────────────────────────────────────────────────────────
export function TodoModal({ existing, suggestions, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { task:"", assignedTo:"", dueDate:"", status:"Not Started", priority:"Normal", notes:"" });
  return (
    <Modal title={existing ? "Edit Task" : "Add Task"} onClose={onClose}>
      <Fld label="Task *"><Inp value={d.task} onChange={v => setD(x => ({ ...x, task: v }))} placeholder="What needs to happen?"/></Fld>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        <Fld label="Assigned To"><AssignedToInput value={d.assignedTo} onChange={v => setD(x => ({ ...x, assignedTo: v }))} suggestions={suggestions}/></Fld>
        <Fld label="Due Date"><Inp value={d.dueDate} onChange={v => setD(x => ({ ...x, dueDate: v }))} type="date"/></Fld>
        <Fld label="Status"><Sel value={d.status} onChange={v => setD(x => ({ ...x, status: v }))} options={TASK_STATUSES}/></Fld>
        <Fld label="Priority"><Sel value={d.priority} onChange={v => setD(x => ({ ...x, priority: v }))} options={TASK_PRIORITIES}/></Fld>
      </div>
      <Fld label="Notes"><TA value={d.notes} onChange={v => setD(x => ({ ...x, notes: v }))} rows={2} placeholder="Optional context..."/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── POSTS ─────────────────────────────────────────────────────────────────────
export function PostModal({ client, existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { title:"", date:"", caption:"", format:"Reel", status:"Not Started", pillarTag:"", postedBy:"Cindy", isStory:false, notes:"" });
  const pillars = client.strategy?.pillars || [];
  return (
    <Modal title={existing ? "Edit Post" : "New Post"} onClose={onClose}>
      <Fld label="Post Title *"><Inp value={d.title} onChange={v => setD(x => ({ ...x, title: v }))} placeholder="Post title / summary"/></Fld>
      <Fld label="Date *"><Inp value={d.date} onChange={v => setD(x => ({ ...x, date: v }))} type="date"/></Fld>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        <Fld label="Format"><Sel value={d.format} onChange={v => setD(x => ({ ...x, format: v }))} options={["Reel","TikTok","IG Story","Carousel","Reel + TikTok","Static Post","Custom"]}/></Fld>
        <Fld label="Status"><Sel value={d.status} onChange={v => setD(x => ({ ...x, status: v }))} options={["Not Started","In Progress","Drafted","In Review","Scheduled","Posted","Needs Revision"]}/></Fld>
      </div>
      <Fld label="Content Pillar"><Sel value={d.pillarTag||""} onChange={v => setD(x => ({ ...x, pillarTag: v }))} options={["No pillar", ...pillars]}/></Fld>
      <Fld label="Posted By"><Sel value={d.postedBy||"Cindy"} onChange={v => setD(x => ({ ...x, postedBy: v }))} options={["Cindy","Moni","Scheduled","Guest"]}/></Fld>
      <label style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, marginBottom:10, cursor:"pointer" }}>
        <input type="checkbox" checked={d.isStory||false} onChange={e => setD(x => ({ ...x, isStory: e.target.checked }))}/>
        This is a Story
      </label>
      <Fld label="Caption"><TA value={d.caption} onChange={v => setD(x => ({ ...x, caption: v }))} rows={3}/></Fld>
      <Fld label="Notes"><Inp value={d.notes} onChange={v => setD(x => ({ ...x, notes: v }))} placeholder="Internal notes"/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave({ ...d })}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── ANALYTICS ────────────────────────────────────────────────────────────────
export function AddAnalyticsModal({ onSave, onClose }) {
  const now = new Date();
  const [d, setD] = useState({ month: ["January","February","March","April","May","June","July","August","September","October","November","December"][now.getMonth()], year: now.getFullYear(), ig_views:"", ig_interactions:"", ig_net_followers:"", tt_views:"", tt_shares:"", tt_net:"" });
  return (
    <Modal title="New Monthly Report" onClose={onClose}>
      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
        <Sel value={d.month} onChange={v => setD(x => ({ ...x, month: v }))} options={["January","February","March","April","May","June","July","August","September","October","November","December"]}/>
        <input type="number" value={d.year} onChange={e => setD(x => ({ ...x, year: +e.target.value }))} style={{ width:90, border:"1px solid #ddd", borderRadius:8, padding:"7px 11px", fontSize:13, outline:"none" }}/>
      </div>
      {[["📷 Instagram", [["ig_views","Views"],["ig_interactions","Interactions"],["ig_net_followers","Net Followers"]]],
        ["🎵 TikTok",    [["tt_views","Post Views"],["tt_shares","Shares"],["tt_net","Net Followers"]]]].map(([sec, metrics]) => (
        <div key={sec} style={{ marginBottom:12 }}>
          <div style={{ fontSize:10, color:B.pink, fontWeight:600, textTransform:"uppercase", marginBottom:7 }}>{sec}</div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {metrics.map(([f,l]) => (
              <div key={f} style={{ flex:1, minWidth:90 }}>
                <div style={{ fontSize:10, color:"#bbb", marginBottom:3 }}>{l}</div>
                <input type="number" value={d[f]} onChange={e => setD(x => ({ ...x, [f]: e.target.value }))} style={{ width:"100%", border:"1px solid #ddd", borderRadius:8, padding:"6px 10px", fontSize:13, outline:"none" }}/>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ display:"flex", gap:7, marginTop:4 }}><PBtn onClick={() => onSave(d)}>Save Report</PBtn><PBtn outline onClick={onClose}>Cancel</PBtn></div>
    </Modal>
  );
}

// ── AMBASSADORS ───────────────────────────────────────────────────────────────
export function AmbModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { name:"", ig:"", tiktok:"", birthday:"", code:"", tier:"Mensual", notes:"" });
  return (
    <Modal title={existing ? "Edit Ambassador" : "Add Ambassador"} onClose={onClose}>
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {[["Full Name *","name"],["Instagram","ig"],["TikTok","tiktok"],["Birthday (MM/DD)","birthday"],["Discount Code","code"]].map(([l,f]) =>
          <Fld key={f} label={l}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))}/></Fld>
        )}
        <Fld label="Tier"><Sel value={d.tier} onChange={v => setD(x => ({ ...x, tier: v }))} options={["Semanal","Mensual"]}/></Fld>
      </div>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── CREATORS ─────────────────────────────────────────────────────────────────
export function CreatorModal({ existing, currentClientId, allClients, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { name:"", ig:"", tiktok:"", email:"", phone:"", city:"Chicago", rate:"", lastEvent:"", status:"Not Contacted", tag:"Micro", paidOnly:false, openEvents:true, openCollabs:true, wouldWorkAgain:true, notes:"", clientIds:[currentClientId||"cne"] });
  const toggleClient = id => setD(x => ({ ...x, clientIds: x.clientIds?.includes(id) ? x.clientIds.filter(c => c !== id) : [...(x.clientIds||[]), id] }));
  return (
    <Modal title={existing ? "Edit Creator" : "Add Creator"} onClose={onClose} wide>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
        {[["name","Name *"],["ig","Instagram"],["tiktok","TikTok"],["email","Email"],["phone","Phone"],["city","City"],["rate","Rate"],["lastEvent","Last Event"]].map(([f,p]) =>
          <Fld key={f}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))} placeholder={p}/></Fld>
        )}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:8 }}>
        <Fld label="Status"><Sel value={d.status} onChange={v => setD(x => ({ ...x, status: v }))} options={["Not Contacted","Outreach","In Progress","Confirmed","Declined"]}/></Fld>
        <Fld label="Tag"><Sel value={d.tag} onChange={v => setD(x => ({ ...x, tag: v }))} options={["Micro","Mid","Large","VIP"]}/></Fld>
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:10 }}>
        {[["paidOnly","Paid Only"],["openEvents","Open to Events"],["openCollabs","Open to Collabs"],["wouldWorkAgain","Would Work Again"]].map(([f,l]) =>
          <label key={f} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, cursor:"pointer" }}>
            <input type="checkbox" checked={d[f]||false} onChange={e => setD(x => ({ ...x, [f]: e.target.checked }))}/>{l}
          </label>
        )}
      </div>
      <Fld label="Associated Clients">
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {allClients.map(c => (
            <label key={c.id} style={{ display:"flex", alignItems:"center", gap:4, background:(d.clientIds||[]).includes(c.id)?B.pl:"#f5f5f5", border:`1px solid ${(d.clientIds||[]).includes(c.id)?B.pb:"#e8e8e8"}`, borderRadius:7, padding:"4px 9px", fontSize:11, cursor:"pointer" }}>
              <input type="checkbox" checked={(d.clientIds||[]).includes(c.id)} onChange={() => toggleClient(c.id)} style={{ display:"none" }}/>{c.name}
            </label>
          ))}
        </div>
      </Fld>
      <Fld label="Notes"><TA value={d.notes} onChange={v => setD(x => ({ ...x, notes: v }))} rows={2}/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── SPONSORSHIP ───────────────────────────────────────────────────────────────
export function PipelineModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { company:"", contactName:"", ig:"", email:"", phone:"", bizType:"", eventName:"", eventDate:"", sponsorType:"", targetAmount:"", assignedTo:"", status:"Not Contacted", notes:"" });
  return (
    <Modal title={existing ? "Edit Pipeline Sponsor" : "Add Pipeline Sponsor"} onClose={onClose} wide>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
        {[["company","Company *"],["contactName","Contact Name"],["ig","Instagram"],["email","Email"],["phone","Phone"],["bizType","Business Type"],["eventName","Event Name"],["sponsorType","Sponsor Type"],["targetAmount","Target Amount ($)"],["assignedTo","Assigned To"]].map(([f,p]) =>
          <Fld key={f}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))} placeholder={p}/></Fld>
        )}
        <Fld label="Event Date"><Inp value={d.eventDate} onChange={v => setD(x => ({ ...x, eventDate: v }))} type="date"/></Fld>
      </div>
      <Fld label="Status"><Sel value={d.status} onChange={v => setD(x => ({ ...x, status: v }))} options={["Not Contacted","Outreach Sent","In Talks","Proposal Sent","Confirmed","Declined"]}/></Fld>
      <Fld label="Notes"><TA value={d.notes} onChange={v => setD(x => ({ ...x, notes: v }))} rows={2}/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

export function ConfirmedModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { company:"", event:"", sponsorType:"", amount:"", contractSigned:false, invoiceSent:false, paid:false, deliverablesPromised:"", deliverablesCompleted:false, recapSent:false, notes:"" });
  return (
    <Modal title={existing ? "Edit Confirmed Sponsor" : "Add Confirmed Sponsor"} onClose={onClose}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
        {[["company","Company *"],["event","Event"],["sponsorType","Sponsor Type"],["amount","Amount ($)"]].map(([f,p]) =>
          <Fld key={f}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))} placeholder={p}/></Fld>
        )}
      </div>
      <Fld label="Deliverables Promised"><Inp value={d.deliverablesPromised} onChange={v => setD(x => ({ ...x, deliverablesPromised: v }))} placeholder="e.g. 2 IG posts, logo on flyer, table"/></Fld>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", margin:"8px 0" }}>
        {[["contractSigned","Contract Signed"],["invoiceSent","Invoice Sent"],["paid","Paid"],["deliverablesCompleted","Deliverables Done"],["recapSent","Recap Sent"]].map(([f,l]) =>
          <label key={f} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, cursor:"pointer" }}>
            <input type="checkbox" checked={d[f]||false} onChange={e => setD(x => ({ ...x, [f]: e.target.checked }))}/>{l}
          </label>
        )}
      </div>
      <Fld label="Notes"><TA value={d.notes} onChange={v => setD(x => ({ ...x, notes: v }))} rows={2}/></Fld>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

export function MamiModal({ existing, onSave, onDelete, onClose }) {
  const [d, setD] = useState(existing || { company:"", contact:"", type:"Prospect", tier:"Gold", amount:"", contractSigned:false, invoiceSent:false, paid:false, notes:"" });
  return (
    <Modal title={existing ? "Edit Sponsor" : "Add Sponsor"} onClose={onClose}>
      <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
        {[["company","Company *"],["contact","Contact"],["amount","Amount ($)"]].map(([f,p]) =>
          <Fld key={f}><Inp value={d[f]} onChange={v => setD(x => ({ ...x, [f]: v }))} placeholder={p}/></Fld>
        )}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:8 }}>
        <Sel value={d.type} onChange={v => setD(x => ({ ...x, type: v }))} options={["Prospect","In Talks","Confirmed","In-Kind","Declined"]}/>
        <Sel value={d.tier} onChange={v => setD(x => ({ ...x, tier: v }))} options={["Platinum","Sapphire","Gold","Silver"]}/>
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:10 }}>
        {[["contractSigned","Contract Signed"],["invoiceSent","Invoice Sent"],["paid","Paid"]].map(([f,l]) =>
          <label key={f} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, cursor:"pointer" }}>
            <input type="checkbox" checked={d[f]||false} onChange={e => setD(x => ({ ...x, [f]: e.target.checked }))}/>{l}
          </label>
        )}
      </div>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => onSave(d)}>Save</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
        {onDelete && <button onClick={onDelete} style={{ marginLeft:"auto", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer", color:"#dc2626" }}>Delete</button>}
      </div>
    </Modal>
  );
}

// ── ADD CLIENT ────────────────────────────────────────────────────────────────
export function AddClientModal({ onSave, onClose }) {
  const [d, setD] = useState({ id:"", name:"", handle:"", emoji:"🌟", poc:"", clientType:"social", postDays:[], storiesPerWeek:3, requiresApproval:false, paymentMethod:"Zelle", scopeOfWork:"", retainerRate:"", billingCycle:"Monthly", paymentDueDate:"", contractUrl:"", tabs:null, strategy:{ overview:"", pillars:[], voice:"", postingRhythm:"" } });
  const ct = d.clientType || "social";
  return (
    <Modal title="Add New Client" onClose={onClose} wide>
      <div style={{ display:"flex", flexDirection:"column", gap:9, maxHeight:"60vh", overflowY:"auto", paddingRight:4 }}>
        <Fld label="Client ID (no spaces, lowercase)"><Inp value={d.id} onChange={v => setD(x => ({ ...x, id: v.toLowerCase().replace(/\s/g,"") }))} placeholder="e.g. newclient"/></Fld>
        <div style={{ display:"grid", gridTemplateColumns:"60px 1fr", gap:8 }}>
          <Fld label="Emoji"><Inp value={d.emoji} onChange={v => setD(x => ({ ...x, emoji: v }))}/></Fld>
          <Fld label="Name *"><Inp value={d.name} onChange={v => setD(x => ({ ...x, name: v }))}/></Fld>
        </div>
        <Fld label="Instagram Handle"><Inp value={d.handle} onChange={v => setD(x => ({ ...x, handle: v }))} placeholder="@handle"/></Fld>
        <Fld label="Point of Contact (first name)"><Inp value={d.poc} onChange={v => setD(x => ({ ...x, poc: v }))}/></Fld>
        <Fld label="Client Type"><Sel value={d.clientType} onChange={v => setD(x => ({ ...x, clientType: v, tabs: { ...DEFAULT_TABS[v] } }))} options={CLIENT_TYPES.map(t => [t, CLIENT_TYPE_LABELS[t]])}/></Fld>
        <Fld label="Scope of Work"><Inp value={d.scopeOfWork} onChange={v => setD(x => ({ ...x, scopeOfWork: v }))}/></Fld>
        <Fld label="Retainer Rate"><Inp value={d.retainerRate} onChange={v => setD(x => ({ ...x, retainerRate: v }))} placeholder="$X/month"/></Fld>
        <Fld label="Payment Method"><Sel value={d.paymentMethod} onChange={v => setD(x => ({ ...x, paymentMethod: v }))} options={["Zelle","PayPal","Venmo","ACH","Check","Other","N/A"]}/></Fld>
        <Fld label="Contract URL"><Inp value={d.contractUrl} onChange={v => setD(x => ({ ...x, contractUrl: v }))} placeholder="https://"/></Fld>
        <Fld label="Strategy Overview"><TA value={d.strategy?.overview||""} onChange={v => setD(x => ({ ...x, strategy: { ...x.strategy, overview: v } }))} rows={2}/></Fld>
        <Fld label="Pillars (comma-separated)"><Inp value={(d.strategy?.pillars||[]).join(",")} onChange={v => setD(x => ({ ...x, strategy: { ...x.strategy, pillars: v.split(",").map(p => p.trim()).filter(Boolean) } }))} placeholder="Pillar 1, Pillar 2"/></Fld>
        <label style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, cursor:"pointer" }}>
          <input type="checkbox" checked={d.requiresApproval||false} onChange={e => setD(x => ({ ...x, requiresApproval: e.target.checked }))}/>
          Requires post approval
        </label>
        <div style={{ background:B.pl, border:`1px solid ${B.pb}`, borderRadius:10, padding:"8px 12px", fontSize:11, color:B.pink }}>
          Default tabs for <strong>{CLIENT_TYPE_LABELS[ct]}</strong> will be applied. Customize in ⚙️ Settings after adding.
        </div>
      </div>
      <div style={{ display:"flex", gap:7, marginTop:14 }}>
        <PBtn onClick={() => { if (!d.id || !d.name) return; onSave({ ...d, tabs: d.tabs || { ...DEFAULT_TABS[ct] } }); }}>Add Client</PBtn>
        <PBtn outline onClick={onClose}>Cancel</PBtn>
      </div>
    </Modal>
  );
}
