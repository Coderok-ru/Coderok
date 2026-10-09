<script setup lang="ts">
import { articleBySlug, readingMinutes, relatedArticles, tocFor, wordCount } from '../../data/articles'
import { services } from '../../data/services'
import { company } from '../../data/company'

const route = useRoute()
const slug = route.params.slug as string
const article = articleBySlug(slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Статья не найдена', fatal: true })
}

const url = absUrl(`/journal/${article.slug}`)
const minutes = readingMinutes(article)
const toc = tocFor(article)
const relatedServices = services.filter(service => article.serviceSlugs.includes(service.slug))
const otherArticles = relatedArticles(article)

usePageSeo({
  title: article.meta.title,
  description: article.meta.description,
  path: `/journal/${article.slug}`,
  image: article.ogImage,
  type: 'article',
  modified: article.updatedAt,
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'Журнал', path: '/journal' },
      { name: article.cardTitle, path: `/journal/${article.slug}` },
    ]),
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.title,
      description: article.meta.description,
      abstract: article.summary.join(' '),
      image: [`${SITE_URL}${article.ogImage}`, `${SITE_URL}${article.cover.replace(/\.png$/, '-1600.webp')}`],
      url,
      inLanguage: 'ru-RU',
      articleSection: article.category,
      keywords: article.keywords.join(', '),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      wordCount: wordCount(article),
      timeRequired: `PT${minutes}M`,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: company.founder,
        url: absUrl('/about'),
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/journal/#blog` },
      mainEntityOfPage: { '@id': `${url}#webpage` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: article.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
})

useHead({
  meta: [
    { property: 'article:published_time', content: article.publishedAt },
    { property: 'article:modified_time', content: article.updatedAt },
    { property: 'article:author', content: company.founder },
    { property: 'article:section', content: article.category },
    ...article.keywords.map(tag => ({ property: 'article:tag', content: tag })),
  ],
})
</script>

<template>
  <div v-if="article">
    <div class="ck-page-head">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <nav class="ck-breadcrumb">
              <NuxtLink to="/">Главная</NuxtLink>
              <span>/</span>
              <NuxtLink to="/journal">Журнал</NuxtLink>
              <span>/</span>
              <span>{{ article.category }}</span>
            </nav>
            <span class="ck-case-card__cat">{{ article.category }}</span>
            <h1 class="ck-page-title mt--10">{{ article.title }}</h1>
            <p class="ck-lead text-start">{{ article.excerpt }}</p>
            <p class="ck-meta-line">
              <NuxtLink to="/about">{{ company.founder }}</NuxtLink>, {{ company.founderRole.toLowerCase() }} Coderok
              · <time :datetime="article.publishedAt">{{ dateLabel(article.publishedAt) }}</time>
              <template v-if="article.updatedAt !== article.publishedAt">
                · обновлено <time :datetime="article.updatedAt">{{ dateLabel(article.updatedAt) }}</time>
              </template>
              · {{ minutes }} {{ plural(minutes, ['минута', 'минуты', 'минут']) }} чтения
            </p>
          </div>
        </div>

        <div class="row mt--40">
          <div class="col-lg-12">
            <div class="ck-cover">
              <ResponsiveImage :src="article.cover" :alt="article.title" sizes="(max-width: 1199px) 100vw, 1140px" eager />
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
              <section class="ck-summary" aria-labelledby="summary-title">
                <h2 id="summary-title" class="ck-summary__title">Коротко</h2>
                <ul class="ck-list ck-list--check">
                  <li v-for="point in article.summary" :key="point">{{ point }}</li>
                </ul>
              </section>

              <ArticleBody :blocks="article.body" />

              <h2 id="faq">Частые вопросы</h2>
              <FaqList :items="article.faq" />
            </article>
          </div>

          <div class="col-lg-4 mt_md--40 mt_sm--40">
            <aside class="ck-aside">
              <nav class="ck-card ck-toc" aria-label="Содержание статьи">
                <h3 class="ck-card__title">Содержание</h3>
                <ol>
                  <li v-for="item in toc" :key="item.id">
                    <a :href="`#${item.id}`">{{ item.text }}</a>
                  </li>
                  <li><a href="#faq">Частые вопросы</a></li>
                </ol>
              </nav>

              <div v-if="relatedServices.length" class="ck-card mt--30">
                <h3 class="ck-card__title">Услуги по теме</h3>
                <ul class="ck-list">
                  <li v-for="service in relatedServices" :key="service.slug">
                    <NuxtLink :to="`/services/${service.slug}`">{{ service.navTitle }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <CtaBand
              title="Узнали свою ситуацию?"
              text="Расскажите, что происходит с вашим сайтом или сервисом. Разберём бесплатно и честно скажем, что стоит менять, а что нет."
              :subject="`Вопрос по статье «${article.cardTitle}»`"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="otherArticles.length" class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="subtitle">Журнал</span>
              <h2 class="title">Читайте также</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30">
          <div v-for="other in otherArticles" :key="other.slug" class="col-lg-4 col-md-6 col-12 mt--30">
            <ArticleCard :item="other" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
