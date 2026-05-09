import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Avatar } from "@/components/Avatar";
import { alerts } from "@/lib/data";
import { toast } from "sonner";

export default function AlertsPage() {
  const [filter, setFilter] = useState<"all" | "high" | "follow">("all");
  const filtered = alerts.filter((a) =>
    filter === "all" ? true : filter === "high" ? a.priority === "high" : a.tag === "Follow-up"
  );
  return (
    <div>
      <Header title="Alerts" />
      <div className="px-5">
        <div className="flex gap-2 mb-3">
          {[
            { k: "all", l: "All" },
            { k: "high", l: "High Risk" },
            { k: "follow", l: "Follow-up" },
          ].map((f) => (
            <button key={f.k} onClick={() => setFilter(f.k as typeof filter)} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tap ${filter === f.k ? "text-white" : "text-slate-600 bg-white"}`} style={filter === f.k ? { background: "linear-gradient(135deg,#7AAFD4,#A78BD4)" } : { border: "1px solid #EEF0FF" }}>
              {f.l}
            </button>
          ))}
        </div>

        <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-white mb-3" style={{ background: "#E8907A" }}>
          {filtered.length} active alerts
        </div>

        <div className="space-y-2.5">
          {filtered.map((a) => (
            <div key={a.id} className={`card-soft p-3 ${a.priority === "high" ? "animate-pulse-soft" : ""}`} style={{ borderLeft: `3px solid ${a.border}` }}>
              <div className="flex gap-3">
                <Avatar name={a.name} size={40} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-[14px] font-bold text-slate-800">{a.name}</div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${a.tagColor}22`, color: a.tagColor }}>{a.tag}</span>
                  </div>
                  <div className="text-[12px] text-slate-500 line-clamp-2 mt-0.5">{a.msg}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-[10px] text-slate-400">{a.time}</div>
                    <div className="flex gap-1.5">
                      <Link to="/customer/$id" params={{ id: a.id }} className="px-3 py-1 rounded-lg text-[11px] font-semibold tap" style={{ border: "1px solid #7AAFD4", color: "#7AAFD4" }}>View Profile</Link>
                      <button onClick={() => toast.success(`Resolved alert for ${a.name}`)} className="px-3 py-1 rounded-lg text-[11px] font-semibold text-white tap" style={{ background: "#7EC48A" }}>Resolve</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto opacity-60"><circle cx="40" cy="40" r="32" fill="#EAF3FB"/><path d="M28 40h24M40 28v24" stroke="#A78BD4" strokeWidth="3" strokeLinecap="round"/></svg>
            <div className="text-[13px] text-slate-500 mt-2">No alerts in this filter</div>
          </div>
        )}
      </div>
    </div>
  );
}
