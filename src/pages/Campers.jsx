import { Users, Route, HeartHandshake } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import DangerTag from '../components/DangerTag.jsx'
import Shot from '../components/Shot.jsx'
import { camperTypes, priorityMatrix, evacuationRoutes, dilemmas } from '../data/campers.js'
import { SHOTS } from '../data/screenshots.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

function fragilityLevel(v) {
  const s = String(v).toLowerCase()
  if (s === '高' || s === 'high') return 'high'
  if (s === '中' || s === 'mid') return 'mid'
  return 'low'
}

export default function Campers() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.campers
  const types = camperTypes[lang]
  const matrix = priorityMatrix[lang]
  const routes = evacuationRoutes[lang]
  const dms = dilemmas[lang]

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} />

      {/* 营员类型 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-xl">{p.typesTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {types.map((c) => (
            <div key={c.id} className="torn-card p-1.5">
              <div className="torn-card-inner h-full p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-ember" />
                    <h3 className="font-bold text-paper">{c.name}</h3>
                  </div>
                  <DangerTag level={fragilityLevel(c.fragility)} />
                </div>
                <p className="text-sm leading-relaxed text-bone/80">{c.desc}</p>
                <p className="mt-2 text-xs text-bone/50">{s.common.value}: {c.value} · {s.common.fragility}: {c.fragility}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 保护优先级矩阵 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-xl">{p.matrixTitle}</h2>
        <p className="mb-4 text-sm text-bone/70">{p.matrixDesc}</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-forest-light bg-forest-mid/60 p-3 text-left text-paper-dim">{p.matrixHeader}</th>
                {matrix.columns.map((col) => (
                  <th key={col} className="border border-forest-light bg-forest-mid/60 p-3 text-left text-paper">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((row) => (
                <tr key={row.label}>
                  <th className="border border-forest-light bg-forest-mid/40 p-3 text-left font-bold text-bone">{row.label}</th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="border border-forest-light p-3 align-top">
                      <span className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-xs font-bold ${
                        ['最高优先级', 'Top priority'].includes(cell.verdict) ? 'bg-blood/20 text-blood-bright' :
                        ['战术权衡', 'Tactical call'].includes(cell.verdict) ? 'bg-ember/15 text-ember' :
                        'bg-forest-light/40 text-bone/70'
                      }`}>{cell.verdict}</span>
                      <p className="text-bone/75">{cell.action}</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 疏散路线 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-xl">{p.routesTitle}</h2>
        <div className="space-y-4">
          {routes.map((r) => (
            <div key={r.name} className="torn-card p-1.5">
              <div className="torn-card-inner p-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <Route size={18} className="text-ember" />
                  <h3 className="font-bold text-paper">{r.name}</h3>
                  <span className="rounded-sm border border-forest-light bg-forest-mid/60 px-2 py-0.5 text-xs text-bone/70">
                    {s.common.risk}: {r.risk}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-bone/80">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Shot shot={SHOTS.campOverview} />
        </div>
      </section>

      {/* 牺牲 / 救援抉择 */}
      <section>
        <h2 className="headline mb-4 text-xl">{p.dilemmaTitle}</h2>
        <div className="space-y-4">
          {dms.map((d) => (
            <div key={d.title} className="flex gap-3 rounded-sm border border-blood/40 bg-blood/5 p-4">
              <HeartHandshake size={20} className="mt-0.5 shrink-0 text-blood-bright" />
              <div>
                <h3 className="mb-1 font-bold text-paper">{d.title}</h3>
                <p className="text-sm leading-relaxed text-bone/80">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
