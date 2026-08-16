// 辅导员图鉴数据（中英双语）
// portrait：真实游戏证件照（截自 Staff Files 人事档案界面，像素风头像）

export const counselors = {
  zh: [
    {
      id: 'dave', name: 'Dave 戴夫', title: '召集者', iconTheme: 'megaphone',
      portrait: '/portraits/dave.png',
      tags: ['集结 Rally', '营员调度', '团队核心'],
      stats: { hp: 6, speed: 5, power: 5 }, rating: 'S',
      specialty: '技能「Rally 集结」：把相邻格的营员直接拉到自己所在的位置。这是护送迟钝营员回床睡觉的最强手段。',
      strategy: '戴夫是围绕「救人」建队的核心。集结不消耗营员自己的移动，等于白赚一回合护送距离。站位要诀：卡在营员与床位之间的关键路口，每回合把掉队的孩子往安全区拉一格。面对斧头杀人狂时，也能用集结把营员拉出冲锋路线。',
    },
    {
      id: 'wyatt', name: 'Wyatt Wallace 怀亚特·华莱士', title: '修补匠', iconTheme: 'wrench',
      portrait: '/portraits/wyatt.png',
      tags: ['陷阱 ×3', '机械天才', '小屋补给'],
      stats: { hp: 5, speed: 4, power: 6 }, rating: 'A',
      specialty: '技能「Tinker 修补匠」：最多携带 3 个陷阱（普通辅导员只能带 1 个）；访问小屋或烧毁的小屋可一次性补满陷阱。人事档案显示入职日期为 6/20/198X。',
      strategy: '怀亚特一个人就是一条陷阱防线。打法：白天在小屋补满 3 个陷阱，黄昏前把陷阱铺在桥梁和树林缺口等怪物必经之路上。陷阱流可以零接触解决整波怪物，是 30 关程序化关卡中最稳的消耗战打法。记住他的补给点位置——小屋就是弹药库。',
    },
    {
      id: 'ashley', name: 'Ashley 阿什莉', title: '外勤好手', iconTheme: 'boot',
      portrait: '/portraits/ashley.png',
      tags: ['机动', '外勤', '首发阵容'],
      stats: { hp: 5, speed: 7, power: 5 }, rating: 'A',
      specialty: '首发阵容中的外勤专家，行动点投放灵活，擅长开阔地带的收集与牵制任务。',
      strategy: '阿什莉适合承担「收集 + 游击」职责：白天把她的行动点投资在资源收集和开阔地侦察上，夜间担任护送链的外圈接应。避免让她单独深入树林——把她用在地图的边缘与腹地之间，收益最高。',
    },
  ],
  en: [
    {
      id: 'dave', name: 'Dave', title: 'The Ringleader', iconTheme: 'megaphone',
      portrait: '/portraits/dave.png',
      tags: ['Rally', 'Camper herding', 'Team core'],
      stats: { hp: 6, speed: 5, power: 5 }, rating: 'S',
      specialty: 'Ability: "Rally" — pulls adjacent campers onto his own tile. The single strongest tool for walking dull-witted campers back to their beds.',
      strategy: 'Dave is the core of any rescue-focused squad. Rally does not spend the camper\'s own move, which is effectively a free turn of escort distance. Positioning: hold the chokepoint between campers and their cabins, dragging stragglers one tile toward safety each turn. Against the Axe Murderer, Rally also yanks campers out of a charge lane.',
    },
    {
      id: 'wyatt', name: 'Wyatt Wallace', title: 'The Tinkerer', iconTheme: 'wrench',
      portrait: '/portraits/wyatt.png',
      tags: ['Traps ×3', 'Machine whiz', 'Cabin restock'],
      stats: { hp: 5, speed: 4, power: 6 }, rating: 'A',
      specialty: 'Ability: "Tinker" — carries up to three traps instead of the usual one; visiting a cabin or a burned-down cabin fully restocks them. His personnel file lists a hire date of 6/20/198X.',
      strategy: 'Wyatt is a one-man trap line. The loop: restock three traps at a cabin by day, then seed bridges and gaps in the treeline before dusk. Trap play can clear entire waves without contact — the most reliable attrition strategy across the 30 procedural levels. Memorize your cabin locations: cabins are his armory.',
    },
    {
      id: 'ashley', name: 'Ashley', title: 'Field Operative', iconTheme: 'boot',
      portrait: '/portraits/ashley.png',
      tags: ['Mobile', 'Field ops', 'Starting roster'],
      stats: { hp: 5, speed: 7, power: 5 }, rating: 'A',
      specialty: 'The starting roster\'s field specialist: flexible action-point spending, built for gathering and skirmishing in open ground.',
      strategy: 'Ashley runs the "Gather + skirmish" role: invest her action points in resource runs and open-ground scouting by day, and post her as the outer link of the escort chain at night. Keep her out of deep woods solo — she earns her keep between the map\'s edge and its heartland.',
    },
  ],
}

// 名册说明（页面底部提示）
export const rosterNote = {
  zh: '完整名册共 9 名辅导员（3 名首发 + 6 名随进度解锁）。每位辅导员都有独特技能——选人即选打法，剩余的档案会随游戏进度逐步补全。',
  en: 'The full roster holds 9 counselors (3 starters + 6 unlocked through progress). Each brings a unique ability — drafting your squad means choosing your game plan, and the remaining files fill in as you play.',
}
