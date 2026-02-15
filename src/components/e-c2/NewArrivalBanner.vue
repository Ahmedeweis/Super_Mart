<template>
  <section class="container mx-auto px-4 py-8">
    <div class="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center justify-between">
       <div class="relative z-10 max-w-lg">
          <h3 class="font-handwriting text-3xl text-gray-600 mb-2">New Arrival</h3>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Today's best Offer</h2>
          <button class="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition shadow-lg shadow-red-200">Shop Now</button>
       </div>

       <div class="flex items-center gap-8 relative z-10 hidden md:flex">
          <div class="text-center">
             <div class="text-xs text-gray-500 mb-1">SAVE UP TO</div>
             <div class="text-5xl font-black text-red-500">49<span class="text-2xl">%</span></div>
             <div class="text-xs text-gray-400">+ Free Delivery</div>
          </div>
          <img src="https://placehold.co/300x200/transparent/png?text=Bag+Set" class="object-contain drop-shadow-xl" />
       </div>

       <!-- Decor -->
       <div class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
       <div class="absolute bottom-0 left-1/4 w-12 h-12 bg-yellow-200 rounded-full blur-xl opacity-50"></div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.font-handwriting {
  font-family: 'Brush Script MT', cursive;
}
</style>
