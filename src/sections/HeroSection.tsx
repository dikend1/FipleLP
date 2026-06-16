import { ArrowRight, Play } from "lucide-react";
import { PhoneMockup } from "../components/PhoneMockup";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[760px] w-[min(1180px,calc(100%_-_40px))] grid-cols-[0.95fr_1.05fr] items-center gap-12 pt-24 pb-20 max-[980px]:min-h-0 max-[980px]:grid-cols-1 max-sm:w-[min(calc(100%_-_24px),1180px)] max-sm:pt-11" id="top">
      <div>
        <p className="mb-[18px] text-[13px] font-black tracking-[0.16em] text-[#555] uppercase">Native Mac + iPhone app · Coming soon</p>
        <h2 className="mb-5 font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[clamp(46px,6vw,86px)] leading-[0.88] font-black tracking-[-0.075em] text-[#111] max-sm:text-[clamp(42px,13vw,62px)]">Turn your iPhone into a fast command launcher for your Mac.</h2>
        <p className="text-xl leading-[1.6] text-[#555]">
          Launch apps, websites, shortcuts, and favorite workflows with one tap.
          Built for Mac users who switch context all day.
        </p>
        <div className="mt-[34px] flex flex-wrap items-center gap-3">
          <a className="inline-flex min-h-14 items-center gap-2.5 rounded-[18px] border border-[#111] bg-[#111] px-[22px] font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-[0_24px_0_rgba(17,17,17,0.08)]" href="#download">
            Join waitlist <ArrowRight size={18} />
          </a>
          <a className="inline-flex min-h-14 items-center gap-2.5 rounded-[18px] border border-[#111] bg-white px-[22px] font-extrabold text-[#111] transition hover:-translate-y-0.5 hover:shadow-[0_24px_0_rgba(17,17,17,0.08)]" href="#product">
            <Play size={17} /> See how it works
          </a>
        </div>
      </div>
      <div className="relative grid min-h-[680px] place-items-center overflow-hidden rounded-[58px] bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(232,232,228,0.72)),#fff] shadow-[0_30px_90px_rgba(17,17,17,0.12)] before:absolute before:inset-[26px] before:rounded-[42px] before:border before:border-black/10 before:bg-[radial-gradient(rgba(17,17,17,0.12)_1px,transparent_1px)] before:bg-[length:17px_17px] before:content-[''] max-[980px]:min-h-[620px] max-sm:min-h-[570px] max-sm:rounded-[36px] max-sm:before:inset-3.5 max-sm:before:rounded-[28px]" aria-label="Fiple iPhone app preview">
        <div className="absolute top-28 left-[34px] z-[2] rounded-full border border-[#111] bg-white px-4 py-[13px] text-[15px] font-extrabold shadow-[0_12px_0_rgba(17,17,17,0.08)] max-sm:hidden">Open apps</div>
        <div className="absolute top-52 right-[42px] z-[2] rounded-full border border-[#111] bg-[#c9ff5a] px-4 py-[13px] text-[15px] font-extrabold shadow-[0_12px_0_rgba(17,17,17,0.08)] max-sm:hidden">Run shortcuts</div>
        <div className="absolute bottom-[122px] left-[50px] z-[2] rounded-full border border-[#111] bg-[#b9c0ff] px-4 py-[13px] text-[15px] font-extrabold shadow-[0_12px_0_rgba(17,17,17,0.08)] max-sm:hidden">Launch sites</div>
        <PhoneMockup />
      </div>
    </section>
  );
}
