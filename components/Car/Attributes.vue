<script setup lang="ts">
type Props = {
  atribute: string[];
};

const props = defineProps<Props>();
</script>

<template>
  <div class="mt-5 border-b pb-5">
    <div class="flex text-lg mt-2" v-for="feuture in atribute" :key="feuture">
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>
        {{ feuture }}
      </p>
    </div>
  </div>
</template>
