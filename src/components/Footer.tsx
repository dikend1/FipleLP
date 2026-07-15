import { Send } from "lucide-react";
import icon from "../assets/fiple-icon.png";
import { useT } from "../lib/i18n";
import { APP_STORE_URL, LINKEDIN_URL, MAC_DOWNLOAD_URL, TELEGRAM_URL } from "../lib/links";

// lucide dropped brand icons, so the LinkedIn glyph ships inline.
function LinkedinGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

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
          <div className="mt-5 flex items-center gap-2.5">
            <a
              className="grid size-10 place-items-center rounded-xl border border-line bg-white text-muted shadow-card transition hover:-translate-y-0.5 hover:text-blue hover:shadow-lift"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram — @maksatovdias"
            >
              <Send size={18} />
            </a>
            <a
              className="grid size-10 place-items-center rounded-xl border border-line bg-white text-muted shadow-card transition hover:-translate-y-0.5 hover:text-blue hover:shadow-lift"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Dias Maksatov"
            >
              <LinkedinGlyph size={17} />
            </a>
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
              <li><a className="transition hover:text-blue" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">{t.footer.getAppStore}</a></li>
              <li><a className="transition hover:text-blue" href={MAC_DOWNLOAD_URL}>{t.footer.getMacDirect}</a></li>
              <li><a className="transition hover:text-blue" href="#download">{t.footer.getUpdates}</a></li>
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
