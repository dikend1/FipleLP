# Waitlist welcome email

When someone joins the waitlist (a row is inserted into the `waitlist` table),
the `waitlist-welcome` Edge Function sends them a branded "you're in the queue"
email via [Resend](https://resend.com). It's triggered by a **Database Webhook**,
so the landing page form needs no changes.

```
new waitlist row  ──▶  Database Webhook (INSERT)  ──▶  waitlist-welcome  ──▶  Resend  ──▶  user's inbox
```

## One-time setup

### 1. Resend (the email sender)
1. Create a free account at https://resend.com (free tier: 3,000 emails/mo).
2. **Verify your domain** (`fiple.app`) under *Domains* — add the DNS records it shows.
   - This is the same domain you use for `support@fiple.app`. Until it's verified you
     can only send from `onboarding@resend.dev` and only to your own Resend email
     (fine for testing).
3. Create an **API key** (starts with `re_`).

### 2. Set the function secrets
Dashboard → Project Settings → Edge Functions → Secrets (or via CLI below):

| Secret | Value |
| --- | --- |
| `RESEND_API_KEY` | your `re_...` key |
| `WAITLIST_FROM_EMAIL` | `Fiple <hello@fiple.app>` (use `onboarding@resend.dev` before domain is verified) |
| `WAITLIST_REPLY_TO` | `support@fiple.app` (optional) |
| `WAITLIST_WEBHOOK_SECRET` | any long random string (e.g. `openssl rand -hex 24`) |

CLI alternative:
```bash
supabase secrets set RESEND_API_KEY=re_xxx \
  WAITLIST_FROM_EMAIL="Fiple <hello@fiple.app>" \
  WAITLIST_REPLY_TO="support@fiple.app" \
  WAITLIST_WEBHOOK_SECRET="$(openssl rand -hex 24)"
```

### 3. Deploy the function
- **CLI:** set `project_id` in `supabase/config.toml`, then
  ```bash
  supabase functions deploy waitlist-welcome
  ```
- **Dashboard:** Edge Functions → Create function → name `waitlist-welcome`,
  paste `functions/waitlist-welcome/index.ts`, and turn **Verify JWT off**.

### 4. The webhook (already live)
Instead of a dashboard webhook, this is wired as a Postgres trigger using `pg_net`
(equivalent, and version-controllable). It's already deployed on the project. For
reference, the trigger calls the function on every insert:

```sql
create extension if not exists pg_net;

create or replace function public.notify_waitlist_welcome()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  perform net.http_post(
    url := 'https://<project-ref>.supabase.co/functions/v1/waitlist-welcome',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-webhook-secret', '<WAITLIST_WEBHOOK_SECRET value>'
    ),
    body := jsonb_build_object('type','INSERT','table','waitlist','record', to_jsonb(NEW))
  );
  return NEW;
end; $$;

revoke execute on function public.notify_waitlist_welcome() from public, anon, authenticated;

create trigger waitlist_welcome_email
after insert on public.waitlist for each row
execute function public.notify_waitlist_welcome();
```

The `x-webhook-secret` in the trigger must match the `WAITLIST_WEBHOOK_SECRET`
edge-function secret. You can inspect delivery results in `net._http_response`.

## Test it
```bash
# local
supabase functions serve waitlist-welcome --env-file ./supabase/.env.local
curl -X POST http://localhost:54321/functions/v1/waitlist-welcome \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: <your-secret>" \
  -d '{"email":"you@example.com"}'
```
Or just submit the waitlist form on the site with a real address and check the inbox.

## Customizing the email
Edit the `welcomeHtml()` function and the `subject` in
`functions/waitlist-welcome/index.ts`. (Want it in Russian? Swap the copy there.)
