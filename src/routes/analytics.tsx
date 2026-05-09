import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { npsHistory, sentimentBreakdown, channels } from "@/lib/data";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, BarChart, Bar, CartesianGrid } from "recharts";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <div>
      <Header
        title="Analytics"
        right={
          <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-[12px] font-medium text-slate-700 tap" style={{ border: "1px solid #EEF0FF" }}>
            Last 7 Days <ChevronDown size={14} />
          </button>
        }
      />
      <div className="px-5 space-y-4">
        {/* NPS Trend area */}
        <div className="card-soft p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-[14px] text-slate-800">NPS Trend</div>
            <span className="text-[11px] font-semibold" style={{ color: "#5BA56B" }}>54 → 67</span>
          </div>
          <div style={{ height: 160 }}>
            <ResponsiveContainer>
              <AreaChart data={npsHistory}>
                <defs>
                  <linearGradient id="npsfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7AAFD4" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#7AAFD4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#EEF0FF" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[40, 80]} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #EEF0FF", fontSize: 12 }} />
                <Area type="monotone" dataKey="nps" stroke="#7AAFD4" strokeWidth={2.5} fill="url(#npsfill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Breakdown donut */}
        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Sentiment Breakdown</div>
          <div className="relative" style={{ height: 180 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={sentimentBreakdown} dataKey="value" innerRadius={55} outerRadius={75} paddingAngle={3} stroke="none">
                  {sentimentBreakdown.map((s) => (<Cell key={s.name} fill={s.color} />))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-[24px] font-bold text-slate-800">73%</div>
              <div className="text-[10px] text-slate-500">Positive overall</div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-2 mt-2">
            {sentimentBreakdown.map((s) => (
              <span key={s.name} className="px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5" style={{ background: `${s.color}22`, color: s.color }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />{s.name} {s.value}%
              </span>
            ))}
          </div>
        </div>

        {/* Channel performance */}
        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Channel Performance</div>
          <div style={{ height: 180 }}>
            <ResponsiveContainer>
              <BarChart data={channels} layout="vertical" margin={{ left: 8, right: 16 }}>
                <defs>
                  <linearGradient id="barg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7AAFD4" />
                    <stop offset="100%" stopColor="#A78BD4" />
                  </linearGradient>
                </defs>
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#475569" }} axisLine={false} tickLine={false} width={56} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #EEF0FF", fontSize: 12 }} />
                <Bar dataKey="score" fill="url(#barg)" radius={[6, 6, 6, 6]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Loyalty distribution segmented bar */}
        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-3">Loyalty Score Distribution</div>
          <div className="flex h-9 rounded-xl overflow-hidden">
            <div className="flex items-center justify-center text-white text-[11px] font-bold" style={{ width: "22%", background: "#E8907A" }}>270</div>
            <div className="flex items-center justify-center text-white text-[11px] font-bold" style={{ width: "38%", background: "#7AAFD4" }}>470</div>
            <div className="flex items-center justify-center text-white text-[11px] font-bold" style={{ width: "40%", background: "#7EC48A" }}>500</div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 mt-2">
            <span>Low</span><span>Medium</span><span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
