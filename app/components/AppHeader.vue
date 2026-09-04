<script setup lang="ts">
const { isSticky } = useStickyHeader()
const { isLight, toggle } = useTheme()
const { navItems, isActive } = useNavState()

const mobileMenuOpen = ref(false)
const openMobileMenu = () => { mobileMenuOpen.value = true }
const closeMobileMenu = () => { mobileMenuOpen.value = false }
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
            <NuxtLink to="/">
              <img class="main-logo" src="/logo/logo-coder.svg" alt="Coderok">
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-lg-10 col-6">
        <div class="header-center">
          <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
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
                >{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="header-right">
            <label class="switch d-none d-xl-flex">
              <input type="checkbox" :checked="isLight" @change="toggle">
              <span class="slider round"></span>
            </label>

            <div
              class="hamberger-menu d-block d-xl-none header-hamburger me-5"
              role="button"
              aria-label="Открыть меню"
              @click="openMobileMenu"
            >
              <i class="feather-menu humberger-menu"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <AppMobileMenu
    :is-open="mobileMenuOpen"
    :is-light="isLight"
    @close="closeMobileMenu"
    @toggle-theme="toggle"
  />
</template>

<style scoped>
.header-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  cursor: pointer;
}

.header-hamburger i {
  font-size: 30px;
  line-height: 1;
}
</style>
