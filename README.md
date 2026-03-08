[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

A view counter badge for GitHub READMEs using custom beaver digit images.

## Usage

Add to your README (replace `Bobr2610` and `Beavers_counter` with your repo):

```markdown
[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png)](https://github.com/Bobr2610/Beavers_counter)
```

## Incrementing the counter

- **Manual:** Actions → Update Counter → Run workflow
- **Scheduled:** Runs daily at 12:00 UTC
- **From another repo:** Trigger `repository_dispatch` with `event_type: page_view` (requires PAT with `repo` scope)

## Structure

```
├── theme/           # Digit images (0.png–9.png)
├── counter.json     # Count storage
├── counter.png     # Generated badge
└── .github/workflows/
    └── counter.yml  # Update workflow
```
