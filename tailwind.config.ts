import type { Config } from "tailwindcss";
import PrimeUI from "tailwindcss-primeui";

const config: Config = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
};

export default config;
