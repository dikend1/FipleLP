import icon from "../assets/fiple-icon.png";
import { useT } from "../lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="mx-auto w-[min(1120px,calc(100%_-_40px))] pb-10 max-sm:w-[min(calc(100%_-_24px),1120px)]">
      <div className="grid grid-cols-[1.3fr_1.2fr] gap-12 border-t border-line pt-14 max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <div className="max-w-[340px]">
          <div className="flex items-center gap-2.5">
            <img src={icon} alt="" className="size-9 drop-shadow-[0_4px_8px_rgba(11,11,15,0.30)]" width={36} height={36} />
            <span className="font-display text-[20px] font-bold tracking-[-0.03em] text-ink">Fiple</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {t.footer.tagline}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[12px] font-medium text-muted">
            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
            {t.footer.comingSoon}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-faint uppercase">{t.footer.pagesHeading}</p>
            <ul className="grid gap-3 text-[15px] font-medium text-ink2">
              <li><a className="transition hover:text-blue" href="#top">{t.footer.pageHome}</a></li>
              <li><a className="transition hover:text-blue" href="#how">{t.header.navHow}</a></li>
              <li><a className="transition hover:text-blue" href="#product">{t.header.navProduct}</a></li>
              <li><a className="transition hover:text-blue" href="#mac">{t.header.navMac}</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-faint uppercase">{t.footer.getItHeading}</p>
            <ul className="grid gap-3 text-[15px] font-medium text-ink2">
              <li><a className="transition hover:text-blue" href="#download">{t.footer.getWaitlist}</a></li>
              <li><span className="text-faint">{t.footer.getMacSoon}</span></li>
              <li><span className="text-faint">{t.footer.getAppStoreSoon}</span></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] text-faint uppercase">{t.footer.legalHeading}</p>
            <ul className="grid gap-3 text-[15px] font-medium text-ink2">
              <li><a className="transition hover:text-blue" href="/support">{t.footer.legalSupport}</a></li>
              <li><a className="transition hover:text-blue" href="/privacy">{t.footer.legalPrivacy}</a></li>
              <li><a className="transition hover:text-blue" href="/terms">{t.footer.legalTerms}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6 text-[13px] text-faint max-sm:flex-col max-sm:items-start">
        <span>{t.footer.copyright}</span>
        <span className="font-mono">{t.footer.made}</span>
      </div>
    </footer>
  );
}
