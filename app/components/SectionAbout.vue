<script setup lang="ts">
import { company, yearsInDev } from '../data/company'

/** Длительности считаются от даты старта, чтобы не устаревать. */
const facts = computed(() => [
  { value: `${yearsInDev} лет`, label: 'в коммерческой разработке, с 2015 года' },
  { value: durationSince('2022-04'), label: "ведём экосистему Mop'up" },
  { value: durationSince('2024-09'), label: 'ведём платформу Artfabric' },
])
</script>

<template>
  <div id="about" class="rn-section-gap section-separator">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-12">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            class="ck-cover"
          >
            <img :src="company.photo" :alt="company.founder" loading="lazy">
          </div>
        </div>

        <div class="col-lg-7 col-12 mt_md--40 mt_sm--40">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="150"
            data-aos-once="true"
            class="ps-lg-5"
          >
            <div class="section-title text-start">
              <span class="subtitle">Кто это делает</span>
              <h2 class="title">О нас</h2>
            </div>
            <p class="ck-lead text-start mt--20">
              Мы — небольшая команда разработки из Санкт-Петербурга. Задачу ведёт тот же человек,
              который пишет код: основатель {{ company.founder }}. Поэтому требования не теряются
              по дороге, а архитектуру не отдают стажёру.
            </p>
            <p class="ck-lead text-start mt--20">
              Работаем как ИП, по договору и с закрывающими документами. Проекты не бросаем после
              сдачи — большинство систем, которые мы сделали, ведём не первый год.
            </p>

            <div class="ck-facts">
              <div v-for="fact in facts" :key="fact.label" class="ck-fact">
                <span class="ck-fact__value">{{ fact.value }}</span>
                <span class="ck-fact__label">{{ fact.label }}</span>
              </div>
            </div>

            <div class="ck-buttons mt--40">
              <NuxtLink class="rn-btn" to="/about">
                <span>ПОДРОБНЕЕ О НАС</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
