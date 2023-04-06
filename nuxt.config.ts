// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      supabaseStorageUrl: process.env.SUPABASE_STORAGE_URL,
    },
  },
});
