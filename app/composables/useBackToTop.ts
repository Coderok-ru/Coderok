import { useWindowScroll } from '@vueuse/core'

export const useBackToTop = () => {
  const { y } = useWindowScroll()
  const isVisible = computed(() => y.value > 100)

  const scrollToTop = () => {
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return { isVisible, scrollToTop }
}
