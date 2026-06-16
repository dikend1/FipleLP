export function DemoStrip() {
  return (
    <section className="mx-auto flex w-[min(1180px,calc(100%_-_40px))] items-center justify-center gap-[18px] py-[34px] max-sm:w-[min(calc(100%_-_24px),1180px)] max-sm:flex-col" aria-label="Fiple product flow">
      <div className="rounded-full border border-[#111] bg-white px-5 py-3.5 font-black">Tap on iPhone</div>
      <div className="h-px w-[72px] bg-[#111] max-sm:h-[42px] max-sm:w-px" />
      <div className="rounded-full border border-[#111] bg-[#111] px-5 py-3.5 font-black text-white">Mac launches instantly</div>
      <div className="h-px w-[72px] bg-[#111] max-sm:h-[42px] max-sm:w-px" />
      <div className="rounded-full border border-[#111] bg-white px-5 py-3.5 font-black">Back to flow</div>
    </section>
  );
}
