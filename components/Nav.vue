<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw createError({
      statusCode: 400,
      message: error.message,
    });
  }

  navigateTo("/");
};
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">AutoHero</NuxtLink>
    <div class="flex text-md md:text-xl" v-if="user">
      <NuxtLink class="hover:text-blue-500" to="/profile/listings">
        Profile
      </NuxtLink>
      <span class="mx-2">|</span>
      <button @click="logOut" class="hover:text-red-500">Log Out</button>
    </div>
    <NuxtLink v-else class="hover:text-blue-500 text-xl" to="/login"
      >Log in</NuxtLink
    >
  </header>
</template>
