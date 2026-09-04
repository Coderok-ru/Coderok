<script setup lang="ts">
import { services } from '../data/services'

const { emailFor } = useContact()
</script>

<template>
  <div id="services" class="rn-section-gap section-separator">
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
            <span class="subtitle">Что мы закрываем</span>
            <h2 class="title">Услуги</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30">
        <div
          v-for="(service, index) in services"
          :key="service.slug"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="100 + (index % 2) * 50"
          data-aos-once="true"
          class="col-lg-6 col-12 mt--30"
        >
          <div class="ck-service">
            <div class="ck-service__head">
              <img :src="service.image" :alt="service.homeTitle" loading="lazy">
              <h3 class="ck-service__title">{{ service.homeTitle }}</h3>
            </div>

            <p class="ck-service__problem">{{ service.problem }}</p>
            <p class="ck-service__solution">{{ service.solution }}</p>
            <p class="ck-service__example">Пример: {{ service.example }}</p>

            <div class="ck-service__footer">
              <div class="ck-stack">
                <span v-for="tech in service.stack" :key="tech">{{ tech }}</span>
              </div>
              <div class="ck-buttons">
                <NuxtLink class="rn-btn" :to="`/services/${service.slug}`">
                  <span>ПОДРОБНЕЕ</span>
                </NuxtLink>
                <a class="rn-btn" :href="emailFor(service.emailSubject)">
                  <span>ОБСУДИТЬ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
