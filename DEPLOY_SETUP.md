# GitHub Actions Auto-Deploy Setup

## 📋 Настройка автодеплоя на Beget

### Шаг 1: Добавить GitHub Secrets

Перейди в GitHub:
```
https://github.com/Coderok-ru/Coderok/settings/secrets/actions
```

Добавь следующие секреты:

#### 1. `BEGET_SSH_KEY`
**Значение:** Приватный SSH-ключ

```bash
# На локальной машине или сервере OpenClaw
cat /root/.ssh/pulum_coderok_ed25519
```

Скопируй **весь вывод** (включая `-----BEGIN OPENSSH PRIVATE KEY-----` и `-----END OPENSSH PRIVATE KEY-----`)

#### 2. `BEGET_USER`
**Значение:** `pulum_coderokmain@pulum.beget.tech` (полный адрес с хостом)

#### 3. `BEGET_PATH`
**Значение:** `/home/p/pulum/coderok.ru/public_html`

---

### Шаг 2: Проверить публичный ключ на Beget

SSH на Beget должен иметь публичный ключ в `~/.ssh/authorized_keys`:

```bash
ssh -i /root/.ssh/pulum_coderok_ed25519 pulum_coderokmain@pulum.beget.tech \
  "cat ~/.ssh/authorized_keys"
```

Если ключа нет, добавь:

```bash
cat /root/.ssh/pulum_coderok_ed25519.pub | \
  ssh -i /root/.ssh/pulum_coderok_ed25519 pulum_coderokmain@pulum.beget.tech \
  "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

---

### Шаг 3: Закоммитить workflow

```bash
cd /tmp/Coderok
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions auto-deploy"
git push origin main
```

---

### Шаг 4: Проверить первый деплой

1. Зайди в GitHub:
   ```
   https://github.com/Coderok-ru/Coderok/actions
   ```

2. Увидишь запущенный workflow "Deploy to Beget"

3. Если зеленый ✅ — деплой успешен
4. Если красный ❌ — кликни на workflow, посмотри логи

---

## 🔄 Workflow для Nuxt.js (после миграции)

Когда перейдешь на Nuxt.js:

1. Переименуй файл:
   ```bash
   mv .github/workflows/deploy.yml .github/workflows/deploy-laravel.yml.old
   mv .github/workflows/deploy-nuxt.yml.example .github/workflows/deploy.yml
   ```

2. Закоммить:
   ```bash
   git add .github/workflows/
   git commit -m "Switch to Nuxt.js deployment"
   git push
   ```

Теперь каждый push будет:
- Собирать статику (`npm run generate`)
- Загружать `.output/public/` на Beget
- Сайт обновится автоматически

---

## 🔍 Структура деплоя

### Текущая (Laravel):
```
Push → GitHub Actions →
  1. composer install
  2. npm ci
  3. npm run build
  4. rsync на Beget
  5. php artisan cache:clear
```

### Будущая (Nuxt.js):
```
Push → GitHub Actions →
  1. npm ci
  2. npm run generate (→ .output/public/)
  3. rsync статики на Beget
  4. ✅ Готово
```

---

## ⚠️ Важные моменты

### Exclude файлы
Workflow исключает из деплоя:
- `.git/`, `.github/`
- `node_modules/`
- `storage/logs/`, `storage/framework/cache/`
- `.env`

### Безопасность
- `.env` **НЕ** деплоится (создай вручную на сервере)
- SSH-ключ в GitHub Secrets (зашифрован)

### Откат (rollback)
Если что-то сломалось:
1. Найди последний рабочий коммит
2. `git revert <commit>` или `git reset --hard <commit>`
3. `git push --force` (будь осторожен!)

---

## 📊 Проверка после настройки

### Тест автодеплоя:

1. Сделай тестовое изменение:
   ```bash
   echo "<!-- CI/CD test -->" >> resources/views/main.blade.php
   git add .
   git commit -m "Test auto-deploy"
   git push
   ```

2. Проверь GitHub Actions:
   ```
   https://github.com/Coderok-ru/Coderok/actions
   ```

3. Проверь сайт:
   ```bash
   curl https://coderok.ru | grep "CI/CD test"
   ```

   Если видишь строку → деплой работает ✅

---

## 🚀 Готово!

Теперь при каждом `git push` сайт обновляется автоматически.

**Время деплоя:** ~2-3 минуты (Laravel) / ~1 минута (Nuxt.js)
