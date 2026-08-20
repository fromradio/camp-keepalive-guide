// 路由级 SEO 元数据（预渲染脚本与客户端 Meta 组件共用）
// 每种语言独立 URL：英文无前缀（/guide），中文加 /zh 前缀（/zh/guide）
// title / description 为纯单一语言，hreflang 让搜索引擎按语言展示对应版本

export const SITE_NAME = 'Camp Keepalive Fan Guide'
export const SITE_URL = 'https://keep-alive-wiki.gameresearch.top'
export const DEFAULT_OG_IMAGE = '/screenshots/steam-ss-2.jpg'

export const routeMeta = [
  {
    path: '/',
    en: {
      title: `Camp Keepalive Fan Guide | Counselors, Monsters & Survival Strategies`,
      description: 'Bilingual fan guide for Camp Keepalive: Endless Summer — counselor files, monster intel, core mechanics, level-by-level strategies and beginner tips for the turn-based camp-horror strategy game.',
    },
    zh: {
      title: `Camp Keepalive 攻略 | 辅导员图鉴 · 怪物图鉴 · 生存策略`,
      description: '《Camp Keepalive: Endless Summer》中文攻略站：辅导员图鉴、怪物图鉴、核心机制、逐关生存策略与新手指南——回合制营地恐怖策略游戏的完整生存手册。',
    },
  },
  {
    path: '/counselors',
    en: {
      title: `Counselors: Rally & Tinker Skills Breakdown | ${SITE_NAME}`,
      description: "Counselor profiles for Camp Keepalive: Dave's Rally, Wyatt Wallace's triple-trap Tinker kit and Ashley's field mobility — stat ratings, roles and field advice.",
    },
    zh: {
      title: `辅导员图鉴：Rally 集结 / Tinker 陷阱技能解析 | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 辅导员档案：Dave 的 Rally 集结、Wyatt Wallace 的三陷阱 Tinker、Ashley 的外勤机动——属性评级、定位分工与实战使用建议。',
    },
  },
  {
    path: '/monsters',
    en: {
      title: `Monsters: Axe Murderer, Killer Clown & Toxic Horror | ${SITE_NAME}`,
      description: 'Monster files for Camp Keepalive: Axe Murderer, Killer Clown, the randomly-moving Toxic Horror and wave mechanics — behaviors, weaknesses and counter-strategies.',
    },
    zh: {
      title: `怪物图鉴：斧头杀人狂 / 杀手小丑 / Toxic Horror | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 怪物档案：斧头杀人狂、杀手小丑、随机移动的剧毒恐兽与波次机制——行为模式、弱点分析与应对策略。',
    },
  },
  {
    path: '/mechanics',
    en: {
      title: `Core Mechanics: Action Points, Objectives & Traps | ${SITE_NAME}`,
      description: 'Camp Keepalive mechanics explained: four-counselor squads, Gather/Trap/Pass action points, rescue quota objectives, bridges and mountain terrain, traps and vision intel.',
    },
    zh: {
      title: `核心机制：行动点 / 目标体系 / 地形陷阱 | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 核心机制详解：四人小队编成、Gather/Trap/Pass 行动点、拯救配额目标、桥梁山脉地形、陷阱布置与视野情报。',
    },
  },
  {
    path: '/strategies',
    en: {
      title: `Level Strategies: 30-Level Survival Plans + Endless Mode | ${SITE_NAME}`,
      description: 'Level-by-level plans for Camp Keepalive: levels 1–5 escort basics, 6–15 trap networks, 16–25 two-front fights, 26–30 rating pushes and Endless Summer mode.',
    },
    zh: {
      title: `关卡策略：30 关分段生存计划 + 无尽模式 | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 逐段攻略：第 1–5 关护送入门、6–15 关陷阱阵成型、16–25 关双线作战、26–30 关评级冲刺，以及 Endless Summer 无尽模式。',
    },
  },
  {
    path: '/campers',
    en: {
      title: `Campers: Escort Chains, Priority Matrix & Evac Routes | ${SITE_NAME}`,
      description: 'The camper system in Camp Keepalive: camper states, protection priority matrix, escort and evacuation routes, and sacrifice-versus-rescue decisions.',
    },
    zh: {
      title: `营员系统：护送链 / 优先级矩阵 / 疏散路线 | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 营员系统详解：营员状态分类、保护优先级矩阵、护送与疏散路线规划，以及牺牲与救援的艰难抉择。',
    },
  },
  {
    path: '/guide',
    en: {
      title: `Beginner Guide: Survive Your First 5 Levels | ${SITE_NAME}`,
      description: 'Camp Keepalive beginner guide: first-5-minutes checklist, opening squad picks, classic rookie wipeouts and veteran counselor tips.',
    },
    zh: {
      title: `新手指南：前 5 关怎么过 | Camp Keepalive 攻略`,
      description: 'Camp Keepalive 新手指南：开局前 5 分钟必做清单、首发阵容选择、新人经典翻车点与老辅导员的实用技巧。',
    },
  },
  {
    path: '/about',
    en: {
      title: `About: Game Info & Version History | ${SITE_NAME}`,
      description: "Camp Keepalive: Endless Summer game info, the 2013 original and 2025 remaster lineage, where to buy, and this site's disclaimer.",
    },
    zh: {
      title: `关于本站：游戏信息与版本沿革 | Camp Keepalive 攻略`,
      description: '《Camp Keepalive: Endless Summer》游戏信息、2013 初代与 2025 重制版沿革、购买渠道与本站声明。',
    },
  },
]

// 语言工具：路径 → 语言 / 加前缀 / 另一语言路径（与 LanguageContext 保持一致）
export const ZH_PREFIX = '/zh'
export const langOfPath = (p) => (p === '/zh' || p.startsWith('/zh/') ? 'zh' : 'en')
export const stripZh = (p) => (p === '/zh' ? '/' : p.replace(/^\/zh(?=\/)/, ''))
export const withLang = (path, lang) =>
  lang === 'zh' ? (path === '/' ? '/zh' : `/zh${path}`) : path
