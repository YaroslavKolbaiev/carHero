<script setup>
import { onClickOutside } from "@vueuse/core";
const isPhone = ref(false);
const isEmail = ref(false);
const phoneRef = ref(null);
const emailRef = ref(null);
onClickOutside(phoneRef, () => (isPhone.value = false), { ignore: [emailRef] });
onClickOutside(emailRef, () => (isEmail.value = false), { ignore: [phoneRef] });
</script>

<template>
  <div class="bg-slate-800 h-24 flex flex-col items-center gap-4 py-2 relative">
    <h4 class="text-white text-2xl">AutoHero</h4>
    <div class="flex gap-5">
      <a href="https://github.com/YaroslavKolbaiev/carHero">
        <Icon
          class="bg-white rounded-full border hover:scale-105 transition duration-200 ease"
          size="1.75rem"
          name="logos:github-icon"
        />
      </a>
      <Icon
        @click="isPhone = true"
        name="ph:phone-light"
        size="1.75rem"
        class="text-white cursor-pointer hover:scale-105 transition duration-200 ease"
      />
      <Icon
        @click="isEmail = true"
        name="ph:envelope-open-light"
        size="1.75rem"
        class="text-white cursor-pointer hover:scale-105 transition duration-200 ease"
      />
    </div>
    <Transition name="fade">
      <div
        ref="phoneRef"
        v-if="isPhone"
        class="absolute bg-white p-2 rounded-lg -top-6"
      >
        +380999139994
      </div>
    </Transition>
    <Transition name="fade">
      <div
        ref="emailRef"
        v-if="isEmail"
        class="absolute bg-white p-2 rounded-lg -top-6"
      >
        yaroslavkolbaiev@gmail.com
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1s ease;
}
</style>
