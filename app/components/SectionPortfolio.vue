<script setup lang="ts">
import { projects, projectRows } from '../data/projects'

const { $featherReplace } = useNuxtApp()
const delays = [100, 150, 200]

onMounted(() => $featherReplace())
</script>

<template>
  <div class="rn-blog-area rn-section-gap section-separator" id="portfolio">
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
            <span class="subtitle">Коммерческая разработка</span>
            <h2 class="title">Мои работы</h2>
          </div>
        </div>
      </div>

      <div
        v-for="(row, rowIndex) in projectRows"
        :key="rowIndex"
        class="row row--25 mt--30 mt_md--10 mt_sm--10"
      >
        <div
          v-for="(project, colIndex) in row"
          :key="project.id"
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="delays[colIndex]"
          data-aos-once="true"
          class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12"
        >
          <div
            class="rn-blog"
            data-bs-toggle="modal"
            :data-bs-target="`#modal-${project.id}`"
          >
            <div class="inner">
              <div class="thumbnail">
                <a href="javascript:void(0)">
                  <img :src="project.image" alt="Personal Portfolio Images">
                </a>
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list">
                    <a href="javascript:void(0)">{{ project.categories }}</a>
                  </div>
                </div>
                <h4 class="title">
                  <a href="javascript:void(0)">
                    {{ project.title }}
                    <i data-feather="arrow-up-right"></i>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30 mt_md--10 mt_sm--10">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-once="true"
          class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div class="rn-service">
            <div class="inner text-center">
              <div class="icon">
                <i data-feather="lock"></i>
              </div>
              <div class="content">
                <h4 class="title">
                  <a href="https://ru.wikipedia.org/wiki/Соглашение_о_неразглашении">
                    И еще много работ с кем подписано NDA.
                  </a>
                </h4>
                <p class="description">А так же работ в которых мною были разработаны и внедрены отдельные компоненты.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PortfolioModal
    v-for="project in projects"
    :key="project.id"
    :project="project"
  />
</template>
