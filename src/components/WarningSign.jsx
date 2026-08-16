// 纯 CSS 警告标志：黄色三角 + 感叹号
export default function WarningSign({ size = 56, label, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className="relative"
        style={{
          width: size, height: size * 0.9,
          background: 'linear-gradient(160deg, #e8b93c 0%, #c9952a 100%)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
        }}
        role="img"
        aria-label={label || '警告标志'}
      >
        <div
          className="absolute"
          style={{
            inset: '18% 12% 6% 12%',
            background: '#141408',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="absolute flex items-end justify-center"
          style={{
            inset: '26% 20% 12% 20%',
            background: '#e8b93c',
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <span className="font-display leading-none text-[#141408]" style={{ fontSize: size * 0.34, transform: 'translateY(-2px)' }}>!</span>
        </div>
      </div>
      {label && <span className="font-display text-xs uppercase tracking-widest text-[#e8b93c]">{label}</span>}
    </div>
  )
}
