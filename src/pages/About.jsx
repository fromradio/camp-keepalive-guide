import { Gamepad2, ShoppingCart, Users, FileText, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import PineForest from '../components/PineForest.jsx'
import Campfire from '../components/Campfire.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export default function About() {
  const { lang } = useLang()
  const s = ui[lang]
  const p = s.pages.about

  return (
    <div>
      <PageHeader code={p.code} title={p.title} desc={p.desc} />

      <div className="space-y-6">
        {/* 游戏信息 */}
        <section className="torn-card p-1.5">
          <div className="torn-card-inner p-6">
            <h2 className="mb-4 flex items-center gap-2 headline text-xl">
              <Gamepad2 size={20} className="text-ember" /> {p.gameInfo}
            </h2>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div><dt className="text-bone/50">{p.name}</dt><dd className="text-bone">Camp Keepalive: Endless Summer</dd></div>
              <div><dt className="text-bone/50">{p.dev}</dt><dd className="text-bone">Porch Weather Games</dd></div>
              <div><dt className="text-bone/50">{p.genre}</dt><dd className="text-bone">{p.genreValue}</dd></div>
              <div><dt className="text-bone/50">{p.status}</dt><dd className="text-bone">{p.statusValue}</dd></div>
            </dl>
          </div>
        </section>

        {/* 购买链接 */}
        <section className="torn-card p-1.5">
          <div className="torn-card-inner p-6">
            <h2 className="mb-4 flex items-center gap-2 headline text-xl">
              <ShoppingCart size={20} className="text-ember" /> {p.buyTitle}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://store.steampowered.com/app/3637630/Camp_Keepalive_Endless_Summer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-ember/60 bg-ember/10 px-4 py-2 text-sm font-bold text-ember transition-colors hover:bg-ember/25"
              >
                {p.steam} <ExternalLink size={14} />
              </a>
              <a
                href="https://porchweathergames.itch.io/camp-keepalive-endless-summer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-ember/60 bg-ember/10 px-4 py-2 text-sm font-bold text-ember transition-colors hover:bg-ember/25"
              >
                {p.itch} <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* 开发团队 */}
        <section className="torn-card p-1.5">
          <div className="torn-card-inner p-6">
            <h2 className="mb-4 flex items-center gap-2 headline text-xl">
              <Users size={20} className="text-ember" /> {p.teamTitle}
            </h2>
            <p className="text-sm leading-relaxed text-bone/80">{p.teamBody}</p>
          </div>
        </section>

        {/* 版本沿革 */}
        <section className="torn-card p-1.5">
          <div className="torn-card-inner p-6">
            <h2 className="mb-4 flex items-center gap-2 headline text-xl">
              <Gamepad2 size={20} className="text-ember" /> {p.lineageTitle}
            </h2>
            <p className="text-sm leading-relaxed text-bone/80">{p.lineageBody}</p>
          </div>
        </section>

        {/* 本站声明 */}
        <section className="torn-card p-1.5">
          <div className="torn-card-inner p-6">
            <h2 className="mb-4 flex items-center gap-2 headline text-xl">
              <FileText size={20} className="text-ember" /> {p.legalTitle}
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-bone/75">
              {p.legal.map((l, i) => (
                <li key={i}>· {l}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* 页尾氛围 */}
      <div className="relative mt-12 overflow-hidden">
        <div className="flex justify-center pb-2"><Campfire size={64} /></div>
        <PineForest />
        <p className="absolute inset-x-0 bottom-2 text-center text-xs text-bone/40">
          {p.outro}
        </p>
      </div>
    </div>
  )
}
