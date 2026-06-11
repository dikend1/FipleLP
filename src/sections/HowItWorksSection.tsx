import { MacMockup } from "../components/MacMockup";
import { PhoneMockup } from "../components/PhoneMockup";
import { steps } from "../data/commands";

export function HowItWorksSection() {
  return (
    <section className="section how" id="how">
      <div className="section-heading centered">
        <p className="eyebrow">Simple setup</p>
        <h2>Download once. Pair once. Launch every day.</h2>
        <p>
          The landing page is ready now. When the native apps are finished, the waitlist button becomes your download button.
        </p>
      </div>
      <div className="steps-layout">
        <MacMockup />
        <div className="plus">+</div>
        <PhoneMockup compact />
      </div>
      <div className="step-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.label}>
            <span>{step.label}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
