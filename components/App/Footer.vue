<template>
  <footer class="bg-white py-6">
    <div class="mx-auto flex items-center justify-center hidden xl:!flex">
      <div class="flex-1 border-t border-gray-300"></div>

      <div class="mx-6">
        <img
          src="@/assets/images/LOGOMoonbeachvillacolor.svg"
          alt="37GS Residences"
          class="logo-footer"
        />
      </div>

      <div class="flex-1 border-t border-gray-300"></div>
    </div>

    <div class="mx-auto mb-30 xl:hidden mt-10">
      <div class="flex-1 border-t border-gray-300"></div>

      <div class="mx-6 py-15">
        <img
          src="@/assets/images/LOGOMoonbeachvillacolor.svg"
          alt="37GS Residences"
          class="logo-footer"
        />
      </div>

      <div class="flex-1 border-t border-gray-300"></div>
    </div>

    <div class="max-w-6xl mx-auto relative px-6 md:px-16">
      <div class="container">
        <div class="mb-8 text-left md:text-center">
          <h3 class="text-xl font-serif font-semibold text-[#7a7a7a]">
            CONTACTS
          </h3>
          <ul class="mt-4">
            <li
              class="flex items-center text-[#54595f] c-pointer"
              onclick="window.open('https://maps.app.goo.gl/phQWt93kvV48JfJK9', '_blank')"
            >
              <span class="text-lg mr-10">🏢</span>
              247/3 Kammala Kathu District Phuket 83150. Thailand
            </li>
            <li class="flex items-center text-[#54595f] c-pointer">
              <a href="tel:+442081583244" class="hover:text-blue-500">
                <span class="text-lg mr-10">📞</span>
                +44 (0)20 8158 3244
              </a>
              <a
                href="https://wa.me/442081583244"
                target="_blank"
                class="hover:text-green-500 ml-2 flex items-center"
              >
                <img
                  src="@/assets/images/WhatsApp.webp"
                  style="width: 25px"
                  alt=""
                />
                Chat on WhatsApp
              </a>
            </li>
            <li class="flex items-center text-[#54595f] c-pointer">
              <a
                href="mailto:stay@moonresidences.com"
                class="hover:text-blue-500"
              >
                <span class="text-lg mr-10">✉️</span>
                stay@moonresidences.com
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center space-x-6 text-[#53414c] mb-8 mt-20">
          <div class="hover:text-[#C4A47C] transition">
            <i class="pi pi-facebook fs-16"></i>
          </div>
          <div class="hover:text-[#C4A47C] transition">
            <i class="pi pi-instagram fs-16"></i>
          </div>
          <div class="hover:text-[#C4A47C] transition">
            <i class="pi pi-linkedin fs-16"></i>
          </div>
        </div>

        <div
          class="xl:flex justify-center space-x-6 text-sm mb-10 text-center font-roboto"
        >
          <div class="text-[#53414c] hover:text-[#C4A47C] transition fs-10">
            Terms & Conditions
          </div>
          <div class="text-[#53414c] hover:text-[#C4A47C] transition fs-10">
            Cookie Policy
          </div>
        </div>

        <div class="font-roboto fs-10 text-gray-500 text-center mt-20">
          © 2024
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
h3 {
  font-family: "Bodoni Moda", serif;
  margin-bottom: 1rem;
}

.logo-footer {
  width: 130px;

  @media (max-width: 768px) {
    width: 140px;
    margin: auto;
  }
}

li {
  line-height: 2rem;
  font-weight: 400;
  font-size: 16px;
  word-break: break-word;
}
</style>
