import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../lib/supabase";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function DownloadSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("No spam. Just beta access and launch updates.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setSubmitState("error");
      setMessage("Enter your email to join the waitlist.");
      return;
    }

    setSubmitState("submitting");
    setMessage("Adding you to the waitlist...");

    try {
      const { error } = await supabase.from("waitlist").insert({ email });

      if (error) {
        if (error.code === "23505") {
          setSubmitState("success");
          setMessage("You are already on the waitlist. We'll email you when beta access is ready.");
          form.reset();
          return;
        }

        throw error;
      }

      setSubmitState("success");
      setMessage("You are on the waitlist. We'll email you when beta access is ready.");
      form.reset();
    } catch (error) {
      console.error("Waitlist signup failed", error);
      setSubmitState("error");
      setMessage("Something went wrong. Try again or contact us directly.");
    }
  }

  return (
    <section className="scroll-mt-32 mx-auto w-[min(1180px,calc(100%_-_40px))] pt-[70px] pb-28 max-sm:w-[min(calc(100%_-_24px),1180px)]" id="download">
      <div className="rounded-[28px] border border-black/10 bg-[radial-gradient(circle_at_50%_0%,rgba(201,255,90,0.28),transparent_22rem),#fff] px-[clamp(32px,7vw,78px)] py-[clamp(32px,7vw,78px)] text-center shadow-[0_14px_48px_rgba(17,17,17,0.06)]">
        <p className="mb-[18px] text-[13px] font-black tracking-[0.16em] text-[#555] uppercase">Coming soon</p>
        <h2 className="mx-auto mb-5 max-w-[820px] font-['Bricolage_Grotesque','Arial_Black',sans-serif] text-[clamp(46px,6vw,86px)] leading-[0.88] font-black tracking-[-0.075em] text-[#111] max-sm:text-[clamp(42px,13vw,62px)]">Be first to try Fiple for macOS and iPhone.</h2>
        <p className="mx-auto max-w-[820px] text-xl leading-[1.6] text-[#555]">
          Join the beta list now. Later this area becomes direct download links for the Mac app and iPhone app.
        </p>
        <form className="mx-auto mt-[34px] mb-3 flex max-w-[590px] gap-2.5 rounded-[22px] border border-[#111] bg-[#f4f4f1] p-2 max-sm:flex-col" onSubmit={handleSubmit}>
          <input name="email" className="w-full min-w-0 bg-transparent px-3.5 text-[#111] outline-none max-sm:min-h-[50px] max-sm:text-center" aria-label="Email address" type="email" placeholder="you@example.com" required />
          <button className="min-h-[52px] rounded-[15px] bg-[#111] px-[22px] font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-60" disabled={submitState === "submitting"} type="submit">
            {submitState === "submitting" ? "Joining..." : "Join waitlist"}
          </button>
        </form>
        <span className={`block min-h-6 ${submitState === "error" ? "text-red-600" : submitState === "success" ? "text-[#315f00]" : "text-[#555]"}`} role="status">
          {message}
        </span>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3" aria-label="Future download buttons">
          <button className="rounded-2xl border border-dashed border-[#8b8b8b] bg-[#f4f4f1] px-[18px] py-3.5 text-[#555]" disabled type="button">Download for Mac</button>
          <button className="rounded-2xl border border-dashed border-[#8b8b8b] bg-[#f4f4f1] px-[18px] py-3.5 text-[#555]" disabled type="button">App Store coming soon</button>
        </div>
      </div>
    </section>
  );
}
