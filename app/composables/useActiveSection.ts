export const useActiveSection = () => {
  const active = ref('home')

  const observe = () => {
    if (!import.meta.client) return

    const sections = ['home', 'experiences', 'portfolio', 'contacts']
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
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }

  return { active, observe }
}
