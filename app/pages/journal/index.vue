<script setup lang="ts">
import { sortedArticles } from '../../data/articles'
import { services } from '../../data/services'

/**
 * Фильтр по темам. Тема — услуга из services.ts: статья попадает во все темы
 * из своих serviceSlugs. Выбор хранится в ?topic=, чтобы ссылкой на подборку
 * можно было поделиться. На этапе генерации показываются все статьи, поэтому
 * без JS список полный, а query читается только после монтирования.
 */
const topicTitles: Record<string, string> = {
  web: 'Сайты',
  mobile: 'Приложения',
  crm: 'CRM',
  ai: 'AI',
  bots: 'Боты',
  support: 'Поддержка',
}

const topics = services
  .map(s => ({ slug: s.slug, title: topicTitles[s.slug] ?? s.navTitle, count: sortedArticles.filter(a => a.serviceSlugs.includes(s.slug)).length }))
  .filter(t => t.count > 0)

const route = useRoute()
const router = useRouter()
const topic = ref<string | null>(null)

onMounted(() => {
  const q = route.query.topic
  if (typeof q === 'string' && topics.some(t => t.slug === q)) topic.value = q
})

const selectTopic = (slug: string | null) => {
  topic.value = slug
  router.replace({ query: slug ? { topic: slug } : {} })
}

const visibleArticles = computed(() =>
  topic.value ? sortedArticles.filter(a => a.serviceSlugs.includes(topic.value!)) : sortedArticles,
)

usePageSeo({
  title: 'Журнал Coderok: разработка для бизнеса без воды',
  description: 'Сколько стоит приложение, своя CRM или коробка, бот или Mini App, где окупаются нейросети, что делать, если пропал разработчик. Статьи без воды.',
  path: '/journal',
  image: '/img/og/journal.jpg',
  undated: true,
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
              Пишем о том, что видим в проектах клиентов: сколько на самом деле стоят сайт, приложение
              и CRM, на чём экономить нельзя и как принимать технические решения, не будучи программистом.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="rn-section-gap">
      <div class="container">
        <div class="ck-topics" role="group" aria-label="Темы статей">
          <button
            type="button"
            class="ck-topic"
            :class="{ 'is-active': !topic }"
            :aria-pressed="!topic"
            @click="selectTopic(null)"
          >
            Все <span class="ck-topic__count">{{ sortedArticles.length }}</span>
          </button>
          <button
            v-for="t in topics"
            :key="t.slug"
            type="button"
            class="ck-topic"
            :class="{ 'is-active': topic === t.slug }"
            :aria-pressed="topic === t.slug"
            @click="selectTopic(t.slug)"
          >
            {{ t.title }} <span class="ck-topic__count">{{ t.count }}</span>
          </button>
        </div>
        <div class="row row--25">
          <div
            v-for="article in visibleArticles"
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
