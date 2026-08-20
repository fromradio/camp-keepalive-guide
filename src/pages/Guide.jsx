import { CheckSquare, Square, Skull, Users, Lightbulb } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Shot from '../components/Shot.jsx'
import Campfire from '../components/Campfire.jsx'
import { firstFiveMinutes, commonDeaths, openingPicks, mustKnowTips } from '../data/guide.js'
import { survivorQuotes } from '../data/quotes.js'
import CampfireTalk from '../components/CampfireTalk.jsx'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export default function Guide() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.guide
  const checklist = firstFiveMinutes[lang]
  const deaths = commonDeaths[lang]
  const picks = openingPicks[lang]
  const tips = mustKnowTips[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} stamp={p.stamp} />

      <CampfireTalk quote={survivorQuotes.guide} />

      {/* 真实截图：选人界面 */}
      <section className="mb-8">
        <Shot shot={SHOTS.counselorSelect} />
      </section>

      {/* 前 5 分钟必做 checklist */}
      <section className="torn-card mb-10 p-1.5">
        <div className="torn-card-inner p-6">
          <div className="mb-4 flex items-center gap-3">
            <Campfire size={48} />
            <h2 className="headline text-xl">{p.checklistTitle}</h2>
          </div>
          <ol className="space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {item.critical ? (
                  <CheckSquare size={20} className="mt-0.5 shrink-0 text-blood-bright" />
                ) : (
                  <Square size={20} className="mt-0.5 shrink-0 text-bone/40" />
                )}
                <span className="text-sm leading-relaxed text-bone/85">
                  <span className="mr-1 font-display text-paper-dim">{i + 1}.</span>
                  {item.text}
                  {item.critical && (
                    <span className="ml-2 rounded-sm bg-blood/20 px-1.5 py-0.5 text-[11px] font-bold text-blood-bright">{s.common.key}</span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 开局角色选择 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-xl">{p.picksTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {picks.map((pk, i) => (
            <div key={pk.pick} className={`torn-card p-1.5 ${i === 0 ? 'ring-2 ring-ember/60' : ''}`}>
              <div className="torn-card-inner h-full p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Users size={18} className="text-ember" />
                  <h3 className="font-bold text-paper">{pk.pick}</h3>
                </div>
                <p className="mb-2 rounded-sm border border-forest-light bg-forest-mid/50 px-2 py-1.5 text-sm text-ember">{pk.team}</p>
                <p className="text-sm leading-relaxed text-bone/75">{pk.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 常见死法 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-xl">{p.deathsTitle}</h2>
        <div className="space-y-4">
          {deaths.map((d, i) => (
            <div key={d.title} className="flex gap-3 rounded-sm border border-blood/40 bg-blood/5 p-4">
              <Skull size={20} className="mt-0.5 shrink-0 text-blood-bright" />
              <div>
                <h3 className="mb-1 font-bold text-paper">
                  {p.deathLabel} {i + 1}: {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-bone/80">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 必知技巧 */}
      <section className="torn-card p-1.5">
        <div className="torn-card-inner p-6">
          <h2 className="headline mb-4 text-xl">{p.tipsTitle}</h2>
          <ul className="space-y-3">
            {tips.map((t, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-bone/85">
                <Lightbulb size={18} className="mt-0.5 shrink-0 text-ember" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
