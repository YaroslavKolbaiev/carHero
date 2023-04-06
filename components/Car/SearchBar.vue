<script setup>
const search = ref("");
const isLoading = ref(false);

const searchHanlder = () => {
  isLoading.value = true;
  if (!search.value) {
    isLoading.value = false;
    return;
  }
  navigateTo(`/city/${search.value}/car`);
};
</script>

<template>
  <div
    class="font-serif text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      v-model="search"
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
    />
    <button
      @click="searchHanlder"
      class="bg-sky-500 w-32 md:w-44 text-white hover:bg-sky-400 transition duration-200 ease active:transition-none active:opacity-75"
    >
      <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" />
      <p class="text-sm md:text-lg" v-else>Search</p>
    </button>
  </div>
</template>
