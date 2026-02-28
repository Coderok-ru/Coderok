// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://coderok.ru'
const OG_IMAGE = `${SITE_URL}/img/og-image.jpg`
const SITE_TITLE = 'Coderok — студия разработки веб и мобильных приложений'
const SITE_DESC = 'Создаём мобильные приложения (iOS, Android), веб-сервисы и CRM. Flutter, Laravel, Vue, Nuxt. 13+ лет опыта. Разработка под ключ — от идеи до продакшена.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
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
        { name: 'author', content: 'Андрей Любиченко, Coderok, info@coderok.ru' },
        { name: 'copyright', content: '© Coderok' },
        { name: 'theme-color', content: '#a656ff' },
        { name: 'description', content: SITE_DESC },
        { name: 'keywords', content: 'разработка мобильных приложений, веб-разработка, Flutter, Laravel, Vue, Nuxt, Go, Golang, CRM, iOS, Android, студия разработки, Coderok' },
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
        { property: 'og:image:alt', content: 'Coderok — студия разработки веб и мобильных приложений' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:site_name', content: 'Coderok' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:email', content: 'info@coderok.ru' },
        { property: 'og:phone_number', content: '+79992213383' },
        // Twitter / X Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: SITE_URL },
        { name: 'twitter:title', content: SITE_TITLE },
        { name: 'twitter:description', content: SITE_DESC },
        { name: 'twitter:image', content: OG_IMAGE },
        { name: 'twitter:image:alt', content: 'Coderok — студия разработки' },
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
                legalName: 'ИП Любиченко Андрей Анатольевич',
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/logo/logo-coder.svg`,
                },
                image: OG_IMAGE,
                description: 'Студия разработки веб и мобильных приложений. Flutter, Laravel, Vue, Nuxt. iOS, Android, CRM, AI-интеграции. 13+ лет опыта.',
                email: 'info@coderok.ru',
                telephone: '+7-999-221-33-83',
                taxID: '784200644930',
                identifier: [
                  { '@type': 'PropertyValue', name: 'ИНН', value: '784200644930' },
                  { '@type': 'PropertyValue', name: 'ОГРНИП', value: '324784700283561' },
                ],
                areaServed: { '@type': 'Country', name: 'Russia' },
                knowsLanguage: 'ru',
                founder: { '@id': `${SITE_URL}/#person` },
                employee: { '@id': `${SITE_URL}/#person` },
                sameAs: ['https://t.me/coderok_official'],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Услуги разработки',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Разработка мобильных приложений', description: 'Flutter + Dart. iOS, Android, кроссплатформа. App Store, Google Play, RuStore.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Разработка веб-приложений', description: 'Laravel, Vue 3, Nuxt, Tailwind. От лендинга до SaaS-платформы.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Серверная разработка и API', description: 'Go, Laravel, Node.js. REST API, микросервисы, CRM.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI и LLM-интеграция', description: 'Интеграция GPT, Claude, локальных моделей. RAG, чат-боты, автоматизация.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telegram-боты и Mini Apps', description: 'Боты и приложения для Telegram и ВКонтакте с оплатой и личным кабинетом.' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Десктопные приложения', description: 'Flutter, Electron, Swift, C#. Windows и macOS.' } },
                  ],
                },
              },
              {
                '@type': 'Person',
                '@id': `${SITE_URL}/#person`,
                name: 'Андрей Любиченко',
                givenName: 'Андрей',
                familyName: 'Любиченко',
                jobTitle: 'Основатель и ведущий разработчик',
                worksFor: { '@id': `${SITE_URL}/#organization` },
                url: SITE_URL,
                email: 'info@coderok.ru',
                telephone: '+7-999-221-33-83',
                knowsAbout: ['Flutter', 'Dart', 'Laravel', 'Vue.js', 'Nuxt.js', 'Go', 'iOS', 'Android', 'AI', 'LLM', 'Telegram Bot', 'CRM'],
                sameAs: ['https://t.me/coderok_official'],
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: 'Coderok — студия разработки',
                description: SITE_DESC,
                publisher: { '@id': `${SITE_URL}/#organization` },
                inLanguage: 'ru-RU',
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
    }
  }
})
