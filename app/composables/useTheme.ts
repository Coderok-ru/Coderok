import { useLocalStorage } from '@vueuse/core'

export const useTheme = () => {
  const isLight = useLocalStorage('white-version', false)

  const applyTheme = (val: boolean) => {
    if (import.meta.client) {
      document.body.classList.toggle('white-version', val)
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('white-version')
      if (stored === null) {
        const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches
        isLight.value = preferLight
      }
      applyTheme(isLight.value)
    }
  }

  watch(isLight, applyTheme)

  const toggle = () => {
    isLight.value = !isLight.value
  }

  return { isLight, toggle, initTheme }
}
