<template>
  <section class="accommodation-section">
    <div class="max-w-6xl mx-auto text-center">
      <div class="gold-line"></div>
      <h2 class="text-4xl font-serif font-bold title mb-4">
        Curated Accommodation
      </h2>
      <div class="w-20 h-1 bg-gold mx-auto mb-6"></div>
      <p class="max-w-9xl mx-auto section-1">
        Boasting a collection of 22 serviced residences, with beautifully
        appointed bedrooms – enhanced by colour and texture. Exquisite marble
        and gilded finishes work in harmony.
      </p>
    </div>

    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 mt-10 max-w-4xl mx-auto hidden xl:!grid"
    >
      <div>
        <p class="fs-10 fw-100">
          Each 1, 2 and 3-bed apartment showcases a bespoke project, with varied
          layouts, kitchen configurations and handmade joinery resulting in
          distinct features. Every space combines enduring contemporary design,
          with practicality, to create truly modern residences. Fit for all
          purposes and enhanced by an intelligent arrangement of space.
        </p>
      </div>
      <div>
        <p class="fs-10 fw-100">
          Sleep well surrounded by fine wallpapers and soft furnishings that
          reflect the woollen and yarn heritage of Golden Square. Plush textiles
          are layered with stylish details to envelop residents in modern-day
          luxe. An oasis of calm and a place to retreat, yet every residence has
          the ability to be utilised as a convivial, welcoming space.
        </p>
      </div>
    </div>
  </section>

  <section class="relative bg-dark-pattern">
    <div
      class="relative mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 -mt-32 lg:-mt-40"
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
        :showNavigators="true"
        :showIndicators="true"
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
                  {{ data.title }}
                </h3>

                <p class="text-lg max-w-4xl leading-relaxed">
                  {{ data.description }}
                </p>

                <button
                  class="border-1 border-white bg-[#53414c] text-white transition mt-5 btn-availability"
                >
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="text-center mt-10">
      <button
        class="border-1 border-white px-16 py-10 bg-[#53414c] text-white transition text-lg fw-400"
      >
        VIEW ALL APARTMENTS
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Carousel from "primevue/carousel";

import image1 from "@/assets/images/1-Golden-3885-scaled.jpg";
import image2 from "@/assets/images/2-Golden-3885-scaled.jpg";

const apartments = ref([
  {
    title: "2-bed Superior Apt 208",
    description:
      "The lovely Golden Square garden is right on your doorstep, and it will allow you to step outside to enjoy a refreshing/unique green space in the heart of town. The area is abundant for all type and range restaurants, as well as for coffee shops and rooftop bars. Carnaby and Regents St are 2-min walk away for keen shoppers.",
    image: image1,
  },
  {
    title: "Luxury Suite 310",
    description:
      "The lovely Golden Square garden is right on your doorstep, and it will allow you to step outside to enjoy a refreshing/unique green space in the heart of town. The area is abundant for all type and range restaurants, as well as for coffee shops and rooftop bars. Carnaby and Regents St are 2-min walk away for keen shoppers.",
    image: image2,
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
  background-image: url("@/assets/images/texture-2.webp");
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
