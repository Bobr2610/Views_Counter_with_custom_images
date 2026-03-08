/**
 * Cloudflare Worker: view counter with custom beaver images.
 * Increments on each request, returns SVG with embedded digits from theme/.
 */

const REPO = 'Bobr2610/Beavers_counter';
const THEME_BASE = `https://raw.githubusercontent.com/${REPO}/main/theme`;

function toBase64(buf) {
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function fetchImageAsDataUrl(url, cache) {
  const cacheKey = new Request(url);
  const cached = cache && (await cache.match(cacheKey));
  if (cached) {
    const buf = await cached.arrayBuffer();
    const type = cached.headers.get('content-type') || 'image/png';
    return `data:${type};base64,${toBase64(buf)}`;
  }
  const res = await fetch(url);
  if (!res.ok) return null;
  const buf = await res.arrayBuffer();
  const type = res.headers.get('content-type') || 'image/png';
  const dataUrl = `data:${type};base64,${toBase64(buf)}`;
  if (cache) await cache.put(cacheKey, new Response(buf, { headers: { 'content-type': type } }));
  return dataUrl;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const repo = url.searchParams.get('repo') || REPO;
    const themeBase = repo === REPO ? THEME_BASE : `https://raw.githubusercontent.com/${repo}/main/theme`;

    let count = 0;
    if (env.COUNTER) {
      try {
        const val = await env.COUNTER.get('count');
        count = parseInt(val || '0', 10) + 1;
        await env.COUNTER.put('count', String(count));
      } catch (_) {
        count = 1;
      }
    }

    const cache = caches.default;
    const digits = String(count).padStart(7, '0');
    const uniqueDigits = [...new Set(digits)];
    const dataUrls = {};
    for (const d of uniqueDigits) {
      dataUrls[d] = await fetchImageAsDataUrl(`${themeBase}/${d}.png`, cache);
    }

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="560" height="80" viewBox="0 0 560 80">
${[...digits].map((d, i) => {
      const href = dataUrls[d] || '';
      return `  <image href="${href}" x="${i * 80}" y="0" width="80" height="80" preserveAspectRatio="xMidYMid meet"/>`;
    }).join('\n')}
</svg>`;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  },
};
