<script setup lang="ts">
import type { Project } from '../data/projects'

const props = defineProps<{
  project: Project
}>()

const { $featherReplace } = useNuxtApp()
const modalId = computed(() => `modal-${props.project.id}`)

onMounted(() => $featherReplace())
</script>

<template>
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i data-feather="x"></i></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="portfolio-popup-thumbnail">
                <div class="image">
                  <img class="w-100" :src="project.image" alt="slide">
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-content">
                <h3>
                  <span>{{ project.tech }}</span> {{ project.title }}
                </h3>
                <p
                  v-for="(desc, i) in project.description"
                  :key="i"
                  :class="{ 'mb--30': i < project.description.length - 1 }"
                >{{ desc }}</p>
                <div v-if="project.links && project.links.length" class="button-group mt--20">
                  <a
                    v-for="link in project.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    class="rn-btn"
                  >
                    <span>{{ link.label }}</span>
                    <i data-feather="chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
