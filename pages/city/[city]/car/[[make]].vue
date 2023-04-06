<script setup>
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice);
const minPrice = computed(() => route.query.minPrice);
const { cars, refresh } = await useFetchCars(route.params.city, {
  make: route.params.make.toLowerCase(),
  minPrice,
  maxPrice,
});

watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div class="mx-auto container max-w-5xl grow px-4">
    <div v-if="cars" class="mt-32 flex flex-col gap-4 md:flex-row">
      <NuxtErrorBoundary>
        <CarSideBar />
        <CarCards v-if="cars.length" :cars="cars" />
        <NoCards v-else />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col gap-2">
            <h1 class="font-semibold">Sorry, something went wrong</h1>
            <code>{{ error }}</code>
            <button
              @click="error.value = null"
              class="bg-sky-400 p-2 rounded-xl hover:bg-sky-500 text-white transition duration-200 ease"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
    <Spinner v-else />
  </div>
</template>
