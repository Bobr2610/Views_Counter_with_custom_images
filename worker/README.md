# Cloudflare Worker — View Counter with Custom Images

Increments on each README view. Uses your images from `theme/` (0.png–9.png).

## Deploy

1. Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/):
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. Create KV namespace:
   ```bash
   cd worker
   wrangler kv namespace create "COUNTER"
   ```

3. Copy the `id` from output and update `wrangler.toml`:
   ```toml
   kv_namespaces = [
     { binding = "COUNTER", id = "YOUR_ID" }
   ]
   ```

4. Deploy:
   ```bash
   wrangler deploy
   ```

5. Use the Worker URL in README:
   ```markdown
   [![Views](https://beavers-counter.YOUR_ACCOUNT.workers.dev/)](https://github.com/Bobr2610/Beavers_counter)
   ```

Free tier: 100,000 requests/day.
