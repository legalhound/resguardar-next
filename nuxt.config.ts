export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: [
    ['nuxt-mail', {
      message: {
        to: 'eporras@resguardar.ai',
      },
      smtp: {
        host: 'smtp.postmarkapp.com',
        port: 587,
        auth: {
          user: process.env.NUXT_POSTMARK_TOKEN,
          pass: process.env.NUXT_POSTMARK_TOKEN,
        },
      },
    }],
  ],

  css: ['./app/assets/scss/base.scss'],

  app: {
    head: {
      title: 'Resguardar',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' }
      ],
    },
  },
})