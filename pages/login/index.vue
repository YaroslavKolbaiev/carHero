<script setup lang="ts">
const { loginWithGoogle, registerWithEmail, loginWithEmail } = useAuth();

const isLoading = ref(false);

const userCredentials = reactive({
  email: "",
  password: "",
});

const errorMsg = ref("");
const isRegistered = ref(true);

const onLoginWithWoogle = () => {
  isLoading.value = true;
  loginWithGoogle();
};

const onRegisterWithEamil = async () => {
  isLoading.value = true;
  try {
    await registerWithEmail({
      email: userCredentials.email,
      password: userCredentials.password,
    });
    isLoading.value = false;
    navigateTo("/");
  } catch (error: any) {
    isLoading.value = false;
    errorMsg.value = error.message;
  }
};

const onLoginWithEmail = async () => {
  isLoading.value = true;
  try {
    await loginWithEmail({
      email: userCredentials.email,
      password: userCredentials.password,
    });
    isLoading.value = false;
    navigateTo("/");
  } catch (error: any) {
    isLoading.value = false;
    errorMsg.value = error.message;
  }
};

watch(userCredentials, () => {
  errorMsg.value = "";
});
</script>

<template>
  <div class="container mx-auto grow max-w-md">
    <div class="flex flex-col items-center">
      <div class="shadow-lg w-full p-8 mt-10 flex flex-col items-center">
        <h1 class="text-3xl md:text-5xl mb-2 font-bold text-center">
          Authorization
        </h1>
        <div class="py-4 w-full">
          <input
            v-model="userCredentials.email"
            type="email"
            class="bg-gray-50 border outline-none mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email"
          />
          <input
            v-model="userCredentials.password"
            type="password"
            class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="password"
          />
        </div>
        <div
          v-if="isLoading"
          class="flex items-center justify-center w-full h-36 mb-4"
        >
          <Icon name="svg-spinners:bars-rotate-fade" size="4rem" />
        </div>
        <div v-else class="flex flex-col w-full h-36 gap-2 mb-4">
          <button
            v-if="isRegistered"
            @click="onLoginWithEmail"
            class="text-white border h-full border-blue-700 transition duration-200 ease bg-blue-700 active:scale-95 active:transition-none font-medium rounded-xl dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <p>Sign In</p>
          </button>
          <button
            v-else
            @click="onRegisterWithEamil"
            class="text-white border h-full border-blue-700 transition duration-200 ease bg-blue-700 active:scale-95 active:transition-none font-medium rounded-xl dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <p>Sign Up</p>
          </button>
          <button
            :disabled="isLoading"
            @click="onLoginWithWoogle"
            class="bg-sky-100 rounded-xl active:opacity-75"
          >
            <Icon name="logos:google" size="5rem" />
          </button>
        </div>
        <p>
          Not registered ?
          <button
            @click="isRegistered = !isRegistered"
            class="text-blue-700 underline active:opacity-80"
          >
            Sign Up
          </button>
        </p>
      </div>
      <p class="text-red-600 pt-5" v-if="errorMsg">{{ errorMsg }}</p>
    </div>
  </div>
</template>
