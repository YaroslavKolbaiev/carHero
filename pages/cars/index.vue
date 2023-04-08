<script setup>
const cardIndex = ref(0);
const { data } = await useFetch(`/api/cars`, {
  params: { index: cardIndex.value },
});
const currentCars = ref(data);
const isEndOfData = ref(false);

const fetchNextData = async () => {
  const { data } = await useFetch(`/api/cars`, {
    params: { index: cardIndex.value + 12 },
  });

  if (!data.value) {
    isEndOfData.value = true;
    return;
  }

  currentCars.value = [...currentCars.value, ...data.value];
  cardIndex.value = cardIndex.value + 12;
};
</script>

<template>
  <div class="grow container mx-auto pt-20 px-10 mb-10">
    <h1 class="text-4xl font-semibold text-center mb-20">All available cars</h1>
    <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      <AllCars :currentCars="currentCars" />
    </div>
  </div>
  <Observer v-if="!isEndOfData" @intersect="fetchNextData" />
</template>
