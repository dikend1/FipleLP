import { useT } from "../lib/i18n";

/**
 * The three-beat handoff, drawn as a real connection trace: small device/status
 * nodes on a thin rail, a blue pulse that travels the line (the "instant" launch),
 * and the green "Connected" endpoint with the same live ping the app shows.
 */
export function DemoStrip() {
  const t = useT();
  const { beats, nodes } = t.demo;

  const dot = (i: number, last: boolean) => (
    <span className="relative grid size-[15px] shrink-0 place-items-center">
      {last && (
        <span className="absolute inline-flex size-[9px] rounded-full bg-green/55 animate-ping2" aria-hidden="true" />
      )}
      <span
        className={`relative size-[9px] rounded-full ring-4 ring-white ${
          last ? "bg-green" : i === 0 ? "bg-blue" : "bg-faint"
        }`}
      />
    </span>
  );

  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] py-6 max-sm:w-[min(calc(100%_-_24px),1120px)]"
      aria-label={t.demo.aria}
    >
      <div className="rounded-2xl border border-line bg-white/70 px-8 py-7 shadow-card backdrop-blur-sm max-[760px]:px-5 max-[760px]:py-6">
        {/* Desktop: horizontal trace */}
        <div className="relative max-[760px]:hidden">
          {/* rail spanning the centers of the first and last node */}
          <div className="pointer-events-none absolute top-[7px] right-[16.66%] left-[16.66%] h-px">
            <span className="absolute inset-0 bg-line" />
            <span className="absolute top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue animate-trace [box-shadow:0_0_0_4px_rgba(47,107,255,0.16),0_0_14px_2px_rgba(47,107,255,0.55)]" />
          </div>
          <ol className="relative grid grid-cols-3">
            {beats.map((beat, i) => {
              const last = i === beats.length - 1;
              return (
                <li key={i} className="flex flex-col items-center px-4 text-center">
                  {dot(i, last)}
                  <span
                    className={`mt-3.5 font-mono text-[11px] tracking-[0.16em] uppercase ${
                      last ? "text-green" : "text-faint"
                    }`}
                  >
                    {nodes[i]}
                  </span>
                  <span className="mt-1.5 text-[15px] font-semibold tracking-[-0.01em] text-ink">{beat}</span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile: vertical trace */}
        <ol className="relative hidden gap-5 max-[760px]:grid">
          <span className="absolute top-[10px] bottom-[10px] left-[7px] w-px bg-line" aria-hidden="true" />
          {beats.map((beat, i) => {
            const last = i === beats.length - 1;
            return (
              <li key={i} className="relative z-[1] flex items-center gap-3.5">
                {dot(i, last)}
                <span className="flex items-baseline gap-2.5">
                  <span className="text-[15px] font-semibold text-ink">{beat}</span>
                  <span
                    className={`font-mono text-[11px] tracking-[0.12em] uppercase ${
                      last ? "text-green" : "text-faint"
                    }`}
                  >
                    {nodes[i]}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
