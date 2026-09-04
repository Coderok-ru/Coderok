<script setup lang="ts">
import { priceRows, priceNote } from '../data/pricing'
</script>

<template>
  <div id="pricing" class="rn-section-gap section-separator">
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
            <span class="subtitle">Ориентиры, чтобы не гадать</span>
            <h2 class="title">Сколько стоит</h2>
          </div>
        </div>
      </div>

      <div class="row mt--50">
        <div class="col-lg-10 offset-lg-1">
          <PriceTable :rows="priceRows" />
          <p class="ck-note text-center mt--30">{{ priceNote }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
