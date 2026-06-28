import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { DemoStrip } from "./components/DemoStrip";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { legalDocs } from "./data/legal";
import { useLang } from "./lib/i18n";
import { useRoute } from "./lib/router";
import { LegalPage } from "./pages/LegalPage";
import { DownloadSection } from "./sections/DownloadSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MacShowcase } from "./sections/MacShowcase";
import { ProductSection } from "./sections/ProductSection";
import { UseCasesSection } from "./sections/UseCasesSection";

export default function App() {
  const route = useRoute();
  const { lang } = useLang();

  useEffect(() => {
    // Run after the browser's own anchor handling so it doesn't get overridden.
    const id = requestAnimationFrame(() => {
      if (route !== "home") {
        window.scrollTo(0, 0);
        return;
      }
      // On home: honor any section anchor, otherwise land at the top.
      const hash = window.location.hash;
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [route]);

  if (route !== "home") {
    return (
      <>
        <LegalPage doc={legalDocs[lang][route]} />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DemoStrip />
        <HowItWorksSection />
        <MacShowcase />
        <ProductSection />
        <UseCasesSection />
        <DownloadSection />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
