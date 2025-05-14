<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useI18n, useSwitchLocalePath } from "#imports";
import { useRouter } from "vue-router";

const router = useRouter();
const switchLocalePath = useSwitchLocalePath();
const { messages, locale, setLocale } = useI18n();

const currentLang = ref<"en" | "th">(locale.value as "en" | "th");

onMounted(async () => {
  const saved = localStorage.getItem("lang") as "en" | "th";
  if (saved === "en" || saved === "th") {
    currentLang.value = saved;
    const path = switchLocalePath(saved);
    await setLocale(saved);
    router.push(path);
  }
});

const toggleLang = async () => {
  const next = currentLang.value === "en" ? "th" : "en";
  currentLang.value = next;
  localStorage.setItem("lang", next);

  const newPath = switchLocalePath(next);
  await setLocale(next);
  router.push(newPath);
};
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="text-sm font-bold transition-colors"
      :class="currentLang === 'en' ? 'text-[#EEE3C3]' : 'text-gray-400'"
    >
      EN
    </span>

    <div
      class="relative w-[66px] h-[34px] rounded-full border border-[#ddd] shadow-md cursor-pointer transition-all duration-300 bg-[#53414c]"
      @click="toggleLang"
    >
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

    <span
      class="text-sm font-bold transition-colors"
      :class="currentLang === 'th' ? 'text-[#EEE3C3]' : 'text-gray-400'"
    >
      TH
    </span>
  </div>
</template>
