<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="container mx-auto px-4">
      <div class="grid sm:grid-cols-3 md:grid-cols-4 gap-4 my-40">
        <div
          v-for="(img, index) in visibleImages"
          :key="img"
          class="break-inside-avoid overflow-hidden rounded shadow hover:scale-[1.02] transition-transform cursor-pointer"
          @click="openLightbox(index)"
        >
          <div class="aspect-[4/2] overflow-hidden">
            <img
              :src="`/images/gallery/${img}`"
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
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

useHead({
  title: "Gallery",
  meta: [
    {
      name: "description",
      content: "Gallery",
    },
    {
      name: "keywords",
      content: "moonresidences,Hotel",
    },
  ],
});
const allImages = ref<any[]>([
  "IMG_0896.JPG",
  "IMG_0907.JPG",
  "IMG_0908.JPG",
  "IMG_0963.JPG",
  "IMG_0955.JPG",
  "IMG_0906.JPG",
  "IMG_0647.JPG",
  "IMG_0656.JPG",
  "IMG_0745.JPG",
  "IMG_0635.JPG",
  "IMG_0732.JPG",
  "IMG_0762.JPG",
  "IMG_0733.JPG",
  "IMG_0595.JPG",
  "IMG_0670.JPG",
  "IMG_0918.JPG",
  "IMG_0637.JPG",
  "IMG_0953.JPG",
  "IMG_0501.JPG",
  "IMG_0750.JPG",
  "IMG_0597.JPG",
  "IMG_0392.JPG",
  "IMG_0758.JPG",
  "IMG_0593.JPG",
  "IMG_0698.JPG",
  "IMG_0627.JPG",
  "IMG_0770.JPG",
  "IMG_0902.JPG",
  "IMG_0649.JPG",
  "IMG_0456.JPG",
  "IMG_0367.JPG",
  "IMG_0613.JPG",
  "IMG_0673.JPG",
  "IMG_0631.JPG",
  "IMG_0794.JPG",
  "IMG_0372.JPG",
  "IMG_0387.JPG",
  "IMG_0707.JPG",
  "IMG_0700.JPG",
  "IMG_0459.JPG",
  "IMG_0640.JPG",
  "IMG_0787.JPG",
  "IMG_0584.JPG",
  "IMG_0743.JPG",
  "IMG_0614.JPG",
  "IMG_0375.JPG",
  "IMG_0691.JPG",
  "IMG_0779.JPG",
  "IMG_0368.JPG",
  "IMG_0630.JPG",
  "IMG_0648.JPG",
  "IMG_0684.JPG",
  "IMG_0650.JPG",
  "IMG_0653.JPG",
  "IMG_0502.JPG",
  "IMG_0380.JPG",
  "IMG_0365.JPG",
  "IMG_0872.JPG",
  "IMG_0686.JPG",
  "IMG_0771.JPG",
  "IMG_0600.JPG",
  "IMG_0388.JPG",
  "IMG_0644.JPG",
  "IMG_0638.JPG",
  "IMG_0755.JPG",
  "IMG_0562.JPG",
  "IMG_0508.JPG",
  "IMG_0384.JPG",
  "IMG_0455.JPG",
  "IMG_0576.JPG",
  "IMG_0738.JPG",
  "IMG_0774.JPG",
  "IMG_0588.JPG",
  "IMG_0735.JPG",
  "IMG_0506.JPG",
  "IMG_0571.JPG",
  "IMG_0458.JPG",
  "IMG_0820.JPG",
  "IMG_0469.JPG",
  "IMG_0617.JPG",
  "IMG_0544.JPG",
  "IMG_0610.JPG",
  "IMG_0494.JPG",
  "IMG_0893.JPG",
  "IMG_0717.JPG",
  "IMG_0585.JPG",
  "IMG_0826.JPG",
  "IMG_0786.JPG",
  "IMG_0628.JPG",
  "IMG_0590.JPG",
  "IMG_0548.JPG",
  "IMG_0545.JPG",
  "IMG_0722.JPG",
  "IMG_0619.JPG",
  "IMG_0800.JPG",
  "IMG_0727.JPG",
  "IMG_0621.JPG",
  "IMG_0543.JPG",
  "IMG_0806.JPG",
  "IMG_0449.JPG",
  "IMG_0582.JPG",
  "IMG_0607.JPG",
  "IMG_0516.JPG",
  "IMG_0412.JPG",
  "IMG_0601.JPG",
  "IMG_0799.JPG",
  "IMG_0568.JPG",
  "IMG_0424.JPG",
  "IMG_0422.JPG",
  "IMG_0883.JPG",
  "IMG_0447.JPG",
  "IMG_0642.JPG",
  "IMG_0423.JPG",
  "IMG_0416.JPG",
  "IMG_0482.JPG",
  "IMG_0515.JPG",
  "IMG_0579.JPG",
  "IMG_0538.JPG",
  "IMG_0533.JPG",
  "IMG_0472.JPG",
  "IMG_0379.JPG",
  "IMG_0453.JPG",
  "IMG_0376.JPG",
  "IMG_0815.JPG",
  "IMG_0464.JPG",
  "IMG_0536.JPG",
  "IMG_0466.JPG",
  "IMG_0580.JPG",
  "IMG_0757.JPG",
  "IMG_0430.JPG",
  "IMG_0877.JPG",
  "IMG_0486.JPG",
  "IMG_0394.JPG",
  "IMG_0514.JPG",
  "IMG_0405.JPG",
  "IMG_0489.JPG",
  "IMG_0370.JPG",
  "IMG_0887.JPG",
  "IMG_0499.JPG",
  "IMG_0549.JPG",
  "IMG_0406.JPG",
  "IMG_0518.JPG",
  "IMG_0488.JPG",
  "IMG_0460.JPG",
  "IMG_0720.JPG",
  "IMG_0551.JPG",
  "IMG_0400.JPG",
  "IMG_0507.JPG",
  "IMG_0378.JPG",
  "IMG_0415.JPG",
  "IMG_0467.JPG",
  "IMG_0428.JPG",
  "IMG_0513.JPG",
  "IMG_0399.JPG",
  "IMG_0397.JPG",
  "IMG_0813.JPG",
  "IMG_0484.JPG",
  "IMG_0710.JPG",
  "IMG_0531.JPG",
  "IMG_0403.JPG",
  "IMG_0504.JPG",
  "IMG_0444.JPG",
  "IMG_0410.JPG",
  "IMG_0463.JPG",
  "IMG_0554.JPG",
  "IMG_0409.JPG",
  "IMG_0843.JPG",
  "IMG_0497.JPG",
  "IMG_0864.JPG",
  "IMG_0511.JPG",
  "IMG_0835.JPG",
  "IMG_0539.JPG",
  "IMG_0678.JPG",
  "IMG_0677.JPG",
  "IMG_0426.JPG",
  "IMG_0475.JPG",
  "IMG_0438.JPG",
  "IMG_0420.JPG",
  "IMG_0831.JPG",
  "IMG_0414.JPG",
  "IMG_0560.JPG",
  "IMG_0522.JPG",
  "IMG_0480.JPG",
  "IMG_0569.JPG",
  "IMG_0517.JPG",
  "IMG_0658.JPG",
  "IMG_0436.JPG",
  "IMG_0419.JPG",
  "IMG_0479.JPG",
  "IMG_0525.JPG",
  "IMG_0471.JPG",
  "IMG_0555.JPG",
  "IMG_0434.JPG",
  "IMG_0478.JPG",
  "IMG_0809.JPG",
  "IMG_0827.JPG",
  "IMG_0558.JPG",
  "IMG_0561.JPG",
  "IMG_0862.JPG",
  "IMG_0895.JPG",
  "IMG_0808.JPG",
  "IMG_0557.JPG",
  "IMG_0362.JPG",
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
  allImages.value.map((img) => `/images/gallery/${img}`)
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
