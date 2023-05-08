<template>
  <div
    class="relative grow bg-no-repeat bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1506610654-064fbba4780c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"
  >
    <div class="z-10 w-full absolute h-full flex justify-center pt-20">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Find your car</h1>
        <CarSearchBar />
        <!-- <div class="mt-5">
          <NuxtLink
            class="text-white text-3xl underline hover:text-sky-200 transition duration-200 ease"
            to="/cars"
            >See all cars
          </NuxtLink>
        </div> -->
        <div class="text-white mt-10">Will be carousel here</div>
        <Carousel />
      </div>
    </div>
    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>
