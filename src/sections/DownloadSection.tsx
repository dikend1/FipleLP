import { useState } from "react";
import type { FormEvent } from "react";

export function DownloadSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="download" id="download">
      <div className="download-panel">
        <p className="eyebrow">Coming soon</p>
        <h2>Be first to try Fiple for macOS and iPhone.</h2>
        <p>
          Join the beta list now. Later this area becomes direct download links for the Mac app and iPhone app.
        </p>
        <form className="waitlist" onSubmit={handleSubmit}>
          <input aria-label="Email address" type="email" placeholder="you@example.com" required />
          <button type="submit">Join waitlist</button>
        </form>
        <span className="form-message">
          {submitted ? "You are on the list. Download links will appear here when beta is ready." : "No spam. Just beta access and launch updates."}
        </span>
        <div className="download-buttons" aria-label="Future download buttons">
          <button disabled type="button">Download for Mac</button>
          <button disabled type="button">App Store coming soon</button>
        </div>
      </div>
    </section>
  );
}
