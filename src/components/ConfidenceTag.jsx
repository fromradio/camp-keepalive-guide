import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

// 内容可信度标注：✅ 官方截图确认 / 📰 媒体报道 / 📂 档案待补
const MAP = {
  verified: { key: 'confVerified', cls: 'border-green-600/60 text-green-400 bg-green-500/10' },
  partial: { key: 'confPartial', cls: 'border-[#e8b93c]/60 text-[#e8b93c] bg-[#e8b93c]/10' },
  kotaku: { key: 'confKotaku', cls: 'border-sky-600/60 text-sky-400 bg-sky-500/10' },
}

export default function ConfidenceTag({ level, className = '' }) {
  const { lang } = useLang()
  const s = ui[lang]
  const c = MAP[level]
  if (!c) return null
  return (
    <span className={`inline-block rounded-sm border px-2 py-0.5 text-[11px] ${c.cls} ${className}`}>
      {s.common[c.key]}
    </span>
  )
}
