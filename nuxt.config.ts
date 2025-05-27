// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@nuxt/content'
  ]
})