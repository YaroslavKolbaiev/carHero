<script setup>
const showRecentAdded = ref(false);

const onEndOfPage = () => {
  showRecentAdded.value = true;
};
</script>

<template>
  <div
    class="
      grow
      bg-no-repeat
      bg-cover
      bg-center
      bg-[url('https://images.unsplash.com/photo-1506610654-064fbba4780c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]
    "
  >
    <div class="fixed w-full h-full bg-black opacity-50"></div>
    <div class="w-full h-full flex justify-center pt-40">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-20 text-white drop-shadow-md">
          Find your car
        </h1>
        <CarSearchBar />
        <Carousel />
        <HowDoesItWork />
        <Transition name="fade">
          <RecentAdded v-if="showRecentAdded" />
        </Transition>
        <Observer v-if="!showRecentAdded" @intersect="onEndOfPage" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active {
  transition: all 2s ease;
}
</style>
