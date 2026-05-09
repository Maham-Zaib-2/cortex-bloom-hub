import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Avatar } from "@/components/Avatar";
import { Bell, Sliders, Globe, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const nav = useNavigate();
  const items = [
    { icon: Bell, label: "Notification Settings", sub: "Email, push, daily digest", grad: "linear-gradient(135deg,#7AAFD4,#A78BD4)" },
    { icon: Sliders, label: "Alert Preferences", sub: "Risk thresholds & channels", grad: "linear-gradient(135deg,#90C8C0,#7AAFD4)" },
    { icon: Globe, label: "Language", sub: "English (US)", grad: "linear-gradient(135deg,#7EC48A,#90C8C0)" },
    { icon: Shield, label: "Privacy Policy", sub: "How we handle your data", grad: "linear-gradient(135deg,#A78BD4,#7AAFD4)" },
    { icon: HelpCircle, label: "Help and Support", sub: "FAQs, contact support", grad: "linear-gradient(135deg,#D4B870,#E8907A)" },
  ];
  return (
    <div>
      <Header title="Profile" />
      <div className="px-5 space-y-4">
        <div className="card-soft p-5 text-center" style={{ background: "linear-gradient(135deg,#EAF3FB,#F4F0FF)" }}>
          <div className="flex justify-center mb-2">
            <Avatar name="Maham Aurangzaib" size={96} />
          </div>
          <div className="text-[20px] font-bold text-slate-800">Maham Aurangzaib</div>
          <div className="text-[12px] text-slate-500">Customer Service Manager</div>
          <div className="inline-block mt-2 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "rgba(122,175,212,0.18)", color: "#5588B0" }}>SP25-BCT-022</div>
          <div className="text-[11px] text-slate-500 mt-1">COMSATS University</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Mini value="24" label="Alerts Resolved" />
          <Mini value="12" label="Surveys Sent" />
          <Mini value="48" label="Customers" />
        </div>

        <div className="card-soft overflow-hidden">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <button key={it.label} onClick={() => toast(it.label + " opened")} className={`w-full flex items-center gap-3 p-3.5 tap ${i < items.length - 1 ? "border-b border-[#EEF0FF]" : ""}`}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ background: it.grad }}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[13px] font-semibold text-slate-800">{it.label}</div>
                  <div className="text-[10px] text-slate-500">{it.sub}</div>
                </div>
                <ChevronRight size={16} className="text-slate-400" />
              </button>
            );
          })}
          <button onClick={() => { toast.success("Logged out"); setTimeout(() => nav("/"), 400); }} className="w-full flex items-center gap-3 p-3.5 tap border-t border-[#EEF0FF]">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(232,144,122,0.18)" }}>
              <LogOut size={16} color="#E8907A" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[13px] font-semibold" style={{ color: "#E8907A" }}>Logout</div>
              <div className="text-[10px] text-slate-500">Sign out of your account</div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>
        </div>

        <div className="text-center text-[11px] text-slate-400 pt-1">CorteX v1.0.0</div>
      </div>
    </div>
  );
}

function Mini({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-soft p-3 text-center">
      <div className="text-[18px] font-bold gradient-text">{value}</div>
      <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{label}</div>
    </div>
  );
}
