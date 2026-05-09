import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { surveys } from "@/lib/data";
import { ChevronRight, Send, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function FeedbackPage() {
  const [tab, setTab] = useState<"active" | "send">("active");
  return (
    <div>
      <Header title="Feedback" />
      <div className="px-5">
        <div className="flex bg-white p-1 rounded-2xl mb-4" style={{ border: "1px solid #EEF0FF" }}>
          <button onClick={() => setTab("active")} className={`flex-1 py-2 text-[12px] font-semibold rounded-xl transition-all ${tab === "active" ? "text-white" : "text-slate-500"}`} style={tab === "active" ? { background: "linear-gradient(135deg,#7AAFD4,#A78BD4)" } : {}}>Active Surveys</button>
          <button onClick={() => setTab("send")} className={`flex-1 py-2 text-[12px] font-semibold rounded-xl transition-all ${tab === "send" ? "text-white" : "text-slate-500"}`} style={tab === "send" ? { background: "linear-gradient(135deg,#7AAFD4,#A78BD4)" } : {}}>Send Survey</button>
        </div>

        {tab === "active" ? <ActiveTab /> : <SendTab />}
      </div>
    </div>
  );
}

function Ring({ value, color }: { value: number; color: string }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r={r} stroke="#EEF0FF" strokeWidth="5" fill="none" />
      <circle cx="28" cy="28" r={r} stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * value) / 100} transform="rotate(-90 28 28)" />
      <text x="28" y="32" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">{value}%</text>
    </svg>
  );
}

function ActiveTab() {
  return (
    <div className="space-y-3 animate-fade-in">
      {surveys.map((s) => (
        <div key={s.id} className="card-soft p-4 flex items-center gap-3" style={{ borderLeft: `4px solid ${s.color}` }}>
          <Ring value={s.rate} color={s.color} />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-[14px] text-slate-800 leading-tight">{s.name}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Sent {s.sent}</div>
            <Link to="/survey-results" className="text-[12px] font-semibold mt-1 inline-flex items-center gap-1" style={{ color: "#7AAFD4" }}>
              View Results <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      ))}

      <div className="card-soft p-4 flex items-center justify-between" style={{ background: "linear-gradient(135deg,#F4F0FF,#EAF3FB)" }}>
        <div>
          <div className="text-[11px] text-slate-500">NPS This Week</div>
          <div className="flex items-end gap-2">
            <div className="text-[32px] font-extrabold" style={{ color: "#A78BD4" }}>61</div>
            <div className="text-[11px] font-semibold pb-1.5" style={{ color: "#5BA56B" }}>+7 from last week</div>
          </div>
        </div>
        <svg width="80" height="40" viewBox="0 0 80 40"><polyline points="0,30 12,28 24,24 36,20 48,18 60,12 80,8" fill="none" stroke="#A78BD4" strokeWidth="2.5" /></svg>
      </div>
    </div>
  );
}

function SendTab() {
  const [schedule, setSchedule] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Survey sent to selected segment");
  };
  return (
    <form onSubmit={submit} className="space-y-3 animate-fade-in">
      <Field label="Survey Title">
        <input className="input-soft w-full px-3 py-2.5 text-[13px]" defaultValue="Q4 Customer Pulse" />
      </Field>
      <Field label="Survey Type">
        <select className="input-soft w-full px-3 py-2.5 text-[13px]"><option>Satisfaction</option><option>NPS</option><option>Product Feedback</option><option>Support</option></select>
      </Field>
      <Field label="Target Segment">
        <select className="input-soft w-full px-3 py-2.5 text-[13px]"><option>All Customers</option><option>High Risk</option><option>New Customers</option></select>
      </Field>
      <Field label="Channel">
        <select className="input-soft w-full px-3 py-2.5 text-[13px]"><option>Email</option><option>SMS</option><option>In-App</option></select>
      </Field>
      <div className="card-soft p-3 flex items-center justify-between">
        <div>
          <div className="text-[13px] font-semibold text-slate-800">Schedule</div>
          <div className="text-[11px] text-slate-500">{schedule ? "Choose date & time" : "Send immediately"}</div>
        </div>
        <button type="button" onClick={() => setSchedule(!schedule)} className="relative w-11 h-6 rounded-full transition-colors" style={{ background: schedule ? "#7AAFD4" : "#E0E8FF" }}>
          <span className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all" style={{ left: schedule ? 22 : 2 }} />
        </button>
      </div>
      {schedule && (
        <div className="card-soft p-3 flex items-center gap-2">
          <Calendar size={16} className="text-slate-500" />
          <input type="datetime-local" className="input-soft flex-1 px-2 py-1.5 text-[12px]" defaultValue="2026-05-12T09:00" />
        </div>
      )}

      <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg,#EAF3FB,#F4F0FF)", border: "1px dashed #C9D6F0" }}>
        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-2">Recipient Preview</div>
        <div className="bg-white rounded-xl p-3" style={{ boxShadow: "0 4px 12px rgba(120,140,255,0.1)" }}>
          <div className="text-[13px] font-bold text-slate-800">How was your experience?</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Tap a rating to share feedback.</div>
          <div className="flex gap-1 mt-2">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className="flex-1 h-7 rounded-md text-[11px] flex items-center justify-center font-semibold" style={{ background: "linear-gradient(135deg,#EAF3FB,#F4F0FF)", color: "#7AAFD4" }}>{n}⭐</div>
            ))}
          </div>
        </div>
      </div>

      <button className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-[14px]"><Send size={16}/> Send Survey</button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[11px] font-semibold text-slate-600 mb-1 block">{label}</label>
      {children}
    </div>
  );
}
