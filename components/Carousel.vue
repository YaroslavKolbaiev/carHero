<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const { supabaseStorageUrl } = useRuntimeConfig();

const { data } = await useFetch(`/api/cars`);

const breakpoints = {
  0: {
    itemsToShow: 1,
    itemsToScroll: 1,
    // snapAlign: "center",
  },
  700: {
    itemsToShow: 2,
    itemsToScroll: 2.5,
    // snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    itemsToScroll: 3,
    // snapAlign: "start",
  },
};
</script>

<template>
  <carousel :breakpoints="breakpoints">
    <slide v-for="slide in data" :key="slide.id">
      <nuxt-img
        class="aspect-video object-cover w-full"
        :src="`${supabaseStorageUrl}${slide.image}`"
        :alt="slide.name"
        loading="lazy"
        placeholder="/car.png"
      />
    </slide>

    <template #addons>
      <navigation>
        <template #next>
          <span class="text-white"> >> </span>
        </template> </navigation
      >>
    </template>
  </carousel>
</template>
