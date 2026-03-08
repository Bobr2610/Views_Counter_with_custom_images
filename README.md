[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FBobr2610%2FBeavers_counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

# Beavers Counter

View counter badge for GitHub. Increments on each page view.

## Embed in your README

**Option A — auto-increment on each view** (uses [hits.seeyoufarm.com](https://hits.seeyoufarm.com)):

```markdown
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2FYOUR_REPO&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)
```

Replace `YOUR_USERNAME` and `YOUR_REPO` in the `url` parameter (URL-encoded, e.g. `%2F` = `/`).

**Option B — beaver images** (requires manual trigger or workflow from another repo):

```markdown
[![Views](https://github.com/Bobr2610/Beavers_counter/raw/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)
```

## Increment from another repo

Needs a [PAT](https://github.com/settings/tokens) with `repo` scope. Add it as `COUNTER_REPO_TOKEN` in the other repo, then add `.github/workflows/count-views.yml`:

```yaml
name: Count Views
on:
  push:
    branches: [main]
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - run: |
          curl -X POST -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer ${{ secrets.COUNTER_REPO_TOKEN }}" \
            -H "X-GitHub-Api-Version: 2022-11-28" \
            https://api.github.com/repos/Bobr2610/Beavers_counter/dispatches \
            -d '{"event_type":"page_view"}'
```

Manual increment: **Actions** → **View Counter** → **Run workflow**.
