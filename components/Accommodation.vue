<template>
  <section class="accommodation-section">
    <div class="max-w-6xl mx-auto text-center">
      <div class="gold-line"></div>
      <h2 class="text-4xl font-serif font-bold title mb-4">
        {{ $t("relaxTitle") }}
      </h2>
      <div class="w-20 h-1 bg-gold mx-auto mb-6"></div>
      <p class="max-w-9xl mx-auto section-1">
        {{ $t("relaxSubtitle") }}
      </p>
    </div>

    <div
      class="grid sm:grid-cols-1 md:grid-cols-1 gap-x-12 mt-10 max-w-4xl mx-auto"
    >
      <div>
        <p class="fs-10 fw-100">
          {{ $t("relaxDescription") }}
        </p>
      </div>
      <!-- <div>
        <p class="fs-10 fw-100">
          Sleep well surrounded by fine wallpapers and soft furnishings that
          reflect the woollen and yarn heritage of Golden Square. Plush textiles
          are layered with stylish details to envelop residents in modern-day
          luxe. An oasis of calm and a place to retreat, yet every residence has
          the ability to be utilised as a convivial, welcoming space.
        </p>
      </div> -->
    </div>
  </section>

  <section class="relative bg-dark-pattern">
    <div
      class="relative mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 -mt-15 lg:-mt-40"
    >
      <div class="relative z-10 mb-10">
        <img
          src="@/assets/images/Golden-Sq._-1.jpg"
          alt="Bedroom"
          class="shadow-lg"
        />
      </div>
      <div class="relative z-0 mb-10 hidden md:!grid">
        <img
          src="@/assets/images/Golden-Sq._-2.jpg"
          alt="Living Room"
          class="shadow-lg"
        />
      </div>
    </div>

    <div class="mx-auto relative section-carousel">
      <Carousel
        ref="carousel"
        :value="apartments"
        :numVisible="1"
        :numScroll="1"
        circular
        autoplayInterval="5000"
        :showNavigators="false"
        :showIndicators="false"
      >
        <template #item="{ data }">
          <div class="relative overflow-hidden">
            <img
              :src="data.image"
              alt="Apartment"
              class="w-full h-[500px] object-cover shadow-lg"
            />
            <div
              style="background: #0000008a"
              class="absolute inset-0 flex flex-col justify-center text-white text-left description"
            >
              <div class="fade-slide">
                <h3 class="">
                  {{ $t(data.title) }}
                </h3>

                <!-- <p class="text-lg max-w-4xl leading-relaxed">
                  {{ data.description }}
                </p> -->

                <ul
                  class="space-y-2 text-white text-base leading-relaxed max-w-3xl"
                >
                  <li
                    v-for="key in data.features"
                    :key="key"
                    class="flex items-start gap-2"
                  >
                    <span class="mt-1">•</span>
                    <span>{{ $t(key) }}</span>
                  </li>
                </ul>

                <button
                  class="border-1 border-white bg-[#53414c] text-white transition mt-5 btn-availability"
                >
                  <a href="tel:+66614055575">
                    <i class="pi pi-phone text-lg"></i>
                    CALL 061-405-5575
                  </a>
                </button>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="text-center mt-10">
      <NuxtLink
        to="/layouts"
        class="inline-block border border-white px-16 py-10 bg-[#53414c] text-white transition text-lg fw-400 text-center"
      >
        VIEW ALL LAYOUTS
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Carousel from "primevue/carousel";

import image1 from "@/assets/images/1-Golden-3885-scaled.jpg";
// import image2 from "@/assets/images/2-Golden-3885-scaled.jpg";

const apartments = ref([
  {
    title: "villaFeatures.title",
    features: [
      "villaFeatures.suite",
      "villaFeatures.bathroom",
      "villaFeatures.living",
      "villaFeatures.kitchen",
      "villaFeatures.extras",
    ],
    image: image1,
  },
]);
</script>

<style lang="scss" scoped>
.accommodation-section {
  background-image: url("@/assets/images/apartment-background-1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  color: #404040;
  padding: 5rem 14rem 13rem 14rem;

  @media (max-width: 768px) {
    padding: 3.4rem 0.6rem;
  }
}

.title {
  font-family: "Bodoni Moda", serif;
  font-size: 50px;
  font-weight: 400;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 0 3rem;
  }
}

.section-1 {
  font-size: 22px;
  font-weight: 300;
  line-height: 1.8em;
  margin: 2rem 0;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5rem;
  }
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

.bg-dark-pattern {
  background-image: url("/images/gallery/IMG_0397.JPG");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem 9rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
}

.section-carousel {
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  .description {
    padding: 0 4rem;

    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }
}

.fade-slide {
  animation: fade-slide-up 0.6s ease-out forwards;
  h3 {
    font-size: 32px;
    font-weight: 200;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 17px;
    font-weight: 100;
    margin-bottom: 0.6rem;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
}

.btn-availability {
  font-size: 20px;
  font-weight: 200;
  padding: 0.7rem 2rem;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 200;
  }
}

@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
