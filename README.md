# Camp Keepalive Fan Guide · 中文攻略站

> This is a standalone project. Do not mix with other game guide repositories.

A bilingual (English / 中文) static fan guide for the turn-based horror strategy game
**Camp Keepalive: Endless Summer** (Porch Weather Games, 2025).
Retro B-movie horror × summer-camp archive aesthetic.

为回合制策略恐怖游戏《Camp Keepalive: Endless Summer》构建的双语静态攻略站。
复古 B 级恐怖片 + 夏令营档案风格，全网第一份中文生存手册。

## Tech Stack · 技术栈

- Vite 5 + React 18
- Tailwind CSS 3.4
- React Router DOM 6（BrowserRouter + Vercel SPA rewrite）
- Lucide React（图标）
- 自研轻量 i18n：URL 级双语（英文无前缀 `/guide`，中文 `/zh/guide`），`src/i18n/LanguageContext.jsx` 从路径推导语言 + `src/i18n/ui.js`（UI 文案）+ `src/data/*.js`（双语攻略数据）
- Vercel Analytics（`@vercel/analytics`）+ Speed Insights（`@vercel/speed-insights`），需在 Vercel 项目后台分别启用后开始计数

## Local Development · 本地运行

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

## Deployment (Vercel) · 部署

`vercel.json` is already included:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Import the repo into Vercel with the **Vite** preset: build command `npm run build`, output directory `dist`.

## Site Map · 站点结构

| Route | Page |
|------|------|
| `/` | Home（氛围 Banner + 简介 + 快速导航） |
| `/counselors` | Counselor Files（属性条 / 存活评级 / 使用建议） |
| `/monsters` | Monster Files（行为模式 / 弱点 / 危险度） |
| `/mechanics` | Core Mechanics（回合制 / 昼夜循环 / 资源 / 布局 / 恐慌值） |
| `/strategies` | Strategies（第 1 夜 → 终局夜递进式防守计划） |
| `/campers` | Camper System（类型 / 优先级矩阵 / 疏散路线 / 抉择） |
| `/guide` | Beginner Guide（前 5 分钟清单 / 常见死法 / 开局选择） |
| `/about` | About（游戏信息 / 购买链接 / 声明） |

上表为英文路由；中文版本为同一结构加 `/zh` 前缀（如 `/zh/guide`），共 16 个 URL，
语言切换按钮在两种语言版本间互相跳转。

Content data lives in `src/data/` (counselors / monsters / mechanics / strategies / campers / guide),
each file exporting `{ zh: [...], en: [...] }`. UI copy lives in `src/i18n/ui.js`.

## SEO · 搜索引擎优化

- **BrowserRouter**：干净 URL（无 `#`），`vercel.json` 的 SPA rewrite 兜底。
- **URL 级双语 + hreflang**：每种语言独立 URL，每页标注
  `hreflang="en" / "zh" / "x-default"` 交替链接，搜索引擎按用户语言展示对应版本
  （纯中文标题/简介 ↔ 纯英文标题/简介）。
- **构建期预渲染（含正文全量 SSG）**：`npm run build` 先 `vite build`，再执行
  `scripts/prerender.mjs` —— 为 8 条路由 × 2 种语言各生成一份独立的
  `dist/<route>/index.html`：写入该页的 `<html lang>` / `<title>` / `meta description` /
  `canonical` / `og:*` / `twitter:*` / hreflang，并把 `renderToString` 渲染出的**完整页面正文**
  注入 `#root`（爬虫无需执行 JS 即可拿到全文，客户端由 `hydrateRoot` 接管）。
  路由元数据单一来源：`src/seo/routes.js`。
- **客户端兜底**：`src/components/Meta.jsx` 在 SPA 内切换路由时同步更新
  `document.title`、`meta description`、`canonical` 与 hreflang。
- **结构化数据**：`index.html` 内嵌 JSON-LD（`WebSite` + `VideoGame`）。
- **sitemap / robots**：由预渲染脚本生成 `dist/sitemap.xml`（16 个 URL，含
  `xhtml:link` 语言交替标注）与 `dist/robots.txt`。
- **站点域名**：`SITE_URL` 统一在 `src/seo/routes.js`（`index.html` 内的
  canonical/og:*/JSON-LD 需同步替换）。

## Screenshots & Artwork · 图片素材

**Official Steam screenshots**（`public/screenshots/`，来自
[Steam 商店页](https://store.steampowered.com/app/3637630/Camp_Keepalive_Endless_Summer/)，app 3637630）:

| File | Content | Used in |
|------|---------|---------|
| `steam-ss-0.jpg` | "Select Four Counselors" 选人界面 | Counselors / Guide |
| `steam-ss-1.jpg` | 白天行动阶段（Gather / Trap / Pass） | Mechanics |
| `steam-ss-2.jpg` | 战术地图全景（两河穿营） | Home Banner / Mechanics / Campers |
| `steam-ss-3.jpg` | 关卡选择 "Two River's Edge" | Strategies |
| `steam-ss-4.jpg` | 怪物情报提示 "A Toxic Horror" | Monsters |
| `steam-ss-5.jpg` | 人事档案 "Staff Files: Wyatt Wallace" | Counselors |

**Entry artwork**（`public/portraits/`）:

| File | Content | Source |
|------|---------|--------|
| `dave.png` / `ashley.png` / `wyatt.png` | 辅导员证件照 | 从 `steam-ss-5.jpg` 人事档案界面裁剪，3× 最近邻放大 |
| `toxic-horror.png` | 剧毒恐兽实拍 | 从 `steam-ss-4.jpg` 裁剪 |
| `wave-encounter.png` | 墓地遭遇场景 | 从 `steam-ss-1.jpg` 裁剪 |
| `axe-murderer.jpg` / `killer-clown.jpg` | 怪物插图 | 游戏像素风格的原创粉丝美术（AI 辅助生成） |

页面级截图经 `src/components/Shot.jsx` 渲染；条目图片直接以 `<img class="pixelated">`
引用（`image-rendering: pixelated` 保持像素锐利）。

### 如何替换为你自己的截图

1. 在游戏内或 Steam 商店页保存截图
2. 将图片放入 `public/screenshots/` 或 `public/portraits/`
3. 修改 `src/data/screenshots.js`（页面级）或对应 `src/data/*.js` 条目中的
   `portrait` / `image` 字段为本地路径，如 `/screenshots/xxx.jpg`

## Notes · 说明

- Unofficial fan site; game © Porch Weather Games. 非官方粉丝攻略站。
- No backend, no database, no external API. 纯静态站点。
