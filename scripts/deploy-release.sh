#!/usr/bin/env bash
set -euo pipefail

revision=${1:?Usage: deploy-release.sh COMMIT_SHA-RUN_ID-ATTEMPT}
[[ "$revision" =~ ^[0-9a-f]{40}-[0-9]+-[0-9]+$ ]] || { echo 'Invalid release ID' >&2; exit 1; }

site=/var/www/coderok
release="$site/releases/$revision"

for file in index.html 404.html sitemap.xml robots.txt llms.txt yandex-business.xml; do
  test -s "$release/$file" || { echo "Incomplete release: $file" >&2; exit 1; }
done

# Hashed bundles from older releases remain available to already-open pages.
mkdir -p "$site/assets"
rsync -r --ignore-existing --chmod=D755,F644 "$release/_nuxt/" "$site/assets/"

if [[ -L "$site/current" ]]; then
  previous=$(readlink -f "$site/current")
  ln -sfn "$previous" "$site/.previous-$revision"
  mv -Tf "$site/.previous-$revision" "$site/previous"
fi

ln -sfn "$release" "$site/.current-$revision"
mv -Tf "$site/.current-$revision" "$site/current"

# Keep five complete releases for rollback, always protecting active pointers.
while IFS= read -r candidate; do
  [[ "$candidate" == "$(readlink -f "$site/current")" ]] && continue
  [[ -L "$site/previous" && "$candidate" == "$(readlink -f "$site/previous")" ]] && continue
  [[ "${candidate##*/}" =~ ^[0-9a-f]{40}-[0-9]+-[0-9]+$ ]] || continue
  rm -rf -- "$candidate"
done < <(find "$site/releases" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' | sort -nr | tail -n +6 | cut -d ' ' -f2-)

echo "Activated release $revision"
