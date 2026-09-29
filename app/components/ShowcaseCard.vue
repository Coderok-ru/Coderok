<script setup lang="ts">
import type { ShowcaseItem } from '../data/cases'

defineProps<{ item: ShowcaseItem }>()
</script>

<template>
  <div class="ck-case-card">
    <div class="ck-case-card__thumb">
      <ResponsiveImage :src="item.image" :alt="item.title" sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
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
</template>
