import { AppWindow, Globe, History, LayoutGrid, Pin, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "../lib/i18n";

const featureStyles: { Icon: LucideIcon; tint: string }[] = [
  { Icon: AppWindow, tint: "bg-blueSoft text-blue" },
  { Icon: Globe, tint: "bg-greenSoft text-green" },
  { Icon: Zap, tint: "bg-blueSoft text-blue" },
  { Icon: LayoutGrid, tint: "bg-greenSoft text-green" },
  { Icon: Pin, tint: "bg-blueSoft text-blue" },
  { Icon: History, tint: "bg-greenSoft text-green" },
];

export function ProductSection() {
  const t = useT();
  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] scroll-mt-28 py-24 max-sm:w-[min(calc(100%_-_24px),1120px)] max-sm:py-16"
      id="product"
    >
      <div className="max-w-[680px]">
        <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-blue uppercase">{t.product.eyebrow}</p>
        <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,54px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
          {t.product.title}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-sm:grid-cols-1">
        {t.product.features.map(({ title, body }, i) => {
          const { Icon, tint } = featureStyles[i];
          return (
            <article
              key={i}
              className="group rounded-2xl border border-line bg-white/70 p-6 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-lift"
            >
              <span className={`grid size-11 place-items-center rounded-xl ${tint} transition group-hover:scale-105`}>
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-[21px] font-semibold tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-2 text-[15.5px] leading-[1.55] text-muted">{body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
