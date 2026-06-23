export type Step = {
  label: string;
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    label: "01",
    title: "Install Fiple for Mac",
    body: "The Mac app sits in your menu bar and does the launching. Set up your workspaces and Fiple Bar once.",
  },
  {
    label: "02",
    title: "Pair your iPhone",
    body: "Open Fiple on your iPhone — it scans your local network for your Mac. Enter the 4-digit code to pair.",
  },
  {
    label: "03",
    title: "Tap. Your Mac moves.",
    body: "Run a whole workspace or fire a single app from the Fiple Bar. No windows, docks, or Cmd-Tab.",
  },
];
