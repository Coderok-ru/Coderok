<script setup lang="ts">
import AOS from 'aos'

const { initTheme } = useTheme()
const { isVisible, scrollToTop } = useBackToTop()

onMounted(async () => {
  initTheme()
  document.body.classList.add('template-color-1')
  AOS.init({ once: true })
})
</script>

<template>
  <AppHeader />

  <main class="main-page-wrapper">
    <slot />
  </main>

  <AppFooter />

  <div
    class="backto-top"
    :style="{ display: isVisible ? 'block' : 'none' }"
    role="button"
    aria-label="Наверх"
    @click="scrollToTop"
  >
    <div>
      <i class="feather-arrow-up"></i>
    </div>
  </div>
</template>
