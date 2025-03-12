<script setup lang="ts">
import { ref } from "vue";

import icon1 from "@/assets/images/Untitled-2.webp";
import icon2 from "@/assets/images/Untitled-1-01-1024x1024.webp";
import icon3 from "@/assets/images/Untitled-1-02-1024x1024.webp";
import icon4 from "@/assets/images/icon-1.webp";

const services = ref([
  {
    icon: icon1,
    title: "24/7 Reception",
    description:
      "Our dedicated Reception service is on hand around the clock to help you get the best from your stay.",
  },
  {
    icon: icon2,
    title: "Secure, Reliable WiFi",
    description:
      "Secure, fast WiFi is available in all rooms of the apartments, allowing you to get work done and take part in meetings.",
  },
  {
    icon: icon3,
    title: "Free Luggage Drop-Off",
    description:
      "Never too early, nor too late to arrive; we'll keep your luggage.",
  },
  {
    icon: icon4,
    title: "Complimentary Housekeeping",
    description: "Your home cleaned every 4 nights you stay with us.",
  },
]);
</script>

<template>
  <section class="lifestyle-section mx-auto py-50">
    <div class="container">
      <div class="header">
        <div class="gold-line"></div>
        <h2 class="title">Lifestyle Serviced Residences</h2>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
        >
          <div class="icon-wrapper">
            <img :src="service.icon" alt="" />
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.lifestyle-section {
  background: url("@/assets/images/texture-1.webp") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.container {
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.gold-line {
  width: 15%;
  height: 2px;
  background: #b59771;
  margin: 1rem auto 2rem;
  @media (max-width: 768px) {
    width: 120px;
  }
}

.title {
  color: #ffffff;
  font-family: "Bodoni Moda", serif;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 0 5rem;
  }
}

.service-card {
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto 1rem;

  @media (max-width: 768px) {
    width: 90px;
  }
}

.service-icon {
  font-size: 3rem;
  color: #b29982;
}

.service-title {
  font-size: 20px;
  font-weight: 200;

  @media (max-width: 768px) {
    font-weight: 100;
    padding: 0 2rem;
    font-size: 27px;
  }
}

.service-description {
  color: #ffffff;
  font-size: 14px;
  font-weight: 100;
  line-height: 2em;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}
</style>
