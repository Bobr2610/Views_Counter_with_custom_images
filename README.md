[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png?v=3)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

Visitor counter based on GitHub Traffic API (views in last 14 days).

## Quick Setup (another repository)

**Goal:** Add a view counter to any GitHub repo that shows traffic for that repo.

**Steps:**

1. **Copy these files into the target repo:**
   - `.github/workflows/update-counter.yml` — GitHub Actions workflow
   - `theme/` — digit images `0.png` through `9.png` (beaver-themed)
   - `counter.json` — `{"count": 0}` (fallback when API returns 0)

2. **Add repository secret:**
   - Repo → Settings → Secrets and variables → Actions
   - New secret: `TRAFFIC_TOKEN`
   - Value: [Personal Access Token](https://github.com/settings/tokens) with `repo` scope

3. **Add badge to README:**
   ```markdown
   [![Views](https://raw.githubusercontent.com/OWNER/REPO/main/counter.png?v=3)](https://github.com/OWNER/REPO)
   ```
   Replace `OWNER/REPO` with the target repo. Use `?v=0` for cache-busting; workflow updates it automatically.

4. **Run:** Workflow runs hourly or on push. Manual run: Actions → Update Visitor Counter → Run workflow.

**Reference:** [Lec-Sem_SIS-Fund](https://github.com/Bobr2610/Lec-Sem_SIS-Fund) — example repo with this counter.

---

## Setup (this repo)

1. Add secret **`TRAFFIC_TOKEN`** — [Personal Access Token](https://github.com/settings/tokens) with `repo` scope.
2. Workflow runs hourly and updates `counter.png?v=3` (beaver-themed digits).

## Use in README

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png?v=3)](https://github.com/Bobr2610/Beavers_counter)
```

---

*For per-repo counters with custom images, deploy the Worker from `worker/` and use `?id=your-repo-name`.*
