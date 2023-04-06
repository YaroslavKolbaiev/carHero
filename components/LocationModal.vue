<script setup lang="ts">
const citySearch = ref("");
const {
  params: { make },
} = useRoute();

const onCitySearch = () => {
  if (!citySearch.value) return;
  if (!isNaN(parseInt(citySearch.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid format",
    });
  }
  navigateTo(`/city/${citySearch.value}/car/${make}`);
  citySearch.value = "";
};
</script>

<template>
  <div
    class="absolute z-30 border shadow p-5 left-1/2 -translate-x-1/2 top-0 bg-white"
  >
    <input v-model="citySearch" type="text" class="border p-1 rounded w-full" />
    <button
      @click="onCitySearch"
      class="bg-blue-400 w-full mt-2 rounded text-white p-1"
    >
      Apply
    </button>
  </div>
</template>
