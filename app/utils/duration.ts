/**
 * Длительности на сайте нигде не пишутся руками: любая фраза вида
 * «работаем с проектом два года» считается от даты старта.
 */

const plural = (n: number, forms: [string, string, string]) => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return forms[0]
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1]
  return forms[2]
}

const monthsBetween = (from: Date, to: Date) =>
  (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())

/** '2024-09' → «2 года 1 месяц» */
export const durationSince = (start: string, now: Date = new Date()) => {
  const [year, month = '01'] = start.split('-')
  const total = Math.max(0, monthsBetween(new Date(Number(year), Number(month) - 1, 1), now))
  const years = Math.floor(total / 12)
  const months = total % 12

  const parts: string[] = []
  if (years) parts.push(`${years} ${plural(years, ['год', 'года', 'лет'])}`)
  if (months) parts.push(`${months} ${plural(months, ['месяц', 'месяца', 'месяцев'])}`)
  return parts.join(' ') || 'меньше месяца'
}

/** '2024-09' → «сентябрь 2024» (именительный падеж) */
export const monthLabel = (start: string) => {
  const [year, month = '01'] = start.split('-')
  const name = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(
    new Date(Number(year), Number(month) - 1, 1),
  )
  return `${name} ${year}`
}

/**
 * '2024-09' → «с сентября 2024».
 * Родительный падеж месяца берём из формата с числом — Intl отдаёт его только там.
 */
export const sinceLabel = (start: string) => {
  const [year, month = '01'] = start.split('-')
  const genitive = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric' })
    .format(new Date(Number(year), Number(month) - 1, 1))
    .replace(/^\d+\s/, '')
  return `с ${genitive} ${year}`
}

/** '2024-09' → «с сентября 2024 — 2 года 1 месяц» */
export const periodSince = (start: string, now: Date = new Date()) =>
  `${sinceLabel(start)} — ${durationSince(start, now)}`
