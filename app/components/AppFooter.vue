<script setup lang="ts">
import { company, contacts } from '../data/company'
import { services } from '../data/services'

const year = new Date().getFullYear()
const { emailFor } = useContact()
</script>

<template>
  <div class="rn-footer-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <NuxtLink to="/">
            <img class="main-logo" src="/logo/logo-coder.svg" alt="Coderok">
          </NuxtLink>
          <p class="ck-note mt--20">
            Разрабатываем и чиним то, на чём работает ваш бизнес: сайты, мобильные приложения и CRM.
          </p>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt_sm--30">
          <h6 class="footer-title">Услуги</h6>
          <ul class="footer-links">
            <li v-for="service in services" :key="service.slug">
              <NuxtLink :to="`/services/${service.slug}`">{{ service.navTitle }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 col-12 mt_md--30 mt_sm--30">
          <h6 class="footer-title">Разделы</h6>
          <ul class="footer-links">
            <li><NuxtLink to="/cases">Кейсы</NuxtLink></li>
            <li><NuxtLink to="/#pricing">Цены</NuxtLink></li>
            <li><NuxtLink to="/#faq">Вопросы</NuxtLink></li>
            <li><NuxtLink to="/about">О нас</NuxtLink></li>
            <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt_md--30 mt_sm--30">
          <h6 class="footer-title">Связаться</h6>
          <ul class="footer-links">
            <li><a :href="emailFor('Заявка с сайта coderok.ru')">{{ contacts.email }}</a></li>
            <li><a :href="contacts.telegram" target="_blank" rel="noopener">Telegram</a></li>
            <li>
              <a :href="`${contacts.whatsapp}?text=${encodeURIComponent('Здравствуйте! Пишу с сайта coderok.ru')}`" target="_blank" rel="noopener">WhatsApp</a>
            </li>
            <li><a :href="`tel:${contacts.phoneRaw}`">{{ contacts.phone }}</a></li>
          </ul>
        </div>
      </div>

      <div class="row mt--50">
        <div class="col-lg-12">
          <div class="footer-bottom">
            <p class="description">© {{ year }} Coderok</p>
            <p class="legal">
              {{ company.legalName }}&nbsp;&nbsp;·&nbsp;&nbsp;ОГРНИП: {{ company.ogrnip }}&nbsp;&nbsp;·&nbsp;&nbsp;ИНН: {{ company.inn }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-title {
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 18px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 26px;
}

.footer-bottom {
  border-top: 1px solid rgba(196, 207, 222, 0.08);
  padding-top: 26px;
  text-align: center;
}

.footer-bottom .description {
  margin-bottom: 6px;
}

.legal {
  font-size: 12px;
  opacity: 0.45;
  letter-spacing: 0.3px;
  margin: 0;
}

/* В светлой теме шаблон оставляет текст белым — перекрываем */
.white-version .footer-title,
.white-version .footer-links a,
.white-version .footer-bottom .description,
.white-version .legal {
  color: var(--color-body-white);
}

.white-version .footer-links a:hover {
  color: var(--color-primary);
}

.white-version .footer-bottom {
  border-top-color: rgba(60, 62, 65, 0.1);
}
</style>
