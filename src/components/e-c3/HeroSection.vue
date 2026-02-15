<template>
  <section class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
       <!-- Main Banner -->
       <div class="lg:col-span-8 bg-orange-500 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <div class="relative z-10 max-w-lg text-white">
             <div class="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">LIMITED OFFER 25% OFF</div>
             <h2 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">Organic Fruit <br/> For Your Family's <br/> Health</h2>
             <p class="text-sm opacity-90 mb-8">Save 25% on Papaya Fresh and Ripe</p>
             <button class="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition">Shop Now</button>
          </div>

          <!-- Image Composition -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
             <div class="absolute inset-0 bg-orange-400 rounded-full blur-3xl opacity-50 transform scale-150"></div>
             <img src="https://placehold.co/400x400/transparent/png?text=Papaya" class="relative z-10 object-contain drop-shadow-2xl" />
             <!-- Splash effects could be added here with absolute positioning -->
          </div>

          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
             <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
             <div class="w-8 h-2 rounded-full bg-white"></div>
             <div class="w-2 h-2 rounded-full bg-white opacity-50"></div>
          </div>
       </div>

       <!-- Side Banners -->
       <div class="lg:col-span-4 flex flex-col gap-6">
          <!-- Top Side Banner -->
          <div class="bg-green-50 rounded-3xl p-6 relative overflow-hidden flex-1 min-h-[180px] flex items-center">
             <div class="relative z-10 w-2/3">
                <div class="text-xs text-green-600 font-bold mb-1">Weekend Discount 20%</div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">Everyday Fresh & <br/> Clean Products</h3>
                <button class="bg-green-500 text-white text-xs px-4 py-2 rounded-md font-bold hover:bg-green-600 transition">Shop Now</button>
             </div>
             <img src="https://placehold.co/150x150/transparent/png?text=Rice" class="absolute right-0 bottom-0 w-32 object-contain" />
          </div>

          <!-- Bottom Side Banner -->
          <div class="bg-pink-50 rounded-3xl p-6 relative overflow-hidden flex-1 min-h-[180px] flex items-center">
             <div class="relative z-10 w-2/3">
                <div class="text-xs text-red-500 font-bold mb-1">Weekend Discount 20%</div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">Summer Shoe <br/> Collection</h3>
                <button class="bg-red-500 text-white text-xs px-4 py-2 rounded-md font-bold hover:bg-red-600 transition">Shop Now</button>
             </div>
             <img src="https://placehold.co/150x150/transparent/png?text=Shoe" class="absolute right-0 bottom-0 w-32 object-contain" />
          </div>
       </div>
    </div>
  </section>
</template>

<script setup>
</script>
