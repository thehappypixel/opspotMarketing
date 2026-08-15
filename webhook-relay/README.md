# Opinly → DigitalOcean rebuild relay (DigitalOcean Function)

A tiny DigitalOcean **Function** that makes the blog rebuild **within seconds**
of a post publishing in Opinly, instead of waiting for the daily scheduled
rebuild.

**Flow:** Opinly publishes → fires its `content.routes-changed` webhook →
this Function calls the DigitalOcean deploy API → App Platform rebuilds and
re-fetches the latest posts.

Optional — the scheduled GitHub Action (`.github/workflows/rebuild-blog.yml`)
already rebuilds daily; this just makes it instant. Everything stays on
DigitalOcean; no other accounts needed.

The function reads three env vars: `DO_TOKEN` (Apps-write API token),
`DO_APP_ID` (already `e76a0070-...`), and `RELAY_TOKEN` (a random secret you
choose; it also goes in the webhook URL so only Opinly can trigger builds).

---

## Option A — DigitalOcean web console (no CLI)

1. DigitalOcean → **Functions** → **Create Namespace** (pick a region; free).
2. **Create Function** → runtime **Node.js 18** → name it `rebuild`.
3. Paste the contents of `packages/blog/rebuild/index.js` into the code editor and **Save**.
4. Open the function's **Settings → Environment Variables** and add:
   - `DO_TOKEN` = your DigitalOcean API token (Apps write access)
   - `DO_APP_ID` = `e76a0070-b621-42e1-8ef6-8a13b1162012`
   - `RELAY_TOKEN` = a long random string (make one up)
5. Make sure the function is **Web/HTTP enabled**, then copy its **public URL**.

## Option B — CLI (doctl)

```bash
# one-time: install doctl (brew install doctl), then
doctl auth init                 # paste a DO API token
doctl serverless install        # installs serverless support
doctl serverless namespaces create --label opspot --region nyc
doctl serverless connect

cp .env.example .env            # fill in DO_TOKEN and RELAY_TOKEN
doctl serverless deploy .
doctl serverless functions get blog/rebuild --url   # prints the URL
```

---

## Point Opinly at it

In Opinly → **Webhooks**, add an endpoint with the function URL **plus the token
in the query string**:

```
https://<your-function-url>?token=<RELAY_TOKEN>
```

Subscribe it to the **`content.routes-changed`** event.

## Test

Re-publish any post in Opinly, then watch the app's **Activity** tab in
DigitalOcean — a new deployment should start within seconds.
