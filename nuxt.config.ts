// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Coderok || Personal Portfolio a Andrey Lyubichenko',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Andrey Lyubichenko, info@coderok.ru' },
        { name: 'copyright', content: 'Coderok' },
        { name: 'theme-color', content: '#a656ff' },
        { name: 'description', content: 'Разработка мобильных приложений под Android и iOS, лендингов, web-приложений и систем управления любой сложности.' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { property: 'og:title', content: 'Coderok || Personal Portfolio a Andrey Lyubichenko' },
        { property: 'og:type', content: 'developer' },
        { property: 'og:url', content: 'https://coderok.ru' },
        { property: 'og:image', content: 'https://coderok.ru/img/banner-02.webp' },
        { property: 'og:site_name', content: 'Coderok' },
        { property: 'og:description', content: 'Разработка мобильных приложений под Android и iOS, лендингов, web-приложений и систем управления любой сложности.' },
        { property: 'og:email', content: 'info@coderok.ru' },
        { property: 'og:phone_number', content: '+7(999)221-33-83' },
      ],
      link: [
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
