<script setup lang="ts">
const { $featherReplace } = useNuxtApp()
onMounted(() => $featherReplace())
</script>

<template>
  <div class="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">ГОТОВЫ ОБСУДИТЬ ВАШ ПРОЕКТ</span>
            <h2 class="title">Свяжитесь с нами</h2>
          </div>
        </div>
      </div>

      <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
        <div class="col-lg-5">
          <div class="contact-about-area">
            <div class="thumbnail">
              <img src="/assets/images/about/contact.webp" alt="contact-img">
            </div>
          </div>
        </div>
        <div data-aos-delay="600" class="col-lg-7 contact-input">
          <div class="contact-about-area">
            <div class="title-area">
              <h4 class="title">Андрей Любиченко</h4>
              <span>/ Основатель Coderok</span>
            </div>
            <div class="description">
              <p>Берёмся как за короткие задачи, так и за долгосрочные проекты. Оцениваем задачу бесплатно — просто напишите.</p>
              <span class="phone">Телефон: <a href="tel:+79992213383">+7 (999) 221-33-83</a></span>
              <span class="mail">Email: <a href="mailto:info@coderok.ru">info@coderok.ru</a></span>
            </div>
            <div class="social-area">
              <div class="social-icone">
                <a href="https://t.me/coderok_official"><i data-feather="send"></i></a>
                <a href="https://wa.me/79992213383?text=CODEROK.RU%20%7C%20Здравствуйте%20">
                  <i data-feather="message-circle"></i>
                </a>
                <a href="tel:+79992213383"><i data-feather="phone-call"></i></a>
                <a href="mailto:info@coderok.ru"><i data-feather="mail"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
