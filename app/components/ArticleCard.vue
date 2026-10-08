<script setup lang="ts">
import { readingMinutes, type Article } from '../data/articles'

const props = defineProps<{
  item: Article
}>()

const minutes = readingMinutes(props.item)
</script>

<template>
  <NuxtLink class="ck-case-card" :to="`/journal/${item.slug}`">
    <div class="ck-case-card__thumb">
      <ResponsiveImage :src="item.cover" :alt="item.cardTitle" sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
    </div>
    <div class="ck-case-card__body">
      <span class="ck-case-card__cat">{{ item.category }}</span>
      <h3 class="ck-case-card__title">{{ item.cardTitle }}</h3>
      <p class="ck-case-card__desc">{{ item.excerpt }}</p>
      <p class="ck-article-meta">
        <time :datetime="item.publishedAt">{{ dayLabel(item.publishedAt) }}</time>
        · {{ minutes }} {{ plural(minutes, ['минута', 'минуты', 'минут']) }} чтения
      </p>
    </div>
  </NuxtLink>
</template>
