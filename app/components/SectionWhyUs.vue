<script setup lang="ts">
import { whyUs } from '../data/content'
</script>

<template>
  <div id="why" class="rn-section-gap section-separator">
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
            <span class="subtitle">Частый вопрос, который вслух не задают</span>
            <h2 class="title">Почему не студия</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30">
        <div
          v-for="(item, index) in whyUs"
          :key="item.title"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="100 + index * 50"
          data-aos-once="true"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <div class="ck-card">
            <div class="ck-card__icon">
              <i :class="`feather-${item.icon}`"></i>
            </div>
            <h3 class="ck-card__title">{{ item.title }}</h3>
            <p class="ck-card__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
