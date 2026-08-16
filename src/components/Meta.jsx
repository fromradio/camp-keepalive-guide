import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMeta } from '../seo/routes.js'

// 客户端导航时同步更新 document.title 与 meta description
export default function Meta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeMeta.find((r) => r.path === pathname) || routeMeta[0]
    document.title = meta.title
    let tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', meta.description)
  }, [pathname])

  return null
}
