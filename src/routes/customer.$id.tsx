import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Avatar } from "@/components/Avatar";
import { interactions } from "@/lib/data";
import { Phone, Tag, MessageSquare, AlertTriangle, ArrowRight, Mail, MessageCircle, Share2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/customer/$id")({
  component: CustomerDetailPage,
});

const ICON: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Email: Mail, "Live Chat": MessageCircle, "Social Media": Share2,
};

function nameFromId(id: string) {
  return id.split("-").map(p => p[0].toUpperCase() + p.slice(1)).join(" ");
}

function CustomerDetailPage() {
  const { id } = Route.useParams();
  const name = nameFromId(id);
  return (
    <div>
      <Header title="Customer Alert" back="/alerts" />
      <div className="px-5 space-y-4">
        <div className="rounded-2xl p-5 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#EAF3FB,#F4F0FF)", border: "1px solid #EEF0FF" }}>
          <div className="flex justify-center mb-2">
            <Avatar name={name} size={80} />
          </div>
          <div className="text-[20px] font-bold text-slate-800">{name}</div>
          <div className="text-[12px] text-slate-500">{id}@cortex.app</div>
          <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: "#E8907A", boxShadow: "0 0 16px rgba(232,144,122,0.6)" }}>
            Churn Risk: 82%
          </div>
        </div>

        <div className="rounded-xl p-3 flex gap-2.5" style={{ background: "rgba(232,144,122,0.15)", borderLeft: "4px solid #E8907A" }}>
          <AlertTriangle size={18} color="#C9745F" className="shrink-0 mt-0.5" />
          <div className="text-[12px]" style={{ color: "#8C5849" }}>
            Sentiment has dropped for 3 consecutive days. Last 3 interactions were all negative.
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-3">Interaction History</div>
          <div className="relative pl-7">
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-[#EEF0FF]" />
            {interactions.map((it, i) => {
              const Icon = ICON[it.channel] || Mail;
              return (
                <div key={i} className="relative pb-4 last:pb-0">
                  <div className="absolute -left-7 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: it.color }}>
                    <Icon size={13} color="#fff" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] font-semibold text-slate-700">{it.channel}</div>
                    <div className="text-[10px] text-slate-400">{it.date}</div>
                  </div>
                  <div className="text-[12px] text-slate-500 mt-0.5">{it.msg}</div>
                  <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(232,144,122,0.15)", color: "#C9745F" }}>{it.sentiment}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Recommended Actions</div>
          <div className="grid grid-cols-3 gap-2">
            <Action icon={<Phone size={18}/>} label="Call Customer" gradient="linear-gradient(135deg,#7AAFD4,#90C8C0)" onClick={() => toast.success("Calling " + name)} />
            <Action icon={<Tag size={18}/>} label="Offer Discount" gradient="linear-gradient(135deg,#7EC48A,#90C8C0)" onClick={() => toast.success("15% discount sent")} />
            <Action icon={<MessageSquare size={18}/>} label="Send Survey" gradient="linear-gradient(135deg,#A78BD4,#7AAFD4)" onClick={() => toast.success("Re-engagement survey scheduled")} />
          </div>
        </div>

        <div className="card-soft p-4">
          <div className="font-semibold text-[14px] text-slate-800 mb-2">Retention Score Change</div>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="text-[10px] text-slate-500">Before</div>
              <div className="text-[24px] font-bold text-slate-700">68</div>
            </div>
            <ArrowRight size={20} color="#E8907A" />
            <div className="text-center">
              <div className="text-[10px] text-slate-500">After</div>
              <div className="text-[24px] font-bold" style={{ color: "#E8907A" }}>43</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action({ icon, label, gradient, onClick }: { icon: React.ReactNode; label: string; gradient: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="card-soft p-3 flex flex-col items-center gap-1.5 tap">
      <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white" style={{ background: gradient, boxShadow: "0 6px 16px rgba(122,175,212,0.3)" }}>
        {icon}
      </div>
      <div className="text-[10px] font-semibold text-slate-700 text-center leading-tight">{label}</div>
    </button>
  );
}
