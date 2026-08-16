// 关卡策略数据（中英双语，对齐真实游戏：30 个程序化关卡 + Endless Summer 无尽模式）
// 阶段结构：新手关 → 中期 → 后期 → 终局 → 无尽模式

export const nightStrategies = {
  zh: [
    {
      night: 1, title: '第 1–5 关：学会护送', threat: '零星怪物，熟悉操作', posture: '护送优先，零换血',
      deployment: [
        '选人：戴夫（集结）必带，搭配怀亚特（陷阱）+ 阿什莉（外勤）。',
        '开局先点地形看情报：确认山脉、河流与桥梁位置，锁定唯一锁点。',
        '白天两名外勤收集资源，戴夫把散兵营员集结成团。',
        '怀亚特在桥梁铺下第一批陷阱——位置比数量重要。',
      ],
      judgment: '本阶段怪物稀少，几乎没有「必须交战」的局面。判断标准：营员归寝进度领先 → 继续收集；有营员落单在外 → 停下手头一切去接。',
      supplies: '陷阱优先，其次是机动道具；不追求击杀。',
    },
    {
      night: 2, title: '第 6–15 关：陷阱阵成型', threat: '斧头杀人狂 / 杀手小丑开始施压', posture: '锁点消耗，护送链固定化',
      deployment: [
        '护送链固定站位：外圈接应 → 戴夫集结 → 内圈归寝，三人一线。',
        '怀亚特专职陷阱工兵：小屋补满 3 个 → 桥梁/缺口铺满 → 回小屋再补。',
        '小丑登场后：每回合先处理营员恐慌面，再处理怪物面。',
        '杀人狂登场后：全营让出冲锋直线，诱它走陷阱桥。',
      ],
      judgment: '本阶段开始需要「逃跑/迎击」判断：陷阱阵完整 → 站桩等怪撞；陷阱被消耗过半 → 收缩护送链到内圈，放弃外围收集。',
      supplies: '陷阱 ×6 起步（怀亚特两轮补给），小屋补给点必须提前探明。',
    },
    {
      night: 3, title: '第 16–25 关：双线作战', threat: '剧毒恐兽等随机移动怪混入', posture: '扇面布防，小地图纪律',
      deployment: [
        '随机怪进池后，单锁点不再够用：陷阱按「扇面」铺在营地的所有开口。',
        '每回合第一件事：扫小地图，确认所有怪物的当前位置。',
        '护送链弹性化：哪侧安全走哪侧，不要死守固定路线。',
        '预留一名机动辅导员（阿什莉）专职应对绕后突袭。',
      ],
      judgment: '随机怪不可预测，判断改为「兜底」逻辑：任何营员身后出现怪物 → 立刻用集结拉开；连续两回合没有怪物进视野 → 抓紧收集补充陷阱。',
      supplies: '陷阱全面铺开，道具位全满；收集以「下一关的需求」为标准。',
    },
    {
      night: 4, title: '第 26–30 关：评级冲刺', threat: '高强度混合波次', posture: '保评级：在配额内运营',
      deployment: [
        '目标从「通关」变为「20 人金牌」：护送链全员满配，收集降到次要。',
        '损失配额精打细算：10 人的额度只留给「必丢的外围散兵」。',
        '终盘关卡地图极大，优先把床位附近的散兵先收干净。',
        '陷阱阵推进到中场，把交战线推离护送走廊。',
      ],
      judgment: '冲金牌的核心判断：这个救援动作能否在本波次内完成？不能 → 果断放弃，保住配额比多救一人值钱。',
      supplies: '全部资源向护送效率倾斜；陷阱只铺护送走廊沿线。',
    },
    {
      night: 5, title: 'Endless Summer：无尽模式', threat: '无限波次，强度无上限', posture: '纪录导向，流程固化',
      deployment: [
        '阵容固定为最优解：戴夫 + 怀亚特 + 双机动位。',
        '把开局流程写成肌肉记忆：探地形 → 锁桥 → 铺陷阱 → 集结 → 归寝。',
        '每波结束立刻复盘：陷阱缺口在哪、护送链哪一环最慢。',
        '心态：无尽模式比的不是「能走多远」，是「每一波都不犯错」。',
      ],
      judgment: '无尽模式没有迎击/逃跑之分，只有「这波是否零失误」。一旦开始出现被迫放弃营员，就是防线需要重构的信号。',
      supplies: '每波之间全量补给；小屋控制权高于一切。',
    },
  ],

  en: [
    {
      night: 1, title: 'Levels 1–5: Learn the Escort', threat: 'Sparse monsters, learn the controls', posture: 'Escort first, zero trading',
      deployment: [
        'Draft: Dave (Rally) is mandatory, with Wyatt (traps) + Ashley (field ops).',
        'Open by clicking terrain for intel: confirm mountains, rivers and bridges, and lock down the one true chokepoint.',
        'By day, two field counselors Gather while Dave rallies stray campers into a block.',
        'Wyatt lays the first trap batch on the bridge — position beats quantity.',
      ],
      judgment: 'Monsters are sparse here; there is almost never a "must-fight". The check: bedtime progress on schedule → keep gathering; a camper isolated outside → drop everything and fetch them.',
      supplies: 'Traps first, mobility items second; do not chase kills.',
    },
    {
      night: 2, title: 'Levels 6–15: Trap Line Takes Shape', threat: 'Axe Murderer / Killer Clown pressure begins', posture: 'Chokepoint attrition, fixed escort chain',
      deployment: [
        'Fix the escort chain positions: outer pickup → Dave\'s Rally → inner-ring bedtime, three in a line.',
        'Wyatt works as a dedicated trap sapper: restock 3 at a cabin → blanket bridges and gaps → return to restock.',
        'Once the Clown appears: manage the campers\' panic surface first each turn, the monster second.',
        'Once the Murderer appears: clear his charge lane camp-wide and bait him across the trapped bridge.',
      ],
      judgment: 'This band introduces real fight-or-flee calls: trap line intact → stand fast and let them walk in; traps more than half spent → collapse the escort chain inward and abandon outer gathering.',
      supplies: 'Traps ×6 minimum (two Wyatt restocks); scout cabin resupply points in advance.',
    },
    {
      night: 3, title: 'Levels 16–25: Two-Front War', threat: 'Random movers like the Toxic Horror join the pool', posture: 'Fan-shaped defense, minimap discipline',
      deployment: [
        'With random movers in the pool, one chokepoint is no longer enough: lay traps in a "fan" across every camp opening.',
        'First action every turn: sweep the minimap and confirm every monster\'s position.',
        'Make the escort chain elastic: walk whichever side is safe; never marry a fixed route.',
        'Keep one mobile counselor (Ashley) dedicated to rear-guard surprises.',
      ],
      judgment: 'Random movers cannot be predicted, so switch to "backstop" logic: a monster behind any camper → Rally them apart instantly; two straight turns with no monster in sight → gather hard and rebuild traps.',
      supplies: 'Traps everywhere, item slots full; gather against the NEXT level\'s needs.',
    },
    {
      night: 4, title: 'Levels 26–30: Medal Push', threat: 'High-intensity mixed waves', posture: 'Protect the medal: operate inside the quota',
      deployment: [
        'The goal shifts from "clear" to "20-camper gold": the escort chain runs at full strength and gathering becomes secondary.',
        'Spend the loss quota deliberately: the 10-camper budget is reserved for "perimeter strays that must be written off".',
        'End-game maps are huge; vacuum up strays near the beds first.',
        'Push the trap line into midfield so contact happens away from the escort corridor.',
      ],
      judgment: 'The gold-medal question: can this rescue complete within the current wave? If not — drop it. Protecting the quota is worth more than one extra save.',
      supplies: 'All resources into escort efficiency; traps only along the escort corridor.',
    },
    {
      night: 5, title: 'Endless Summer: Endless Mode', threat: 'Infinite waves, uncapped scaling', posture: 'Record-driven, process-locked',
      deployment: [
        'Lock the optimal squad: Dave + Wyatt + two mobile slots.',
        'Turn the opening into muscle memory: scout terrain → lock the bridge → lay traps → Rally → bedtime.',
        'Debrief after every wave: where did the trap line gap, which escort link is slowest.',
        'Mindset: endless mode is not about "how far" — it is about zero mistakes per wave.',
      ],
      judgment: 'There is no fight-or-flee in endless, only "was this wave clean". The moment you start writing off campers, your defense needs a rebuild — that is the signal.',
      supplies: 'Full resupply between every wave; cabin control outranks everything.',
    },
  ],
}
