<template>
  <section class="container mx-auto px-4 py-6 md:py-8">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Today's Promotions</h2>
    <p class="text-gray-500 mb-4 md:mb-6 text-sm">Get the best offers from Emmable Official Store</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-orange-100 rounded-xl p-6 flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer">
          <div class="relative z-10">
              <div class="text-xs font-bold text-orange-600 mb-1">ALL NORA PRODUCT</div>
              <div class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Discount up to <br/> <span class="text-3xl md:text-4xl text-white bg-orange-400 px-2 rounded-lg inline-block mt-1">35%</span></div>
          </div>
          <img src="https://placehold.co/150x150/orange/white?text=Nora" class="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 rounded-full group-hover:scale-110 transition" />
        </div>

        <div class="bg-gray-800 rounded-xl p-6 flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer text-white">
          <div class="relative z-10">
              <div class="text-xs font-bold text-gray-400 mb-1">ROMBO</div>
              <div class="text-xl md:text-2xl font-bold mb-2">25% OFF</div>
          </div>
          <img src="https://placehold.co/150x150/333/white?text=Picks" class="absolute bottom-0 right-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition" />
        </div>

        <div class="bg-pink-100 rounded-xl p-6 flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer">
          <div class="relative z-10">
              <div class="text-xl md:text-2xl font-bold text-pink-600 mb-1">GET <br/> SPECIAL <br/> DISCOUNT</div>
              <div class="text-sm font-bold text-gray-600">START FROM <span class="text-xl md:text-2xl text-pink-500">$8</span></div>
          </div>
          <img src="https://placehold.co/150x150/pink/white?text=Beauty" class="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 object-cover group-hover:scale-110 transition" />
        </div>

        <div class="bg-amber-900 rounded-xl p-6 flex flex-col justify-between h-40 md:h-48 relative overflow-hidden group cursor-pointer text-white">
          <div class="relative z-10">
              <div class="text-xl md:text-2xl font-serif italic mb-1">Gibson</div>
              <div class="text-lg md:text-xl font-bold mb-2">DISCOUNT <br/> UP TO 35%</div>
          </div>
          <img src="https://placehold.co/150x150/brown/white?text=Guitar" class="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 object-cover group-hover:scale-110 transition" />
        </div>
    </div>
  </section>
</template>

<script setup>
</script>
