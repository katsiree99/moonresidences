<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

const { locale } = useI18n();
const currentLang = ref<"en" | "th">(locale.value as "en" | "th");

onMounted(() => {
  const saved = localStorage.getItem("lang") as "en" | "th";
  if (saved === "en" || saved === "th") {
    locale.value = saved;
    currentLang.value = saved;
  }
});

const toggleLang = () => {
  const next = currentLang.value === "en" ? "th" : "en";
  currentLang.value = next;
  locale.value = next;
  localStorage.setItem("lang", next);
};
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- EN Label -->
    <span
      class="text-sm font-bold transition-colors"
      :class="currentLang === 'en' ? 'text-[#EEE3C3]' : 'text-gray-400'"
    >
      EN
    </span>

    <!-- Switch container -->
    <div
      class="relative w-[66px] h-[34px] bg-white rounded-full border border-[#ddd] shadow-md cursor-pointer transition-all duration-300"
      @click="toggleLang"
    >
      <!-- Moving circle with flag -->
      <div
        class="absolute top-[4px] left-[4px] w-[26px] h-[26px] rounded-full bg-white shadow transition-all duration-300"
        :class="currentLang === 'th' ? 'translate-x-[28px]' : 'translate-x-0'"
      >
        <img
          :src="`/flags/${currentLang}.png`"
          class="w-full h-full object-cover rounded-full"
          alt="flag"
        />
      </div>
    </div>

    <!-- TH Label -->
    <span
      class="text-sm font-bold transition-colors"
      :class="currentLang === 'th' ? 'text-[#EEE3C3]' : 'text-gray-400'"
    >
      TH
    </span>
  </div>
</template>
