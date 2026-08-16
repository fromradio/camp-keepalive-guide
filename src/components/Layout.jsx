import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Home, Users, Skull, Cog, Map, Tent, BookOpen, Info, Menu, X, Flame, Languages,
} from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { ui } from '../i18n/ui.js'

export const NAV_ITEMS = [
  { to: '/', key: 'home', icon: Home, end: true },
  { to: '/counselors', key: 'counselors', icon: Users },
  { to: '/monsters', key: 'monsters', icon: Skull },
  { to: '/mechanics', key: 'mechanics', icon: Cog },
  { to: '/strategies', key: 'strategies', icon: Map },
  { to: '/campers', key: 'campers', icon: Tent },
  { to: '/guide', key: 'guide', icon: BookOpen },
  { to: '/about', key: 'about', icon: Info },
]

function LangToggle({ className = '' }) {
  const { toggleLang } = useLang()
  const s = ui[useLang().lang]
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={s.toggle.aria}
      className={`flex items-center gap-2 rounded-sm border border-forest-light bg-forest-mid/60 px-3 py-1.5 text-sm font-bold text-paper transition-colors hover:border-ember hover:text-ember ${className}`}
    >
      <Languages size={16} />
      {s.toggle.label}
    </button>
  )
}

function NavList({ onNavigate }) {
  const { lang } = useLang()
  const s = ui[lang]
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ to, key, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors ${
              isActive
                ? 'bg-blood/20 text-paper border-l-4 border-blood'
                : 'text-bone/70 hover:bg-forest-mid hover:text-bone border-l-4 border-transparent'
            }`
          }
        >
          <Icon size={18} className="shrink-0" />
          <span className="font-bold tracking-wide">{s.nav[key]}</span>
        </NavLink>
      ))}
    </nav>
  )
}

function Brand() {
  const { lang } = useLang()
  const s = ui[lang]
  return (
    <div className="mb-6 border-b border-forest-light pb-4">
      <div className="flex items-center gap-3">
        <Flame size={28} className="shrink-0 text-ember" />
        <div>
          <div className="font-display text-lg uppercase leading-tight text-paper">Camp Keepalive</div>
          <div className="text-xs tracking-widest text-bone/50">{s.brand.subtitle}</div>
        </div>
      </div>
      <LangToggle className="mt-3 w-full justify-center" />
    </div>
  )
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang } = useLang()
  const s = ui[lang]

  return (
    <div className="flex min-h-screen">
      {/* 桌面端：左侧固定导航 */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-forest-light bg-forest-deep/95 p-4 md:block">
        <Brand />
        <NavList />
        <div className="absolute inset-x-4 bottom-4 text-[11px] leading-relaxed text-bone/40">
          {s.footer.unofficial}
          <br />
          {s.footer.rights}
        </div>
      </aside>

      {/* 移动端：顶栏 + 汉堡菜单 + 语言切换 */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-forest-light bg-forest-deep/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <Flame size={22} className="text-ember" />
          <span className="font-display uppercase text-paper">Camp Keepalive</span>
        </div>
        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-sm border border-forest-light p-2 text-bone"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* 移动端抽屉菜单 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/70 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="h-full w-64 border-r border-forest-light bg-forest-deep p-4 pt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <NavList onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* 内容区 */}
      <main className="min-w-0 flex-1 px-4 pb-16 pt-20 md:ml-60 md:px-10 md:pt-8">
        <div className="mx-auto max-w-4xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
