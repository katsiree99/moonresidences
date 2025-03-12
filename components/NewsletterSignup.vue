<template>
  <section class="bg-texture flex items-center justify-center">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <!-- ส่วนข้อความ -->
      <div>
        <h2 class="text-white description">
          Sign up to our <br />
          newsletter for your <br />
          chance to <span class="text-[#C4A57B]">WIN</span> a FREE
          <br />
          two night stay
        </h2>
      </div>

      <div class="mt-6 space-y-4">
        <!-- First Name -->
        <div>
          <label class="block text-white text-sm font-medium mb-1"
            >First name</label
          >
          <input
            type="text"
            class="w-full bg-white text-black p-3 text-lg border-none focus:ring-2 focus:ring-[#C4A57B]"
          />
        </div>

        <!-- Last Name -->
        <div>
          <label class="block text-white text-sm font-medium mb-1"
            >Last name</label
          >
          <input
            type="text"
            class="w-full bg-white text-black p-3 text-lg border-none focus:ring-2 focus:ring-[#C4A57B]"
          />
        </div>

        <!-- Phone Number -->
        <div>
          <label class="block text-white text-sm font-medium mb-1"
            >Phone number</label
          >
          <input
            type="text"
            class="w-full bg-white text-black p-3 text-lg border-none focus:ring-2 focus:ring-[#C4A57B]"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-white text-sm font-medium mb-1"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            type="email"
            class="w-full bg-white text-black p-3 text-lg border-none focus:ring-2 focus:ring-[#C4A57B]"
          />
        </div>

        <!-- Submit Button -->
        <button
          class="bg-[#c09001] text-white font-bold mt-4 hover:bg-[#A68A5B] transition btn-submit font-roboto"
        >
          Sign up for our newsletter
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

const submitForm = () => {
  alert(`Thank you, ${form.value.firstName}! You have signed up.`);
};
</script>

<style lang="scss" scoped>
.bg-texture {
  background-image: url("@/assets/images/texture-1.webp");
  background-size: cover;
  background-position: center;
  padding: 5rem 9rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
}

.description {
  font-size: 45px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 35px;
    text-align: center;
  }
}

.btn-submit {
  font-size: 13px;
  font-weight: 500;
  padding: 0.7rem 2rem;

  @media (max-width: 768px) {
    font-size: 11px;
    text-align: center;
  }
}
</style>
