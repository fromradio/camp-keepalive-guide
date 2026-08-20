// 营火夜话：社区风格引语块（篝火旁听来的生存智慧）
// quote: { zh: { text, src }, en: { text, src } }
import { useLang } from '../i18n/LanguageContext.jsx'

export default function CampfireTalk({ quote }) {
  const { lang } = useLang()
  const q = quote[lang]
  if (!q) return null
  return (
    <figure className="my-8 border-l-4 border-ember/70 bg-forest-mid/50 p-4">
      <blockquote className="italic leading-relaxed text-paper/90">“{q.text}”</blockquote>
      <figcaption className="mt-2 text-right text-xs tracking-wide text-paper/50">
        —— {q.src}
      </figcaption>
    </figure>
  )
}
