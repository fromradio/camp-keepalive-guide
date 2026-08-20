import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta, SITE_URL, langOfPath, stripZh, withLang } from '../seo/routes.js'

function setMeta(selector, attr, value) {
  const tag = document.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

// 客户端导航时同步更新 title / description / canonical / hreflang
export default function Meta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lang = langOfPath(pathname)
    const bare = stripZh(pathname)
    const route = routeMeta.find((r) => r.path === bare) || routeMeta[0]
    const meta = route[lang]

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)

    const enUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
    const zhUrl = `${SITE_URL}${withLang(route.path, 'zh')}`
    const selfUrl = lang === 'zh' ? zhUrl : enUrl

    setMeta('link[rel="canonical"]', 'href', selfUrl)
    setMeta('meta[property="og:url"]', 'content', selfUrl)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)

    // hreflang 交替链接
    for (const [code, url] of [['en', enUrl], ['zh', zhUrl], ['x-default', enUrl]]) {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${code}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'alternate')
        link.setAttribute('hreflang', code)
        document.head.appendChild(link)
      }
      link.setAttribute('href', url)
    }
  }, [pathname])

  return null
}
