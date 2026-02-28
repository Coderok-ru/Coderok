<script setup lang="ts">
const { $featherReplace } = useNuxtApp()
const { isSticky } = useStickyHeader()
const { isLight, toggle } = useTheme()
const injected = inject('activeSection') as { active: Ref<string> } | undefined
const active = injected?.active ?? ref('home')

const mobileMenuOpen = ref(false)

const openMobileMenu = () => { mobileMenuOpen.value = true }
const closeMobileMenu = () => { mobileMenuOpen.value = false }

const scrollTo = (id: string) => {
  closeMobileMenu()
  if (import.meta.client) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => $featherReplace())

const navItems = [
  { id: 'home', label: 'Инфо' },
  { id: 'experiences', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'contacts', label: 'Мои контакты' },
]
</script>

<template>
  <header
    class="rn-header haeder-default black-logo-version header--fixed header--sticky"
    :class="{ sticky: isSticky }"
  >
    <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
      <div class="col-lg-2 col-6">
        <div class="header-left">
          <div class="logo">
            <a href="#home" @click.prevent="scrollTo('home')">
              <img class="main-logo" src="/logo/logo-coder.svg" alt="logo">
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-10 col-6">
        <div class="header-center">
          <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
            <ul class="primary-menu nav nav-pills">
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
                  @click.prevent="scrollTo(item.id)"
                >{{ item.label }}</a>
              </li>
            </ul>
          </nav>

          <div class="header-right">
            <label class="switch">
              <input type="checkbox" :checked="isLight" @change="toggle">
              <span class="slider round"></span>
            </label>

            <div class="hamberger-menu d-block d-xl-none">
              <i data-feather="menu" class="humberger-menu" @click="openMobileMenu"></i>
            </div>

            <div class="close-menu d-block">
              <span class="closeTrigger" @click="closeMobileMenu">
                <i data-feather="x"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <AppMobileMenu
    :is-open="mobileMenuOpen"
    :nav-items="navItems"
    :active="active"
    @close="closeMobileMenu"
    @navigate="scrollTo"
  />
</template>
