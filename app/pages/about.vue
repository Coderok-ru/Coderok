<script setup lang="ts">
import { company, yearsInDev, integrations, publishedApps } from '../data/company'
import { whyUs, processSteps } from '../data/content'

const { emailFor } = useContact()

/** Сроки сотрудничества считаются от даты старта и не устаревают. */
const engagements: { client: string, since?: string, what: string }[] = [
  { client: "Mop'up (ООО «Залог чистоты»)", since: '2022-04', what: 'сайт, CRM и два мобильных приложения' },
  { client: 'Artfabric', since: '2024-09', what: 'платформа магазина на семи сервисах' },
  { client: 'Ivinsight', what: 'платформа онлайн-школы, приложение с рецептами и бот' },
]

usePageSeo({
  title: 'О нас — студия разработки Coderok, Санкт-Петербург',
  description: `Coderok — команда разработки из Санкт-Петербурга, ${yearsInDev} лет в коммерческой разработке. Работаем как ИП по договору с закрывающими документами. Реквизиты, принципы работы и проекты, которые ведём годами.`,
  path: '/about',
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'О нас', path: '/about' },
    ]),
    {
      '@type': 'AboutPage',
      name: 'О студии Coderok',
      url: `${SITE_URL}/about`,
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
              <span>О нас</span>
            </nav>
            <h1 class="ck-page-title">Кто мы и как с нами работать</h1>
            <p class="ck-lead text-start">
              Coderok — небольшая команда разработки из Санкт-Петербурга. Мы делаем продукты, которые
              потом сами же ведём годами, поэтому пишем код так, чтобы через два года его можно было
              читать и менять.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="ck-cover">
              <img :src="company.photo" :alt="company.founder">
            </div>
          </div>
          <div class="col-lg-7 mt_md--40 mt_sm--40">
            <div class="ps-lg-5">
              <div class="section-title text-start">
                <span class="subtitle">{{ company.founderRole }}</span>
                <h2 class="title">{{ company.founder }}</h2>
              </div>
              <p class="ck-lead text-start mt--20">
                Задачу ведёт тот же человек, который пишет код. Это значит, что требования не
                пересказываются по цепочке, архитектуру не отдают стажёру, а на вопрос «почему
                сделано так» отвечает автор решения.
              </p>
              <p class="ck-lead text-start mt--20">
                В коммерческой разработке с 2015 года — {{ yearsInDev }} лет. За это время собрали
                интернет-магазины, CRM, мобильные приложения, ботов и AI-сервисы, которые работают
                в проде каждый день.
              </p>
              <div class="ck-buttons mt--30">
                <a class="rn-btn" :href="emailFor('Знакомство и обсуждение задачи')">
                  <span>НАПИСАТЬ НАМ</span>
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
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Проверяемые факты, а не обещания</span>
              <h2 class="title">Что за нами стоит</h2>
            </div>
          </div>
        </div>

        <div class="row row--25 mt--30">
          <div class="col-lg-4 col-md-6 col-12 mt--30">
            <div class="ck-card">
              <h3 class="ck-card__title">{{ yearsInDev }} лет в разработке</h3>
              <p class="ck-card__text">
                С 2015 года. Считается от даты начала работы, а не переписывается раз в год вручную.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mt--30">
            <div class="ck-card">
              <h3 class="ck-card__title">{{ publishedApps.length }} приложений в сторах</h3>
              <p class="ck-card__text">
                <span v-for="(app, index) in publishedApps" :key="app.name">
                  {{ app.name }} ({{ app.stores.join(', ') }}){{ index < publishedApps.length - 1 ? '; ' : '.' }}
                </span>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mt--30">
            <div class="ck-card">
              <h3 class="ck-card__title">{{ integrations.length }} интеграций в проде</h3>
              <p class="ck-card__text">{{ integrations.join(' · ') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Мы не исчезаем после сдачи</span>
              <h2 class="title">Проекты, которые ведём</h2>
            </div>
          </div>
        </div>

        <div class="row row--25 mt--30">
          <div
            v-for="item in engagements"
            :key="item.client"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <div class="ck-card">
              <h3 class="ck-card__title">{{ item.client }}</h3>
              <p class="ck-card__text">{{ item.what }}</p>
              <p v-if="item.since" class="ck-meta-line">
                {{ durationSince(item.since) }} — {{ sinceLabel(item.since) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Наши принципы</span>
              <h2 class="title">Как мы подходим к работе</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div v-for="item in whyUs" :key="item.title" class="col-lg-4 col-md-6 col-12 mt--30">
            <div class="ck-card">
              <div class="ck-card__icon"><i :class="`feather-${item.icon}`"></i></div>
              <h3 class="ck-card__title">{{ item.title }}</h3>
              <p class="ck-card__text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">От первого письма до поддержки</span>
              <h2 class="title">Порядок работы</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <div class="ck-step">
              <span class="ck-step__num">{{ index + 1 }}</span>
              <h3 class="ck-card__title">{{ step.title }}</h3>
              <p class="ck-card__text">{{ step.text }}</p>
            </div>
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
              <dt>Дата регистрации</dt>
              <dd>{{ company.registeredAt }}</dd>
              <dt>Система налогообложения</dt>
              <dd>{{ company.taxSystem }}</dd>
              <dt>Регион</dt>
              <dd>{{ company.city }}</dd>
            </dl>
          </div>
          <div class="col-lg-6 mt_md--40 mt_sm--40">
            <div class="ck-card">
              <h3 class="ck-card__title">Договор и документы</h3>
              <ul class="ck-list ck-list--check mt--20">
                <li>Работаем по договору, этапы и оплата фиксируются в нём</li>
                <li>Безналичный расчёт, счёт и акты для бухгалтерии</li>
                <li>Исходный код, репозиторий и доступы принадлежат вам</li>
                <li>При необходимости подписываем NDA до обсуждения задачи</li>
              </ul>
              <div class="ck-buttons mt--30">
                <a class="rn-btn" :href="emailFor('Запрос договора и реквизитов')">
                  <span>ЗАПРОСИТЬ ДОГОВОР</span>
                </a>
                <NuxtLink class="rn-btn" to="/contacts">
                  <span>КОНТАКТЫ</span>
                </NuxtLink>
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
              title="Расскажите о задаче"
              text="Первый разговор занимает 20–30 минут и ничего не стоит. По итогам вы получите срок и вилку стоимости в письменном виде."
              subject="Заявка с сайта coderok.ru"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
