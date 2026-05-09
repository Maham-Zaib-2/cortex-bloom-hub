import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function Header({ title, back, right }: { title: string; back?: string; right?: React.ReactNode }) {
  return (
    <div className="px-5 pt-6 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {back && (
          <Link to={back} className="w-9 h-9 rounded-full bg-white flex items-center justify-center tap" style={{ boxShadow: "0 2px 8px rgba(120,140,255,0.12)" }}>
            <ArrowLeft size={18} color="#7AAFD4" />
          </Link>
        )}
        <h1 className="text-[20px] font-bold text-slate-800">{title}</h1>
      </div>
      {right}
    </div>
  );
}
