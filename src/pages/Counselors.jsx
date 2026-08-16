import { Archive } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import StatBar from '../components/StatBar.jsx'
import RatingBadge from '../components/RatingBadge.jsx'
import Shot from '../components/Shot.jsx'
import { counselors, rosterNote } from '../data/counselors.js'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export default function Counselors() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.counselors
  const list = counselors[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} stamp={p.stamp} />

      {/* 真实截图：选人界面 + 人事档案 */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <Shot shot={SHOTS.counselorSelect} />
        <Shot shot={SHOTS.staffFiles} />
      </div>

      <div className="space-y-8">
        {list.map((c) => (
          <article key={c.id} className="torn-card p-1.5">
            <div className="torn-card-inner p-5 md:p-6">
              <div className="flex flex-col gap-5 md:flex-row">
                {/* 游戏内证件照 + 评级 */}
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <img
                    src={c.portrait}
                    alt={`${c.name} portrait`}
                    loading="lazy"
                    className="pixelated h-36 w-auto shrink-0 rounded-sm border-2 border-ember/70 bg-black object-cover"
                  />
                  <RatingBadge rating={c.rating} />
                </div>

                {/* 主体信息 */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h2 className="headline text-xl">{c.name}</h2>
                    <span className="text-sm text-ember">{c.title}</span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-sm border border-forest-light bg-forest-mid/60 px-2 py-0.5 text-xs text-paper-dim">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* 三维属性条 */}
                  <div className="mb-4 grid max-w-md gap-2">
                    <StatBar label={s.common.hp} value={c.stats.hp} color="bg-blood" />
                    <StatBar label={s.common.speed} value={c.stats.speed} color="bg-ember" />
                    <StatBar label={s.common.power} value={c.stats.power} color="bg-paper-dim" />
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-bone/85">
                    <span className="font-bold text-paper">{s.common.specialty}：</span>{c.specialty}
                  </p>
                  <p className="text-sm leading-relaxed text-bone/75">
                    <span className="font-bold text-paper">{s.common.advice}：</span>{c.strategy}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 名册说明 */}
      <div className="mt-8 flex gap-3 rounded-sm border border-forest-light bg-forest-mid/40 p-4">
        <Archive size={18} className="mt-0.5 shrink-0 text-paper-dim" />
        <p className="text-sm leading-relaxed text-bone/70">{rosterNote[lang]}</p>
      </div>
    </div>
  )
}
