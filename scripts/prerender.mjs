// 构建期预渲染：为每条路由的每种语言（en 无前缀 / zh 前缀）生成独立的
// index.html（各自的 lang 属性、title、description、canonical、og:*、hreflang），
// 并产出 robots.txt 与带 xhtml:link 交替标注的 sitemap.xml。
// 纯 Node 实现，无额外依赖。数据单一来源：src/seo/routes.js
//
// ⚠️ 换域名时改 src/seo/routes.js 的 SITE_URL + index.html 内的 canonical/og:*/JSON-LD。

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'esbuild'
import {
  routeMeta, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, withLang,
} from '../src/seo/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = readFileSync(join(dist, 'index.html'), 'utf8')

const LANGS = ['en', 'zh']
const OG_LOCALE = { en: 'en_US', zh: 'zh_CN' }

// —— 正文全量预渲染：SSR 渲染页面 HTML 并注入 #root，
// 爬虫无需执行 JS 即可拿到完整内容；客户端 hydrateRoot 接管（见 src/main.jsx）。
const entryOut = join(dist, '.ssr-entry.cjs')
await build({
  entryPoints: [join(__dirname, 'render-entry.jsx')],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  outfile: entryOut,
  logLevel: 'error',
})
const { createRequire } = await import('node:module')
const require = createRequire(import.meta.url)
const { renderPage } = require(entryOut)

function renderRoute(route, lang, selfPath) {
  const meta = route[lang]
  const enPath = route.path
  const zhPath = withLang(route.path, 'zh')
  const urlOf = (p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`)
  const selfUrl = urlOf(selfPath)
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`

  const hreflang = [
    `    <link rel="alternate" hreflang="en" href="${esc(urlOf(enPath))}" />`,
    `    <link rel="alternate" hreflang="zh" href="${esc(urlOf(zhPath))}" />`,
    `    <link rel="alternate" hreflang="x-default" href="${esc(urlOf(enPath))}" />`,
  ].join('\n')

  let html = template
  // <html lang>
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">`)
  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
  // meta description
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(meta.description)}$2`,
  )
  // canonical
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${esc(selfUrl)}$2`,
  )
  // hreflang 占位符
  html = html.replace('<!-- HREFLANG -->', hreflang)
  // og:title / og:description / og:url / og:image / og:locale
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(meta.title)}$2`,
  )
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${esc(meta.description)}$2`,
  )
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${esc(selfUrl)}$2`,
  )
  html = html.replace(
    /(<meta property="og:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`,
  )
  html = html.replace(
    /(<meta property="og:locale" content=")[^"]*(")/,
    `$1${OG_LOCALE[lang]}$2`,
  )
  html = html.replace(
    /(<meta property="og:locale:alternate" content=")[^"]*(")/,
    `$1${OG_LOCALE[lang === 'zh' ? 'en' : 'zh']}$2`,
  )
  // twitter
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(meta.title)}$2`,
  )
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${esc(meta.description)}$2`,
  )
  html = html.replace(
    /(<meta name="twitter:image" content=")[^"]*(")/,
    `$1${esc(ogImage)}$2`,
  )
  // 正文注入：SSR 渲染结果填入 #root（供 hydrateRoot 水合）
  const appHtml = renderPage(selfPath)
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  return html
}

const outFile = (p) =>
  p === '/' ? join(dist, 'index.html') : join(dist, p.slice(1), 'index.html')

let count = 0
for (const route of routeMeta) {
  for (const lang of LANGS) {
    const selfPath = lang === 'zh' ? withLang(route.path, 'zh') : route.path
    const file = outFile(selfPath)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, renderRoute(route, lang, selfPath))
    count++
  }
}
rmSync(entryOut, { force: true })

// robots.txt
writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

// sitemap.xml（含 hreflang 交替标注）
const lastmod = new Date().toISOString().slice(0, 10)
const urlOf = (p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`)
const urls = []
for (const route of routeMeta) {
  const enPath = route.path
  const zhPath = withLang(route.path, 'zh')
  const alternates =
    `      <xhtml:link rel="alternate" hreflang="en" href="${urlOf(enPath)}"/>\n` +
    `      <xhtml:link rel="alternate" hreflang="zh" href="${urlOf(zhPath)}"/>\n` +
    `      <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(enPath)}"/>`
  for (const [p, priority] of [[enPath, enPath === '/' ? '1.0' : '0.8'], [zhPath, zhPath === '/zh' ? '0.9' : '0.8']]) {
    urls.push(
      `  <url>\n    <loc>${urlOf(p)}</loc>\n${alternates}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
  }
}
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
)

console.log(`[prerender] ${count} pages rendered (${routeMeta.length} routes x ${LANGS.length} langs) for ${SITE_NAME}; robots.txt + sitemap.xml written.`)
