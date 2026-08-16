# Camp Keepalive Fan Guide · 中文攻略站

A bilingual (English / 中文) static fan guide for the turn-based horror strategy game
**Camp Keepalive: Endless Summer** (Porch Weather Games, 2025).
Retro B-movie horror × summer-camp archive aesthetic.

为回合制策略恐怖游戏《Camp Keepalive: Endless Summer》构建的双语静态攻略站。
复古 B 级恐怖片 + 夏令营档案风格，全网第一份中文生存手册。

## Tech Stack · 技术栈

- Vite 5 + React 18
- Tailwind CSS 3.4
- React Router DOM 6（HashRouter）
- Lucide React（图标）
- 自研轻量 i18n：`src/i18n/LanguageContext.jsx`（默认英文，本地记忆偏好）+ `src/i18n/ui.js`（UI 文案）+ `src/data/*.js`（双语攻略数据）

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
| `/#/` | Home（氛围 Banner + 简介 + 快速导航） |
| `/#/counselors` | Counselor Files（属性条 / 存活评级 / 使用建议） |
| `/#/monsters` | Monster Files（行为模式 / 弱点 / 危险度） |
| `/#/mechanics` | Core Mechanics（回合制 / 昼夜循环 / 资源 / 布局 / 恐慌值） |
| `/#/strategies` | Strategies（第 1 夜 → 终局夜递进式防守计划） |
| `/#/campers` | Camper System（类型 / 优先级矩阵 / 疏散路线 / 抉择） |
| `/#/guide` | Beginner Guide（前 5 分钟清单 / 常见死法 / 开局选择） |
| `/#/about` | About（游戏信息 / 购买链接 / 声明） |

Content data lives in `src/data/` (counselors / monsters / mechanics / strategies / campers / guide),
each file exporting `{ zh: [...], en: [...] }`. UI copy lives in `src/i18n/ui.js`.

## Screenshots · 截图说明

Real official screenshots are already integrated, downloaded from the
[Steam store page](https://store.steampowered.com/app/3637630/Camp_Keepalive_Endless_Summer/)
(app 3637630) into `/public/screenshots/`:

| File | Content | Used in |
|------|---------|---------|
| `steam-ss-0.jpg` | "Select Four Counselors" 选人界面 | Counselors / Guide |
| `steam-ss-1.jpg` | 白天行动阶段（Gather / Trap / Pass） | Mechanics |
| `steam-ss-2.jpg` | 战术地图全景（两河穿营） | Home Banner / Mechanics / Campers |
| `steam-ss-3.jpg` | 关卡选择 "Two River's Edge" | Strategies |
| `steam-ss-4.jpg` | 怪物情报提示 "A Toxic Horror" | Monsters |
| `steam-ss-5.jpg` | 人事档案 "Staff Files: Wyatt Wallace" | Counselors |

Rendered via `src/components/Shot.jsx`（真实截图）and `src/components/PlaceholderImg.jsx`（占位图）。
Individual counselor / monster entries still use placeholders because the store page
offers no per-character shots.

### 如何替换剩余占位图

1. 打开 Steam 商店页面搜索 "Camp Keepalive"
2. 在商店页面的"截图"区域右键保存官方截图（或在游戏内自行截图）
3. 将图片放入 `/public/screenshots/` 目录
4. 在对应组件中替换 `placehold.co` URL 为本地路径，如 `/screenshots/xxx.jpg`

占位图统一由 `PlaceholderImg.jsx` 生成：

```
https://placehold.co/640x360/1a2f1a/cc3333?text=Camp+Screenshot:+[描述]
```

## Notes · 说明

- Unofficial fan site; game © Porch Weather Games. 非官方粉丝攻略站。
- No backend, no database, no external API. 纯静态站点。
