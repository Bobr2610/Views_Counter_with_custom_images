[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.svg)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

Visitor counter based on GitHub Traffic API (views in last 14 days).

## Setup

1. Add secret **`TRAFFIC_TOKEN`** — [Personal Access Token](https://github.com/settings/tokens) with `repo` scope.
2. Workflow runs hourly and updates `counter.svg`.

## Use in README

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.svg)](https://github.com/Bobr2610/Beavers_counter)
```

---

*For per-repo counters with custom images, deploy the Worker from `worker/` and use `?id=your-repo-name`.*
