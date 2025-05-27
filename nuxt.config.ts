// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  typescript: {
    strict: true, // 啟用嚴格模式，確保型別安全
  },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ]
})