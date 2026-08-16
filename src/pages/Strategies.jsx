import { ShieldAlert, Package, Scale } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Shot from '../components/Shot.jsx'
import { nightStrategies } from '../data/strategies.js'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export default function Strategies() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.strategies
  const list = nightStrategies[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} stamp={p.stamp} />

      {/* 真实截图：关卡目标界面 */}
      <section className="mb-8">
        <Shot shot={SHOTS.levelSelect} />
      </section>

      <div className="relative space-y-8 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-0.5 before:bg-forest-light md:before:left-[23px]">
        {list.map((n) => (
          <article key={n.night} className="relative pl-12 md:pl-16">
            {/* 时间轴节点 */}
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-sm border-2 border-blood bg-forest-deep font-display text-lg text-blood-bright md:h-12 md:w-12">
              {n.night}
            </div>

            <div className="torn-card p-1.5">
              <div className="torn-card-inner p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h2 className="headline text-xl">{n.title}</h2>
                  <span className="rounded-sm border border-ember/60 bg-ember/10 px-2 py-0.5 text-xs text-ember">
                    {p.threat}: {n.threat}
                  </span>
                </div>

                <p className="mb-4 text-sm">
                  <span className="font-bold text-paper">{p.posture}：</span>
                  <span className="text-bone/85">{n.posture}</span>
                </p>

                <div className="mb-4">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-paper">
                    <ShieldAlert size={16} className="text-blood-bright" /> {p.deployment}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-bone/80">
                    {n.deployment.map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="shrink-0 text-blood-bright">{i + 1}.</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3 flex gap-2 rounded-sm border border-blood/40 bg-blood/5 p-3 text-sm">
                  <Scale size={16} className="mt-0.5 shrink-0 text-blood-bright" />
                  <p className="text-bone/80"><span className="font-bold text-paper">{p.judgment}：</span>{n.judgment}</p>
                </div>

                <div className="flex gap-2 rounded-sm border border-forest-light bg-forest-mid/40 p-3 text-sm">
                  <Package size={16} className="mt-0.5 shrink-0 text-ember" />
                  <p className="text-bone/80"><span className="font-bold text-paper">{p.supplies}：</span>{n.supplies}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
