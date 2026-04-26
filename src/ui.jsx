// ── ui.jsx — Casita v9 shared UI primitives ──────────────────────────────
import { useState, useEffect, useRef } from "react";
import { B, ACTION_STATUS_C } from "./data";

export const Pill = ({text, color="#888"}) =>
  <span style={{borderRadius:20,padding:"2px 9px",fontSize:10,fontWeight:600,display:"inline-block",background:color+"18",border:`1px solid ${color}44`,color,whiteSpace:"nowrap"}}>{text}</span>;

export const Inp = ({value, onChange, placeholder="", type="text", disabled=false, style={}}) =>
  <input type={type} value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} disabled={disabled}
    style={{width:"100%",border:"1px solid #ddd",borderRadius:8,padding:"7px 11px",fontSize:13,outline:"none",background:disabled?"#f9f9f9":"#fff",...style}}/>;

export const TA = ({value, onChange, placeholder="", rows=3, disabled=false}) =>
  <textarea value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows} disabled={disabled}
    style={{width:"100%",border:"1px solid #ddd",borderRadius:8,padding:"7px 11px",fontSize:13,outline:"none",resize:"vertical",background:disabled?"#f9f9f9":"#fff"}}/>;

export const Sel = ({value, onChange, options, disabled=false}) =>
  <select value={value||""} onChange={e=>onChange(e.target.value)} disabled={disabled}
    style={{width:"100%",border:"1px solid #ddd",borderRadius:8,padding:"7px 11px",fontSize:13,outline:"none",background:"#fff"}}>
    {options.map(o => Array.isArray(o) ? <option key={o[0]} value={o[0]}>{o[1]}</option> : <option key={o}>{o}</option>)}
  </select>;

export const Fld = ({label, hint, children, style={}}) =>
  <div style={{marginBottom:10,...style}}>
    {label && <div style={{fontSize:10,color:"#aaa",fontWeight:600,textTransform:"uppercase",letterSpacing:.5,marginBottom:4}}>{label}</div>}
    {hint  && <div style={{fontSize:10,color:"#bbb",marginBottom:5,fontStyle:"italic"}}>{hint}</div>}
    {children}
  </div>;

export const PBtn = ({onClick, children, outline=false, danger=false, small=false, disabled=false, color}) =>
  <button disabled={disabled} onClick={onClick} style={{
    background: danger?"#fff":outline?"#fff":color||B.pink,
    color:      danger?"#dc2626":outline?"#555":"#fff",
    border:     danger?"1px solid #dc2626":outline?"1px solid #ddd":"none",
    borderRadius:8, padding:small?"4px 10px":"8px 16px", fontWeight:600, fontSize:small?11:13,
    cursor:disabled?"not-allowed":"pointer", opacity:disabled?.5:1, whiteSpace:"nowrap",
  }}>{children}</button>;

export const Modal = ({title, children, onClose, wide=false}) =>
  <div onClick={e=>{if(e.target===e.currentTarget)onClose();}}
    style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:300,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"24px 12px",overflowY:"auto"}}>
    <div style={{background:"#fff",borderRadius:14,padding:22,width:"100%",maxWidth:wide?720:520,margin:"auto",boxShadow:"0 8px 32px rgba(0,0,0,.15)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <div style={{fontSize:14,fontWeight:700,color:B.pink}}>{title}</div>
        <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:20,color:"#ccc",lineHeight:1}}>×</button>
      </div>
      {children}
    </div>
  </div>;

export const Card = ({children, style={}}) =>
  <div style={{background:"#fff",border:"1px solid #eee",borderRadius:12,padding:14,marginBottom:10,...style}}>{children}</div>;

export const CardLabel = ({text}) =>
  <div style={{fontSize:9,color:B.pink,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{text}</div>;

export const TH = ({children}) =>
  <th style={{textAlign:"left",padding:"7px 10px",color:"#aaa",fontSize:10,textTransform:"uppercase",letterSpacing:.5,borderBottom:"2px solid #f5f5f5",fontWeight:600,whiteSpace:"nowrap"}}>{children}</th>;

export const TD = ({children, style={}}) =>
  <td style={{padding:"7px 10px",fontSize:12,borderBottom:"1px solid #f9f9f9",...style}}>{children}</td>;

export const DB = ({ds}) => {
  const d = new Date(ds+"T12:00:00");
  return <div style={{textAlign:"center",minWidth:42,background:"#f9f9f9",borderRadius:8,padding:"3px 7px",border:"1px solid #eee",flexShrink:0}}>
    <div style={{fontSize:15,fontWeight:800,lineHeight:1}}>{d.getDate()}</div>
    <div style={{fontSize:8,color:"#aaa",textTransform:"uppercase"}}>
      {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()]}
    </div>
  </div>;
};

// AssignedToInput — free text + dropdown suggestions
// IMPORTANT: Moni only appears in suggestions when clientSuggestions() includes her
// (which only happens for Poderosa). This component itself is generic — the caller
// controls the suggestions array.
export function AssignedToInput({value, onChange, suggestions=[]}) {
  const [show, setShow] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setShow(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = suggestions.filter(s => !value || s.toLowerCase().includes(value.toLowerCase()));
  return <div ref={ref} style={{position:"relative"}}>
    <input value={value||""} onChange={e=>onChange(e.target.value)} onFocus={()=>setShow(true)}
      placeholder="Type a name..."
      style={{width:"100%",border:"1px solid #ddd",borderRadius:8,padding:"7px 11px",fontSize:13,outline:"none"}}/>
    {show && filtered.length > 0 && <div style={{position:"absolute",top:"100%",left:0,right:0,background:"#fff",border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,.1)",zIndex:50,marginTop:2}}>
      {filtered.map(s => <div key={s}
        onMouseDown={() => { onChange(s); setShow(false); }}
        style={{padding:"8px 12px",fontSize:13,cursor:"pointer",borderBottom:"1px solid #f5f5f5"}}
        onMouseEnter={e=>e.target.style.background="#f9f9f9"}
        onMouseLeave={e=>e.target.style.background="transparent"}>
        {s}
      </div>)}
    </div>}
  </div>;
}
