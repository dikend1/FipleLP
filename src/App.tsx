import { DemoStrip } from "./components/DemoStrip";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { DownloadSection } from "./sections/DownloadSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MacShowcase } from "./sections/MacShowcase";
import { ProductSection } from "./sections/ProductSection";
import { UseCasesSection } from "./sections/UseCasesSection";

export default function App() {
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
    </>
  );
}
