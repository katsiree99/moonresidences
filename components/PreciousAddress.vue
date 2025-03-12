<template>
  <section class="relative w-full bg-white py-16 px-6 md:px-16">
    <div class="header">
      <div class="gold-line"></div>
      <h2 class="title">A Precious Address</h2>
    </div>
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div class="description">
          <p>
            The neighbourhood inspires and attracts influential people, thanks
            to its central location. Set at the junction
            <strong
              >where fine art, diplomatic quarters and new media meet, Golden
              Square blends a heritage
            </strong>
            location with modern life!
          </p>
          <p class="mt-4">
            <strong>Soho is known for its diverse entertainment</strong>, from
            theatre to comedy and, of course, vibrant nightlife.
            <strong>Mayfair’s reputation for haute couture</strong>, expert
            tailoring and fine living continues for the pleasure of Golden
            Square residents.
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <iframe
          class="w-full max-w-3xl h-80 shadow-lg rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287.8307386999173!2d98.2921234!3d7.915586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b13b6c587e1%3A0x883172a456ccbff6!2sMoon%20Beach%20Villa%20Patong!5e1!3m2!1sth!2sth!4v1741704565668!5m2!1sth!2sth"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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

.description {
  font-size: 16px;
  color: rgb(64, 64, 64);
  font-weight: 300;

  @media (max-width: 768px) {
    padding: 0 0.6rem;
    font-size: 16px;
  }

  p {
    margin-bottom: 2rem;
  }
}
</style>
