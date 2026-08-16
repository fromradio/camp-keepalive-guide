// 纯 CSS 松树林剪影：多排深浅不一的松树，构成页面顶部/底部装饰
const ROWS = [
  { color: '#12251233', count: 9, height: 90, offset: 0 },
  { color: '#0e1d0e', count: 8, height: 120, offset: 30 },
  { color: '#081208', count: 10, height: 150, offset: -15 },
]

export default function PineForest({ className = '' }) {
  return (
    <div className={`pointer-events-none relative w-full overflow-hidden ${className}`} aria-hidden="true">
      {ROWS.map((row, r) => (
        <div
          key={r}
          className="absolute bottom-0 left-0 flex w-[110%] items-end justify-between"
          style={{ marginLeft: row.offset }}
        >
          {Array.from({ length: row.count }).map((_, i) => {
            const h = row.height + ((i * 37 + r * 13) % 40) - 20
            const w = h * 0.62
            return (
              <div
                key={i}
                className="pine shrink-0"
                style={{ width: w, height: h, background: row.color, transform: `translateX(${(i % 3) * 6 - 6}px)` }}
              />
            )
          })}
        </div>
      ))}
      <div style={{ height: 150 }} />
    </div>
  )
}
