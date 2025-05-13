<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

if (process.client) {
  const savedLang = localStorage.getItem("lang");
  if (savedLang === "en" || savedLang === "th") {
    locale.value = savedLang;
  }
}
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
