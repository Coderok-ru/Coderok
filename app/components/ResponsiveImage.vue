<script setup lang="ts">
import manifest from '../data/image-manifest.json'

/**
 * Отдаёт картинку в WebP нужного размера вместо тяжёлого исходника.
 *
 * Производные и размеры готовит `scripts/optimize-images.sh` — он же пишет
 * манифест. Ширина и высота проставляются всегда: без них браузер не знает
 * пропорций и вёрстка прыгает при загрузке, а это бьёт по Core Web Vitals.
 */
const props = withDefaults(defineProps<{
  /** Путь к исходнику, например /assets/images/portfolio/mopup.png */
  src: string
  alt: string
  /** Значение атрибута sizes — какую ширину картинка занимает в макете */
  sizes?: string
  /** Первый экран грузим сразу, остальное лениво */
  eager?: boolean
}>(), {
  sizes: '100vw',
  eager: false,
})

type Entry = { width: number, height: number, widths: number[] }
const entry = computed<Entry | undefined>(
  () => (manifest as Record<string, Entry>)[props.src],
)

const base = computed(() => props.src.replace(/\.(png|jpe?g|webp)$/i, ''))

const srcset = computed(() =>
  entry.value?.widths.map(w => `${base.value}-${w}.webp ${w}w`).join(', '),
)

/** Для src берём средний размер: его получат браузеры без поддержки srcset */
const fallback = computed(() => {
  const widths = entry.value?.widths ?? []
  return widths.includes(960) ? 960 : widths[widths.length - 1]
})
</script>

<template>
  <img
    v-if="entry"
    :src="`${base}-${fallback}.webp`"
    :srcset="srcset"
    :sizes="sizes"
    :width="entry.width"
    :height="entry.height"
    :alt="alt"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : undefined"
    decoding="async"
  >
  <!-- Картинки без производных (новая, ещё не прогнанная через скрипт) -->
  <img v-else :src="src" :alt="alt" loading="lazy" decoding="async">
</template>
