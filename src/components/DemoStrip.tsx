import { ArrowRight, Smartphone, Sparkles, Zap } from "lucide-react";

const beats = [
  { Icon: Smartphone, label: "Tap on iPhone", tint: "text-blue bg-blueSoft" },
  { Icon: Zap, label: "Mac launches instantly", tint: "text-green bg-greenSoft" },
  { Icon: Sparkles, label: "Back to your flow", tint: "text-ink2 bg-base2" },
];

export function DemoStrip() {
  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] py-6 max-sm:w-[min(calc(100%_-_24px),1120px)]"
      aria-label="How Fiple works in three beats"
    >
      <div className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-white/70 p-3 shadow-card backdrop-blur-sm max-[760px]:flex-col max-[760px]:gap-3">
        {beats.map(({ Icon, label, tint }, i) => (
          <div key={label} className="flex items-center gap-2 max-[760px]:w-full max-[760px]:justify-center">
            <div className="flex items-center gap-2.5 rounded-xl px-3 py-2">
              <span className={`grid size-8 place-items-center rounded-lg ${tint}`}>
                <Icon size={17} strokeWidth={2} />
              </span>
              <span className="text-[15px] font-semibold text-ink">{label}</span>
            </div>
            {i < beats.length - 1 && (
              <ArrowRight size={16} className="text-faint max-[760px]:rotate-90" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
