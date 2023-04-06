<script setup lang="ts">
type Props = {
  description: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>
