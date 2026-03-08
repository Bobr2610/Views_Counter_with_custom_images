/**
 * Cloudflare Worker: increments Beavers_counter on each image request.
 * Deploy to Cloudflare Workers (free tier) and use the worker URL in README.
 *
 * Required secret: GITHUB_TOKEN (PAT with repo scope)
 */

const REPO = 'Bobr2610/Beavers_counter';
const IMAGE_URL = `https://raw.githubusercontent.com/${REPO}/main/counter.png`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const repo = url.searchParams.get('repo') || REPO;

    // Fire-and-forget: trigger GitHub repository_dispatch (don't await)
    const token = env.GITHUB_TOKEN;
    if (token) {
      fetch(`https://api.github.com/repos/${repo}/dispatches`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: JSON.stringify({ event_type: 'page_view' }),
      }).catch(() => {});
    }

    // Return the counter image (redirect to avoid CORS/cache issues)
    const imageUrl = repo === REPO ? IMAGE_URL : `https://raw.githubusercontent.com/${repo}/main/counter.png`;
    return Response.redirect(imageUrl + '?t=' + Date.now(), 302);
  },
};
