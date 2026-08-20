import { Hourglass, SunMoon, Backpack, Map as MapIcon, TriangleAlert, Users, Target, Eye } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Shot from '../components/Shot.jsx'
import { mechanics } from '../data/mechanics.js'
import { survivorQuotes } from '../data/quotes.js'
import CampfireTalk from '../components/CampfireTalk.jsx'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

const ICONS = {
  hourglass: Hourglass, sunmoon: SunMoon, backpack: Backpack, map: MapIcon, alert: TriangleAlert,
  users: Users, target: Target, eye: Eye,
}

export default function Mechanics() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.mechanics
  const list = mechanics[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} stamp={p.stamp} />

      <CampfireTalk quote={survivorQuotes.mechanics} />

      {/* 真实截图：营地布局（战术地图全景） */}
      <section className="mb-8">
        <h2 className="headline mb-3 text-xl">{p.layoutTitle}</h2>
        <Shot shot={SHOTS.campOverview} />
        <p className="mt-2 text-xs text-bone/40">{p.layoutCaption}</p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((m) => {
          const Icon = ICONS[m.icon] || Hourglass
          return (
            <section key={m.id} className="torn-card p-1.5">
              <div className="torn-card-inner h-full p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-sm border border-ember/60 bg-forest-mid p-2">
                    <Icon size={20} className="text-ember" />
                  </div>
                  <h2 className="headline text-lg">{m.title}</h2>
                </div>
                <ul className="space-y-2.5 text-sm leading-relaxed text-bone/80">
                  {m.points.map((pt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-0.5 shrink-0 text-blood-bright">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )
        })}
      </div>

      {/* 真实截图：白天行动阶段 */}
      <section className="mt-8">
        <h2 className="headline mb-3 text-xl">{p.nightTitle}</h2>
        <Shot shot={SHOTS.dayPhase} />
        <p className="mt-2 text-xs text-bone/40">{p.nightCaption}</p>
      </section>
    </div>
  )
}
