<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const { data: listings } = await useFetch(
  `/api/car/listings/user/${user.value.id}`
);

const onCarDelete = async (id) => {
  await $fetch(`/api/car/listings/delete/${id}`, {
    method: "DELETE",
  });
  listings.value = listings.value.filter((listing) => listing.id !== id);
};
</script>

<template>
  <div class="container mx-auto grow">
    <div class="flex justify-between mt-24 items-center px-3">
      <h1 class="text-3xl md:text-5xl">My Listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="
          w-9 
          h-9 
          bg-blue-400 
          flex 
          justify-center 
          items-center 
          rounded-full 
          text-white 
          font-bold 
          cursor-pointer
        "
      >
        <Icon name="ph:plus-bold" />
      </NuxtLink>
    </div>
    <div class="shadow-lg rounded mb-2 p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @delete-car="onCarDelete"
      />
    </div>
  </div>
</template>
