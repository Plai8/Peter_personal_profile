export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  app: {
    head: {
      /* 頁面標題 */
      title: "關於我｜個人簡介",

      /* HTML 屬性 */
      htmlAttrs: {
        lang: "zh-Hant",
      },

      /* Meta Tags */
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },

        // SEO description
        {
          name: "description",
          content: "這頁介紹我的背景、技能與工作經驗",
        },

        // Open Graph (社群分享)
        { property: "og:title", content: "關於我｜個人簡介" },
        {
          property: "og:description",
          content: "這頁介紹我的背景、技能與工作經驗",
        },
        { property: "og:image", content: "/website-logo.webp" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "關於我｜個人簡介" },
        {
          name: "twitter:description",
          content: "這頁介紹我的背景、技能與工作經驗",
        },
        { name: "twitter:image", content: "/website-logo.webp" },
      ],

      /* Link Tags */
      link: [
        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },

        // Favicon
        { rel: "icon", type: "image/webp", href: "/website-logo.webp" },
      ],
    },
  },

  /* 全域 CSS */
  css: [
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  /* EmailJS Config */
  runtimeConfig: {
    public: {
      EMAILJS_SERVICE_ID: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },
});
