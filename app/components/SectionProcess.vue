<script setup lang="ts">
import { processSteps } from '../data/content'
</script>

<template>
  <div id="process" class="rn-section-gap section-separator">
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
            <span class="subtitle">Без сюрпризов на каждом шаге</span>
            <h2 class="title">Как мы работаем</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30">
        <div
          v-for="(step, index) in processSteps"
          :key="step.title"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="100 + (index % 3) * 50"
          data-aos-once="true"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <div class="ck-step">
            <span class="ck-step__num">{{ index + 1 }}</span>
            <h3 class="ck-card__title">{{ step.title }}</h3>
            <p class="ck-card__text">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
