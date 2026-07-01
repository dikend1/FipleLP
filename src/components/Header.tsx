import icon from "../assets/fiple-icon.png";
import { useT } from "../lib/i18n";
import { LangToggle } from "./LangToggle";

export function Header() {
  const t = useT();
  return (
    <header className="sticky top-4 z-50 mx-auto mt-5 flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between rounded-2xl border border-line bg-white/70 py-2.5 pr-2.5 pl-3.5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-12px_rgba(11,11,15,0.18)] backdrop-blur-xl max-sm:top-2.5 max-sm:mt-3 max-sm:w-[min(calc(100%_-_24px),1120px)]">
      <a className="flex items-center gap-2.5" href="#top" aria-label="Fiple home">
        <img src={icon} alt="" className="size-9 drop-shadow-[0_4px_8px_rgba(11,11,15,0.30)]" width={36} height={36} />
        <span className="font-display text-[20px] font-bold tracking-[-0.03em] text-ink">Fiple</span>
      </a>
      <nav className="hidden flex-1 items-center justify-center gap-1 px-4 text-[15px] font-medium text-ink2 md:flex" aria-label="Primary navigation">
        <a className="rounded-full px-3.5 py-2 transition hover:bg-base2" href="#how">{t.header.navHow}</a>
        <a className="rounded-full px-3.5 py-2 transition hover:bg-base2" href="#product">{t.header.navProduct}</a>
        <a className="rounded-full px-3.5 py-2 transition hover:bg-base2" href="#mac">{t.header.navMac}</a>
      </nav>
      <div className="flex items-center gap-2.5">
        <LangToggle />
        <a
          className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-[15px] font-semibold whitespace-nowrap text-white transition hover:bg-ink2 active:scale-[0.98] max-sm:px-3.5 max-sm:text-[14px]"
          href="#download"
        >
          <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
          {t.header.waitlist}
        </a>
      </div>
    </header>
  );
}
