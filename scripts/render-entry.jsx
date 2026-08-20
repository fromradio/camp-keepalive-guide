// SSR 渲染入口（供 scripts/prerender.mjs 打包调用）
// 用 MemoryRouter 模拟目标 URL，渲染出该路由该语言的完整 HTML 字符串。
// 注意：这里不引入 index.css（纯 DOM 输出）与 @vercel/analytics（客户端组件）。

import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'
import { LanguageProvider } from '../src/i18n/LanguageContext.jsx'

export function renderPage(pathname) {
  return renderToString(
    <MemoryRouter initialEntries={[pathname]}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MemoryRouter>,
  )
}
