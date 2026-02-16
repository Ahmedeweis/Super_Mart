<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Today's Promotions</h2>
    <p class="text-gray-500 mb-4 md:mb-6 text-sm">Get the best offers from Super Mart Official Store</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="h-full rounded-xl overflow-hidden group cursor-pointer relative">
        <img src="../../assets/imgs/Today/00.png" class="w-full h-full object-cover group-hover:scale-110 transition" />
      </div>


      <div class="flex flex-col gap-4">
        <div
          class="bg-gray-800 rounded-xl flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer text-white">

          <img src="../../assets/imgs/Today/1.png"
            class=" w-full h-full object-cover opacity-50 group-hover:opacity-70 transition" />
        </div>

        <div
          class="bg-pink-100 rounded-xl  flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer">

          <img src="../../assets/imgs/Today/2.png"
            class=" w-full h-full object-cover group-hover:scale-110 transition" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="bg-pink-100 rounded-xl  flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer">

          <img src="../../assets/imgs/Today/3.png"
            class=" w-full h-full object-cover group-hover:scale-110 transition" />
        </div>
        <div
          class="bg-amber-900 rounded-xl  flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer text-white">

          <img src="../../assets/imgs/Today/4.png"
            class=" w-full h-full object-cover group-hover:scale-110 transition" />
        </div>

      </div>





    </div>
  </section>
</template>

<script setup>
</script>
