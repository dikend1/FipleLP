const useCases = [
  ["For builders", "Open editor, terminal, localhost, docs, and AI assistant from one tile."],
  ["For creators", "Launch design tools, assets, browser preview, and export shortcuts."],
  ["For focus", "Start your writing or study setup without touching Cmd+Tab again."],
];

export function UseCasesSection() {
  return (
    <section className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.2fr_0.8fr] items-start gap-[42px] py-28 max-[980px]:grid-cols-1 max-sm:w-[min(calc(100%_-_24px),1180px)] max-sm:py-[78px]">
      <div className="max-w-[980px]">
        <p className="mb-[18px] text-[13px] font-black tracking-[0.16em] text-[#555] uppercase">Why Fiple</p>
        <h2 className="mb-5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[clamp(46px,6vw,86px)] leading-[0.88] font-black tracking-[-0.075em] text-[#111] max-sm:text-[clamp(42px,13vw,62px)]">Not a remote desktop. Not another dock. A second command surface for your Mac.</h2>
      </div>
      <div className="grid gap-[18px]">
        {useCases.map(([title, body]) => (
          <article className="rounded-[28px] border border-black/10 bg-white/75 p-7 shadow-[0_14px_48px_rgba(17,17,17,0.06)]" key={title}>
            <h3 className="mb-2.5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[27px] font-extrabold tracking-[-0.045em]">{title}</h3>
            <p className="text-xl leading-[1.6] text-[#555]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
