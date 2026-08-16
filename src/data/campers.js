// 营员系统数据（中英双语，对齐真实游戏）
// 真实依据：商店页描述 "helpless and dull-witted campers"；
// 关卡描述 "get a bunch of campers back to their beds"；戴夫 Rally 集结技能

export const camperTypes = {
  zh: [
    { id: 'wanderer', name: '游荡型营员', value: '中', fragility: '高',
      desc: '商店页官方定性：「无助而迟钝」（helpless and dull-witted）。不会主动避险，会朝着最不合时宜的方向乱走，是护送压力的主要来源。' },
    { id: 'bedtime', name: '待归寝营员', value: '高', fragility: '中',
      desc: '关卡目标单位：把他们护送回床位即计入「已拯救」。离床越远的营员，护送链越长，途中暴露风险越大。' },
    { id: 'isolated', name: '落单营员', value: '高', fragility: '高',
      desc: '站在树林边或河岸等开阔地的营员是斧头杀人狂的首选目标。落单 = 最高救援优先级，戴夫的集结应优先指向他们。' },
    { id: 'clustered', name: '抱团营员', value: '低', fragility: '低',
      desc: '挤在一起的营员群反而是最安全的状态：一次 Rally 可以拉动整簇，护送效率最高。开局第一件事就是把散兵捏成块。' },
  ],
  en: [
    { id: 'wanderer', name: 'The Wandering Camper', value: 'Mid', fragility: 'High',
      desc: 'The store page\'s official verdict: "helpless and dull-witted". They will not dodge danger on their own and drift toward the least sensible direction — the main source of escort pressure.' },
    { id: 'bedtime', name: 'The Bedtime Camper', value: 'High', fragility: 'Mid',
      desc: 'The objective unit: walking them back to their beds counts as "saved". The further from bed, the longer your escort chain and the bigger the exposure en route.' },
    { id: 'isolated', name: 'The Isolated Camper', value: 'High', fragility: 'High',
      desc: 'Campers standing alone near the treeline or riverbank are the Axe Murderer\'s first pick. Isolated = top rescue priority; Dave\'s Rally should point at them first.' },
    { id: 'clustered', name: 'The Clustered Campers', value: 'Low', fragility: 'Low',
      desc: 'A bunched-up camper group is paradoxically the safest state: one Rally drags the whole cluster, maximizing escort efficiency. Your first job every level: gather strays into a block.' },
  ],
}

// 保护优先级矩阵
export const priorityMatrix = {
  zh: {
    columns: ['低危险区域（营地内圈）', '高危险区域（树林 / 河岸 / 外围）'],
    rows: [
      {
        label: '高价值营员（离床远 / 计数缺口大）',
        cells: [
          { verdict: '常规护送', action: '沿辅导员护送链逐格送回床位即可，不要为他们打乱陷阱阵的布置。' },
          { verdict: '最高优先级', action: '戴夫立刻前往集结，必要时放弃本回合的收集——计数缺口大时，一个高价值营员顶三个。' },
        ],
      },
      {
        label: '普通营员（已在内圈 / 护送链覆盖内）',
        cells: [
          { verdict: '低优先级', action: '无需额外投入，随护送链自然归寝。' },
          { verdict: '战术权衡', action: '能救则救，但谨记损失配额是 10 人：配额充足时果断放弃双线救援，先保防线完整。' },
        ],
      },
    ],
  },
  en: {
    columns: ['Low-danger zone (inner ring)', 'High-danger zone (treeline / riverbank / perimeter)'],
    rows: [
      {
        label: 'High-value campers (far from bed / big count gap)',
        cells: [
          { verdict: 'Standard escort', action: 'Walk them home tile by tile along the counselor escort chain — never break your trap line for them.' },
          { verdict: 'Top priority', action: 'Dave moves in to Rally immediately, even at the cost of this turn\'s Gather — with a big count gap, one high-value camper is worth three.' },
        ],
      },
      {
        label: 'Regular campers (already inner-ring / covered by the chain)',
        cells: [
          { verdict: 'Low priority', action: 'No extra investment — they drift home with the escort chain naturally.' },
          { verdict: 'Tactical call', action: 'Save them if convenient, but remember the loss quota is 10: while quota remains, give up two-front rescues decisively and keep the line intact first.' },
        ],
      },
    ],
  },
}

// 护送 / 疏散路线
export const evacuationRoutes = {
  zh: [
    { name: '护送链（主打法）', risk: '低',
      desc: '多名辅导员在营地与外围之间排成接力链：戴夫集结 → 中段接应 → 内圈归寝。稳定但占人手，适合怪物少的开局关。' },
    { name: '桥梁走廊', risk: '中',
      desc: '利用「河流只能走桥」的硬规则：把护送路线收敛到桥梁一侧，另一侧用陷阱封死。护送与防御共用同一条走廊，效率最高。' },
    { name: '小屋避难线', risk: '中',
      desc: '把来不及回床的营员就近送进小屋（同时是怀亚特的陷阱补给点）。一屋两用，是中期关卡的标准答案。' },
    { name: '断尾求生线', risk: '高',
      desc: '损失配额（10 人）将被击穿时的最后手段：放弃最远端的散兵，全部人手收缩护送主力群。残酷，但评级和通关比面子重要。' },
  ],
  en: [
    { name: 'The Escort Chain (core play)', risk: 'Low',
      desc: 'Counselors form a relay line between camp and the perimeter: Dave rallies → mid-chain hands off → inner ring tucks them in. Stable but manpower-hungry; best for low-monster opening levels.' },
    { name: 'The Bridge Corridor', risk: 'Mid',
      desc: 'Exploit the hard rule that rivers are only crossable at bridges: collapse the escort route to one bridge side and seal the other with traps. Escort and defense share one corridor — maximum efficiency.' },
    { name: 'The Cabin Shelter Line', risk: 'Mid',
      desc: 'Walk campers who cannot reach their beds into the nearest cabin (also Wyatt\'s trap resupply point). One building, two jobs — the standard answer for mid-game levels.' },
    { name: 'The Cut-Loss Line', risk: 'High',
      desc: 'The last resort when the loss quota (10) is about to break: abandon the farthest strays and collapse everyone onto escorting the main group. Brutal, but medals and clears outrank pride.' },
  ],
}

// 牺牲 / 救援抉择
export const dilemmas = {
  zh: [
    { title: '配额思维',
      body: '「损失 10 人以内」不是失败条件，是预算。把它当成 10 点资源去花：该放弃外围散兵时就放弃，把配额花在护送链的秩序上，比全员硬救的评分更高。' },
    { title: '集结 vs 收集',
      body: '戴夫每回合只能做一件事。经验法则：场上有落单营员 → 集结优先；营员已全部抱团 → 本回合安心收集。犹豫不决、两头各做一半是最差解。' },
    { title: '陷阱的沉没成本',
      body: '铺好的陷阱阵不要因为「怪好像不过来」就自己拆掉换位置。随机移动的怪物总会撞上扇面——陷阱流需要的是耐心，不是微操。' },
  ],
  en: [
    { title: 'Quota thinking',
      body: '"Lose no more than 10" is not a fail state — it is a budget. Spend it like 10 resource points: abandon perimeter strays when needed, and spend the quota on keeping the escort chain orderly. That scores higher than heroic all-in rescues.' },
    { title: 'Rally vs Gather',
      body: 'Dave can do only one thing per turn. Rule of thumb: isolated camper on the field → Rally first; campers already clustered → Gather in peace. Hesitating and doing both halfway is the worst option.' },
    { title: 'The sunk cost of traps',
      body: 'Never uproot a laid trap line just because "the monster doesn\'t seem to be coming". Random movers always wander into the fan eventually — trap play demands patience, not micro.' },
  ],
}
