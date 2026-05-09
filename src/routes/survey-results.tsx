import { Header } from "@/components/Header";
import { responseDist, responses } from "@/lib/data";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from "recharts";
import { Star, Download } from "lucide-react";
import { toast } from "sonner";

export default function SurveyResultsPage() {
  return (
    <div>
      <Header title="Customer Satisfaction Survey" back="/feedback" />
      <div className="px-5 space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <Pill value="68" label="Responses" color="#7AAFD4" />
          <Pill value="68%" label="Rate" color="#7EC48A" />
          <Pill value="7.8/10" label="Avg" color="#A78BD4" />
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Response Distribution</div>
          <div style={{ height: 170 }}>
            <ResponsiveContainer>
              <BarChart data={responseDist}>
                <CartesianGrid stroke="#EEF0FF" vertical={false} />
                <XAxis dataKey="rating" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #EEF0FF", fontSize: 12 }} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {responseDist.map((d) => {
                    const r = parseInt(d.rating);
                    const c = r >= 8 ? "#7EC48A" : r >= 6 ? "#7AAFD4" : "#E8907A";
                    return <Cell key={d.rating} fill={c} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Common Themes</div>
          <div className="text-[11px] text-slate-500 mb-1.5">Positive</div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["helpful staff","easy to use","great service","fast support"].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium" style={{ background: "#EDF5EE", color: "#5BA56B" }}>{t}</span>
            ))}
          </div>
          <div className="text-[11px] text-slate-500 mb-1.5">Negative</div>
          <div className="flex flex-wrap gap-1.5">
            {["slow response","needs improvement","unclear pricing"].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium" style={{ background: "#FDF0EE", color: "#C9745F" }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-3">Responses</div>
          <div className="space-y-3">
            {responses.map((r, i) => (
              <div key={i} className="pb-3" style={{ borderBottom: i < responses.length - 1 ? "1px solid #EEF0FF" : "none" }}>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <Star key={j} size={11} fill={j < r.rating ? "#D4B870" : "transparent"} color={j < r.rating ? "#D4B870" : "#E0E8FF"} strokeWidth={1.5} />
                  ))}
                </div>
                <div className="text-[12px] text-slate-600 italic">"{r.text}"</div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>{r.name}</span><span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => toast.success("Results exported as CSV")} className="w-full py-3 rounded-xl bg-white flex items-center justify-center gap-2 text-[13px] font-semibold tap" style={{ border: "1px solid #7AAFD4", color: "#7AAFD4" }}>
          <Download size={14}/> Export Results
        </button>
      </div>
    </div>
  );
}

function Pill({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="card-soft p-3 text-center">
      <div className="text-[18px] font-bold" style={{ color }}>{value}</div>
      <div className="text-[10px] text-slate-500">{label}</div>
    </div>
  );
}
