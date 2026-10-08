<script setup lang="ts">
/**
 * Строка статьи с минимальной разметкой: [текст](/путь) и **выделение**.
 * Внутренние ссылки идут через NuxtLink (слэш на конце, без перезагрузки),
 * внешние открываются в новой вкладке.
 */
const props = defineProps<{
  text: string
}>()

type Segment = { text: string, href?: string, strong?: boolean }

const segments = computed<Segment[]>(() => {
  const result: Segment[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  for (const match of props.text.matchAll(pattern)) {
    if (match.index! > last) result.push({ text: props.text.slice(last, match.index) })
    if (match[1]) result.push({ text: match[1], href: match[2] })
    else result.push({ text: match[3]!, strong: true })
    last = match.index! + match[0].length
  }
  if (last < props.text.length) result.push({ text: props.text.slice(last) })
  return result
})
</script>

<template>
  <template v-for="(segment, i) in segments" :key="i">
    <NuxtLink v-if="segment.href?.startsWith('/')" :to="segment.href">{{ segment.text }}</NuxtLink>
    <a v-else-if="segment.href" :href="segment.href" target="_blank" rel="noopener">{{ segment.text }}</a>
    <strong v-else-if="segment.strong">{{ segment.text }}</strong>
    <template v-else>{{ segment.text }}</template>
  </template>
</template>
