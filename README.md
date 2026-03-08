[![Views](https://raw.githubusercontent.com/Bobr2610/Beavers_counter/main/counter.png?v=0)](https://github.com/Bobr2610/Beavers_counter)

# Beavers Counter

Visitor counter based on GitHub Traffic API (views in last 14 days).

---

## Как пользоваться (How to use)

### 1. Скопируйте файлы в свой репозиторий

Склонируйте или скачайте и добавьте в свой репозиторий:

| Файл/папка | Описание |
|------------|----------|
| `.github/workflows/update-counter.yml` | GitHub Actions workflow |
| `theme/` | Изображения цифр `0.png`–`9.png` (бобровая тема) |
| `counter.json` | `{"count": 0}` — fallback при ошибке API |

### 2. Создайте Personal Access Token

1. Откройте [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Создайте токен с правом **`repo`**
3. Скопируйте токен (он показывается один раз)

### 3. Добавьте секрет в репозиторий

1. Репозиторий → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Имя: `TRAFFIC_TOKEN`
4. Значение: вставьте токен из шага 2

### 4. Добавьте бейдж в README

Вставьте в README вашего репозитория (замените `OWNER` и `REPO` на свои):

```markdown
[![Views](https://raw.githubusercontent.com/OWNER/REPO/main/counter.png?v=0)](https://github.com/OWNER/REPO)
```

Параметр `?v=0` — начальное значение. **Важно:** workflow при каждом запуске автоматически обновляет ссылку на изображение (меняет `?v=` на timestamp), чтобы браузер и CDN не показывали закэшированную картинку. Не удаляйте и не фиксируйте `?v=` вручную — ссылка должна меняться.

### 5. Запуск

- **Автоматически:** workflow запускается каждый час и при push (кроме изменений `counter.png`, `theme/`, `README.md`)
- **Вручную:** **Actions** → **Update Visitor Counter** → **Run workflow**

---

## Пример

[Lec-Sem_SIS-Fund](https://github.com/Bobr2610/Lec-Sem_SIS-Fund) — репозиторий с подключённым счётчиком.

---

## Setup (this repo)

1. Добавьте секрет **`TRAFFIC_TOKEN`** — [Personal Access Token](https://github.com/settings/tokens) с правом `repo`
2. Workflow обновляет `counter.png` и ссылку в README (параметр `?v=`) каждый час и при push — так изображение всегда актуальное

---

*Для счётчиков с кастомными изображениями используйте Worker из `worker/` с параметром `?id=your-repo-name`.*
