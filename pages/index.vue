<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import Features from "@/components/Features.vue";
import Lifestyle from "@/components/Lifestyle.vue";
import Accommodation from "@/components/Accommodation.vue";
import Penthouse from "@/components/Penthouse.vue";
import TrustedPartners from "@/components/TrustedPartners.vue";
import PreciousAddress from "@/components/PreciousAddress.vue";
import Discover from "@/components/Discover.vue";
import GoldenMembers from "@/components/GoldenMembers.vue";
import NewsletterSignup from "@/components/NewsletterSignup.vue";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Welcome",
    },
    {
      name: "keywords",
      content: "moonresidences,Hotel",
    },
  ],
});

const router = useRouter();
</script>

<template>
  <HeroSection />
  <Features />
  <Lifestyle />
  <Accommodation />
  <Penthouse />
  <TrustedPartners />
  <PreciousAddress />
  <Discover />
  <GoldenMembers />
  <NewsletterSignup />
</template>

<style scoped lang="scss"></style>
