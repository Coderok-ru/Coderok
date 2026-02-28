<script setup lang="ts">
const services = [
  {
    image: '/assets/images/portfolio/web_img.svg',
    tag: 'Web & Frontend',
    title: 'Веб-приложения и сайты',
    subtitle: 'От лендинга до SaaS-платформы',
    disc: 'Laravel, Vue 3, Nuxt, Tailwind, HTMX. Проектируем архитектуру, пишем чистый код, деплоим в продакшн.',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 100,
  },
  {
    image: '/assets/images/portfolio/mobile_img.svg',
    tag: 'Mobile Development',
    title: 'Мобильные приложения',
    subtitle: 'iOS, Android и кроссплатформа',
    disc: 'Flutter + Dart. Дизайн, разработка, публикация в App Store, Google Play и RuStore. Push, карты, эквайринг.',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 150,
  },
  {
    image: '/assets/images/portfolio/desctope_completed.svg',
    tag: 'Desktop Apps',
    title: 'Десктопные приложения',
    subtitle: 'Windows и macOS',
    disc: 'Flutter, Electron, Swift, C#. Нативная производительность и интеграция с системными API.',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 200,
  },
  {
    image: '/assets/images/portfolio/desktop_img.svg',
    tag: 'AI & LLM Integration',
    title: 'Интеграция искусственного интеллекта',
    subtitle: 'Умные продукты на базе GPT, Claude, локальных моделей',
    disc: 'Встраиваем LLM в ваши сервисы: чат-боты, автоматизация, RAG, генерация контента и классификация данных.',
    btnLabel: 'ОБСУДИТЬ',
    delay: 250,
  },
  {
    image: '/assets/images/portfolio/bot_img.svg',
    tag: 'Bots & Mini Apps',
    title: 'Telegram-боты и Mini Apps',
    subtitle: 'Для Telegram и ВКонтакте',
    disc: 'От информационных ботов до полноценных e-commerce приложений с оплатой и личным кабинетом.',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 300,
  },
  {
    image: '/assets/images/portfolio/mcp-server.svg',
    tag: 'Backend & API',
    title: 'Серверная разработка и API',
    subtitle: 'REST, Webhook, микросервисы',
    disc: 'Go (Golang), Laravel, Node.js. Проектируем и разрабатываем надёжные API, CRM и административные панели.',
    btnLabel: 'ОБСУДИТЬ',
    delay: 350,
  },
]
</script>

<template>
  <div id="experiences" class="rn-experience-area section-separator rn-section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            class="section-title text-center"
          >
            <span class="subtitle">Полный цикл разработки продуктов</span>
            <h2 class="title">Наши услуги</h2>
          </div>
        </div>
      </div>
      <div class="row mt--10">
        <div class="col-12 mt_experience">
          <div
            v-for="service in services"
            :key="service.title"
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="service.delay"
            data-aos-once="true"
            class="experience-style-two"
          >
            <div class="experience-image">
              <img :src="service.image" :alt="service.tag">
            </div>
            <div class="experience-left">
              <div class="experience-center">
                <span class="date">{{ service.tag }}</span>
                <h4 class="experience-title">{{ service.title }}</h4>
                <h6 class="subtitle">{{ service.subtitle }}</h6>
                <p class="disc">{{ service.disc }}</p>
              </div>
            </div>
            <div class="experience-right">
              <div class="experience-footer">
                <a class="rn-btn" href="https://t.me/coderok_official" target="_blank">
                  <span>{{ service.btnLabel }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
