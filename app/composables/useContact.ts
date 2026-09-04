import { contacts } from '../data/company'

export interface ContactChannel {
  id: string
  label: string
  value: string
  href: string
  icon: string
  external: boolean
}

/**
 * Формы на сайте нет: заявка уходит письмом с уже подставленной темой,
 * чтобы по теме сразу было понятно, о какой услуге речь.
 */
export const mailtoLink = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  // URLSearchParams кодирует пробел как «+», почтовые клиенты ждут %20
  return `mailto:${contacts.email}?${params.toString().replace(/\+/g, '%20')}`
}

const DEFAULT_BODY = [
  'Здравствуйте!',
  '',
  'Задача: ',
  'Сроки: ',
  'Ориентировочный бюджет: ',
  'Как удобнее связаться: ',
].join('\n')

export const useContact = () => {
  const emailFor = (subject: string, body: string = DEFAULT_BODY) => mailtoLink(subject, body)

  /** Четыре равнозначных канала. Порядок одинаковый на всех страницах. */
  const channels = (subject = 'Заявка с сайта coderok.ru'): ContactChannel[] => [
    {
      id: 'email',
      label: 'Почта',
      value: contacts.email,
      href: emailFor(subject),
      icon: 'mail',
      external: false,
    },
    {
      id: 'telegram',
      label: 'Telegram',
      value: contacts.telegramLabel,
      href: contacts.telegram,
      icon: 'send',
      external: true,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: contacts.phone,
      href: `${contacts.whatsapp}?text=${encodeURIComponent(`Здравствуйте! Пишу с сайта coderok.ru. ${subject}`)}`,
      icon: 'message-circle',
      external: true,
    },
    {
      id: 'phone',
      label: 'Телефон',
      value: contacts.phone,
      href: `tel:${contacts.phoneRaw}`,
      icon: 'phone-call',
      external: false,
    },
  ]

  return { contacts, emailFor, channels }
}
