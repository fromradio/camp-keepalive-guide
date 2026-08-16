// 纯 CSS 夜空装饰：月亮 + 星星
export default function NightSky({ children, className = '' }) {
  const stars = [
    { top: '8%', left: '12%', size: 2 }, { top: '15%', left: '28%', size: 1.5 },
    { top: '6%', left: '45%', size: 2 }, { top: '18%', left: '60%', size: 1.5 },
    { top: '10%', left: '74%', size: 2 }, { top: '22%', left: '85%', size: 1.5 },
    { top: '4%', left: '90%', size: 1.5 }, { top: '26%', left: '8%', size: 1.5 },
  ]
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 月亮 */}
      <div className="moon absolute top-6 right-10 h-16 w-16 rounded-full animate-glowpulse" aria-hidden="true" />
      {/* 星星 */}
      {stars.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-paper animate-glowpulse"
          style={{
            top: s.top, left: s.left, width: s.size * 2, height: s.size * 2,
            animationDelay: `${i * 0.45}s`, opacity: 0.7,
          }}
        />
      ))}
      {children}
    </div>
  )
}
