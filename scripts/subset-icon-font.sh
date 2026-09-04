#!/usr/bin/env bash
# Подрезает иконочный шрифт Feather до реально используемых иконок.
#
# Полный Feather.ttf весит 65 КБ ради 264 иконок, а сайт использует два
# десятка. Скрипт собирает имена классов из кода и данных, находит их коды в
# feature.css и собирает WOFF2 только из нужных глифов.
#
# Запускать после добавления новой иконки: bash scripts/subset-icon-font.sh

set -euo pipefail
cd "$(dirname "$0")/.."

python3 - <<'PY'
import re, subprocess, pathlib

CSS = pathlib.Path('public/assets/css/plugins/feature.css')
FONT = pathlib.Path('public/assets/fonts/Feather.ttf')
OUT = pathlib.Path('public/assets/fonts/Feather-subset.woff2')

css = CSS.read_text(encoding='utf-8')
codes = dict(re.findall(r'\.feather-([a-z0-9-]+):before\{content:"\\([0-9a-f]{4})"\}', css))

# Классы, записанные в разметке напрямую, и имена иконок из данных
names = set()
for path in pathlib.Path('app').rglob('*'):
    if path.suffix not in {'.vue', '.ts'}:
        continue
    text = path.read_text(encoding='utf-8')
    names |= set(re.findall(r'feather-([a-z0-9-]+)', text))
    names |= set(re.findall(r"icon:\s*'([a-z0-9-]+)'", text))

used = sorted(n for n in names if n in codes)
missing = sorted(n for n in names if n not in codes and n not in {''})
if missing:
    print('нет в шрифте (проверьте имя):', ', '.join(missing))

unicodes = ','.join('U+' + codes[n] for n in used)
print(f'иконок используется: {len(used)} из {len(codes)}')

subprocess.run([
    'python3', '-m', 'fontTools.subset', str(FONT),
    f'--unicodes={unicodes}',
    '--flavor=woff2',
    f'--output-file={OUT}',
    '--no-hinting', '--desubroutinize',
], check=True)

# @font-face должен указывать на подрезанный шрифт, иначе браузер снова
# скачает полный
face_old = re.search(r"@font-face\{font-family:'Feather';src:[^}]*\}", css)
face_new = (
    "@font-face{font-family:'Feather';"
    "src:url('../../fonts/Feather-subset.woff2') format('woff2');"
    "font-weight:normal;font-style:normal;font-display:swap}"
)
if face_old and face_old.group(0) != face_new:
    CSS.write_text(css.replace(face_old.group(0), face_new), encoding='utf-8')
    print('@font-face переключён на подрезанный шрифт')

print('размер:', OUT.stat().st_size, 'байт  (было', FONT.stat().st_size, ')')
PY
