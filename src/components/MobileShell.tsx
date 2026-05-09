import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, BarChart3, MessageSquare, Bell, User } from "lucide-react";
import { Toaster } from "sonner";

const tabs = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/feedback", label: "Feedback", icon: MessageSquare },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/profile", label: "Profile", icon: User },
];

export function MobileShell() {
  const loc = useLocation();
  const isLogin = loc.pathname === "/" || loc.pathname === "/login";
  return (
    <div className="w-full flex items-center justify-center sm:py-6" style={{ minHeight: "100dvh", background: "linear-gradient(135deg,#E6ECFF 0%,#ECE6FF 50%,#E6F0FF 100%)" }}>
      <div
        className="relative w-[390px] max-w-full bg-[#F0F4FF] overflow-hidden flex flex-col mx-auto"
        style={{
          height: "min(844px, 100dvh)",
          borderRadius: "clamp(0px, 4vw, 36px)",
          boxShadow: "0 30px 80px -20px rgba(80,90,180,0.35), 0 0 0 8px #fff, 0 0 0 9px #E5E8FF",
        }}
      >
        <div key={loc.pathname} className="animate-slide-in-right flex-1 overflow-y-auto scrollbar-hide" style={{ paddingBottom: isLogin ? 0 : 16 }}>
          <Outlet />
        </div>
        {!isLogin && (
          <nav
            className="shrink-0 bg-white flex items-stretch justify-around"
            style={{ height: 64, borderTop: "1px solid #EEF0FF" }}
          >
            {tabs.map((t) => {
              const active = loc.pathname.startsWith(t.to);
              const Icon = t.icon;
              return (
                <Link key={t.to} to={t.to} className="flex-1 flex flex-col items-center justify-center relative tap">
                  <Icon size={22} color={active ? "#7AAFD4" : "#9aa3b8"} strokeWidth={active ? 2.4 : 2} />
                  <span className="text-[10px] mt-0.5" style={{ color: active ? "#7AAFD4" : "#9aa3b8", fontWeight: active ? 600 : 500 }}>{t.label}</span>
                  {active && (
                    <span className="absolute top-1 h-1 w-8 rounded-full" style={{ background: "linear-gradient(90deg,#7AAFD4,#A78BD4)" }} />
                  )}
                </Link>
              );
            })}
          </nav>
        )}
        <Toaster position="top-center" richColors closeButton />
      </div>
    </div>
  );
}
