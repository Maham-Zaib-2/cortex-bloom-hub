import { gradientFor, initials } from "@/lib/avatars";

export function Avatar({ name, size = 40, className = "" }: { name: string; size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-semibold shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: gradientFor(name),
        fontSize: size * 0.36,
        boxShadow: "0 4px 12px rgba(120,140,255,0.25)",
      }}
    >
      {initials(name)}
    </div>
  );
}
