<script setup lang="ts">
import { Car } from "~~/types/Car";

const {
  params: { city, make },
} = useRoute();

type Props = {
  car: Car;
  favorite: boolean;
};
const props = defineProps<Props>();

const emit = defineEmits(["favor"]);
const { supabaseStorageUrl } = useRuntimeConfig();
const user = useSupabaseUser();
</script>

<template>
  <div class="shadow border overflow-hidden relative">
    <img
      v-if="user"
      @click="emit('favor', car.id)"
      class="absolute right-1 top-2 w-6 h-6 cursor-pointer"
      :src="favorite ? '/heartFilled.png' : '/heartOutline.png'"
    />
    <div class="flex flex-col md:flex-row">
      <nuxt-img
        :src="`${supabaseStorageUrl}${car.image}`"
        :alt="car.name"
        width="220px"
        loading="lazy"
        placeholder
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1
            @click="navigateTo(`/car/${car.name}-${car.id}`)"
            class="cursor-pointer text-2xl text-blue-700 inline-block"
          >
            {{ car.name }}
          </h1>
          <div class="flex gap-2">
            <p class="text-gray-700 capitalize">
              {{ car.city }}
            </p>
            |
            <p class="text-gray-700">{{ car.miles }} miles</p>
            |
            <p class="text-gray-700">{{ car.seats }} seats</p>
          </div>
        </div>
        <h1 class="mt-auto text-xl">{{ car.price }} USD</h1>
      </div>
    </div>
  </div>
</template>
