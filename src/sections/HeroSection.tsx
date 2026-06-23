import { ArrowRight, Play } from "lucide-react";
import appHome from "../assets/app-home.png";

export function HeroSection() {
  return (
    <section
      className="mx-auto grid w-[min(1120px,calc(100%_-_40px))] grid-cols-[1.04fr_0.96fr] items-center gap-10 pt-20 pb-16 max-[940px]:grid-cols-1 max-[940px]:justify-items-center max-[940px]:gap-12 max-[940px]:pt-14 max-[940px]:text-center max-sm:w-[min(calc(100%_-_24px),1120px)]"
      id="top"
    >
      {/* Copy */}
      <div className="max-w-[560px] animate-rise max-[940px]:max-w-[640px]">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[12px] font-medium text-muted shadow-card">
          <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
          Native Mac + iPhone app
        </p>
        <h1 className="mt-5 font-display text-[clamp(44px,6.4vw,76px)] leading-[0.96] font-bold tracking-[-0.04em] text-ink">
          One tap back
          <br />
          into your <span className="text-blue">flow.</span>
        </h1>
        <p className="mt-6 max-w-[460px] text-[19px] leading-[1.6] text-muted max-[940px]:mx-auto">
          Fiple turns your iPhone into a launcher for your Mac. Open workspaces, apps, and
          shortcuts in one tap — without breaking focus.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3 max-[940px]:justify-center">
          <a
            className="group inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-ink px-6 text-[16px] font-semibold text-white shadow-lift transition hover:bg-ink2 active:scale-[0.98]"
            href="#download"
          >
            Join waitlist
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            className="inline-flex min-h-[52px] items-center gap-2 rounded-xl border border-line bg-white px-5 text-[16px] font-semibold text-ink transition hover:border-ink/20 hover:shadow-card active:scale-[0.98]"
            href="#how"
          >
            <Play size={16} className="fill-ink" /> See how it works
          </a>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12.5px] text-faint max-[940px]:justify-center">
          <span>Pairs in seconds</span>
          <span className="size-1 rounded-full bg-line max-[940px]:hidden" aria-hidden="true" />
          <span>No account to try</span>
          <span className="size-1 rounded-full bg-line max-[940px]:hidden" aria-hidden="true" />
          <span>Works over your network</span>
        </div>
      </div>

      {/* Device */}
      <div className="relative grid place-items-center">
        {/* ambient glow */}
        <div
          className="absolute h-[78%] w-[78%] rounded-[40%] bg-[radial-gradient(circle,rgba(46,107,255,0.30),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />
        <div className="absolute bottom-[14%] left-[8%] h-[36%] w-[44%] rounded-[40%] bg-[radial-gradient(circle,rgba(52,199,89,0.22),transparent_70%)] blur-2xl" aria-hidden="true" />

        <div className="relative animate-float [animation-delay:200ms]">
          <img
            src={appHome}
            alt="Fiple iPhone app — connected MacBook Air, the Start Coding and Vibe workspaces, and the Fiple Bar"
            className="relative z-[1] w-[286px] max-sm:w-[260px] [filter:drop-shadow(0_2px_6px_rgba(11,11,15,0.10))_drop-shadow(0_30px_45px_rgba(11,11,15,0.22))]"
            width={286}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
