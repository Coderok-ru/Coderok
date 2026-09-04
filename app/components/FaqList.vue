<script setup lang="ts">
import type { FaqItem } from '../data/content'

defineProps<{
  items: FaqItem[]
}>()

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="ck-faq">
    <div
      v-for="(item, index) in items"
      :key="item.q"
      class="ck-faq__item"
      :class="{ 'is-open': openIndex === index }"
    >
      <button
        type="button"
        class="ck-faq__q"
        :aria-expanded="openIndex === index"
        @click="toggle(index)"
      >
        <span>{{ item.q }}</span>
        <i class="feather-chevron-down"></i>
      </button>
      <!-- Ответ рендерится всегда: он нужен в HTML для поиска и LLM, даже когда свёрнут -->
      <p v-show="openIndex === index" class="ck-faq__a">{{ item.a }}</p>
    </div>
  </div>
</template>
