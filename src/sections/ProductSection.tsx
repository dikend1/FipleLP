import { commands } from "../data/commands";

export function ProductSection() {
  return (
    <section className="scroll-mt-32 mx-auto w-[min(1180px,calc(100%_-_40px))] py-28 max-sm:w-[min(calc(100%_-_24px),1180px)] max-sm:py-[78px]" id="product">
      <div className="mb-[42px] max-w-[780px]">
        <p className="mb-[18px] text-[13px] font-black tracking-[0.16em] text-[#555] uppercase">What it launches</p>
        <h2 className="mb-5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[clamp(46px,6vw,86px)] leading-[0.88] font-black tracking-[-0.075em] text-[#111] max-sm:text-[clamp(42px,13vw,62px)]">Your daily Mac actions, arranged like stickers on your iPhone.</h2>
      </div>
      <div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {commands.map(({ title, description, Icon }, index) => (
          <article className={`min-h-[220px] rounded-[28px] border border-black/10 p-6 shadow-[0_14px_48px_rgba(17,17,17,0.06)] ${index % 3 === 2 ? "bg-white" : index % 2 === 1 ? "bg-[#e8e8e4]" : "bg-white/75"}`} key={title}>
            <Icon className="mb-[34px]" size={28} strokeWidth={1.7} />
            <h3 className="mb-2.5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[27px] font-extrabold tracking-[-0.045em]">{title}</h3>
            <p className="text-xl leading-[1.6] text-[#555]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
