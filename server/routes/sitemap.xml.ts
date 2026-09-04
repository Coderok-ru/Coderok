import { services } from '../../app/data/services'
import { cases } from '../../app/data/cases'
import { CONTENT_UPDATED_AT } from '../../app/data/company'

const SITE_URL = 'https://coderok.ru'

interface SitemapEntry {
  path: string
  priority: string
  changefreq: string
}

const entries: SitemapEntry[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/cases', priority: '0.9', changefreq: 'weekly' },
  ...services.map(service => ({
    path: `/services/${service.slug}`,
    priority: '0.9',
    changefreq: 'monthly',
  })),
  ...cases.map(item => ({
    path: `/cases/${item.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  })),
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contacts', priority: '0.6', changefreq: 'monthly' },
]

export default defineEventHandler((event) => {
  // Дата содержательного обновления, а не сборки: иначе каждый деплой говорит
  // поисковику «изменились все страницы», и он перестаёт верить lastmod
  const date = CONTENT_UPDATED_AT

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  const urls = entries.map(entry => `  <url>
    <loc>${SITE_URL}${entry.path === '/' ? '/' : `${entry.path}/`}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
