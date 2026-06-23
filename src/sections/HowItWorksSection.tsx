import appPairing from "../assets/app-pairing.png";
import { steps } from "../data/commands";

export function HowItWorksSection() {
  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] scroll-mt-28 py-24 max-sm:w-[min(calc(100%_-_24px),1120px)] max-sm:py-16"
      id="how"
    >
      <div className="max-w-[680px]">
        <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-blue uppercase">Setup</p>
        <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,54px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
          Download once. Pair once.
          <br className="max-sm:hidden" /> Launch every day.
        </h2>
        <p className="mt-4 max-w-[520px] text-[18px] leading-[1.6] text-muted">
          Pairing is the whole setup. With both devices on the same Wi-Fi, your iPhone finds your
          Mac and connects with a short code — no accounts, no cables.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-[0.9fr_1.1fr] items-center gap-14 max-[940px]:grid-cols-1 max-[940px]:gap-12">
        {/* Pairing screenshot */}
        <div className="relative grid place-items-center max-[940px]:order-2">
          <div className="absolute h-[70%] w-[70%] rounded-[40%] bg-[radial-gradient(circle,rgba(46,107,255,0.22),transparent_70%)] blur-2xl" aria-hidden="true" />
          <img
            src={appPairing}
            alt="Fiple iPhone pairing screen — scanning the local network for your Mac, with a 4-digit code field"
            className="relative z-[1] w-[280px] max-sm:w-[256px] [filter:drop-shadow(0_2px_6px_rgba(11,11,15,0.10))_drop-shadow(0_30px_45px_rgba(11,11,15,0.22))]"
            width={280}
            loading="lazy"
          />
        </div>

        {/* Steps — a real ordered sequence, so numbered */}
        <ol className="relative grid gap-2 max-[940px]:order-1">
          <span className="absolute top-6 bottom-6 left-[19px] w-px bg-line max-[940px]:hidden" aria-hidden="true" />
          {steps.map((step) => (
            <li key={step.label} className="relative flex gap-5 rounded-2xl p-4 transition hover:bg-white/70">
              <span className="z-[1] grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-white font-mono text-[14px] font-semibold text-blue shadow-card">
                {step.label}
              </span>
              <div className="pt-0.5">
                <h3 className="font-display text-[21px] font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[16px] leading-[1.55] text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
