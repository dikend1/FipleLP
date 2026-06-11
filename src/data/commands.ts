import { AppWindow, Bot, Code2, Film, Globe2, Music2, Sparkles, TerminalSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Command = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type Step = {
  label: string;
  title: string;
  body: string;
};

export const commands: Command[] = [
  {
    title: "Code",
    description: "VS Code, Terminal, localhost, docs",
    Icon: Code2,
  },
  {
    title: "Browser",
    description: "Open your saved tabs and dashboards",
    Icon: Globe2,
  },
  {
    title: "Terminal",
    description: "Run a shortcut or open project shell",
    Icon: TerminalSquare,
  },
  {
    title: "AI",
    description: "Open ChatGPT, Claude, notes, prompt doc",
    Icon: Bot,
  },
  {
    title: "Focus",
    description: "Music, writing app, do-not-disturb",
    Icon: Music2,
  },
  {
    title: "Design",
    description: "Figma, assets, browser preview",
    Icon: Sparkles,
  },
  {
    title: "Media",
    description: "Editing app, folder, export shortcut",
    Icon: Film,
  },
  {
    title: "Apps",
    description: "Your favorite Mac apps in one grid",
    Icon: AppWindow,
  },
];

export const steps: Step[] = [
  {
    label: "Step 1",
    title: "Install Fiple for macOS",
    body: "The Mac helper receives commands and launches apps, URLs, shortcuts, and workflows locally.",
  },
  {
    label: "Step 2",
    title: "Pair your iPhone",
    body: "Enter the pairing code shown on your Mac. Your iPhone becomes your second command surface.",
  },
  {
    label: "Step 3",
    title: "Tap. Your Mac moves.",
    body: "Open your daily tools without hunting through windows, tabs, docks, or keyboard shortcuts.",
  },
];
