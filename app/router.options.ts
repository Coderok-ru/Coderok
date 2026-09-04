import type { RouterConfig } from '@nuxt/schema'

/** Высота фиксированной шапки — на неё смещаем якорную прокрутку. */
const HEADER_OFFSET = 100

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        top: HEADER_OFFSET,
        behavior: 'smooth',
      }
    }

    // Переход между страницами всегда открывает их сверху
    if (to.path !== from.path) return { top: 0 }

    return { top: 0 }
  },
}
