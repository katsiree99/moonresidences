import { defineNuxtConfig } from "nuxt/config";
import Aura from "@primeuix/themes/aura";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module", "@nuxtjs/i18n"],

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

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
    },
  },

  i18n: {
    strategy: "no_prefix",
    lazy: true,
    langDir: resolve(__dirname, "locales/"),
    locales: [
      { code: "en", name: "English", file: "en.json", iso: "en-US" },
      { code: "th", name: "ไทย", file: "th.json", iso: "th-TH" },
    ],
    defaultLocale: "en",
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
    preset: "cloudflare-pages",
  },
});
