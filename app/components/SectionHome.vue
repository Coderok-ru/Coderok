<script setup lang="ts">
const { $featherReplace } = useNuxtApp()
onMounted(() => $featherReplace())
</script>

<template>
  <div id="home" class="rn-slide-area">
    <div class="slide slider-style-3">
      <div class="container">
        <div class="row slider-wrapper">
          <div class="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
            <div class="slider-info">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-12">
                  <div class="user-info-top">
                    <div class="user-info-header">
                      <div class="user">
                        <i data-feather="user"></i>
                      </div>
                      <h2 class="title">
                        Привет, меня зовут <span>Андрей</span>
                      </h2>
                      <p class="disc">Разработчик мобильных и web приложений с креативным мышлением и высокими стандартами к качеству работы.</p>
                    </div>
                    <div class="user-info-footer">
                      <div class="info">
                        <i data-feather="code"></i>
                        <span>Web developer</span>
                      </div>
                      <div class="info">
                        <i data-feather="smartphone"></i>
                        <span>Mobile app developer</span>
                      </div>
                      <div class="info">
                        <i data-feather="pen-tool"></i>
                        <span>Web designer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12 col-lg-12 col-12">
                  <div class="user-info-bottom">
                    <span>Посмотрите мое резюме или сразу свяжитесь со мной: </span>
                    <div class="button-wrapper d-flex">
                      <a
                        class="rn-btn mr--30"
                        href="/assets/images/contact/Любиченко Андрей.pdf"
                        target="_blank"
                      ><span>СКАЧАТЬ РЕЗЮМЕ</span></a>
                      <a
                        class="rn-btn"
                        href="https://t.me/coderok_official"
                        target="_blank"
                      ><span>НАПИСАТЬ МНЕ</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 order-xl-2 col-lg-12 col-xl-7">
            <div class="background-image-area">
              <div class="thumbnail-image">
                <img src="/img/banner-02.webp" alt="Personal Portfolio">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
