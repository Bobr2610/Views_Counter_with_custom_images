[![Views](https://raw.githubusercontent.com/Bobr2610/Views_Counter_with_custom_images/main/counter.png?v=1773315082)](https://github.com/Bobr2610/Views_Counter_with_custom_images)

# Views Counter with custom images

Counts visits over the last 14 days vith API

---

## How to Use

### 1. Copy files to your repository

Clone or download and add to your repository:

| File/folder | Description |
|-------------|-------------|
| `.github/workflows/update-counter.yml` | GitHub Actions workflow |
| `theme/` | Digit images `0.png`–`9.png` (beaver theme) |
| `counter.json` | `{"count": 0}` — fallback when API fails |

### 2. Create a Personal Access Token

1. Go to [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Create a token with **`repo`** permission
3. Copy the token (it is shown only once)

### 3. Add the secret to your repository

1. Repository → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `TRAFFIC_TOKEN`
4. Value: paste the token from step 2

### 4. Add the badge to README

Insert this line into your README (or keep the one that comes with the repo):

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Views_Counter_with_custom_images/main/counter.png?v=1773315082)](https://github.com/Bobr2610/Views_Counter_with_custom_images)
```

**Autonomous:** On the first run, the workflow automatically replaces `OWNER/REPO` and the branch with your repository — no manual editing needed. It also updates `?v=` to a timestamp on each run to avoid cache.

### 5. Running

- **Automatically:** the workflow runs every hour and on push (except for changes to `counter.png`, `theme/`, `README.md`)
- **Manually:** **Actions** → **Update Visitor Counter** → **Run workflow**

---

## Example

[Lec-Sem_SIS-Fund](https://github.com/Bobr2610/Lec-Sem_SIS-Fund) — repository with the counter connected.

---

## Configuration

1. Add the **`TRAFFIC_TOKEN`** secret — [Personal Access Token](https://github.com/settings/tokens) with `repo` permission
2. The workflow is **fully autonomous**: it detects the current repository and branch, updates the badge URL automatically (works when forked), and refreshes `counter.png` every hour and on push

---

*For counters with custom images, use the Worker from `worker/` with the `?id=your-repo-name` parameter.*
