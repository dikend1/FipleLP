import { MacMockup } from "../components/MacMockup";
import { PhoneMockup } from "../components/PhoneMockup";
import { steps } from "../data/commands";

export function HowItWorksSection() {
  return (
    <section className="scroll-mt-32 mx-auto w-[min(1180px,calc(100%_-_40px))] py-28 max-sm:w-[min(calc(100%_-_24px),1180px)] max-sm:py-[78px]" id="how">
      <div className="mx-auto mb-[42px] max-w-[780px] text-center">
        <p className="mb-[18px] text-[13px] font-black tracking-[0.16em] text-[#555] uppercase">Simple setup</p>
        <h2 className="mb-5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[clamp(46px,6vw,86px)] leading-[0.88] font-black tracking-[-0.075em] text-[#111] max-sm:text-[clamp(42px,13vw,62px)]">Download once. Pair once. Launch every day.</h2>
        <p className="text-xl leading-[1.6] text-[#555]">
          The landing page is ready now. When the native apps are finished, the waitlist button becomes your download button.
        </p>
      </div>
      <div className="my-[70px] mb-12 flex items-center justify-center gap-[clamp(16px,5vw,70px)] max-[1180px]:flex-col max-[1180px]:gap-8">
        <MacMockup />
        <div className="text-[46px] font-black max-[1180px]:rotate-90">+</div>
        <PhoneMockup compact />
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {steps.map((step) => (
          <article className="rounded-[28px] border border-black/10 bg-white/75 p-7 shadow-[0_14px_48px_rgba(17,17,17,0.06)]" key={step.label}>
            <span className="mb-6 block font-black tracking-[0.12em] text-[#8b8b8b] uppercase">{step.label}</span>
            <h3 className="mb-2.5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[27px] font-extrabold tracking-[-0.045em]">{step.title}</h3>
            <p className="text-xl leading-[1.6] text-[#555]">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
