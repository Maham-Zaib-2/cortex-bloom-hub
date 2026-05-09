export function Logo({ size = 40, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-2xl text-white font-bold"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg,#7AAFD4,#A78BD4)",
          fontSize: size * 0.42,
          boxShadow: "0 6px 16px rgba(122,175,212,0.4)",
        }}
      >
        CX
      </div>
      {showText && (
        <div className="leading-tight">
          <div className="font-bold text-[18px] text-slate-800">CorteX</div>
          <div className="text-[10px] text-slate-500">Customer Intelligence</div>
        </div>
      )}
    </div>
  );
}
