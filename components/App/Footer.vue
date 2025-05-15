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
              <a href="tel:+66614055575" class="hover:text-blue-500">
                <span class="text-lg mr-10">📞</span>
                (+66) 61 405 5575
              </a>
              <a
                href="https://api.whatsapp.com/message/XZMZJWGWK4FAO1"
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
                href="mailto:contact.moonbeachvilla@gmail.com"
                class="hover:text-blue-500"
              >
                <span class="text-lg mr-10">✉️</span>
                contact.moonbeachvilla@gmail.com
              </a>
            </li>

            <li class="flex items-center text-[#54595f] c-pointer">
              <a
                href="https://line.me/R/ti/p/@613cxrry"
                target="_blank"
                class="flex hover:text-blue-500"
              >
                <span class="mr-6">
                  <img
                    src="@/assets/images/line-logo.png"
                    style="width: 25px"
                  />
                </span>
                @moonbeachvilla
              </a>
            </li>

            <li class="flex items-center text-[#54595f] c-pointer">
              <a
                href="https://www.facebook.com/people/Moon-Beach-Villa-Patong/61574416492308/"
                target="_blank"
                class="hover:text-blue-500"
              >
                <i class="pi pi-facebook fs-13 mr-6"></i>
                Moon Beach Villa Patong
              </a>
            </li>

            <li class="flex items-center text-[#54595f] c-pointer">
              <a
                href="https://www.instagram.com/moonbeachvilla/"
                target="_blank"
                class="hover:text-blue-500"
              >
                <i class="pi pi-instagram fs-13 mr-6"></i>
                moonbeachvilla
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center space-x-6 text-[#53414c] mb-8 mt-20">
          <div class="transition">
            <a
              href="https://line.me/R/ti/p/@613cxrry"
              target="_blank"
              rel="noopener"
            >
              <!-- <i class="pi pi-line fs-16"></i> -->
              <img src="@/assets/images/line-logo.png" style="width: 30px" />
            </a>
          </div>
          <div class="transition">
            <a
              href="https://www.facebook.com/people/Moon-Beach-Villa-Patong/61574416492308/"
              target="_blank"
              rel="noopener"
            >
              <i class="pi pi-facebook fs-16"></i>
            </a>
          </div>
          <div class="transition">
            <a
              href="https://www.instagram.com/moonbeachvilla/"
              target="_blank"
              rel="noopener"
            >
              <i class="pi pi-instagram fs-16"></i>
            </a>
          </div>

          <div class="transition">
            <a href="tel:+66614055575" target="_blank" rel="noopener">
              <i class="pi pi-whatsapp fs-16"></i>
            </a>
          </div>
        </div>

        <div
          class="xl:flex justify-center space-x-6 text-sm mb-10 text-center font-roboto"
        >
          <div class="text-[#53414c] transition fs-10">Terms & Conditions</div>
          <div class="text-[#53414c] transition fs-10">Cookie Policy</div>
        </div>

        <div class="font-roboto fs-10 text-gray-500 text-center mt-20">
          © 2025
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
