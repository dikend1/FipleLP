import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useT } from "../lib/i18n";

type SubmitState = "idle" | "submitting" | "success" | "error";
type StatusKey = "default" | "emptyEmail" | "adding" | "already" | "success" | "error";

export function DownloadSection() {
  const t = useT();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusKey, setStatusKey] = useState<StatusKey>("default");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setSubmitState("error");
      setStatusKey("emptyEmail");
      return;
    }

    setSubmitState("submitting");
    setStatusKey("adding");

    try {
      const { error } = await supabase.from("waitlist").insert({ email });

      if (error) {
        if (error.code === "23505") {
          setSubmitState("success");
          setStatusKey("already");
          form.reset();
          return;
        }

        throw error;
      }

      setSubmitState("success");
      setStatusKey("success");
      form.reset();
    } catch (error) {
      console.error("Waitlist signup failed", error);
      setSubmitState("error");
      setStatusKey("error");
    }
  }

  const success = submitState === "success";
  const message = t.download.status[statusKey];

  return (
    <section
      className="mx-auto w-[min(1120px,calc(100%_-_40px))] scroll-mt-28 pt-10 pb-24 max-sm:w-[min(calc(100%_-_24px),1120px)]"
      id="download"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-ink px-[clamp(28px,6vw,72px)] py-[clamp(40px,7vw,72px)] text-center shadow-device">
        {/* ambient accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(46,107,255,0.45),transparent_60%)] blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-72 bg-[radial-gradient(circle,rgba(52,199,89,0.35),transparent_60%)] blur-2xl" aria-hidden="true" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[12px] font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
            {t.download.badge}
          </p>
          <h2 className="mx-auto mt-5 max-w-[760px] font-display text-[clamp(34px,5vw,60px)] leading-[1.02] font-bold tracking-[-0.035em] text-white">
            {t.download.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[18px] leading-[1.6] text-white/65">
            {t.download.subtitle}
          </p>

          <form
            className="mx-auto mt-8 flex max-w-[520px] items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] p-2 backdrop-blur-sm transition duration-200 focus-within:border-white/30 focus-within:bg-white/[0.09] focus-within:ring-4 focus-within:ring-white/10 max-sm:flex-col max-sm:gap-2.5"
            onSubmit={handleSubmit}
          >
            <input
              name="email"
              className="h-[50px] w-full min-w-0 bg-transparent px-4 text-[16px] text-white placeholder:text-white/40 focus:outline-none max-sm:text-center"
              aria-label={t.download.emailAria}
              type="email"
              placeholder="you@example.com"
              required
            />
            <button
              className="inline-flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[16px] font-semibold text-ink transition hover:bg-white/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
              disabled={submitState === "submitting"}
              type="submit"
            >
              {submitState === "submitting" ? t.download.submitting : t.download.submitIdle}
              {submitState !== "submitting" && <ArrowRight size={17} />}
            </button>
          </form>

          <p
            className={`mx-auto mt-4 flex min-h-6 items-center justify-center gap-1.5 text-[14px] ${
              submitState === "error" ? "text-red-300" : success ? "text-green" : "text-white/55"
            }`}
            role="status"
          >
            {success && <Check size={15} />}
            {message}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5" aria-label={t.download.futureAria}>
            <span className="rounded-xl border border-dashed border-white/20 px-4 py-2.5 font-mono text-[13px] text-white/45">
              {t.download.macSoon}
            </span>
            <span className="rounded-xl border border-dashed border-white/20 px-4 py-2.5 font-mono text-[13px] text-white/45">
              {t.download.appStoreSoon}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
