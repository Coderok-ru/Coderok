/** Секции главной страницы в порядке следования. */
export const HOME_SECTIONS = ['home', 'pains', 'services', 'process', 'cases', 'pricing', 'why', 'about', 'faq', 'contacts']

export const useActiveSection = (sections: string[] = HOME_SECTIONS) => {
  const active = ref(sections[0] ?? '')

  const observe = () => {
    if (!import.meta.client) return

    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              active.value = id
            }
          })
        },
        { threshold: 0.3 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }

  return { active, observe }
}
