export const SITE_URL = 'https://coderok.ru'
export const OG_IMAGE = `${SITE_URL}/img/og-image.jpg`

interface PageSeoOptions {
  title: string
  description: string
  /** Путь без домена, например /cases/artfabric-migration */
  path: string
  image?: string
  type?: 'website' | 'article'
  /** Дополнительная микроразметка страницы */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

/** Единая точка настройки мета-тегов и микроразметки для внутренних страниц. */
export const usePageSeo = (options: PageSeoOptions) => {
  const url = `${SITE_URL}${options.path}`
  const image = options.image ? `${SITE_URL}${options.image}` : OG_IMAGE

  useHead({
    title: options.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:type', content: options.type ?? 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:url', content: url },
    ],
    script: options.jsonLd
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(
            Array.isArray(options.jsonLd)
              ? { '@context': 'https://schema.org', '@graph': options.jsonLd }
              : { '@context': 'https://schema.org', ...options.jsonLd },
          ),
        }]
      : undefined,
  })
}

/** Хлебные крошки в разметке — Яндекс и Google показывают их в выдаче. */
export const breadcrumbLd = (items: { name: string, path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})
