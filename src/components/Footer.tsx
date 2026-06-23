import icon from "../assets/fiple-icon.png";

export function Footer() {
  return (
    <footer className="mx-auto w-[min(1120px,calc(100%_-_40px))] pb-10 max-sm:w-[min(calc(100%_-_24px),1120px)]">
      <div className="grid grid-cols-[1.3fr_1fr] gap-12 border-t border-line pt-14 max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <div className="max-w-[340px]">
          <div className="flex items-center gap-2.5">
            <img src={icon} alt="" className="size-9 drop-shadow-[0_4px_8px_rgba(11,11,15,0.30)]" width={36} height={36} />
            <span className="font-display text-[20px] font-bold tracking-[-0.03em] text-ink">Fiple</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            A native Mac + iPhone app that puts your workspaces one tap away. Built for people who switch context all day.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[12px] font-medium text-muted">
            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
            Coming soon · macOS &amp; iPhone
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-faint uppercase">Pages</p>
            <ul className="grid gap-3 text-[15px] font-medium text-ink2">
              <li><a className="transition hover:text-blue" href="#top">Home</a></li>
              <li><a className="transition hover:text-blue" href="#how">How it works</a></li>
              <li><a className="transition hover:text-blue" href="#product">Product</a></li>
              <li><a className="transition hover:text-blue" href="#mac">Mac app</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-faint uppercase">Get it</p>
            <ul className="grid gap-3 text-[15px] font-medium text-ink2">
              <li><a className="transition hover:text-blue" href="#download">Join the waitlist</a></li>
              <li><span className="text-faint">Mac app — soon</span></li>
              <li><span className="text-faint">App Store — soon</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6 text-[13px] text-faint max-sm:flex-col max-sm:items-start">
        <span>© 2026 Fiple. All rights reserved.</span>
        <span className="font-mono">Made for Mac · ⌘K speed, from your pocket</span>
      </div>
    </footer>
  );
}
