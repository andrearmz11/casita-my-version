// ── App.jsx — Casita v9 ─────────────────────────────────────────────────────
// Root component. Manages all global state and routes between views.
// All localStorage keys use "c9_" prefix to avoid conflicts with older builds.
//
// KEY RULES (do not remove):
// 1. Moni's role is Poderosa-only — ROLES.moni.clients = ["poderosa"]
// 2. AssignedTo suggestions: clientSuggestions(client, role) — Moni only appears for Poderosa
// 3. No useState inside IIFEs or callbacks — all modals are named top-level components
// 4. DEFAULT_TABS drives which tabs are visible; manager can override per-client via SettingsTab

import { useState, useEffect } from "react";
import {
  db, CLIENTS_DEFAULT, CREATORS_DEFAULT, AMBASSADORS_DEFAULT,
  EVENTS_DEFAULT, KEY_DATES_DEFAULT, PW_DEFAULT, ROLES, DEFAULT_TABS,
  isSocial, isOwn, isSponsor, clientSuggestions, todayStr, getWkDates,
} from "./data";

// ── State initialization ──────────────────────────────────────────────────
export default function App() {
  const [role,         setRole]         = useState(null);
  const [selClient,    setSelClient]    = useState(null);
  const [tab,          setTab]          = useState(null);
  const [modal,        setModal]        = useState(null);
  const [preview,      setPreview]      = useState(false);
  const [sidebarOpen,  setSidebarOpen]  = useState(true);
  const [pwsVisible,   setPwsVisible]   = useState(false);
  const [evExp,        setEvExp]        = useState(false);
  const [hdExp,        setHdExp]        = useState(false);
  const [calYear,      setCalYear]      = useState(2026);
  const [calMonth,     setCalMonth]     = useState(new Date().getMonth());
  const [calView,      setCalView]      = useState("calendar");
  const [ambFilter,    setAmbFilter]    = useState("All");
  const [spTab,        setSpTab]        = useState("pipeline");
  const [show2025,     setShow2025]     = useState(false);

  // Persisted state
  const [passwords,    setPasswords]    = useState(() => db.get("pw",         {...PW_DEFAULT}));
  const [clients,      setClients]      = useState(() => db.get("clients",    CLIENTS_DEFAULT));
  const [posts,        setPosts]        = useState(() => { const s=db.get("posts",{}); CLIENTS_DEFAULT.forEach(c=>{if(!s[c.id])s[c.id]=[];}); return s; });
  const [analytics,    setAnalytics]    = useState(() => db.get("analytics",  {}));
  const [ambassadors,  setAmbassadors]  = useState(() => db.get("ambassadors",AMBASSADORS_DEFAULT));
  const [creators,     setCreators]     = useState(() => db.get("creators",   CREATORS_DEFAULT));
  const [pipeline,     setPipeline]     = useState(() => db.get("pipeline",   []));
  const [confirmed,    setConfirmed]    = useState(() => db.get("confirmed",  []));
  const [mamiSponsors, setMamiSponsors] = useState(() => db.get("mamiSponsors",[]));
  const [journeys,     setJourneys]     = useState(() => db.get("journeys",   {}));
  const [discoCalls,   setDiscoCalls]   = useState(() => db.get("discoCalls", []));
  const [outreach,     setOutreach]     = useState(() => db.get("outreach",   []));
  const [events,       setEvents]       = useState(() => db.get("events",     EVENTS_DEFAULT));
  const [hashtags,     setHashtags]     = useState(() => db.get("hashtags",   {}));
  const [actLog,       setActLog]       = useState(() => db.get("actLog",     {}));
  const [keyDates,     setKeyDates]     = useState(() => db.get("keyDates",   KEY_DATES_DEFAULT));
  const [welcomeMsgs,  setWelcomeMsgs]  = useState(() => db.get("welcomeMsgs",{}));
  const [questionnaires,setQuestionnaires]=useState(()=> db.get("questionnaires",{}));
  const [welcomeSeen,  setWelcomeSeen]  = useState(() => db.get("welcomeSeen",{}));
  const [callNotes,    setCallNotes]    = useState(() => db.get("callNotes",  {}));
  const [todos,        setTodos]        = useState(() => db.get("todos",      {}));

  // Persist everything
  useEffect(()=>{ db.set("pw",passwords); },          [passwords]);
  useEffect(()=>{ db.set("clients",clients); },        [clients]);
  useEffect(()=>{ db.set("posts",posts); },            [posts]);
  useEffect(()=>{ db.set("analytics",analytics); },   [analytics]);
  useEffect(()=>{ db.set("ambassadors",ambassadors); },[ambassadors]);
  useEffect(()=>{ db.set("creators",creators); },     [creators]);
  useEffect(()=>{ db.set("pipeline",pipeline); },     [pipeline]);
  useEffect(()=>{ db.set("confirmed",confirmed); },   [confirmed]);
  useEffect(()=>{ db.set("mamiSponsors",mamiSponsors); },[mamiSponsors]);
  useEffect(()=>{ db.set("journeys",journeys); },     [journeys]);
  useEffect(()=>{ db.set("discoCalls",discoCalls); }, [discoCalls]);
  useEffect(()=>{ db.set("outreach",outreach); },     [outreach]);
  useEffect(()=>{ db.set("events",events); },         [events]);
  useEffect(()=>{ db.set("hashtags",hashtags); },     [hashtags]);
  useEffect(()=>{ db.set("actLog",actLog); },         [actLog]);
  useEffect(()=>{ db.set("keyDates",keyDates); },     [keyDates]);
  useEffect(()=>{ db.set("welcomeMsgs",welcomeMsgs); },[welcomeMsgs]);
  useEffect(()=>{ db.set("questionnaires",questionnaires); },[questionnaires]);
  useEffect(()=>{ db.set("welcomeSeen",welcomeSeen); },[welcomeSeen]);
  useEffect(()=>{ db.set("callNotes",callNotes); },   [callNotes]);
  useEffect(()=>{ db.set("todos",todos); },           [todos]);

  // ── Helpers ─────────────────────────────────────────────────────────────
  const addLog = (cid, action) => setActLog(p => ({...p, [cid]: [{id:Date.now(),action,time:new Date().toISOString()}, ...(p[cid]||[])].slice(0,30)}));
  const savePost = (cid, pd) => {
    const isNew = !pd.id;
    setPosts(p => { const list=p[cid]||[]; return {...p,[cid]:isNew?[...list,{...pd,id:Date.now()}]:list.map(x=>x.id===pd.id?pd:x)}; });
    if (isNew) addLog(cid, "Post added: "+pd.title);
  };
  const delPost     = (cid, pid) => setPosts(p => ({...p,[cid]:(p[cid]||[]).filter(x=>x.id!==pid)}));
  const addTodo     = (cid, task) => setTodos(p => ({...p,[cid]:[...(p[cid]||[]),{...task,id:Date.now(),createdAt:new Date().toISOString()}]}));
  const updateTodo  = (cid, tid, changes) => setTodos(p => ({...p,[cid]:(p[cid]||[]).map(t=>t.id===tid?{...t,...changes}:t)}));
  const deleteTodo  = (cid, tid) => setTodos(p => ({...p,[cid]:(p[cid]||[]).filter(t=>t.id!==tid)}));
  const getDefTab   = c => { const j=journeys[c.id]||{}; return JOURNEY_STEPS.filter(s=>j[s.id]).length<JOURNEY_STEPS.length?"journey":"calendar"; };

  function selectClient(c, r) {
    const rr = r || role;
    setSelClient(c); setTab(getDefTab(c)); setCalMonth(new Date().getMonth()); setSidebarOpen(true);
    if (rr !== "manager" && !welcomeSeen[rr+"_"+c.id])
      setTimeout(() => setModal({type:"welcome", client:c}), 400);
  }

  // ── Role flags ───────────────────────────────────────────────────────────
  const isManager    = role === "manager";
  const isMoni       = role === "moni";       // Poderosa only
  const isVicSerg    = role === "vicSerg";
  const isSponsorOnly= role === "cneSponsorship";
  const roleClients  = isManager ? clients : clients.filter(c => (ROLES[role]?.clients||[]).includes(c.id));

  // ── Shared props bundle ──────────────────────────────────────────────────
  const sp = {
    clients,setClients,posts,setPosts,analytics,setAnalytics,
    ambassadors,setAmbassadors,creators,setCreators,pipeline,setPipeline,
    confirmed,setConfirmed,mamiSponsors,setMamiSponsors,show2025,setShow2025,
    journeys,setJourneys,discoCalls,setDiscoCalls,outreach,setOutreach,
    events,setEvents,hashtags,setHashtags,actLog,keyDates,setKeyDates,
    welcomeMsgs,setWelcomeMsgs,questionnaires,setQuestionnaires,
    callNotes,setCallNotes,todos,setTodos,
    calYear,setCalYear,calMonth,setCalMonth,calView,setCalView,
    ambFilter,setAmbFilter,spTab,setSpTab,modal,setModal,
    savePost,delPost,addLog,addTodo,updateTodo,deleteTodo,role,
  };

  if (!role) return <LoginScreen passwords={passwords} onLogin={r => { setRole(r); const rd=ROLES[r]; if(rd?.clients?.length===1){const c=clients.find(x=>x.id===rd.clients[0]);if(c)selectClient(c,r);} }}/>;

  return (
    <div style={{minHeight:"100vh", background:"#F7F7F7"}}>
      <AppHeader role={role} isManager={isManager} selClient={selClient} preview={preview}
        passwords={passwords} setPasswords={setPasswords} todos={todos}
        onBack={()=>{setSelClient(null);setPreview(false);setTab(null);}}
        onLogout={()=>{setRole(null);setSelClient(null);setPreview(false);setTab(null);}}
        onPreview={()=>setPreview(!preview)}/>

      {isSponsorOnly ? (
        <div style={{maxWidth:1100,margin:"0 auto",padding:"20px 16px"}}>
          <SponsorTracker pipeline={pipeline} confirmed={confirmed} setPipeline={setPipeline} setConfirmed={setConfirmed} spTab={spTab} setSpTab={setSpTab} canEdit modal={modal} setModal={setModal}/>
        </div>
      ) : selClient ? (
        <ClientLayout client={selClient} roleClients={roleClients} isManager={isManager&&!preview} isMoni={isMoni} isVicSerg={isVicSerg}
          tab={tab} setTab={setTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
          onSelect={selectClient} onHome={()=>{setSelClient(null);setTab(null);setPreview(false);}} {...sp}/>
      ) : isManager ? (
        <ManagerDash roleClients={roleClients} evExp={evExp} setEvExp={setEvExp} hdExp={hdExp} setHdExp={setHdExp}
          onSelect={selectClient} pwsVisible={pwsVisible} setPwsVisible={setPwsVisible} passwords={passwords}
          todos={todos} {...sp}/>
      ) : (
        <div style={{maxWidth:1100,margin:"0 auto",padding:"20px 16px"}}>
          {roleClients.length === 1
            ? <ClientLayout client={roleClients[0]} roleClients={roleClients} isManager={false} isMoni={isMoni} isVicSerg={isVicSerg}
                tab={tab||getDefTab(roleClients[0])} setTab={setTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
                onSelect={selectClient} onHome={()=>{}} {...sp}/>
            : <PortalGrid clients={roleClients} onSelect={selectClient}/>}
        </div>
      )}

      {modal?.type === "welcome" && (
        <WelcomeModal client={modal.client} welcomeMsgs={welcomeMsgs}
          onClose={()=>{setWelcomeSeen(p=>({...p,[role+"_"+modal.client.id]:true}));setModal(null);}}/>
      )}
    </div>
  );
}
