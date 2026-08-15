// DigitalOcean Function: relays Opinly "content.routes-changed" webhooks to a
// DigitalOcean App Platform deployment, so the blog rebuilds within seconds of
// a post publishing (instead of waiting for the daily scheduled rebuild).
//
// Auth: Opinly's webhook URL carries a shared secret in the query string
// (?token=RELAY_TOKEN); we reject POSTs without the matching token so random
// callers can't spam rebuilds.
//
// Environment variables (set in the DO console / project.yml, not committed):
//   DO_TOKEN     DigitalOcean API token with Apps write access
//   DO_APP_ID    the App Platform app id
//   RELAY_TOKEN  a long random string you choose; also put it in the webhook URL

async function main(args) {
  const method = (args.__ow_method || "get").toLowerCase();
  if (method !== "post") {
    return { statusCode: 200, body: "Opspot blog rebuild relay. POST to trigger." };
  }

  // Shared-secret check (token comes from the ?token= query param).
  const expected = process.env.RELAY_TOKEN;
  if (expected && args.token !== expected) {
    return { statusCode: 401, body: "unauthorized" };
  }

  const token = process.env.DO_TOKEN;
  const appId = process.env.DO_APP_ID;
  if (!token || !appId) {
    return { statusCode: 500, body: "relay not configured (DO_TOKEN/DO_APP_ID missing)" };
  }

  // Trigger a fresh deployment (force_build re-runs the Astro build, which
  // re-fetches the latest Opinly posts).
  const res = await fetch(
    `https://api.digitalocean.com/v2/apps/${appId}/deployments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ force_build: true }),
    }
  );

  return {
    statusCode: res.ok ? 202 : 502,
    body: `DigitalOcean responded: ${res.status}`,
  };
}

exports.main = main;
