<script setup lang="ts">
defineProps<{
  isOpen: boolean
  navItems: { id: string; label: string }[]
  active: string
  isLight: boolean
}>()

const emit = defineEmits<{
  close: []
  navigate: [id: string]
  toggleTheme: []
}>()
</script>

<template>
  <div class="popup-mobile-menu" :class="{ 'menu-open': isOpen }">
    <div class="inner">
      <div class="menu-top">
        <div class="menu-header">
          <a class="logo" href="#" @click.prevent="emit('navigate', 'home')">
            <img class="mobile-logo" src="/logo/logo-coder.svg" alt="logo">
          </a>
          <div class="close-button">
            <button class="close-menu-activation close" @click="emit('close')">
              <i data-feather="x"></i>
            </button>
          </div>
        </div>
        <p class="discription">Разработка мобильных и веб приложений, ботов и mini apps.</p>
      </div>
      <div class="content">
        <ul class="primary-menu nav nav-pills onepagenav">
          <li
            v-for="item in navItems"
            :key="item.id"
            class="nav-item"
            :class="{ current: active === item.id }"
          >
            <a
              class="nav-link smoth-animation"
              :class="{ active: active === item.id }"
              :href="`#${item.id}`"
              @click.prevent="emit('navigate', item.id)"
            >{{ item.label }}</a>
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
          <span class="title">Для связи со мной</span>
          <ul class="social-share d-flex liststyle">
            <li class="instagram">
              <a href="https://t.me/coderok_official"><i data-feather="send"></i></a>
            </li>
            <li class="linkedin">
              <a href="https://wa.me/79992213383?text=CODEROK.RU%20%7C%20%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20">
                <i data-feather="message-circle"></i>
              </a>
            </li>
            <li class="linkedin">
              <a href="tel:+79992213383"><i data-feather="phone-call"></i></a>
            </li>
            <li class="linkedin">
              <a href="mailto:info@coderok.ru"><i data-feather="mail"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
