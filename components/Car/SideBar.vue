<script setup>
import { onClickOutside } from "@vueuse/core";
const {
  params: { city, make },
} = useRoute();
const route = useRoute();

const modal = ref({
  city: false,
  make: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const modalRef = ref(null);
const makeRef = ref(null);
const priceRef = ref(null);

const priceRangeValue = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  if (!minPrice && maxPrice) return `0 - ${maxPrice}`;
  if (minPrice && !maxPrice) return `${minPrice} - No limit`;

  return `${minPrice}-${maxPrice}`;
});

onClickOutside(modalRef, () => (modal.value.city = false), {
  ignore: [makeRef, priceRef],
});
onClickOutside(makeRef, () => (modal.value.make = false), {
  ignore: [modalRef, priceRef],
});
onClickOutside(priceRef, () => (modal.value.price = false), {
  ignore: [modalRef, makeRef],
});
</script>

<template>
  <div class="shadow w-full md:w-1/3 border h-48">
    <div class="p-5 flex relative justify-between cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="updateModal('city')" class="text-blue-400 capitalize">
        {{ city }}
      </h3>
      <LocationModal ref="modalRef" v-if="modal.city" />
    </div>

    <div class="p-5 relative flex justify-between cursor-pointer border-b">
      <h3>Make</h3>
      <h3 @click="updateModal('make')" class="text-blue-400 capitalize">
        {{ make || "any" }}
      </h3>
      <MakeSelect ref="makeRef" v-if="modal.make" />
    </div>

    <div class="p-5 flex relative justify-between cursor-pointer border-b">
      <h3>Price</h3>
      <h3 @click="updateModal('price')" class="text-blue-400">
        {{ priceRangeValue }}
      </h3>
      <PriceModal ref="priceRef" v-if="modal.price" />
    </div>
  </div>
</template>
