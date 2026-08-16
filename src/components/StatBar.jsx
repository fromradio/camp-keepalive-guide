// 三维属性条：生命值 / 速度 / 力量
export default function StatBar({ label, value, max = 10, color = 'bg-blood' }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="flex items-center gap-2">
      <span className="w-12 shrink-0 text-xs text-bone/70">{label}</span>
      <div className="stat-track flex-1">
        <div
          className={`h-full ${color} transition-[width] duration-500`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
      <span className="w-8 shrink-0 text-right text-xs text-paper-dim">{value}/{max}</span>
    </div>
  )
}
