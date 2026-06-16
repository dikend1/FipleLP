export function Header() {
  return (
    <header className="sticky top-4 z-10 mx-auto mt-6 flex w-[min(1180px,calc(100%_-_40px))] items-center justify-between rounded-[26px] border border-black/10 bg-white/75 py-2.5 pr-2.5 pl-3.5 backdrop-blur-[18px] max-sm:top-2.5 max-sm:mt-2.5 max-sm:w-[min(calc(100%_-_24px),1180px)]">
      <a className="flex items-center gap-3 text-[21px] font-extrabold tracking-[-0.04em]" href="#top" aria-label="Fiple home">
        <span className="grid size-[38px] place-items-center rounded-xl bg-[#111] text-white shadow-[inset_0_-8px_18px_rgba(255,255,255,0.16)]">F</span>
        <span>Fiple</span>
      </a>
      <nav className="flex items-center gap-9 text-lg font-semibold text-[#2a2a2a] max-[980px]:hidden" aria-label="Primary navigation">
        <a href="#how">How it works</a>
        <a href="#product">Product</a>
        <a href="#download">Download</a>
      </nav>
      <a className="rounded-2xl bg-[#111] px-6 py-[15px] text-[17px] font-bold text-white max-sm:hidden" href="#download">Join waitlist</a>
    </header>
  );
}
