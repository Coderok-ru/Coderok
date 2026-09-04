<script setup lang="ts">
import { serviceBySlug, services } from '../../data/services'
import { pricesFor, priceNote } from '../../data/pricing'
import { caseBySlug } from '../../data/cases'

const route = useRoute()
const slug = route.params.slug as string
const service = serviceBySlug(slug)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Услуга не найдена', fatal: true })
}

const { emailFor } = useContact()

const prices = computed(() => pricesFor(service!.priceIds))
const relatedCases = computed(() =>
  service!.caseSlugs.map(caseSlug => caseBySlug(caseSlug)).filter(Boolean),
)
const otherServices = computed(() => services.filter(s => s.slug !== service!.slug))

usePageSeo({
  title: service.meta.title,
  description: service.meta.description,
  path: `/services/${service.slug}`,
  image: `/img/og/${service.slug}.jpg`,
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: service.navTitle, path: `/services/${service.slug}` },
    ]),
    {
      '@type': 'Service',
      name: service.title,
      description: service.meta.description,
      serviceType: service.navTitle,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'Россия' },
        { '@type': 'City', name: 'Санкт-Петербург' },
      ],
      url: absUrl(`/services/${service.slug}`),
      mainEntityOfPage: { '@id': `${SITE_URL}/services/${service.slug}/#webpage` },
      offers: pricesFor(service.priceIds).map(row => ({
        '@type': 'Offer',
        name: row.title,
        priceCurrency: 'RUB',
        price: row.from.replace(/[^\d]/g, ''),
        availability: 'https://schema.org/InStock',
        url: absUrl(`/services/${service.slug}`),
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: service.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
})
</script>

<template>
  <div v-if="service">
    <div class="ck-page-head">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <nav class="ck-breadcrumb">
              <NuxtLink to="/">Главная</NuxtLink>
              <span>/</span>
              <NuxtLink to="/#services">Услуги</NuxtLink>
              <span>/</span>
              <span>{{ service.navTitle }}</span>
            </nav>
            <h1 class="ck-page-title">{{ service.title }}</h1>
            <p class="ck-lead text-start">{{ service.solution }}</p>
            <div class="ck-buttons mt--30">
              <a class="rn-btn" :href="emailFor(service.emailSubject)">
                <span>ОБСУДИТЬ ЗАДАЧУ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="section-title text-start">
              <span class="subtitle">Ситуации, с которыми приходят</span>
              <h2 class="title">С чем к нам обращаются</h2>
            </div>
            <ul class="ck-list mt--30">
              <li v-for="situation in service.situations" :key="situation">{{ situation }}</li>
            </ul>
          </div>

          <div class="col-lg-5 mt_md--40 mt_sm--40">
            <div class="ck-card">
              <h3 class="ck-card__title">Что вы получаете на выходе</h3>
              <ul class="ck-list ck-list--check mt--20">
                <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
              </ul>
              <div class="ck-stack mt--20">
                <span v-for="tech in service.stack" :key="tech">{{ tech }}</span>
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
              <span class="subtitle">Понятный порядок работы</span>
              <h2 class="title">Этапы и сроки</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div
            v-for="(stage, index) in service.stages"
            :key="stage.title"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <div class="ck-step">
              <span class="ck-step__num">{{ index + 1 }}</span>
              <h3 class="ck-card__title">{{ stage.title }}</h3>
              <p class="ck-card__text">{{ stage.text }}</p>
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
              <span class="subtitle">Ориентиры, чтобы не гадать</span>
              <h2 class="title">Сколько стоит</h2>
            </div>
          </div>
        </div>
        <div class="row mt--50">
          <div class="col-lg-10 offset-lg-1">
            <PriceTable :rows="prices" />
            <p class="ck-note text-center mt--30">{{ priceNote }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="relatedCases.length" class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Мы это уже делали</span>
              <h2 class="title">Кейсы по теме</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div
            v-for="item in relatedCases"
            :key="item!.slug"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <CaseCard :item="item!" />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Отвечаем заранее</span>
              <h2 class="title">Вопросы по услуге</h2>
            </div>
          </div>
        </div>
        <div class="row mt--50">
          <div class="col-lg-10 offset-lg-1">
            <FaqList :items="service.faq" />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Напишите в удобном канале</span>
              <h2 class="title">Обсудить задачу</h2>
            </div>
          </div>
        </div>
        <div class="row mt--40">
          <div class="col-lg-12">
            <ContactChannels :subject="service.emailSubject" />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Может быть полезно</span>
              <h2 class="title">Другие услуги</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div
            v-for="other in otherServices"
            :key="other.slug"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <NuxtLink class="ck-card d-block" :to="`/services/${other.slug}`">
              <h3 class="ck-card__title">{{ other.navTitle }}</h3>
              <p class="ck-card__text">{{ other.problem }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
