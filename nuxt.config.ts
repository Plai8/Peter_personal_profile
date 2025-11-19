export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
        },
        { rel: 'icon', type: 'image/webp', href: '/website-logo.webp' },
      ]
    }
  },
  css: ["~/assets/css/main.scss", '@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      EMAILJS_SERVICE_ID: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
  }
})
