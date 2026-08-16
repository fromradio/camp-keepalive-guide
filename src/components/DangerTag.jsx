import { useLang } from '../i18n/LanguageContext.jsx'

// 危险度标签：🔴高危 / 🟡中危 / 🟢低危（双语）
const LEVELS = {
  high: { text: { zh: '🔴 高危', en: '🔴 HIGH' }, cls: 'border-blood text-blood-bright bg-blood/10' },
  mid: { text: { zh: '🟡 中危', en: '🟡 MEDIUM' }, cls: 'border-[#e8b93c] text-[#e8b93c] bg-[#e8b93c]/10' },
  low: { text: { zh: '🟢 低危', en: '🟢 LOW' }, cls: 'border-green-500 text-green-400 bg-green-500/10' },
}

export default function DangerTag({ level, className = '' }) {
  const { lang } = useLang()
  const l = LEVELS[level] || LEVELS.mid
  return (
    <span className={`inline-block rounded-sm border px-2 py-0.5 text-xs font-bold ${l.cls} ${className}`}>
      {l.text[lang]}
    </span>
  )
}
