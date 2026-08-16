// 路由级 SEO 元数据（预渲染脚本与客户端 Meta 组件共用）
// title 采用中英混排，覆盖双语搜索意图

export const SITE_NAME = 'Camp Keepalive Fan Guide'
export const DEFAULT_OG_IMAGE = '/screenshots/steam-ss-2.jpg'

export const routeMeta = [
  {
    path: '/',
    title: `Camp Keepalive 攻略 · 中文 + English Fan Guide | ${SITE_NAME}`,
    description: 'Camp Keepalive: Endless Summer 双语攻略站：辅导员图鉴、怪物图鉴、核心机制、关卡策略与新手指南。Bilingual survival manual for the turn-based camp-horror strategy game by Porch Weather Games.',
  },
  {
    path: '/counselors',
    title: `辅导员图鉴 Counselors：Rally / Tinker 技能解析 | ${SITE_NAME}`,
    description: 'Camp Keepalive 辅导员档案：Dave 的 Rally 集结、Wyatt Wallace 的三陷阱 Tinker、Ashley 外勤机动——属性评级、定位与使用建议。Counselor abilities, ratings and field advice.',
  },
  {
    path: '/monsters',
    title: `怪物图鉴 Monsters：斧头杀人狂 / 杀手小丑 / Toxic Horror | ${SITE_NAME}`,
    description: 'Camp Keepalive 怪物档案：斧头杀人狂、杀手小丑、剧毒恐兽（随机移动）与波次机制——行为模式、弱点与应对策略。Monster behaviors, weaknesses and counter-strategies.',
  },
  {
    path: '/mechanics',
    title: `核心机制 Mechanics：行动点 / 目标体系 / 地形陷阱 | ${SITE_NAME}`,
    description: 'Camp Keepalive 核心机制详解：四人小队编成、Gather/Trap/Pass 行动点、拯救配额目标、桥梁山脉地形与陷阱、视野情报。Turns, objectives, terrain and traps explained.',
  },
  {
    path: '/strategies',
    title: `关卡策略 Strategies：30 关分段生存计划 + 无尽模式 | ${SITE_NAME}`,
    description: 'Camp Keepalive 逐段攻略：第 1–5 关护送入门、6–15 关陷阱阵成型、16–25 关双线作战、26–30 关评级冲刺、Endless Summer 无尽模式。Level-by-level survival plans.',
  },
  {
    path: '/campers',
    title: `营员系统 Campers：护送链 / 优先级矩阵 / 疏散路线 | ${SITE_NAME}`,
    description: 'Camp Keepalive 营员系统：营员状态分类、保护优先级矩阵、护送与疏散路线、牺牲与救援抉择。Camper states, priority matrix and escort routes.',
  },
  {
    path: '/guide',
    title: `新手指南 Beginner Guide：前 5 关怎么过 | ${SITE_NAME}`,
    description: 'Camp Keepalive 新手指南：前 5 分钟必做清单、开局阵容选择、新人经典翻车点与老辅导员技巧。First-5-minutes checklist, opening squad picks and veteran tips.',
  },
  {
    path: '/about',
    title: `关于 About：游戏信息与版本沿革 | ${SITE_NAME}`,
    description: 'Camp Keepalive: Endless Summer 游戏信息、2013 初代与 2025 重制版沿革、购买渠道与本站声明。Game info, version lineage and disclaimer.',
  },
]
