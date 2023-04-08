<script setup lang="ts">
import { AllCars } from "~~/types/AllCars";

const { supabaseStorageUrl } = useRuntimeConfig();
type Props = {
  currentCars: AllCars[];
};

const props = defineProps<Props>();
</script>

<template>
  <div v-for="car in currentCars" :key="car.id" class="shadow-xl rounded-xl">
    <nuxt-img
      class="aspect-video object-cover rounded-t-xl xl:h-64 h-52 w-full"
      :src="`${supabaseStorageUrl}${car.image}`"
      :alt="car.name"
      loading="lazy"
      placeholder="/car.png"
    />
    <p
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
      class="p-5 text-center text-gray-200 text-2xl bg-gray-700 rounded-b-xl cursor-pointer"
    >
      {{ car.name }} | <span class="capitalize">{{ car.city }}</span>
    </p>
  </div>
</template>
