<template>
  <header :class="{ scrolled: isScrolled }" class="header">
    <div
      class="container desktop-header max-w-7xl mx-auto px-6"
      v-if="!isMobile"
    >
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-5">
          <img
            style="width: 41px"
            src="@/assets/images/Phone-icon-01.svg"
            alt=""
          />
          <div class="text-left font-roboto">
            <p class="fs-9 fw-300">{{ t("callUs") }}</p>
            <p class="fs-9 fw-500 flex items-center">
              <a href="tel:+66614055575" class="hover:text-blue-500">
                (+66) 61 405 5575
              </a>
              <a
                href="https://wa.me/66614055575"
                target="_blank"
                class="hover:text-green-500 ml-2"
              >
                <img
                  src="@/assets/images/WhatsApp.webp"
                  style="width: 25px"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>

        <div class="text-center">
          <img
            src="@/assets/images/LOGOMoonbeachvillaBlack.svg"
            alt="37GS Logo"
            class="mx-auto img-white"
            style="width: 37%"
          />
        </div>

        <div class="flex items-center gap-5">
          <div class="text-right font-roboto">
            <p class="fs-9 fw-300">{{ t("emailUs") }}</p>
            <p class="fs-9 fw-500">
              <a
                href="mailto:contact.moonbeachvilla@gmail.com"
                class="hover:text-blue-500"
                >contact.moonbeachvilla@gmail.com
              </a>
            </p>
          </div>
          <i style="font-size: 40px" class="pi pi-envelope text-[#EEE3C3]"></i>
        </div>
      </div>
    </div>

    <nav :class="{ 'fixed-nav': isScrolled }" class="nav-bar" v-if="!isMobile">
      <div class="container max-w-6xl px-10 mx-auto font-roboto">
        <ul class="nav-links">
          <li v-for="item in menuItems" :key="item.path">
            <NuxtLink
              class="text-[#EEE3C3] fw-500 mr-10"
              style="padding: 10px 0"
              :to="item.path"
              active-class="active"
            >
              <span class="px-12">
                {{ item.label }}
              </span>
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-right">
          <button style="margin: 17px 0" class="book-now">
            <a href="tel:+66614055575">
              {{ t("bookNow") }}
            </a>
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>

    <div class="mobile-header" v-if="isMobile">
      <div
        style="border-bottom: 1px solid #eee3c3"
        class="top-section mb-6 px-5"
        :class="{ 'fixed-mobile': isScrolled }"
      >
        <div
          class="grid grid-cols-2 gap-0 flex flex-col items-center justify-center w-full py-6 px-1"
        >
          <div class="logo">
            <img
              src="@/assets/images/LOGOMoonbeachvillaBlack.svg"
              alt="37GS Logo"
              style="width: 60%"
              class="img-white"
            />
          </div>
          <div class="icons text-end px-10">
            <i
              class="pi pi-bars text-[#EEE3C3]"
              style="cursor: pointer; font-size: 1.8rem"
              @click="toggleMenu"
            ></i>
          </div>
        </div>

        <div v-if="mobileMenu" class="mobile-menu">
          <ul>
            <li
              class="my-3 text-start text-[#EEE3C3] text-xs mb-10"
              v-for="item in menuItems"
              :key="item.path"
            >
              <NuxtLink :to="item.path" class="font-roboto">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
      <div class="mobile-contact-info px-12 py-5">
        <div class="flex items-center gap-5">
          <img
            style="width: 28px"
            src="@/assets/images/Phone-icon-01.svg"
            alt=""
          />
          <div class="text-left font-roboto">
            <p class="fs-7 text-[#FFFFFF] fw-300">{{ t("callUs") }}</p>
            <p class="fs-8 text-[#FFFFFF] fw-400 flex items-center">
              <a href="tel:+442081583244" class="hover:text-blue-500">
                +44 (0)20 8158 3244
              </a>
              <a
                href="https://wa.me/66614055575"
                target="_blank"
                class="hover:text-green-500 ml-2"
              >
                <img
                  src="@/assets/images/WhatsApp.webp"
                  style="width: 25px"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <i
            style="width: 28px"
            class="pi pi-envelope text-[#EEE3C3] fs-12"
          ></i>
          <div class="text-left font-roboto">
            <p class="fs-7 text-[#FFFFFF] fw-300">{{ t("emailUs") }}</p>
            <p class="fs-8 text-[#FFFFFF] fw-400">
              <a
                href="mailto:contact.moonbeachvilla@gmail.com"
                class="hover:text-blue-500"
                >contact.moonbeachvilla@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="px-12">
        <button style="margin: 2px 0 10px 0" class="book-now">
          <a href="tel:+66614055575">
            {{ t("bookNow") }}
          </a>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const mobileMenu = ref(false);
const isScrolled = ref(false);
const isMobile = ref(false);
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const menuItems = computed(() => {
  const get = (key: string) => {
    const val = t(key);
    return typeof val === "string"
      ? val.charAt(0).toUpperCase() + val.slice(1)
      : val;
  };

  return [
    { label: get("home"), path: "/" },
    { label: get("gallery"), path: "/gallery" },
    { label: get("contact"), path: "/contact" },
  ];
});

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  handleResize();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

.header {
  color: white;
  background: #53414c;
  text-align: center;
  transition: all 0.3s;
  position: relative;
}

.desktop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0px;
}

.contact-info,
.mobile-contact-info {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
  color: #eee3c3;
}

.nav-bar {
  border-top: 1px solid #eee3c3;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar.fixed-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #53414c;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 45px;
}

.book-now {
  background: #eee3c3;
  color: #52414b;
  font-weight: 400;
  width: 100%;
  padding: 8px 24px;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}

.mobile-header {
  display: flex;
  flex-direction: column;
  line-height: 15px;
}

.mobile-menu {
  background: #53414c;
  padding: 20px;
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  text-align: start;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.fixed-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #53414c;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

a.active {
  border-top: 3px solid #eee3c3;
}

.img-white {
  filter: invert(100%) brightness(1000%);
}
</style>
