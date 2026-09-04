<script setup lang="ts">
import type { CaseStudy } from '../data/cases'

defineProps<{
  item: CaseStudy
}>()
</script>

<template>
  <NuxtLink class="ck-case-card" :to="`/cases/${item.slug}`">
    <div class="ck-case-card__thumb">
      <img :src="item.cover" :alt="item.cardTitle" loading="lazy">
    </div>
    <div class="ck-case-card__body">
      <span class="ck-case-card__cat">{{ item.category }}</span>
      <h4 class="ck-case-card__title">{{ item.cardTitle }}</h4>
    </div>
  </NuxtLink>
</template>
