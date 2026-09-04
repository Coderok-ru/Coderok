<script setup lang="ts">
import { company, contacts } from '../data/company'
import { services } from '../data/services'

const { emailFor } = useContact()

usePageSeo({
  title: 'Контакты и реквизиты — Coderok, Санкт-Петербург',
  description: 'Связаться с Coderok: почта, Telegram, WhatsApp, телефон. Реквизиты ИП, порядок работы по договору с закрывающими документами для юрлиц.',
  path: '/contacts',
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'Контакты', path: '/contacts' },
    ]),
    {
      '@type': 'ContactPage',
      name: 'Контакты Coderok',
      url: absUrl('/contacts'),
      mainEntity: { '@id': `${SITE_URL}/#organization` },
    },
  ],
})
</script>

<template>
  <div>
    <div class="ck-page-head">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <nav class="ck-breadcrumb">
              <NuxtLink to="/">Главная</NuxtLink>
              <span>/</span>
              <span>Контакты</span>
            </nav>
            <h1 class="ck-page-title">Контакты</h1>
            <p class="ck-lead text-start">
              Напишите в любом удобном канале. Чтобы разговор был предметным, коротко опишите задачу,
              желаемые сроки и ориентировочный бюджет — по письму мы уже сможем сказать, реалистично
              ли это, и предложить варианты.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ContactChannels subject="Заявка с сайта coderok.ru" />
          </div>
        </div>

        <div class="row mt--30">
          <div class="col-lg-12">
            <p class="ck-note">
              Отвечаем в течение рабочего дня. Если задача срочная — напишите об этом в первом
              сообщении, мы поднимем её в очереди.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Письмо с готовой темой</span>
              <h2 class="title">Написать по конкретной услуге</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div
            v-for="service in services"
            :key="service.slug"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <a class="ck-card d-block" :href="emailFor(service.emailSubject)">
              <h3 class="ck-card__title">{{ service.navTitle }}</h3>
              <p class="ck-card__text">Тема письма: «{{ service.emailSubject }}»</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title text-start">
              <span class="subtitle">Всё можно проверить в ЕГРИП</span>
              <h2 class="title">Реквизиты</h2>
            </div>
            <dl class="ck-legal mt--30">
              <dt>Наименование</dt>
              <dd>{{ company.legalName }}</dd>
              <dt>ОГРНИП</dt>
              <dd>{{ company.ogrnip }}</dd>
              <dt>ИНН</dt>
              <dd>{{ company.inn }}</dd>
              <dt>Почта</dt>
              <dd><a :href="emailFor('Заявка с сайта coderok.ru')">{{ contacts.email }}</a></dd>
              <dt>Телефон</dt>
              <dd><a :href="`tel:${contacts.phoneRaw}`">{{ contacts.phone }}</a></dd>
            </dl>
          </div>

          <div class="col-lg-6 mt_md--40 mt_sm--40">
            <div class="ck-card">
              <h3 class="ck-card__title">Как мы работаем с юрлицами</h3>
              <ul class="ck-list ck-list--check mt--20">
                <li>Договор с фиксированными этапами, сроками и стоимостью</li>
                <li>Безналичный расчёт, счёт и акты выполненных работ</li>
                <li>Оплата по этапам: за каждым стоит результат, который можно посмотреть</li>
                <li>Исходный код, репозиторий и доступы передаются вам</li>
                <li>NDA подписываем до обсуждения задачи, если это нужно</li>
              </ul>
              <div class="ck-buttons mt--30">
                <a class="rn-btn" :href="emailFor('Запрос договора и реквизитов')">
                  <span>ЗАПРОСИТЬ ДОГОВОР</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <CtaBand
              title="Не уверены, что задача нам подходит?"
              text="Напишите как есть. Если это не наш профиль — скажем прямо и, если сможем, подскажем, к кому обратиться."
              subject="Вопрос по задаче"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
