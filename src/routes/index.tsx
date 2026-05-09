import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("maham@cortex.app");
  const [pw, setPw] = useState("•••••••");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome back, Maham!");
    setTimeout(() => nav({ to: "/home" }), 400);
  };

  return (
    <div
      className="relative min-h-[844px] flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background: "linear-gradient(120deg,#EAF3FF 0%,#F0EAFF 50%,#EAF5FF 100%)",
        backgroundSize: "200% 200%",
        animation: "bg-shift 12s ease-in-out infinite",
      }}
    >
      {/* Blurred decorative circles */}
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full" style={{ background: "#B4D4F0", filter: "blur(40px)", opacity: 0.45 }} />
      <div className="absolute top-32 -right-12 w-52 h-52 rounded-full" style={{ background: "#C4B0E8", filter: "blur(40px)", opacity: 0.45 }} />
      <div className="absolute bottom-20 left-10 w-44 h-44 rounded-full" style={{ background: "#90C8C0", filter: "blur(40px)", opacity: 0.4 }} />

      <div className="relative w-full bg-white p-8 animate-fade-in" style={{ borderRadius: 24, boxShadow: "0 20px 50px -10px rgba(120,140,255,0.25)" }}>
        <div className="flex flex-col items-center">
          <Logo size={48} />
        </div>
        <div className="h-6" />
        <h2 className="text-[18px] font-bold text-slate-800">Welcome back</h2>
        <p className="text-[13px] text-slate-500 mt-1">Sign in to continue</p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-soft w-full pl-9 pr-3 py-3 text-[14px]" placeholder="Email" />
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type={show ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} className="input-soft w-full pl-9 pr-9 py-3 text-[14px]" placeholder="Password" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <div className="text-right">
            <a className="text-[12px] font-medium" style={{ color: "#7AAFD4" }} href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn-primary w-full text-[15px]" style={{ height: 52 }}>
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#EEF0FF]" />
          <span className="text-[11px] text-slate-400">or</span>
          <div className="flex-1 h-px bg-[#EEF0FF]" />
        </div>

        <button onClick={() => toast("Google sign-in coming soon")} className="w-full flex items-center justify-center gap-2 bg-white border border-[#E0E8FF] py-3 rounded-xl text-[14px] font-medium text-slate-700 tap">
          <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35 26.8 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.6l6.3 5.3C40.9 35.7 44 30.3 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
          Continue with Google
        </button>

        <p className="text-center text-[12px] text-slate-400 mt-5">Need access? Contact your admin</p>
      </div>
    </div>
  );
}
