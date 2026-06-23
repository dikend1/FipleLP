export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type Section = { heading: string; blocks: Block[] };
export type LegalDoc = {
  eyebrow: string;
  title: string;
  tagline: string;
  updated?: string;
  sections: Section[];
};

export const SUPPORT_EMAIL = "support@fiple.app";
const UPDATED = "June 23, 2026";

export const legalDocs: Record<"privacy" | "terms" | "support", LegalDoc> = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    tagline: "How Fiple handles your data — in plain language.",
    updated: UPDATED,
    sections: [
      {
        heading: "The short version",
        blocks: [
          { type: "p", text: "Fiple is a Mac and iPhone app that launches your Mac apps, websites, and shortcuts from your phone. We collect as little as possible — today, that's the email you give us to join the waitlist." },
          { type: "p", text: "Your workspaces and the things you launch stay on your own devices. We don't see them." },
        ],
      },
      {
        heading: "What we collect",
        blocks: [
          {
            type: "ul",
            items: [
              "Waitlist email — when you join the waitlist, we store your email address so we can send beta access and launch updates.",
              "Basic, privacy-respecting usage data — if enabled, aggregate analytics that help us understand how this site is used. This never includes the contents of your workspaces.",
            ],
          },
          { type: "p", text: "You don't need an account to try the apps." },
        ],
      },
      {
        heading: "How pairing keeps your data local",
        blocks: [
          { type: "p", text: "Fiple pairs your iPhone and Mac directly over your local network using a short code. When you tap a workspace or app, the command goes straight to your Mac, which does the launching." },
          { type: "p", text: "Your app list, workspaces, shortcuts, and activity stay on your devices. We don't collect, store, or transmit them to our servers." },
        ],
      },
      {
        heading: "How we use your information",
        blocks: [
          {
            type: "ul",
            items: [
              "Operate the waitlist and send you beta and launch updates.",
              "Respond to your support requests.",
              "Keep the service secure and working.",
            ],
          },
        ],
      },
      {
        heading: "Sharing",
        blocks: [
          { type: "p", text: "We don't sell your personal information. We rely on a few trusted providers to run Fiple — for example, to store the waitlist and send email — and they only process your data on our behalf." },
        ],
      },
      {
        heading: "Keeping and deleting your data",
        blocks: [
          { type: "p", text: "We keep your waitlist email until you unsubscribe or ask us to delete it. Email us anytime and we'll remove you." },
        ],
      },
      {
        heading: "Your choices",
        blocks: [
          {
            type: "ul",
            items: [
              "Unsubscribe from any email we send.",
              "Ask us to access or delete the data we hold about you.",
            ],
          },
        ],
      },
      {
        heading: "Children",
        blocks: [
          { type: "p", text: "Fiple isn't directed to children, and we don't knowingly collect data from anyone under 13." },
        ],
      },
      {
        heading: "Changes to this policy",
        blocks: [
          { type: "p", text: "If we change this policy, we'll update the date above and, for significant changes, let you know." },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          { type: "p", text: `Questions about privacy? Email us at ${SUPPORT_EMAIL}.` },
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    tagline: "The agreement for using Fiple and joining the waitlist.",
    updated: UPDATED,
    sections: [
      {
        heading: "Agreement",
        blocks: [
          { type: "p", text: "By joining the Fiple waitlist or using the Fiple apps, you agree to these terms. If you don't agree, please don't use the service." },
        ],
      },
      {
        heading: "What Fiple is",
        blocks: [
          { type: "p", text: "Fiple is a Mac and iPhone app that lets you launch your Mac apps, websites, and shortcuts from your iPhone. It's currently in development, and the waitlist gives you early access when it's ready." },
        ],
      },
      {
        heading: "Beta software",
        blocks: [
          { type: "p", text: "Fiple is provided on an “as is” and “as available” basis. Early versions may change, contain bugs, or be unavailable at times. We don't make warranties about the apps." },
        ],
      },
      {
        heading: "Using Fiple responsibly",
        blocks: [
          {
            type: "ul",
            items: [
              "Use the apps lawfully and only with devices you own or are allowed to control.",
              "Don't attempt to disrupt, abuse, or gain unauthorized access to the service or other people's devices.",
              "You're responsible for the workspaces you create and the actions you launch.",
            ],
          },
        ],
      },
      {
        heading: "The waitlist",
        blocks: [
          { type: "p", text: "When you join the waitlist, you're asking us to email you about beta access and launch news. You can unsubscribe at any time." },
        ],
      },
      {
        heading: "Our brand and content",
        blocks: [
          { type: "p", text: "The Fiple name, logo, apps, and this website belong to us. Please don't copy or reuse them without permission." },
        ],
      },
      {
        heading: "Limitation of liability",
        blocks: [
          { type: "p", text: "To the maximum extent permitted by law, Fiple isn't liable for any indirect, incidental, or consequential damages arising from your use of the apps or website." },
        ],
      },
      {
        heading: "Changes to these terms",
        blocks: [
          { type: "p", text: "We may update these terms. If we do, we'll change the date above. Continuing to use Fiple means you accept the updated terms." },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          { type: "p", text: `Questions about these terms? Email us at ${SUPPORT_EMAIL}.` },
        ],
      },
    ],
  },

  support: {
    eyebrow: "Support",
    title: "Help & Support",
    tagline: "Get help with pairing, setup, and everything else.",
    sections: [
      {
        heading: "Contact us",
        blocks: [
          { type: "p", text: `The fastest way to reach us is email. Write to ${SUPPORT_EMAIL} and we'll get back to you, usually within a couple of business days.` },
        ],
      },
      {
        heading: "Setup at a glance",
        blocks: [
          {
            type: "ul",
            items: [
              "Install Fiple for Mac — it lives in your menu bar.",
              "Open Fiple on your iPhone, with both devices on the same Wi-Fi.",
              "Enter the 4-digit code shown on your Mac to pair.",
              "Tap a workspace or app to launch it on your Mac.",
            ],
          },
        ],
      },
      {
        heading: "Fiple can't find my Mac",
        blocks: [
          { type: "p", text: "Make sure both devices are on the same Wi-Fi network, the Fiple app is open on your Mac, and you've allowed Local Network access for Fiple on your iPhone (Settings → Fiple)." },
        ],
      },
      {
        heading: "What do I need to use Fiple?",
        blocks: [
          { type: "p", text: "A Mac and an iPhone on the same network. The Mac app does the launching; your iPhone is the remote." },
        ],
      },
      {
        heading: "Is Fiple available yet?",
        blocks: [
          { type: "p", text: "Fiple is coming soon for macOS and iPhone. Join the waitlist and we'll email you the moment beta access opens." },
        ],
      },
      {
        heading: "How does my iPhone talk to my Mac?",
        blocks: [
          { type: "p", text: "Directly over your local network — there's no cloud relay for launching, and your workspace contents stay on your devices." },
        ],
      },
      {
        heading: "How do I leave the waitlist?",
        blocks: [
          { type: "p", text: `Use the unsubscribe link in any email, or write to ${SUPPORT_EMAIL}.` },
        ],
      },
    ],
  },
};
