<script setup lang="ts">
const props = withDefaults(defineProps<{
  subject?: string
}>(), {
  subject: 'Заявка с сайта coderok.ru',
})

const { channels } = useContact()
const items = computed(() => channels(props.subject))
</script>

<template>
  <div class="ck-channels">
    <a
      v-for="channel in items"
      :key="channel.id"
      class="ck-channel"
      :href="channel.href"
      :target="channel.external ? '_blank' : undefined"
      :rel="channel.external ? 'noopener' : undefined"
    >
      <i :class="`feather-${channel.icon}`"></i>
      <span class="ck-channel__label">{{ channel.label }}</span>
      <span class="ck-channel__value">{{ channel.value }}</span>
    </a>
  </div>
</template>
