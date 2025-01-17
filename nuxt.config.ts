// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxtjs/i18n'],

  devtools: { enabled: true },

  content: {
    highlight: {
      theme: 'github-light',
    },
  },

  compatibilityDate: '2025-01-17',

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  // https://i18n.nuxtjs.org
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    defaultLocale: 'en',

    lazy: true,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr.json',
        name: 'French',
      },
    ],

    restructureDir: 'internationalization',
    strategy: 'prefix',
    detectBrowserLanguage: false,
  },
})
