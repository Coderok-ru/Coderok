<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="rn-footer-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-area text-center">
            <div class="main-logo">
              <img class="main-logo" src="/logo/logo-coder.svg" alt="logo">
            </div>
            <p class="description mt--30">
              © {{ year }}. All rights reserved by
              <a target="_blank" href="#">Coderok || Andrey Lyubichenko.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
