<script setup lang="ts">
const { $featherReplace } = useNuxtApp()

onMounted(() => $featherReplace())
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
                        <i data-feather="layers"></i>
                      </div>
                      <h2 class="title">
                        Coderok — <span>студия разработки</span>
                      </h2>
                      <p class="disc">
                        Создаём мобильные приложения, веб-сервисы и CRM-платформы. Основатель и ведущий разработчик — Андрей Любиченко, 13+ лет в индустрии.
                      </p>
                    </div>
                    <div class="user-info-footer">
                      <div class="info">
                        <i data-feather="smartphone"></i>
                        <span>iOS & Android</span>
                      </div>
                      <div class="info">
                        <i data-feather="globe"></i>
                        <span>Web & Backend</span>
                      </div>
                      <div class="info">
                        <i data-feather="cpu"></i>
                        <span>AI & Automation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12 col-lg-12 col-12">
                  <div class="user-info-bottom">
                    <span>Готовы к сотрудничеству — от идеи до продакшена:</span>
                    <div class="button-wrapper d-flex">
                      <!-- <a
                        class="rn-btn mr--30"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#resume-modal"
                      ><span>РЕЗЮМЕ</span></a> -->
                      <a
                        class="rn-btn"
                        href="https://t.me/coderok_official"
                        target="_blank"
                      ><span>ОБСУДИТЬ ПРОЕКТ</span></a>
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
