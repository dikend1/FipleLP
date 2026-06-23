import { Boxes, LayoutGrid, Smartphone } from "lucide-react";
import appMac from "../assets/app-mac.png";

const callouts = [
  {
    Icon: LayoutGrid,
    title: "Workspaces",
    body: "Group the apps, sites, and shortcuts you open together. Run the whole set with one tap.",
  },
  {
    Icon: Boxes,
    title: "Fiple Bar",
    body: "Pin single apps — Telegram, VS Code, Claude, ChatGPT — for instant one-tap launches.",
  },
  {
    Icon: Smartphone,
    title: "Devices",
    body: "Your paired iPhone shows up live as Connected. Pair, unpair, and manage it from one place.",
  },
];

export function MacShowcase() {
  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] scroll-mt-28 py-24 max-sm:w-[min(calc(100%_-_24px),1120px)] max-sm:py-16"
      id="mac"
    >
      <div className="max-w-[680px]">
        <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-blue uppercase">The Mac app</p>
        <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,54px)] leading-[1.02] font-bold tracking-[-0.035em] text-ink">
          Set it up on your Mac.
          <br className="max-sm:hidden" /> Run it from your pocket.
        </h2>
        <p className="mt-4 max-w-[540px] text-[18px] leading-[1.6] text-muted">
          Build your workspaces and Fiple Bar on the big screen. Everything you arrange here is
          instantly tappable on your iPhone.
        </p>
      </div>

      {/* Mac window */}
      <div className="relative mt-12">
        <div className="absolute inset-x-10 top-10 -z-[1] h-full rounded-[28px] bg-[radial-gradient(circle_at_50%_0%,rgba(46,107,255,0.18),transparent_60%)] blur-2xl" aria-hidden="true" />
        <div className="overflow-hidden rounded-[14px] border border-line shadow-device">
          <img
            src={appMac}
            alt="Fiple for macOS — the Start Coding, Vibe, Productive, and Games workspaces, the Fiple Bar, Recent activity, and a connected iPhone"
            className="block w-full"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
        {callouts.map(({ Icon, title, body }) => (
          <article key={title} className="rounded-2xl border border-line bg-white/70 p-6 shadow-card backdrop-blur-sm">
            <span className="grid size-11 place-items-center rounded-xl bg-blueSoft text-blue">
              <Icon size={20} strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">{title}</h3>
            <p className="mt-2 text-[15.5px] leading-[1.55] text-muted">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
