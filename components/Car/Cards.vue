<script setup>
const favorite = useLocalStorage("favorite", {});
const { cars } = defineProps(["cars"]);

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="grow">
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favorite="car.id in favorite"
      />
    </ClientOnly>
  </div>
</template>
