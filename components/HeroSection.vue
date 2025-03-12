<script setup lang="ts"></script>

<template>
  <div>
    <section class="hero-section">
      <div class="background-image"></div>

      <div class="video-background">
        <iframe
          src="https://www.youtube.com/embed/1yakUOhGKm4?autoplay=1&mute=1&loop=1&playlist=1yakUOhGKm4&controls=0&showinfo=0&modestbranding=1&playsinline=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <div class="hero-content">
        <h1>Stay in Luxury</h1>
        <p>WHERE CLASSY MAYFAIR MEETS VIBRANT SOHO</p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/mobile-header.webp") center/cover no-repeat;
  z-index: -2;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-width: 177.78vh;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.video-background iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.hero-content h1 {
  color: #fdfdfd;
  font-family: "Bodoni Moda", serif;
  font-size: 90px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 60px;
  }
}

.hero-content p {
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 3.2px;
}
</style>
