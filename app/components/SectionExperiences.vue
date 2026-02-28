<script setup lang="ts">
const services = [
  {
    image: '/assets/images/portfolio/web_img.svg',
    date: 'Web development',
    title: 'Разработка веб приложений',
    subtitle: 'Сайт любой сложности и направленности',
    disc: 'От лендинга до сложных CRM систем',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 100,
  },
  {
    image: '/assets/images/portfolio/mobile_img.svg',
    date: 'Mobile App development',
    title: 'Разработка мобильных приложений',
    subtitle: 'Под Android, iOS, Windows и MacOS',
    disc: 'От дизайна до выпуска готового приложения',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 200,
  },
  {
    image: '/assets/images/portfolio/desktop_img.svg',
    date: 'Desktop App Development',
    title: 'Разработка десктопных приложений',
    subtitle: 'Под Windows и macOS',
    disc: 'Нативные приложения с использованием Flutter, Electron, Swift, C#',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 200,
  },
  {
    image: '/assets/images/portfolio/llm_img.svg',
    date: 'AI & LLM Integration',
    title: 'Внедрение LLM',
    subtitle: 'Интеграция ИИ в ваши продукты',
    disc: 'Подключаем GPT, Claude, локальные модели к вашему ПО, автоматизируем процессы',
    btnLabel: 'ОБСУДИТЬ',
    delay: 250,
  },
  {
    image: '/assets/images/portfolio/bot_img.svg',
    date: 'Web apps',
    title: 'Разработка чат ботов',
    subtitle: 'И Mini Apps для Telegram и VK',
    disc: 'От простых ботов до приложений Ecommerce',
    btnLabel: 'ЗАКАЗАТЬ',
    delay: 300,
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
            <span class="subtitle">Опыт более 13 лет</span>
            <h2 class="title">Мои услуги</h2>
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
            <div class="experience-left">
              <div class="experience-image">
                <img :src="service.image" :alt="service.date">
              </div>
              <div class="experience-center">
                <span class="date">{{ service.date }}</span>
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
