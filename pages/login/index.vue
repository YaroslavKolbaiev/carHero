<script setup lang="ts">
const supabase = useSupabaseClient();
const isLoading = ref(false);
const login = async () => {
  isLoading.value = true;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    throw createError({
      statusCode: 400,
      message: error.message,
    });
  }
};
</script>

<template>
  <div class="grow flex justify-center">
    <div
      class="shadow-lg w-64 h-56 p-6 mt-10 flex flex-col items-center justify-between"
    >
      <h1 class="text-4xl md:text-5xl font-bold text-center">Log in</h1>
      <button
        :disabled="isLoading"
        @click="login"
        class="bg-sky-100 w-1/2 h-1/3 rounded-xl active:opacity-75"
      >
        <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" />
        <Icon v-else name="logos:google" size="4rem" />
      </button>
    </div>
  </div>
</template>
