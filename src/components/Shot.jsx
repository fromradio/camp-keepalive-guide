// 真实截图组件：本地 /screenshots/ 图片 + 双语说明文字
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export default function Shot({ shot, className = '', imgClassName = '', showCaption = true }) {
  const { lang } = useLang()
  const s = ui[lang]
  const caption = s.shots[shot.captionKey] || ''
  return (
    <figure className={className}>
      <img
        src={shot.src}
        alt={caption}
        loading="lazy"
        className={`block w-full border border-forest-light object-cover ${imgClassName}`}
      />
      {showCaption && (
        <figcaption className="mt-2 text-xs text-bone/40">
          {s.common.realShot} — {caption}
        </figcaption>
      )}
    </figure>
  )
}
