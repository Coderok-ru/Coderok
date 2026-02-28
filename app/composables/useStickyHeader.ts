import { useWindowScroll } from '@vueuse/core'

export const useStickyHeader = () => {
  const { y } = useWindowScroll()
  const isSticky = computed(() => y.value > 250)
  return { isSticky }
}
