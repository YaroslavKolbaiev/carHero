<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const { supabaseStorageUrl } = useRuntimeConfig();

const { data } = await useFetch(`/api/cars`);

const breakpoints = {
  0: {
    itemsToShow: 1,
    itemsToScroll: 1,
  },
  700: {
    itemsToShow: 2,
    itemsToScroll: 2.5,
  },
  1024: {
    itemsToShow: 3,
    itemsToScroll: 3,
  },
};
</script>

<template>
  <carousel :breakpoints="breakpoints">
    <slide v-for="slide in data" :key="slide.id">
      <div class="border-4 border-transparent">
        <nuxt-img
          class="aspect-video object-cover w-full"
          :src="`${supabaseStorageUrl}${slide.image}`"
          :alt="slide.name"
          loading="lazy"
          placeholder="/car.png"
        />
        <div
          @click="navigateTo(`/car/${slide.name}-${slide.id}`)"
          class="p-5 text-center text-gray-200 bg-gray-700 lg:text-2xl cursor-pointer"
        >
          <p>{{ slide.name }}</p>
          <hr class="my-3" />
          <p class="capitalize">{{ slide.city }}</p>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation>
        <template #next>
          <span>
            <Icon
              name="material-symbols:arrow-circle-right"
              class="bg-slate-50 rounded-full"
            />
          </span>
        </template>
        <template #prev>
          <span>
            <Icon
              name="material-symbols:arrow-circle-left-rounded"
              class="bg-slate-50 rounded-full"
            />
          </span>
        </template>
      </navigation>
    </template>
  </carousel>
</template>
