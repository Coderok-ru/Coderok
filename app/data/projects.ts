export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  image: string
  categories: string
  title: string
  tech: string
  description: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    id: 'ivinsight',
    image: '/assets/images/portfolio/ivinsight.png',
    categories: 'Frontend, REST API, Backend, SEO',
    title: 'Ivinsight - онлайн школа осознанного питания',
    tech: 'Frontend, Backend, REST API, SEO, mySQL, PWA',
    description: [
      'Сайт разработан на Laravel c применением Vue3 composition api.',
      'Были написаны интерактивные квизы и тесты для пользователей, а так же сложные калькуляторы и внедрено получение рецептов блюд из сторонней базы данных.',
    ],
    links: [{ label: 'ОТКРЫТЬ', url: 'https://ivinsight.ru' }],
  },
  {
    id: 'mopup',
    image: '/assets/images/portfolio/mopup.png',
    categories: 'Frontend, API',
    title: "Mop'up - сервис по заказу клининга на дом",
    tech: 'Frontend, REST API, SEO, mySQL, PWA, Acquiring, Maps',
    description: [
      'Сайт разработан на Laravel c применением Vue3 composition api.',
      'Сайт написан по предоставленному макету Figma. Основной задачей являлось разработка формы заказа услуги с интерактивным подсчетом итоговой суммы зависящей от выбранного пользователем города.',
    ],
    links: [{ label: 'ОТКРЫТЬ', url: 'https://mopup.ru' }],
  },
  {
    id: 'sleep',
    image: '/assets/images/portfolio/sleep.png',
    categories: 'Frontend',
    title: 'SlipStream - крытый картинг в СПб',
    tech: 'Frontend, SEO, Maps',
    description: [
      'Сайт полностью разработан на Laravel',
      'Статичный сайт c интегрированной и стилизованной под общий дизайн картой Mapbox',
    ],
    links: [{ label: 'ОТКРЫТЬ', url: 'https://slipstream-karting.ru/' }],
  },
  {
    id: 'mopAdmin',
    image: '/assets/images/portfolio/mopup_admin.png',
    categories: 'Frontend, Backend, REST API, mySQL',
    title: 'Система управления контентом и заказами для приложений и сайта',
    tech: 'Frontend, Backend, REST API, mySQL, Acquiring, YandexMaps, Push',
    description: [
      'Админ панель на Laravel',
      'Админ панель для управления контентом на сайте, управления исполнителями и клиентами, push-уведомлениями и полная интеграция с мобильными приложениями (для исполнителей и клиентов) для управления заказами. Автоматические задачи/задачи по расписанию. Так же встроен интернет эквайринг для формирования ссылки на оплату и контроля статуса платежа. Данная админка находится в продакшене у клиента и носит конфиденциальный характер.',
    ],
  },
  {
    id: 'mopBot',
    image: '/assets/images/portfolio/bot_mopup.png',
    categories: 'Backend, REST API, TelegramAPI',
    title: "Telegram бот для заказа клининговых услуг на дом.",
    tech: 'Backend, REST API, TelegramAPI, Webhook,',
    description: [
      'Telegram бот с встроенным mini app',
      'Встроенное приложение позволяет прямо в боте воспользоваться формой заказа клининговых услуг на дом.',
    ],
    links: [{ label: 'ОТКРЫТЬ', url: 'https://t.me/Mopup_Cleaning_Bot' }],
  },
  {
    id: 'mopPro',
    image: '/assets/images/portfolio/mop_cleaner.png',
    categories: 'Android app',
    title: "Приложение для исполнителей сервиса Mop'up",
    tech: 'Flutter, Dart, API, FireBase, OneSignal, MapBox',
    description: [
      "Мобильное приложение для исполнителей сервиса Mop'up",
      'Приложение позволяет просматривать заказы на карте по адресу, принимать и отклонять их, контролировать статус заказа, а так же в приложение встроен чат в реальном времени с поддержкой куратора.',
    ],
    links: [{ label: 'GooglePlay', url: 'https://play.google.com/store/apps/details?id=com.coderok.cleanerpro' }],
  },
  {
    id: 'mopCli',
    image: '/assets/images/portfolio/mop_clients.png',
    categories: 'Android & iOS app',
    title: "Приложение для клиентов сервиса Mop'up",
    tech: 'Flutter, Dart, API, FireBase, OneSignal, MapBox',
    description: [
      "Мобильное приложение для клиентов сервиса Mop'up",
      'Приложение для заказа клининговых услуг с возможностью просмотра текущего статуса заказа, пуш уведомлениями.',
    ],
    links: [
      { label: 'GooglePlay', url: 'https://play.google.com/store/apps/details?id=com.coderok.mopup.mopup_client' },
    ],
  },
  {
    id: 'recipes',
    image: '/assets/images/portfolio/recipes.png',
    categories: 'Android & iOS app',
    title: 'Приложение с рецептами для Ivinsight',
    tech: 'Flutter, Dart, API, FireBase',
    description: [
      'Мобильное приложение с рецептами для онлайн школы Ivinsight',
      'Приложение позволяет просматривать рецепты, фильтровать по категориям и сохранять в избранное.',
    ],
  },
  {
    id: 'recipesAdmin',
    image: '/assets/images/portfolio/recipes_admin.png',
    categories: 'Frontend, Backend, REST API, mySQL',
    title: 'CMS для приложений и телеграм бота с рецептами Ivinsight',
    tech: 'Frontend, Backend, REST API, mySQL',
    description: [
      'CMS система для управления рецептами',
      'Система управления контентом для мобильных приложений и телеграм бота с рецептами блюд.',
    ],
  },
]

export const projectRows = [
  projects.slice(0, 3),
  projects.slice(3, 6),
  projects.slice(6, 9),
]
