<script setup>
const props = defineProps({
  listing: Object,
});

const emit = defineEmits(["deleteCar"]);
const { supabaseStorageUrl } = useRuntimeConfig();
</script>

<template>
  <div class="overflow-hidden flex flex-col md:flex-row justify-between mb-4">
    <div class="flex">
      <nuxt-img
        :src="`${supabaseStorageUrl}${listing.image}`"
        :alt="listing.name"
        width="240px"
        loading="lazy"
        placeholder
      />
      <div class="p-3">
        <h1 class="text-lg md:text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex gap-4">
      <NuxtLink
        class="text-blue-400"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        @click="emit('deleteCar', listing.id)"
        class="text-red-500 cursor-pointer"
      >
        Delete
      </p>
    </div>
  </div>
</template>
