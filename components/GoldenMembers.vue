<template>
  <section class="relative w-full bg-white hidden xl:!grid">
    <div
      class="relative min-h-[200px] md:min-h-[300px] lg:min-h-[300px] overflow-hidden"
    >
      <img
        src="@/assets/images/Gold-Banner.webp"
        alt="Golden Members Club"
        class="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[300px] object-cover object-center"
      />

      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
      >
        <h2 class="title">Golden Members Club</h2>
        <p class="text-xl md:text-2xl mt-2 tracking-widest">COMING SOON</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.tracking-widest {
  letter-spacing: 5.3px;
  font-size: 50px;
  font-weight: 200;
}

.title {
  font-family: "Bodoni Moda", serif;
  font-size: 55px;
  font-weight: 200;
  word-break: break-word;
  margin-bottom: 1rem;
}
</style>
