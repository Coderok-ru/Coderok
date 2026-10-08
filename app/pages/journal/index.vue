<script setup lang="ts">
import { sortedArticles } from '../../data/articles'

usePageSeo({
  title: 'Журнал Coderok: о разработке сайтов для бизнеса',
  description: 'Статьи о разработке без воды: как выбрать хостинг и стек технологий, чем опасны конструкторы сайтов и что важно для SEO и ответов нейросетей.',
  path: '/journal',
  image: '/img/og/journal.jpg',
  jsonLd: [
    breadcrumbLd([
      { name: 'Главная', path: '/' },
      { name: 'Журнал', path: '/journal' },
    ]),
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/journal/#blog`,
      name: 'Журнал Coderok',
      url: absUrl('/journal'),
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE_URL}/#organization` },
      blogPost: sortedArticles.map(article => ({ '@id': `${absUrl(`/journal/${article.slug}`)}#article` })),
    },
    {
      '@type': 'ItemList',
      itemListElement: sortedArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: absUrl(`/journal/${article.slug}`),
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
              <span>Журнал</span>
            </nav>
            <h1 class="ck-page-title">Журнал</h1>
            <p class="ck-lead text-start">
              Пишем о том, что видим в проектах клиентов: почему сайт не растёт, на чём экономить
              нельзя и как принимать технические решения, не будучи программистом.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="row row--25">
          <div
            v-for="article in sortedArticles"
            :key="article.slug"
            class="col-lg-4 col-md-6 col-12 mt--30"
          >
            <ArticleCard :item="article" />
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <CtaBand
              title="Есть вопрос по вашему проекту?"
              text="Расскажите, что происходит с сайтом или сервисом сейчас. Разберём ситуацию и предложим решение — бесплатно."
              subject="Вопрос из журнала coderok.ru"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
