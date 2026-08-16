// 纯 CSS 篝火：火焰微微跳动（仅 transform/opacity，性能友好）
export default function Campfire({ size = 96, className = '' }) {
  const flame = (w, h, color, delay, dur) => ({
    width: w, height: h, background: color,
    borderRadius: '50% 50% 45% 45% / 70% 70% 35% 35%',
    transformOrigin: '50% 100%',
    animation: `flicker ${dur}s ease-in-out ${delay}s infinite`,
  })
  return (
    <div className={`relative flex items-end justify-center ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      {/* 光晕 */}
      <div
        className="absolute bottom-1 rounded-full animate-glowpulse"
        style={{ width: size * 1.5, height: size * 0.9, background: 'radial-gradient(ellipse, rgba(255,107,53,0.25) 0%, transparent 70%)' }}
      />
      {/* 木柴 */}
      <div className="absolute bottom-0 flex gap-1">
        <div style={{ width: size * 0.55, height: size * 0.08, background: '#3a2a18', borderRadius: 4, transform: 'rotate(9deg)' }} />
        <div style={{ width: size * 0.55, height: size * 0.08, background: '#2e2113', borderRadius: 4, transform: 'rotate(-9deg) translateX(-6px)' }} />
      </div>
      {/* 三层火焰 */}
      <div className="absolute flex items-end" style={{ bottom: size * 0.08 }}>
        <div style={flame(size * 0.34, size * 0.6, 'rgba(255,107,53,0.85)', 0, 0.9)} />
        <div className="absolute" style={{ ...flame(size * 0.22, size * 0.42, 'rgba(255,170,60,0.9)', 0.2, 0.75), left: size * 0.06, bottom: 0 }} />
        <div className="absolute" style={{ ...flame(size * 0.11, size * 0.24, 'rgba(255,230,150,0.95)', 0.35, 0.6), left: size * 0.115, bottom: 0 }} />
      </div>
    </div>
  )
}
