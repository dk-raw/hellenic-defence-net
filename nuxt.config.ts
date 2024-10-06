// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Hellenic Defence Net - Defence News and Analysis",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Hellenic Defence Net - Defence News and Analysis' },
        { name: 'description', content: 'Naval, Air, Land  Defence News and Expert Analysis from Greece.' },
        { name: 'keywords', content: 'greek defence, hellenic defence net, hellenic defence, net, news, defence news, defence industry, greece, war, turkey, military news, defence, analysis, military analysis, ukraine, military gear, equipment,αμυνα, αμυντικα, νεα, αμυντικα σαιτ, ειδησεις, εθνικα θεματα, εξοπλισμοι, αμυντικη βιομηχανια' },
        { property: 'og:title', content: 'Hellenic Defence Net' },
        { property: 'og:description', content: 'Naval, Air, Land Defence News and Expert Analysis from Greece.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hellenicdefence.net/' },
        { property: 'og:image', content: 'https://hellenicdefence.net/logo.png' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: 'Hellenic Defence Net' },
        { property: 'twitter:description', content: 'Naval, Air, Land Defence News and Expert Analysis from Greece.' },
        { property: 'twitter:image', content: 'https://hellenicdefence.net/logo.png' },
        { property: 'twitter:site', content: '@hellenicdefence' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          crossorigin: "anonymous",
          integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
        },
      ],

      link: [
        { rel: 'canonical', href: 'https://hellenicdefence.net/' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin: "anonymous" },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css', integrity: 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
      ],

      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  css: ['~/assets/css/site.css'],
  runtimeConfig: {
    public: {
      spaceId: process.env.ID,
      apiKey: process.env.KEY,
    },
  },
})
