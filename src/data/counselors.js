// 辅导员图鉴数据（中英双语，对齐真实游戏）
// confirmed: 'verified' = 官方截图/商店页确认；'partial' = 已确认存在，细节待补
// 真实依据：选人界面共 9 个辅导员栏位（Staff Files 截图），首发解锁 3 人
// Dave — Rally（集结）：把相邻营员拉到自己所在格（选人界面确认）
// Wyatt Wallace — Tinker（修补匠）：可携带 3 个陷阱而非常规 1 个；访问小屋/烧毁的小屋可补满（Staff Files 截图确认）
// Ashley — 名字与形象确认（选人/地图截图），技能档案待补

export const counselors = {
  zh: [
    {
      id: 'dave', name: 'Dave 戴夫', title: '召集者', iconTheme: 'megaphone',
      tags: ['集结 Rally', '营员调度', '团队核心'],
      stats: { hp: 6, speed: 5, power: 5 }, rating: 'S', confidence: 'verified',
      screenshot: 'Counselor Dave Rally',
      specialty: '技能「Rally 集结」：把相邻格的营员直接拉到自己所在的位置——官方选人界面确认。这是护送「迟钝营员」回床睡觉的最强手段。',
      strategy: '戴夫是围绕「救人」建队的核心。他的集结不消耗营员自己的移动，等于白赚一回合护送距离。站位要诀：卡在营员与床位之间的关键路口，每回合把掉队的孩子往安全区拉一格。面对斧头杀人狂时也能用集结把营员拉出冲锋路线。',
    },
    {
      id: 'wyatt', name: 'Wyatt Wallace 怀亚特·华莱士', title: '修补匠', iconTheme: 'wrench',
      tags: ['陷阱 ×3', '机械天才', '小屋补给'],
      stats: { hp: 5, speed: 4, power: 6 }, rating: 'A', confidence: 'verified',
      screenshot: 'Counselor Wyatt Wallace Traps',
      specialty: '技能「Tinker 修补匠」：最多携带 3 个陷阱（普通辅导员只能带 1 个）；访问小屋或烧毁的小屋可一次性补满陷阱——官方 Staff Files 档案确认。入职日期 6/20/198X。',
      strategy: '怀亚特一个人就是一条陷阱防线。打法：白天在小屋补满 3 个陷阱，黄昏前把陷阱铺在桥梁和树林缺口等怪物必经之路上。陷阱流可以零接触解决整波怪物，是 30 关程序化关卡中最稳的消耗战打法。记住他的补给点位置——小屋就是弹药库。',
    },
    {
      id: 'ashley', name: 'Ashley 阿什莉', title: '外勤好手', iconTheme: 'boot',
      tags: ['机动', '外勤', '首发阵容'],
      stats: { hp: 5, speed: 7, power: 5 }, rating: 'A', confidence: 'partial',
      screenshot: 'Counselor Ashley Field Ops',
      specialty: '首发三名辅导员之一，名字与形象经官方地图截图确认。详细技能档案仍在整理中（欢迎在社区补充）。',
      strategy: '从官方截图的部署位置看，阿什莉常被投放到远离营地的外圈执行收集与牵制任务，适合承担「 Gathering 收集 + 游击」职责。新玩家可以先把她的行动点投资在资源收集和开阔地侦察上，避免单独深入树林。',
    },
  ],
  en: [
    {
      id: 'dave', name: 'Dave', title: 'The Ringleader', iconTheme: 'megaphone',
      tags: ['Rally', 'Camper herding', 'Team core'],
      stats: { hp: 6, speed: 5, power: 5 }, rating: 'S', confidence: 'verified',
      screenshot: 'Counselor Dave Rally',
      specialty: 'Ability: "Rally" — pulls adjacent campers onto his own tile, confirmed on the official squad-select screen. The single strongest tool for walking the "dull-witted" campers back to their beds.',
      strategy: 'Dave is the core of any rescue-focused squad. Rally does not spend the camper\'s own move, which is effectively a free turn of escort distance. Positioning: hold the chokepoint between campers and their cabins, dragging stragglers one tile toward safety each turn. Against the Axe Murderer, Rally also yanks campers out of a charge lane.',
    },
    {
      id: 'wyatt', name: 'Wyatt Wallace', title: 'The Tinkerer', iconTheme: 'wrench',
      tags: ['Traps ×3', 'Machine whiz', 'Cabin restock'],
      stats: { hp: 5, speed: 4, power: 6 }, rating: 'A', confidence: 'verified',
      screenshot: 'Counselor Wyatt Wallace Traps',
      specialty: 'Ability: "Tinker" — carries up to three traps instead of the usual one; visiting a cabin (or a burned-down cabin) fully restocks them, per the official Staff Files entry. Hire date: 6/20/198X.',
      strategy: 'Wyatt is a one-man trap line. The loop: restock three traps at a cabin by day, then seed bridges and gaps in the treeline before dusk. Trap play can clear entire waves without contact — the most reliable attrition strategy across the 30 procedural levels. Memorize your cabin locations: cabins are his armory.',
    },
    {
      id: 'ashley', name: 'Ashley', title: 'Field Operative', iconTheme: 'boot',
      tags: ['Mobile', 'Field ops', 'Starting roster'],
      stats: { hp: 5, speed: 7, power: 5 }, rating: 'A', confidence: 'partial',
      screenshot: 'Counselor Ashley Field Ops',
      specialty: 'One of the three starting counselors; her name and portrait are confirmed by official map screenshots. Her detailed ability file is still being compiled (community contributions welcome).',
      strategy: 'Judging by her deployment positions in official screenshots, Ashley is often posted to the outer ring on gathering and harassment duty — a "Gather + skirmish" role. New players should spend her action points on resource runs and open-ground scouting, and keep her out of deep woods solo.',
    },
  ],
}

// 名册说明（页面底部提示）
export const rosterNote = {
  zh: '官方「Staff Files」截图显示完整名册共 9 个栏位（3 名首发 + 6 名待解锁）。其余辅导员的档案将在确认后陆续补全——本站只收录有据可查的内容。',
  en: 'The official "Staff Files" screenshot shows a full roster of 9 slots (3 starters + 6 unlockables). Files for the remaining counselors will be added once verified — this site only publishes sourced content.',
}
