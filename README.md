[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png?v=1772972781)](https://github.com/Bobr2610/Beavers_counter)

# Beaver Counter

Counts visits over the last 14 days via API

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

Insert into your repository's README (replace `OWNER` and `REPO` with yours):

```markdown
[![Views](https://raw.githubusercontent.com/OWNER/REPO/main/counter.png?v=0)](https://github.com/OWNER/REPO)
```

The `?v=0` parameter is the initial value. **Important:** the workflow automatically updates the image link on each run (changes `?v=` to a timestamp) so the browser and CDN don't show a cached image. Do not remove or hardcode `?v=` manually — the link must change.

### 5. Running

- **Automatically:** the workflow runs every hour and on push (except for changes to `counter.png`, `theme/`, `README.md`)
- **Manually:** **Actions** → **Update Visitor Counter** → **Run workflow**

---

## Example

[Lec-Sem_SIS-Fund](https://github.com/Bobr2610/Lec-Sem_SIS-Fund) — repository with the counter connected.

---

## Configuration

1. Add the **`TRAFFIC_TOKEN`** secret — [Personal Access Token](https://github.com/settings/tokens) with `repo` permission
2. The workflow updates `counter.png` and the link in README (the `?v=` parameter) every hour and on push — so the image is always up to date

---

*For counters with custom images, use the Worker from `worker/` with the `?id=your-repo-name` parameter.*
