import { Axe, Skull, TreePine, Ghost, Flame, Smile } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import DangerTag from '../components/DangerTag.jsx'
import ConfidenceTag from '../components/ConfidenceTag.jsx'
import PlaceholderImg from '../components/PlaceholderImg.jsx'
import Shot from '../components/Shot.jsx'
import { monsters } from '../data/monsters.js'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

// 怪物威胁图标（组合方案：小丑 = Flame + Smile）
const THEME_BORDER = {
  high: 'border-blood shadow-[0_0_14px_rgba(204,51,51,0.35)]',
  mid: 'border-[#e8b93c] shadow-[0_0_10px_rgba(232,185,60,0.25)]',
  low: 'border-green-600 shadow-[0_0_8px_rgba(34,197,94,0.2)]',
}
const THEME_TEXT = { high: 'text-blood-bright', mid: 'text-[#e8b93c]', low: 'text-green-500' }

function MonsterIcon({ theme, danger }) {
  const box = `relative flex h-20 w-20 shrink-0 items-center justify-center rounded-sm border-2 bg-forest-mid ${THEME_BORDER[danger]}`
  const txt = THEME_TEXT[danger]
  if (theme === 'clown') {
    return (
      <div className={box}>
        <Smile size={36} className={txt} />
        <Flame size={18} className={`absolute -right-1.5 -top-1.5 ${txt}`} />
      </div>
    )
  }
  const Icon = { axe: Axe, skull: Skull, tree: TreePine, ghost: Ghost }[theme] || Skull
  return (
    <div className={box}>
      <Icon size={38} className={txt} />
    </div>
  )
}

export default function Monsters() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.monsters
  const list = monsters[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} stamp={p.stamp} />

      {/* 真实截图：怪物情报提示 */}
      <div className="mb-8">
        <Shot shot={SHOTS.monsterTip} />
      </div>

      <div className="space-y-8">
        {list.map((m) => (
          <article key={m.id} className="torn-card p-1.5 transition-transform hover:-translate-y-0.5">
            <div className="torn-card-inner group p-5 md:p-6">
              <div className="flex flex-col gap-5 md:flex-row">
                {/* hover 抖动动画 */}
                <div className="group-hover:animate-shake">
                  <MonsterIcon theme={m.iconTheme} danger={m.danger} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="headline text-xl">{m.name}</h2>
                    <DangerTag level={m.danger} />
                    <ConfidenceTag level={m.confidence} />
                    <span className="text-xs text-bone/50">{s.common.appears}: {m.nights}</span>
                  </div>

                  <dl className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-bold text-paper">{s.common.behavior}</dt>
                      <dd className="text-bone/80">{m.behavior}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-ember">{s.common.weakness}</dt>
                      <dd className="text-bone/80">{m.weakness}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-paper">{s.common.counter}</dt>
                      <dd className="text-bone/80">{m.strategy}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-5">
                <PlaceholderImg desc={m.screenshot} alt={`${m.name} encounter screenshot (placeholder)`} />
                <p className="mt-2 text-xs text-bone/40">{s.common.placeholderNote}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
