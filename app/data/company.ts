/**
 * Единый источник фактов о компании.
 * Любая цифра на сайте берётся отсюда, чтобы стаж, количество приложений
 * и интеграций не расходились между страницами.
 */

export const FOUNDED_YEAR = 2015

/**
 * Дата последнего содержательного обновления текстов сайта.
 * Уходит в sitemap как lastmod и в микроразметку как dateModified.
 * Бампать руками при правке контента — не при каждом деплое, иначе поисковик
 * получает сигнал «всё изменилось» каждый раз и перестаёт ему верить.
 */
export const CONTENT_UPDATED_AT = '2026-10-10'

/** Стаж считается от даты старта, а не хардкодится. */
export const yearsInDev = new Date().getFullYear() - FOUNDED_YEAR

export const company = {
  name: 'Coderok',
  legalName: 'ИП Любиченко Андрей Анатольевич',
  ogrnip: '324784700283561',
  inn: '784200644930',
  taxSystem: 'УСН',
  registeredAt: '04.09.2024',
  /** Та же дата в формате ISO — для микроразметки */
  registeredAtIso: '2024-09-04',
  city: 'Санкт-Петербург',
  founder: 'Андрей Любиченко',
  founderRole: 'Основатель и ведущий разработчик',
  photo: '/assets/images/about/andrey.jpg',
  slogan: 'Разрабатываем и чиним то, на чём работает ваш бизнес',
  /** Нижняя граница прайса — Google показывает её в карточке организации */
  priceRange: 'от 30 000 ₽',
} as const

/** Команда на странице «О нас» после основателя. Публикуем только с согласия человека. */
export const team = [
  {
    name: 'Сергей',
    role: 'Тестирование и контент',
    photo: '/assets/images/about/sergey.jpg',
    text: [
      'Сергей проверяет наши продукты глазами обычного пользователя — до того, как их увидит клиент. Проходит сценарии от начала до конца, находит места, где непонятно или неудобно, и приносит советы, как сделать проще.',
      'Ещё он креатор: готовит контент о наших проектах.',
    ],
  },
]

/** Внешние профили — подтверждают, что организация реальна */
export const profiles = [
  'https://t.me/coderok_official',
  'https://github.com/Coderok-ru',
  'https://workspace.ru/cases/magazin-gruzilsya-5-sekund-teper-mgnovenno-pereveli-monolit-na-laravel-v-7-servisov-na-go-i-s/?agency=coderok',
]

export const contacts = {
  email: 'info@coderok.ru',
  phone: '+7 (999) 221-33-83',
  phoneRaw: '+79992213383',
  telegram: 'https://t.me/coderok_official',
  telegramLabel: '@coderok_official',
  whatsapp: 'https://wa.me/79992213383',
} as const

/** Три цифры первого экрана. Каждая проверяется по внешним ссылкам. */
export const keyFacts = [
  { value: `${yearsInDev} лет`, label: 'в разработке' },
  { value: '5 приложений', label: 'в App Store, Google Play и RuStore' },
  { value: '15+ интеграций', label: 'работают в проде' },
]

/** Развёрнутый список под цифру «15+ интеграций» — на случай вопроса «каких?». */
export const integrations = [
  'МойСклад',
  'amoCRM',
  'ЮKassa',
  'Т-Банк',
  'Yandex MapKit',
  'Mapbox',
  'Firebase',
  'OneSignal',
  'Telegram Bot API',
  'MAX Bot API',
  'OpenAI',
  'Claude',
  'OpenRouter',
  'Replicate',
  'Meilisearch',
  'Redis',
  'GitLab CI/CD',
]

/** Приложения, опубликованные в сторах — источник цифры «5 приложений». */
export const publishedApps = [
  { name: "Mop'up", stores: ['App Store', 'Google Play'] },
  { name: 'Cleaner PRO', stores: ['App Store', 'RuStore'] },
  { name: 'Рецепты Ivinsight', stores: ['App Store'] },
  { name: 'FinFlow PRO', stores: ['App Store', 'RuStore'] },
  { name: 'AI Assistent', stores: ['App Store'] },
]
