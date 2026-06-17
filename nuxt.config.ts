export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  css: [
    './app/assets/scss/base.scss'
  ],
  app: {
    head: {
    title: "Rresguardar",
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        },
      ]
    }
  }
})