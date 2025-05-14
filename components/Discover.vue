<template>
  <section class="relative w-full bg-white py-16 px-6 md:px-16">
    <div class="container mx-auto">
      <div class="mx-auto text-center">
        <div class="header">
          <div class="gold-line"></div>
          <h2 class="title">{{ $t("phuketHighlightsTitle") }}</h2>
        </div>

        <div class="grid md:grid-cols-4 gap-0 mt-12">
          <div
            v-for="(area, index) in discoverAreas"
            :key="index"
            class="relative group overflow-hidden mb-5 cursor-pointer"
            @click="toggleActive(index)"
            @mouseenter="toggleActive(index)"
            @mouseleave="toggleActive(null)"
          >
            <!-- รูปภาพ -->
            <img
              :src="area.image"
              :alt="area.title"
              class="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <!-- Overlay สีดำ -->
            <div
              class="absolute inset-0 bg-black/50 transition-opacity duration-500"
              :class="{
                'opacity-100': activeIndex === index || isHovered,
                'opacity-0': activeIndex !== index,
              }"
            ></div>

            <!-- เนื้อหา Overlay -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5"
              :class="{
                'opacity-100': activeIndex === index || isHovered,
                'opacity-0': activeIndex !== index,
              }"
            >
              <p class="area_description leading-relaxed max-w-xs">
                {{ $t(area.description) }}
              </p>

              <button
                v-if="area.buttonText"
                class="mt-6 border-1 border-white hover:bg-white hover:text-black transition buttonText"
                @click.stop="handleClick(area.link)"
              >
                {{ $t(area.buttonText) }}
              </button>
            </div>

            <!-- Title ที่จะหายไปเมื่อ hover -->
            <div
              v-if="area.title"
              class="absolute bottom-5 left-0 right-0 text-white text-center px-5"
              :class="{
                'opacity-0': activeIndex === index || isHovered,
                'opacity-100': activeIndex !== index,
              }"
            >
              <p class="title-name transition-all duration-500">
                {{ $t(area.title) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// นำเข้าภาพ
import image1 from "@/assets/images/V1495116988120200731061847.jpg";
import image2 from "@/assets/images/37GS-chef-5_-6699-1-scaled.webp";
import image3 from "@/assets/images/Rectangle-49.webp";
import image4 from "@/assets/images/Rectangle-50.webp";

const discoverAreas = ref([
  {
    image: image1,
    title: "highlights.bangla.title",
    description: "highlights.bangla.description",
  },
  {
    image: image2,
    title: "highlights.dining.title",
    description: "highlights.dining.description",
  },
  {
    image: image3,
    title: "highlights.shopping.title",
    description: "highlights.shopping.description",
  },
  {
    image: image4,
    title: "highlights.sightseeing.title",
    description: "highlights.sightseeing.description",
  },
]);

const activeIndex = ref(null);

// ฟังก์ชันให้คลิกเพื่อแสดง Overlay บนมือถือ
const toggleActive = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// ฟังก์ชันเปิดลิงก์
const handleClick = (url) => {
  window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-family: "Bodoni Moda", serif;
  font-size: 50px;
  font-weight: 400;
  word-break: break-word;
  color: #52414b;

  @media (max-width: 768px) {
    font-size: 33px;
    padding: 0 1rem;
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

.title-name {
  font-size: 28px;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 23px;
  }
}

.area_description {
  font-size: 18px;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}

.buttonText {
  font-size: 12px;
  font-weight: 100;
  padding: 0.5rem 1rem;
  border-radius: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}
</style>
