<script setup lang="ts">
const {
  params: { city },
} = useRoute();
const { makes } = useCars();
const onChangeMake = (make: string) => {
  navigateTo(`/city/${city}/car/${make}`);
};
</script>

<template>
  <div
    class="absolute border flex w-full flex-wrap justify-between shadow p-5 left-1/2 -translate-x-1/2 top-0 bg-white z-30"
  >
    <h4
      v-for="make in makes"
      :key="make"
      class="w-1/3 text-xs md:text-base"
      @click="onChangeMake(make)"
    >
      {{ make }}
    </h4>
  </div>
</template>
