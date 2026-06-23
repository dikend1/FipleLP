import { Code2, Palette, Target } from "lucide-react";

const useCases = [
  {
    Icon: Code2,
    title: "For builders",
    body: "Editor, terminal, localhost, docs, and your AI assistant — the whole stack from one workspace.",
  },
  {
    Icon: Palette,
    title: "For creators",
    body: "Design tools, assets, browser preview, and export shortcuts, lined up and ready to fire.",
  },
  {
    Icon: Target,
    title: "For focus",
    body: "Start your writing or study setup in one tap and stop hunting through windows.",
  },
];

export function UseCasesSection() {
  return (
    <section className="mx-auto grid w-[min(1120px,calc(100%_-_40px))] grid-cols-[1fr_0.9fr] items-start gap-12 py-24 max-[940px]:grid-cols-1 max-[940px]:gap-10 max-sm:w-[min(calc(100%_-_24px),1120px)] max-sm:py-16">
      <div className="max-w-[520px]">
        <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-blue uppercase">Why Fiple</p>
        <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,54px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
          Not a remote desktop. Not another dock.
        </h2>
        <p className="mt-4 text-[18px] leading-[1.6] text-muted">
          Fiple is a second command surface for your Mac — the fastest way to start what you were
          about to do, whoever you are.
        </p>
      </div>
      <div className="grid gap-4">
        {useCases.map(({ Icon, title, body }) => (
          <article key={title} className="flex gap-4 rounded-2xl border border-line bg-white/70 p-5 shadow-card backdrop-blur-sm">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-base2 text-ink2">
              <Icon size={20} strokeWidth={2} />
            </span>
            <div>
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-1 text-[15.5px] leading-[1.55] text-muted">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
