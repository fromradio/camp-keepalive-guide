import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import NightSky from '../components/NightSky.jsx'
import PineForest from '../components/PineForest.jsx'
import Campfire from '../components/Campfire.jsx'
import Tent from '../components/Tent.jsx'
import WarningSign from '../components/WarningSign.jsx'
import Shot from '../components/Shot.jsx'
import { NAV_ITEMS } from '../components/Layout.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'
import { SHOTS } from '../data/screenshots.js'

export default function Home() {
  const { lang } = useLang()
  const s = ui[lang]
  const quickLinks = NAV_ITEMS.filter((i) => i.key !== 'home' && i.key !== 'about')

  return (
    <div>
      {/* Banner：恐怖夏令营氛围 */}
      <section className="relative -mx-4 mb-10 overflow-hidden border-b-4 border-blood/60 md:-mx-10">
        <NightSky className="bg-gradient-to-b from-[#0a1a2a] via-forest to-forest-deep">
          <div className="relative z-10 flex flex-col items-center px-6 pb-40 pt-16 text-center md:pt-20">
            <span className="warning-stamp mb-5 text-sm">{s.home.stamp}</span>
            <h1 className="headline mb-4 text-4xl md:text-6xl">
              CAMP <span className="text-blood-bright">KEEPALIVE</span>
            </h1>
            <p className="mb-2 font-display text-sm uppercase tracking-[0.4em] text-paper-dim">
              {s.home.titleSub}
            </p>
            <p className="mb-8 max-w-xl text-bone/80">{s.home.tagline}</p>
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-blood bg-blood/20 px-6 py-3 font-display uppercase tracking-widest text-paper transition-colors hover:bg-blood/40"
            >
              {s.home.cta} <ArrowRight size={18} />
            </Link>
          </div>
          {/* CSS 场景：帐篷 + 篝火 + 松林 */}
          <div className="absolute bottom-6 left-[12%] z-10 hidden sm:block"><Tent size={110} /></div>
          <div className="absolute bottom-6 left-[30%] z-10 hidden sm:block"><Tent size={80} /></div>
          <div className="absolute bottom-4 right-[18%] z-10"><Campfire size={90} /></div>
          <WarningSign size={52} label="BEWARE" className="absolute bottom-8 right-[6%] z-10 hidden md:flex" />
          <PineForest className="absolute inset-x-0 bottom-0" />
        </NightSky>
      </section>

      {/* 真实截图：营地全景 */}
      <section className="mb-10">
        <Shot shot={SHOTS.campOverview} imgClassName="max-h-[400px]" />
      </section>

      {/* 游戏简介 */}
      <section className="torn-card mb-10 p-1.5">
        <div className="torn-card-inner p-6 md:p-8">
          <h2 className="headline mb-4 text-2xl">{s.home.whatTitle}</h2>
          <div className="space-y-3 leading-relaxed text-bone/85">
            <p className="border-l-4 border-ember/60 pl-3">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-ember">{s.home.officialTag}</span>
              <span className="text-paper">{s.home.officialDesc}</span>
            </p>
            <p>{s.home.what2}</p>
            <p className="flex items-start gap-2 border-l-4 border-paper-dim/50 pl-3 text-paper-dim">
              <Quote size={16} className="mt-1 shrink-0" />
              <span>{s.home.quote}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 快速导航 */}
      <section className="mb-10">
        <h2 className="headline mb-4 text-2xl">{s.home.indexTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map(({ to, key, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group flex items-center gap-3 rounded-sm border border-forest-light bg-forest-mid/40 p-4 transition-colors hover:border-blood hover:bg-blood/10"
            >
              <Icon size={22} className="shrink-0 text-ember transition-transform group-hover:scale-110" />
              <span className="font-bold text-bone group-hover:text-paper">{s.nav[key]}</span>
              <ArrowRight size={16} className="ml-auto text-bone/30 transition-transform group-hover:translate-x-1 group-hover:text-blood-bright" />
            </Link>
          ))}
        </div>
      </section>

      {/* 为什么这游戏需要攻略 */}
      <section className="torn-card p-1.5">
        <div className="torn-card-inner p-6 md:p-8">
          <h2 className="headline mb-4 text-2xl">{s.home.whyTitle}</h2>
          <ul className="space-y-3 leading-relaxed text-bone/85">
            {s.home.why.map((w, i) => (
              <li key={i} className="flex gap-2"><span className="text-blood-bright">◆</span>{w}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
