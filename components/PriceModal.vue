<script setup lang="ts">
const router = useRouter();
const priceRange = ref({
  min: "",
  max: "",
});

const applyPriceRange = () => {
  if (priceRange.value.min > priceRange.value.max) return;
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>

<template>
  <div
    class="absolute z-30 border shadow p-5 left-1/2 -translate-x-1/2 top-0 bg-white"
  >
    <input
      placeholder="Min"
      type="number"
      v-model="priceRange.min"
      class="border p-1 rounded w-full mb-2"
    />
    <input
      placeholder="Max"
      type="number"
      v-model="priceRange.max"
      class="border p-1 rounded w-full"
    />
    <button
      @click="applyPriceRange"
      class="bg-blue-400 w-full mt-2 rounded text-white p-1"
    >
      Apply
    </button>
  </div>
</template>
