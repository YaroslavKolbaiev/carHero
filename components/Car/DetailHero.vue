<script setup lang="ts">
import { Car } from "~~/types/Car";

type Props = {
  selectedCar: Car;
};

const props = defineProps<Props>();

const emit = defineEmits(["deleteCar"]);
const { supabaseStorageUrl } = useRuntimeConfig();
</script>

<template>
  <div class="mt-10">
    <nuxt-img
      :src="`${supabaseStorageUrl}${selectedCar.image}`"
      width="100%"
      :alt="selectedCar.name"
      preload
    />
    <h1 class="mt-10 text-4xl">{{ selectedCar.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ selectedCar.seats }}</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ selectedCar.miles }} miles</p>
      </div>
      <div>
        <p
          @click="emit('deleteCar', selectedCar.id)"
          class="font-bold text-2xl"
        >
          ${{ selectedCar.price }}
        </p>
      </div>
    </div>
  </div>
</template>
