<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { params } = useRoute();

const { data: messages } = await useFetch(
  `/api/car/listings/${params.id}/message`
);
</script>

<template>
  <div class="rounded shadow mt-20 grow">
    <CarMessageCard
      v-for="message in messages"
      v-if="messages.length"
      :key="message.id"
      :message="message"
    />
    <div v-else class="flex justify-center">
      <p class="max-w-sm bg-slate-300 py-3 px-6 rounded-lg text-2xl">
        No messages yet
      </p>
    </div>
  </div>
</template>
