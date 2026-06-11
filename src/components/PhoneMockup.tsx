import { ChevronRight } from "lucide-react";
import { commands } from "../data/commands";

type PhoneMockupProps = {
  compact?: boolean;
};

export function PhoneMockup({ compact = false }: PhoneMockupProps) {
  return (
    <div className={compact ? "phone-mockup compact" : "phone-mockup"}>
      <div className="phone-frame">
        <div className="phone-island" />
        <div className="phone-status">
          <span>9:41</span>
          <span className="phone-indicators" aria-hidden="true">
            <span className="phone-signal"><i /><i /><i /><i /></span>
            <span className="phone-wifi" />
            <span className="phone-battery" />
          </span>
        </div>
        <div className="phone-connection"><span />Connected</div>
        <div className="phone-title">
          <p>Fiple</p>
          <span>Command Launcher</span>
        </div>
        <div className="command-grid">
          {commands.slice(0, compact ? 8 : 8).map(({ title, Icon }, index) => (
            <button className={index === 0 ? "command active" : "command"} key={title} type="button">
              <Icon size={22} strokeWidth={1.9} />
              <span>{title}</span>
              <span className="command-arrow" aria-hidden="true"><ChevronRight size={15} strokeWidth={2.4} /></span>
            </button>
          ))}
        </div>
        <div className="phone-home" />
      </div>
    </div>
  );
}
