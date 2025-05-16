<template>
  <section
    class="relative w-full h-[450px] md:h-[400px] flex items-center justify-center text-white text-center"
    :style="{ backgroundImage: `url(${contactBg})` }"
    style="
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="absolute bottom-10 left-0 right-0 text-center z-10">
      <h2 class="title">Gallery</h2>
      <div class="w-20 h-[1.5px] bg-[#a7d8de] mt-2 mx-auto"></div>
    </div>
  </section>

  <section class="bg-white py-16 px-6 md:px-16">
    <div class="min-h-screen bg-gray-100 py-10">
      <div class="container mx-auto px-4">
        <div class="grid sm:grid-cols-3 md:grid-cols-3 gap-4 my-40">
          <div
            v-for="(img, index) in visibleImages"
            :key="img"
            class="break-inside-avoid overflow-hidden rounded shadow hover:scale-[1.02] transition-transform cursor-pointer"
            @click="openLightbox(index)"
          >
            <div class="aspect-[4/2] overflow-hidden">
              <img
                :src="`/images/gallery/villa_patong/${img}`"
                loading="lazy"
                class="w-full object-cover rounded"
                :alt="img"
              />
            </div>
          </div>
        </div>

        <div ref="scrollTrigger" class="text-center mt-6 text-gray-500">
          <span v-if="isLoading">Loading more...</span>
        </div>

        <vue-easy-lightbox
          :visible="visible"
          :imgs="lightboxImages"
          :index="lightboxIndex"
          @hide="visible = false"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import contactBg from "/images/gallery/villa_patong/KALIMVILLA-77.jpg";

useHead({
  title: "Gallery",
  meta: [
    {
      name: "description",
      content: "Gallery",
    },
    {
      name: "keywords",
      content: "Moon Beach, Villa Patong",
    },
  ],
});
const allImages = ref<any[]>([
  "KALIMVILLA-1.jpg",
  "KALIMVILLA-2.jpg",
  "KALIMVILLA-5.jpg",
  "KALIMVILLA-7.jpg",
  "KALIMVILLA-17.jpg",
  "KALIMVILLA-19.jpg",
  "KALIMVILLA-24.jpg",
  "KALIMVILLA-29.jpg",
  "KALIMVILLA-30.jpg",
  "KALIMVILLA-34.jpg",
  "KALIMVILLA-42.jpg",
  "KALIMVILLA-52.jpg",
  "KALIMVILLA-55.jpg",
  "KALIMVILLA-58.jpg",
  "KALIMVILLA-61.jpg",
  "KALIMVILLA-63.jpg",
  "KALIMVILLA-65.jpg",
  "KALIMVILLA-75.jpg",
  "KALIMVILLA-76.jpg",
  "KALIMVILLA-77.jpg",
  "KALIMVILLA-83.jpg",
  "KALIMVILLA-87.jpg",
  "KALIMVILLA-90.jpg",
  "KALIMVILLA-97.jpg",
  "KALIMVILLA-98.jpg",
  "KALIMVILLA-101.jpg",
  "KALIMVILLA-102.jpg",
  "KALIMVILLA-109.jpg",
  "KALIMVILLA-111.jpg",
  "KALIMVILLA-114.jpg",
  "KALIMVILLA-117.jpg",
  "KALIMVILLA-119.jpg",
  "KALIMVILLA-136.jpg",
  "KALIMVILLA-138.jpg",
  "KALIMVILLA-139.jpg",
  "KALIMVILLA-142.jpg",
  "KALIMVILLA-143.jpg",
  "KALIMVILLA-145.jpg",
  "KALIMVILLA-146.jpg",
  "KALIMVILLA-148.jpg",
  "KALIMVILLA-149.jpg",
  "KALIMVILLA-152.jpg",
  "KALIMVILLA-153.jpg",
  "KALIMVILLA-165.jpg",
  "KALIMVILLA-169.jpg",
  "KALIMVILLA-172.jpg",
  "KALIMVILLA-173.jpg",
  "KALIMVILLA-178.jpg",
  "KALIMVILLA-181.jpg",
  "KALIMVILLA-182.jpg",
  "KALIMVILLA-183.jpg",
  "KALIMVILLA-184.jpg",
  "KALIMVILLA-185.jpg",
  "KALIMVILLA-186.jpg",
  "KALIMVILLA-187.jpg",
  "KALIMVILLA-190.jpg",
  "KALIMVILLA-192.jpg",
]);

const nextPageToken = ref("");
const page = ref(1);
const imagesPerPage = 16;
const isLoading = ref(false);
const scrollTrigger = ref<HTMLElement | null>(null);

const visibleImages = computed(() =>
  allImages.value.slice(0, page.value * imagesPerPage)
);

const lightboxImages = computed(() =>
  allImages.value.map((img) => `/images/gallery/villa_patong/${img}`)
);

const visible = ref(false);
const lightboxIndex = ref(0);
const openLightbox = (index: number) => {
  lightboxIndex.value = index;
  visible.value = true;
};

const loadMore = () => {
  if (isLoading.value) return;
  isLoading.value = true;
  setTimeout(() => {
    page.value++;
    isLoading.value = false;
  }, 1000);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (visibleImages.value.length < allImages.value.length) {
          loadMore();
        }
      }
    },
    { threshold: 1 }
  );

  if (scrollTrigger.value) {
    observer.observe(scrollTrigger.value);
  }
});
</script>

<script lang="ts">
export default {
  components: {
    VueEasyLightbox,
  },
};
</script>

<style lang="scss" scoped>
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
.gold-line {
  width: 15%;
  height: 2px;
  background: #a7d8de;
  margin: 1rem auto 2rem;
  @media (max-width: 768px) {
    width: 120px;
  }
}
</style>
