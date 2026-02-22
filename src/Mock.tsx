import { useState } from "react";

// ─── Icon Library ──────────────────────────────────────────────────────────
const Ic = ({ p, s = 20, c = "currentColor", f = "none", sw = 1.8, extra = "" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={f} stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={p} />{extra && <path d={extra} />}
  </svg>
);
const HeartFill = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const Bell = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const Home = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" stroke={c} strokeWidth={1.8} fill="none" /></svg>;
const Check = ({ s = 16, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2.2} strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>;
const AlertCircle = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2.5} /></svg>;
const Mic = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>;
const Users = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const Calendar = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const Activity = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
const MapPin = ({ s = 16, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const Pill = ({ s = 16, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><line x1="8.5" y1="8.5" x2="15.5" y2="15.5" /></svg>;
const Shield = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const Layers = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
const Settings = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
const Trending = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
const Grid = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;
const Clock = ({ s = 16, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const User = ({ s = 18, c = "currentColor" }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={1.8} strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;

// ─── Frames ────────────────────────────────────────────────────────────────
const PhoneFrame = ({ children, label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    {label && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "system-ui" }}>{label}</div>}
    <div style={{ width: 300, background: "#1C1C1E", borderRadius: 44, padding: "14px 10px", boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)", position: "relative" }}>
      <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 90, height: 26, background: "#1C1C1E", borderRadius: "0 0 16px 16px", zIndex: 10 }} />
      <div style={{ width: "100%", height: 580, borderRadius: 34, overflow: "hidden", background: "#fff" }}>{children}</div>
    </div>
  </div>
);

const BrowserFrame = ({ children, url, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {label && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "system-ui" }}>{label}</div>}
    <div style={{ background: "#1C1C1E", borderRadius: 12, boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)", overflow: "hidden" }}>
      <div style={{ background: "#2C2C2E", padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 5 }}>{["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}</div>
        <div style={{ flex: 1, background: "#3A3A3C", borderRadius: 5, padding: "3px 10px", fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "monospace", textAlign: "center", maxWidth: 360, margin: "0 auto" }}>🔒 {url}</div>
      </div>
      <div style={{ height: 520, overflow: "hidden" }}>{children}</div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// INDIA SCREENS
// ═══════════════════════════════════════════════════════════════════════════

const IndiaFamilyApp = ({ screen }) => {
  const G = "#1B4D3E"; const GA = "#2D7D5F"; const AMBER = "#D97706"; const AL = "#FEF3C7"; const CR = "#FAFAF8"; const RED = "#DC2626";
  if (screen === "emergency") return (
    <div style={{ height: "100%", background: "#FFF5F5", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", fontSize: 13 }}>
      <div style={{ background: RED, padding: "14px 16px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}><AlertCircle s={16} c="#fff" /><b style={{ fontSize: 13, letterSpacing: "0.04em" }}>EMERGENCY ALERT</b></div>
        <div style={{ fontSize: 11, opacity: 0.8 }}>Received 2 min ago · 11:42 AM IST</div>
      </div>
      <div style={{ flex: 1, padding: 14, overflow: "auto" }}>
        <div style={{ background: "#fff", borderRadius: 14, padding: 14, marginBottom: 12, border: "1px solid #FCA5A5" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 36 }}>👵</div>
            <div><div style={{ fontSize: 14, fontWeight: 700, color: RED }}>SOS — Sunita Sharma</div><div style={{ fontSize: 11, color: "#6B7280" }}>47 Baner Road, Pune</div></div>
          </div>
          <div style={{ background: "#FEF2F2", borderRadius: 8, padding: "8px 10px", marginBottom: 10, fontSize: 11, color: "#7F1D1D", lineHeight: 1.5 }}>
            <b>KarunaAI:</b> Fall detected via accelerometer. No check-in for 4 min. Confidence: 87%. Agency dispatched.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: RED, borderRadius: 8, padding: "9px", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>📞 Call Amma</div>
            <div style={{ flex: 1, background: "#FEF2F2", borderRadius: 8, padding: "9px", textAlign: "center", color: RED, fontSize: 12, fontWeight: 700 }}>📍 Track Live</div>
          </div>
        </div>
        {[
          { t: "11:42", l: "SOS triggered — Fall detected", d: true },
          { t: "11:42", l: "You notified (this alert)", d: true },
          { t: "11:43", l: "Sunrise Care dispatching Meena", d: true, a: true },
          { t: "11:55", l: "Caregiver arrival (estimated)", d: false },
        ].map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: e.d ? RED : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {e.d && <Check s={10} c="#fff" />}
              </div>
              {i < 3 && <div style={{ width: 2, height: 16, background: "#FCA5A5" }} />}
            </div>
            <div style={{ paddingTop: 1 }}>
              <div style={{ fontSize: 12, fontWeight: e.a ? 700 : 400, color: e.a ? RED : (e.d ? G : "#9CA3AF") }}>{e.l}</div>
              <div style={{ fontSize: 10, color: "#9CA3AF" }}>{e.t} IST</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ height: "100%", background: CR, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: G, padding: "10px 14px 10px", color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div><div style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.06em" }}>GOOD MORNING</div><div style={{ fontSize: 16, fontWeight: 800 }}>Priya ✦</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ position: "relative" }}><Bell s={18} c="#fff" /><div style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, background: AMBER, borderRadius: "50%", border: "1.5px solid "+G }} /></div>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#4CAF82", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>P</div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.11)", borderRadius: 14, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 2 }}>AMMA — PUNE, INDIA</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Sunita Sharma, 67</div>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}><div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF82", boxShadow: "0 0 0 3px rgba(76,175,130,0.3)" }} /><span style={{ fontSize: 11, color: "#A7F3D0" }}>Active 4 min ago</span></div>
            </div>
            <div style={{ textAlign: "right" }}><div style={{ fontSize: 24, fontWeight: 800 }}>92</div><div style={{ fontSize: 9, opacity: 0.6 }}>WELLNESS</div></div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px 0" }}>
        <div style={{ background: AL, borderLeft: "3px solid "+AMBER, borderRadius: "0 10px 10px 0", padding: "8px 10px", marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: AMBER, letterSpacing: "0.04em", marginBottom: 3 }}>✦ AI DAILY DIGEST</div>
          <div style={{ fontSize: 11, color: "#78350F", lineHeight: 1.5 }}>Great day — morning walk done, all meds confirmed, BP 118/76. Chatted with 2 neighbours on Neighborhood Circle.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginBottom: 12 }}>
          {[{ l: "BP", v: "118/76", u: "mmHg", c: GA }, { l: "Heart", v: "72", u: "bpm", c: "#0EA5E9" }, { l: "SpO₂", v: "98", u: "%", c: "#8B5CF6" }].map(v => (
            <div key={v.l} style={{ background: "#fff", borderRadius: 10, padding: "8px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 9, color: "#9CA3AF" }}>{v.l}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: v.c }}>{v.v}</div>
              <div style={{ fontSize: 8, color: "#9CA3AF" }}>{v.u}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: "10px", marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: G, marginBottom: 7 }}>MEDICATIONS TODAY</div>
          {[{ n: "Metformin 500mg", t: "8:00 AM", d: true }, { n: "Atorvastatin", t: "8:00 AM", d: true }, { n: "Amlodipine 5mg", t: "8:00 PM", d: false }].map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: i < 2 ? "1px solid #F3F4F6" : "none" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: m.d ? GA : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{m.d ? <Check s={10} c="#fff" /> : <Pill s={10} c="#9CA3AF" />}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11, color: m.d ? "#6B7280" : G, textDecoration: m.d ? "line-through" : "none" }}>{m.n}</div><div style={{ fontSize: 9, color: "#9CA3AF" }}>{m.t}</div></div>
              <div style={{ fontSize: 9, padding: "2px 6px", borderRadius: 20, background: m.d ? "#DCFCE7" : AL, color: m.d ? GA : AMBER }}>{m.d ? "Done" : "Pending"}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}><div style={{ fontSize: 10, fontWeight: 700, color: G }}>TODAY'S VISIT</div><div style={{ fontSize: 9, color: GA }}>Live ●</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ fontSize: 24 }}>👩</div>
            <div><div style={{ fontSize: 12, fontWeight: 600, color: G }}>Meena Deshpande</div><div style={{ fontSize: 10, color: "#6B7280" }}>Sunrise Care · Arriving 3:30 PM</div></div>
            <MapPin s={14} c={GA} />
          </div>
        </div>
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #F3F4F6", padding: "7px 0 4px", display: "flex", justifyContent: "space-around" }}>
        {[{ ic: <Home s={18} c={G} />, l: "Home", a: true }, { ic: <Activity s={18} c="#9CA3AF" />, l: "Health" }, { ic: <Users s={18} c="#9CA3AF" />, l: "Agency" }, { ic: <User s={18} c="#9CA3AF" />, l: "Profile" }].map((n, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{n.ic}<div style={{ fontSize: 9, color: n.a ? G : "#9CA3AF", fontWeight: n.a ? 700 : 400 }}>{n.l}</div>{n.a && <div style={{ width: 14, height: 2, background: G, borderRadius: 2 }} />}</div>
        ))}
      </div>
    </div>
  );
};

const IndiaSeniorApp = () => {
  const FOREST = "#2D5016"; const TERRA = "#C2643F"; const WARM = "#F5F0E8";
  return (
    <div style={{ height: "100%", background: WARM, fontFamily: "'Lora', serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: FOREST, padding: "14px 18px 18px", borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.07em" }}>शनिवार, 22 फ़रवरी</div><div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>नमस्ते,</div><div style={{ fontSize: 20, fontWeight: 700, color: "#A7F3D0" }}>सुनीता जी 🙏</div></div>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "5px 8px", textAlign: "center" }}><div style={{ fontSize: 20 }}>☀️</div><div style={{ fontSize: 9, color: "#A7F3D0" }}>सुबह</div></div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "8px 10px", fontSize: 12, color: "#E0F2FE", lineHeight: 1.5, fontStyle: "italic" }}>
          "आज मौसम अच्छा है। Priya का संदेश आया है।" — KarunaVoice
        </div>
      </div>
      <div style={{ flex: 1, padding: "14px 14px 0", overflow: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ width: 110, height: 110, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #E53E3E, #9B1C1C)", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(220,38,38,0.5), 0 0 0 7px rgba(220,38,38,0.12), 0 0 0 14px rgba(220,38,38,0.06)" }}>
            <div style={{ fontSize: 26 }}>🆘</div><div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginTop: 1 }}>मदद</div>
          </div>
          <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 7 }}>आपात स्थिति में दबाएं</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
          {[{ e: "✅", t: "मैं ठीक हूँ", s: "रिपोर्ट करें", bg: "#DCFCE7", tc: FOREST }, { e: "💊", t: "दवाई", s: "8 PM बाकी है", bg: "#FEF3C7", tc: "#78350F" }, { e: "📞", t: "Priya को कॉल", s: "परिवार", bg: "#EDE9FE", tc: "#4C1D95" }, { e: "🏘️", t: "पड़ोसी", s: "3 संदेश", bg: "#FFF7ED", tc: "#7C2D12" }].map((b, i) => (
            <div key={i} style={{ background: b.bg, borderRadius: 14, padding: "12px 10px", cursor: "pointer" }}>
              <div style={{ fontSize: 22, marginBottom: 3 }}>{b.e}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: b.tc }}>{b.t}</div>
              <div style={{ fontSize: 10, color: b.tc, opacity: 0.7 }}>{b.s}</div>
            </div>
          ))}
        </div>
        <div style={{ background: FOREST, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><Mic s={20} c="#A7F3D0" /></div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Karuna से बात करें</div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>"Karuna..." कहें</div></div>
        </div>
      </div>
      <div style={{ background: "#fff", borderTop: "2px solid #F3F4F6", padding: "9px 0 5px", display: "flex", justifyContent: "space-around" }}>
        {[{ e: "🏠", l: "होम", a: true }, { e: "❤️", l: "स्वास्थ्य" }, { e: "👥", l: "पड़ोस" }, { e: "👨‍👩‍👧", l: "परिवार" }].map((n, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><div style={{ fontSize: 18 }}>{n.e}</div><div style={{ fontSize: 9, color: n.a ? FOREST : "#9CA3AF", fontWeight: n.a ? 700 : 400 }}>{n.l}</div>{n.a && <div style={{ width: 18, height: 2.5, background: FOREST, borderRadius: 2 }} />}</div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// JAPAN SCREENS
// ═══════════════════════════════════════════════════════════════════════════

// Japan color palette — restrained, precise, omotenashi
const JP = {
  INDIGO: "#1A237E",       // deep indigo — authority, trust
  INDIGO_MID: "#283593",
  SAKURA: "#D4637A",       // muted sakura — warmth without loudness
  SAKURA_L: "#FCE4EC",
  SLATE: "#37474F",        // warm slate
  SNOW: "#FAFBFC",         // almost-white snow
  MISTY: "#ECEFF1",
  INK: "#263238",          // near-black ink
  JADE: "#00695C",         // subtle jade green
  JADE_L: "#E0F2F1",
  GOLD: "#B8860B",         // restrained gold
  RED: "#C62828",          // muted emergency red
};

const JapanFamilyApp = ({ screen }) => {
  if (screen === "disaster") return (
    <div style={{ height: "100%", background: "#FFF8E1", fontFamily: "'Noto Sans JP', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#E65100", padding: "12px 16px", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ fontSize: 20 }}>⚠️</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em" }}>DISASTER MODE — 地震速報</div>
            <div style={{ fontSize: 10, opacity: 0.8 }}>震度4 大阪府 · 2 min ago</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 14, overflow: "auto" }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: 14, marginBottom: 12, border: "1px solid #FFCC02" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: JP.INK, marginBottom: 8 }}>吉子さんの安否確認</div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 32 }}>👵</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: JP.INDIGO }}>田中吉子 · 大阪市</div>
              <div style={{ fontSize: 11, color: "#6B7280" }}>最終確認: 3分前 · 自宅</div>
            </div>
          </div>
          <div style={{ background: "#FFF9C4", borderRadius: 8, padding: "8px 10px", marginBottom: 10, fontSize: 11, color: "#5D4037", lineHeight: 1.6 }}>
            KarunaAI: 吉子さんはご自宅にいます。センサーで通常の動きを確認。緊急連絡不要の可能性が高いです（信頼度: 91%）
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1, background: JP.INDIGO, borderRadius: 8, padding: "9px", textAlign: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>📞 今すぐ電話</div>
            <div style={{ flex: 1, background: "#FFF8E1", borderRadius: 8, padding: "9px", textAlign: "center", color: "#E65100", fontSize: 12, fontWeight: 700 }}>📍 位置確認</div>
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: JP.INK, marginBottom: 8 }}>地震対応チェック</div>
          {[{ t: "自宅の安全確認", d: true }, { t: "訪問介護に連絡済み", d: true }, { t: "緊急連絡先へ通知", d: false }, { t: "避難所情報を送信", d: false }].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: i < 3 ? "1px solid #F3F4F6" : "none" }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, background: c.d ? JP.JADE : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {c.d && <Check s={10} c="#fff" />}
              </div>
              <div style={{ fontSize: 11, color: c.d ? "#9CA3AF" : JP.INK, textDecoration: c.d ? "line-through" : "none" }}>{c.t}</div>
            </div>
          ))}
        </div>
        <div style={{ background: JP.JADE, borderRadius: 10, padding: "10px 12px", color: "#fff" }}>
          <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4 }}>最寄りの避難所</div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>大阪市立西区民センター</div>
          <div style={{ fontSize: 10, opacity: 0.8 }}>吉子さんの自宅から 0.8 km · 定員450名</div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ height: "100%", background: JP.SNOW, fontFamily: "'Noto Sans JP', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: JP.INDIGO, padding: "10px 14px 12px", color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div><div style={{ fontSize: 10, opacity: 0.55, letterSpacing: "0.06em" }}>おはようございます</div><div style={{ fontSize: 15, fontWeight: 700 }}>田中 健二 さん</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ position: "relative" }}><Bell s={17} c="#fff" /><div style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, background: JP.SAKURA, borderRadius: "50%", border: "1.5px solid "+JP.INDIGO }} /></div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: JP.SAKURA, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>健</div>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, opacity: 0.55, marginBottom: 2 }}>お母さん — 大阪市</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>田中吉子、74歳</div>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#69F0AE" }} />
                <span style={{ fontSize: 10, color: "#B9F6CA" }}>5分前 · ご自宅</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}><div style={{ fontSize: 22, fontWeight: 800 }}>89</div><div style={{ fontSize: 9, opacity: 0.55 }}>健康スコア</div></div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px 0" }}>
        {/* AI digest — Japan style: more formal */}
        <div style={{ background: "#EDE7F6", borderLeft: "3px solid #7C4DFF", borderRadius: "0 10px 10px 0", padding: "8px 10px", marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#4527A0", letterSpacing: "0.04em", marginBottom: 3 }}>✦ KarunaAI レポート</div>
          <div style={{ fontSize: 11, color: "#311B92", lineHeight: 1.6 }}>吉子様は本日ご機嫌よく、朝のお散歩も完了されました。お薬の服用は全て確認済み。血圧 124/78。</div>
        </div>
        {/* Vitals */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, marginBottom: 12 }}>
          {[{ l: "血圧", v: "124/78", u: "mmHg", c: JP.JADE }, { l: "脈拍", v: "68", u: "bpm", c: "#0288D1" }, { l: "SpO₂", v: "97", u: "%", c: "#7B1FA2" }].map(v => (
            <div key={v.l} style={{ background: "#fff", borderRadius: 10, padding: "8px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 9, color: "#9CA3AF" }}>{v.l}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: v.c }}>{v.v}</div>
              <div style={{ fontSize: 8, color: "#9CA3AF" }}>{v.u}</div>
            </div>
          ))}
        </div>
        {/* Medications */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "10px", marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: JP.INK, marginBottom: 7 }}>お薬管理</div>
          {[{ n: "アムロジピン 5mg", t: "朝 8:00", d: true }, { n: "メトホルミン 500mg", t: "朝 8:00", d: true }, { n: "ロスバスタチン", t: "夜 20:00", d: false }].map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", borderBottom: i < 2 ? "1px solid #F3F4F6" : "none" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: m.d ? JP.JADE : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{m.d ? <Check s={10} c="#fff" /> : <Pill s={10} c="#9CA3AF" />}</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11, color: m.d ? "#9CA3AF" : JP.INK, textDecoration: m.d ? "line-through" : "none" }}>{m.n}</div><div style={{ fontSize: 9, color: "#9CA3AF" }}>{m.t}</div></div>
              <div style={{ fontSize: 9, padding: "2px 6px", borderRadius: 20, background: m.d ? JP.JADE_L : "#FFF9C4", color: m.d ? JP.JADE : "#F57F17" }}>{m.d ? "完了" : "未服用"}</div>
            </div>
          ))}
        </div>
        {/* Kaigo visit */}
        <div style={{ background: "#fff", borderRadius: 10, padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}><div style={{ fontSize: 10, fontWeight: 700, color: JP.INK }}>本日の訪問介護</div><div style={{ fontSize: 9, color: JP.JADE }}>追跡中 ●</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ fontSize: 22 }}>👩‍⚕️</div>
            <div><div style={{ fontSize: 12, fontWeight: 600, color: JP.INDIGO }}>山田美咲 介護士</div><div style={{ fontSize: 10, color: "#6B7280" }}>ABCケア大阪 · 14:00 訪問予定</div></div>
          </div>
        </div>
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #F3F4F6", padding: "7px 0 4px", display: "flex", justifyContent: "space-around" }}>
        {[{ ic: <Home s={17} c={JP.INDIGO} />, l: "ホーム", a: true }, { ic: <Activity s={17} c="#9CA3AF" />, l: "健康" }, { ic: <Users s={17} c="#9CA3AF" />, l: "介護" }, { ic: <User s={17} c="#9CA3AF" />, l: "設定" }].map((n, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{n.ic}<div style={{ fontSize: 9, color: n.a ? JP.INDIGO : "#9CA3AF", fontWeight: n.a ? 700 : 400 }}>{n.l}</div>{n.a && <div style={{ width: 14, height: 2, background: JP.INDIGO, borderRadius: 2 }} />}</div>
        ))}
      </div>
    </div>
  );
};

// Japan Senior — LINE-style, refined, minimal
const JapanSeniorApp = () => (
  <div style={{ height: "100%", background: JP.SNOW, fontFamily: "'Noto Sans JP', sans-serif", display: "flex", flexDirection: "column" }}>
    {/* Header — like LINE */}
    <div style={{ background: JP.INDIGO, padding: "12px 16px 14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>2026年2月22日（土）</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 2 }}>こんにちは</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#B9F6CA" }}>吉子さん 🌸</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "8px 10px", textAlign: "center" }}>
          <div style={{ fontSize: 22 }}>🌤</div>
          <div style={{ fontSize: 10, color: "#B9F6CA", marginTop: 2 }}>晴れ 14°C</div>
        </div>
      </div>
      {/* KarunaVoice message — LINE bubble style */}
      <div style={{ marginTop: 12, background: "#fff", borderRadius: "12px 12px 12px 2px", padding: "9px 12px", position: "relative" }}>
        <div style={{ fontSize: 10, color: JP.INDIGO, fontWeight: 700, marginBottom: 3 }}>🤖 Karuna より</div>
        <div style={{ fontSize: 12, color: JP.INK, lineHeight: 1.6 }}>「おはようございます、吉子さん。今日はお天気が良いですね。健二さんからメッセージが届いています。」</div>
      </div>
    </div>

    <div style={{ flex: 1, overflow: "auto", padding: "14px 14px 0" }}>
      {/* SOS — Large, dignified */}
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ width: 108, height: 108, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, #E53E3E, #9B1C1C)`, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(220,38,38,0.45), 0 0 0 7px rgba(220,38,38,0.1), 0 0 0 14px rgba(220,38,38,0.05)" }}>
          <div style={{ fontSize: 26 }}>🆘</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginTop: 2 }}>たすけて</div>
        </div>
        <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 7 }}>緊急のときは押してください</div>
      </div>

      {/* Big action buttons — Japanese grid, clean */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        {[
          { e: "✅", t: "元気です", s: "今日の報告", bg: "#E0F2F1", bc: JP.JADE, tc: JP.JADE },
          { e: "💊", t: "お薬", s: "夜分が残り", bg: "#FFF9C4", bc: JP.GOLD, tc: "#7B5E00" },
          { e: "📞", t: "健二に電話", s: "シンガポール", bg: "#EDE7F6", bc: "#7C4DFF", tc: "#4527A0" },
          { e: "🏘️", t: "地域のお知らせ", s: "新着 2件", bg: JP.SAKURA_L, bc: JP.SAKURA, tc: "#880E4F" },
        ].map((b, i) => (
          <div key={i} style={{ background: b.bg, borderRadius: 14, padding: "12px 10px", border: `1.5px solid ${b.bc}22`, cursor: "pointer" }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{b.e}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: b.tc }}>{b.t}</div>
            <div style={{ fontSize: 10, color: b.tc, opacity: 0.65 }}>{b.s}</div>
          </div>
        ))}
      </div>

      {/* Karuna companion button */}
      <div style={{ background: JP.INDIGO, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><Mic s={19} c="#B9F6CA" /></div>
        <div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Karuna に話しかける</div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>「Karuna」と呼びかけてください</div></div>
      </div>
    </div>

    <div style={{ background: "#fff", borderTop: "1.5px solid #ECEFF1", padding: "9px 0 5px", display: "flex", justifyContent: "space-around" }}>
      {[{ e: "🏠", l: "ホーム", a: true }, { e: "❤️", l: "健康" }, { e: "👥", l: "地域" }, { e: "👨‍👩‍👧", l: "家族" }].map((n, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}><div style={{ fontSize: 18 }}>{n.e}</div><div style={{ fontSize: 9, color: n.a ? JP.INDIGO : "#9CA3AF", fontWeight: n.a ? 700 : 400 }}>{n.l}</div>{n.a && <div style={{ width: 18, height: 2.5, background: JP.INDIGO, borderRadius: 2 }} />}</div>
      ))}
    </div>
  </div>
);

// Japan Agency — Kaigo Web Portal
const JapanAgencyPortal = () => (
  <div style={{ height: "100%", display: "flex", fontFamily: "'Noto Sans JP', sans-serif", background: JP.SNOW }}>
    {/* Sidebar */}
    <div style={{ width: 196, background: JP.INDIGO, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "14px 14px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: JP.SAKURA, display: "flex", alignItems: "center", justifyContent: "center" }}><HeartFill s={13} c="#fff" /></div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Karuna</div><div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>介護事業者ポータル</div></div>
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.08)", borderRadius: 5, padding: "4px 7px" }}>ABCケア大阪</div>
      </div>
      <div style={{ flex: 1, padding: "10px 7px" }}>
        {[
          { l: "ダッシュボード", a: true }, { l: "ご利用者管理", a: false }, { l: "訪問スケジュール", a: false },
          { l: "スタッフ管理", a: false }, { l: "介護記録", a: false }, { l: "介護保険請求", a: false },
          { l: "地域イベント", a: false }, { l: "設定", a: false },
        ].map((n, i) => (
          <div key={i} style={{ padding: "7px 9px", borderRadius: 7, background: n.a ? "rgba(255,255,255,0.12)" : "transparent", marginBottom: 1, cursor: "pointer", borderLeft: n.a ? "2px solid "+JP.SAKURA : "2px solid transparent" }}>
            <span style={{ fontSize: 11, color: n.a ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: n.a ? 600 : 400 }}>{n.l}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>山本 太郎 · 主任介護士</div>
      </div>
    </div>

    {/* Main */}
    <div style={{ flex: 1, overflow: "auto", padding: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div><div style={{ fontSize: 18, fontWeight: 700, color: JP.INK }}>ダッシュボード</div><div style={{ fontSize: 11, color: "#78909C" }}>2026年2月22日（土）· 本日の訪問: 6件</div></div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ background: "#fff", border: "1px solid #E0E0E0", borderRadius: 7, padding: "6px 10px", fontSize: 11, color: "#374151", display: "flex", alignItems: "center", gap: 4 }}>
            <Bell s={13} c="#374151" /><span>2件のアラート</span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: JP.SAKURA, marginLeft: 2 }} />
          </div>
          <div style={{ background: JP.INDIGO, borderRadius: 7, padding: "6px 12px", fontSize: 11, color: "#fff", fontWeight: 600 }}>＋ 訪問追加</div>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 18 }}>
        {[
          { l: "ご利用者数", v: "31", d: "今月+2", c: JP.JADE, bg: JP.JADE_L },
          { l: "本日の訪問", v: "6", d: "2件完了", c: JP.INDIGO, bg: "#EDE7F6" },
          { l: "勤務スタッフ", v: "4", d: "1名訪問中", c: "#0288D1", bg: "#E1F5FE" },
          { l: "介護保険請求", v: "¥84万", d: "今月累計", c: JP.SAKURA, bg: JP.SAKURA_L },
        ].map((s, i) => (
          <div key={i} style={{ background: s.bg, borderRadius: 10, padding: "12px 14px", border: `1px solid ${s.c}22` }}>
            <div style={{ fontSize: 10, color: "#78909C", marginBottom: 3 }}>{s.l}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "#9E9E9E" }}>{s.d}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 14 }}>
        {/* Visit schedule */}
        <div style={{ background: "#fff", borderRadius: 10, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: JP.INK }}>本日の訪問スケジュール</div>
            <div style={{ fontSize: 11, color: JP.INDIGO, cursor: "pointer" }}>すべて表示 →</div>
          </div>
          {[
            { c: "田中吉子 様 74歳", a: "大阪市西区", w: "山田美咲", t: "9:00", s: "完了", sc: JP.JADE },
            { c: "鈴木一郎 様 78歳", a: "大阪市北区", w: "佐藤健", t: "11:00", s: "完了", sc: JP.JADE },
            { c: "高橋花子 様 82歳", a: "大阪市中央区", w: "山田美咲", t: "13:30", s: "訪問中", sc: "#F57C00" },
            { c: "渡辺信夫 様 69歳", a: "大阪市浪速区", w: "佐藤健", t: "15:00", s: "予定", sc: "#9E9E9E" },
            { c: "小林明子 様 76歳", a: "大阪市住吉区", w: "中村恵", t: "17:00", s: "予定", sc: "#9E9E9E" },
          ].map((v, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: i < 4 ? "1px solid #F5F5F5" : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: v.sc, flexShrink: 0 }} />
              <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 600, color: JP.INK }}>{v.c}</div><div style={{ fontSize: 10, color: "#9E9E9E" }}>{v.a} · {v.w}</div></div>
              <div style={{ textAlign: "right" }}><div style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{v.t}</div><div style={{ fontSize: 10, color: v.sc, fontWeight: 600 }}>{v.s}</div></div>
            </div>
          ))}
        </div>

        {/* Alerts + LTCI */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#fff", borderRadius: 10, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: JP.INK, marginBottom: 8 }}>アラート</div>
            {[
              { m: "渡辺様: 朝のお薬未確認", c: "#F57C00" },
              { m: "高橋様: 血圧 158/94 — 要注意", c: JP.RED },
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 7, padding: "6px 0", borderBottom: i < 1 ? "1px solid #F5F5F5" : "none" }}>
                <div style={{ width: 3, background: a.c, borderRadius: 4, flexShrink: 0 }} />
                <div style={{ fontSize: 11, color: "#374151" }}>{a.m}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: 10, padding: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: JP.INK, marginBottom: 8 }}>介護保険請求状況</div>
            {[
              { n: "田中吉子", status: "審査中", c: "#0288D1", amt: "¥18,400" },
              { n: "鈴木一郎", status: "承認済", c: JP.JADE, amt: "¥24,200" },
              { n: "高橋花子", status: "入力待ち", c: "#F57C00", amt: "—" },
            ].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 0", borderBottom: i < 2 ? "1px solid #F5F5F5" : "none" }}>
                <div><div style={{ fontSize: 11, color: JP.INK }}>{b.n}</div><div style={{ fontSize: 9, color: b.c, fontWeight: 600 }}>{b.status}</div></div>
                <div style={{ fontSize: 11, fontWeight: 700, color: JP.INK }}>{b.amt}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, background: JP.JADE_L, borderRadius: 7, padding: "6px 8px", fontSize: 10, color: JP.JADE, textAlign: "center", fontWeight: 600 }}>今月請求合計: ¥840,000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// INDIA AGENCY PORTAL
// ═══════════════════════════════════════════════════════════════════════════
const IndiaAgencyPortal = () => {
  const G = "#1B4D3E"; const GA = "#2D7D5F"; const AMBER = "#D97706";
  return (
    <div style={{ height: "100%", display: "flex", fontFamily: "'DM Sans', sans-serif", background: "#F8FAFB" }}>
      <div style={{ width: 190, background: G, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "14px 14px 16px", borderBottom: "1px solid rgba(255,255,255,0.09)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: GA, display: "flex", alignItems: "center", justifyContent: "center" }}><HeartFill s={13} c="#fff" /></div>
            <div><div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>Karuna</div><div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>AGENCY PORTAL</div></div>
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.07)", borderRadius: 5, padding: "4px 7px" }}>Sunrise Care, Pune</div>
        </div>
        <div style={{ flex: 1, padding: "10px 7px" }}>
          {["Dashboard", "Clients", "Visits", "Staff", "Reports", "KarunaLocal", "Billing", "Settings"].map((l, i) => (
            <div key={i} style={{ padding: "7px 9px", borderRadius: 7, background: i === 0 ? "rgba(45,125,95,0.3)" : "transparent", marginBottom: 1, cursor: "pointer", borderLeft: i === 0 ? "2px solid "+GA : "2px solid transparent" }}>
              <span style={{ fontSize: 11, color: i === 0 ? "#A7F3D0" : "rgba(255,255,255,0.5)", fontWeight: i === 0 ? 600 : 400 }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Suresh Dhole · Coordinator</div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div><div style={{ fontSize: 18, fontWeight: 800, color: G }}>Good Morning, Suresh</div><div style={{ fontSize: 11, color: "#6B7280" }}>Sat 22 Feb · 8 visits today</div></div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 7, padding: "5px 10px", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}><Bell s={13} c="#374151" /><span>3 alerts</span><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444" }} /></div>
            <div style={{ background: GA, borderRadius: 7, padding: "5px 12px", fontSize: 11, color: "#fff", fontWeight: 600 }}>+ New Visit</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
          {[{ l: "Active Clients", v: "47", d: "+3 this week", c: GA, bg: "#F0FDF4" }, { l: "Today's Visits", v: "8", d: "2 completed", c: AMBER, bg: "#FFFBEB" }, { l: "Staff On Duty", v: "6", d: "2 en route", c: "#6366F1", bg: "#EEF2FF" }, { l: "Alerts", v: "3", d: "1 urgent", c: "#EF4444", bg: "#FFF5F5" }].map((s, i) => (
            <div key={i} style={{ background: s.bg, borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontSize: 10, color: "#6B7280", marginBottom: 3 }}>{s.l}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 10, color: "#9CA3AF" }}>{s.d}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 12 }}>
          <div style={{ background: "#fff", borderRadius: 10, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}><div style={{ fontSize: 13, fontWeight: 700, color: G }}>Today's Visit Schedule</div><div style={{ fontSize: 11, color: GA }}>View All →</div></div>
            {[{ c: "Sunita Sharma, 67", a: "Baner Rd", w: "Meena D.", t: "8:30 AM", s: "Completed", sc: GA }, { c: "Ramesh Kulkarni, 72", a: "Kothrud", w: "Pradeep K.", t: "10:00 AM", s: "Completed", sc: GA }, { c: "Vimal Joshi, 68", a: "Aundh", w: "Anita S.", t: "1:00 PM", s: "En Route", sc: AMBER }, { c: "Lata Bhave, 74", a: "Pune Camp", w: "Sunil R.", t: "3:30 PM", s: "Scheduled", sc: "#9CA3AF" }].map((v, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i < 3 ? "1px solid #F3F4F6" : "none" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: v.sc, flexShrink: 0 }} />
                <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 600, color: "#111827" }}>{v.c}</div><div style={{ fontSize: 10, color: "#9CA3AF" }}>{v.a} · {v.w}</div></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 11, fontWeight: 600 }}>{v.t}</div><div style={{ fontSize: 10, color: v.sc, fontWeight: 600 }}>{v.s}</div></div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: "#fff", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: G, marginBottom: 8 }}>Active Alerts</div>
              {[{ m: "Lata Bhave: Missed morning med", c: AMBER }, { m: "Ramesh: BP elevated 148/92", c: "#EF4444" }, { m: "Vimal Joshi: Missed check-in", c: "#6366F1" }].map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 7, padding: "5px 0", borderBottom: i < 2 ? "1px solid #F3F4F6" : "none" }}>
                  <div style={{ width: 3, background: a.c, borderRadius: 4, flexShrink: 0 }} />
                  <div style={{ fontSize: 11, color: "#374151" }}>{a.m}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#fff", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: G, marginBottom: 8 }}>Staff Performance</div>
              {[{ n: "Meena D.", s: 98 }, { n: "Pradeep K.", s: 94 }, { n: "Anita S.", s: 91 }].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: GA }}>{s.n.slice(0,2)}</div>
                  <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>{s.n}</div><div style={{ height: 4, background: "#F3F4F6", borderRadius: 2, marginTop: 3 }}><div style={{ width: s.s+"%", height: "100%", background: GA, borderRadius: 2 }} /></div></div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: GA }}>{s.s}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Provider App
const ProviderApp = () => {
  const G = "#1B4D3E"; const GA = "#2D7D5F";
  return (
    <div style={{ height: "100%", background: "#F9FAFB", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#fff", padding: "12px 14px", borderBottom: "1px solid #F3F4F6" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><div style={{ fontSize: 15, fontWeight: 800, color: G }}>My Tasks</div><div style={{ fontSize: 10, color: "#9CA3AF" }}>Sat 22 Feb · Pradeep Kumar</div></div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ background: "#FEF3C7", borderRadius: 20, padding: "3px 8px", fontSize: 10, fontWeight: 700, color: "#92400E" }}>2 Pending</div>
            <div style={{ background: "#DCFCE7", borderRadius: 20, padding: "3px 8px", fontSize: 10, fontWeight: 700, color: GA }}>3 Done</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "12px 12px 0" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.07em", marginBottom: 7 }}>🔴 URGENT — EN ROUTE</div>
        <div style={{ background: G, borderRadius: 14, padding: 14, marginBottom: 12, color: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div><div style={{ fontSize: 13, fontWeight: 800 }}>Home Visit</div><div style={{ fontSize: 10, color: "#A7F3D0" }}>Vimal Joshi · Aundh, Pune</div></div>
            <div style={{ background: "rgba(255,255,255,0.14)", borderRadius: 7, padding: "3px 8px", fontSize: 10, fontWeight: 700 }}>1:00 PM</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "7px 9px", marginBottom: 8, fontSize: 10, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>⚠️ BP check required. Bring glucose meter.</div>
          <div style={{ display: "flex", gap: 7 }}>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.18)", borderRadius: 7, padding: "7px", textAlign: "center", fontSize: 11, fontWeight: 700 }}>📍 Navigate</div>
            <div style={{ flex: 1, background: "#4CAF82", borderRadius: 7, padding: "7px", textAlign: "center", fontSize: 11, fontWeight: 700 }}>✓ Check In</div>
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.07em", marginBottom: 7 }}>UPCOMING</div>
        {[{ t: "Home Visit", c: "Lata Bhave, 74", l: "Pune Camp", time: "3:30 PM" }, { t: "Lab Report Delivery", c: "Mohan Patil, 80", l: "Hadapsar", time: "5:00 PM" }].map((v, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 12, marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><div style={{ fontSize: 11, fontWeight: 700, color: G }}>{v.t}</div><div style={{ fontSize: 10, color: "#6B7280", fontWeight: 600 }}>{v.time}</div></div>
            <div style={{ fontSize: 11, color: "#374151" }}>{v.c}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 3 }}><MapPin s={10} c="#9CA3AF" /><span style={{ fontSize: 10, color: "#9CA3AF" }}>{v.l}</span></div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", borderTop: "1px solid #F3F4F6", padding: "7px 0 4px", display: "flex", justifyContent: "space-around" }}>
        {[{ ic: <Calendar s={18} c={G} />, l: "Tasks", a: true }, { ic: <Clock s={18} c="#9CA3AF" />, l: "History" }, { ic: <Trending s={18} c="#9CA3AF" />, l: "Earnings" }, { ic: <User s={18} c="#9CA3AF" />, l: "Profile" }].map((n, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>{n.ic}<div style={{ fontSize: 9, color: n.a ? G : "#9CA3AF", fontWeight: n.a ? 700 : 400 }}>{n.l}</div>{n.a && <div style={{ width: 14, height: 2, background: G, borderRadius: 2 }} />}</div>
        ))}
      </div>
    </div>
  );
};

// Tenant Portal
const TenantPortal = () => {
  const DK = "#0D1117"; const PL = "#161B22"; const BR = "#30363D"; const GR = "#2ECC8F"; const BL = "#58A6FF"; const AM = "#D97706";
  return (
    <div style={{ height: "100%", display: "flex", fontFamily: "'DM Mono', monospace", background: DK, color: "#E6EDF3" }}>
      <div style={{ width: 200, background: PL, borderRight: `1px solid ${BR}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "12px 14px", borderBottom: `1px solid ${BR}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: GR, display: "flex", alignItems: "center", justifyContent: "center" }}><Layers s={13} c={DK} /></div>
            <div><div style={{ fontSize: 12, fontWeight: 700, color: "#E6EDF3" }}>Karuna Ops</div><div style={{ fontSize: 9, color: "#6E7681", letterSpacing: "0.06em" }}>TENANT CONTROL</div></div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "8px 7px" }}>
          {[{ l: "All Tenants", a: true, cnt: "12" }, { l: "Platform", cnt: "2" }, { l: "White-Label", cnt: "4" }, { l: "Enterprise", cnt: "6" }, { l: "Feature Flags" }, { l: "API Keys" }, { l: "Audit Log" }, { l: "Usage & Cost" }].map((n, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 9px", borderRadius: 6, background: n.a ? "rgba(46,204,143,0.1)" : "transparent", marginBottom: 1, cursor: "pointer", borderLeft: n.a ? `2px solid ${GR}` : "2px solid transparent" }}>
              <span style={{ fontSize: 11, color: n.a ? GR : "#8B949E" }}>{n.l}</span>
              {n.cnt && <div style={{ background: n.a ? "rgba(46,204,143,0.15)" : "#21262D", borderRadius: 20, padding: "1px 5px", fontSize: 9, color: n.a ? GR : "#6E7681" }}>{n.cnt}</div>}
            </div>
          ))}
        </div>
        <div style={{ padding: "8px 12px", borderTop: `1px solid ${BR}` }}>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}><div style={{ width: 5, height: 5, borderRadius: "50%", background: GR }} /><div style={{ fontSize: 9, color: "#6E7681" }}>All systems nominal</div></div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div><div style={{ fontSize: 16, fontWeight: 700 }}>Tenant Registry</div><div style={{ fontSize: 10, color: "#6E7681" }}>12 active · updated 2 min ago</div></div>
          <div style={{ background: GR, borderRadius: 6, padding: "5px 10px", fontSize: 11, color: DK, fontWeight: 700 }}>+ New Tenant</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
          {[{ l: "Total MAU", v: "48,234", c: GR }, { l: "GCP Spend MTD", v: "$9,840", c: BL }, { l: "Active Alerts", v: "3", c: AM }, { l: "API Uptime", v: "99.97%", c: GR }].map((s, i) => (
            <div key={i} style={{ background: PL, borderRadius: 7, padding: "10px 12px", border: `1px solid ${BR}` }}>
              <div style={{ fontSize: 9, color: "#6E7681", marginBottom: 4, letterSpacing: "0.05em" }}>{s.l.toUpperCase()}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: s.c }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ background: PL, borderRadius: 9, border: `1px solid ${BR}`, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: `1px solid ${BR}`, fontSize: 12, fontWeight: 600 }}>All Tenants</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr style={{ borderBottom: `1px solid ${BR}` }}>{["Tenant", "Type", "Region", "MAU", "Status"].map(h => <th key={h} style={{ padding: "7px 12px", fontSize: 9, color: "#6E7681", textAlign: "left", letterSpacing: "0.06em" }}>{h}</th>)}</tr></thead>
            <tbody>
              {[
                { n: "Karuna India", d: "karuna.app", t: "Platform", r: "asia-south1", m: "41,200", s: "Active", sc: GR },
                { n: "Karuna Japan (Pilot)", d: "jp.karuna.app", t: "Platform", r: "asia-northeast1", m: "320", s: "Pilot", sc: AM },
                { n: "ABC Care Osaka", d: "my.abccare.jp", t: "White-Label", r: "asia-northeast1", m: "1,840", s: "Active", sc: GR },
                { n: "Infosys Family Assist", d: "care.infosys.com", t: "Enterprise", r: "asia-south1", m: "3,200", s: "Active", sc: GR },
                { n: "Wipro CareConnect", d: "care.wipro.com", t: "Enterprise", r: "asia-south1", m: "1,674", s: "Trial", sc: BL },
              ].map((t, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${BR}`, background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "8px 12px" }}><div style={{ fontSize: 11, fontWeight: 600 }}>{t.n}</div><div style={{ fontSize: 9, color: "#6E7681" }}>{t.d}</div></td>
                  <td style={{ padding: "8px 12px" }}><div style={{ fontSize: 9, padding: "2px 6px", borderRadius: 4, background: "rgba(88,166,255,0.1)", color: BL, display: "inline-block" }}>{t.t}</div></td>
                  <td style={{ padding: "8px 12px", fontSize: 10, color: "#8B949E", fontFamily: "monospace" }}>{t.r}</td>
                  <td style={{ padding: "8px 12px", fontSize: 12, fontWeight: 700, fontFamily: "monospace" }}>{t.m}</td>
                  <td style={{ padding: "8px 12px" }}><div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 5, height: 5, borderRadius: "50%", background: t.sc }} /><span style={{ fontSize: 10, color: t.sc }}>{t.s}</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN SHOWCASE
// ═══════════════════════════════════════════════════════════════════════════
export default function KarunaMockups() {
  const [mode, setMode] = useState("india"); // india | japan | investor
  const [indiaScreen, setIndiaScreen] = useState("family-home");
  const [japanScreen, setJapanScreen] = useState("jp-family-home");

  const FOREST = "#1B4D3E"; const GA = "#2D7D5F";

  // Investor view — side by side comparison
  if (mode === "investor") return (
    <div style={{ minHeight: "100vh", background: "#05080A", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <div style={{ background: "#0A0F0D", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "12px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg, #2D7D5F, #1B4D3E)", display: "flex", alignItems: "center", justifyContent: "center" }}><HeartFill s={14} c="#fff" /></div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>Karuna</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>INVESTOR PREVIEW · CONFIDENTIAL</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[{ id: "india", l: "🇮🇳 India Market" }, { id: "japan", l: "🇯🇵 Japan Market" }, { id: "investor", l: "📊 Investor View" }].map(m => (
            <div key={m.id} onClick={() => setMode(m.id)} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer", background: mode === m.id ? GA : "rgba(255,255,255,0.06)", color: mode === m.id ? "#fff" : "rgba(255,255,255,0.45)", fontWeight: mode === m.id ? 700 : 400, border: mode === m.id ? "none" : "1px solid rgba(255,255,255,0.09)" }}>{m.l}</div>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px 40px" }}>
        {/* Hero headline */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 8 }}>
            The infrastructure for<br /><span style={{ background: "linear-gradient(90deg, #2D7D5F, #D4637A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>cross-border elder care</span>
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Connecting 25M+ NRI families with aging parents in India and Japan through AI, verified care agencies, and the apps you see below.</div>
        </div>

        {/* Market cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 44 }}>
          {/* India */}
          <div style={{ background: "#0D1710", borderRadius: 16, border: "1px solid rgba(45,125,95,0.3)", overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(135deg, #1B4D3E, #2D7D5F)", padding: "18px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div><div style={{ fontSize: 20 }}>🇮🇳</div><div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginTop: 4 }}>India Market</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Launch: Year 1</div></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>$2.8B</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>TAM (elder care)</div></div>
              </div>
            </div>
            <div style={{ padding: "16px 22px" }}>
              {[{ l: "NRI Population", v: "25M+" }, { l: "Seniors (60+)", v: "100M+" }, { l: "NRI Remittances", v: "$120B/yr" }, { l: "Target ARR Y2", v: "₹24 Cr" }].map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{m.l}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#A7F3D0" }}>{m.v}</div>
                </div>
              ))}
              <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["WhatsApp-first", "8 Indian languages", "ABDM integration", "UPI billing"].map(t => <div key={t} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "rgba(45,125,95,0.2)", color: "#A7F3D0", border: "1px solid rgba(45,125,95,0.3)" }}>{t}</div>)}
              </div>
            </div>
          </div>
          {/* Japan */}
          <div style={{ background: "#0A0D1A", borderRadius: 16, border: "1px solid rgba(26,35,126,0.5)", overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(135deg, #1A237E, #283593)", padding: "18px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div><div style={{ fontSize: 20 }}>🇯🇵</div><div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginTop: 4 }}>Japan Market</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Launch: Year 2</div></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 28, fontWeight: 900, color: "#fff" }}>$43B</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>TAM (kaigo market)</div></div>
              </div>
            </div>
            <div style={{ padding: "16px 22px" }}>
              {[{ l: "Japanese Abroad", v: "3.5M" }, { l: "Seniors (65+)", v: "36M (29%)" }, { l: "LTCI Spend/yr", v: "¥12 trillion" }, { l: "Target ARR Y3", v: "¥240M" }].map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{m.l}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#B9F6CA" }}>{m.v}</div>
                </div>
              ))}
              <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["LINE integration", "LTCI billing", "Disaster module", "B2B2C via Kaigo"].map(t => <div key={t} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 20, background: "rgba(26,35,126,0.3)", color: "#B9F6CA", border: "1px solid rgba(26,35,126,0.5)" }}>{t}</div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side phone comparison */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Same platform. Two markets. Different souls.</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>The same microservices backend powers both — market modules swap seamlessly.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24, justifyItems: "center" }}>
            <PhoneFrame label="🇮🇳 NRI Caregiver (India)"><IndiaFamilyApp screen="home" /></PhoneFrame>
            <PhoneFrame label="🇮🇳 Senior Parent (India)"><IndiaSeniorApp /></PhoneFrame>
            <PhoneFrame label="🇯🇵 Expat Caregiver (Japan)"><JapanFamilyApp screen="home" /></PhoneFrame>
            <PhoneFrame label="🇯🇵 Senior Parent (Japan)"><JapanSeniorApp /></PhoneFrame>
          </div>
        </div>

        {/* Business model summary */}
        <div style={{ background: "#0D1710", borderRadius: 16, border: "1px solid rgba(45,125,95,0.2)", padding: "22px 28px" }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Revenue Model</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {[
              { e: "💳", t: "Subscriptions", d: "$9.99–49.99/mo per NRI family. Global billing via Stripe.", c: GA },
              { e: "🏥", t: "Agency SaaS", d: "₹5K–15K/mo India · ¥30K–80K/mo Japan. Per agency.", c: JP.INDIGO },
              { e: "📋", t: "Marketplace Fees", d: "8–12% commission on care bookings.", c: "#7B1FA2" },
              { e: "🏢", t: "Enterprise B2B", d: "Corporate packages for Infosys, TCS, Sony, Toyota.", c: JP.GOLD },
            ].map((r, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "14px 14px", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{r.e}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{r.t}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );

  // ─── India / Japan individual views ───────────────────────────────────────
  const isIndia = mode === "india";
  const screens = isIndia
    ? [{ id: "family-home", l: "Family Dashboard" }, { id: "family-sos", l: "Emergency Alert" }, { id: "senior", l: "Senior Parent (Hindi)" }, { id: "agency", l: "Agency Portal" }, { id: "provider", l: "Field Worker" }, { id: "tenant", l: "Tenant Admin" }]
    : [{ id: "jp-family-home", l: "Caregiver Dashboard" }, { id: "jp-family-disaster", l: "Disaster Mode" }, { id: "jp-senior", l: "Senior Parent (Japanese)" }, { id: "jp-agency", l: "Kaigo Agency Portal" }];

  const activeScreen = isIndia ? indiaScreen : japanScreen;
  const setScreen = isIndia ? setIndiaScreen : setJapanScreen;

  const renderScreen = () => {
    if (activeScreen === "family-home") return <PhoneFrame label="KarunaFamily — Home"><IndiaFamilyApp screen="home" /></PhoneFrame>;
    if (activeScreen === "family-sos") return <PhoneFrame label="KarunaFamily — Emergency"><IndiaFamilyApp screen="emergency" /></PhoneFrame>;
    if (activeScreen === "senior") return <PhoneFrame label="KarunaParent — Hindi"><IndiaSeniorApp /></PhoneFrame>;
    if (activeScreen === "agency") return <BrowserFrame url="agency.karuna.app/dashboard" label="KarunaAgency — India Portal"><IndiaAgencyPortal /></BrowserFrame>;
    if (activeScreen === "provider") return <PhoneFrame label="KarunaProvider — Field Worker"><ProviderApp /></PhoneFrame>;
    if (activeScreen === "tenant") return <BrowserFrame url="ops.karuna.internal/tenants" label="Tenant Admin Portal"><TenantPortal /></BrowserFrame>;
    if (activeScreen === "jp-family-home") return <PhoneFrame label="KarunaFamily — Japan"><JapanFamilyApp screen="home" /></PhoneFrame>;
    if (activeScreen === "jp-family-disaster") return <PhoneFrame label="KarunaFamily — Disaster Mode"><JapanFamilyApp screen="disaster" /></PhoneFrame>;
    if (activeScreen === "jp-senior") return <PhoneFrame label="KarunaParent — Japanese"><JapanSeniorApp /></PhoneFrame>;
    if (activeScreen === "jp-agency") return <BrowserFrame url="agency.karuna.jp/dashboard" label="KarunaAgency — Kaigo Portal"><JapanAgencyPortal /></BrowserFrame>;
    return null;
  };

  const notes = {
    "family-home": [{ t: "Forest green anchor", d: "Parent card above fold — wellness score and last-active always visible without scrolling." }, { t: "Amber AI digest", d: "Single most-read element. Left-border callout in amber. Plain English, max 2 lines. No medical jargon." }, { t: "WhatsApp-era familiarity", d: "Card layout and typography chosen to feel familiar to an NRI in their 30s–40s using it on mobile." }],
    "family-sos": [{ t: "Full red takeover", d: "Complete visual shift from green → red signals mode change. Caregiver knows immediately." }, { t: "AI confidence score shown", d: "87% confidence shown so caregiver can make informed decision before acting — reduces panic." }, { t: "Response timeline", d: "Checklist-style timeline shows what's been done and what's coming. Reduces the feeling of helplessness for NRI thousands of miles away." }],
    "senior": [{ t: "Lora serif — warmth", d: "Serif body text feels like a letter from home. Not clinical, not app-like. Intentionally personal." }, { t: "Hindi-first, respectful", d: "All text in Devanagari with 'जी' honorific suffix — essential for the 60+ Indian demographic." }, { t: "120px SOS target", d: "Cannot be missed. Three concentric pulse-ring shadows. The single most important pixel on the screen." }, { t: "Emoji navigation", d: "Emoji nav icons more recognizable than abstract SVG strokes for lower tech-literacy users." }],
    "agency": [{ t: "Dark sidebar, off-white canvas", d: "Eye comfort for coordinators who have this open all day." }, { t: "Visit schedule dominates", d: "60% of the canvas. This is the coordinator's job — everything else is secondary." }, { t: "Status dot scan", d: "Green/amber/gray dots let coordinators scan the full schedule in under 1 second without reading text." }],
    "provider": [{ t: "Zero decoration", d: "No marketing, no branding polish. Every pixel serves the task. Field workers glance at their phone between visits." }, { t: "Data access boundary visible", d: "Client cards show only name, address, time. No medical history, no family contacts — the Provider Data Boundary from the architecture is in the design." }],
    "tenant": [{ t: "Terminal dark theme", d: "Internal ops tool for engineers. DM Mono monospace reinforces precision and machine-trust." }, { t: "Single accent color", d: "#2ECC8F terminal green. Used only for active states and positive metrics. Everything else is neutral." }],
    "jp-family-home": [{ t: "Indigo replaces forest green", d: "Japan palette: deep indigo (#1A237E) signals authority and precision. Cooler, more formal than India's warm green." }, { t: "Japanese language throughout", d: "Keigo (formal register) used in AI digest. Honorifics: 田中吉子様. Date format: 2026年2月22日." }, { t: "Omotenashi precision", d: "More whitespace, tighter grid, no amber warmth. Reflects Japanese UX expectation: refined, zero tolerance for roughness." }],
    "jp-family-disaster": [{ t: "Disaster module — Japan-only", d: "Earthquake alert with Seismic Intensity (震度) scale. Cultural requirement for Japan market." }, { t: "AI safety confidence shown", d: "91% confidence that senior is safe — reduces family panic during earthquakes. Same AI logic as SOS, different interface." }, { t: "Evacuation shelter info", d: "Nearest shelter with distance and capacity shown. Actionable data, not just alerts." }],
    "jp-senior": [{ t: "LINE-bubble greeting", d: "KarunaVoice message rendered as a LINE-style chat bubble — the most familiar messaging interface for Japanese seniors." }, { t: "Restrained colour palette", d: "Pale jade, muted sakura, indigo. No bright colours — Japanese elderly UI convention. Dignity over vibrancy." }, { t: "Formal Japanese text", d: "「です・ます」 polite form throughout. Wake word prompt written in natural speech: 「Karunaと呼びかけてください」" }],
    "jp-agency": [{ t: "介護保険請求 (LTCI) panel", d: "Japan-only feature. Billing status per client with approval state and ¥ amounts. Reduces paperwork for Kaigo agencies." }, { t: "Japanese naming conventions", d: "Client names use 様 honorific. Staff referred to by full name. Forms match Japanese administrative conventions." }, { t: "Muted palette — omotenashi", d: "Indigo sidebar. No amber or bright greens. Japan portal is visually quieter — reflects cultural expectation for professional software." }],
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0F0D", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <div style={{ background: "#0D1710", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "12px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg, #2D7D5F, #1B4D3E)", display: "flex", alignItems: "center", justifyContent: "center" }}><HeartFill s={14} c="#fff" /></div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Karuna</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>DESIGN MOCKUPS · v2.0</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[{ id: "india", l: "🇮🇳 India" }, { id: "japan", l: "🇯🇵 Japan" }, { id: "investor", l: "📊 Investor View" }].map(m => (
            <div key={m.id} onClick={() => setMode(m.id)} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, cursor: "pointer", background: mode === m.id ? GA : "rgba(255,255,255,0.06)", color: mode === m.id ? "#fff" : "rgba(255,255,255,0.4)", fontWeight: mode === m.id ? 700 : 400, border: mode === m.id ? "none" : "1px solid rgba(255,255,255,0.09)" }}>{m.l}</div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: 220, background: "#0D1710", borderRight: "1px solid rgba(255,255,255,0.06)", minHeight: "calc(100vh - 57px)", padding: "14px 10px" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", marginBottom: 8, paddingLeft: 8 }}>{isIndia ? "🇮🇳 INDIA SCREENS" : "🇯🇵 JAPAN SCREENS"}</div>
          {screens.map(s => (
            <div key={s.id} onClick={() => setScreen(s.id)} style={{ padding: "9px 12px", borderRadius: 9, marginBottom: 3, cursor: "pointer", background: activeScreen === s.id ? (isIndia ? "rgba(45,125,95,0.2)" : "rgba(26,35,126,0.25)") : "transparent", border: activeScreen === s.id ? `1px solid ${isIndia ? "rgba(45,125,95,0.4)" : "rgba(26,35,126,0.5)"}` : "1px solid transparent" }}>
              <div style={{ fontSize: 12, fontWeight: activeScreen === s.id ? 700 : 400, color: activeScreen === s.id ? (isIndia ? "#A7F3D0" : "#B9F6CA") : "#9CA3AF" }}>{s.l}</div>
            </div>
          ))}
          {/* Color tokens */}
          <div style={{ marginTop: 20, paddingLeft: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", marginBottom: 8 }}>{isIndia ? "INDIA PALETTE" : "JAPAN PALETTE"}</div>
            {(isIndia
              ? [{ l: "Forest Deep", c: "#1B4D3E" }, { l: "Forest Mid", c: "#2D7D5F" }, { l: "Warm Amber", c: "#D97706" }, { l: "Terracotta", c: "#C2643F" }, { l: "Alert Red", c: "#DC2626" }]
              : [{ l: "Deep Indigo", c: "#1A237E" }, { l: "Mid Indigo", c: "#283593" }, { l: "Muted Sakura", c: "#D4637A" }, { l: "Jade Green", c: "#00695C" }, { l: "Muted Red", c: "#C62828" }]
            ).map(t => (
              <div key={t.l} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: t.c }} />
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{t.l}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.15)", fontFamily: "monospace", marginLeft: "auto" }}>{t.c}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, padding: "28px 36px", overflow: "auto" }}>
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{screens.find(s => s.id === activeScreen)?.l}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{isIndia ? "India Market · English/Hindi UI" : "Japan Market · Japanese UI (日本語)"}</div>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
            {renderScreen()}
            {/* Notes */}
            <div style={{ flex: 1, minWidth: 260, maxWidth: 320 }}>
              <div style={{ background: "#0D1710", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", marginBottom: 12 }}>DESIGN RATIONALE</div>
                {(notes[activeScreen] || []).map((n, i) => (
                  <div key={i} style={{ paddingLeft: 10, borderLeft: `2px solid ${isIndia ? "rgba(45,125,95,0.5)" : "rgba(26,35,126,0.6)"}`, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: isIndia ? "#A7F3D0" : "#B9F6CA", marginBottom: 3 }}>{n.t}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{n.d}</div>
                  </div>
                ))}
              </div>
              {/* Market context note */}
              <div style={{ background: "#0D1710", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", padding: 16, marginTop: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", marginBottom: 10 }}>MARKET CONTEXT</div>
                {isIndia ? (
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>India UX is warmer, more expressive, and community-oriented. WhatsApp and emoji familiarity drive design choices. 8 Indian language variants ship at launch.</div>
                ) : (
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>Japan UX follows <em>omotenashi</em> — graceful, precise, error-free. Cooler palette, more formal language, LINE-familiar patterns. Privacy-first: family data siloed by default.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}
