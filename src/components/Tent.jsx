// 纯 CSS 帐篷简笔画
export default function Tent({ size = 110, className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 0.72 }} aria-hidden="true">
      {/* 帐篷主体 */}
      <div
        className="absolute inset-x-0 bottom-0 mx-auto"
        style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(160deg, #6b4a2a 0%, #4a3018 100%)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      />
      {/* 帐篷入口 */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: '34%', height: '52%',
          background: '#0d1208',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
        }}
      />
      {/* 中缝线 */}
      <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-black/40" />
    </div>
  )
}
