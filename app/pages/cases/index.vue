<script setup lang="ts">
import { cases, showcase } from '../../data/cases'

usePageSeo({
  title: 'Кейсы разработки: сайты, приложения, CRM и AI — Coderok',
  description: 'Наши работы с результатом: миграция интернет-магазина на Go, экосистема клинингового сервиса, автоматизация графика уборок, заявки из Telegram в CRM, платформа онлайн-школы, AI-проверка каталога.',
  path: '/cases',
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'Кейсы', path: '/cases' },
    ]),
    {
      '@type': 'ItemList',
      itemListElement: cases.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.cardTitle,
        url: absUrl(`/cases/${item.slug}`),
      })),
    },
  ],
})
</script>

<template>
  <div>
    <div class="ck-page-head">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <nav class="ck-breadcrumb">
              <NuxtLink to="/">Главная</NuxtLink>
              <span>/</span>
              <span>Кейсы</span>
            </nav>
            <h1 class="ck-page-title">Кейсы</h1>
            <p class="ck-lead text-start">
              Мы показываем не скриншоты, а результат: что было до, что сделали и что изменилось
              после. Каждый кейс — работающая система, которую можно открыть и проверить.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row row--25">
          <div
            v-for="item in cases"
            :key="item.slug"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <CaseCard :item="item" />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Ещё из портфолио</span>
              <h2 class="title">Другие работы</h2>
            </div>
          </div>
        </div>

        <div class="row row--25 mt--30">
          <div
            v-for="item in showcase"
            :key="item.id"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <div class="ck-case-card">
              <div class="ck-case-card__thumb">
                <img :src="item.image" :alt="item.title" loading="lazy">
              </div>
              <div class="ck-case-card__body">
                <span class="ck-case-card__cat">{{ item.category }}</span>
                <h3 class="ck-case-card__title">{{ item.title }}</h3>
                <p class="ck-case-card__desc">{{ item.description }}</p>
                <div class="ck-stack mt--20">
                  <span>{{ item.stack }}</span>
                </div>
                <div v-if="item.links.length" class="ck-case-card__links">
                  <a
                    v-for="link in item.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener"
                  >{{ link.label }} →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1 mt--60">
            <div class="ck-card text-center">
              <div class="ck-card__icon"><i class="feather-lock"></i></div>
              <h3 class="ck-card__title">И работы, о которых мы не можем рассказать</h3>
              <p class="ck-card__text">
                Часть проектов закрыта соглашением о неразглашении. Есть и системы, где мы
                разрабатывали отдельные модули внутри чужой платформы. О таких работах расскажем
                на созвоне в объёме, который допускает договор.
              </p>
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
              title="Похожая задача?"
              text="Расскажите, что у вас происходит сейчас. Разберём ситуацию, назовём срок и вилку стоимости — бесплатно."
              subject="Заявка с сайта coderok.ru"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
