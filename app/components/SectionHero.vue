<script setup lang="ts">
import { keyFacts } from '../data/company'

const { emailFor } = useContact()
</script>

<template>
  <div id="home" class="rn-slide-area">
    <div class="slide slider-style-3">
      <div class="container">
        <div class="row slider-wrapper">
          <div class="col-12">
            <div class="slider-info">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-12">
                  <div class="user-info-top">
                    <div class="user-info-header">
                      <div class="user">
                        <i class="feather-layers"></i>
                      </div>
                      <h1 class="title">
                        Разрабатываем и чиним то, <span>на чём работает ваш бизнес</span>
                      </h1>
                      <p class="disc">
                        Сайты, мобильные приложения и CRM — от идеи до продакшена. Забираем проекты
                        в любом состоянии: с нуля, из чужого кода или из тупика.
                      </p>
                    </div>
                    <div class="user-info-footer ck-facts">
                      <div v-for="fact in keyFacts" :key="fact.label" class="ck-fact">
                        <span class="ck-fact__value">{{ fact.value }}</span>
                        <span class="ck-fact__label">{{ fact.label }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12 col-lg-12 col-12">
                  <div class="user-info-bottom">
                    <span>Оценка задачи бесплатная и ни к чему не обязывает:</span>
                    <div class="ck-buttons">
                      <a class="rn-btn" :href="emailFor('Заявка с сайта coderok.ru')">
                        <span>ОБСУДИТЬ ПРОЕКТ</span>
                      </a>
                      <NuxtLink class="rn-btn" to="/cases">
                        <span>ПОСМОТРЕТЬ РАБОТЫ</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ck-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 34px;
}

@media only screen and (max-width: 575px) {
  .ck-facts {
    gap: 22px;
    margin-top: 26px;
  }
}
</style>
