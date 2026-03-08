[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

View counter badge for GitHub. Use in any repo.

## Embed badge

In your README (replace `Bobr2610` and `Beavers_counter` with your counter repo):

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)
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
