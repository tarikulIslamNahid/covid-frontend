import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public:{
      baseURL: process.env.APP_API_URL,
      API_URL: process.env.APP_API_URL+'api/',
      APP_URL: process.env.APP_URL,
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-10-10',
})