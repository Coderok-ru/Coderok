<script setup lang="ts">
import { faq } from '../data/content'
</script>

<template>
  <div id="faq" class="rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            class="section-title text-center"
          >
            <span class="subtitle">Отвечаем до того, как вы спросите</span>
            <h2 class="title">Частые вопросы</h2>
          </div>
        </div>
      </div>

      <div class="row mt--50">
        <div class="col-lg-10 offset-lg-1">
          <FaqList :items="faq" />
        </div>
      </div>
    </div>
  </div>
</template>
