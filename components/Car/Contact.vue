<script setup>
const {
  params: { id },
} = useRoute();

const errorMsg = ref("");
const successMsg = ref("");
const user = useSupabaseUser();
const isLoading = ref(false);

const message = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const resetMessage = () => {
  message.name = "";
  message.email = "";
  message.phone = "";
  message.message = "";
};

const isDisabled = computed(() => {
  if (!message.name || !message.email || !message.phone || !message.message) {
    return true;
  }
  return false;
});

const onSubmit = async () => {
  isLoading.value = true;
  errorMsg.value = "";
  successMsg.value = "";
  try {
    const res = await $fetch(`/api/car/listings/${id}/message`, {
      headers: { Authorization: `Bearer ${user.value.aud}` },
      method: "POST",
      body: message,
    });
    successMsg.value = "Message sent !";
    resetMessage();
    isLoading.value = false;
  } catch (error) {
    errorMsg.value = error.statusMessage;
    resetMessage();
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="mt-10">
    <div class="flex gap-2 flex-col xl:flex-row justify-between">
      <input
        v-model="message.name"
        type="text"
        class="border p-1 grow"
        placeholder="Name"
      />
      <input
        v-model="message.email"
        type="text"
        class="border p-1 grow"
        placeholder="Email"
      />
      <input
        v-model="message.phone"
        type="text"
        class="border p-1 grow"
        placeholder="Phone"
      />
    </div>
    <div class="flex mt-4">
      <textarea
        v-model="message.message"
        class="border p-1 w-full"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      :disabled="isDisabled"
      @click="onSubmit"
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
    >
      <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" />
      <p v-else>Submit</p>
    </button>
    <p
      v-if="errorMsg"
      class="text-white bg-red-600 rounded-lg p-3 mt-4 text-center"
    >
      {{ errorMsg }}
    </p>
    <p
      v-if="successMsg"
      class="text-white bg-green-600 rounded-lg p-3 mt-4 text-center"
    >
      {{ successMsg }}
    </p>
  </div>
</template>
