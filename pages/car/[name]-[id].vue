<script setup>
const { capitalizer } = useUtility();

const {
  params: { name },
} = useRoute();
useHead({
  title: capitalizer(name),
});
</script>

<template>
  <CarDetail />
</template>
