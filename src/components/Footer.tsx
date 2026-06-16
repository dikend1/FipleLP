export function Footer() {
  return (
    <footer className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1fr_1.4fr] gap-[60px] border-t border-[#d5d5d2] pt-[92px] pb-9 max-[980px]:grid-cols-1 max-sm:w-[min(calc(100%_-_24px),1180px)]">
      <div className="flex items-center gap-3 text-[21px] font-extrabold tracking-[-0.04em]">
        <span className="grid size-[38px] place-items-center rounded-xl bg-[#111] text-white shadow-[inset_0_-8px_18px_rgba(255,255,255,0.16)]">F</span>
        <strong>Fiple</strong>
      </div>
      <div className="grid grid-cols-2 gap-11 max-sm:grid-cols-1">
        <div className="grid gap-[18px]">
          <p className="mb-2.5 text-sm font-extrabold tracking-[0.16em] text-[#8b8b8b] uppercase">Links</p>
          <a className="text-[19px] font-semibold text-[#303541]" href="#top">Home</a>
          <a className="text-[19px] font-semibold text-[#303541]" href="#how">How it works</a>
          <a className="text-[19px] font-semibold text-[#303541]" href="#download">Download</a>
        </div>
        <div className="grid gap-[18px]">
          <p className="mb-2.5 text-sm font-extrabold tracking-[0.16em] text-[#8b8b8b] uppercase">Product</p>
          <a className="text-[19px] font-semibold text-[#303541]" href="#product">Mac helper</a>
          <a className="text-[19px] font-semibold text-[#303541]" href="#product">iPhone app</a>
          <a className="text-[19px] font-semibold text-[#303541]" href="#download">Beta access</a>
        </div>
      </div>
      <div className="col-span-full border-t border-[#d5d5d2] pt-8 text-[#747987]">© 2026 Fiple. All rights reserved.</div>
    </footer>
  );
}
