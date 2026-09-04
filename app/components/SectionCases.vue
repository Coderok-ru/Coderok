<script setup lang="ts">
import { cases } from '../data/cases'
</script>

<template>
  <div id="cases" class="rn-section-gap section-separator">
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
            <span class="subtitle">Каждая работа — с результатом</span>
            <h2 class="title">Кейсы</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30">
        <div
          v-for="(item, index) in cases"
          :key="item.slug"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="100 + (index % 3) * 50"
          data-aos-once="true"
          class="col-lg-4 col-md-6 col-12 mt--30"
        >
          <CaseCard :item="item" />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center mt--50">
          <NuxtLink class="rn-btn" to="/cases">
            <span>ВСЕ РАБОТЫ</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
