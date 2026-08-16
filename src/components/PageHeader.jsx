// 页面通用头部：档案编号 + 大标题 + 描述
export default function PageHeader({ code, title, desc, stamp }) {
  return (
    <header className="mb-8 border-b-2 border-dashed border-forest-light pb-6">
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-bone/40">档案 {code}</span>
        {stamp && <span className="warning-stamp text-xs">{stamp}</span>}
      </div>
      <h1 className="headline mb-3 text-3xl md:text-4xl">{title}</h1>
      {desc && <p className="max-w-2xl leading-relaxed text-bone/75">{desc}</p>}
    </header>
  )
}
