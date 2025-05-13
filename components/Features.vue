<script setup lang="ts">
import { ref } from "vue";

const features = ref([
  {
    icon: "pi pi-map-marker",
    title: "CENTRAL LOCATION </br> 2 MINS FROM PICCADILLY CIRCUS",
  },
  {
    icon: "pi pi-home",
    title: "SPACIOUS RESIDENCES FOR SHORT & </br> EXTENDED STAYS",
  },
  {
    icon: "pi pi-star",
    title: "SETTING THE GOLD </br> STANDARD",
  },
]);
</script>

<template>
  <section class="features-section mx-auto">
    <div class="container">
      <!-- <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 hidden xl:!grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item"
        >
          <i :class="feature.icon" class="feature-icon"></i>
          <h3 class="feature-title fw-400" v-html="feature.title"></h3>
        </div>
      </div> -->
      <p class="description">
        {{ $t("heroDescription") }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.features-section {
  background: white;
  text-align: center;
  padding: 5rem 14rem 5rem 14rem;

  @media (max-width: 768px) {
    padding: 3.4rem;
  }
}

.container {
  margin: 0 auto;
}

.features-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.feature-item {
  text-align: center;
  margin: 0 auto;
}

.feature-icon {
  font-size: 3rem;
  color: #5b4b46;
}

.feature-title {
  color: #b59771;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4em;
  letter-spacing: 2px;
  margin-top: 20px;
}

.feature-subtitle {
  color: #b29982;
  font-size: 0.9rem;
}

.description {
  color: #000000;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: 2px;
  margin: 0rem auto 0 auto;
  max-width: 1050px;
  word-break: break-all;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin: 0rem 0rem 0 0rem;
    letter-spacing: 1.5px;
    font-size: 16px;
    font-weight: 300;
    text-transform: none;
    word-break: normal;
  }
}
</style>
