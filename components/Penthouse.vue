<template>
  <section class="penthouse-section w-full bg-white relative">
    <div class="relative overflow-hidden shadow-lg img">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/banner-penthouse_1.jpg"
          alt="The Penthouse"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30"></div>
      </div>

      <div
        class="relative text-center text-white z-10 flex flex-col items-center justify-center h-full"
      >
        <h1 class="title">The Penthouse</h1>
        <button class="bg-[#c4a47c] transition font-roboto btn-virtual">
          Virtual Tour
        </button>
      </div>
    </div>
    <div class="container">
      <div class="max-w-7xl relative mx-auto text-center section-1">
        <h2 class="italic">
          “THE PINNACLE OF LONDON LIVING. ELEVATES EVERY SINGLE OCCASION TO
          SOMETHING TRULY MEMORABLE.”
        </h2>

        <div class="max-w-5xl mx-auto">
          <div
            class="grid md:grid-cols-2 gap-8 text-gray-700 description leading-relaxed text-left"
          >
            <p>
              This exclusive residence embraces grand proportions rarely seen in
              Central London. A one-of-a-kind penthouse crowns 37 Golden Square,
              offering an uncompromising level of specification and remarkable
              open spaces. Arranged over three floors and with two private
              terraces, the penthouse is a most premium address within the
              London market.
            </p>
            <p>
              Private lift access within the residences offers guests added
              privacy and security. The penthouse ground floor provides a
              peaceful oasis with its master suite and two further en-suite
              bedrooms. The first floor is a magical backdrop for social
              interaction – perfect for grand celebrations. Watch London’s
              dramatically changing sky from your own art gallery.
            </p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 features-section">
        <div
          v-for="(image, index) in imageGrid"
          :key="index"
          class="text-center"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-80 object-cover shadow-lg"
          />
          <p class="mt-12 fs-9 text-gray-600 hidden xl:!grid">
            {{ image.caption }}
          </p>
        </div>
      </div>

      <div class="mx-auto mt-10 text-center">
        <blockquote
          class="text-lg max-w-3xl mx-auto relative text-gray-300 leading-relaxed"
        >
          <span class="relative top-10 text-[#c4a47c] text-9xl">“</span>
          <p class="vibe-private">
            The vibe is hotel-meets-private members’ club.
          </p>
        </blockquote>

        <div class="mt-6">
          <img
            src="@/assets/images/Standard-logo-scaled.webp"
            alt="The Standard"
            class="mx-auto the-standard"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import image1 from "@/assets/images/section-penthouse_1.jpg";
import image2 from "@/assets/images/section-penthouse_2.jpg";
import image3 from "@/assets/images/section-penthouse_3.jpg";

const imageGrid = ref([
  {
    src: image1,
    alt: "Penthouse Living Area",
    caption: "Penthouse Living Area",
  },
  {
    src: image2,
    alt: "Penthouse Outdoor Space",
    caption: "Penthouse Outdoor Space",
  },
  {
    src: image3,
    alt: "Penthouse Master Bedroom",
    caption: "Penthouse Master Bedroom",
  },
]);
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  color: #404040;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5em;
}
.penthouse-section {
  background: #ffffff;
  text-align: center;
  background-image: url("@/assets/images/brush-stroke-1.webp");

  background-position: center right;
  background-repeat: no-repeat;
  background-size: 26% auto;
  padding: 8rem 9rem;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  .title {
    font-family: "Bodoni Moda", serif;
    font-size: 50px;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  .img {
    height: 100vh;
    @media (max-width: 768px) {
      height: 45vh;
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}

p.vibe-private {
  color: #52414b;
  font-family: "Bodoni Moda", serif;
  font-size: 30px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 25px;
    padding: 0 3rem;
    color: #54595f;
    line-height: 50px;
  }
}

.btn-virtual {
  font-size: 20px;
  font-weight: 400;
  padding: 0.9rem 2rem;
  border-radius: 3px;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.5rem 1.5rem;
  }
}

.section-1 {
  margin: 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
  h2 {
    font-size: 22px;
    font-weight: 500;
    padding: 3rem 0rem;

    @media (max-width: 768px) {
      padding: 3rem 2rem;
    }
  }
  .description {
    font-size: 16px;
    font-weight: 300;
    padding: 0 3rem;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.features-section {
  margin-top: 5rem;
  @media (max-width: 768px) {
    padding: 0 3.4rem;
  }
}

.the-standard {
  width: 250px;
  @media (max-width: 768px) {
    width: 100px;
  }
}
</style>
