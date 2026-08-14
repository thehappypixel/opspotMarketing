// Opinly headless blog — fetch + render helpers used at build time.
//
// Posts live in Opinly and are fetched via @opinly/backend (server/build only,
// authenticated with OPINLY_API_KEY). Bodies are Tiptap JSON, rendered to an
// HTML string with @opinly/shared's renderToHtml. Everything here is resilient:
// if the API key isn't set or a request fails, we return empty rather than
// breaking the build, so /blog just renders an empty state until it's wired up.

import { createOpinlyClient } from "@opinly/backend";
import { renderToHtml, imageUrl, buildBlogPostingJsonLd } from "@opinly/shared";
import { SITE_URL } from "../config";

// Server/build-time secret — do NOT prefix with PUBLIC_ (must stay off the client).
const apiKey = import.meta.env.OPINLY_API_KEY;

// Absolute CDN base URL Opinly serves post images from. Per Opinly's docs, a
// static site points imagesPrefix straight at https://cdn.opinly.ai/<namespace>
// (the namespace is public — it appears in client-side image URLs). Override
// with OPINLY_IMAGES_PREFIX if the CDN host/namespace ever changes.
const imagesPrefix =
  import.meta.env.OPINLY_IMAGES_PREFIX ||
  "https://cdn.opinly.ai/0FU9R7UCLGPG_6U6wvglG";

// Render/config object consumed by renderToHtml, imageUrl, and the JSON-LD builder.
export const opinlyConfig = {
  imagesPrefix,
  siteUrl: SITE_URL,
  blogPrefix: "/blog",
  siteName: "Opspot",
};

let _client;
function client() {
  if (!apiKey) return null;
  if (!_client) _client = createOpinlyClient({ apiKey });
  return _client;
}

export function opinlyConfigured() {
  return Boolean(apiKey);
}

// All published posts, newest first (pages through the cursor).
export async function getAllPosts() {
  const opinly = client();
  if (!opinly) return [];
  try {
    const out = [];
    let cursor;
    for (let i = 0; i < 50; i++) {
      const page = await opinly.posts({ limit: 100, cursor, sort: "newest" });
      out.push(...(page?.data ?? []));
      if (!page?.has_more) break;
      cursor = page.next_cursor ?? undefined;
    }
    return out;
  } catch (err) {
    console.error("[opinly] posts() failed:", err?.message || err);
    return [];
  }
}

export async function getPost(slug) {
  const opinly = client();
  if (!opinly) return null;
  try {
    return await opinly.post(slug);
  } catch (err) {
    console.error(`[opinly] post(${slug}) failed:`, err?.message || err);
    return null;
  }
}

export function renderBody(content) {
  if (!content) return "";
  try {
    return renderToHtml(content, { config: opinlyConfig });
  } catch (err) {
    console.error("[opinly] renderToHtml failed:", err?.message || err);
    return "";
  }
}

// Build a full image URL from a fileKey, or "" if images aren't configured.
export function postImage(fileKey) {
  if (!fileKey || !imagesPrefix) return "";
  try {
    return imageUrl(fileKey, opinlyConfig);
  } catch {
    return "";
  }
}

export function blogPostingJsonLd(post) {
  try {
    return buildBlogPostingJsonLd(post, opinlyConfig);
  } catch (err) {
    console.error("[opinly] buildBlogPostingJsonLd failed:", err?.message || err);
    return null;
  }
}
