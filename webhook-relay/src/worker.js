// Cloudflare Worker: relays Opinly "content.routes-changed" webhooks to a
// DigitalOcean App Platform deployment, so the blog rebuilds within seconds of
// a post publishing (instead of waiting for the daily scheduled rebuild).
//
// Opinly delivers webhooks via Svix. This Worker verifies the Svix signature
// (so only Opinly can trigger a build), then POSTs to the DO deploy API.
//
// Env (set via `wrangler secret put` / wrangler.toml [vars]):
//   DO_TOKEN     (secret) DigitalOcean API token with Apps write access
//   SVIX_SECRET  (secret) Opinly webhook signing secret ("whsec_..."). Optional
//                but strongly recommended; if unset, requests aren't verified.
//   DO_APP_ID    (var)    The App Platform app id.

export default {
  async fetch(request, env) {
    // Health check / accidental GETs.
    if (request.method !== "POST") {
      return new Response("Opspot blog rebuild relay. POST only.", { status: 200 });
    }

    const payload = await request.text();

    // Verify the Svix signature when a secret is configured.
    if (env.SVIX_SECRET) {
      const valid = await verifySvix(request.headers, payload, env.SVIX_SECRET);
      if (!valid) {
        return new Response("invalid signature", { status: 401 });
      }
    }

    if (!env.DO_TOKEN || !env.DO_APP_ID) {
      return new Response("relay not configured (missing DO_TOKEN/DO_APP_ID)", {
        status: 500,
      });
    }

    // Trigger a fresh DigitalOcean deployment (force_build re-runs the Astro
    // build, which re-fetches the latest Opinly posts).
    const res = await fetch(
      `https://api.digitalocean.com/v2/apps/${env.DO_APP_ID}/deployments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.DO_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ force_build: true }),
      }
    );

    // 2xx from DO -> accepted. Return 202 so Svix marks the delivery successful.
    return new Response(`DigitalOcean responded: ${res.status}`, {
      status: res.ok ? 202 : 502,
    });
  },
};

// --- Svix signature verification (HMAC-SHA256, no dependencies) ---------------
// Signed content is `${svix-id}.${svix-timestamp}.${payload}`; the secret is a
// base64 key prefixed with "whsec_". The svix-signature header is a space-
// separated list of `v1,<base64sig>` tokens (support key rotation).
async function verifySvix(headers, payload, secret) {
  const id = headers.get("svix-id");
  const timestamp = headers.get("svix-timestamp");
  const signatureHeader = headers.get("svix-signature");
  if (!id || !timestamp || !signatureHeader) return false;

  // Reject deliveries older than 5 minutes (replay protection).
  const now = Math.floor(Date.now() / 1000);
  const ts = Number(timestamp);
  if (!Number.isFinite(ts) || Math.abs(now - ts) > 300) return false;

  const keyBytes = base64ToBytes(secret.replace(/^whsec_/, ""));
  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signed = new TextEncoder().encode(`${id}.${timestamp}.${payload}`);
  const mac = await crypto.subtle.sign("HMAC", key, signed);
  const expected = bytesToBase64(new Uint8Array(mac));

  return signatureHeader
    .split(" ")
    .map((token) => token.split(",")[1])
    .some((sig) => sig && timingSafeEqual(sig, expected));
}

function base64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function bytesToBase64(bytes) {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
