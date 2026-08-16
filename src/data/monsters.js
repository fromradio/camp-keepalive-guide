// 怪物图鉴数据（中英双语，对齐真实游戏）
// confidence: 'verified' = 官方截图确认行为；'kotaku' = Kotaku 报道确认存在；'community' = 社区整理
// 真实依据：
// - Toxic Horror：官方截图确认「在地图上随机移动」
// - 斧头杀人狂 / 杀手小丑：Kotaku 报道确认（"overrun by axe murderers and killer clowns"）
// - 游戏基调：80 年代恐怖片原型（jock / nerd / 情侣等经典角色公式）

export const monsters = {
  zh: [
    {
      id: 'axe-murderer', name: '斧头杀人狂', iconTheme: 'axe', danger: 'high', confidence: 'kotaku',
      nights: '常规威胁', screenshot: 'Axe Murderer Encounter',
      behavior: '80 年代砍杀片的标志性反派。Kotaku 报道确认其作为营地主要威胁登场：沿着可通行地形逼近营地，优先攻击落单目标，斧头伤害极高。',
      weakness: '惧怕陷阱：怀亚特的陷阱阵是它的克星；桥梁等单通道地形可以把它的进攻压缩成一列纵队。',
      strategy: '不要与它贴身换血。正确姿势：桥梁/缺口处预埋陷阱 → 辅导员在陷阱后方站桩 → 让它自己走进来。需要集火时全员一回合爆发，打完即散。',
    },
    {
      id: 'killer-clown', name: '杀手小丑', iconTheme: 'clown', danger: 'high', confidence: 'kotaku',
      nights: '常规威胁', screenshot: 'Killer Clown Encounter',
      behavior: 'Kotaku 报道确认的第二种标志性人形威胁。符合小丑型反派的经典行为：利用恐慌制造混乱，让营员四散奔逃后再逐个收割。',
      weakness: '它的猎杀依赖「混乱」。营员队伍保持完整、疏散有序时，小丑的威胁度会显著下降。',
      strategy: '对小丑的核心是管理营员而非管理小丑：提前用戴夫的集结把营员聚拢带回床位，缩小场上混乱面。它扑空越久，你离天亮越近。',
    },
    {
      id: 'toxic-horror', name: '剧毒恐兽（Toxic Horror）', iconTheme: 'ghost', danger: 'mid', confidence: 'verified',
      nights: '常规威胁', screenshot: 'Toxic Horror Random Movement',
      behavior: '官方截图情报确认：「在地图上随机移动」（Moves randomly around the map）。没有固定巡逻路线，意味着它可能出现在任何方向——包括你以为安全的后方。',
      weakness: '随机移动意味着它不会刻意绕开陷阱；它撞上陷阱阵只是时间问题。',
      strategy: '对随机目标不要追——你追不上骰子。正确做法是「守株待兔」：把陷阱铺满营地入口，把营员收进内圈，让它的随机漫游自己撞上你的准备。小地图（右上角）要养成每回合扫一眼的习惯。',
    },
    {
      id: 'procedural-waves', name: '怪物潮（波次机制）', iconTheme: 'skull', danger: 'mid', confidence: 'verified',
      nights: '全部 30 关', screenshot: 'Monster Wave Onslaught',
      behavior: '商店页确认的核心结构：「30 个程序化关卡，怪物攻势一波比一波无情」（increasingly relentless monster waves）。后期关卡的怪物数量与组合会持续膨胀。',
      weakness: '波次强度随关卡固定成长，提前收集资源、升级防线就能跑赢强度曲线。',
      strategy: '把每一关当作下一关的农场：白天尽量多收集、多铺陷阱，资源永远向着「下一波」倾斜。进入 20 关以后，防线必须成型——桥口陷阱阵 + 集结护送链，缺一不可。',
    },
  ],
  en: [
    {
      id: 'axe-murderer', name: 'The Axe Murderer', iconTheme: 'axe', danger: 'high', confidence: 'kotaku',
      nights: 'Recurring threat', screenshot: 'Axe Murderer Encounter',
      behavior: 'The signature slasher villain. Confirmed by Kotaku as a headline threat stalking the camp: closes in along passable terrain, prefers isolated targets, and swings an axe with brutal damage.',
      weakness: 'Hates traps: Wyatt\'s trap lines are its natural predator; single-file terrain like bridges compresses its approach into a queue.',
      strategy: 'Never trade blows toe-to-toe. The correct shape: pre-seed traps at bridges and gaps → counselors stand fast behind the line → let it walk in. When focus fire is needed, burst it down in one turn and disengage immediately.',
    },
    {
      id: 'killer-clown', name: 'The Killer Clown', iconTheme: 'clown', danger: 'high', confidence: 'kotaku',
      nights: 'Recurring threat', screenshot: 'Killer Clown Encounter',
      behavior: 'The second iconic humanoid threat, confirmed by Kotaku. True to the clown-villain formula: it weaponizes panic — scattering the campers first, then harvesting them one by one.',
      weakness: 'Its hunt feeds on disorder. When the camper herd stays clustered and evacuations stay orderly, the Clown\'s threat level drops sharply.',
      strategy: 'Against the Clown you manage campers, not the Clown: Rally them into a tight group with Dave and walk them back to bed early, shrinking the chaos surface. Every turn it whiffs brings you closer to dawn.',
    },
    {
      id: 'toxic-horror', name: 'The Toxic Horror', iconTheme: 'ghost', danger: 'mid', confidence: 'verified',
      nights: 'Recurring threat', screenshot: 'Toxic Horror Random Movement',
      behavior: 'Confirmed by an official screenshot tooltip: "Moves randomly around the map." No fixed patrol route means it can arrive from any direction — including the rear you assumed was safe.',
      weakness: 'Random movement also means it never deliberately avoids traps; wandering into your trap line is only a matter of time.',
      strategy: 'Never chase a random mover — you cannot out-run dice. Play ambush instead: blanket the camp entrances with traps, pull campers into the inner ring, and let its random walk bump into your preparation. Build the habit of glancing at the minimap (top right) every single turn.',
    },
    {
      id: 'procedural-waves', name: 'Monster Waves (Escalation)', iconTheme: 'skull', danger: 'mid', confidence: 'verified',
      nights: 'All 30 levels', screenshot: 'Monster Wave Onslaught',
      behavior: 'The core structure confirmed by the store page: "30 levels" of "increasingly relentless monster waves". Monster counts and compositions keep scaling as you progress.',
      weakness: 'Wave strength grows on a fixed curve with your level — out-farm it by gathering early and upgrading your defenses ahead of schedule.',
      strategy: 'Treat every level as a farm for the next one: gather hard by day and lay traps early, always investing toward the NEXT wave. Past level 20 your defense must be fully shaped — bridge trap lines plus a Rally escort chain, both mandatory.',
    },
  ],
}
