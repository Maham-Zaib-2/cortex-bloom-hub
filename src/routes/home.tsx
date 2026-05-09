import { Link } from "react-router-dom";
import { Bell, Users, AlertTriangle, TrendingUp, ChevronRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Avatar } from "@/components/Avatar";
import { sentimentTrend, atRisk } from "@/lib/data";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between" style={{ background: "linear-gradient(135deg,#EAF3FB,#F0EAFB)" }}>
        <Logo />
        <button className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center tap" style={{ boxShadow: "0 2px 8px rgba(120,140,255,0.15)" }}>
          <Bell size={18} color="#7AAFD4" />
          <span className="absolute -top-1 -right-1 bg-[#E8907A] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>
      </div>

      <div className="px-5 pb-4 space-y-4">
        {/* Welcome */}
        <div className="rounded-2xl p-4 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#7AAFD4,#A78BD4)" }}>
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/15" />
          <div className="absolute right-8 bottom-0 w-16 h-16 rounded-full bg-white/10" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="font-bold text-[18px]">Good morning, Maham 👋</div>
              <div className="text-[13px] opacity-90">Your customer overview</div>
            </div>
            <div className="text-[10px] opacity-90 mt-1">Today<br/>May 9</div>
          </div>
        </div>

        {/* Satisfaction hero */}
        <div className="card-soft p-5 text-center" style={{ background: "linear-gradient(135deg,#EAF3FB,#F4F0FF)" }}>
          <div className="flex items-end justify-center gap-1">
            <div className="text-[64px] leading-none font-extrabold" style={{ color: "#7AAFD4" }}>78</div>
            <div className="text-slate-400 text-lg pb-2">/100</div>
          </div>
          <div className="text-[13px] text-slate-600 mt-1">Overall Satisfaction</div>
          <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ background: "rgba(126,196,138,0.15)", color: "#5BA56B" }}>
            <TrendingUp size={12} /> +5% from last week
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          <StatCard label="Customers" value="1,240" color="#90C8C0" icon={<Users size={14} />} />
          <StatCard label="At Risk" value="43" color="#E8907A" icon={<AlertTriangle size={14} />} pill />
          <StatCard label="NPS" value="61" color="#7EC48A" icon={<TrendingUp size={14} />} />
        </div>

        {/* Sentiment Trend chart */}
        <div className="card-soft p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-[14px] text-slate-800">Sentiment Trend</div>
            <span className="text-[11px] text-slate-400">7 days</span>
          </div>
          <div style={{ height: 150 }}>
            <ResponsiveContainer>
              <LineChart data={sentimentTrend}>
                <CartesianGrid stroke="#EEF0FF" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[40, 90]} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #EEF0FF", fontSize: 12 }} />
                <Line type="monotone" dataKey="sat" stroke="#7AAFD4" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="nps" stroke="#7EC48A" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-3 text-[11px] text-slate-500 mt-1">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#7AAFD4" }}/>Satisfaction</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#7EC48A" }}/>NPS</span>
          </div>
        </div>

        {/* At-Risk */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-[14px] text-slate-800">Top At-Risk Customers</div>
          <Link to="/alerts" className="text-[12px] font-medium" style={{ color: "#7AAFD4" }}>View All</Link>
        </div>
        <div className="space-y-2">
          {atRisk.map((c) => (
            <Link key={c.id} to={`/customer/${c.id}`} className="card-soft p-3 flex items-center gap-3 tap">
              <Avatar name={c.name} size={42} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-[14px] text-slate-800 truncate">{c.name}</div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(232,144,122,0.15)", color: "#D77962" }}>Risk {c.risk}%</span>
                </div>
                <div className="text-[11px] text-slate-500">Last interaction {c.last}</div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, icon, pill }: { label: string; value: string; color: string; icon: React.ReactNode; pill?: boolean }) {
  return (
    <div className="card-soft p-3">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white mb-1.5" style={{ background: color }}>
        {icon}
      </div>
      <div className="text-[16px] font-bold text-slate-800 leading-tight">{value}</div>
      <div className="text-[11px] text-slate-500 flex items-center gap-1">
        {label}
        {pill && <span className="w-1.5 h-1.5 rounded-full bg-[#E8907A] animate-pulse" />}
      </div>
    </div>
  );
}
