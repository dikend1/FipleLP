import { ChevronDown, ChevronRight, Code2, Folder, Home, Search, Settings, User } from "lucide-react";
import { commands } from "../data/commands";

const macDescriptions = [
  "Open your code editor",
  "Open the web browser",
  "Open terminal",
  "AI assistant",
  "Focus mode",
  "Design tools",
  "Media player",
  "Applications",
];

export function MacMockup() {
  return (
    <div className="w-full max-w-[920px] xl:w-[780px]">
      <div className="overflow-hidden rounded-[18px] border-2 border-white/15 bg-[#080a09] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.85),0_24px_60px_rgba(0,0,0,0.28)]">
        <div className="grid min-h-[430px] grid-cols-[170px_1fr] bg-[#080a09] text-white max-[760px]:grid-cols-1">
          <aside className="relative flex flex-col border-r border-white/10 bg-white/[0.025] px-3.5 pt-[19px] pb-3.5 max-[760px]:hidden">
            <div className="mb-7 flex gap-[7px]">
              <span className="size-2.5 rounded-full bg-[#ff5f56]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-[10px] bg-[#c9ff5a] text-[#111]"><Code2 size={20} /></span>
              <strong className="text-2xl tracking-[-0.06em]">Fiple</strong>
            </div>
            <nav className="grid gap-1.5" aria-label="Mac mock navigation">
              <a className="flex items-center gap-2.5 rounded-lg bg-white/10 px-2.5 py-[11px] text-[13px] font-bold text-[#c9ff5a]"><Home size={15} />Launcher</a>
              <a className="flex items-center gap-2.5 rounded-lg px-2.5 py-[11px] text-[13px] font-bold text-white/75"><Folder size={15} />Projects</a>
              <a className="flex items-center gap-2.5 rounded-lg px-2.5 py-[11px] text-[13px] font-bold text-white/75"><Code2 size={15} />Snippets</a>
              <a className="flex items-center gap-2.5 rounded-lg px-2.5 py-[11px] text-[13px] font-bold text-white/75"><Settings size={15} />Settings</a>
            </nav>
            <div className="mt-auto -mx-3.5 -mb-3.5 flex items-center gap-2 border-t border-white/10 p-3.5">
              <span className="grid size-[30px] place-items-center rounded-full bg-white/15"><User size={16} /></span>
              <div><strong className="block text-[11px]">Alex Petrov</strong><small className="block text-[10px] text-white/50">alex@example.com</small></div>
            </div>
          </aside>
          <div className="px-7 pt-[46px] pb-[22px] max-sm:px-4 max-sm:pt-8">
            <div className="mb-[26px] flex items-start justify-between gap-5 max-sm:flex-col">
              <div>
                <h3 className="mb-[7px] font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[34px] font-black tracking-[-0.045em] text-white">Fiple</h3>
                <span className="text-[13px] font-extrabold tracking-[0.12em] text-white/60 uppercase">Command Launcher</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-[9px] text-xs font-bold text-white/90"><span className="size-[7px] rounded-full bg-[#7dff36]" />Connected <ChevronDown size={13} /></div>
            </div>
            <div className="grid grid-cols-4 gap-3.5 max-[760px]:grid-cols-2">
              {commands.map(({ title, Icon }, index) => {
                const active = index === 0;
                return (
                  <button className={`relative min-h-32 cursor-pointer rounded-[18px] border p-4 text-left ${active ? "border-[#c9ff5a] bg-[#c9ff5a] text-[#111]" : "border-white/10 bg-[#1d201e] text-white"}`} key={title} type="button">
                    <Icon size={27} strokeWidth={1.8} />
                    <strong className="mt-6 block text-base tracking-[-0.04em]">{title}</strong>
                    <small className={`mt-1.5 block text-[11px] font-semibold ${active ? "text-black/60" : "text-white/45"}`}>{macDescriptions[index]}</small>
                    <span className={`absolute right-3 bottom-3 grid size-[25px] place-items-center rounded-full ${active ? "bg-black/10" : "bg-white/10"}`}><ChevronRight size={16} strokeWidth={2.4} /></span>
                  </button>
                );
              })}
            </div>
            <div className="mt-[22px] flex items-center gap-2.5 rounded-[10px] border border-white/10 p-3 text-xs text-white/35">
              <Search size={15} />
              <span>Type a command or search...</span>
              <kbd className="ml-auto rounded-[7px] bg-white/10 px-2 py-1 font-[inherit] text-white/60">⌘ K</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
