<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="container mx-auto px-4">
      <div class="grid sm:grid-cols-3 md:grid-cols-4 gap-4 my-40">
        <div
          v-for="(img, index) in visibleImages"
          :key="img.id"
          class="break-inside-avoid overflow-hidden rounded shadow hover:scale-[1.02] transition-transform cursor-pointer"
          @click="openLightbox(index)"
        >
          <img
            :src="`https://drive.google.com/uc?export=view&id=${img.id}`"
            loading="lazy"
            class="w-full object-cover rounded"
            :alt="img.name"
          />
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

interface DriveImage {
  id: string;
  name: string;
}

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

const allImages = ref<DriveImage[]>([]);
const nextPageToken = ref("");
const page = ref(1);
const imagesPerPage = 10;
const isLoading = ref(false);
const scrollTrigger = ref<HTMLElement | null>(null);

const visibleImages = computed(() =>
  allImages.value.slice(0, page.value * imagesPerPage)
);

const lightboxImages = computed(() =>
  allImages.value.map(
    (img) => `https://drive.google.com/uc?export=view&id=${img.id}`
  )
);

const visible = ref(false);
const lightboxIndex = ref(0);
const openLightbox = (index: number) => {
  lightboxIndex.value = index;
  visible.value = true;
};

const loadImages = async () => {
  if (isLoading.value) return;
  isLoading.value = true;

  const API_KEY = useRuntimeConfig().public.GDRIVE_API_KEY;
  const FOLDER_ID = useRuntimeConfig().public.GDRIVE_FOLDER_ID;

  const query = `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&key=${API_KEY}&fields=files(id,name),nextPageToken&pageSize=10${
    nextPageToken.value ? `&pageToken=${nextPageToken.value}` : ""
  }`;

  const { data } = await useFetch(url);
  const res = data.value as {
    files: DriveImage[];
    nextPageToken?: string;
  };

  if (res.files && Array.isArray(res.files)) {
    allImages.value.push(...res.files);
  }

  nextPageToken.value = res.nextPageToken || "";
  isLoading.value = false;
};

const loadMore = () => {
  if (isLoading.value) return;
  isLoading.value = true;
  setTimeout(() => {
    page.value++;
    isLoading.value = false;
  }, 1000);
};

onMounted(async () => {
  await loadImages();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (visibleImages.value.length < allImages.value.length) {
          loadMore();
        } else if (nextPageToken.value) {
          loadImages();
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
