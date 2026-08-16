// 核心机制数据（中英双语，对齐真实游戏）
// 真实依据：官方截图（STAFF 行动面板 / Gather·Trap·Pass / 小地图 / 地形提示）、
// 商店页描述（四人小队 / 30 个程序化关卡 / 无尽模式）、关卡选择界面（Save 5/10/20 before losing 10）

export const mechanics = {
  zh: [
    {
      id: 'squad', title: '四人小队编成', icon: 'users',
      points: [
        '每关开始前从辅导员名册中选择 4 人出战（选人界面确认：「Select Four Counselors」）。',
        '名册共 9 个栏位：3 名首发 + 6 名待解锁，每名辅导员都有独特技能。',
        '技能即定位：戴夫负责集结护送，怀亚特负责陷阱消耗——选人就是在选你这一关的打法。',
        '经典恐怖片原型即强度公式：原版游戏的"jock 跑得快、情侣接吻操控怪物"式的设计哲学在本作延续。',
      ],
    },
    {
      id: 'actions', title: '回合与行动点', icon: 'hourglass',
      points: [
        '回合制推进：辅导员逐个行动，面板显示剩余行动点（Actions 格子）。',
        '三大基础指令（官方截图确认）：Gather 收集、Trap 设陷阱、Pass 跳过。',
        '「Pass」不是浪费——在防线成型后，跳过回合保存状态常常是最优解。',
        '辅导员行动结束后轮到怪物：所有怪物同时结算，站位要按「怪物动完之后」的局面规划。',
      ],
    },
    {
      id: 'objective', title: '目标与评级体系', icon: 'target',
      points: [
        '每关目标（关卡选择界面确认）：在损失 10 名营员之前拯救 5 / 10 / 20 名营员，对应三档评级。',
        '「拯救」= 把营员护送回床位/小屋安全区——不是杀光怪物。',
        '损失配额是 10 人：它既是底线也是资源，有时必须用外围营员换取核心圈的秩序。',
        'Endless Summer 无尽模式：通关 30 关后挑战无限波次，冲击个人最佳纪录。',
      ],
    },
    {
      id: 'terrain', title: '地形与陷阱', icon: 'map',
      points: [
        '官方地形情报确认：山脉（Mountain）对所有单位不可通行；河流只能经桥梁通过。',
        '桥梁 = 天然锁点：怪物被迫单列过桥，是陷阱阵的最佳安放位。',
        '小屋是战略资源点：怀亚特访问小屋/烧毁小屋可补满陷阱。',
        '程序化生成地图：每一局的河流、树林与营地形状都不同，死记硬背无效，理解地形原则才有效。',
      ],
    },
    {
      id: 'intel', title: '视野与情报', icon: 'eye',
      points: [
        '右上角小地图实时显示全局态势——每回合开始前先看小地图，这是免费的情报。',
        '点击地形或怪物可查看情报提示（如「Mountain：不可通行」「Toxic Horror：随机移动」）。',
        '顶部时间轴显示行动顺序与威胁状态（骷髅 / 急救图标），判断本回合谁最危险。',
        '随机移动的怪物无法预测路线，但可以利用：把陷阱铺在它可能经过的扇面上。',
      ],
    },
  ],

  en: [
    {
      id: 'squad', title: 'Four-Counselor Squad', icon: 'users',
      points: [
        'Before each level you draft 4 counselors from the roster (confirmed on the select screen: "Select Four Counselors").',
        'The roster has 9 slots: 3 starters + 6 unlockables, each with a unique ability.',
        'Abilities define roles: Dave herds and escorts, Wyatt runs trap attrition — drafting your squad means choosing the level\'s game plan.',
        'Horror archetypes are the power formula: the original game\'s design philosophy ("the jock runs faster, the kissing couple manipulates monsters") carries into this remake.',
      ],
    },
    {
      id: 'actions', title: 'Turns & Action Points', icon: 'hourglass',
      points: [
        'Turn-based flow: counselors act one by one, with remaining action points shown on the STAFF panel.',
        'The three core commands (confirmed by official screenshots): Gather, Trap, Pass.',
        'Pass is not a waste — once your defense is shaped, holding position is often optimal.',
        'After your counselors act, all monsters resolve simultaneously: plan for the board as it will look AFTER they move.',
      ],
    },
    {
      id: 'objective', title: 'Objectives & Medals', icon: 'target',
      points: [
        'Level objective (confirmed on the level-select screen): save 5 / 10 / 20 campers before losing 10 — the three medal tiers.',
        '"Saving" means escorting campers back to their beds and cabins — not killing every monster.',
        'The loss quota is 10: it is both a floor and a resource — sometimes outer-ring campers must buy order for the core.',
        'Endless Summer mode: after the 30 levels, chase an endless wave high score.',
      ],
    },
    {
      id: 'terrain', title: 'Terrain & Traps', icon: 'map',
      points: [
        'Confirmed terrain intel: Mountains are impassable to all units; rivers are crossable only at bridges.',
        'Bridges are natural chokepoints: monsters are forced across single-file — the premium trap-line location.',
        'Cabins are strategic resupply points: Wyatt restocks all his traps by visiting a cabin or a burned-down cabin.',
        'Procedurally generated maps: rivers, woods and camp shapes differ every run. Memorizing layouts fails; understanding terrain principles works.',
      ],
    },
    {
      id: 'intel', title: 'Vision & Intel', icon: 'eye',
      points: [
        'The minimap (top right) shows the global situation in real time — read it before every turn; it is free intelligence.',
        'Clicking terrain or monsters reveals intel tooltips (e.g. "Mountain: impassable", "Toxic Horror: moves randomly").',
        'The top timeline bar shows turn order and threat states (skull / first-aid icons) — judge who is in most danger this turn.',
        'Randomly-moving monsters cannot be predicted, but they can be exploited: seed traps across the fan of tiles they might wander through.',
      ],
    },
  ],
}
