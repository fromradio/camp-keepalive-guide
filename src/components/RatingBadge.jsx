import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

const STYLES = {
  S: 'bg-blood text-paper border-blood-bright shadow-[0_0_10px_rgba(204,51,51,0.5)]',
  A: 'bg-ember/90 text-forest-deep border-ember',
  B: 'bg-paper-dim/80 text-forest-deep border-paper-dim',
  C: 'bg-bone/20 text-bone border-bone/40',
}

// 存活评级徽章：S / A / B / C
export default function RatingBadge({ rating, className = '' }) {
  const { lang } = useLang()
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-sm border-2 font-display text-lg ${STYLES[rating] || STYLES.C} ${className}`}
      title={`${ui[lang].common.ratingTitle} ${rating}`}
    >
      {rating}
    </span>
  )
}
