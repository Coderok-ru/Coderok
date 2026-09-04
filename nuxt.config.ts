// https://nuxt.com/docs/api/configuration/nuxt-config
import { services } from './app/data/services'
import { cases } from './app/data/cases'
import { company, contacts, yearsInDev, integrations, profiles, CONTENT_UPDATED_AT } from './app/data/company'

const SITE_URL = 'https://coderok.ru'
const OG_IMAGE = `${SITE_URL}/img/og-image.jpg`
const SITE_TITLE = 'Разработка сайтов, мобильных приложений и CRM — Coderok'
const SITE_DESC = 'Разрабатываем и чиним то, на чём работает бизнес: сайты, мобильные приложения и CRM. Забираем проекты в любом состоянии — с нуля, из чужого кода или из тупика. Цены и сроки на сайте.'

/**
 * Адреса, которые уже были опубликованы и сменились.
 * rsync не удаляет файлы с сервера, поэтому старую страницу нужно перекрыть
 * редиректом, иначе она останется в выдаче с устаревшим содержимым.
 */
const redirects: Record<string, string> = {
  '/cases/mopup-excel-routes': '/cases/zalog-chistoty-route-maps/',
}

/** Все статические маршруты для генерации и sitemap */
const staticRoutes = [
  '/',
  '/cases',
  '/about',
  '/contacts',
  ...services.map(service => `/services/${service.slug}`),
  ...cases.map(item => `/cases/${item.slug}`),
]

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [...staticRoutes, ...Object.keys(redirects), '/sitemap.xml'],
    },
  },
  routeRules: Object.fromEntries(
    Object.entries(redirects).map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }]),
  ),
  experimental: {
    // nginx на хостинге редиректит /cases на /cases/, поэтому внутренние
    // ссылки сразу ведут на адрес со слэшем — без лишнего 301 у посетителя
    defaults: {
      nuxtLink: { trailingSlash: 'append' },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: SITE_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'yandex', content: 'index, follow' },
        { name: 'author', content: `${company.founder}, Coderok, ${contacts.email}` },
        { name: 'copyright', content: '© Coderok' },
        { name: 'theme-color', content: '#a656ff' },
        { name: 'description', content: SITE_DESC },
        { name: 'keywords', content: 'разработка сайтов, разработка мобильных приложений, Flutter, CRM под ключ, Telegram-бот, интеграция AI, поддержка сайта, доработка после другого разработчика, Санкт-Петербург, Coderok' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        // Open Graph (Facebook, VK, Telegram, LinkedIn, Discord)
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:title', content: SITE_TITLE },
        { property: 'og:description', content: SITE_DESC },
        { property: 'og:image', content: OG_IMAGE },
        { property: 'og:image:url', content: OG_IMAGE },
        { property: 'og:image:secure_url', content: OG_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Coderok — разработка сайтов, мобильных приложений и CRM' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:site_name', content: 'Coderok' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:email', content: contacts.email },
        { property: 'og:phone_number', content: contacts.phoneRaw },
        // Twitter / X Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: SITE_URL },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESC },
        { name: 'twitter:image', content: OG_IMAGE },
        { name: 'twitter:image:alt', content: 'Coderok — разработка сайтов, мобильных приложений и CRM' },
        { name: 'twitter:creator', content: '@coderok_official' },
      ],
      link: [
        { rel: 'canonical', href: SITE_URL },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: '/assets/css/vendor/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/vendor/aos.css' },
        { rel: 'stylesheet', href: '/assets/css/plugins/feature.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': ['Organization', 'ProfessionalService'],
                '@id': `${SITE_URL}/#organization`,
                name: 'Coderok',
                legalName: company.legalName,
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/logo/logo-coder.svg`,
                },
                image: OG_IMAGE,
                description: `Разработка сайтов, мобильных приложений, CRM, Telegram-ботов и AI-интеграций. ${yearsInDev} лет в коммерческой разработке. Работаем по договору как ИП.`,
                email: contacts.email,
                telephone: contacts.phoneRaw,
                taxID: company.inn,
                foundingDate: company.registeredAtIso,
                identifier: [
                  { '@type': 'PropertyValue', name: 'ИНН', value: company.inn },
                  { '@type': 'PropertyValue', name: 'ОГРНИП', value: company.ogrnip },
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: company.city,
                  addressCountry: 'RU',
                },
                areaServed: [
                  { '@type': 'Country', name: 'Россия' },
                  { '@type': 'City', name: company.city },
                ],
                knowsLanguage: 'ru',
                knowsAbout: integrations,
                slogan: company.slogan,
                priceRange: company.priceRange,
                founder: { '@id': `${SITE_URL}/#person` },
                employee: { '@id': `${SITE_URL}/#person` },
                sameAs: profiles,
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: contacts.phoneRaw,
                  email: contacts.email,
                  areaServed: 'RU',
                  availableLanguage: ['ru'],
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Услуги разработки',
                  itemListElement: services.map(service => ({
                    '@type': 'Offer',
                    url: `${SITE_URL}/services/${service.slug}/`,
                    itemOffered: {
                      '@type': 'Service',
                      name: service.title,
                      description: service.solution,
                    },
                  })),
                },
              },
              {
                '@type': 'Person',
                '@id': `${SITE_URL}/#person`,
                name: company.founder,
                givenName: 'Андрей',
                familyName: 'Любиченко',
                jobTitle: company.founderRole,
                worksFor: { '@id': `${SITE_URL}/#organization` },
                url: `${SITE_URL}/about/`,
                email: contacts.email,
                telephone: contacts.phoneRaw,
                knowsAbout: ['Go', 'Flutter', 'Dart', 'Laravel', 'Vue.js', 'React', 'Nuxt', 'HTMX', 'PostgreSQL', 'iOS', 'Android', 'CRM', 'AI', 'LLM', 'Telegram Bot'],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: company.city,
                  addressCountry: 'RU',
                },
                sameAs: profiles,
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: 'Coderok',
                description: SITE_DESC,
                publisher: { '@id': `${SITE_URL}/#organization` },
                inLanguage: 'ru-RU',
                dateModified: CONTENT_UPDATED_AT,
              },
            ],
          }),
        },
        {
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(65087863,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
          type: 'text/javascript',
        },
        {
          innerHTML: `var _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:"3536367",type:"pageView",start:(new Date()).getTime()});(function(d,w,id){if(d.getElementById(id))return;var ts=d.createElement("script");ts.type="text/javascript";ts.async=true;ts.id=id;ts.src="https://top-fwz1.mail.ru/js/code.js";var f=function(){var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(ts,s);};if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",f,false);}else{f();}})(document,window,"tmr-code");`,
          type: 'text/javascript',
        },
      ],
      noscript: [
        { innerHTML: '<div><img src="https://mc.yandex.ru/watch/65087863" style="position:absolute; left:-9999px;" alt="" /></div>' },
        { innerHTML: '<div><img src="https://top-fwz1.mail.ru/counter?id=3536367;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div>' },
      ],
    },
  },
})
