import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true }
})
