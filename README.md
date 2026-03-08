# GitHub View Counter

A small repository that stores a view count and exposes an SVG badge. Use it from **any other repository** by embedding the badge and optionally triggering increments (e.g. on page views or README visits).

## Use in other repositories

### 1. Show the badge in your README

Replace `YOUR_USERNAME` and `Beavers_counter` with your GitHub username and this repo name:

```markdown
[![Views](https://raw.githubusercontent.com/YOUR_USERNAME/Beavers_counter/main/views.svg)](https://github.com/YOUR_USERNAME/Beavers_counter)
```

Or via GitHub Pages (after enabling Pages in this repo):

```markdown
[![Views](https://YOUR_USERNAME.github.io/Beavers_counter/views.svg)](https://github.com/YOUR_USERNAME/Beavers_counter)
```

### 2. (Optional) Increment the counter from another repo

To increment this counter when something runs in **another** repository (e.g. on push, schedule, or workflow_dispatch), add a workflow there that sends a `repository_dispatch` event to this repo.

**Important:** Cross-repo `repository_dispatch` requires a **Personal Access Token (PAT)** with `repo` scope, because the default `GITHUB_TOKEN` cannot trigger workflows in other repositories.

1. Create a PAT: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic), scope `repo`.
2. In the **other** repository, add a secret (e.g. `COUNTER_REPO_TOKEN`) with this PAT.
3. In that repo, create `.github/workflows/count-views.yml`:

```yaml
name: Count Views

on:
  workflow_dispatch:
  push:
    branches: [main]
  # schedule:
  #   - cron: '0 * * * *'   # optional: every hour

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger view counter
        run: |
          curl -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer ${{ secrets.COUNTER_REPO_TOKEN }}" \
            -H "X-GitHub-Api-Version: 2022-11-28" \
            https://api.github.com/repos/YOUR_USERNAME/Beavers_counter/dispatches \
            -d '{"event_type":"page_view"}'
```

Replace `YOUR_USERNAME` and `Beavers_counter` with this counter repo’s owner and name.

### 3. Manual increment

In **this** repo: Actions → “View Counter” → Run workflow (optional: set “Set specific count” to a number, or leave empty to increment by 1).

---

## This repository

- **counter.json** / **counter.txt** – stored count (both kept in sync).
- **views.svg** – badge image (updated by the workflow).
- **index.html** – optional page that displays the counter (e.g. with custom digit images in `theme/`).

### Enable GitHub Pages (optional)

To use the `https://YOUR_USERNAME.github.io/Beavers_counter/...` URLs:

1. Settings → Pages.
2. Source: Deploy from branch.
3. Branch: `main`, folder: `/ (root)`.

### Workflow

- **Trigger:** `repository_dispatch` with `event_type: page_view`, or **workflow_dispatch** (manual run with optional “Set specific count”).
- **Actions:** Reads current count, increments (or sets), writes `counter.json`, `counter.txt`, and `views.svg`, then commits and pushes.

### Files

```
/
├── index.html           # Optional counter page (e.g. with theme/)
├── counter.json        # Count storage (primary)
├── counter.txt         # Count storage (synced)
├── views.svg           # Badge image (auto-generated)
├── theme/              # Optional digit images for index.html
└── .github/workflows/
    └── increment.yml   # View Counter workflow
```
