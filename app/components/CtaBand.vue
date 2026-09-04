<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  text?: string
  subject?: string
}>(), {
  title: 'Нужно похожее?',
  text: 'Расскажите о задаче — разберём её и назовём срок и вилку стоимости. Бесплатно и ни к чему не обязывает.',
  subject: 'Заявка с сайта coderok.ru',
})

const { emailFor, contacts } = useContact()
</script>

<template>
  <div class="ck-cta">
    <h3>{{ props.title }}</h3>
    <p class="ck-lead">{{ props.text }}</p>
    <div class="ck-buttons justify-center mt--30">
      <a class="rn-btn" :href="emailFor(props.subject)">
        <span>НАПИСАТЬ НА ПОЧТУ</span>
      </a>
      <a class="rn-btn" :href="contacts.telegram" target="_blank" rel="noopener">
        <span>НАПИСАТЬ В TELEGRAM</span>
      </a>
    </div>
  </div>
</template>
