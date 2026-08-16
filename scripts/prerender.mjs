// 构建期预渲染：为每条路由生成独立的 index.html（各自的 title / description /
// canonical / og:url），并产出 robots.txt 与 sitemap.xml。
// 纯 Node 实现，无额外依赖。数据单一来源：src/seo/routes.js
//
// ⚠️ SITE_URL 为占位域名——部署后请替换为真实域名（本文件 + index.html 内的
//    canonical / og:* / JSON-LD 同步替换）。

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { routeMeta, SITE_NAME, DEFAULT_OG_IMAGE } from '../src/seo/routes.js'

const SITE_URL = 'https://camp-keepalive-guide.vercel.app'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = readFileSync(join(dist, 'index.html'), 'utf8')

function renderRoute({ path, title, description }) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`

  let html = template
  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  // meta description
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(description)}$2`,
  )
  // canonical
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${esc(url)}$2`,
  )
  // og:title / og:description / og:url / og:image
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(title)}$2`,
  )
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${esc(description)}$2`,
  )
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${esc(url)}$2`,
  )
  html = html.replace(
    /(<meta property="og:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`,
  )
  // twitter
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(title)}$2`,
  )
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${esc(description)}$2`,
  )
  html = html.replace(
    /(<meta name="twitter:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`,
  )
  return html
}

let count = 0
for (const route of routeMeta) {
  const html = renderRoute(route)
  if (route.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
  } else {
    const dir = join(dist, route.path.slice(1))
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
  }
  count++
}

// robots.txt
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

// sitemap.xml
const lastmod = new Date().toISOString().slice(0, 10)
const urls = routeMeta
  .map(({ path }) => {
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const priority = path === '/' ? '1.0' : '0.8'
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`[prerender] ${count} routes rendered for ${SITE_NAME}; robots.txt + sitemap.xml written.`)
