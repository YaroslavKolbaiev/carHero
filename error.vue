<script setup lang="ts">
const error = useError();
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="
            mb-4 
            text-5xl 
            tracking-tight 
            font-extrabold 
            text-gray-600 
            dark:text-gray-400
          "
        >
          {{ error?.message }}
        </h1>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <NuxtLink
          to="/"
          class="inline-flex 
            text-white 
            bg-blue-500 
            hover:bg-blue-800 
            active:ring-4 
            active:outline-none 
            focus:ring-primary-300 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            text-center 
            dark:focus:ring-primary-900 
            my-4
          "
        >
          Back to Homepage
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
