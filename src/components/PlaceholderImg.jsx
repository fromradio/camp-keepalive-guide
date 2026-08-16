// 统一占位图组件：placehold.co 风格化占位图（用于暂无真实截图的条目）
export function screenshotUrl(desc, width = 640, height = 360) {
  return `https://placehold.co/${width}x${height}/1a2f1a/cc3333?text=Camp+Screenshot:+${desc.replace(/\s+/g, '+')}`
}

export default function PlaceholderImg({ desc, width = 640, height = 360, className = '', alt }) {
  return (
    <img
      src={screenshotUrl(desc, width, height)}
      alt={alt || `Screenshot placeholder: ${desc}`}
      width={width}
      height={height}
      loading="lazy"
      className={`block w-full border border-forest-light object-cover ${className}`}
    />
  )
}
