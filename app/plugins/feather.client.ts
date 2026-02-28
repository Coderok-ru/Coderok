import feather from 'feather-icons'

export default defineNuxtPlugin(() => {
  const replace = () => {
    if (import.meta.client) {
      feather.replace()
    }
  }

  return {
    provide: {
      featherReplace: replace,
    },
  }
})
