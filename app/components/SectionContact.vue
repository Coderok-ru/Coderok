<script setup lang="ts">
import { company } from '../data/company'

const { emailFor } = useContact()
</script>

<template>
  <div id="contacts" class="rn-contact-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Оценка бесплатная и ни к чему не обязывает</span>
            <h2 class="title">Обсудить проект</h2>
          </div>
        </div>
      </div>

      <div class="row mt--40">
        <div class="col-lg-10 offset-lg-1 text-center">
          <p class="ck-lead">
            Напишите в удобном канале: коротко о задаче, желаемых сроках и ориентировочном бюджете.
            Ответим в течение рабочего дня, при необходимости созвонимся на 20–30 минут.
          </p>
        </div>
      </div>

      <div class="row mt--40">
        <div class="col-lg-12">
          <ContactChannels subject="Заявка с сайта coderok.ru" />
        </div>
      </div>

      <div class="row mt--50">
        <div class="col-lg-10 offset-lg-1 text-center">
          <p class="ck-note">
            Работаем по договору как {{ company.legalName }}, с закрывающими документами для юрлиц.
            <NuxtLink to="/contacts">Реквизиты и порядок работы</NuxtLink>.
          </p>
          <div class="ck-buttons justify-center mt--30">
            <a class="rn-btn" :href="emailFor('Запрос коммерческого предложения')">
              <span>ЗАПРОСИТЬ ОЦЕНКУ</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
