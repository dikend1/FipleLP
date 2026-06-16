import { ChevronRight } from "lucide-react";
import { commands } from "../data/commands";

type PhoneMockupProps = {
  compact?: boolean;
};

export function PhoneMockup({ compact = false }: PhoneMockupProps) {
  return (
    <div className={`relative z-[1] ${compact ? "scale-[0.78] max-sm:scale-[0.82]" : "scale-95"}`}>
      <div className="relative min-h-[622px] w-[292px] overflow-hidden rounded-[46px] border-[7px] border-[#050505] bg-[radial-gradient(circle_at_76%_17%,rgba(201,255,90,0.1),transparent_8rem),linear-gradient(145deg,#151716,#080a09_72%)] px-[22px] pt-[25px] pb-[18px] text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08),inset_0_0_0_4px_rgba(0,0,0,0.9),0_28px_65px_rgba(17,17,17,0.26)] max-sm:min-h-[550px] max-sm:w-[268px]">
        <div className="absolute top-[18px] left-1/2 h-[27px] w-[92px] -translate-x-1/2 rounded-full bg-[#020303] shadow-[inset_-15px_0_20px_rgba(47,255,62,0.05)]" />
        <div className="mb-[34px] mx-1 flex items-center justify-between text-xs font-extrabold">
          <span>9:41</span>
          <span className="inline-flex items-center gap-[5px]" aria-hidden="true">
            <span className="inline-flex h-[11px] items-end gap-0.5">
              <i className="block h-1 w-0.5 rounded-sm bg-white" />
              <i className="block h-1.5 w-0.5 rounded-sm bg-white" />
              <i className="block h-2 w-0.5 rounded-sm bg-white" />
              <i className="block h-2.5 w-0.5 rounded-sm bg-white" />
            </span>
            <span className="h-2 w-2.5 rounded-t-[10px] border-2 border-b-0 border-white border-x-transparent" />
            <span className="relative h-2 w-[17px] rounded-sm border border-white/80 before:absolute before:inset-px before:rounded-[1px] before:bg-white before:content-[''] after:absolute after:top-1/2 after:-right-[3px] after:h-1 after:w-0.5 after:-translate-y-1/2 after:rounded-r-sm after:bg-white/80 after:content-['']" />
          </span>
        </div>
        <div className="absolute top-[58px] right-5 inline-flex items-center gap-[5px] rounded-full border border-white/10 bg-white/10 px-2.5 py-[7px] text-[11px] font-bold text-white/90">
          <span className="size-1.5 rounded-full bg-[#7dff36]" />Connected
        </div>
        <div>
          <p className="mb-1.5 text-[35px] font-black tracking-[-0.07em] text-white">Fiple</p>
          <span className="text-xs font-extrabold tracking-[0.12em] text-white/60 uppercase">Command Launcher</span>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {commands.slice(0, 8).map(({ title, Icon }, index) => {
            const active = index === 0;
            return (
              <button className={`group relative min-h-[92px] cursor-pointer rounded-[22px] border p-3.5 text-left font-extrabold transition hover:-translate-y-1 ${active ? "border-[#c9ff5a]/80 bg-[#c9ff5a] text-[#111]" : "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.06))] text-white hover:border-[#c9ff5a]/80 hover:bg-[#c9ff5a] hover:text-[#111]"}`} key={title} type="button">
                <Icon size={22} strokeWidth={1.9} />
                <span className="mt-[18px] block">{title}</span>
                <span className={`absolute right-[11px] bottom-3.5 grid size-6 place-items-center rounded-full ${active ? "bg-black/10" : "bg-white/10 group-hover:bg-black/10"}`} aria-hidden="true"><ChevronRight size={15} strokeWidth={2.4} /></span>
              </button>
            );
          })}
        </div>
        <div className="mx-auto mt-[22px] h-1 w-[100px] rounded-full bg-white" />
      </div>
    </div>
  );
}
