<script setup lang="ts">
import { pains, painsNote } from '../data/content'

const { emailFor } = useContact()
</script>

<template>
  <div id="pains" class="rn-section-gap section-separator">
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
            <span class="subtitle">С чем к нам приходят</span>
            <h2 class="title">Знакомо?</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30">
        <div
          v-for="(pain, index) in pains"
          :key="pain.title"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="100 + (index % 3) * 50"
          data-aos-once="true"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <div class="ck-card">
            <div class="ck-card__icon">
              <i :class="`feather-${pain.icon}`"></i>
            </div>
            <h3 class="ck-card__title">{{ pain.title }}</h3>
            <p class="ck-card__text">{{ pain.text }}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center mt--50">
          <p class="ck-note">
            {{ painsNote }}
            <a :href="emailFor('Разбор задачи')">Написать нам</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
