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
    <div className="macbook">
      <div className="mac-screen">
        <div className="mac-window">
          <aside className="mac-sidebar">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="mac-brand">
              <span><Code2 size={20} /></span>
              <strong>Fiple</strong>
            </div>
            <nav className="mac-nav" aria-label="Mac mock navigation">
              <a className="active"><Home size={15} />Launcher</a>
              <a><Folder size={15} />Projects</a>
              <a><Code2 size={15} />Snippets</a>
              <a><Settings size={15} />Settings</a>
            </nav>
            <div className="mac-user">
              <span><User size={16} /></span>
              <div><strong>Alex Petrov</strong><small>alex@example.com</small></div>
            </div>
          </aside>
          <div className="mac-content">
            <div className="mac-topline">
              <div className="mac-heading">
                <h3>Fiple</h3>
                <span>Command Launcher</span>
              </div>
              <div className="mac-connected"><span />Connected <ChevronDown size={13} /></div>
            </div>
            <div className="mac-grid">
              {commands.map(({ title, Icon }, index) => (
                <button className={index === 0 ? "mac-card active" : "mac-card"} key={title} type="button">
                  <Icon size={27} strokeWidth={1.8} />
                  <strong>{title}</strong>
                  <small>{macDescriptions[index]}</small>
                  <span className="mac-card-arrow"><ChevronRight size={16} strokeWidth={2.4} /></span>
                </button>
              ))}
            </div>
            <div className="mac-search">
              <Search size={15} />
              <span>Type a command or search...</span>
              <kbd>⌘ K</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
