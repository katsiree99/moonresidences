import Aura from "@primeuix/themes/aura";
import PrimeUI from "tailwindcss-primeui";

export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  target: "static",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "app",
      },
      charset: "utf-8",
      titleTemplate: "%s | moonresidences",
      meta: [
        { name: "author", content: "moonresidences" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "elementor-frontend-js-before": ["innerHTML"],
      },
    },
  },
  css: [
    "@/assets/scss/main.scss",
    "primeicons/primeicons.css",
    "~/assets/css/tailwind.css",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  dir: {
    plugins: "~/plugins",
  },
  build: {
    transpile: ["@tailwindcss/vite", "primevue"],
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  ssr: false,
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/",
  },
});
