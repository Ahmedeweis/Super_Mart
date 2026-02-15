<template>
  <section class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-gray-900">Weekly Offer</h2>
      <a href="#" class="text-xs text-gray-500 hover:text-red-500">All Categories</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       <!-- Card 1 -->
       <div class="bg-gray-100 rounded-2xl p-6 relative overflow-hidden h-64 flex items-center">
          <div class="relative z-10 w-1/2">
             <img src="https://placehold.co/150x150/transparent/png?text=Headphone" class="object-contain" />
          </div>
          <div class="relative z-10 w-1/2 pl-4">
             <div class="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg mb-2 absolute -top-10 -right-4 rotate-12 border-4 border-red-50">
                <span class="text-[10px] font-bold text-gray-500">UP TO</span>
                <span class="text-xl font-black text-red-500">30%</span>
                <span class="text-[10px] font-bold text-red-500">OFF</span>
             </div>
             <div class="mt-8">
                <div class="text-sm font-bold text-gray-800 mb-2">Special Offer</div>
                <button class="text-xs font-bold text-red-500 border-b border-red-500 pb-0.5">Add to Cart</button>
             </div>
          </div>
       </div>

       <!-- Card 2 -->
       <div class="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition">
          <img src="https://placehold.co/150x150/transparent/png?text=Dragon+Fruit" class="h-32 object-contain mb-4" />
          <h3 class="font-medium text-gray-900 mb-1">Product Name</h3>
          <div class="text-red-500 font-bold text-sm mb-3">$75.00</div>
          <button class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add to Cart</button>
       </div>

       <!-- Card 3 -->
       <div class="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition">
          <img src="https://placehold.co/150x150/transparent/png?text=Nike+Shoe" class="h-32 object-contain mb-4" />
          <h3 class="font-medium text-gray-900 mb-1">Nike Shoe</h3>
          <div class="text-red-500 font-bold text-sm mb-3">$75.00</div>
          <button class="bg-red-50 text-red-500 text-xs font-bold px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">Add to Cart</button>
       </div>
    </div>
  </section>
</template>

<script setup>
</script>
