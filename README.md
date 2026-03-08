[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

View counter for GitHub READMEs with **custom beaver images** from `theme/`.

## Option 1: Custom images + view tracking (recommended)

Deploy the Cloudflare Worker from `worker/` — increments on each page view, uses your images. See [worker/README.md](worker/README.md).

After deploy, use your Worker URL:
```markdown
[![Views](https://beavers-counter.YOUR_ACCOUNT.workers.dev/)](https://github.com/Bobr2610/Beavers_counter)
```

## Option 2: Moe-Counter (view tracking, preset themes)

Uses [Moe-Counter](https://github.com/journey-ad/Moe-Counter) — no deploy, but preset themes only:
```markdown
[![Views](https://count.getloli.com/get/@YOUR_ID?theme=moebooru)](https://github.com/Bobr2610/Beavers_counter)
```

## Option 3: Static badge (your images, no view tracking)

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)
```

Increment: **Actions** → **Update Counter** → **Run workflow**, or daily at 12:00 UTC.
