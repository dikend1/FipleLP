// Supabase Edge Function: waitlist-welcome
//
// Sends a branded "you're on the waitlist" email via Resend whenever a new row
// is inserted into the `waitlist` table. Wired up as a Database Webhook
// (Database → Webhooks) on INSERT, so it fires automatically — the landing
// page form does not need to change.
//
// Required secrets (set with `supabase secrets set` or in the dashboard):
//   RESEND_API_KEY          – your Resend API key (re_...)
//   WAITLIST_FROM_EMAIL     – e.g. "Fiple <hello@fiple.app>" (domain must be verified in Resend)
//   WAITLIST_REPLY_TO       – optional, e.g. "support@fiple.app"
//   WAITLIST_WEBHOOK_SECRET – a random string; also set as the "x-webhook-secret"
//                             header on the Database Webhook so only Supabase can call this.

interface WebhookPayload {
  type?: string;
  table?: string;
  record?: { email?: string } | null;
  // also support a direct test call: { "email": "you@example.com" }
  email?: string;
}

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function welcomeHtml(): string {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f2f3f5;font-family:-apple-system,'Segoe UI',Inter,Helvetica,Arial,sans-serif;color:#0b0b0f;">
    <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
      <div style="text-align:center;margin-bottom:28px;">
        <img src="https://fiple.app/icon.png" width="52" height="52" alt="Fiple" style="display:inline-block;width:52px;height:52px;border-radius:14px;" />
      </div>
      <div style="background:#ffffff;border:1px solid #e6e8ec;border-radius:20px;padding:36px 32px;box-shadow:0 6px 20px rgba(11,11,15,0.05);">
        <p style="margin:0 0 14px;font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#2f6bff;">You're on the list</p>
        <h1 style="margin:0 0 14px;font-size:28px;line-height:1.15;font-weight:800;letter-spacing:-0.02em;color:#0b0b0f;">Congrats — you're in the queue. 🎉</h1>
        <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#41454d;">
          Thanks for joining the <strong>Fiple</strong> waitlist. Fiple turns your iPhone into a launcher for your Mac — open workspaces, apps, and shortcuts in one tap.
        </p>
        <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#41454d;">
          We'll email you the moment beta access opens. No spam — just launch news.
        </p>
        <div style="display:inline-flex;align-items:center;gap:8px;border:1px solid #e6e8ec;border-radius:999px;padding:8px 14px;font-size:13px;color:#6b7280;background:#f7f8fa;">
          <span style="display:inline-block;width:8px;height:8px;border-radius:999px;background:#34c759;"></span>
          Coming soon · macOS &amp; iPhone
        </div>
      </div>
      <p style="margin:22px 0 0;text-align:center;font-size:12px;color:#9aa1ad;">
        You're receiving this because you joined the waitlist at fiple.app.
      </p>
    </div>
  </body>
</html>`;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Verify the shared secret so only the Supabase webhook can trigger sends.
  const expectedSecret = Deno.env.get("WAITLIST_WEBHOOK_SECRET");
  if (expectedSecret && req.headers.get("x-webhook-secret") !== expectedSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const email = payload.record?.email ?? payload.email;
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return new Response("No valid email in payload", { status: 400 });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  // Sender address — set in code so it's explicit. Domain (fiple.app) must be verified in Resend.
  const from = "Fiple <fiple@fiple.app>";
  const replyTo = Deno.env.get("WAITLIST_REPLY_TO");
  if (!apiKey) {
    return new Response("RESEND_API_KEY not configured", { status: 500 });
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "You're on the Fiple waitlist 🎉",
      html: welcomeHtml(),
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error", res.status, detail);
    return new Response(`Email send failed: ${res.status}`, { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
