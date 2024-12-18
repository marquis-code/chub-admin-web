import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  plugins: ["~/plugins/aos.client.ts"],
  modules: ['@kevinmarrec/nuxt-pwa', "nuxt-emoji-picker"],
  css: [
    'vue3-emoji-picker/css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false, // Handle charset issues
        },
      },
    },
    optimizeDeps: {
      include: [
        "vue3-emoji-picker/css",
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],  // Specify only static, easily prerenderable routes here
      ignore: ['/dashboard', '/dashboard/content', '/dashboard/challenge/create', '/dashboard/challenge']
    }
  },
  pwa: {
    workbox: {
      enabled: true
    },
    meta: {
      title: "Chub Admin",
      author: "Marquis",
      mobileAppIOS: false,
      mobileApp: true,
      description:
        "Fun, Community, Growth",
      theme_color: "#27396B",
      background_color: "#27396B",
      display: "standalone",
      start_url: "/",
      nativeUI: true,
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    manifest: {
      name: "Achilles Drill",
      lang: "fa",
      useWebmanifestExtension: false,
    },
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://cdn.snipcart.com/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
});
