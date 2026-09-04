<script setup lang="ts">
defineProps<{
  isOpen: boolean
  isLight: boolean
}>()

const emit = defineEmits<{
  close: []
  toggleTheme: []
}>()

const { navItems, isActive } = useNavState()
const { channels } = useContact()
const items = computed(() => channels('Заявка с сайта coderok.ru'))
</script>

<template>
  <div class="popup-mobile-menu" :class="{ 'menu-open': isOpen }">
    <div class="inner">
      <div class="menu-top">
        <div class="menu-header">
          <NuxtLink class="logo" to="/" @click="emit('close')">
            <img class="mobile-logo" src="/logo/logo-coder.svg" alt="Coderok">
          </NuxtLink>
          <div class="close-button">
            <button class="close-menu-activation close" aria-label="Закрыть меню" @click="emit('close')">
              <i class="feather-x"></i>
            </button>
          </div>
        </div>
        <p class="discription">Сайты, мобильные приложения и CRM — от идеи до продакшена.</p>
      </div>
      <div class="content">
        <ul class="primary-menu nav nav-pills">
          <li
            v-for="item in navItems"
            :key="item.to"
            class="nav-item"
            :class="{ current: isActive(item) }"
          >
            <NuxtLink
              class="nav-link smoth-animation"
              :class="{ active: isActive(item) }"
              :to="item.to"
              @click="emit('close')"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>

        <div class="theme-toggle-mobile mt--40">
          <span class="title">Тема оформления</span>
          <div class="toggle-row mb-3">
            <label class="switch">
              <input type="checkbox" :checked="isLight" @change="emit('toggleTheme')">
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div class="social-share-style-1 mt--40">
          <span class="title">Для связи</span>
          <ul class="social-share d-flex liststyle">
            <li v-for="channel in items" :key="channel.id">
              <a
                :href="channel.href"
                :target="channel.external ? '_blank' : undefined"
                :rel="channel.external ? 'noopener' : undefined"
                :aria-label="channel.label"
              ><i :class="`feather-${channel.icon}`"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
