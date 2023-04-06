<script setup>
import { inputs } from "~~/utils/inputs";
import { uuid } from "vue-uuid";

definePageMeta({
  middleware: ["auth"],
});

const { makes } = useCars();
const user = useSupabaseUser();
const client = useSupabaseClient();
const errorMsg = ref("");
const isLoading = ref(false);

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null,
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const isDisabled = computed(() => {
  for (const key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});

const onSubmit = async () => {
  isLoading.value = true;
  const fileName = uuid.v4();
  const { data, error } = await client.storage
    .from("images")
    .upload(`public/${fileName}`, info.value.image);

  if (error) {
    isLoading.value = false;
    return (errorMsg.value = "Failed to upload an image");
  }

  const body = {
    ...info.value,
    city: info.value.city.toLowerCase(),
    make: info.value.make.toLowerCase(),
    model: info.value.model.toLowerCase(),
    features: info.value.features.split(", "),
    seats: +info.value.seats,
    miles: +info.value.miles,
    price: +info.value.price,
    year: +info.value.year,
    name: `${info.value.make} ${info.value.model}`,
    author: user.value.id,
    image: data.path,
  };

  try {
    const res = await $fetch("/api/car/listings", {
      method: "POST",
      body,
    });
    isLoading.value = false;
    navigateTo("/profile/listings");
  } catch (error) {
    isLoading.value = false;
    errorMsg.value = error.message;
    await client.storage.from("images").remove(data.path);
  }
};
</script>

<template>
  <div class="container mx-auto grow">
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
      <button
        :disabled="isDisabled"
        @click="onSubmit"
        class="bg-blue-400 text-white w-20 py-2 rounded-lg mt-4"
      >
        <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" />
        <p v-else>Submit</p>
      </button>
      <p v-if="errorMsg" class="text-red-700">{{ errorMsg }}</p>
    </div>
  </div>
</template>
