import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'ck-lang'

// 语言由 URL 驱动：/zh/... 为中文，其余路径为英文。
// 每种语言有独立 URL，便于搜索引擎按语言收录（hreflang 见 scripts/prerender.mjs）。
export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const lang = pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en'

  // 记忆偏好（不影响当前 URL 的语言判定，仅用于下次默认）
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch { /* ignore */ }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const value = useMemo(() => {
    // 给站内路径加当前语言前缀：lp('/guide') → 英文 '/guide'，中文 '/zh/guide'
    const lp = (path) => {
      const clean = path.startsWith('/') ? path : `/${path}`
      return lang === 'zh' ? (clean === '/' ? '/zh' : `/zh${clean}`) : clean
    }
    // 同一页面的另一语言 URL
    const bare = pathname === '/zh' ? '/' : pathname.replace(/^\/zh(?=\/)/, '')
    const altPath = lang === 'zh' ? (bare === '' ? '/' : bare) : (pathname === '/' ? '/zh' : `/zh${pathname}`)
    const toggleLang = () => navigate(altPath)
    return { lang, lp, altPath, toggleLang }
  }, [lang, pathname, navigate])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
