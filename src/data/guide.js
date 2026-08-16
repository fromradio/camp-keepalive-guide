// 新手指南数据（中英双语，对齐真实游戏）

export const firstFiveMinutes = {
  zh: [
    { text: '选人界面锁定阵容：戴夫（集结）+ 怀亚特（陷阱）+ 两名机动位', critical: true },
    { text: '点开地形看情报：确认山脉、河流、桥梁和小屋的位置', critical: true },
    { text: '找到全场唯一（或最少）的桥梁——那就是你的陷阱走廊', critical: true },
    { text: '把戴夫部署在散兵营员与床位之间的集结位', critical: true },
    { text: '怀亚特白天直奔小屋补满 3 个陷阱', critical: false },
    { text: '扫一眼右上角小地图，确认本关怪物出生方向', critical: false },
  ],
  en: [
    { text: 'Lock your squad on the select screen: Dave (Rally) + Wyatt (traps) + two mobile slots', critical: true },
    { text: 'Click terrain for intel: confirm where mountains, rivers, bridges and cabins sit', critical: true },
    { text: 'Find the single (or fewest) bridge on the map — that is your trap corridor', critical: true },
    { text: 'Post Dave at the rally point between stray campers and their beds', critical: true },
    { text: 'Send Wyatt straight to a cabin by day to restock all 3 traps', critical: false },
    { text: 'Sweep the minimap (top right) to confirm where this level\'s monsters spawn', critical: false },
  ],
}

export const commonDeaths = {
  zh: [
    { title: '把「拯救」玩成「屠杀」',
      body: '通关条件是「在损失 10 人之前救够人数」——不是杀光怪物。沉迷追击残血怪而放任营员在外游荡，是新手翻车第一名。' },
    { title: '无视桥梁规则',
      body: '河流只能走桥、山脉不可通行——怪物的进攻路线其实是固定的。不在桥上铺陷阱，等于放弃这游戏白送的防线。' },
    { title: '让辅导员单挑杀人狂',
      body: '斧头伤害极高，贴身换血稳亏。正确解法永远是陷阱消耗 + 站桩集火，而不是英雄主义。' },
    { title: '忘记小屋补给',
      body: '怀亚特访问小屋可以补满 3 个陷阱——很多玩家打到第 10 关都不知道。陷阱流断粮的瞬间，就是防线崩溃的开始。' },
    { title: '不看小地图',
      body: '剧毒恐兽这类随机移动的怪会从你意想不到的方向出现。每回合开始扫一眼右上角小地图，这个习惯能救你一整个营地。' },
  ],
  en: [
    { title: 'Playing "save" as "slay"',
      body: 'The clear condition is "save enough campers before losing 10" — not "kill every monster". Chasing wounded monsters while campers wander unguarded is the number-one rookie throw.' },
    { title: 'Ignoring the bridge rule',
      body: 'Rivers are only crossable at bridges and mountains are impassable — monster approach routes are effectively fixed. Not trapping the bridge means refusing the free defense the game hands you.' },
    { title: 'Dueling the Axe Murderer',
      body: 'Axe damage is brutal; trading blows is a guaranteed loss. The correct answer is always trap attrition plus a stationary focus-fire turn, never heroics.' },
    { title: 'Forgetting cabin resupply',
      body: 'Wyatt restocks all 3 traps by visiting a cabin — plenty of players reach level 10 without knowing this. The moment your trap play runs out of ammo is the moment the defense starts collapsing.' },
    { title: 'Never reading the minimap',
      body: 'Random movers like the Toxic Horror arrive from directions you would never expect. Glancing at the top-right minimap at the start of every turn is a habit that saves entire camps.' },
  ],
}

export const openingPicks = {
  zh: [
    { pick: '稳健开局（推荐新手）', team: '戴夫 + 怀亚特 + 阿什莉 + 机动位',
      reason: '集结护送 + 陷阱消耗的双核体系，首发三人即可成型。容错率最高，前 15 关几乎可以零伤亡通关。' },
    { pick: '陷阱流开局', team: '怀亚特 + 双收集位 + 戴夫',
      reason: '一切资源向陷阱倾斜：小屋补给链不断，桥梁走廊铺满。怪物还没见到营员就先倒在陷阱里。' },
    { pick: '护送流开局', team: '戴夫 + 三机动位',
      reason: '放弃陷阱深度，全员投入护送链：集结、接应、归寝三线并行。适合床位分散、怪物以人形为主的关卡。' },
  ],
  en: [
    { pick: 'Safe Start (recommended)', team: 'Dave + Wyatt + Ashley + flex',
      reason: 'A dual-core of Rally escort + trap attrition, fully formed with the three starters. The most forgiving lineup — Levels 1–15 can pass nearly casualty-free.' },
    { pick: 'Trap-Line Start', team: 'Wyatt + two Gather slots + Dave',
      reason: 'Everything feeds the traps: the cabin resupply loop never breaks and the bridge corridor stays carpeted. Monsters fall before they ever see a camper.' },
    { pick: 'Escort-Line Start', team: 'Dave + three mobile slots',
      reason: 'Skips trap depth for a full escort chain: Rally, relay and bedtime running in parallel. Best on levels with scattered beds and humanoid-heavy monster pools.' },
  ],
}

export const mustKnowTips = {
  zh: [
    '每回合开始先看小地图，再决定动谁——情报永远先于操作。',
    '「Pass 跳过」是合法且经常最优的选择：防线成型后不要手痒。',
    '损失配额 10 人是预算不是底线：会放弃外圈散兵的玩家，评分反而更高。',
    '小屋 = 弹药库：怀亚特的补给路线要像巡逻路线一样固定下来。',
    '程序化地图没有背板价值——背「桥、河、山、屋」四件套的判断原则，比背任何一关的地图都有用。',
  ],
  en: [
    'Check the minimap at the start of every turn before moving anyone — intel always comes before action.',
    'Pass is a legal, often optimal choice: once your defense is shaped, keep your hands off.',
    'The 10-camper loss quota is a budget, not a floor: players who write off perimeter strays actually score higher.',
    'Cabins are armories: fix Wyatt\'s resupply route like a patrol route.',
    'Procedural maps have no memorization value — internalize the judgment principles of "bridge, river, mountain, cabin" instead of any single level\'s layout.',
  ],
}
