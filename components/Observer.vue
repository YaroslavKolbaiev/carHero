<script setup>
const observer = ref(null);
const dom = ref(null);
const emit = defineEmits(["intersect"]);

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  });

  observer.value.observe(dom.value);
});
</script>

<template>
  <div class="h-2 w-2" ref="dom"></div>
</template>
