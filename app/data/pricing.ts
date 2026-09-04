export interface PriceRow {
  id: string
  title: string
  from: string
  term: string
  note?: string
}

export const priceRows: PriceRow[] = [
  { id: 'landing', title: 'Лендинг', from: '100 000 ₽', term: 'от 2 недель' },
  { id: 'corporate', title: 'Корпоративный сайт', from: '250 000 ₽', term: 'от 1 месяца' },
  { id: 'ecommerce', title: 'Интернет-магазин', from: '400 000 ₽', term: 'от 2 месяцев' },
  { id: 'mobile', title: 'Мобильное приложение под ключ', from: '500 000 ₽', term: 'от 2 месяцев' },
  { id: 'crm', title: 'CRM под бизнес-процесс', from: '300 000 ₽', term: 'от 1,5 месяцев' },
  { id: 'bot', title: 'Telegram-бот или Mini App', from: '80 000 ₽', term: 'от 2 недель' },
  { id: 'support', title: 'Поддержка и доработки', from: '30 000 ₽/мес', term: 'по договорённости' },
  { id: 'hourly', title: 'Почасовая работа', from: '4 500 ₽/час', term: '—' },
]

export const priceNote = 'Точная стоимость — после разговора о задаче. Оценка бесплатная и ни к чему не обязывает.'

export const pricesFor = (ids: string[]) => priceRows.filter(row => ids.includes(row.id))
