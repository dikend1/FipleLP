import { ArrowRight, Play } from "lucide-react";
import { PhoneMockup } from "../components/PhoneMockup";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Native Mac + iPhone app · Coming soon</p>
        <h2>Turn your iPhone into a fast command launcher for your Mac.</h2>
        <p className="hero-text">
          Launch apps, websites, shortcuts, and favorite workflows with one tap.
          Built for Mac users who switch context all day.
        </p>
        <div className="hero-actions">
          <a className="button dark" href="#download">
            Join waitlist <ArrowRight size={18} />
          </a>
          <a className="button light" href="#product">
            <Play size={17} /> See how it works
          </a>
        </div>
      </div>
      <div className="hero-stage" aria-label="Fiple iPhone app preview">
        <div className="hero-card one">Open apps</div>
        <div className="hero-card two">Run shortcuts</div>
        <div className="hero-card three">Launch sites</div>
        <PhoneMockup />
      </div>
    </section>
  );
}
