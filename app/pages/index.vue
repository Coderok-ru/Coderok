<script setup lang="ts">
import AOS from 'aos'

const { initTheme } = useTheme()
const { active, observe } = useActiveSection()
const { isVisible, scrollToTop } = useBackToTop()

provide('activeSection', { active })

let cleanupObserver: (() => void) | undefined

onMounted(async () => {
  initTheme()
  document.body.classList.add('template-color-1', 'spybody')
  AOS.init({ once: true })
  // @ts-ignore
  await import('bootstrap')
  cleanupObserver = observe() ?? undefined
})

onUnmounted(() => {
  cleanupObserver?.()
})
</script>

<template>
  <AppHeader />

  <main class="main-page-wrapper">
    <SectionHome />
    <SectionExperiences />
    <SectionPortfolio />

    <div
      class="backto-top"
      :style="{ display: isVisible ? 'block' : 'none' }"
      @click="scrollToTop"
    >
      <div>
        <i data-feather="arrow-up"></i>
      </div>
    </div>
  </main>

  <SectionContact />
  <AppFooter />

  <ResumeModal />
</template>
