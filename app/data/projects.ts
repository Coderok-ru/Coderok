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
    categories: 'Web, Backend, SEO',
    title: 'Ivinsight — онлайн-школа осознанного питания',
    tech: 'Laravel · Vue 3 · REST API · MySQL · PWA · SEO',
    description: [
      'Полнофункциональная образовательная платформа с личным кабинетом, закрытым доступом к урокам, калькуляторами здоровья и тестами.',
      'Интегрирована сторонняя база рецептов блюд, разработаны интерактивные квизы и инструменты расчёта нутриентов. Настроено SEO-продвижение.',
    ],
    links: [{ label: 'ОТКРЫТЬ САЙТ', url: 'https://ivinsight.ru' }],
  },
  {
    id: 'mopup',
    image: '/assets/images/portfolio/mopup.png',
    categories: 'Web, Frontend, API',
    title: "Mop'up — сервис заказа клининга на дом",
    tech: 'Laravel · Vue 3 · REST API · MySQL · PWA · Эквайринг · Карты',
    description: [
      'Корпоративный сайт клинингового сервиса с интерактивным калькулятором стоимости, зависящим от выбранного города и набора услуг.',
      'Разработан по макету Figma. Интегрированы карты, форма мгновенного расчёта заказа и API-интеграция с backend-системой.',
    ],
    links: [{ label: 'ОТКРЫТЬ САЙТ', url: 'https://mopup.ru' }],
  },
  {
    id: 'sleep',
    image: '/assets/images/portfolio/sleep.png',
    categories: 'Web, Frontend',
    title: 'Slipstream Karting — крытый картинг в СПб',
    tech: 'Laravel · Mapbox · SEO',
    description: [
      'Корпоративный сайт картинг-клуба с бронированием заездов, прайс-листом, галереей и разделом школы картинга.',
      'Встроена интерактивная карта Mapbox, стилизованная под общий дизайн. Оптимизирован под локальный SEO-трафик.',
    ],
    links: [{ label: 'ОТКРЫТЬ САЙТ', url: 'https://slipstream-karting.ru/' }],
  },
  {
    id: 'mopAdmin',
    image: '/assets/images/portfolio/mopup_admin.png',
    categories: 'Backend, CRM, API',
    title: 'CRM-платформа управления клининговым сервисом',
    tech: 'Laravel · Vue 3 · REST API · MySQL · Push · Эквайринг · Карты',
    description: [
      'Закрытая CRM-система для управления всем экосистемой Mop\'up: заказы, исполнители, клиенты, push-уведомления и эквайринг.',
      'Полная интеграция с мобильными приложениями (iOS/Android), автоматические задачи по расписанию, генерация платёжных ссылок и контроль статусов транзакций. Активно используется в продакшене.',
    ],
  },
  {
    id: 'mopBot',
    image: '/assets/images/portfolio/bot_mopup.png',
    categories: 'Telegram Bot, Mini App',
    title: "Telegram-бот и Mini App для заказа клининга",
    tech: 'Python · Telegram Bot API · Webhook · REST API',
    description: [
      'Telegram-бот с встроенным Mini App для оформления заказа клининговых услуг прямо внутри мессенджера.',
      'Интерактивная форма заказа, расчёт стоимости, выбор даты и времени — без перехода на сторонний сайт.',
    ],
    links: [{ label: 'ОТКРЫТЬ БОТА', url: 'https://t.me/Mopup_Cleaning_Bot' }],
  },
  {
    id: 'mopPro',
    image: '/assets/images/portfolio/mop_cleaner.png',
    categories: 'iOS & Android App',
    title: "Cleaner PRO — приложение для исполнителей",
    tech: 'Flutter · Dart · REST API · Firebase · OneSignal · Mapbox',
    description: [
      'Мобильное приложение для клинеров сервиса Mop\'up: просмотр заказов на карте, принятие/отклонение, управление статусами.',
      'Встроен real-time чат с поддержкой куратора. Опубликовано в App Store и RuStore.',
    ],
    links: [
      { label: 'APP STORE', url: 'https://apps.apple.com/ru/app/cleaner-pro/id6737475988' },
      { label: 'RUSTORE', url: 'https://www.rustore.ru/catalog/app/com.coderok.cleanerpro' },
    ],
  },
  {
    id: 'mopCli',
    image: '/assets/images/portfolio/mop_clients.png',
    categories: 'iOS & Android App',
    title: "Mop'up — клиентское приложение",
    tech: 'Flutter · Dart · REST API · Firebase · OneSignal · Эквайринг',
    description: [
      'Мобильное приложение для заказа клининговых услуг: выбор услуги, расчёт стоимости, выбор удобного времени и оплата.',
      'Отслеживание статуса заказа в реальном времени, push-уведомления на всех этапах. Опубликовано в App Store и Google Play.',
    ],
    links: [
      { label: 'APP STORE', url: 'https://apps.apple.com/ru/app/mopup/id6756664260' },
      { label: 'GOOGLE PLAY', url: 'https://play.google.com/store/apps/details?id=com.coderok.mopup.mopup_client' },
    ],
  },
  {
    id: 'recipes',
    image: '/assets/images/portfolio/recipes.png',
    categories: 'iOS & Android App',
    title: 'Приложение с рецептами для Ivinsight',
    tech: 'Flutter · Dart · REST API · Firebase',
    description: [
      'Мобильное приложение с коллекцией рецептов для учеников онлайн-школы Ivinsight.',
      'Фильтрация по категориям, избранное, подробные карточки блюд с КБЖУ. Авторизованный доступ через личный кабинет школы.',
    ],
  },
  {
    id: 'recipesAdmin',
    image: '/assets/images/portfolio/recipes_admin.png',
    categories: 'Backend, CMS, API',
    title: 'CMS для управления рецептами Ivinsight',
    tech: 'Laravel · Vue 3 · REST API · MySQL',
    description: [
      'Административная панель для управления контентом мобильных приложений и Telegram-бота с рецептами.',
      'CRUD для рецептов, управление категориями, медиафайлами и пользовательским доступом. Синхронизация с мобильными клиентами через REST API.',
    ],
  },
  {
    id: 'artfabric',
    image: '/assets/images/portfolio/artfabric.jpg',
    categories: 'Web, E-Commerce',
    title: 'Artfabric — интернет-магазин дизайнерской мебели',
    tech: 'Laravel · Vue 3 · REST API · MySQL · SEO',
    description: [
      'Интернет-магазин дизайнерских предметов интерьера: мебель, светильники и декор.',
      'Каталог с категориями и фильтрами, карточки товаров, корзина и форма заказа. Оптимизирован для поисковых систем.',
    ],
    links: [{ label: 'ОТКРЫТЬ САЙТ', url: 'https://artfabric.ru' }],
  },
  {
    id: 'artfabricCms',
    image: '/assets/images/portfolio/artfabric_cms.jpg',
    categories: 'Backend, CMS, API',
    title: 'CMS для управления каталогом Artfabric',
    tech: 'Laravel · Vue 3 · REST API · MySQL',
    description: [
      'Административная панель для управления интернет-магазином Artfabric.',
      'CRUD каталога, управление заказами, медиафайлами и категориями. Интуитивный интерфейс для контент-менеджеров.',
    ],
    links: [{ label: 'ОТКРЫТЬ CMS', url: 'https://cms.artfabric.ru' }],
  },
  {
    id: 'finflow',
    image: '/assets/images/portfolio/finflow.jpg',
    categories: 'iOS & Android App',
    title: 'FinFlow PRO — управление личными финансами',
    tech: 'Flutter · Dart · GetX · Hive · SQLite',
    description: [
      'Мобильное приложение для управления личными финансами: учёт доходов и расходов, бюджетирование и аналитика.',
      'Визуализация статистики, календарное планирование, офлайн-режим. Опубликовано в App Store.',
    ],
    links: [
      { label: 'APP STORE', url: 'https://apps.apple.com/us/app/finflow-pro/id6752355013' },
      { label: 'RUSTORE', url: 'https://www.rustore.ru/catalog/app/com.coderok.fin_flow_pro' },
    ],
  },
  {
    id: 'aiAssistent',
    image: '/assets/images/portfolio/ai_assistent.jpg',
    categories: 'iOS & Android App, AI',
    title: 'AI Assistent — карманный AI-помощник',
    tech: 'Flutter · Dart · OpenAI API · Claude API',
    description: [
      'Мобильное приложение — персональный AI-ассистент в кармане.',
      'Интеграция с ведущими языковыми моделями, поддержка голоса и текста. Опубликовано в App Store.',
    ],
    links: [
      { label: 'APP STORE', url: 'https://apps.apple.com/us/app/ai-assistent/id6748020233' },
      { label: 'GITHUB', url: 'https://github.com/Coderok-ru/ai_assistent' },
    ],
  },
  {
    id: 'cryptor',
    image: '/assets/images/portfolio/cryptor.jpg',
    categories: 'Desktop App',
    title: 'Cryptor — шифрование файлов AES',
    tech: 'Flutter · Dart · AES-256 · macOS · Windows',
    description: [
      'Кроссплатформенное десктопное приложение для шифрования CSV-файлов и текста по протоколу AES.',
      'Безопасная передача зашифрованных данных через открытые каналы связи. Работает на macOS и Windows.',
    ],
    links: [{ label: 'GITHUB', url: 'https://github.com/Coderok-ru/cryptor' }],
  },
  {
    id: 'golangTemplate',
    image: '/assets/images/portfolio/golang_template.jpg',
    categories: 'Open Source, Backend',
    title: 'Golang Web Template — шаблон Go-приложения',
    tech: 'Go · Chi Router · Templ · HTMX · Tailwind · DaisyUI · Swagger',
    description: [
      'Универсальный open source шаблон для быстрого старта Go веб-приложений с готовой архитектурой.',
      'Clean Architecture, Chi Router, Templ, HTMX, Tailwind CSS v4, DaisyUI v5, Swagger, hot reload и ENV-конфигурация.',
    ],
    links: [{ label: 'GITHUB', url: 'https://github.com/Coderok-ru/golang_web_template' }],
  },
]

export const projectRows = [
  projects.slice(0, 3),
  projects.slice(3, 6),
  projects.slice(6, 9),
  projects.slice(9, 12),
  projects.slice(12, 15),
  projects.slice(15),
]
