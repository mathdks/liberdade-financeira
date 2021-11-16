export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/liberdade-financeira/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Calculadora de Liberdade Financeira',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Com a melhor Calculadora de Liberdade Financeira, descubra quanto dinheiro você precisa investir para nunca mais precisar trabalhar.' },
      { hid: 'keywords', name: 'keywords', content: 'Calculadora de Independência Financeira, Independência Financeira, Liberdade Financeira, Calculadora de Liberdade Financeira, Investir para ganhar dinheiro' },
      { hid: 'ogTitle', name: 'og:title', content: 'Calculadora de Liberdade Financeira' },
      { hid: 'ogDescription', name: 'og:description', content: 'Com a melhor Calculadora de Liberdade Financeira, descubra quanto dinheiro você precisa investir para nunca mais precisar trabalhar.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tooltip.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  // Runtime configuration: https://nuxtjs.org/docs/directory-structure/nuxt-config/#runtimeconfig
  publicRuntimeConfig: {
    apiSecret: process.env.AIRTABLE_API_KEY,
    baseId: process.env.BASE_ID,
    tableId: process.env.TABLE_ID
  }
}
