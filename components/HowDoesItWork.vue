<script setup>
const howDoesItWork = [
  {
    id: 1,
    icon: "icon-park:local-two",
    header: "Choose anywhere in the world",
    text: "No more compromises! With us, you have an unrivaled selection of cars in one place.",
  },
  {
    id: 2,
    icon: "icon-park:doc-search",
    header: "We'll inspect the car closely",
    text: "A certified mechanic will thoroughly inspect your car. You will decide according to the result after.",
  },
  {
    id: 3,
    icon: "icon-park:delivery",
    header: "We'll deliver it to your home",
    text: "We arrange all the paperwork, registration and delivery. All you need to do is enjoy your new car.",
  },
];
</script>

<template>
  <div class="mb-20 drop-shadow-md">
    <h1 class="text-4xl font-bold text-white mb-5">How does it work</h1>
    <div class="flex flex-col lg:flex-row gap-5">
      <div
        v-for="item in howDoesItWork"
        :key="item.id"
        style="background-color: rgba(55, 65, 81, 0.7)"
        class="rounded-xl shadow-lg p-5"
      >
        <Icon :name="item.icon" size="5rem" class="mb-2" />
        <p class="text-white text-2xl font-semibold mb-3">
          {{ item.header }}
        </p>
        <p class="text-slate-300 text-left">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
