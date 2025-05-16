<template>
  <section
    class="relative bg-dark-pattern text-white py-50 px-6 md:px-16 text-center"
  >
    <div class="max-w-5xl mx-auto">
      <div class="mb-6">
        <div class="gold-line"></div>
        <h2 class="title">{{ $t("partnersSectionTitle") }}</h2>
      </div>

      <div class="mx-auto relative text-center description">
        <img
          src="@/assets/images/quote.webp"
          alt="quote"
          class="mx-auto quote"
        />
        {{ $t("partnersSectionDescription") }}
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-12 partners-section">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            :class="`partner-logo p_${index}`"
          />
          <p class="text-[#c4a47c] text-2xl">{{ partner.title }}</p>
          <p
            v-if="partner.rating"
            class="text-[#c4a47c] font-bold text-3xl mt-4"
          >
            {{ partner.rating }}
          </p>

          <div
            v-if="partner.subLogos"
            class="grid grid-cols-2 md:grid-cols-2 gap-1 mt-12 items-center p-10"
          >
            <div
              v-for="(sub, i) in partner.subLogos"
              :key="i"
              class="flex justify-center"
            >
              <img :src="sub.logo" :alt="sub.name" class="partner-sublogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import logo1 from "@/assets/images/Agoda_logo.png";
// import logo1_1 from "@/assets/images/luxe-1.webp";
// import logo1_2 from "@/assets/images/Superhost-logo-CMYK-Transparent.webp";
import logo2 from "@/assets/images/Airbnb-logo.png";
import logo3 from "@/assets/images/trip_logo.png";

const partners = ref([
  {
    name: "Agoda.com",
    logo: logo1,
    title: "Rated",
    rating: "9.5 / 10",
  },
  {
    name: "Airbnb.com",
    logo: logo2,
    title: "Rated",
    rating: "9.5 / 10",
  },
  {
    name: "Trip.com",
    logo: logo3,
    title: "Rated",
    rating: "9.5 / 10",
  },
]);
</script>

<style lang="scss" scoped>
.bg-dark-pattern {
  background: url("/images/gallery/IMG_0918.JPG") center/cover no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  padding: 6rem 2rem;
  background-color: rgba(0, 0, 0, 0.54);
}

.gold-line {
  width: 15%;
  height: 2px;
  background: #a7d8de;
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

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 0 5rem;
  }
}

.quote {
  width: 80px;
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 50px;
  }
}

.description {
  font-size: 22px;
  font-weight: 100;
  line-height: 2em;
  padding: 0 9rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
}

.partners-section {
  padding: 2rem 0;
  .bg-white {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: 40vh;
    }
  }
  @media (max-width: 768px) {
    padding: 3.4rem 3rem;
  }
}

.partner-logo {
  width: 240px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 190px;
  }
}
</style>
