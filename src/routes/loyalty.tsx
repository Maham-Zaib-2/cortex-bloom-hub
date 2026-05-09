import { Header } from "@/components/Header";
import { Avatar } from "@/components/Avatar";
import { leaderboard, loyaltyTrend } from "@/lib/data";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Area, AreaChart } from "recharts";
import { toast } from "sonner";

export default function LoyaltyPage() {
  const atRisk = leaderboard.filter((l) => l.score < 65);
  return (
    <div>
      <Header title="Loyalty Scores" />
      <div className="px-5 space-y-4">
        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-3">NPS Breakdown</div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <Stat label="Promoters" value="42%" color="#7EC48A" />
            <Stat label="Passives" value="31%" color="#7AAFD4" />
            <Stat label="Detractors" value="27%" color="#E8907A" />
          </div>
          <div className="flex h-3 rounded-full overflow-hidden">
            <div style={{ width: "42%", background: "#7EC48A" }} />
            <div style={{ width: "31%", background: "#7AAFD4" }} />
            <div style={{ width: "27%", background: "#E8907A" }} />
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-3">Loyalty Leaderboard</div>
          <div className="space-y-3">
            {leaderboard.map((c, i) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-6 text-center text-[12px] font-bold text-slate-500">#{i + 1}</div>
                <Avatar name={c.name} size={36} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-slate-800 truncate">{c.name}</div>
                  <div className="h-1.5 mt-1 rounded-full bg-[#EEF0FF] overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: `${c.score}%`,
                      background: c.score >= 75 ? "#7EC48A" : c.score >= 60 ? "#7AAFD4" : "#E8907A",
                    }} />
                  </div>
                </div>
                <div className="text-[14px] font-bold text-slate-800 w-8 text-right">{c.score}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Loyalty Trend</div>
          <div style={{ height: 140 }}>
            <ResponsiveContainer>
              <AreaChart data={loyaltyTrend}>
                <defs>
                  <linearGradient id="loyfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BD4" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#A78BD4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[40, 80]} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #EEF0FF", fontSize: 12 }} />
                <Area type="monotone" dataKey="score" stroke="#A78BD4" strokeWidth={2.5} fill="url(#loyfill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <div className="font-semibold text-[14px] text-slate-800 mb-2">At-Risk Loyalty</div>
          <div className="space-y-2">
            {atRisk.map((c) => (
              <div key={c.name} className="card-soft p-3 flex items-center gap-3">
                <Avatar name={c.name} size={40} />
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-slate-800">{c.name}</div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(232,144,122,0.15)", color: "#D77962" }}>Score {c.score}</span>
                </div>
                <button onClick={() => toast.success(`Re-engagement survey sent to ${c.name}`)} className="btn-primary text-[11px] px-3 py-2">Re-engage</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="text-center p-2 rounded-xl" style={{ background: `${color}18` }}>
      <div className="text-[18px] font-bold" style={{ color }}>{value}</div>
      <div className="text-[10px] text-slate-500">{label}</div>
    </div>
  );
}
