# Opinly → DigitalOcean rebuild relay

A tiny Cloudflare Worker that makes the blog rebuild **within seconds** of a post
publishing in Opinly, instead of waiting for the daily scheduled rebuild.

**Flow:** Opinly publishes a post → fires its `content.routes-changed` webhook
(via Svix) → this Worker verifies the signature → calls the DigitalOcean deploy
API → App Platform rebuilds and re-fetches the latest posts.

This is optional. The scheduled GitHub Action
(`.github/workflows/rebuild-blog.yml`) already rebuilds daily; this just makes it
instant.

## Deploy (one time)

From this folder (`webhook-relay/`):

```bash
# 1. Log in to Cloudflare (opens a browser; free account is fine)
npx wrangler login

# 2. Set the two secrets
npx wrangler secret put DO_TOKEN       # paste your DigitalOcean API token
npx wrangler secret put SVIX_SECRET    # paste Opinly's webhook signing secret (whsec_...)

# 3. Deploy — prints your Worker URL, e.g. https://opspot-blog-rebuild.<you>.workers.dev
npx wrangler deploy
```

`DO_APP_ID` is already set in `wrangler.toml` (it isn't sensitive).

## Point Opinly at it

In Opinly → **Webhooks**:

1. Add a new endpoint with the **Worker URL** from step 3.
2. Subscribe it to the **`content.routes-changed`** event.
3. Copy the endpoint's **signing secret** (`whsec_...`) and set it as `SVIX_SECRET`
   above (re-run `npx wrangler secret put SVIX_SECRET` and `npx wrangler deploy`
   if you added it after first deploy).

## Test

Publish (or re-publish) a post in Opinly, then watch the app's **Activity** tab
in DigitalOcean — a new deployment should start within seconds. Opinly's webhook
log will show a `202` response from the Worker.

## Notes

- If `SVIX_SECRET` is unset, the Worker skips signature verification and will
  rebuild on any POST to its URL. Set the secret so only Opinly can trigger it.
- The token needs DigitalOcean **Apps: write** (create + update) — the same token
  used by the GitHub Actions scheduled rebuild.
