<template>
  <section
    class="relative w-full h-[450px] md:h-[400px] flex items-center justify-center text-white text-center"
    :style="{ backgroundImage: `url(${contactBg})` }"
    style="
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="absolute bottom-10 left-0 right-0 text-center z-10">
      <h2 class="title">Contact Us</h2>
      <div class="w-20 h-[1.5px] bg-[#B59771] mt-2 mx-auto"></div>
    </div>
  </section>

  <section class="bg-white py-16 px-6 md:px-16">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <div
        class="text-[#53414c] flex flex-col items-start justify-center address"
      >
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
              class="hover:text-green-500 ml-10"
            >
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

      <div>
        <div class="text-center">
          <h2 class="title text-[#52414B]">Send Us a Message</h2>
          <div class="gold-line"></div>
        </div>

        <form
          @submit.prevent="submitForm"
          class="grid gap-4 md:grid-cols-2 mt-10"
        >
          <!-- First Name -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700">First Name</label>
            <InputText
              v-model="form.firstName"
              placeholder="Enter your first name"
              class="p-inputtext-lg custom-input"
            />
            <Message
              v-if="errors.firstName"
              severity="error"
              size="small"
              variant="simple"
              >{{ errors.firstName }}</Message
            >
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700"
              >Email <span class="text-red-500">*</span></label
            >
            <InputText
              v-model="form.email"
              placeholder="Enter your email"
              class="p-inputtext-lg custom-input"
            />
            <Message
              v-if="errors.email"
              severity="error"
              size="small"
              variant="simple"
              >{{ errors.email }}</Message
            >
          </div>

          <!-- Phone Number -->
          <div class="flex flex-col gap-1 md:col-span-2">
            <label class="text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <InputText
              v-model="form.phone"
              placeholder="Enter your phone number"
              class="p-inputtext-lg custom-input"
            />
          </div>

          <!-- Check-in Date -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700"
              >Check-in Date</label
            >
            <Calendar
              v-model="form.checkInDate"
              placeholder="Select check-in date"
              showIcon
              class="custom-calendar"
              :pt="{
                root: 'w-full',
                input:
                  'bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[#ff7a59]',
                dropdownButton:
                  'bg-white text-gray-700 border border-gray-300 p-2 rounded-md',
              }"
            />
          </div>

          <!-- Check-out Date -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700"
              >Check-out Date</label
            >
            <Calendar
              v-model="form.checkOutDate"
              placeholder="Select check-out date"
              showIcon
              class="custom-calendar"
              :pt="{
                root: 'w-full',
                input:
                  'bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[#ff7a59]',
                dropdownButton:
                  'bg-white text-gray-700 border border-gray-300 p-2 rounded-md',
              }"
            />
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-1 md:col-span-2">
            <label class="text-sm font-medium text-gray-700">Message</label>
            <Textarea
              v-model="form.message"
              rows="4"
              placeholder="Enter your message"
              class="p-inputtext-lg custom-input"
            />
          </div>

          <!-- Submit Button -->
          <div class="md:col-span-2">
            <Button label="Submit" class="p-button-lg custom-button" />
          </div>
        </form>
      </div>
    </div>
  </section>

  <section
    class="relative bg-dark-pattern text-white py-16 px-6 md:px-16 text-center"
  >
    <div class="max-w-5xl mx-auto">
      <!-- Title -->
      <div class="mb-6">
        <h2 class="title my-30">Where to find us</h2>
        <div class="gold-line mx-auto mt-2"></div>
      </div>

      <!-- Map -->
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

<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";

import { ref } from "vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Message from "primevue/message";

import contactBg from "@/assets/images/Contact-us.webp";

useHead({
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact Us",
    },
    {
      name: "keywords",
      content: "moonresidences,Hotel",
    },
  ],
});

const router = useRouter();

const form = ref({
  firstName: "",
  email: "",
  phone: "",
  checkInDate: null,
  checkOutDate: null,
  message: "",
});

const errors = ref({});

const validateForm = () => {
  errors.value = {};
  if (!form.value.firstName) {
    errors.value.firstName = "First name is required";
  }
  if (!form.value.email) {
    errors.value.email = "Email is required";
  }
};

const submitForm = () => {
  validateForm();
  if (Object.keys(errors.value).length === 0) {
    alert("Form submitted successfully!");
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-family: "Bodoni Moda", serif;
  font-size: 50px;
  font-weight: 400;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 0 3rem;
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
.custom-input {
  width: 100%;
  padding: 10px;
  background: #f6f8fa;
  border: 1px solid #d1d5db;
  border-radius: 0px !important;
}

.custom-button {
  background: #ff7a59 !important;
  border-color: #ff7a59 !important;
  color: #ffffff !important;
  font-size: 16px;
  font-weight: bold;
  padding: 0.4rem 1rem;
  border-radius: 0px !important;
}

.custom-button:hover {
  background: #e6694f !important;
  border-color: #e6694f !important;
}

.custom-calendar {
  width: 100%;
}

.custom-calendar :deep(.p-inputtext) {
  background: #f6f8fa !important;
  color: #333 !important;
  border: 1px solid #d1d5db !important;
  border-radius: 0px !important;
}

.custom-calendar :deep(.p-button) {
  background: white !important;
  border-color: #d1d5db !important;
  color: #333 !important;
}

.custom-calendar :deep(.p-button:hover) {
  background: #f6f6f6 !important;
}

.bg-dark-pattern {
  background: url("@/assets/images/texture-1.webp");
  background-size: cover;
  background-position: center;
}

.address {
  max-width: 400px;
  @media (max-width: 768px) {
    padding: 0rem 0;
  }

  li {
    line-height: 2rem;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 0.5rem;
    word-break: break-word;
  }
}
</style>
