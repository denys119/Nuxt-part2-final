import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["primevue"]
  },
  css: [
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/saga-blue/theme.css"
  ],
  buildModules: ['@pinia/nuxt']
})
