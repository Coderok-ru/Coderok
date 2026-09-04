#!/usr/bin/env bash
# Готовит WebP-производные для растровых картинок сайта.
#
# Для каждой картинки создаёт версии шириной 480/960/1600 (без апскейла) и
# записывает манифест с размерами в app/data/image-manifest.json — из него
# компонент ResponsiveImage берёт srcset и пропорции, чтобы не было сдвига
# вёрстки при загрузке.
#
# Запускать после добавления новой картинки: bash scripts/optimize-images.sh

set -euo pipefail

cd "$(dirname "$0")/.."

WIDTHS=(480 960 1600)
QUALITY=80
MANIFEST="app/data/image-manifest.json"

command -v cwebp >/dev/null || { echo "Нужен cwebp: brew install webp"; exit 1; }

sources=$(find public/assets/images/portfolio public/assets/images/about \
  -type f \( -name '*.png' -o -name '*.jpg' \) ! -name '*-[0-9]*.webp' | sort)

echo '{' > "$MANIFEST"
first=1

for src in $sources; do
  dir=$(dirname "$src")
  base=$(basename "$src")
  name="${base%.*}"
  key="${src#public}"

  w=$(sips -g pixelWidth "$src" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$src" | awk '/pixelHeight/{print $2}')

  made=()
  for target in "${WIDTHS[@]}"; do
    # Не увеличиваем: версия шире оригинала бесполезна и весит больше
    (( target > w )) && continue
    out="$dir/$name-$target.webp"
    if [ ! -f "$out" ] || [ "$src" -nt "$out" ]; then
      cwebp -quiet -q "$QUALITY" -resize "$target" 0 "$src" -o "$out"
    fi
    made+=("$target")
  done

  # Картинка для соцсетей: 1200x630 JPEG. WebP понимают не все шаринг-боты,
  # поэтому именно JPEG и именно в этих размерах
  if [[ "$dir" == *portfolio* ]]; then
    og="$dir/$name-og.jpg"
    if [ ! -f "$og" ] || [ "$src" -nt "$og" ]; then
      tmp=$(mktemp -t ogimg).jpg
      sips -s format jpeg -s formatOptions 82 --resampleWidth 1200 "$src" --out "$tmp" >/dev/null
      sips -c 630 1200 "$tmp" --out "$og" >/dev/null
      rm -f "$tmp"
    fi
  fi

  # Если оригинал уже, чем минимальная ширина, отдаём его собственный размер
  if [ ${#made[@]} -eq 0 ]; then
    out="$dir/$name-$w.webp"
    [ -f "$out" ] || cwebp -quiet -q "$QUALITY" "$src" -o "$out"
    made+=("$w")
  fi

  widths=$(printf '%s,' "${made[@]}"); widths="[${widths%,}]"
  [ $first -eq 1 ] && first=0 || echo ',' >> "$MANIFEST"
  printf '  "%s": { "width": %s, "height": %s, "widths": %s }' "$key" "$w" "$h" "$widths" >> "$MANIFEST"
done

printf '\n}\n' >> "$MANIFEST"
echo "Готово. Манифест: $MANIFEST"
