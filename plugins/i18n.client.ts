import { useI18n } from "vue-i18n";

export default defineNuxtPlugin(() => {
  const { locale } = useI18n();
  const savedLang = localStorage.getItem("lang");

  if (savedLang === "en" || savedLang === "th") {
    locale.value = savedLang;
  }
});
