<script setup lang="ts">
import { caseBySlug, cases } from '../../data/cases'
import { services } from '../../data/services'

const route = useRoute()
const slug = route.params.slug as string
const study = caseBySlug(slug)

if (!study) {
  throw createError({ statusCode: 404, statusMessage: 'Кейс не найден', fatal: true })
}

/** Услуги, к которым относится кейс — перелинковка вглубь сайта. */
const relatedServices = computed(() =>
  services.filter(service => study!.serviceSlugs.includes(service.slug)),
)

const otherCases = computed(() => cases.filter(c => c.slug !== study!.slug).slice(0, 3))

usePageSeo({
  title: study.meta.title,
  description: study.meta.description,
  path: `/cases/${study.slug}`,
  image: study.cover,
  type: 'article',
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'Кейсы', path: '/cases' },
      { name: study.cardTitle, path: `/cases/${study.slug}` },
    ]),
    {
      '@type': 'CreativeWork',
      name: study.title,
      headline: study.title,
      description: study.meta.description,
      image: `${SITE_URL}${study.cover}`,
      url: absUrl(`/cases/${study.slug}`),
      inLanguage: 'ru-RU',
      keywords: study.stack.join(', '),
      author: { '@id': `${SITE_URL}/#organization` },
      creator: { '@id': `${SITE_URL}/#organization` },
      about: study.client,
    },
  ],
})
</script>

<template>
  <div v-if="study">
    <div class="ck-page-head">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <nav class="ck-breadcrumb">
              <NuxtLink to="/">Главная</NuxtLink>
              <span>/</span>
              <NuxtLink to="/cases">Кейсы</NuxtLink>
              <span>/</span>
              <span>{{ study.client }}</span>
            </nav>
            <span class="ck-case-card__cat">{{ study.category }}</span>
            <h1 class="ck-page-title mt--10">{{ study.title }}</h1>
            <p class="ck-lead text-start">{{ study.lead }}</p>
            <p v-if="study.since" class="ck-meta-line">
              Работаем с проектом {{ durationSince(study.since) }} — {{ sinceLabel(study.since) }}.
            </p>
          </div>
        </div>

        <div class="row mt--40">
          <div class="col-lg-12">
            <div class="ck-cover">
              <img :src="study.cover" :alt="study.title">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <article class="ck-article">
              <h2>Клиент</h2>
              <p>{{ study.clientAbout }}</p>

              <h2>Задача</h2>
              <p v-for="(paragraph, i) in study.task" :key="`task-${i}`">{{ paragraph }}</p>

              <h2>Что мы сделали</h2>
              <template v-for="section in study.solution" :key="section.title">
                <h3>{{ section.title }}</h3>
                <p v-for="(paragraph, i) in section.paragraphs" :key="i">{{ paragraph }}</p>
                <ul v-if="section.list" class="ck-list">
                  <li v-for="entry in section.list" :key="entry">{{ entry }}</li>
                </ul>
              </template>

              <h2>Результат</h2>
              <ul class="ck-list ck-list--check">
                <li v-for="result in study.results" :key="result">{{ result }}</li>
              </ul>

              <template v-if="study.gallery?.length">
                <h2>Как это выглядит</h2>
                <div v-for="image in study.gallery" :key="image" class="ck-cover mb--30">
                  <img :src="image" :alt="study.title" loading="lazy">
                </div>
              </template>
            </article>
          </div>

          <div class="col-lg-4 mt_md--40 mt_sm--40">
            <div class="ck-card">
              <h3 class="ck-card__title">Стек</h3>
              <div class="ck-stack">
                <span v-for="tech in study.stack" :key="tech">{{ tech }}</span>
              </div>

              <template v-if="study.links.length">
                <h3 class="ck-card__title mt--30">Ссылки</h3>
                <ul class="ck-list">
                  <li v-for="link in study.links" :key="link.url">
                    <a :href="link.url" target="_blank" rel="noopener">{{ link.label }} →</a>
                  </li>
                </ul>
              </template>

              <template v-if="relatedServices.length">
                <h3 class="ck-card__title mt--30">Услуги по теме</h3>
                <ul class="ck-list">
                  <li v-for="service in relatedServices" :key="service.slug">
                    <NuxtLink :to="`/services/${service.slug}`">{{ service.navTitle }}</NuxtLink>
                  </li>
                </ul>
              </template>
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
              title="Нужно похожее?"
              text="Расскажите о задаче — разберём её бесплатно и назовём срок и вилку стоимости."
              subject="Заявка с сайта coderok.ru"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Смотрите также</span>
              <h2 class="title">Другие кейсы</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div v-for="other in otherCases" :key="other.slug" class="col-lg-4 col-md-6 col-12 mt--30">
            <CaseCard :item="other" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
