# Coderok

Commercial website for Coderok, a software development studio. The site is built with Nuxt 4 and Vue 3 and generated as a static site for search-friendly HTML delivery.

## Local development

```bash
npm ci
npm run dev
```

Generate the static site into `.output/public/` with `npm run generate`. Page content is maintained in `app/data/`; Nuxt prerenders pages, sitemap, and Yandex Business feed from that content. The site has no runtime backend or contact form. Contact links open email, Telegram, WhatsApp, or phone.

## Deployment configuration

The production host is Timeweb Cloud. Nginx serves `/var/www/coderok/current`. Content deployment is handled by `.github/workflows/deploy.yml` on pushes to `main` or `workflow_dispatch`:

1. Install locked dependencies with `npm ci` and generate the site.
2. Upload the generated files to `/var/www/coderok/releases/<commit-sha>-<run-id>-<attempt>` over SSH as `coderok-deploy` (no sudo). Every run gets its own directory, including retries of the same commit.
3. Run `scripts/deploy-release.sh` to switch `current` atomically and retain the previous release for rollback. Keep five complete releases and retain old hashed Nuxt assets for already-open pages.

The workflow uses the `TIMEWEB_SSH_KEY` GitHub secret. SSH host keys are pinned in `deploy/ssh_known_hosts`; the host, deployment user, and paths are fixed in the workflow. Old hashed Nuxt assets remain available through `/var/www/coderok/assets` across releases.

The Nginx site configuration is `deploy/nginx/coderok.conf`. TLS certificates are managed by Certbot using the webroot `/var/www/letsencrypt`. `nginx.service` and `certbot.timer` are enabled at boot; Nginx restarts on failure and the certificate renewal hook reloads it. Nginx/root configuration and certificate setup or renewal are server operations, separate from a content release.

DNS remains hosted at Beget. For the migration, change only the `A` and `AAAA` records for `@` and `www` to `5.42.109.208` and `2a03:6f00:a::4447`. Leave `MX` and `TXT` records unchanged.

## URLs, errors, and search engines

- `https://coderok.ru` is the canonical origin. Canonical page URLs and internal links use a trailing slash; keep one HTTPS URL per page.
- Preserve a real HTTP 301 for every retired URL. Keep the old case mapping in `nuxt.config.ts` and its corresponding Nginx redirect. Static generation may emit a meta-refresh page, which is not a substitute for an HTTP 301.
- Nginx must serve missing paths with HTTP 404 status and the generated `404.html`; do not return the homepage with status 200.
- Keep `/robots.txt`, `/llms.txt`, `/sitemap.xml`, and `/yandex-business.xml` publicly accessible. The sitemap and Yandex Business feed are generated into the static output. Preserve the UTF-8 BOM in `public/llms.txt` and the Yandex verification meta tag in generated page HTML.
- The site emits page metadata and JSON-LD for the organization, person, website, and individual pages. Preserve those generated HTML tags and the existing canonical origin when changing hosting.

The main static output paths include `index.html`, `404.html`, `robots.txt`, `llms.txt`, `sitemap.xml`, `yandex-business.xml`, `assets/`, `_nuxt/`, `img/`, `logo/`, icons, and `site.webmanifest`. Serve `.output/public/` from the domain root so root-relative asset URLs continue to work.
