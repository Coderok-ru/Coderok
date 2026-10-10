import { services } from '../../app/data/services'
import { priceRows, priceNote } from '../../app/data/pricing'
import { company } from '../../app/data/company'

/**
 * YML-фид услуг для карточки в Яндекс Бизнесе (Товары и услуги → YML-фид).
 * Цены берутся из pricing.ts, поэтому карточка не расходится с сайтом.
 */

const SITE_URL = 'https://coderok.ru'

const esc = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** «100 000 ₽», «30 000 ₽/мес» → 100000, 30000 */
const amount = (from: string) => Number(from.replace(/[^\d]/g, ''))

/**
 * Услуга строки цены — её страница становится ссылкой и категорией. Сначала та, где
 * строка стоит первой в priceIds, потом единственная, где она есть. «Почасовая работа»
 * показана на всех услугах и своей не имеет.
 */
const serviceOf = (priceId: string) => {
  const withRow = services.filter(service => service.priceIds.includes(priceId))
  return withRow.find(service => service.priceIds[0] === priceId) ?? (withRow.length === 1 ? withRow[0] : undefined)
}

/** Категория для строк без своей услуги */
const SUPPORT_CATEGORY = services.findIndex(service => service.slug === 'support') + 1

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  const categories = services.map((service, i) =>
    `      <category id="${i + 1}">${esc(service.navTitle)}</category>`).join('\n')

  const offers = priceRows.map((row) => {
    const service = serviceOf(row.id)
    const url = service ? `${SITE_URL}/services/${service.slug}/` : `${SITE_URL}/#pricing`
    const categoryId = service ? services.indexOf(service) + 1 : SUPPORT_CATEGORY
    const picture = `${SITE_URL}/img/og/${service?.slug ?? 'support'}.jpg`
    const unit = row.from.includes('/') ? ` (${row.from.split('/')[1]})` : ''
    const description = [
      service?.solution ?? priceNote,
      row.term !== '—' ? `Срок: ${row.term}.` : '',
      row.note ?? '',
    ].filter(Boolean).join(' ')

    return `      <offer id="${row.id}" available="true">
        <name>${esc(row.title + unit)}</name>
        <url>${url}</url>
        <price from="true">${amount(row.from)}</price>
        <currencyId>RUR</currencyId>
        <categoryId>${categoryId}</categoryId>
        <picture>${picture}</picture>
        <description>${esc(description)}</description>
      </offer>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${new Date().toISOString().slice(0, 16).replace('T', ' ')}">
  <shop>
    <name>${esc(company.name)}</name>
    <company>${esc(company.legalName)}</company>
    <url>${SITE_URL}/</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
${categories}
    </categories>
    <offers>
${offers}
    </offers>
  </shop>
</yml_catalog>`
})
