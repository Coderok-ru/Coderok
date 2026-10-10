#!/usr/bin/env bash
# Яндекс.Вебмастер API для coderok.ru.
#
# Токен берётся из .env (YANDEX_WEBMASTER_TOKEN), в репозиторий не попадает.
# Получить новый: https://oauth.yandex.ru/authorize?response_type=token&client_id=eee32f3d126f4277b18f083b84359009
#
#   bash scripts/webmaster.sh summary            # индексация, SQI, проблемы сайта
#   bash scripts/webmaster.sh problems           # диагностика: только активные проблемы
#   bash scripts/webmaster.sh sitemaps           # карты сайта, которые видит Яндекс
#   bash scripts/webmaster.sh add-sitemap        # отправить https://coderok.ru/sitemap.xml
#   bash scripts/webmaster.sh recrawl URL...     # поставить страницы на переобход
#   bash scripts/webmaster.sh recrawl-queue      # статус заявок на переобход и квота
#   bash scripts/webmaster.sh in-search          # страницы в поиске
#   bash scripts/webmaster.sh excluded           # страницы, выпавшие из поиска, и причины
#   bash scripts/webmaster.sh missing            # страницы из sitemap, которых нет в поиске
#   bash scripts/webmaster.sh queries            # популярные запросы за неделю
#
# Отправить на переобход всё, чего нет в поиске:
#   bash scripts/webmaster.sh recrawl $(bash scripts/webmaster.sh missing)

set -euo pipefail
cd "$(dirname "$0")/.."

[ -f .env ] && { set -a; . ./.env; set +a; }
: "${YANDEX_WEBMASTER_TOKEN:?Нет YANDEX_WEBMASTER_TOKEN в .env}"

SITE=https://coderok.ru
API=https://api.webmaster.yandex.net/v4
AUTH="Authorization: OAuth $YANDEX_WEBMASTER_TOKEN"

get()  { curl -sf -H "$AUTH" "$1"; }
post() { curl -sf -H "$AUTH" -H 'Content-Type: application/json' -d "$2" "$1"; }

USER_ID=$(get "$API/user" | jq -r .user_id)
HOST=$(get "$API/user/$USER_ID/hosts" | jq -r --arg u "$SITE/" '.hosts[] | select(.ascii_host_url == $u) | .host_id')
[ -n "$HOST" ] || { echo "$SITE не найден в Вебмастере" >&2; exit 1; }
H="$API/user/$USER_ID/hosts/$HOST"

case "${1:-summary}" in
  summary)
    get "$H/summary" | jq ;;
  problems)
    get "$H/diagnostics" | jq '.problems | with_entries(select(.value.state == "PRESENT"))' ;;
  sitemaps)
    get "$H/sitemaps" | jq '.sitemaps[] | {sitemap_url, urls_count, errors_count, last_access_date, sources}' ;;
  add-sitemap)
    post "$H/user-added-sitemaps" "$(jq -n --arg u "$SITE/sitemap.xml" '{url: $u}')" | jq ;;
  recrawl)
    shift
    [ $# -gt 0 ] || { echo "Укажите URL" >&2; exit 1; }
    for url in "$@"; do
      printf '%s → ' "$url"
      post "$H/recrawl/queue" "$(jq -n --arg u "$url" '{url: $u}')" | jq -c . || echo "ошибка"
    done
    get "$H/recrawl/quota" | jq -c ;;
  recrawl-queue)
    get "$H/recrawl/queue" | jq '.tasks[] | {url, state, added_time}'
    get "$H/recrawl/quota" | jq -c ;;
  in-search)
    get "$H/search-urls/in-search/samples?limit=100" | jq -r '.samples[] | "\(.last_access)  \(.url)  \(.title)"' ;;
  excluded)
    get "$H/search-urls/events/samples?limit=100" | jq -r '.samples[] | select(.event == "REMOVED_FROM_SEARCH") | "\(.event_date[:10])  \(.excluded_url_status)  \(.url)"' ;;
  missing)
    # Страницы из sitemap.xml, которых нет в поиске, — кандидаты на переобход
    comm -23 <(curl -sf "$SITE/sitemap.xml" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sort) \
             <(get "$H/search-urls/in-search/samples?limit=100" | jq -r '.samples[].url' | sort) ;;
  queries)
    get "$H/search-queries/popular?order_by=TOTAL_SHOWS&query_indicator=TOTAL_SHOWS&query_indicator=TOTAL_CLICKS&query_indicator=AVG_SHOW_POSITION" \
      | jq -r '.queries[] | "\(.indicators.TOTAL_SHOWS // 0) показов  \(.indicators.TOTAL_CLICKS // 0) кликов  поз. \(.indicators.AVG_SHOW_POSITION // "-")  \(.query_text)"' ;;
  *)
    sed -n "2,21p" "$0"; exit 1 ;;
esac
