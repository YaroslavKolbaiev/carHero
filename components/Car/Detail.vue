<script setup lang="ts">
const router = useRouter();
const {
  params: { id },
} = useRoute();

const { car } = await useFetchCarDetail(id);
const user = useSupabaseUser();
</script>

<template>
  <div
    v-if="car"
    class="
      mx-auto
      grow mt-4
      max-w-7xl
      space-y-4
      px-4
      xs:px-8
      sm:px-10
      lg:px-16
      pb-16
      w-3/5
    "
  >
    <CarDetailHero :selectedCar="car" />
    <CarAttributes :atribute="car.features" />
    <CarDescription :description="car.description" />
    <CarContact v-if="user" />
  </div>
  <div class="text-center grow pt-44 font-semibold text-2xl" v-else>
    <p class="mb-8">
      Car with id: <span class="text-red-600">{{ id }}</span> cant be found
    </p>
    <button
      class="
        bg-blue-700
        text-white
        py-2 px-4
        rounded-lg
        hover:bg-blue-500
        transition
        duration-200
        ease
      "
      @click="router.back"
    >
      Go Back
    </button>
  </div>
</template>
