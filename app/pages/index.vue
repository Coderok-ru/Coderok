<script setup lang="ts">
import { faq } from '../data/content'
import { priceRows } from '../data/pricing'

const { active, observe } = useActiveSection()
provide('activeSection', { active })

let cleanupObserver: (() => void) | undefined

onMounted(() => {
  cleanupObserver = observe() ?? undefined
})

onUnmounted(() => cleanupObserver?.())

usePageSeo({
  title: 'Разработка сайтов, мобильных приложений и CRM — Coderok',
  description: 'Разрабатываем и чиним то, на чём работает бизнес: сайты, мобильные приложения и CRM. Забираем проекты в любом состоянии — с нуля, из чужого кода или из тупика. Цены и сроки на сайте.',
  path: '/',
  jsonLd: [
    {
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@type': 'OfferCatalog',
      name: 'Стоимость разработки',
      itemListElement: priceRows.map(row => ({
        '@type': 'Offer',
        name: row.title,
        priceCurrency: 'RUB',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: row.from.replace(/[^\d]/g, '') || undefined,
          priceCurrency: 'RUB',
        },
      })),
    },
  ],
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionPains />
    <SectionServices />
    <SectionProcess />
    <SectionCases />
    <SectionPricing />
    <SectionWhyUs />
    <SectionAbout />
    <SectionFaq />
    <SectionContact />
  </div>
</template>
