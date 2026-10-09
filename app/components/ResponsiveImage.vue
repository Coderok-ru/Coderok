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
type Variant = { base: string, entry: Entry, theme?: 'dark' | 'light' }

const variant = (src: string): Variant | undefined => {
  const entry = (manifest as Record<string, Entry>)[src]
  return entry && { base: src.replace(/\.(png|jpe?g|webp)$/i, ''), entry }
}

/**
 * Если рядом с картинкой лежит версия `-light` (схемы и обложки журнала),
 * выводим обе: CSS показывает нужную по классу темы на body. Светлая всегда
 * ленивая — браузер не грузит скрытую lazy-картинку, и тёмная тема не платит
 * за лишний файл.
 */
const variants = computed<Variant[]>(() => {
  const main = variant(props.src)
  if (!main) return []
  const light = variant(props.src.replace(/(\.\w+)$/, '-light$1'))
  return light ? [{ ...main, theme: 'dark' }, { ...light, theme: 'light' }] : [main]
})

const srcset = (v: Variant) => v.entry.widths.map(w => `${v.base}-${w}.webp ${w}w`).join(', ')

/** Для src берём средний размер: его получат браузеры без поддержки srcset */
const fallback = (v: Variant) => {
  const widths = v.entry.widths
  return widths.includes(960) ? 960 : widths[widths.length - 1]
}
</script>

<template>
  <template v-if="variants.length">
    <img
      v-for="v in variants"
      :key="v.base"
      :class="v.theme && `ck-img-${v.theme}`"
      :src="`${v.base}-${fallback(v)}.webp`"
      :srcset="srcset(v)"
      :sizes="sizes"
      :width="v.entry.width"
      :height="v.entry.height"
      :alt="alt"
      :loading="eager && v.theme !== 'light' ? 'eager' : 'lazy'"
      :fetchpriority="eager && v.theme !== 'light' ? 'high' : undefined"
      decoding="async"
    >
  </template>
  <!-- Картинки без производных (новая, ещё не прогнанная через скрипт) -->
  <img v-else :src="src" :alt="alt" loading="lazy" decoding="async">
</template>
